<#ftl output_format="undefined" encoding="utf-8" auto_esc=false>
package ${package};

<#if package != 'no.nav.melosys.domain.kodeverk'> 
import no.nav.melosys.domain.kodeverk.${parent};

</#if>
public enum ${classNavn} implements ${parent} {

    ${enumVerdi}

    private final String beskrivelse;

    ${classNavn}(String beskrivelse) {
        this.beskrivelse = beskrivelse;
    }

    @Override
    public String getKode() {
        return name();
    }

    @Override
    public String getBeskrivelse() {
        return beskrivelse;
    }
}
