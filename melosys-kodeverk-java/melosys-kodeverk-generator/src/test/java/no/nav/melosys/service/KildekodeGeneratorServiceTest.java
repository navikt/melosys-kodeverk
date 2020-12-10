package no.nav.melosys.service;

import java.io.IOException;
import java.util.*;

import no.nav.melosys.KodeverkProperties;
import no.nav.melosys.Kodeverksdefinisjon;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.core.io.ClassPathResource;

import static java.util.Arrays.asList;
import static java.util.Collections.singletonList;
import static org.junit.jupiter.api.Assertions.assertTrue;

public class KildekodeGeneratorServiceTest extends AssertionValidator {

    private static final String PACKAGE_PATH = "no.nav.melosys.domain.kodeverk";
    private FreeMarkerTemplateService freeMarkerTemplateService;

    private KildekodeGeneratorService kildekodeGeneratorService;

    private KodeverkProperties kodeverkProperties;

    @BeforeEach
    public void setUp() throws IOException {
        kodeverkProperties = new KodeverkProperties();
        kodeverkProperties.setRessurser(new KodeverkProperties.Ressurser());
        kodeverkProperties.setLovvalgBestemmelseEnumFiler(Collections.emptyList());
        kodeverkProperties.setFolketrygdenBestemmelseEnumFiler(Collections.emptyList());
        kodeverkProperties.getRessurser().setTemplateMappe("templates");
        kodeverkProperties.getRessurser().setKodeverkTemplate("Kodeverk.ftlh");
        freeMarkerTemplateService = new FreeMarkerTemplateService(kodeverkProperties);
        freeMarkerTemplateService.getCfg().setDirectoryForTemplateLoading(new ClassPathResource("templates").getFile());
    }

    @Test
    public void genererEnumKildeKodeForInterntKodeverkTabell_classNavnOgEnumInformasjonFinnes_kildeKodenErGenerert() {
        kildekodeGeneratorService = new KildekodeGeneratorService(
            kodeverkProperties,
            freeMarkerTemplateService);

        List<Map<String, Object>> kodeTermer = asList(
                lagMapForKodeTerm("BRUKER", "BRUKER"),
                lagMapForKodeTerm("ARBEIDSGIVER", "ARBEIDSGIVER"),
                lagMapForKodeTerm("REPRESENTANT", "REPRESENTANT"),
                lagMapForKodeTerm("MYNDIGHET", "MYNDIGHET")

        );

        String kildeKode = kildekodeGeneratorService.genererEnumKildeKode(new Kodeverksdefinisjon("Aktoerroller", PACKAGE_PATH, kodeTermer));
        validerEnumVerdier(kildeKode);
    }

    @Test
    public void genererEnumKildeKode_valueIMapErNull_genererKildeKoden() {
        kildekodeGeneratorService = new KildekodeGeneratorService(
            kodeverkProperties,
            freeMarkerTemplateService);

        List<Map<String, Object>> kodeTermer = asList(
                lagMapForKodeTerm("BRUKER", null),
                lagMapForKodeTerm("ARBEIDSGIVER", null),
                lagMapForKodeTerm("REPRESENTANT", null),
                lagMapForKodeTerm("MYNDIGHET", null)
        );

        String kildeKode = kildekodeGeneratorService.genererEnumKildeKode(new Kodeverksdefinisjon("Aktoerroller", PACKAGE_PATH, kodeTermer));
        validerEnumVerdier(kildeKode);
    }

    @Test
    public void velgTemplateType_classNavnFinnesList_velgRiktigTemplate() {
        kodeverkProperties.setLovvalgBestemmelseEnumFiler(singletonList("Forordning_883_2004"));

        kildekodeGeneratorService = Mockito.spy(new KildekodeGeneratorService(
            kodeverkProperties,
            freeMarkerTemplateService));

        List<Map<String, Object>> kodeTermer = singletonList(lagMapForKodeTerm("term", "beskrivelse"));
        String kildeKode = kildekodeGeneratorService.genererEnumKildeKode(new Kodeverksdefinisjon("Aktoerroller", PACKAGE_PATH, kodeTermer));
        assertTrue(kildeKode.contains("implements Kodeverk"));

        kildeKode = kildekodeGeneratorService.genererEnumKildeKode(new Kodeverksdefinisjon("Forordning_883_2004", PACKAGE_PATH, kodeTermer));
        assertTrue(kildeKode.contains("implements LovvalgBestemmelse"));
    }

    private Map<String, Object> lagMapForKodeTerm(String kode, String term) {
        Map<String, Object> map = new HashMap<>();
        map.put("kode", kode);
        map.put("term", term);
        return map;
    }
}
