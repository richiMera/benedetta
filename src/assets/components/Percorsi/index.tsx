
import Card from '../Card';
interface Props {
    isMedium: boolean;
    isMobile: boolean;

}

const Percorsi: React.FC<Props> = ({ isMedium, isMobile }) => {

    const percorsi = [
        {
            title: 'Percorso 1',
            content: 'Lorem ipsum dolor sit amet consectetur. Magna ornare fermentum commodo arcu fames tortor purus vestibulum. Pellentesque aliquam enim tellus dolor sit libero.'
        },
        {
            title: 'Percorso 2',
            content: 'Lorem ipsum dolor sit amet consectetur. Magna ornare fermentum commodo arcu fames tortor purus vestibulum. Pellentesque aliquam enim tellus dolor sit libero.'
        },
        {
            title: 'Percorso 3',
            content: 'Lorem ipsum dolor sit amet consectetur. Magna ornare fermentum commodo arcu fames tortor purus vestibulum. Pellentesque aliquam enim tellus dolor sit libero.'
        },

    ]

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>

            <p className='overline' style={{ marginBottom: '32px', }}>percorsi</p>
            <h2 style={{ marginBottom: '32px', width: isMobile ? '100%' : '63%', textAlign: 'center' }}>Un percorso fatto su misura per te</h2>
            <p className='p-large' style={{ marginBottom: '80px', textAlign: 'center' }}>Quale fa al caso tuo?</p>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '24px', justifyContent: 'center' }}>
                {percorsi.map((p: any, index: number) => {
                    return (
                        <div style={{ width: isMobile ? '100%' : '33.33%' }} key={index}>
                            <Card bgColor='#eaedea' isMobile={isMobile} content={p.content} title={p.title
                            } />
                        </div>
                    )
                })}
            </div>


        </div>
    );
};

export default Percorsi;



