/**
 * Kodeverk/behandlingsstatus
 * ref: https://confluence.adeo.no/display/TEESSI/Kodeverk+i+Melosys
 * @module
 */
const behandlingsstatus = [
  {
    kode: 'OPPRETTET',
    term: 'Behandlingen er opprettet',
  },
  {
    kode: 'UNDER_BEHANDLING',
    term: 'Behandlingen pågår',
  },
  {
    kode: 'AVSLUTTET',
    term: 'Behandlingen er avsluttet',
  },
  {
    kode: 'AVVENT_DOK_UTL',
    term: 'Avventer svar fra utenlandsk trygdemyndighet',
  },
  {
    kode: 'AVVENT_DOK_PART',
    term: 'Avventer svar fra part i saken',
  },
  {
    kode: 'ANMODNING_UNNTAK_SENDT',
    term: 'Anmodning om unntak er sendt',
  },
  {
    kode: 'VURDER_DOKUMENT',
    term: 'Vurder dokument',
  },
  {
    kode: 'TIDSFRIST_UTLOEPT',
    term: 'Tidsfristen er utløpt på etterspurte opplysninger',
  },
  {
    kode: 'FORELOEPIG_LOVVALG',
    term: 'Avventer svar på foreløpig lovvalg',
  },
  {
    kode: 'IVERKSETTER_VEDTAK',
    term: 'Vedtak iverksettes',
  },
  {
    kode: 'SVAR_ANMODNING_MOTTATT',
    term: 'Mottatt svar på anmodning unntak'
  },
  {
    kode: 'UTPEKING_SENDT',
    term: 'Utpeking av et annet land er sendt'
  },
  {
    kode: 'SVAR_UTPEKING_MOTTATT',
    term: 'Mottatt svar på utpeking av et annet land'
  },
  {
    kode: 'MIDLERTIDIG_LOVVALGSBESLUTNING',
    term: 'Midlertidig lovvalgsbeslutning (artikkel 13)'
  },
  {
    kode: 'AVVENT_FAGLIG_AVKLARING',
    term: 'Avventer en faglig avklaring'
  }
];
module.exports.behandlingsstatus = behandlingsstatus;
