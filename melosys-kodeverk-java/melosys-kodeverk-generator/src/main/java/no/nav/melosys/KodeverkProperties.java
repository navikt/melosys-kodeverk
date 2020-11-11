package no.nav.melosys;

import java.util.List;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;
import org.springframework.validation.annotation.Validated;

@Component
@Validated
@ConfigurationProperties("generator")
public class KodeverkProperties {

    @NotNull
    private List<String> lovvalgBestemmelseEnumFiler;

    @NotNull
    private List<String> folketrygdenBestemmelseEnumFiler;

    @NotBlank
    private String pakkeNavn;

    @NotNull
    private Generert generert;

    @NotNull
    private Ressurser ressurser;

    public List<String> getLovvalgBestemmelseEnumFiler() {
        return lovvalgBestemmelseEnumFiler;
    }

    public void setLovvalgBestemmelseEnumFiler(final List<String> lovvalgBestemmelseEnumFiler) {
        this.lovvalgBestemmelseEnumFiler = lovvalgBestemmelseEnumFiler;
    }

    public List<String> getFolketrygdenBestemmelseEnumFiler() {
        return folketrygdenBestemmelseEnumFiler;
    }

    public void setFolketrygdenBestemmelseEnumFiler(List<String> folketrygdenBestemmelseEnumFiler) {
        this.folketrygdenBestemmelseEnumFiler = folketrygdenBestemmelseEnumFiler;
    }

    public String getPakkeNavn() {
        return pakkeNavn;
    }

    public void setPakkeNavn(final String pakkeNavn) {
        this.pakkeNavn = pakkeNavn;
    }

    public Generert getGenerert() {
        return generert;
    }

    public void setGenerert(final Generert generert) {
        this.generert = generert;
    }

    public Ressurser getRessurser() {
        return ressurser;
    }

    public void setRessurser(final Ressurser ressurser) {
        this.ressurser = ressurser;
    }

    public static class Generert {
        @NotBlank
        private String modulMappe;

        @NotBlank
        private String kildekodeMappe;

        @NotBlank
        private String kodeverkMappe;

        public String getModulMappe() {
            return modulMappe;
        }

        public void setModulMappe(final String modulMappe) {
            this.modulMappe = modulMappe;
        }

        public String getKildekodeMappe() {
            return kildekodeMappe;
        }

        public void setKildekodeMappe(final String kildekodeMappe) {
            this.kildekodeMappe = kildekodeMappe;
        }

        public String getKodeverkMappe() {
            return kodeverkMappe;
        }

        public void setKodeverkMappe(final String kodeverkMappe) {
            this.kodeverkMappe = kodeverkMappe;
        }
    }

    public static class Ressurser {

        @NotNull
        private List<String> standardEnumFiler;

        @NotBlank
        private String templateMappe;

        @NotBlank
        private String kodeverkTemplate;

        public List<String> getStandardEnumFiler() {
            return standardEnumFiler;
        }

        public void setStandardEnumFiler(final List<String> standardEnumFiler) {
            this.standardEnumFiler = standardEnumFiler;
        }

        public String getTemplateMappe() {
            return templateMappe;
        }

        public void setTemplateMappe(final String templateMappe) {
            this.templateMappe = templateMappe;
        }

        public String getKodeverkTemplate() {
            return kodeverkTemplate;
        }

        public void setKodeverkTemplate(final String kodeverkTemplate) {
            this.kodeverkTemplate = kodeverkTemplate;
        }
    }
}
