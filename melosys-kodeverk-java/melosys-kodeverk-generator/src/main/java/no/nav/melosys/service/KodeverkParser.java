package no.nav.melosys.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import no.nav.melosys.KodeverkException;
import no.nav.melosys.Kodeverksdefinisjon;

public class KodeverkParser {
    
    public List<Kodeverksdefinisjon> traverserStruktur(Map<String, Object> map, String javaPakke) {
        List<Kodeverksdefinisjon> kodeverksklasser = new ArrayList<>();
        
        map.forEach((key, value) -> {
                    if (harKodeverdier(value)) {
                        kodeverksklasser.add(new Kodeverksdefinisjon(key, javaPakke, (List<Map<String, Object>>) value));
                    } else if (harUnderstruktur(value)) {
                        kodeverksklasser.addAll(traverserStruktur((HashMap<String, Object>) value, javaPakke + '.' + key));
                    } else {
                        throw new KodeverkException("Uventet type for key " + javaPakke + ':' + key + " med value " + value);
                    }
                }
        );
        
        return kodeverksklasser;
    }
    
    private boolean harUnderstruktur(Object value) {
        return value instanceof HashMap;
    }

    private boolean harKodeverdier(Object value) {
        return value instanceof List;
    }

}