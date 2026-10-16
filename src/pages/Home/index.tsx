import { useEffect, useState } from 'react'
import { useMediaQuery } from '@react-hook/media-query';
import '../../App.css'
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Prestazioni from '../../components/Prestazioni';
import Percorsi from '../../components/Percorsi';
import Lenis from 'lenis';
import ChiSono from '../../components/ChiSono';
import Grid from '@mui/material/Grid2';
import GridWrapper from '../../components/GridWrapper';
import Filosofia from '../../components/Filosofia';
import Consulenze from '../../components/Consulenze';
import DubbiBanner from '../../components/DubbiBanner';
import DiconoDiMe from '../../components/DiconoDiMe';
import FAQ from '../../components/FAQ';
import Footer from '../../components/Footer';
import PercorsoGravidanza from '../../components/PercorsoGravidanza';

function App() {

    const isMobile = useMediaQuery('(max-width: 767px)');
    const isForIpad = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
    const isForIpadHor = useMediaQuery('(min-width: 1024px) and (max-width: 1366px)');
    const forBurger = useMediaQuery('(min-width: 1024px) and (max-width: 1300px)');
    const isTallViewport = useMediaQuery('(min-height: 700px)');

    const isMedium = useMediaQuery('(max-width: 1728px)');

    const isBig = useMediaQuery('(min-width: 1729px)');






    const [openInfo, setOpenInfo] = useState(false);



    // const grids = Array.from({ length: 12 }, (_, index) => index + 1); // Array [1, 2, ..., 12]


    useEffect(() => {
        // Inizializza Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
        // lenis.on('scroll', (e: any) => {
        //   // Ignora elementi con data-scroll-lock
        //   const target = e.target.closest('[data-scroll-lock]');
        //   if (target) return;
        // });

        // Funzione per il frame della richiesta di animazione
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        // Gestore di click per gli anchor
        const handleAnchorClick = (event: Event) => {
            event.preventDefault();
            const target = event.currentTarget as HTMLAnchorElement;
            const targetId = target.getAttribute('href')?.slice(1);

            if (targetId) {
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    lenis.scrollTo(targetElement);
                }
            }
        };

        // Aggiunge i listener agli anchor
        const anchors = document.querySelectorAll('a[href^="#"]');
        anchors.forEach(anchor => {
            anchor.addEventListener('click', handleAnchorClick);
        });

        // Avvia l'animazione
        requestAnimationFrame(raf);

        // Pulizia al momento dello smontaggio del componente
        return () => {
            anchors.forEach(anchor => {
                anchor.removeEventListener('click', handleAnchorClick);
            });
        };
    }, [openInfo]); // Effettua l'operazione solo al montaggio del componente





    return (
        <div>

            {openInfo ? <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'white' }}>
                <p onClick={() => {
                    setOpenInfo(false); window.history.replaceState({}, document.title, window.location.pathname);
                }}>torna indietro</p>
            </div> :

                <>
                    <div id='home' style={{ height: isMedium && isTallViewport ? '100svh' : 'auto', backgroundColor: '#9CC8A7', position: 'relative', overflow: 'hidden' }}>
                        <GridWrapper style={{ padding: isMobile ? '24px 24px 24px 24px' : ' 48px 64px 64px 64px', maxWidth: '1728px', position: 'relative', margin: 'auto', height: '100%' }} >
                            <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} size={12}>
                                <Header forBurger={forBurger} isForIpadHor={isForIpadHor} isForIpad={isForIpad} isMobile={isMobile} />
                                <Hero isForIpadHor={isForIpadHor} isForIpad={isForIpad} isBig={isBig} isMobile={isMobile} />
                            </Grid>
                        </GridWrapper>
                    </div>

                    <div id='prestazioni' style={{ position: 'relative', backgroundColor: '#F1F8F3' }}>
                        <GridWrapper style={{ padding: isMobile ? '0 24px' : '0 64px', maxWidth: '1728px', margin: 'auto' }} >
                            <Grid size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
                                <Prestazioni isMedium={isMedium} isMobile={isMobile} />
                            </Grid>
                        </GridWrapper>
                    </div>

                    <div id='percorsi' style={{ position: 'relative', backgroundColor: '#0F1F15', }}>
                        <GridWrapper style={{ padding: isMobile ? '96px 24px' : '160px 64px', maxWidth: '1728px', margin: 'auto' }} >
                            <Grid size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
                                <Percorsi isForIpadHor={isForIpadHor} isForIpad={isForIpad} isBig={isBig} isMobile={isMobile} />
                            </Grid>
                        </GridWrapper>
                    </div>
                    <div id='percorso-gravidanza' style={{ position: 'relative', backgroundColor: 'rgb(196, 147, 153)' }}>
                        <GridWrapper style={{ padding: isMobile ? '96px 24px' : '160px 64px', maxWidth: '1728px', margin: 'auto' }} >
                            <Grid size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
                                <PercorsoGravidanza isForIpadHor={isForIpadHor} isMobile={isMobile} />
                            </Grid>
                        </GridWrapper>
                    </div>

                    <div id='chi-sono' style={{ position: 'relative', backgroundColor: '#9CC8A7' }}>
                        <GridWrapper style={{ padding: isMobile ? '96px 24px' : '160px 64px', maxWidth: '1728px', margin: 'auto' }} >

                            <ChiSono setOpenInfo={setOpenInfo} isMedium={isMedium} isMobile={isMobile} />

                        </GridWrapper>

                    </div>

                    <div style={{ position: 'relative', backgroundColor: '#F1F8F3', color: '#0F1F15' }}>
                        <GridWrapper style={{ padding: isMobile ? '96px 24px' : '160px 64px', maxWidth: '1728px', margin: 'auto' }} >
                            <Grid size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
                                <Filosofia isMedium={isMedium} isMobile={isMobile} />
                            </Grid>
                        </GridWrapper>
                    </div>

                    <div id='consulenze' style={{ position: 'relative', backgroundColor: '#0F1F15' }}>
                        <GridWrapper style={{ padding: isMobile ? '96px 24px' : '160px 64px', maxWidth: '1728px', margin: 'auto' }} >
                            <Grid size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
                                <Consulenze isMedium={isMedium} isMobile={isMobile} />
                            </Grid>
                        </GridWrapper>
                    </div>

                    <div style={{ position: 'relative', backgroundColor: '#9CC8A7' }}>
                        <GridWrapper style={{ padding: isMobile ? '96px 24px' : '96px 64px', maxWidth: '1728px', margin: 'auto' }} >
                            <Grid size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
                                <DubbiBanner isMobile={isMobile} isBig={isBig} />
                            </Grid>
                        </GridWrapper>
                    </div>

                    <div id='dicono-di-me' style={{ position: 'relative', backgroundColor: '#F1F8F3' }}>
                        <GridWrapper style={{ padding: isMobile ? '96px 0 96px 0' : '96px 0', maxWidth: '1728px', margin: 'auto' }} >

                            <DiconoDiMe isMedium={isMedium} isMobile={isMobile} />

                        </GridWrapper>
                    </div>

                    <div id='faq' style={{ position: 'relative', backgroundColor: '#0f1f15' }}>
                        <GridWrapper style={{ padding: isMobile ? '96px 24px' : '96px 64px', maxWidth: '1728px', margin: 'auto' }} >
                            <Grid size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
                                <FAQ isMedium={isMedium} isMobile={isMobile} />
                            </Grid>
                        </GridWrapper>
                    </div>

                    <div id='contatti' style={{
                        position: 'relative',
                        height: isMobile ? '100svh' : '',
                        backgroundColor: '#9CC8A7',
                        overflow: 'hidden'
                    }}>
                        <GridWrapper style={{ padding: isMobile ? '80px 24px 48px 24px' : '189px 64px 48px 64px', maxWidth: '1728px', position: 'relative', margin: 'auto', height: '100%' }} >
                            <Grid size={{ md: 11, xs: 12 }} offset={{ md: 1 }}>
                                <Footer isForIpadHor={isForIpadHor} isForIpad={isForIpad} isMedium={isMedium} isMobile={isMobile} />
                            </Grid>
                        </GridWrapper>
                    </div>

                    {/*    <div id='nutrizione-in-gravidanza' style={{ position: 'relative', backgroundColor: 'white' }}>
            <GridWrapper style={{ padding: isMobile ? '96px 24px' : '160px 64px', maxWidth: '1728px', margin: 'auto' }} >


              <NutrizioneInGravidanza isMedium={isMedium} isMobile={isMobile} />

            </GridWrapper>

          </div> */}

                </>}
            {/* <div style={{ position: 'fixed', top: '0', left: '0', height: '100%', width: '100%', padding: isMobile ? '0 24px' : '0 64px', zIndex: '500', maxWidth: '1728px' }}>
        <Grid sx={{ height: '100%' }} container spacing={{ xs: 1, md: 3 }} columns={isMobile ? 12 : 12} >
          {grids.map((index) => (
            <Grid sx={{ outline: '1px solid red', opacity: '0.5' }} size={1} key={index}>

            </Grid>
          ))}
        </Grid>
      </div> */}


            {/* <div style={{ height: isMedium ? '100svh' : '1080px', backgroundColor: '#A1BFA6', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', maxWidth: '1728px', margin: 'auto', padding: isMobile ? '24px' : '48px 64px 64px 64px', height: '100%' }}>
          <Header isMedium={isMedium} isMobile={isMobile} />
          <Hero isMedium={isMedium} isMobile={isMobile} />
        </div>
      </div> */}

            {/* <div style={{ backgroundColor: '#A1BFA6' }}>
        <div style={{ maxWidth: '1728px', margin: 'auto' }}>
          <Percorsi isMedium={isMedium} isMobile={isMobile} />

        </div>
      </div> */}

            {/* <div style={{ backgroundColor: '' }}>
        <div style={{ maxWidth: '1728px', margin: 'auto' }}>
          <ChiSono isMedium={isMedium} isMobile={isMobile} />

        </div>
      </div> */}

        </div >
    )
}

export default App
