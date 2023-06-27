# Melosys-kodeverk-java
This is a standalone application which generates Java enum classes based on the information 
provided by a yaml file and a version file.

For å ta i bruk lokal versjon av kodeverk:
1. Kjør `mvn clean install` i `melosys-kodeverk-java`
   1. Hvis ikke melosys-internt-kodeverk/src blir generert må du kjøre
`java -jar melosys-kodeverk-generator/target/melosys-kodeverk-generator-1.jar ../dist/kodemap.yml`
   2. Og så `mvn clean install` på nytt 
2. Sett `<melosys.internt.kodeverk.version>1.0.0-SNAPSHOT</melosys.internt.kodeverk.version>`
i pom.xml i melosys-api

---
A `mvn install` will build **melosys-kodeverk-generator**, which will in turn be used to 
generate files for **melosys-internt-kodeverk**, which will then be built as the final step.

This project/application can be used in three different ways, depending on what the goal is:
* Standalone development/changes to the application itself. By default, the application will 
generate the enums based on the `kodemap.yml` located in 
`melosys-kodeverk-generator/src/test/resources/dist`. The file is simply meant for test
purposes during development, and is not intended to be kept up to date.
* As a local build tool during development of **melosys-kodeverk**. You can specify 
`MELOSYS_KODEVERK_FRONTEND` either as an environment variable (probably easiest) or a system
property (e.g. `-DMELOSYS_KODEVERK_FRONTEND=latest`). The value can be either `latest`,
which will call npm to download the latest available artifact, and generate with that as a 
basis, or the path to
your checked out **melosys-kodeverk** directory (absolute or relative to
**melosys-kodeverk-java**). Other than that, it works as the previous option.
