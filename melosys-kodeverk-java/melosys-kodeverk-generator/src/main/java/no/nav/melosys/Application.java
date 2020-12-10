package no.nav.melosys;

import no.nav.melosys.service.FileService;
import no.nav.melosys.service.KodeverkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.Banner;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.core.env.Environment;

@SpringBootApplication
public class Application implements CommandLineRunner {

    private final KodeverkService kodeverkService;
    private final FileService fileService;
    private final Environment environment;
    
    @Autowired
    public Application(final KodeverkService kodeverkService, final FileService fileService, final Environment environment) {
        this.kodeverkService = kodeverkService;
        this.fileService = fileService;
        this.environment = environment;
    }

    public static void main(final String[] args) {
        SpringApplication app = new SpringApplication(Application.class);
        app.setBannerMode(Banner.Mode.OFF);
        app.run(args);
    }

    @Override
    public void run(final String... args)  {
        InputHelper inputHelper = new InputHelper(fileService, environment, args);
        
        String versjon = inputHelper.getVersjon();
        String yaml = inputHelper.getYaml();

        kodeverkService.yamlTilJavaKildeFiler(versjon, yaml);
    }
}

