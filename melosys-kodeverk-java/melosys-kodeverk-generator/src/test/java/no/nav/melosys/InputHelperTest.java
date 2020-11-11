package no.nav.melosys;

import java.nio.file.Path;

import no.nav.melosys.service.FileService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.core.env.Environment;

import static no.nav.melosys.InputHelper.InputType.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.Is.is;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
public class InputHelperTest {
    
    @Mock
    private FileService fileService;
    
    @Mock
    private Environment environment;
    
    @InjectMocks
    private InputHelper inputHelper;
    
    @Test
    public void testInputTypeArgs() {
        when(environment.getProperty("MELOSYS_KODEVERK_FRONTEND")).thenReturn("args");
        inputHelper.args = new String[] { "test/resources/dist/semver.txt", "test/resources/dist/kodemap.yml" };

        assertThat(inputHelper.getInputType(), is(ARGS));
    }

    @Test
    public void testInputTypeLatest() {
        when(environment.getProperty("MELOSYS_KODEVERK_FRONTEND")).thenReturn("latest");

        assertThat(inputHelper.getInputType(), is(LATEST));
    }

    @Test
    public void testInputTypeProject() {
        when(environment.getProperty("MELOSYS_KODEVERK_FRONTEND")).thenReturn("/melosys-kodeverk");
        
        assertThat(inputHelper.getInputType(), is(PROJECT));
    }

    @Test
    public void testValuesArgs() {
        mockReturnValueWhenPathContains("5.8.0-SNAPSHOT", "semver.txt");
        mockReturnValueWhenPathContains("args", "kodemap.yml");
        inputHelper.inputType = ARGS;
        inputHelper.args = new String[] { "test/resources/dist/kodemap.yml", "test/resources/dist/semver.txt" };

        assertThat(inputHelper.getVersjon(), is("5.8.0-SNAPSHOT"));
        assertThat(inputHelper.getYaml(), is("args"));
    }

    @Test
    public void testValuesLatest() {
        mockReturnValueWhenPathContains("5.8.0:100", "semver.txt");
        mockReturnValueWhenPathContains("latest", "kodemap.yml");
        inputHelper.inputType = LATEST;
        assertThat(inputHelper.getVersjon(), is("5.8.0-100"));
        assertThat(inputHelper.getYaml(), is("latest"));
    }

    @Test
    public void testValuesProject() {
        mockReturnValueWhenPathContains("{ \"version\": \"5.8.0\" }", "package.json");
        mockReturnValueWhenPathContains("project", "kodemap.yml");
        inputHelper.inputType = PROJECT;
        inputHelper.melosysKodeverkFrontendProperty = "/melosys-kodeverk";

        assertThat(inputHelper.getVersjon(), is("5.8.0"));
        assertThat(inputHelper.getYaml(), is("project"));
    }
    
    private void mockReturnValueWhenPathContains(String returnValue, String pathContains) {
        doReturn(returnValue).when(fileService).lesFilSomString(ArgumentMatchers.<Path>argThat(p -> p != null && p.toString().contains(pathContains)));
    }
}
