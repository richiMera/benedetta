import Card from '../Card';
import Grid from '@mui/material/Grid2';
import checkIcon from '../../assets/img/check.svg';
import clockIcon from '../../assets/img/clock.svg';
interface Props {
    isMedium: boolean;
    isMobile: boolean;

}

const Consulenze: React.FC<Props> = ({ isMedium, isMobile }) => {
    console.log(isMedium);


    const consulenze = [

        {
            title: 'Consulenza in Studio',
            // caption: '*Verrai reindirizzato sul sito di OsteoAtlas',
            content: 'OsteoAtlas – Via Madonna, 60, Rho (MI)',
            onClick: () => {
                window.open('https://www.miodottore.it/benedetta-mosole/nutrizionista/rho#profile-pricing', '_blank');
            }
        },
        {
            title: 'Consulenza Online',
            content: 'Ovunque ti trovi',
            onClick: () => {
                window.open('https://www.miodottore.it/benedetta-mosole/nutrizionista/rho#profile-pricing', '_blank');
            }

        },


    ]

    const funzionalita = [
        {
            title: 'Prima visita',
            list: ['Anamnesi',
                'Indagine delle abitudini alimentari',
                'Indagine dell’attività motoria',
                'Rilevazione dei parametri antropometrici',
                'Piano alimentare in 7 giorni lavorativi'],
            time: '1 ora'
        },
        {
            title: 'Colloqui successivi',
            list: ['Rilevazione dei parametri antropometrici',
                'Eventuali modifiche al piano alimentare',
                'Soluzioni concrete e strategie personalizzate',
                'Definizione nuovi obiettivi',
                'Piano alimentare aggiornato in 7 giorni lavorativi'],
            time: '30 minuti'
        },


    ]

    return (
        <div>

            <p className='overline' style={{ marginBottom: '32px', color: '#9CC8A7' }}>consulenze</p>
            <h3 style={{ marginBottom: '64px', color: '#F1F8F3' }}>Adatte a tutte le tue esigenze</h3>

            <Grid sx={{ marginBottom: '80px' }} container spacing={3}>
                {consulenze.map((p: any, index: number) => {
                    return (
                        <Grid size={{ xs: 12, md: 6 }} key={index}>
                            <Card type='consulenza' caption={p?.caption} onClickBtn={p.onClick} isMobile={isMobile} content={p.content} title={p.title
                            } />
                        </Grid>
                    )
                })}
            </Grid>

            <h3 style={{ marginBottom: '64px', color: '#F1F8F3' }}>Come funziona</h3>
            <Grid sx={{ marginBottom: '24px' }} container spacing={3}>
                {funzionalita.map((p: any, index: number) => {
                    return (
                        <Grid sx={{ alignItems: 'stretch', display: 'flex' }} size={{ xs: 12, md: 6 }} key={index}>
                            <div
                                className='button'
                                style={{
                                    padding: isMobile ? '16px' : '32px',
                                    width: '100%',
                                    borderRadius: '16px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    backgroundColor: 'rgba(241, 248, 243, 0.04)',
                                    boxShadow: '0px 4px 24px 0px rgba(12,24,17,0.4)',
                                    border: '2px solid rgba(241, 248, 243, 0.04)',


                                }}
                            >

                                <div style={{ marginBottom: '40px' }}>
                                    <h4 style={{ color: '#F1F8F3' }} >{p.title}</h4>
                                </div>


                                <div style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {p.list.map((e: any, indexList: any) => {
                                        return (
                                            <div key={indexList} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#F1F8F3', }}>
                                                <img draggable={false} src={checkIcon} />
                                                <p className='p-regular'>{e}</p>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <img draggable={false} src={clockIcon} />
                                    <p style={{ color: '#F1F8F3' }} className='p-regular'>{p.time}</p>
                                </div>
                            </div>
                        </Grid>
                    )
                })}
            </Grid>
            <p style={{ color: '#DDEEDF' }} className='p-smal'>* É consigliato disporre di esami ematici recenti e di eventuali referti utili a ricostruire la storia clinica.
            </p>

        </div>
    );
};

export default Consulenze;



