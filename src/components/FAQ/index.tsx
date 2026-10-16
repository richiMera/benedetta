import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import arrowDownIcon from '../../assets/img/arrow-down.svg';
interface Props {
    isMedium: boolean;
    isMobile: boolean;
    type?: string;

}

const FAQ: React.FC<Props> = ({ isMedium, isMobile, type = 'home' }) => {

    console.log(isMedium, isMobile);


    const questions = type === 'home' ? [
        {
            number: '1.',
            question: 'Come funziona il percorso online?',
            answer: 'Il processo è simile a quello di un incontro in presenza, con la differenza sostanziale che la visita avviene tramite videochiamata.'
        },
        {
            number: '2.',
            question: 'Come viene fatta l’analisi della composizione corporea online?',
            answer: 'Prima della videochiamata riceverai una guida per misurare le tue circonferenze corporee tramite un metro da sarta. Al momento della videochiamata dovrai quindi solo riportarle.'
        },
        {
            number: '3.',
            question: 'Quanto dura il percorso insieme?',
            answer: 'La durata di ciascun percorso non segue uno standard fisso, poiché viene definita in base agli obiettivi personali e alle specifiche condizioni dell’individuo. Gli appuntamenti verranno concordati insieme al paziente.'
        },
        {
            number: '4.',
            question: 'Quando riceverò il piano alimentare?',
            answer: 'Entro 7 giorni lavorativi dalla visita.',
        },
        {
            number: '5.',
            question: 'Cosa comprende il piano alimentare?',
            answer: 'Comprende un esempio di menù settimanale di stagione, consigli e raccomandazioni specifici di educazione alimentare.'
        },
        {
            number: '6.',
            question: 'Come si paga la visita online?',
            answer: 'Tramite bonifico.'
        },






    ] : [
        {
            number: '1.',
            question: 'Lavori anche online?',
            answer: 'Sì. Puoi scegliere tra lo studio a Rho o Spresiano e la visita online, con la stessa attenzione e gli stessi materiali.',
        },
        {
            number: '2.',
            question: 'Posso iniziare a qualsiasi settimana?',
            answer: 'Sì. Puoi iniziare quando vuoi, anche a gravidanza avanzata o dopo il parto. Partiamo da dove sei.',
        },
        {
            number: '3.',
            question: 'Serve la richiesta del medico?',
            answer: 'No. Se hai un ginecologo o un’ostetrica di riferimento, possiamo condividere con loro le indicazioni.',
        },
        {
            number: '4.',
            question: 'Cosa porto alla prima visita?',
            answer: 'Gli esami del sangue recenti e, se li hai, i referti delle visite. Il resto lo raccogliamo con il questionario iniziale.',
        },
    ];

    return (
        <div style={{ position: 'relative' }}>

            <p className='overline' style={{ marginBottom: '24px', color: '#9cc8a7' }}>faq</p>
            <h3 style={{ marginBottom: '64px', color: '#F1F8F3' }}>Domande frequenti</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', marginBottom: '64px' }}>
                {questions.map((q: any, index: number) => {
                    return (

                        <Accordion disableGutters sx={{
                            borderRadius: '8px !important', boxShadow: 'none', backgroundColor: 'rgba(241, 248, 243, 0.04)', border: '2px solid rgba(241, 248, 243, 0.04)', padding: isMobile ? '10px 16px' : '16px 32px', '&::before': {
                                display: 'none', // Nasconde il `::before`
                            },
                        }} key={index} >
                            <AccordionSummary
                                sx={{ padding: 0, gap: '8px' }}
                                expandIcon={<img style={{ width: isMobile ? '24px' : '' }} draggable={false} src={arrowDownIcon} />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <p style={{ color: '#F1F8F3' }} className='p-regular'> <span style={{ color: '#9cc8a7' }}>{q.number}</span> {q.question}</p>
                            </AccordionSummary>
                            <AccordionDetails sx={{ padding: '12px 0 12px 0' }} >
                                <p style={{ color: '#bedcc3' }} className='p-regular'>{q.answer}</p>
                            </AccordionDetails>
                        </Accordion>


                    )
                })}
            </div>
            <h4 style={{ marginBottom: '12px', color: '#F1F8F3' }}>Non hai trovato la risposta alla tua domanda?</h4>
            <p style={{ color: '#9cc8a7' }} className='p-small'>Scrivimi all’indirizzo <a style={{ cursor: 'pointer' }} href='mailto:nutrizionistabm@gmail.com'>nutrizionistabm@gmail.com</a> —  ti risponderò il prima possibile.</p>


        </div>
    );
};

export default FAQ;



