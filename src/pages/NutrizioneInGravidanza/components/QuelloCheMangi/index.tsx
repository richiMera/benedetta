
type QuelloCheMangiProps = {
    isMobile: boolean;
};

const QuelloCheMangi = ({ isMobile }: QuelloCheMangiProps) => {
    return (
        <section
            id="quello-che-mangi"
            style={{

                color: 'rgb(241, 248, 243)',
                maxWidth: '1160px',
                margin: '0 auto',
                padding: isMobile
                    ? '56px 24px'
                    : 'clamp(56px, 8vw, 112px) 24px',
            }}
        >
            <p className='overline' style={{ marginBottom: '32px', color: '#9CC8A7' }}>nutrizione</p>
            <div
                style={{


                    display: 'grid',
                    gridTemplateColumns: isMobile
                        ? 'minmax(0, 1fr)'
                        : 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
                    gap: '40px',
                    alignItems: 'start',
                    boxSizing: 'border-box',
                }}
            >


                <h3 style={{
                    marginBottom: '64px', color: '#F1F8F3', lineHeight: 1.08,
                    margin: 0,
                    textWrap: 'balance',
                    position: 'relative',
                }}>
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
                                stroke="rgb(100, 163, 118)"
                                strokeWidth="3"
                                strokeLinecap="round"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>
                    </span>
                </h3>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '16px',

                        lineHeight: 1.6,
                    }}
                >
                    <p className="p-large"
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
                        className="p-large"
                        style={{
                            margin: 0,
                            color: 'rgb(190, 220, 195)',
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
