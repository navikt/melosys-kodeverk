package no.nav.melosys;

import java.util.List;
import java.util.Map;

import static org.springframework.util.StringUtils.capitalize;

public class Kodeverksdefinisjon {
    public final String enumNavn;
    public final String javapakke;
    public final List<Map<String, Object>> enumVerdier;

    public Kodeverksdefinisjon(final String enumNavn, final String javapakke, final List<Map<String, Object>> enumVerdier) {
        this.enumNavn = capitalize(enumNavn);
        this.javapakke = javapakke;
        this.enumVerdier = enumVerdier;
    }
}
