
type QuelloCheMangiProps = {
    isMobile: boolean;
};

const QuelloCheMangi = ({ isMobile }: QuelloCheMangiProps) => {
    return (
        <section
            id="quello-che-mangi"
            style={{
                background: 'rgb(46, 58, 43)',
                color: 'rgb(251, 248, 243)',
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
                        : 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
                    gap: '40px',
                    alignItems: 'start',
                    boxSizing: 'border-box',
                }}
            >
                <h2
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        letterSpacing: '-0.025em',
                        fontSize: isMobile
                            ? '32px'
                            : 'clamp(32px, 4vw, 50px)',
                        lineHeight: 1.08,
                        margin: 0,
                        textWrap: 'balance',
                        position: 'relative',
                    }}
                >
                    Quello che mangi oggi parla anche al tuo{' '}
                    <span
                        style={{
                            position: 'relative',
                            display: 'inline-block',
                        }}
                    >
                        bambino/a.
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
                                stroke="#9db493"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>
                    </span>
                </h2>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',
                        fontSize: '18px',
                        lineHeight: 1.6,
                    }}
                >
                    <p
                        style={{
                            margin: 0,
                            textWrap: 'pretty',
                        }}
                    >
                        Gli studi di epigenetica mostrano che lo stato
                        nutrizionale della mamma influenza la salute del
                        bambino/a, anche negli anni dopo la nascita. Per la
                        mia tesi magistrale ho seguito proprio questo:
                        l&apos;alimentazione delle donne dal primo trimestre
                        al parto e l&apos;impatto sugli esiti neonatali.
                    </p>

                    <p
                        style={{
                            margin: 0,
                            color: 'rgb(200, 214, 192)',
                            textWrap: 'pretty',
                        }}
                    >
                        È una buona notizia. Significa che ogni piccola
                        scelta a tavola ha valore.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default QuelloCheMangi;
