import type { CSSProperties } from 'react';

type SpecialitaGravidanzaProps = {
    isMobile: boolean;
};

const SpecialitaGravidanza = ({
    isMobile,
}: SpecialitaGravidanzaProps) => {
    const badgeStyle: CSSProperties = {
        border: '1.5px solid rgb(46, 58, 43)',
        borderRadius: '999px',
        padding: '5px 14px',
    };

    return (
        <section
            id="chi-sono"
            style={{
                background: 'rgb(223, 205, 190)',
            }}
        >
            <div
                style={{
                    maxWidth: '1160px',
                    margin: '0 auto',
                    padding: isMobile
                        ? '56px 24px'
                        : 'clamp(56px, 8vw, 112px) 24px',
                    display: 'grid',
                    gridTemplateColumns: isMobile
                        ? 'minmax(0, 1fr)'
                        : 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
                    gap: isMobile ? '32px' : 'clamp(32px, 5vw, 72px)',
                    alignItems: 'center',
                }}
            >
                {/* Foto */}
                <div
                    style={{
                        aspectRatio: '1 / 1',
                        maxWidth: '460px',
                        width: '100%',
                        justifySelf: isMobile ? 'center' : 'start',
                        overflow: 'hidden',
                        borderRadius: '50%',
                        background: '#E8EDE5',
                    }}
                >
                    {/* Inserire qui la foto di Benedetta */}
                </div>

                {/* Testi */}
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '18px',
                    }}
                >
                    <span
                        style={{
                            fontSize: '13px',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'rgb(90, 115, 80)',
                            fontWeight: 700,
                        }}
                    >
                        Chi sono
                    </span>

                    <h2
                        style={{
                            fontFamily: 'Inter, sans-serif',
                            fontWeight: 600,
                            letterSpacing: '-0.025em',
                            fontSize: 'clamp(30px, 3.6vw, 44px)',
                            lineHeight: 1.1,
                            margin: 0,
                            textWrap: 'balance',
                        }}
                    >
                        Sono Benedetta, e{' '}
                        <span
                            style={{
                                position: 'relative',
                                display: 'inline-block',
                            }}
                        >
                            ascolto
                            <svg
                                viewBox="0 0 200 60"
                                preserveAspectRatio="none"
                                style={{
                                    position: 'absolute',
                                    left: '-6%',
                                    top: '-12%',
                                    width: '112%',
                                    height: '128%',
                                    overflow: 'visible',
                                    pointerEvents: 'none',
                                }}
                            >
                                <path
                                    d="M24 40 C 8 14, 110 0, 182 16 C 206 24, 192 52, 112 55 C 48 58, 6 50, 16 28"
                                    fill="none"
                                    stroke="#9db493"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </svg>
                        </span>{' '}
                        prima di consigliare.
                    </h2>

                    <p
                        style={{
                            margin: 0,
                            fontSize: isMobile ? '16px' : '17px',
                            lineHeight: 1.65,
                        }}
                    >
                        Ciao, sono Benedetta Mosole, Biologa Nutrizionista
                        specializzata in gravidanza a Rho, Spresiano e online.
                        Ti accompagno prima, durante e dopo la gestazione con
                        sicurezza scientifica, ascolto ed empatia. Dalla ricerca
                        del piccolo al post-parto, ti aiuto a vivere ogni fase
                        con serenità e senza privazioni. Nel mio studio troverai
                        risposte certe, soluzioni pratiche per gestire con
                        equilibrio disturbi come nausea, reflusso, stitichezza,
                        insulino-resistenza o diabete gestazionale, e tecniche
                        di Mindful Eating per migliorare il tuo rapporto con il
                        cibo.
                    </p>

                    {/* Punti di forza */}
                    <div
                        style={{
                            display: 'flex',
                            gap: '10px',
                            flexWrap: 'wrap',
                            fontSize: '14px',
                        }}
                    >
                        <span style={badgeStyle}>
                            Scienza e affidabilità
                        </span>

                        <span style={badgeStyle}>
                            2 pubblicazioni scientifiche
                        </span>

                        <span style={badgeStyle}>
                            Mindful eating
                        </span>

                        <span style={badgeStyle}>
                            Ascolto ed empatia
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SpecialitaGravidanza;