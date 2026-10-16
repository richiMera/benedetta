import Button from '../Button';
import heroImage from '../../assets/img/benedetta-mosole-hero.png.webp'
import vectorImg from '../../assets/img/vector.svg'



interface Props {
    isMobile: boolean;
    isBig: boolean;
    isForIpad: boolean;
    isForIpadHor: boolean;

}

const Hero: React.FC<Props> = ({ isMobile, isBig, isForIpad, isForIpadHor }) => {


    console.log(isMobile);






    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ backgroundColor: '#F1F8F3', padding: isMobile ? '32px' : (isForIpad || isForIpadHor) ? '48px' : '64px', width: '100%', borderRadius: isMobile || isForIpad ? '24px' : '56px', height: 'auto' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', color: '#0F1F15' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: isMobile ? '8px' : '24px' }}>
                            <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#64A376' }}></div>
                            <p className={isMobile ? 'p-small' : 'p-regular'}> Ennesima dieta o nuovo stile di vita?</p>
                        </div>
                        <h1 style={{ marginBottom: isMobile ? '14px' : '24px', width: isMobile ? '100%' : isForIpad ? '65%' : '58%', fontSize: isBig ? '80px' : isForIpad ? '64px' : '' }}>Non è mai troppo tardi per prenderti cura  <span style={{ position: 'relative', fontWeight: '500', }}>di te <img draggable={false} style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: '150%', }} src={vectorImg} /></span></h1>
                        <p className={isMobile || isForIpad ? 'p-regular' : 'p-large'} style={{ marginBottom: isMobile || isForIpad ? '40px' : '80px', width: isMobile ? '60%' : isForIpad ? '52%' : '40%', color: '#1C3827', fontSize: isBig ? '24px' : isForIpadHor ? '18px' : '' }}>Sono Benedetta e posso aiutarti a costruire un’alimentazione equilibrata e a coltivare un rapporto sereno con il cibo e con il corpo.
                        </p>

                    </div>
                    <div style={{ color: '#F1F8F3' }}>
                        <Button href='#prestazioni' type={isMobile ? 'small' : 'big'} bgColor='#64A376' text='Dimmi di più' onClick={() => { console.log('ciao') }} />
                    </div>
                </div>

            </div>

            {/* <img onContextMenu={(e: any) => { e.preventDefault() }} draggable={false} style={{
                position: 'absolute', bottom: 0, left: isMobile ? '52vw' : isForIpad ? '50%' : '53%', width: imageWidth,

            }} src={heroImage} /> */}
            <img onContextMenu={(e: any) => { e.preventDefault() }} draggable={false} style={{
                position: 'absolute', bottom: 0, left: isMobile ? '52vw' : isForIpad ? '50%' : '53%', width: 'auto', height: isMobile ? '47%' : isForIpad ? '55%' : isForIpadHor ? '80%' : isBig ? '85%' : '85%',  // Mantiene il rapporto di aspetto

            }} src={heroImage} />

        </div>
    );
};

export default Hero;
