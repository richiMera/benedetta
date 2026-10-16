
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

function NutrizioneInGravidanza() {
    const isMobile = useMediaQuery('(max-width: 767px)');
    const isForIpad = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');
    const isForIpadHor = useMediaQuery('(min-width: 1024px) and (max-width: 1366px)');
    const forBurger = useMediaQuery('(min-width: 1024px) and (max-width: 1300px)');


    const isMedium = useMediaQuery('(max-width: 1728px)');



    return (
        <main>
            <div
                style={{
                    maxWidth: '1160px',
                    margin: '0 auto',
                    padding: isMobile ? '24px' : '32px 24px 0',
                }}
            >
                <HeaderGravidanza
                    isMobile={isMobile}
                    isForIpad={isForIpad}
                    isForIpadHor={isForIpadHor}
                    forBurger={forBurger}
                />
            </div>
            <Hero
                isMobile={isMobile}

            />
            <Pensieri isMobile={isMobile} />
            <InCheFaseSei isMobile={isMobile} />
            <QuelloCheMangi isMobile={isMobile} />
            <SpecialitaGravidanza isMobile={isMobile} />
            <div id='dicono-di-me-grav' style={{ position: 'relative', backgroundColor: '#F1F8F3' }}>
                <GridWrapper style={{ padding: isMobile ? '96px 0 96px 0' : '96px 0', maxWidth: '1728px', margin: 'auto' }} >

                    <DiconoDiMe type='gravidanza' isMedium={isMedium} isMobile={isMobile} />

                </GridWrapper>
            </div>
            <IlPercorso isMobile={isMobile} />
            <div id='faq-grav' style={{ position: 'relative', backgroundColor: '#0f1f15', marginBottom: '48px' }}>
                <GridWrapper style={{ padding: isMobile ? '96px 24px' : '96px 64px', maxWidth: '1728px', margin: 'auto' }} >
                    <Grid size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
                        <FAQ type='gravidanza' isMedium={isMedium} isMobile={isMobile} />
                    </Grid>
                </GridWrapper>
            </div>
            <QuandoVuoiCiSono
                isMobile={isMobile}
                calendlyUrl="https://calendly.com/INSERISCI-IL-LINK"
            />
        </main>
    );
}

export default NutrizioneInGravidanza;
