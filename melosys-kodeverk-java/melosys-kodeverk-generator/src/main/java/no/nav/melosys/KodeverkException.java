package no.nav.melosys;

public class KodeverkException extends RuntimeException {
    
    public KodeverkException(String message) {
        super(message);
    }
    
    public KodeverkException(String message, Exception e) {
        super(message, e);
    }
}
