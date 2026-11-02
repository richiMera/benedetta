import { Grid2 } from "@mui/material";
import SocialFooter from "../../../../components/SocialFooter";
import Button from "../../../../components/Button";

type QuandoVuoiCiSonoProps = {
    isMobile: boolean;
    isBig: boolean;
    isForIpad: boolean;
    isForIpadHor: boolean;
};

const QuandoVuoiCiSono = ({
    isMobile,

    isForIpad,
    isForIpadHor

}: QuandoVuoiCiSonoProps) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '96px' }}>
            <Grid2 container spacing={3}>
                <Grid2 sx={{ backgroundColor: '#F1F8F3', borderRadius: '32px', padding: isMobile ? '32px' : '64px', display: 'flex', color: '#F1F8F3', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} size={12} >
                    <p className="overline" style={{ marginBottom: '24px', color: '#316A44', textAlign: 'center' }}>Quando vuoi, io ci sono.</p>
                    <h3 style={{ marginBottom: '32px', color: '#0F1F15', textAlign: 'center', width: isMobile ? '100%' : 'calc(60% + 188px)' }}>Prenota il tuo appuntamento, compila il questionario quando vuoi.</h3>
                    <Button type="small" text="Prenota su Calendly" bgColor="#64A376" onClick={() => {

                        window.open('https://calendly.com/benedetta-mosole/consulenza-nutrizionale', '_blank');
                    }} />

                </Grid2>
            </Grid2>
            <SocialFooter
                type={'gravidanza'}
                isMobile={isMobile}
                isForIpad={isForIpad}
                isForIpadHor={isForIpadHor}
            />
        </div>

    );
};

export default QuandoVuoiCiSono;



