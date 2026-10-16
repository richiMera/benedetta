
type QuandoVuoiCiSonoProps = {
    isMobile: boolean;
    calendlyUrl?: string;
};

const QuandoVuoiCiSono = ({
    isMobile,
    calendlyUrl = '#',
}: QuandoVuoiCiSonoProps) => {
    return (
        <section
            id="prenota"
            style={{
                padding: isMobile
                    ? '0 24px 40px'
                    : '0 24px clamp(40px, 6vw, 72px)',
                boxSizing: 'border-box',
            }}
        >
            <div
                style={{
                    maxWidth: '1160px',
                    margin: '0 auto',
                    background: 'rgb(157, 180, 147)',
                    borderRadius: '36px',
                    padding: isMobile
                        ? '40px 24px'
                        : 'clamp(40px, 7vw, 88px) clamp(24px, 5vw, 72px)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '20px',
                    boxSizing: 'border-box',
                }}
            >
                <h2
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        letterSpacing: '-0.025em',
                        fontSize: isMobile
                            ? '34px'
                            : 'clamp(34px, 4.6vw, 58px)',
                        lineHeight: 1.05,
                        margin: 0,
                        textWrap: 'balance',
                        color: 'rgb(46, 58, 43)'
                    }}
                >
                    Quando vuoi,{' '}
                    <span
                        style={{
                            position: 'relative',
                            display: 'inline-block',
                        }}
                    >
                        io ci sono.
                        <svg
                            viewBox="0 0 200 60"
                            preserveAspectRatio="none"
                            aria-hidden="true"
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
                                stroke="#FFFFFF"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>
                    </span>
                </h2>

                <p
                    style={{
                        margin: 0,
                        fontSize: isMobile ? '17px' : '19px',
                        lineHeight: 1.6,
                        maxWidth: '520px',
                        textWrap: 'pretty',
                        color: 'rgb(46, 58, 43)'
                    }}
                >
                    Scegli giorno e ora sul calendario. Dopo la prenotazione
                    ricevi il questionario iniziale, da compilare con calma.
                </p>

                <a
                    href={calendlyUrl}
                    target={calendlyUrl.startsWith('https://') ? '_blank' : undefined}
                    rel={calendlyUrl.startsWith('https://') ? 'noopener noreferrer' : undefined}
                    style={{
                        textDecoration: 'none',
                        background: 'rgb(46, 58, 43)',
                        color: 'rgb(251, 248, 243)',
                        padding: '16px 30px',
                        borderRadius: '999px',
                        fontWeight: 700,
                        fontSize: '18px',
                        display: 'inline-block',
                        maxWidth: '100%',
                        boxSizing: 'border-box',
                    }}
                >
                    Prenota su Calendly
                </a>

                <span
                    style={{
                        fontSize: '14px',
                        lineHeight: 1.5,
                        color: 'rgb(46, 58, 43)'
                    }}
                >
                    In studio a Rho e Spresiano, oppure online
                </span>
            </div>
        </section>
    );
};

export default QuandoVuoiCiSono;
