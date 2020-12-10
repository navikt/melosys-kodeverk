package no.nav.melosys.service;

import java.nio.file.Path;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import no.nav.melosys.KodeverkProperties;
import no.nav.melosys.Kodeverksdefinisjon;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.yaml.snakeyaml.Yaml;

import static java.nio.file.Paths.get;

@Component
public class KodeverkService {

    private final KodeverkProperties kodeverkProperties;
    private final KildekodeGeneratorService kildekodeGeneratorService;
    private final FileService fileService;
    private final KodeverkParser kodeverkParser = new KodeverkParser();

    @Autowired
    public KodeverkService(KildekodeGeneratorService kildekodeGeneratorService, FileService fileService, KodeverkProperties kodeverkProperties) {
        this.fileService = fileService;
        this.kildekodeGeneratorService = kildekodeGeneratorService;
        this.kodeverkProperties = kodeverkProperties;
    }

    public void yamlTilJavaKildeFiler(String versjon, String yaml) {
        opprettStandardFiler(versjon);
        genererKodeverkFiler(yaml);
    }

    void opprettStandardFiler(String versjon) {
        fileService.slettMappe(get(kodeverkProperties.getGenerert().getKildekodeMappe()));
        fileService.opprettMappe(get(filstiForJavaPakke(kodeverkProperties.getPakkeNavn())));
        opprettPom(versjon);
        opprettStandardEnumFiler();
    }

    private void opprettPom(String versjon) {
        String pomTemplate = fileService.lesRessursSomString(kodeverkProperties.getRessurser().getTemplateMappe(), "pom.xml");
        String generertPomInnhold = versjon == null ? pomTemplate : String.format(pomTemplate, versjon);
        Path filnavn = get(kodeverkProperties.getGenerert().getModulMappe()).resolve("pom.xml");
        fileService.skrivTilFil(filnavn, generertPomInnhold);
    }

    private void opprettStandardEnumFiler() {
        kodeverkProperties.getRessurser().getStandardEnumFiler()
                .forEach(standardEnumFil ->
                        fileService.kopierRessursTilMappe(kodeverkProperties.getRessurser().getTemplateMappe(),
                                standardEnumFil,
                                filstiForJavaPakke(kodeverkProperties.getPakkeNavn()),
                                standardEnumFil + ".java"));
    }

    private void genererKodeverkFiler(String yaml) {
        List<Kodeverksdefinisjon> kodeverksliste = kodeverkParser.traverserStruktur(lesKodeverkStrukturFraYaml(yaml), kodeverkProperties.getPakkeNavn());
        Map<String, Boolean> opprettedeMapper = new HashMap<>();
        
        kodeverksliste.forEach(kodeverksklasse -> {
            sjekkOpprettMappe(opprettedeMapper, kodeverksklasse);
            opprettJavaEnumKildekode(kodeverksklasse);
        });        
    }

    Map<String, Object> lesKodeverkStrukturFraYaml(String yamlString) {
        Yaml yaml = new Yaml();
        yaml.load(yamlString);

        return yaml.load(yamlString);
    }

    private void sjekkOpprettMappe(Map<String, Boolean> pakkeOpprettet, Kodeverksdefinisjon kodeverksklasse) {
        if (!pakkeOpprettet.containsKey(kodeverksklasse.javapakke)) {
            fileService.opprettMappe(get(filstiForJavaPakke(kodeverksklasse.javapakke)));
            pakkeOpprettet.put(kodeverksklasse.javapakke, Boolean.TRUE);
        }
    }

    private void opprettJavaEnumKildekode(Kodeverksdefinisjon kodeverksdefinisjon) {
        String kildekode = kildekodeGeneratorService.genererEnumKildeKode(kodeverksdefinisjon);

        Path kildekodeFil = get(filstiForJavaPakke(kodeverksdefinisjon.javapakke)).resolve(kodeverksdefinisjon.enumNavn + ".java");
        
        fileService.skrivTilFil(kildekodeFil, kildekode);
    }

    private String filstiForJavaPakke(String pakkenavn) {
        return kodeverkProperties.getGenerert().getKildekodeMappe() + '/' + pakkenavn.replace(".", "/");
    }
}
