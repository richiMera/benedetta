import Card from '../Card';
import Grid from '@mui/material/Grid2';
import checkIcon from '../../../assets/img/check.svg';
import clockIcon from '../../../assets/img/schedule.svg';
interface Props {
    isMedium: boolean;
    isMobile: boolean;

}

const Consulenze: React.FC<Props> = ({ isMedium, isMobile }) => {

    const consulenze = [
        {
            title: 'Consulenza Onine',
            content: 'Ovunque ti trovi'
        },
        {
            title: 'Consulenza in Studio',
            content: 'Milano via bellinzona 44'
        },


    ]

    const funzionalita = [
        {
            title: 'Prima visita',
            content: 'Ovunque ti trovi',
            list: ['Anamnesi',
                'Indagine delle abitudini alimentari',
                'Indagine dell’attività motoria',
                'Rilevazione dei parametri antropometrici',
                'Piano alimentare in 7 giorni lavorativi'],
            time: '1 ora'
        },
        {
            title: 'Visita di controllo',
            content: 'Milano via bellinzona 44',
            list: ['Misurazioni',
                'Eventuali modifiche al piano alimentare',
                'Soluzioni concrete e strategie personalizzate',
                'Definizione nuovi obiettivi',
                'Piano alimentare aggiornato in 7 giorni lavorativi'],
            time: '30 minuti'
        },


    ]

    return (
        <div>

            <p className='overline' style={{ marginBottom: '32px', }}>consulenze</p>
            <h3 style={{ marginBottom: '64px' }}>Adatte a tutte le tue esigenze</h3>

            <Grid sx={{ marginBottom: '80px' }} container spacing={3}>
                {consulenze.map((p: any, index: number) => {
                    return (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card type='consulenza' onClickBtn={() => {
                                console.log('ciao');
                            }} isMobile={isMobile} content={p.content} title={p.title
                            } />
                        </Grid>
                    )
                })}
            </Grid>

            <h3 style={{ marginBottom: '64px' }}>Come funziona, in breve</h3>
            <Grid container spacing={3}>
                {funzionalita.map((p: any, index: number) => {
                    return (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <div
                                className='button'
                                style={{
                                    padding: isMobile ? '16px' : '32px',
                                    borderRadius: '16px',
                                    border: '1px solid black',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',



                                }}
                            >

                                <h4 style={{ marginBottom: '40px' }}>{p.title}</h4>


                                <div style={{ marginBottom: '40px' }}>
                                    {p.list.map((e: any, indexList: any) => {
                                        return (
                                            <div key={indexList} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                <img src={checkIcon} />
                                                <p className='p-regular'>{e}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <img src={clockIcon} />
                                    <p className='p-regular'>{p.time}</p>
                                </div>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>

        </div>
    );
};

export default Consulenze;



