import { Grid2 } from "@mui/material";
import Button from "../Button";

interface Props {
    isMobile: boolean;
    isBig: boolean;

}

const DubbiBanner: React.FC<Props> = ({ isBig, isMobile }) => {





    return (
        <Grid2 container spacing={3}>
            <Grid2 sx={{ backgroundColor: '#F1F8F3', borderRadius: '32px', padding: isMobile ? '32px' : '64px', display: 'flex', color: '#F1F8F3', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} size={12} >
                <p className="overline" style={{ marginBottom: '24px', color: '#316A44', textAlign: 'center' }}>Hai dubbi o domande?</p>
                <h3 style={{ marginBottom: '32px', color: '#0F1F15', textAlign: 'center', width: isMobile ? '100%' : 'calc(60% + 188px)' }}>Contattami per una chiamata {isBig && <br />} conoscitiva <span style={{ color: '#64A376' }}>gratuita</span>.</h3>
                <Button type="small" text="Contattami" bgColor="#64A376" onClick={() => {
                    const email = "nutrizionistabm@gmail.com";
                    const subject = "Chiamata conoscitiva"; // Oggetto desiderato
                    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
                }} />

            </Grid2>
        </Grid2>

    );
};

export default DubbiBanner;



