
import { useMediaQuery } from '@react-hook/media-query';
import Hero from './components/Hero';
import Pensieri from './components/Pensieri';
import QuelloCheMangi from './components/QuelloCheMangi';
import IlPercorso from './components/IlPercorso';
import InCheFaseSei from './components/InCheFaseSei';
import GridWrapper from '../../components/GridWrapper';
import DiconoDiMe from '../../components/DiconoDiMe';
import Grid from '@mui/material/Grid2';
import FAQ from '../../components/FAQ';
import QuandoVuoiCiSono from './components/QuandoVuoiCiSono';
import SpecialitaGravidanza from './components/SpecialitaGravidanza';
import HeaderGravidanza from './components/HeaderGravidanza.tsx';
import useLenis from '../../hooks/useLenis.ts';



function NutrizioneInGravidanza() {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isForIpad = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
    const isForIpadHor = useMediaQuery('(min-width: 1024px) and (max-width: 1366px)');
    const forBurger = useMediaQuery('(min-width: 1024px) and (max-width: 1300px)');
    const isBig = useMediaQuery('(min-width: 1729px)');
    useLenis();

    const isMedium = useMediaQuery('(max-width: 1728px)');





    return (
        <main>
            <GridWrapper style={{ backgroundColor: '#F1F8F3', padding: isMobile ? '24px 24px 0 24px' : ' 48px 64px 0 64px', maxWidth: '1728px', position: 'relative', margin: 'auto', height: '100%' }} >
                <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} size={12}>
                    <HeaderGravidanza
                        isMobile={isMobile}
                        isForIpad={isForIpad}
                        isForIpadHor={isForIpadHor}
                        forBurger={forBurger}
                    />
                </Grid>
            </GridWrapper>


            <div style={{ backgroundColor: '#F1F8F3', }}>
                <Hero
                    isMobile={isMobile}

                />
            </div>

            <Pensieri isForIpadHor={isForIpadHor} isForIpad={isForIpad} isBig={isBig} isMobile={isMobile} />
            <div style={{ backgroundColor: '#F1F8F3' }}>
                <InCheFaseSei isForIpadHor={isForIpadHor} isForIpad={isForIpad} isBig={isBig} isMobile={isMobile} />
            </div>

            <div style={{ background: 'rgb(15, 31, 21)', }}>
                <QuelloCheMangi isMobile={isMobile} />
            </div>

            <SpecialitaGravidanza isMobile={isMobile} />

            <IlPercorso isMobile={isMobile} />
            <div id='dicono-di-me-grav' style={{ position: 'relative', backgroundColor: '#F1F8F3' }}>
                <GridWrapper style={{ padding: isMobile ? '96px 0 96px 0' : '96px 0', maxWidth: '1728px', margin: 'auto' }} >

                    <DiconoDiMe type='gravidanza' isMedium={isMedium} isMobile={isMobile} />

                </GridWrapper>
            </div>
            <div id='faq-grav' style={{ position: 'relative', backgroundColor: '#0f1f15' }}>
                <GridWrapper style={{ padding: isMobile ? '96px 24px' : '96px 64px', maxWidth: '1728px', margin: 'auto' }} >
                    <Grid size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
                        <FAQ type='gravidanza' isMedium={isMedium} isMobile={isMobile} />
                    </Grid>
                </GridWrapper>
            </div>
            <div style={{ position: 'relative', backgroundColor: '#9CC8A7' }}>
                <GridWrapper style={{ padding: isMobile ? '96px 24px' : '96px 64px', maxWidth: '1728px', margin: 'auto' }} >
                    <Grid size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
                        <QuandoVuoiCiSono
                            isForIpad={isForIpad}
                            isForIpadHor={isForIpadHor}
                            isBig={isBig}
                            isMobile={isMobile}

                        />
                    </Grid>
                </GridWrapper>
            </div>


        </main>
    );
}

export default NutrizioneInGravidanza;
