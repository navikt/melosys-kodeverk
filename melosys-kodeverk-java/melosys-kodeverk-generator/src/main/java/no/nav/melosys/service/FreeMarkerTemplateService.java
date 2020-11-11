package no.nav.melosys.service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.util.Map;

import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import no.nav.melosys.KodeverkProperties;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import static java.nio.charset.StandardCharsets.*;

@Component
public class FreeMarkerTemplateService {

    private final Configuration cfg;

    @Autowired
    public FreeMarkerTemplateService(KodeverkProperties kodeverkProperties) {
        cfg = new Configuration(Configuration.VERSION_2_3_27);
        cfg.setClassForTemplateLoading(getClass(), kodeverkProperties.getRessurser().getTemplateMappe());
    }

    String generereKildeKodeFraTemplate(Map<String, String> root, String templateNavn) throws IOException, TemplateException {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();

        Template temp = cfg.getTemplate(templateNavn);
        Writer out = new OutputStreamWriter(byteArrayOutputStream, UTF_8);
        temp.process(root, out);
        return new String(byteArrayOutputStream.toByteArray(), UTF_8);
    }

    Configuration getCfg() {
        return cfg;
    }
}
