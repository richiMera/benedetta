import Button from '../Button';
import heroImage from '../../../assets/img/benedetta-mosole.png'

interface Props {
    isMedium: boolean;
    isMobile: boolean;

}

const Hero: React.FC<Props> = ({ isMedium, isMobile }) => {


    console.log(isMobile);




    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ backgroundColor: 'white', padding: isMobile ? '32px' : '64px', width: '100%', borderRadius: isMobile ? '24px' : '56px', height: !isMedium ? '734px' : isMobile ? '600px' : '' }}>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <div>
                        <p className='p-regular' style={{ marginBottom: '24px', }}>lorem ipsum</p>
                        <h1 style={{ marginBottom: isMobile ? '14px' : '64px', width: isMobile ? '100%' : '70%', }}>Smettila di rimandare, inizia oggi</h1>
                        <p className='p-large' style={{ marginBottom: '40px', width: isMobile ? '80%' : '40%' }}>Sono Benedetta e posso aiutarti a trovare un'alimentazione di benessere e a coltivare un rapporto sereno con cibo, peso e corpo.</p>
                    </div>
                    <div>
                        <Button type={isMobile ? 'small' : 'big'} bgColor='#A1BFA6' text='Dimmi di più' onClick={() => { console.log('ciao') }} />
                    </div>
                </div>

            </div>
            <img style={{ position: 'absolute', bottom: 0, left: isMobile ? '48%' : '53%', height: isMobile ? '50%' : '87%' }} src={heroImage} />
        </div>
    );
};

export default Hero;
