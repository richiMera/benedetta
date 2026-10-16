
import heroIage from '../../../../assets/img/Caroselli - Benedetta Mosole (1).png'
type HeroProps = {
    isMobile: boolean;

};

const Hero = ({ isMobile }: HeroProps) => {
    return (
        <section
            id="top"
            style={{
                maxWidth: '1160px',
                margin: '0 auto',
                padding: isMobile
                    ? '40px 24px'
                    : 'clamp(40px, 7vw, 96px) 24px',
                display: 'grid',
                gridTemplateColumns: isMobile
                    ? 'minmax(0, 1fr)'
                    : 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
                gap: isMobile ? '32px' : 'clamp(32px, 5vw, 72px)',
                alignItems: 'center',
            }}
        >
            {/* Testi */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '22px',
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
                    NUTRIZIONE IN GRAVIDANZA · RHO, SPRESIANO E ONLINE
                </span>

                <h1
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        letterSpacing: '-0.015em',
                        fontSize: isMobile
                            ? 'clamp(30px, 7vw, 38px)'
                            : 'clamp(30px, 3.5vw, 44px)',
                        lineHeight: 1.12,
                        margin: 0,
                    }}
                >
                    La tua nutrizione
                    <br />
                    in gravidanza,{' '}
                    <em
                        style={{
                            color: 'rgb(90, 115, 80)',
                            fontStyle: 'normal',
                            fontWeight: 600,
                        }}
                    >
                        vissuta
                        <br />
                        con{' '}
                        <span
                            style={{
                                position: 'relative',
                                display: 'inline-block',
                                whiteSpace: 'nowrap',
                                fontWeight: 600,
                            }}
                        >
                            serenità
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
                        e sicurezza
                    </em>
                </h1>

                <p
                    style={{
                        margin: 0,
                        fontSize: isMobile ? '17px' : '19px',
                        lineHeight: 1.5,
                        maxWidth: '520px',
                        textWrap: 'pretty',
                    }}
                >
                    Ti accompagno dalla ricerca della gravidanza al
                    post-parto con risposte certe, ascolto ed empatia.
                    Per prenderti cura di te e del tuo bambino/a,
                    senza ansie né privazioni.
                </p>

                {/* CTA */}
                <div
                    style={{
                        display: 'flex',
                        gap: '12px',
                        flexWrap: 'wrap',
                    }}
                >
                    <a
                        href="#prenota"
                        style={{
                            textDecoration: 'none',
                            background: 'rgb(157, 180, 147)',
                            color: 'rgb(46, 58, 43)',
                            padding: '14px 26px',
                            borderRadius: '999px',
                            fontWeight: 700,
                            textAlign: 'center',
                        }}
                    >
                        Prenota la prima visita
                    </a>

                    <a
                        href="#percorso"
                        style={{
                            textDecoration: 'none',
                            border: '1.5px solid rgb(46, 58, 43)',
                            color: 'rgb(46, 58, 43)',
                            padding: '12.5px 24px',
                            borderRadius: '999px',
                            fontWeight: 500,
                            textAlign: 'center',
                        }}
                    >
                        Scopri il percorso
                    </a>
                </div>
            </div>

            {/* Immagine */}
            <div
                style={{
                    position: 'relative',
                    aspectRatio: '4 / 5',
                    width: '100%',
                    maxHeight: '600px',
                    marginTop: isMobile ? '8px' : 0,
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        inset: '18px -18px -18px 18px',
                        background: 'rgb(157, 180, 147)',
                        borderRadius: '220px 220px 24px 24px',
                    }}
                />

                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        overflow: 'hidden',
                        borderRadius: '220px 220px 24px 24px',
                        background: '#E8EDE5',
                    }}
                >

                    <img
                        src={heroIage}
                        alt="Donna in gravidanza in un ambiente luminoso"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                        }}
                    />

                </div>
            </div>
        </section>
    );
};

export default Hero;
