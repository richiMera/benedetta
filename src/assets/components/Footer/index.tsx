
import instaIcon from '../../../assets/img/insta.svg';
import linkedinIcon from '../../../assets/img/linkedin.svg';
import footerImg from '../../../assets/img/footer-img.png';
import Button from '../Button';
interface Props {
    isMedium: boolean;
    isMobile: boolean;

}

const Footer: React.FC<Props> = ({ isMedium, isMobile }) => {



    return (
        <div>

            <p className='overline' style={{ marginBottom: '24px', }}>contatti</p>
            <h3 style={{ marginBottom: '12px', fontSize: '40px' }}>Sono a tua completa disposizione!</h3>
            <h4 style={{ marginBottom: '48px' }}>mosolenutrizionista@gmail.com</h4>
            <div style={{ color: '#DADADA', marginBottom: '96px' }}>
                <Button type={'small'} bgColor='black' text='Prenota una visita' onClick={() => { console.log('ciao') }} />
            </div>
            <div style={{ display: 'flex', gap: '16px', marginBottom: '56px' }}>
                <img src={instaIcon} />
                <img src={linkedinIcon} />
            </div>
            <p style={{ width: isMobile ? '40%' : '' }} className='caption'>©2025 | Dott.ssa Benedetta Mosole | Tri_A3566 |  P.ta IVA 05474130266</p>

            <img style={{ position: 'absolute', bottom: '0', left: isMobile ? '43%' : '58%', height: isMobile ? '50%' : '108%' }} src={footerImg} />

        </div>
    );
};

export default Footer;



