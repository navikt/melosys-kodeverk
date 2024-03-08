const inntektskildetype = [
    // Inntektskilder for ftrl frivillig medlemskap
    {
        kode: 'ARBEIDSINNTEKT_FRA_NORGE',
        term: 'Arbeidsinntekt fra Norge',
    },
    {
        kode: 'NÆRINGSINNTEKT_FRA_NORGE',
        term: 'Næringsinntekt fra Norge',
    },
    {
        kode: 'INNTEKT_FRA_UTLANDET',
        term: 'Inntekt fra utlandet',
    },
    {
        kode: 'FN_SKATTEFRITAK',
        term: 'Ansatt i FN med skattefritak',
    },
    {
        kode: 'MISJONÆR',
        term: 'Misjonær som skal arbeide i utlandet i minst to år',
    },
    {
        kode: 'PENSJON_UFØRETRYGD',
        term: 'Pensjon/uføretrygd',
    },
    {
        kode: 'PENSJON_UFØRETRYGD_KILDESKATT',
        term: 'Pensjon/uføretrygd det betales kildeskatt av',
    },

    //Inntektskilder for pliktig medlemskap
    {
        kode: 'ARBEIDSINNTEKT',
        term: 'Arbeidsinntekt',
    },
    {
        kode: 'NÆRINGSINNTEKT',
        term: 'Næringsinntekt',
    },
    {
        kode: 'PENSJON',
        term: 'Pensjon',
    },
    {
        kode: 'UFØRETRYGD',
        term: 'Uføretrygd',
    },
];
module.exports.inntektskildetype = inntektskildetype;
