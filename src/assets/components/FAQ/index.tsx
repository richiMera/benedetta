import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import arrowDownIcon from '../../../assets/img/arrow-down.png';

import Card from '../Card';
interface Props {
    isMedium: boolean;
    isMobile: boolean;

}

const FAQ: React.FC<Props> = ({ isMedium, isMobile }) => {

    console.log(isMedium, isMobile);


    const questions = [
        {
            question: 'Percorso 1',
            answer: 'Lorem ipsum dolor sit amet consectetur. Magna ornare fermentum commodo arcu fames tortor purus vestibulum. Pellentesque aliquam enim tellus dolor sit libero.'
        },
        {
            question: 'Percorso 2',
            answer: 'Lorem ipsum dolor sit amet consectetur. Magna ornare fermentum commodo arcu fames tortor purus vestibulum. Pellentesque aliquam enim tellus dolor sit libero.'
        },
        {
            question: 'Percorso 3',
            answer: 'Lorem ipsum dolor sit amet consectetur. Magna ornare fermentum commodo arcu fames tortor purus vestibulum. Pellentesque aliquam enim tellus dolor sit libero.'
        },

    ]

    return (
        <div style={{ position: 'relative' }}>

            <p className='overline' style={{ marginBottom: '24px', }}>percorsi</p>
            <h3 style={{ marginBottom: '64px' }}>Un percorso fatto su misura per te</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', marginBottom: '64px' }}>
                {questions.map((q: any, index: number) => {
                    return (

                        <Accordion sx={{ borderRadius: '8px', boxShadow: 'none' }} key={index} >
                            <AccordionSummary
                                expandIcon={<img src={arrowDownIcon} />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <p className='p-regular'>{q.question}</p>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p className='p-regular'>{q.answer}</p>
                            </AccordionDetails>
                        </Accordion>


                    )
                })}
            </div>
            <h4 style={{ marginBottom: '12px' }}>Non hai trovato la risposta alla tua domanda?</h4>
            <p className='p-small'>Scrivimi all’indirizzo info@mosolenutrizionista.it —  ti risponderò il prima possibile.</p>


        </div>
    );
};

export default FAQ;



