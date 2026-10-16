import giudizioImg from '../../assets/img/no-giudizio.svg';
import fameImg from '../../assets/img/fame.svg'
import dialogoImg from '../../assets/img/alleanza.svg';
import corpoImg from '../../assets/img/corpo-cibo.svg';
import { Grid2 } from '@mui/material';
interface Props {
    isMedium: boolean;
    isMobile: boolean;

}

const Filosofia: React.FC<Props> = ({ isMedium, isMobile }) => {
    console.log(isMedium, isMobile);


    const steps = [
        {
            title: 'Alleanza terapeutica',
            content: 'Insieme intraprendiamo un percorso di ascolto attivo, utile per favorire un cambiamento autentico e significativo',
            img: dialogoImg
        },
        {
            title: 'Fame e sazietà',
            content: 'Sono segnali che guidano naturalmente il corpo e riscoprirli è la base per l’autoregolazione',
            img: fameImg
        },
        {
            title: 'NO giudizi',
            content: 'Verso se stessi e verso il cibo',
            img: giudizioImg
        },
        {
            title: 'Rapporto Corpo - Cibo',
            content: 'Far pace con il cibo permette un rapporto sereno con il corpo e viceversa',
            img: corpoImg
        },

    ]

    return (
        <div >

            <p className='overline' style={{ marginBottom: '32px', color: '#316A44' }}>La mia filosofia</p>
            <p className='p-x-large' style={{ marginBottom: '80px', fontSize: isMobile ? '32px' : '48px' }}><span style={{ color: '#64a376' }}>“</span>Un'alimentazione consapevole non si limita a semplici indicazioni dietetiche, ma è un percorso che integra educazione alimentare, ascolto del corpo e gestione delle emozioni legate al cibo.<span style={{ color: '#64a376' }}>”</span></p>

            <Grid2 container spacing={2}>
                {steps.map((step: any, index: number) => {
                    return (
                        <Grid2 sx={{ display: 'flex', alignItems: 'stretch' }} size={{ xs: 12, md: 6 }} key={index}>
                            <div style={{ width: '100%', borderRadius: '16px', backgroundColor: '#DDEEDF', padding: '32px' }}>
                                <img draggable={false} style={{ marginBottom: '64px', }} src={step.img} />
                                <h4 style={{ marginBottom: '8px', color: '#0F1F15' }} >{step.title}</h4>
                                <p style={{ color: '#0F1F15' }} className='p-small'>{step.content}</p>
                            </div>
                        </Grid2>
                    )
                })}
            </Grid2>


        </div>
    );
};

export default Filosofia;



