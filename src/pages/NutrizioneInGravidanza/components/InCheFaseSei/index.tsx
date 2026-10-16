
import { useState } from 'react';

type InCheFaseSeiProps = {
    isMobile: boolean;
};

const fasi = [
    {
        nome: 'Cerco una gravidanza',
        situazione:
            'Stai pensando a una gravidanza, magari dopo un percorso di PMA o con una diagnosi di endometriosi o PCOS.',
        aiuto:
            "Guardiamo insieme i tuoi esami, prepariamo il corpo con un'alimentazione adatta e controlliamo l'integrazione necessaria.",
    },
    {
        nome: 'Primo trimestre',
        situazione:
            'Nausea, reflusso, stanchezza, stitichezza. E all’improvviso tante regole nuove su cosa evitare.',
        aiuto:
            'Strategie pratiche per stare meglio già dalle prossime settimane, una lista chiara di cosa puoi mangiare in sicurezza e i primi esami letti insieme.',
    },
    {
        nome: 'Secondo e terzo trimestre',
        situazione:
            'L’appetito cambia, si avvicina la curva glicemica e il peso diventa un pensiero fisso.',
        aiuto:
            "Teniamo d'occhio la glicemia prima della curva, accompagniamo l'aumento di peso senza ansia e, se serve, gestiamo insieme il diabete gestazionale.",
    },
    {
        nome: 'Dopo il parto',
        situazione:
            'Allattamento, poco sonno, pasti saltati. E il desiderio di ritrovarti, con i tuoi tempi.',
        aiuto:
            "Un'alimentazione che sostiene l'allattamento e la tua energia, pasti semplici da preparare con un neonato in casa, e un ritorno graduale al tuo peso.",
    },
];

const InCheFaseSei = ({ isMobile }: InCheFaseSeiProps) => {
    const [faseAttiva, setFaseAttiva] = useState(0);

    const fase = fasi[faseAttiva];

    return (
        <section
            id="fasi"
            style={{
                maxWidth: '1160px',
                margin: '0 auto',
                padding: isMobile
                    ? '56px 24px'
                    : 'clamp(56px, 8vw, 112px) 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                boxSizing: 'border-box',
            }}
        >
            {/* Titolo */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
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
                    In che fase sei?
                </span>

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
                        textWrap: 'balance',
                    }}
                >
                    Ogni momento ha bisogni diversi
                </h2>
            </div>

            {/* Pulsanti delle fasi */}
            <div
                role="tablist"
                aria-label="Seleziona la fase del tuo percorso"
                style={{
                    display: 'flex',
                    gap: '8px',
                    flexWrap: 'wrap',
                }}
            >
                {fasi.map((item, index) => {
                    const attivo = faseAttiva === index;

                    return (
                        <button
                            key={item.nome}
                            id={`fase-tab-${index}`}
                            type="button"
                            role="tab"
                            aria-selected={attivo}
                            aria-controls="fase-panel"
                            tabIndex={attivo ? 0 : -1}
                            onClick={() => setFaseAttiva(index)}
                            style={{
                                fontFamily: 'inherit',
                                fontSize: '15px',
                                lineHeight: 1.4,
                                fontWeight: 500,
                                cursor: 'pointer',
                                padding: '10px 18px',
                                borderRadius: '999px',
                                border: '1.5px solid rgb(46, 58, 43)',
                                background: attivo
                                    ? 'rgb(157, 180, 147)'
                                    : 'transparent',
                                color: 'rgb(46, 58, 43)',
                                transition:
                                    'background 180ms ease, color 180ms ease',
                            }}
                        >
                            {item.nome}
                        </button>
                    );
                })}
            </div>

            {/* Contenuto dinamico */}
            <div
                id="fase-panel"
                role="tabpanel"
                aria-labelledby={`fase-tab-${faseAttiva}`}
                style={{
                    background: 'rgb(233, 238, 228)',
                    borderRadius: '28px',
                    padding: isMobile
                        ? '24px'
                        : 'clamp(24px, 4vw, 48px)',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile
                            ? 'minmax(0, 1fr)'
                            : 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                        gap: '32px',
                    }}
                >
                    {/* Cosa può succedere */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                        }}
                    >
                        <span
                            style={{
                                fontSize: '13px',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: 'rgb(90, 115, 80)',
                                fontWeight: 700,
                            }}
                        >
                            Cosa può succedere
                        </span>

                        <p
                            style={{
                                margin: 0,
                                fontFamily: 'Inter, sans-serif',
                                fontWeight: 600,
                                letterSpacing: '-0.02em',
                                fontSize: '24px',
                                lineHeight: 1.35,
                                color: 'rgb(46, 58, 43)'
                            }}
                        >
                            {fase.situazione}
                        </p>
                    </div>

                    {/* Come ti aiuto */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                        }}
                    >
                        <span
                            style={{
                                fontSize: '13px',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: 'rgb(90, 115, 80)',
                                fontWeight: 700,
                            }}
                        >
                            Come ti aiuto
                        </span>

                        <p
                            style={{
                                margin: 0,
                                fontSize: '16px',
                                lineHeight: 1.7,
                                color: 'rgb(46, 58, 43)'
                            }}
                        >
                            {fase.aiuto}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InCheFaseSei;
