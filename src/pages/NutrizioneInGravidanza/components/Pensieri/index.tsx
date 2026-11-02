
type PensieriProps = {

    isBig: boolean;
    isMobile: boolean;
    isForIpad: boolean;
    isForIpadHor: boolean;
};

const pensieri = [
    <>
        <span style={{ color: '#64a376' }}>“ </span>
        Ho la nausea tutto il giorno e riesco a mangiare solo crackers.
        <span style={{ color: '#64a376' }}>”</span>
    </>,
    <>
        <span style={{ color: '#64a376' }}>“ </span>
        Tutti mi dicono cosa non devo mangiare. Nessuno mi dice cosa posso mangiare.
        <span style={{ color: '#64a376' }}>”</span>
    </>,
    <>
        <span style={{ color: '#64a376' }}>“</span>
        Ho paura di prendere troppo peso. O di non prenderne abbastanza.
        <span style={{ color: '#64a376' }}>”</span>
    </>,
];

const Pensieri = ({ isMobile, isForIpadHor }: PensieriProps) => {
    return (
        <section
            id="pensieri"
            style={{
                background: 'rgb(196, 147, 153)',
                padding: isMobile ? '96px 24px' : '96px 0'

            }}
        >

            <div
                style={{
                    maxWidth: '1160px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '36px',
                    boxSizing: 'border-box',
                    color: '#0F1F15',
                    alignItems: 'center', justifyContent: 'center', position: 'relative'
                }}
            >
                <p className='overline' style={{ marginBottom: '16px', color: 'rgb(61, 31, 35)' }}>I tuoi pensieri</p>
                <h2 style={{ marginBottom: '32px', width: isMobile ? '100%' : isForIpadHor ? '100%' : '63%', textAlign: 'center', }}> Ti è mai capitato <br />di pensare…</h2>

                <div
                    style={{
                        width: '100%',
                        display: 'grid',
                        gridTemplateColumns: isMobile
                            ? 'minmax(0, 1fr)'
                            : 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                        gap: '18px',
                        paddingBottom: '24px'
                    }}
                >
                    {pensieri.map((pensiero, index) => (
                        <div
                            key={index}
                            style={{
                                background: '#F1F8F3',
                                borderRadius: '20px',
                                padding: isMobile ? '22px' : '26px',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500,
                                letterSpacing: '-0.01em',
                                fontSize: isMobile ? '20px' : '30px',
                                lineHeight: 1.35,
                                boxSizing: 'border-box',
                            }}
                        >
                            {pensiero}
                        </div>
                    ))}
                </div>

                <p className='p-large' style={{ marginBottom: '40', textAlign: 'center', color: '#0F1F15', width: isMobile ? '100%' : isForIpadHor ? '100%' : '70%' }}
                >
                    Sono pensieri comuni, e hanno senso. Ne parliamo insieme
                    e troviamo cosa funziona per te, per il tuo corpo e per
                    la tua giornata.
                </p>
            </div>
        </section>
    );
};

export default Pensieri;
