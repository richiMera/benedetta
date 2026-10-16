
import { useState } from 'react';
import arrowIcon from '../../assets/img/button-arrow.svg';
import mainImg from '../../assets/img/chi-sono-img.png';
import baeDetailImg from '../../assets/img/detail-01.webp';
import closeIcon from '../../assets/img/close-icon-big.svg';
import closeIconSmall from '../../assets/img/close-icon-small.svg';
import './style.css';

import Grid from '@mui/material/Grid2';
import { Drawer, Grid2 } from '@mui/material';

interface Props {
    isMedium?: boolean;
    isMobile?: boolean;
    setOpenInfo: any;

}

const ChiSono: React.FC<Props> = ({ isMedium, isMobile }) => {
    const [openDrawer, setOpenDrawer] = useState(false);
    const details = [
        {
            year: "17 Settembre 1998",
            content: "Sono nata e cresciuta in un paesino del Veneto nella provincia di Treviso, dove ho vissuto fino ai 19 anni. La mia carriera universitaria mi ha portata a Milano, dove nel 2020 mi sono laureata con lode in Scienze e Tecnologie Alimentari - Dipartimento di Scienze per gli Alimenti, la Nutrizione e l'Ambiente."
        },
        {
            year: "Novembre 2021 — Novembre 2022",
            content: "Il mio interesse per il ruolo cruciale dell’alimentazione durante la gravidanza mi ha spinto a trovare un tirocinio presso il reparto di Ginecologia e Ostetricia dell’Ospedale dei Bambini di Milano “Vittore Buzzi“, dove ho contribuito a uno studio di ricerca prospettico multicentrico, i cui risultati preliminari sono stati pubblicati sulla prestigiosa rivista BMJ Open."
        },
        {
            year: "Marzo 2023",
            content: "Ho conseguito con lode la laurea magistrale in Alimentazione e Nutrizione Umana sempre presso l’Università degli Studi di Milano con una tesi dal titolo «Associazione tra SIMPLE score nutrizionale materno del primo trimestre, markers placentari precoci ed esiti gravidici: risultati preliminari di uno studio italiano prospettico multicentrico (SIMPLE STUDY)»"
        },
        {
            year: "Settembre 2023",
            content: "Ho superato l’esame di stato e ottenuto l’abilitazione all’esercizio della professione di Biologo nutrizionista."
        },
        {
            year: "Settembre 2023 — Febbraio 2024",
            content: "Ho avuto l’opportunità di collaborare volontariamente con l’ambulatorio di Nutrizione dedicato alle Patologie della Gravidanza presso la prestigiosa Clinica Mangiagalli. Qui ho condotto visite nutrizionali e preso parte a uno studio di ricerca, il cui abstract dal titolo «Analisi delle caratteristiche bioimpedenziometriche nelle donne con gravidanze complicate da disordini ipertensivi nei tre trimestri» è stato pubblicato dalla Società Italiana di Ecografia Ostetrico Ginecologica."
        },
        {
            year: "Febbraio 2024",
            content: "Ho intrapreso l’attività di libera professione offrendo consulenze nutrizionali e dedicandomi con entusiasmo alla divulgazione scientifica tramite contributi sui social. Parallelamente, il mio ruolo come Clinical Study Coordinator mi consente di unire la pratica professionale alla mia passione per la ricerca, ampliando continuamente le mie competenze."
        },
    ]

    console.log(isMedium);







    return (
        <>


            <Drawer transitionDuration={{ enter: 700, exit: 500 }} anchor='bottom' open={openDrawer} onClose={() => { setOpenDrawer(false) }}>
                <div className='np-scrollbar' style={{
                    height: 'auto',
                    width: '100%',
                    backgroundColor: '#0F1F15',
                    padding: isMobile ? '0 24px 24px 24px' : '0 64px 64px 64px',
                    position: 'relative'
                }}>
                    {/* Icona di chiusura */}
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',

                    }}>
                        <div style={{

                            width: '100%',
                            display: 'flex',
                            justifyContent: 'flex-end',
                            padding: isMobile ? '24px' : '64px',
                            marginBottom: isMobile ? '26px' : '48px'
                        }}>
                            <img draggable={false} style={{ cursor: 'pointer' }} onClick={() => { setOpenDrawer(false) }} src={isMobile ? closeIconSmall : closeIcon} />
                        </div>                    </div>

                    {/* Contenuto scrollabile */}
                    <Grid2
                        className="drawer-container"
                        data-lenis-prevent
                        sx={{
                            paddingTop: '152px', // Aggiunge uno spazio per evitare che il contenuto si sovrapponga allo scroll
                        }}
                        container
                    >
                        <Grid2 size={{ xs: 12, md: 6 }} offset={{ xs: 0, md: 3 }}>
                            <p style={{ color: '#9CC8A7', marginBottom: '24px' }} className='overline'>Il mio percorso</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '65px' }}>
                                <h3 style={{ color: '#F1F8F3' }}>La mia storia</h3>
                                {details.map((det: any, index: number) => {
                                    return (
                                        <div key={index}>
                                            <p style={{ color: '#9CC8A7' }} className='p-regular'>{det.year}</p>
                                            <p style={{ color: '#F1F8F3' }} className='p-regular'>{det.content}</p>
                                        </div>
                                    );
                                })}
                                <img draggable={false} style={{ borderRadius: '16px', width: '100%', objectFit: 'contain', height: 'auto' }} src={baeDetailImg} />
                            </div>
                            {/* <h3 style={{ color: '#F1F8F3', marginBottom: '32px' }}>Articoli pubblicati</h3>
                            <p className='p-regular' style={{ color: '#F1F8F3', marginBottom: '32px' }}>Collaboro alla ricerca scientifica in qualità di assegnista di ricerca
                                certificazioni e corsi: */}
                            <p className='p-regular'>
                                <span style={{ color: '#F1F8F3' }}>Ho una certificazione come educatrice di mindfulness.</span> </p>
                            <p className='p-regular' style={{ color: '#F1F8F3' }}><span style={{ color: '#9CC8A7' }}>@drittialsodo</span>: utilizzo il mio profilo social per divulgare contenuti scientificamente validi e dare spunti di piatti facili, veloci e completi.</p>
                        </Grid2>

                    </Grid2>
                </div>
            </Drawer >

            <Grid sx={{ marginBottom: isMobile ? '56px' : '' }} size={{ xs: 12, md: 5 }} offset={{ xs: 0, md: 1 }}>
                <p className='overline' style={{ marginBottom: '32px', color: '#316A44' }}>chi sono</p>
                <h3 style={{ marginBottom: '32px', color: '#0F1F15' }}>Alimentazione intuitiva e su misura</h3>
                <p className='p-large' style={{ marginBottom: '32px', color: '#0F1F15' }}>Credo fermamente in un percorso basato sull’ascolto, che assecondi le esigenze e le richieste del paziente, aiutandolo a ritrovare equilibrio, benessere e salute. <br /> Insieme impareremo ad andare oltre al concetto di dieta, riscoprendo il piacere e la soddisfazione di mangiare in modo libero e consapevole.
                </p>
                <p className='p-regular' style={{ marginBottom: '30px', color: '#21442E' }}>L’approccio scientifico ed empatico che adotto garantisce ad ogni paziente un percorso personalizzato volto a costruire uno stile di vita nuovo, sano e sostenibile nel tempo.</p>
                <div onClick={() => { setOpenDrawer(true) }} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: 'fit-content' }}>
                    <p style={{ color: '#0F1F15' }} onClick={() => {
                        console.log('navigaree');
                    }} className='button open-drawer'>Il mio percorso</p>
                    <img draggable={false} src={arrowIcon} />
                </div>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }} offset={{ xs: 0, md: 1 }} >
                <div style={{
                    height: isMobile ? '85vh' : '650px', borderRadius: '24px', width: '100%', backgroundImage: `url(${mainImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat'
                }}>

                </div>
            </Grid>





        </>
    );
};

export default ChiSono;



