package no.nav.melosys.service;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import static org.junit.jupiter.api.Assertions.assertTrue;

public class FileServiceIT {

    private static final String PATH = "melosys-internt-kodeverk/generator.generert.modul-mappe//src/main/java/no/nav/melosys/domain/kodeverk";
    
    @Autowired
    FileService fileService;
    
    @Test
    public void lagJavaPackageMapper_forGittSti_mappenErOpprettet() {
        Path mappe = Paths.get(PATH);
        fileService.opprettMappe(mappe);
        assertTrue(Files.exists(mappe));
    }
}