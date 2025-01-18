
import Grid2 from '@mui/material/Grid2';
import arrowIcon from '../.././../assets/img/arrow_forward.svg';
import mainImg from '../.././../assets/img/chi-sono-img.png';
import Grid from '@mui/material/Grid2';
interface Props {
    isMedium?: boolean;
    isMobile?: boolean;

}

const ChiSono: React.FC<Props> = ({ isMedium, isMobile }) => {

    console.log(isMedium, isMobile);


    return (
        <>



            <Grid sx={{ marginBottom: isMobile ? '56px' : '' }} size={{ xs: 12, md: 5 }} offset={{ xs: 0, md: 1 }}>
                <p className='overline' style={{ marginBottom: '32px', }}>chi sono</p>
                <h3 style={{ marginBottom: '32px' }}>Alimentazione consapevole e su misura</h3>
                <p className='p-large' style={{ marginBottom: '32px' }}>Credo fermamente che focalizzarsi su un’alimentazione consapevole, fatta di ascolto dei segnali di fame e sazietà e riconoscimento dei propri bisogni, sia ben più efficace di regole ferree e imposizioni. Insieme possiamo costruire un’alimentazione equilibrata, in cui il cibo è visto come un piacere e una libera scelta, e coltivare un rapporto sereno con cibo, peso e corpo.  </p>
                <p className='p-large' style={{ marginBottom: '30px' }}>Il mio approccio, scientifico e realista, garantisce ad ogni paziente un percorso personalizzato e adeguato alle sue esigenze, trasformando così la dieta in un autentico stile di vita.</p>
                <div style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: 'fit-content' }}>
                    <p style={{ textDecoration: 'underline', marginRight: '8px' }} onClick={() => {
                        console.log('navigaree');
                    }} className='button'>Il mio percorso</p>
                    <img src={arrowIcon} />
                </div>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }} offset={{ xs: 0, md: 1 }} >
                <div style={{
                    height: isMobile ? '500px' : '100%', borderRadius: '24px', width: '100%', backgroundImage: `url(${mainImg})`,
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



