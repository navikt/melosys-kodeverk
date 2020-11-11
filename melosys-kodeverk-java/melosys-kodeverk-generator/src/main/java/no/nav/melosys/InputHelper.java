package no.nav.melosys;

import java.io.IOException;
import java.nio.file.Path;
import java.util.HashMap;
import java.util.Map;

import com.fasterxml.jackson.databind.ObjectMapper;
import no.nav.melosys.service.FileService;
import org.springframework.core.env.Environment;

import static java.nio.file.Paths.get;
import static no.nav.melosys.InputHelper.InputType.*;

class InputHelper {

    public static final String MELOSYS_KODEVERK_FRONTEND = "MELOSYS_KODEVERK_FRONTEND";
    
    FileService fileService;
    Environment environment;
    
    String[] args;
    String yaml;
    String versjon;
    InputType inputType;
    String melosysKodeverkFrontendProperty;
    
    private InputHelper() {
    }
    
    InputHelper(FileService fileService, Environment environment, String... args) {
        this.fileService = fileService;
        this.environment = environment;
        this.args = args;
    }

    public String getYaml() {
        if (yaml == null) {
            utledYaml();
        }
        return yaml;
    }

    public String getVersjon() {
        if (versjon == null) {
            utledVersjon();
        }
        return versjon;
    }

    public InputType getInputType() {
        if (inputType == null) {
            utledInputType();
        }
        return inputType;
    }

    void utledVersjon() {
        if (inputType == null) {
            utledInputType();
        }
        switch (inputType) {
            case ARGS:
                if (args.length > 1) {
                    versjon = formaterVersjon(fileService.lesFilSomString(get(args[1])));
                } else {
                    versjon = null;
                }
                break;
            case LATEST:
                Path latestPath = get("melosys-kodeverk-generator/node_modules/melosys-kodeverk/dist/");
                versjon = formaterVersjon(fileService.lesFilSomString(latestPath.resolve("semver.txt")));
                break;
            case PROJECT:
                Path projectPath = get(melosysKodeverkFrontendProperty);
                Map<String, Object> packageJson = lesStrukturFraJson(fileService.lesFilSomString(projectPath.resolve("package.json")));
                versjon = formaterVersjon(packageJson.get("version").toString());
                break;
        }
    } 
    
    void utledYaml() {
        if (inputType == null) {
            utledInputType();
        }
        Path yamlPath;
        switch (inputType) {
            case ARGS:
                yamlPath = get(args[0]);
                break;
            case LATEST:
                Path latestPath = get("melosys-kodeverk-generator/node_modules/melosys-kodeverk/dist/");
                yamlPath = latestPath.resolve("kodemap.yml");
                break;
            case PROJECT:
                Path projectPath = get(melosysKodeverkFrontendProperty);
                yamlPath = projectPath.resolve("dist/kodemap.yml");
                break;
            default: throw new KodeverkException("Ugyldig input-type");
        }
        yaml = fileService.lesFilSomString(yamlPath);

    }

    void utledInputType() {
        melosysKodeverkFrontendProperty = getProperty(MELOSYS_KODEVERK_FRONTEND);
        if (melosysKodeverkFrontendProperty != null) {
            if ("args".equals(melosysKodeverkFrontendProperty)) {
                inputType = ARGS;
            } else if ("latest".equals(melosysKodeverkFrontendProperty)) {
                inputType = LATEST;
            } else {
                inputType = PROJECT;
            }
        } else if (args != null && args.length > 0) {
            inputType = ARGS;
        } else {
            throw new KodeverkException("Har verken environment-/system-variabel eller input-argumenter for versjon/yaml.");
        }
    }

    String getProperty(String propertyName) {
        if (environment.getProperty(propertyName) != null) {
            return environment.getProperty(propertyName);
        } else if (System.getenv(propertyName) != null) {
            return System.getenv(propertyName);
        } else if (System.getProperty(propertyName) != null) {
            return System.getProperty(propertyName);
        }
        return null;
    }

    String formaterVersjon(String versjon) {
        if (versjon.contains(":")) {
            return versjon.replace(':', '-').trim();
        }

        return versjon.trim();
    }

    Map<String, Object> lesStrukturFraJson(String json) {
        ObjectMapper mapper = new ObjectMapper();

        try {
            return mapper.readValue(json, HashMap.class);
        } catch (IOException e) {
            throw new KodeverkException("Feilet å mappe om fil til JSON-struktur", e);
        }
    }

    enum InputType {
        ARGS, LATEST, PROJECT 
    }
}
