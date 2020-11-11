package no.nav.melosys.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

import no.nav.melosys.KodeverkException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.springframework.util.FileCopyUtils;
import org.springframework.util.FileSystemUtils;

import static java.nio.charset.StandardCharsets.UTF_8;
import static java.nio.file.Paths.get;

@Component
public class FileService {

    private static final Logger LOGGER = LoggerFactory.getLogger(FileService.class);

    public String lesFilSomString(String path) {
        return lesFilSomString(get(path));
    }
    
    public String lesFilSomString(Path path) {
        try {
            return new String(Files.readAllBytes(path), UTF_8);
        } catch (IOException e) {
            throw new KodeverkException("Fillesing feilet", e);
        }
    }

    public String lesRessursSomString(String mappe, String fil) {
        return new String(lesRessursSomByteArray(mappe, fil), UTF_8);
    }

    private byte[] lesRessursSomByteArray(String mappe, String fil) {
        try {
            ClassPathResource in = new ClassPathResource(mappe + '/' + fil);
            return FileCopyUtils.copyToByteArray(in.getInputStream());
        } catch (IOException e) {
            throw new KodeverkException("Lesing av ressurs feilet", e);
        }
    }

    public void kopierRessursTilMappe(String mappeIn, String filIn, String mappeUt, String filUt) {
            byte[] bytes = lesRessursSomByteArray(mappeIn, filIn);
            skrivTilFil(get(mappeUt).resolve(filUt), bytes);
    }

    public void skrivTilFil(Path filnavn, String innhold) {
        skrivTilFil(filnavn, innhold.getBytes(UTF_8));
    }

    private void skrivTilFil(Path filnavn, byte[] innhold) {
        try {
            LOGGER.info("Skriver til fil {}", filnavn.toAbsolutePath());
            Files.write(filnavn, innhold);
        } catch (IOException e) {
            throw new KodeverkException("Feilet å skrive til fil " + filnavn, e);
        }
    }

    public void opprettMappe(Path mappe) {
        try {
            Files.createDirectories(mappe);
        } catch (IOException e) {
            throw new KodeverkException("Kunne ikke opprette mappe " + mappe, e);
        }
    }

    public void slettMappe(Path mappe) {
        try {
            FileSystemUtils.deleteRecursively(mappe);
        } catch (IOException e) {
            throw new KodeverkException("Kunne ikke slette mappe " + mappe, e);
        }
    }
}