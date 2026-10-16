
import instaIcon from '../../assets/img/insta.svg';
import linkedinIcon from '../../assets/img/linkedin.svg';
import footerImg from '../../assets/img/benedetta-mosole-footer.webp';
import Button from '../Button';
import './style.css';
interface Props {
    isMedium: boolean;
    isMobile: boolean;
    isForIpad: boolean;
    isForIpadHor: boolean;


}

const Footer: React.FC<Props> = ({ isMedium, isMobile, isForIpad, isForIpadHor }) => {


    console.log(isMedium);

    return (
        <div>

            <p className='overline' style={{ marginBottom: '24px', color: '#275538' }}>contatti</p>
            <h3 style={{ marginBottom: '12px', width: isMobile || isForIpad ? '100%' : '60%', color: '#0f1f15' }}>Contattami per fissare <br />una consulenza</h3>
            <h4 onClick={() => {
                const email = "nutrizionistabm@gmail.com";
                const subject = "Consulenza"; // Oggetto desiderato
                window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}`;
            }} style={{ marginBottom: '48px', fontSize: isMobile ? '20px' : isForIpadHor || isForIpad ? '24px' : '', color: '#275538', cursor: 'pointer' }}>nutrizionistabm@gmail.com</h4>
            <div style={{ color: '#ddeedf', marginBottom: '96px' }}>
                <Button type={'big'} bgColor='#316a44' text='Prenota una visita' onClick={() => {
                    window.open('https://www.miodottore.it/benedetta-mosole/nutrizionista/rho#profile-pricing', '_blank');
                }} />
            </div>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '56px' }}>
                <a href='https://www.instagram.com/drittialsodo/' target='_blank'>
                    <img draggable={false} src={instaIcon} />
                </a>
                <a href='https://it.linkedin.com/in/benedettamosole' target='_blank'>
                    <img draggable={false} src={linkedinIcon} />
                </a>

            </div>
            <p style={{ width: isMobile || isForIpad || isForIpadHor ? '40%' : '', color: '#0f1f15', }} className='caption'>©2025 | Dott.ssa Benedetta Mosole | Ordine dei Biologi Tri_A3566 |  P.ta IVA 05474130266</p>

            <img onContextMenu={(e: any) => { e.preventDefault() }} draggable={false} style={{ position: 'absolute', bottom: '0', right: isMobile ? '-20%' : isForIpad ? '0%' : isForIpadHor ? '0%' : '0', width: isMobile ? '90%' : isForIpad ? '60%' : isForIpadHor ? '50%' : '45%' }} src={footerImg} />

        </div>
    );
};

export default Footer;



