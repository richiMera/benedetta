
type PensieriProps = {
    isMobile: boolean;
};

const pensieri = [
    '"Ho la nausea tutto il giorno e riesco a mangiare solo crackers."',
    '"Tutti mi dicono cosa non devo mangiare. Nessuno mi dice cosa posso mangiare."',
    '"Ho paura di prendere troppo peso. O di non prenderne abbastanza."',
];

const Pensieri = ({ isMobile }: PensieriProps) => {
    return (
        <section
            id="pensieri"
            style={{
                background: 'rgb(217, 166, 163)',
            }}
        >
            <div
                style={{
                    maxWidth: '1160px',
                    margin: '0 auto',
                    padding: isMobile
                        ? '56px 24px'
                        : 'clamp(56px, 7vw, 96px) 24px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '36px',
                    boxSizing: 'border-box',
                }}
            >
                <h2
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        letterSpacing: '-0.025em',
                        fontSize: isMobile
                            ? '30px'
                            : 'clamp(30px, 3.6vw, 44px)',
                        lineHeight: 1.1,
                        margin: 0,
                        maxWidth: '640px',
                        textWrap: 'balance',
                    }}
                >
                    Forse, in questi giorni, ti è capitato di pensare…
                </h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile
                            ? 'minmax(0, 1fr)'
                            : 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
                        gap: '18px',
                    }}
                >
                    {pensieri.map((pensiero, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'rgb(251, 248, 243)',
                                borderRadius: '20px',
                                padding: isMobile ? '22px' : '26px',
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 500,
                                letterSpacing: '-0.01em',
                                fontSize: isMobile ? '20px' : '22px',
                                lineHeight: 1.35,
                                boxSizing: 'border-box',
                            }}
                        >
                            {pensiero}
                        </div>
                    ))}
                </div>

                <p
                    style={{
                        margin: 0,
                        fontSize: isMobile ? '17px' : '19px',
                        lineHeight: 1.5,
                        maxWidth: '620px',
                        textWrap: 'pretty',
                    }}
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
