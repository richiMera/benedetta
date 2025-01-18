import giudizioImg from '../../../assets/img/giudizio.svg';
import fameImg from '../../../assets/img/fame.svg'
import dialogoImg from '../../../assets/img/dialogo.svg';
import corpoImg from '../../../assets/img/corpo.svg';
interface Props {
    isMedium: boolean;
    isMobile: boolean;

}

const Filosofia: React.FC<Props> = ({ isMedium, isMobile }) => {

    const steps = [
        {
            title: '1. Dialogo terapeutico',
            content: 'Lorem ipsum dolor sit',
            img: dialogoImg
        },
        {
            title: '2. Fame e sazietà',
            content: 'Lorem ipsum dolor sit',
            img: fameImg
        },
        {
            title: '3.No giudizio',
            content: 'Lorem ipsum dolor sit',
            img: giudizioImg
        },
        {
            title: '4. Rapporto Corpo - Cibo',
            content: 'Lorem ipsum dolor sit',
            img: corpoImg
        },

    ]

    return (
        <div >

            <p className='overline' style={{ marginBottom: '32px', }}>La mia filosofia</p>
            <p className='p-x-large' style={{ marginBottom: '80px' }}>Nel mio lavoro ho l’obiettivo di guidare le persone verso un’alimentazione più consapevole, varia e sostenibile nel tempo. Un’alimentazione consapevole non si limita a semplici indicazioni dietetiche, ma è un percorso che si costruisce integrando educazione alimentare, ascolto del corpo e gestione delle emozioni nei confronti del cibo.</p>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '60px' : '24px' }}>
                {steps.map((step: any, index: number) => {
                    return (
                        <div style={{ width: isMobile ? '100%' : '25%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} key={index}>
                            <img style={{ marginBottom: '24px' }} src={step.img} />
                            <p style={{ marginBottom: '16px', color: '#DADADA' }} className='p-regular'>{step.title}</p>
                            <p style={{ color: '#DADADA', opacity: '0.5' }} className='p-regular'>{step.content}</p>
                        </div>
                    )
                })}
            </div>


        </div>
    );
};

export default Filosofia;



