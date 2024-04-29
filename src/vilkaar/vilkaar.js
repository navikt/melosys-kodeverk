/**
 * @see https://confluence.adeo.no/display/TEESSI/Kodeverk+i+Melosys#KodeverkiMelosys-Vilk%C3%A5rene
 * @type {*[]}
 */
const vilkaar = [
  {
    kode: 'FO_883_2004_INNGANGSVILKAAR',
    term: null
  },
  {
    kode: 'FO_883_2004_ART12_1',
    term: null
  },
  {
    kode: 'KONV_EFTA_STORBRITANNIA_ART14_1',
    term: null
  },
  {
    kode: 'KONV_EFTA_STORBRITANNIA_ART16_1',
    term: null
  },
  {
    kode: 'FO_883_2004_ART12_2',
    term: null
  },
  {
    kode: 'KONV_EFTA_STORBRITANNIA_ART14_2',
    term: null
  },
  {
    kode: 'KONV_EFTA_STORBRITANNIA_ART16_3',
    term: null
  },
  {
    kode: 'FO_883_2004_ART16_1',
    term: null
  },
  {
    kode: 'KONV_EFTA_STORBRITANNIA_ART18_1',
    term: null
  },
  {
    kode: 'ART12_1_VESENTLIG_VIRKSOMHET',
    term: null
  },
  {
    kode: 'ART12_1_FORUTGAAENDE_MEDLEMSKAP',
    term: null
  },
  {
    kode: 'ART12_2_NORMALT_DRIVER_VIRKSOMHET',
    term: null
  },
  {
    kode: 'FO_883_2004_ART87A',
    term: null
  },
  {
    kode: 'BOSATT_I_NORGE',
    term: null
  },
  {
    kode: 'FTRL_2_12_UNNTAK_TURISTSKIP',
    term: 'Har du kommet frem til at søker ikke arbeider i hotell- og restaurantvirksomhet på et NIS-skip?'
  },
  {
    kode: 'FO_883_2004_ART11_3A',
    term: null
  },
  {
    kode: 'FO_883_2004_ART11_4_1',
    term: null
  },
  {
    kode: 'FO_883_2004_ART11_4_2',
    term: null
  },
  {
    kode: 'FTRL_2_1A_TRYGDEKOORDINGERING',
    term: 'Har du kommet frem til at søker ikke er omfattet av et annet lands trygdelovgivning, etter en avtale som hindrer frivillig medlemskap?'
  },
  {
    kode: 'FTRL_2_1_BOSATT_NORGE',
    term: 'Har søker oppholdt seg eller hatt til hensikt å oppholde seg i Norge i minst 12 måneder?'
  },
  {
    kode: 'FTRL_2_1_BOSATT_NORGE_FORUT',
    term: 'Har søker oppholdt seg eller hatt til hensikt å oppholde seg i Norge i minst 12 måneder forut for utenlandsoppholdet?'
  },
  {
    kode: 'FTRL_2_1_LOVLIG_OPPHOLD',
    term: 'Har søker lovlig opphold i Norge?'
  },
  {
    kode: 'FTRL_2_14_ARBEIDSGIVERAVGIFT',
    term: 'Plikter arbeidsgiver å betale arbeidsgiveravgift av søkers lønn/godtgjørelse?'
  },
  {
    kode: 'FTRL_2_14_FRITID_I_NORGE',
    term: 'Tilbringer søker mer enn halvparten av fritiden sin i Norge?'
  },
  {
    kode: 'FTRL_2_1_VEKSELSVIS_ARBEIDSPERIODE_UNDER_12MND',
    term: 'Er hver arbeidsperiode mindre enn 12 måneder?'
  },
  {
    kode: 'FTRL_2_1_ARBEID_OPPHOLD_UNDER_12MND',
    term: 'Er søkers arbeidsoppdrag i utlandet ment å vare i under 12 måneder?'
  },
  {
    kode: 'FTRL_2_1_OPPHOLD_UNDER_12MND',
    term: 'Er søkers utenlandsopphold ment å vare i under 12 måneder? Eller mindre enn seks måneder per kalenderår, over to eller flere påfølgende kalenderår?'
  },
  {
    kode: 'FTRL_2_2_LOVLIG_ADGANG_ARBEID',
    term: 'Har søker lovlig adgang til å ta arbeid i Norge/på norsk kontinentalsokkel?'
  },
  {
    kode: 'FTRL_2_2_INNRETNING_NATURRESSURSER',
    term: 'Arbeider søker ombord på en fast eller flyttbar innretning i forbindelse med utvinning av olje, gass eller andre naturressurser?'
  },
  {
    kode: 'FTRL_2_11_UNNTAK_AMBASSADEPERSONELL_MELLOMFOLKELIG_ORG',
    term: 'Har du kommet til at søker ikke er unntatt pliktig medlemskap som følge av arbeid for en fremmed stat eller mellomfolkelig organisasjon?'
  },
  {
    kode: 'FTRL_2_3_ARBEIDSGIVER_SVALBARD_JAN_MAYEN',
    term: 'Arbeider søker for en norsk arbeidsgiver som driver virksomhet på Svalbard, på Jan Mayen eller i et norsk biland?'
  },
  {
    kode: 'FTRL_2_5_NORSK_STATSBORGER_EØS_BORGER',
    term: 'Er søker norsk statsborger/EØS-borger?'
  },
  {
    kode: 'FTRL_2_5_NORSK_SKIP',
    term: 'Arbeider søker på et norskregistrert skip?'
  },
  {
    kode: 'FTRL_2_5_NORSKE_STATS_TJENESTE',
    term: 'Arbeider søker i den norske stats tjeneste?'
  },
  {
    kode: 'FTRL_2_5_NATO_SIVILE_KRIGSTIDSORGANGER',
    term: 'Er søker i tjeneste som forhåndsutskrevet av den norske stat til NATOs sivile krigstidsorganer?'
  },
  {
    kode: 'FTRL_2_5_LÅN_STIPEND_LÅNEKASSEN',
    term: 'Mottar søker lån og/eller stipend fra Lånekassen?'
  },
  {
    kode: 'FTRL_2_5_I_FORSVARETS_TJENESTE',
    term: 'Er søker i forsvarets tjeneste i utlandet? '
  },
  {
    kode: 'FTRL_2_5_FREDSKORPSDELTAKER_EKSPERT_UTVIKLINGSLAND',
    term: 'Er søker utsendt av den norske stat som fredskorpsdeltaker eller som ekspert for tjenestegjøring i et utviklingsland?'
  },
  {
    kode: 'FTRL_2_5_MEDFØLGENDE_A_E',
    term: 'Er søker medfølgende til en person som har fått innvilget medlemskap etter § 2-5 bokstav a til e?'
  },
  {
    kode: 'FTRL_2_5_ARBEID_FOR_PERSON_I_NORSKE_STATS_TJENESTE',
    term: 'Arbeider søker hos en person som er ansatt i den norske stats tjeneste?'
  },
  {
    kode: 'FTRL_2_5_FORSØRGET_FAMILIEMEDLEM',
    term: 'Er søker forsørget og oppholder seg sammen med denne personen?'
  },
  {
    kode: 'FTRL_2_5_NORSK_SIVILT_LUFTFARTSSELSKAP',
    term: 'Arbeider søker i et norsk sivilt luftfartsselskap?'
  },
  {
    kode: 'FTRL_ARBEIDSTAKER',
    term: 'Er søker arbeidstaker?'
  },
  {
    kode: 'FTRL_2_7_IKKE_PLIKTIG_MEDLEM',
    term: 'Oppholder søker seg i Norge uten å være pliktig medlem?'
  },
  {
    kode: 'FTRL_2_7_RIMELIGHETSVURDERING',
    term: 'Er det, etter en samlet vurdering, rimelig at søker får innvilget frivillig medlemskap?'
  },
  {
    kode: 'FTRL_2_7_FORSØRGET_FAMILIEMEDLEM',
    term: 'Er søker forsørget og oppholder seg sammen med en person som er medlem etter § 2-7 første ledd?'
  },
  {
    kode: 'FTRL_2_7_INGEN_SÆRLIGE_GRUNNER_TALER_IMOT',
    term: 'Har du kommet frem til at det ikke er særlige grunner som taler imot at søker skal få innvilget frivillig medlemskap?'
  },
  {
    kode: 'FTRL_2_7A_BOSATT_I_NORGE',
    term: 'Er søker bosatt i Norge?'
  },
  {
    kode: 'FTRL_2_7A_SKIP_UTENFOR_EØS',
    term: 'Er søker i arbeid på et skip registrert i en stat utenfor EØS-området?'
  },
  {
    kode: 'FTRL_FORUTGÅENDE_TRYGDETID',
    term: 'Har søker vært medlem i minst tre av de fem siste kalenderårene?'
  },
  {
    kode: 'FTRL_2_8_FØRSTE_LEDD_NÆR_TILKNYTNING_NORGE',
    term: 'Har søker nær tilknytning til det norske samfunnet?'
  },
  {
    kode: 'FTRL_2_8_NÆR_TILKNYTNING_NORGE',
    term: 'Har søker nær tilknytning til det norske samfunnet?'
  },
  {
    kode: 'FTRL_2_8_STUDENT_UVIVERSITET_HØGSKOLE',
    term: 'Er søker student ved universitet eller høgskole?'
  },
  {
    kode: 'FTRL_2_8_FORSØRGET_FAMILIEMEDLEM',
    term: 'Er søker forsørget og oppholder seg sammen med en person som er medlem etter § 2-8 første eller andre ledd?'
  }
];
module.exports.vilkaar = vilkaar;
