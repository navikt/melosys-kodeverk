const inntektskildetype = [
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
    {
        kode: 'ARBEIDSINNTEKT',
        term: 'Arbeidsinntekt fra norsk eller utenlandsk virksomhet. ' +
            'Forutsetning om at norsk arbeidsgiver alltid innraporterer arbeidsgiveravift  til norske myndigheter',
    },
    {
        kode: 'NÆRINGSINNTEKT',
        term: 'Næringsinntekt fra norsk eller utenlandsk virksomhet. ' +
            'Dvs. inntekt fra enkeltmannsforetak der det ikke betales arbeidsgiveravgift.',
    },
    {
        kode: 'PENSJON',
        term: 'Pensjon fra Norge eller utlandet',
    },
    {
        kode: 'UFØRETRYGD',
        term: 'Inntekt fra uføretrygd',
    },
];
module.exports.inntektskildetype = inntektskildetype;
