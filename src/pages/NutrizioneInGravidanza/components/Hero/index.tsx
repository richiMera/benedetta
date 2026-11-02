
import heroIage from '../../../../assets/img/Caroselli - Benedetta Mosole (1).png'
import Button from '../../../../components/Button';
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
                    : '0 24px clamp(40px, 7vw, 96px) 24px',
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
                <p className='overline' style={{ color: '#316A44' }}> NUTRIZIONE IN GRAVIDANZA · RHO, SPRESIANO E ONLINE</p>
                <h1
                    style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 600,
                        color: '#0F1F15',
                        letterSpacing: '-0.015em',
                        fontSize: isMobile
                            ? 'clamp(30px, 7vw, 50px)'
                            : 'clamp(30px, 3.5vw, 60px)',
                        lineHeight: 1.12,
                        margin: 0,
                    }}
                >
                    La tua nutrizione
                    <br />
                    in gravidanza,{' '}
                    <em
                        style={{
                            color: '#64A376',
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
                                    left: '-12%',
                                    top: '-18%',
                                    width: '124%',
                                    height: '140%',
                                    overflow: 'visible',
                                    pointerEvents: 'none',
                                }}
                            >
                                <path
                                    d="M24 40 C 8 14, 110 0, 182 16 C 206 24, 192 52, 112 55 C 48 58, 6 50, 16 28"
                                    fill="none"
                                    // stroke="rgb(100, 163, 118)"
                                    stroke=" rgb(15, 31, 21)"
                                    strokeWidth="3"
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
                        color: '#0F1F15',
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

                    <div style={{ color: '#F1F8F3' }}>
                        <Button type={isMobile ? 'small' : 'big'} bgColor='#64A376' text=' Prenota la prima visita' onClick={() => {

                            window.open('https://calendly.com/benedetta-mosole/consulenza-nutrizionale', '_blank');
                        }} />
                    </div>

                    <div style={{ color: '#F1F8F3' }}>
                        <Button href="#percorso" type={isMobile ? 'small' : 'big'} bgColor='#0F1F15' text='Scopri il percorso' onClick={() => { }} />
                    </div>
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
                        background: '#64A376',
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
