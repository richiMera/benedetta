import arrowDownIcon from '../../assets/img/arrow-down.svg';
import Chip from '../Chip';
interface Props {
    isMedium: boolean;
    isMobile: boolean;

}

const Prestazioni: React.FC<Props> = ({ isMedium, isMobile }) => {

    console.log(isMedium);


    const prestazioni = [
        {
            text: 'Dimagrimento',
            bgColor: '#bee1e6'
        },
        {
            text: 'Gravidanza e allattamento',
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
            text: 'Incremento massa muscolare',
            bgColor: '#bee1e6'
        },
        {
            text: 'Disturbi intestinali',
            bgColor: '#bee1e6'
        },
        {
            text: 'Dislipidemie',
            bgColor: '#bee1e6'
        },
        {
            text: 'Disbiosi',
            bgColor: '#bee1e6'
        },


    ]

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: isMobile ? '96px 0' : '192px 0', position: 'relative' }}>

            <p className='overline' style={{ marginBottom: '32px', color: '#316A44' }}>focus</p>
            <h2 style={{ marginBottom: '32px', width: isMobile ? '100%' : '63%', textAlign: 'center', color: '#0F1F15' }}>Le mie aree
                <br />di competenza</h2>
            <p className='p-large' style={{ marginBottom: '80px', textAlign: 'center', color: '#21442E' }}>Dal raggiungimento dei tuoi obiettivi alimentari alla gestione della tua salute, <br />
                posso aiutarti a trovare l’equilibrio perfetto</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', margin: isMobile ? '0 -0 80px 0' : '0 0 80px 0' }}>
                {prestazioni.map((p: any, index: number) => {
                    return (
                        <Chip isMobile={isMobile} key={index} text={p.text} />
                    )
                })}
            </div>
            <a href='#percorsi' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexDirection: 'column' }}>
                <p style={{ color: '#0F1F15' }} className='button'>Scopri i percorsi</p>
                <img draggable={false} src={arrowDownIcon} />
            </a>

        </div>
    );
};

export default Prestazioni;
