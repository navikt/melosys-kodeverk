package no.nav.melosys.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Map;

import no.nav.melosys.KodeverkProperties;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = {KodeverkService.class, FileService.class, KildekodeGeneratorService.class, FreeMarkerTemplateService.class})
public class KodeverkServiceIT extends AssertionValidator {

    @Autowired
    private KodeverkService kodeverkService;

    @Autowired
    private KodeverkProperties kodeverkProperties;
    
    @Autowired
    private FileService fileService;

    private String yamlFil;
    private String versjon;
    
    @BeforeEach
    public void setup() {
        yamlFil = fileService.lesFilSomString(Paths.get("melosys-kodeverk-generator/src/test/resources/dist/kodemap.yml"));
        versjon = fileService.lesFilSomString(Paths.get("melosys-kodeverk-generator/src/test/resources/dist/semver.txt"));
    }
    
    @Test
    public void lagJavaClass_objectIkkeNull_generereJavaSourceFil() {
        Map<String, Object> melosysInternKodeverkMap = kodeverkService.lesKodeverkStrukturFraYaml(yamlFil);

        assertNotNull(melosysInternKodeverkMap);
    }

    @Test
    public void lagSourceCode_sourceFilIkkeNull_skrivJavaSourceCode() throws IOException {
        kodeverkService.yamlTilJavaKildeFiler(versjon, yamlFil);
        File aktoerRoller = new File(kodeverkProperties.getGenerert().getKodeverkMappe() + "/Aktoersroller.java");
        assertTrue(aktoerRoller.exists());
        String contents = new String(Files.readAllBytes(Paths.get(aktoerRoller.toString())));
        validerEnumVerdier(contents);
    }

    @Test
    public void kopiStandardJavaFiler_fraResources_kopiererFiler() {
        kodeverkService.opprettStandardFiler(versjon);
        assertTrue(new File(kodeverkProperties.getGenerert().getKodeverkMappe() + "/Kodeverk.java").exists());
    }
}
