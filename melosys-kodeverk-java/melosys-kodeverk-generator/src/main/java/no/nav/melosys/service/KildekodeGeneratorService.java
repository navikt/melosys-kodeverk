package no.nav.melosys.service;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import freemarker.template.TemplateException;
import no.nav.melosys.KodeverkException;
import no.nav.melosys.KodeverkProperties;
import no.nav.melosys.Kodeverksdefinisjon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import static java.util.stream.Collectors.joining;

@Component
public class KildekodeGeneratorService {

    private final FreeMarkerTemplateService freeMarkerTemplateService;

    private final KodeverkProperties kodeverkProperties;

    private static final String PARENT = "parent";

    @Autowired
    public KildekodeGeneratorService(KodeverkProperties kodeverkProperties,
                                     FreeMarkerTemplateService freeMarkerTemplateService) {
        this.kodeverkProperties = kodeverkProperties;
        this.freeMarkerTemplateService = freeMarkerTemplateService;
    }

    String genererEnumKildeKode(Kodeverksdefinisjon kodeverksdefinisjon) {
        Map<String, String> root = new HashMap();

        String enumList = kodeverksdefinisjon.enumVerdier.stream()
            .map(this::formaterEnumVerdi)
            .collect(joining(",\n\t", "", ";"));

        root.put("enumVerdi", enumList);
        root.put("classNavn", kodeverksdefinisjon.enumNavn);
        root.put("package", kodeverksdefinisjon.javapakke);

        if (kodeverkProperties.getLovvalgBestemmelseEnumFiler().contains(kodeverksdefinisjon.enumNavn)) {
            root.put(PARENT, "LovvalgBestemmelse");
        } else if (kodeverkProperties.getFolketrygdenBestemmelseEnumFiler().contains(kodeverksdefinisjon.enumNavn)) {
            root.put(PARENT, "Bestemmelse");
        } else {
            root.put(PARENT, "Kodeverk");
        }

        try {
            return freeMarkerTemplateService.generereKildeKodeFraTemplate(root, kodeverkProperties.getRessurser().getKodeverkTemplate());
        } catch (IOException | TemplateException e) {
            throw new KodeverkException("Lagring av Java-fil feilet for classNavn " + kodeverksdefinisjon.enumNavn, e);
        }
    }

    private String formaterEnumVerdi(Map<String, Object> map) {
        return String.format(map.get("term") == null ? "%s(%s)" : "%s(\"%s\")", map.get("kode"), map.get("term") );
    }
}
