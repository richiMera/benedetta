import Button from '../Button';
import Chip from '../Chip';
interface Props {
    isMedium: boolean;
    isMobile: boolean;

}

const Prestazioni: React.FC<Props> = ({ isMedium, isMobile }) => {

    const prestazioni = [
        {
            text: 'Dimagrimento',
            bgColor: '#bee1e6'
        },
        {
            text: 'Allattamento e gravidanza',
            bgColor: '#bee1e6'
        },
        {
            text: 'Alimentazione vegetariana e vegana',
            bgColor: '#bee1e6'
        },
        {
            text: 'Educazione alimentare',
            bgColor: '#bee1e6'
        },
        {
            text: 'Sovrappeso e obesità',
            bgColor: '#bee1e6'
        },

        {
            text: 'Intolleranze e allergie',
            bgColor: '#bee1e6'
        },
        {
            text: 'Disbiosi intestinale',
            bgColor: '#bee1e6'
        },
        {
            text: 'Gonfiore addominale, stitichezza, meteorismo',
            bgColor: '#bee1e6'
        },
        {
            text: 'Dislipidemie',
            bgColor: '#bee1e6'
        },
        {
            text: 'Sindrome dell’intestino irritabile',
            bgColor: '#bee1e6'
        },
    ]

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: isMobile ? '96px 0' : '192px 0', position: 'relative' }}>

            <p className='overline' style={{ marginBottom: '32px' }}>prestazioni</p>
            <h2 style={{ marginBottom: '32px', width: isMobile ? '100%' : '63%', textAlign: 'center' }}>Un percorso fatto su misura per te</h2>
            <p className='p-large' style={{ marginBottom: '80px', textAlign: 'center' }}>Lorem ipsum dolor sit amet dolor sit amet</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: isMobile ? '8px' : '16px', justifyContent: 'center', margin: isMobile ? '0 -24px 80px -24px' : '0 0 80px 0' }}>
                {prestazioni.map((p: any, index: number) => {
                    return (
                        <Chip isMobile={isMobile} key={index} text={p.text} bgColor={p.bgColor} />
                    )
                })}
            </div>
            <Button type={isMobile ? 'small' : 'big'} onClick={() => { console.log('ciao') }} bgColor='#A1BFA6' text='Scopri i percorsi' />

        </div>
    );
};

export default Prestazioni;
