
type IlPercorsoProps = {
    isMobile: boolean;
};

const IlPercorso = ({ isMobile }: IlPercorsoProps) => {
    const fasi = [
        {
            titolo: 'Ci conosciamo',
            descrizione:
                'Prenoti sul calendario e compili un breve questionario sulla tua storia.',
        },
        {
            titolo: 'Prima visita',
            descrizione:
                'Parliamo di te, delle tue abitudini e dei tuoi esami. Ricevi il piano personalizzato e il ricettario.',
        },
        {
            titolo: 'Ti accompagno',
            descrizione:
                'Mi scrivi in chat quando hai un dubbio. Commentiamo gli esami e guardiamo il diario alimentare, con un riscontro ogni settimana.',
        },
        {
            titolo: 'Facciamo il punto',
            descrizione:
                "Un controllo mensile per vedere com'è andata e prepararci al trimestre successivo, fino al post-parto.",
        },
    ];

    const visitaSingola = [
        'Piano alimentare personalizzato',
        'Ricettario',
    ];

    const percorsoCompleto = [
        'Piano alimentare personalizzato e ricettario',
        'Chat continuativa per i tuoi dubbi',
        'Esami commentati insieme',
        'Diario alimentare con riscontro settimanale',
    ];

    const testoBase = {
        margin: 0,
        fontFamily: 'Inter, sans-serif',
    } as const;

    const bottoneBase = {
        marginTop: 'auto',
        alignSelf: 'flex-start' as const,
        textDecoration: 'none',
        borderRadius: '999px',
        fontWeight: 500,
        display: 'inline-block',
        textAlign: 'center' as const,
        boxSizing: 'border-box' as const,
    };

    return (
        <section
            id="percorso"
            style={{
                maxWidth: '1160px',
                margin: '0 auto',
                padding: isMobile
                    ? '56px 24px'
                    : 'clamp(56px, 8vw, 112px) 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '44px',
                boxSizing: 'border-box',
            }}
        >
            {/* Introduzione */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    maxWidth: '640px',
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
                    Il percorso
                </span>

                <h2
                    style={{
                        ...testoBase,
                        fontWeight: 600,
                        letterSpacing: '-0.025em',
                        fontSize: isMobile
                            ? '30px'
                            : 'clamp(30px, 3.6vw, 44px)',
                        lineHeight: 1.1,
                        textWrap: 'balance',
                    }}
                >
                    Tra una visita e l&apos;altra non sei sola.
                </h2>
            </div>

            {/* Le quattro fasi */}
            <ol
                style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'grid',
                    gridTemplateColumns: isMobile
                        ? 'minmax(0, 1fr)'
                        : 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))',
                    gap: isMobile ? '28px' : 0,
                }}
            >
                {fasi.map((fase, index) => (
                    <li
                        key={fase.titolo}
                        style={{
                            borderTop: '2px solid rgb(46, 58, 43)',
                            padding: '22px 20px 0 0',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            position: 'relative',
                        }}
                    >
                        <span
                            aria-hidden="true"
                            style={{
                                position: 'absolute',
                                top: '-9px',
                                left: 0,
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                background:
                                    index === 0
                                        ? 'rgb(157, 180, 147)'
                                        : 'rgb(251, 248, 243)',
                                border: '2px solid rgb(46, 58, 43)',
                                boxSizing: 'border-box',
                            }}
                        />

                        <strong
                            style={{
                                ...testoBase,
                                fontWeight: 600,
                                letterSpacing: '-0.01em',
                                fontSize: '22px',
                            }}
                        >
                            {fase.titolo}
                        </strong>

                        <span
                            style={{
                                fontSize: '16px',
                                lineHeight: 1.5,
                            }}
                        >
                            {fase.descrizione}
                        </span>
                    </li>
                ))}
            </ol>

            {/* Card delle offerte */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile
                        ? 'minmax(0, 1fr)'
                        : 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
                    gap: '20px',
                    marginTop: '12px',
                }}
            >
                {/* Visita singola */}
                <div
                    style={{
                        border: '1.5px solid rgb(217, 210, 197)',
                        borderRadius: '28px',
                        padding: isMobile ? '26px' : '34px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '18px',
                        background: 'rgb(255, 255, 255)',
                        color: 'rgb(46, 58, 43)',
                        boxSizing: 'border-box',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                        }}
                    >
                        <h3
                            style={{
                                ...testoBase,
                                fontWeight: 600,
                                letterSpacing: '-0.02em',
                                fontSize: '28px',
                            }}
                        >
                            Visita singola
                        </h3>

                        <p
                            style={{
                                ...testoBase,
                                color: 'rgb(92, 107, 97)',
                                lineHeight: 1.5,
                            }}
                        >
                            Se preferisci un confronto puntuale, con più
                            autonomia.
                        </p>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <span
                            style={{
                                fontWeight: 600,
                                letterSpacing: '-0.02em',
                                fontSize: '40px',
                                lineHeight: 1.1,
                            }}
                        >
                            120€
                        </span>

                        <span
                            style={{
                                color: 'rgb(92, 107, 97)',
                                fontSize: '15px',
                                lineHeight: 1.5,
                            }}
                        >
                            Prima visita · controlli successivi 80€
                        </span>
                    </div>

                    <ul
                        style={{
                            margin: 0,
                            padding: 0,
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            lineHeight: 1.5,
                        }}
                    >
                        {visitaSingola.map((voce) => (
                            <li key={voce}>✓ {voce}</li>
                        ))}
                        <li style={{ color: 'rgb(92, 107, 97)' }}>
                            — Nessun supporto tra le visite
                        </li>
                    </ul>

                    <a
                        href="#prenota"
                        style={{
                            ...bottoneBase,
                            border: '1.5px solid rgb(46, 58, 43)',
                            padding: '12px 24px',
                            color: 'rgb(46, 58, 43)',
                        }}
                    >
                        Prenota una visita
                    </a>
                </div>

                {/* Percorso di tre mesi */}
                <div
                    style={{
                        borderRadius: '28px',
                        padding: isMobile ? '26px' : '34px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '18px',
                        background: 'rgb(157, 180, 147)',
                        color: 'rgb(46, 58, 43)',
                        boxSizing: 'border-box',
                    }}
                >
                    <span
                        style={{
                            alignSelf: 'flex-start',
                            background: 'rgb(46, 58, 43)',
                            color: 'rgb(251, 248, 243)',
                            fontSize: '12px',
                            letterSpacing: '0.06em',
                            textTransform: 'uppercase',
                            padding: '5px 12px',
                            borderRadius: '999px',
                            fontWeight: 700,
                        }}
                    >
                        Consigliato in gravidanza
                    </span>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                        }}
                    >
                        <h3
                            style={{
                                ...testoBase,
                                fontWeight: 600,
                                letterSpacing: '-0.02em',
                                fontSize: '28px',
                            }}
                        >
                            Percorso di 3 mesi
                        </h3>

                        <p style={{ ...testoBase, lineHeight: 1.5 }}>
                            Per sentirti seguita e supportata ogni giorno.
                        </p>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <div
                            style={{
                                fontWeight: 600,
                                letterSpacing: '-0.02em',
                                fontSize: '40px',
                                lineHeight: 1.1,
                            }}
                        >
                            120€
                            <span style={{ fontSize: '20px' }}> /mese</span>
                        </div>

                        <span
                            style={{
                                fontSize: '15px',
                                lineHeight: 1.5,
                            }}
                        >
                            Visita mensile e supporto quotidiano.
                        </span>
                    </div>

                    <ul
                        style={{
                            margin: 0,
                            padding: 0,
                            listStyle: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '8px',
                            lineHeight: 1.5,
                        }}
                    >
                        {percorsoCompleto.map((voce) => (
                            <li key={voce}>✓ {voce}</li>
                        ))}
                    </ul>

                    <a
                        href="#prenota"
                        style={{
                            ...bottoneBase,
                            background: 'rgb(46, 58, 43)',
                            color: 'rgb(251, 248, 243)',
                            padding: '14px 26px',
                            fontWeight: 700,
                        }}
                    >
                        Inizia il percorso
                    </a>
                </div>
            </div>
        </section>
    );
};

export default IlPercorso;
