package no.nav.melosys.service;

import static org.junit.jupiter.api.Assertions.assertTrue;

class AssertionValidator {

    void validerEnumVerdier(final String contents) {
        assertTrue(contents.contains("BRUKER"));
        assertTrue(contents.contains("ARBEIDSGIVER"));
        assertTrue(contents.contains("REPRESENTANT"));
        assertTrue(contents.contains("MYNDIGHET"));
    }
}
