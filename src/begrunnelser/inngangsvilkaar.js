
const inngangsvilkaar = [
  {
    kode: 'MANGLER_STATSBORGERSKAP',
    term: 'Finner ikke statsborgerskap i NAVs registre.',
  },
  {
    kode: 'TEKNISK_FEIL',
    term: 'Det oppsto en teknisk feil ved automatisk vurdering av inngangsvilkår.',
  },
  {
    kode: 'OVERSTYRT_AV_SAKSBEHANDLER',
    term: 'Automatisk vurdering av inngangsvilkår ble overstyrt av saksbehandler.',
  }
];
module.exports.inngangsvilkaar = inngangsvilkaar;

