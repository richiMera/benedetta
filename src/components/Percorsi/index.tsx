import firstImg from '../../assets/img/alimentazione-consapevole.webp';
import secondImg from '../../assets/img/percorso-gravidanza.webp';
import thirdImg from '../../assets/img/alimentazione-vegetale.webp';
import Card from '../Card';

interface Props {
    isBig: boolean;
    isMobile: boolean;
    isForIpad: boolean;
    isForIpadHor: boolean;

}

const Percorsi: React.FC<Props> = ({ isBig, isMobile, isForIpad, isForIpadHor }) => {



    const percorsi = [
        {
            title: 'Alimentazione consapevole',
            img: firstImg,
            content: 'Questo percorso è perfetto se desideri fare scelte alimentari più informate e consapevoli. È un programma di EDUCAZIONE ALIMENTARE che ti fornirà nozioni fondamentali, basandosi sui principi di un’alimentazione intuitiva, che rispetta e asseconda i bisogni e i segnali del tuo corpo, riconoscendo anche le tue emozioni. Scoprirai come liberarti dalla mentalità della dieta.'
        },
        {
            title: 'Percorso gravidanza',
            img: secondImg,
            content: "Ti permette di adattare l'alimentazione alle nuove esigenze specifiche della gravidanza, tenendo conto di eventuali condizioni come nausea e stitichezza. Il piano alimentare personalizzato assicura alle mamme di ricevere tutti i nutrienti necessari a supportare il corretto sviluppo del bambino e contribuisce anche al mantenimento di un peso sano durante tutta la gravidanza."
        },
        {
            title: 'Alimentazione vegetale',
            img: thirdImg,
            content: "Percorso adatto sia a chi segue già, sia a chi vuole avvicinarsi a una dieta vegetariana o vegana, con un supporto dedicato a migliorare gli abbinamenti alimentari e prevenire carenze nutrizionali. Se aspiri a un’alimentazione più sostenibile e salutare, puoi esplorare il modello di alimentazione vegetale che meglio rispecchia le tue esigenze e il tuo stile di vita."

        },

    ]

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>

            <p className='overline' style={{ marginBottom: '32px', color: '#9CC8A7' }}>percorsi</p>
            <h2 style={{ marginBottom: '32px', width: isMobile ? '100%' : isForIpadHor ? '100%' : '63%', textAlign: 'center', color: '#F1F8F3' }}>Un percorso fatto <br />su misura per te</h2>
            <p className='p-large' style={{ marginBottom: '80px', textAlign: 'center', color: '#BEDCC3' }}>Un cammino su misura per aiutarti a raggiungere <br />i tuoi obiettivi di salute e benessere</p>
            <div style={{ display: 'flex', flexDirection: isMobile || isForIpad ? 'column' : 'row', gap: '24px', justifyContent: 'center', width: isForIpad ? '70%' : '100%' }}>
                {percorsi.map((p: any, index: number) => {
                    return (
                        <div style={{ width: isMobile || isForIpad ? '100%' : '33.33%', display: 'flex', alignItems: 'stretch' }} key={index}>
                            <Card cardImg={p.img} isBig={isBig} isMobile={isMobile} isForIpad={isForIpad} isForIpadHor={isForIpadHor} content={p.content} title={p.title
                            } />
                        </div>

                    )
                })}
            </div>


        </div>
    );
};

export default Percorsi;



