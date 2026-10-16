import Card from '../Card';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
interface Props {
    isForIpadHor: boolean;
    isMobile: boolean;

}

const PercorsoGravidanza: React.FC<Props> = ({ isForIpadHor, isMobile }) => {


    const navigate = useNavigate();

    const percorsi = [
        {
            number: '01',
            preTitle: 'PRIMA',
            title: 'Pre-concepimento',
            content:
                'Prepariamo il corpo alla gravidanza con un’alimentazione che sostiene la fertilità e corregge eventuali carenze nutrizionali.',
        },
        {
            number: '02',
            preTitle: 'DURANTE',
            title: 'Gravidanza',
            content:
                'Un piano alimentare che si adatta a ogni trimestre, per il benessere tuo e del bambino/a, senza rinunce inutili.',
        },
        {
            number: '03',
            preTitle: 'DOPO',
            title: 'Post parto e allattamento',
            content:
                'Recuperi energie e forma con gradualità, rispettando i tempi del tuo corpo e le esigenze dell’allattamento.',
        },
    ];




    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>

            <p className='overline' style={{ marginBottom: '32px', color: 'rgb(61, 31, 35)' }}>PERCORSO GRAVIDANZA
            </p>
            <h2 style={{ marginBottom: '32px', width: isMobile ? '100%' : isForIpadHor ? '100%' : '80%', textAlign: 'center', color: 'rgb(14, 31, 21)' }}>Ti accompagno in ogni fase
                della maternità</h2>
            <p className='p-large' style={{ marginBottom: '80px', textAlign: 'center', color: 'rgb(42, 20, 23)', width: isMobile ? '100%' : isForIpadHor ? '100%' : '80%', }}>Seguo le donne dal pre-concepimento al post parto, con un percorso nutrizionale che cambia insieme a te
                e alle esigenze di ogni momento.
            </p>

            <Grid
                sx={{
                    marginBottom: '80px',
                    alignItems: 'stretch',
                }}
                container
                spacing={3}
            >
                {percorsi.map((p: any, index: number) => {
                    return (
                        <Grid
                            size={{ xs: 12, md: 4 }}
                            key={index}
                            sx={{
                                display: 'flex',
                            }}
                        >
                            <Card
                                type="percorsogravidanza"
                                number={p.number}
                                preTitle={p.preTitle}
                                title={p.title}
                                content={p.content}
                                onClickBtn={p.onClick}
                                isMobile={isMobile}

                            />
                        </Grid>
                    )
                })}
            </Grid>

            <div style={{ color: '#F1F8F3' }}>
                <Button
                    type={isMobile ? 'small' : 'big'}
                    bgColor="rgb(14, 31, 21)"
                    text="Scopri il percorso gravidanza"
                    onClick={() => navigate('/nutrizione-in-gravidanza')}
                />
            </div>


        </div>
    );
};

export default PercorsoGravidanza;



