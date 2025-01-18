import { useEffect, useState } from 'react'
import { useMediaQuery } from '@react-hook/media-query';
import './App.css';
import Header from './assets/components/Header';
import Hero from './assets/components/Hero';
import Prestazioni from './assets/components/Prestazioni';
import Percorsi from './assets/components/Percorsi';
import Lenis from 'lenis';
import ChiSono from './assets/components/ChiSono';
import Grid from '@mui/material/Grid2';
import GridWrapper from './assets/components/GridWrapper';
import Filosofia from './assets/components/Filosofia';
import Consulenze from './assets/components/Consulenze';
import DubbiBanner from './assets/components/DubbiBanner';
import DiconoDiMe from './assets/components/DiconoDiMe';
import FAQ from './assets/components/FAQ';
import Footer from './assets/components/Footer';

function App() {

  const isMobile = useMediaQuery('(max-width: 1000px)');
  const isMedium = useMediaQuery('(max-width: 1728px)');
  const grids = Array.from({ length: 12 }, (_, index) => index + 1); // Array [1, 2, ..., 12]


  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

    });

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  }, []);




  // const subHeroContent = [{ title: 'Non giudizio', content: 'Non giudichiamo perche bla bla bla bla vla vla ' }, { title: 'Non giudizio', content: 'Non giudichiamo perche bla bla bla bla vla vla ' }, { title: 'Non giudizio', content: 'Non giudichiamo perche bla bla bla bla vla vla ' }, { title: 'Non giudizio', content: 'Non giudichiamo perche bla bla bla bla vla vla ' },]

  //primo pastello #c0e9c0
  return (
    <div>
      <div style={{ position: 'fixed', top: '0', left: '0', height: '100%', width: '100%', padding: isMobile ? '0 24px' : '0 64px', zIndex: '500', maxWidth: '1728px' }}>
        <Grid sx={{ height: '100%' }} container spacing={{ xs: 1, md: 3 }} columns={isMobile ? 12 : 12} >
          {grids.map((grid, index) => (
            <Grid sx={{ outline: '1px solid red', opacity: '0.5' }} size={1} key={index}>

            </Grid>
          ))}
        </Grid>
      </div>
      <div style={{ height: isMedium ? '100svh' : '1080px', backgroundColor: '#A1BFA6', position: 'relative', overflow: 'hidden' }}>
        <GridWrapper style={{ padding: isMobile ? '24px 24px 0 24px' : ' 48px 64px 0px 64px', maxWidth: '1728px', margin: 'auto' }} >
          <Grid size={12}>
            <Header isMedium={isMedium} isMobile={isMobile} />
            <Hero isMedium={isMedium} isMobile={isMobile} />
          </Grid>
        </GridWrapper>
      </div>

      <div style={{ position: 'relative', }}>
        <GridWrapper style={{ padding: isMobile ? '0 24px' : '0 64px', maxWidth: '1728px', margin: 'auto' }} >
          <Grid size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
            <Prestazioni isMedium={isMedium} isMobile={isMobile} />
          </Grid>
        </GridWrapper>
      </div>

      <div style={{ position: 'relative', backgroundColor: '#A1BFA6', }}>
        <GridWrapper style={{ padding: isMobile ? '96px 24px' : '192px 64px', maxWidth: '1728px', margin: 'auto' }} >
          <Grid size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
            <Percorsi isMedium={isMedium} isMobile={isMobile} />
          </Grid>
        </GridWrapper>
      </div>

      <div style={{ position: 'relative' }}>
        <GridWrapper style={{ padding: isMobile ? '96px 24px' : '192px 64px', maxWidth: '1728px', margin: 'auto' }} >

          <ChiSono isMedium={isMedium} isMobile={isMobile} />

        </GridWrapper>

      </div>

      <div style={{ position: 'relative', backgroundColor: '#2E3C31', color: 'white' }}>
        <GridWrapper style={{ padding: isMobile ? '96px 24px' : '192px 64px', maxWidth: '1728px', margin: 'auto' }} >
          <Grid size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
            <Filosofia isMedium={isMedium} isMobile={isMobile} />
          </Grid>
        </GridWrapper>
      </div>

      <div style={{ position: 'relative' }}>
        <GridWrapper style={{ padding: isMobile ? '96px 24px' : '192px 64px', maxWidth: '1728px', margin: 'auto' }} >
          <Grid size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
            <Consulenze isMedium={isMedium} isMobile={isMobile} />
          </Grid>
        </GridWrapper>
      </div>

      <div style={{ position: 'relative', backgroundColor: '#161D17' }}>
        <GridWrapper style={{ padding: isMobile ? '96px 24px' : '96px 64px', maxWidth: '1728px', margin: 'auto' }} >
          <Grid size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
            <DubbiBanner isMedium={isMedium} isMobile={isMobile} />
          </Grid>
        </GridWrapper>
      </div>

      <div style={{ position: 'relative', }}>
        <GridWrapper style={{ padding: isMobile ? '96px 24px' : '96px 64px', maxWidth: '1728px', margin: 'auto' }} >

          <DiconoDiMe isMedium={isMedium} isMobile={isMobile} />

        </GridWrapper>
      </div>

      <div style={{ position: 'relative', backgroundColor: '#A1BFA6' }}>
        <GridWrapper style={{ padding: isMobile ? '96px 24px' : '96px 64px', maxWidth: '1728px', margin: 'auto' }} >
          <Grid size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
            <FAQ isMedium={isMedium} isMobile={isMobile} />
          </Grid>
        </GridWrapper>
      </div>

      <div style={{ position: 'relative' }}>
        <GridWrapper style={{ padding: isMobile ? '80px 24px 48px 24px' : '80px 64px 48px 64px', maxWidth: '1728px', margin: 'auto' }} >
          <Grid size={{ md: 11, xs: 12 }} offset={{ md: 1 }}>
            <Footer isMedium={isMedium} isMobile={isMobile} />
          </Grid>
        </GridWrapper>
      </div>

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
