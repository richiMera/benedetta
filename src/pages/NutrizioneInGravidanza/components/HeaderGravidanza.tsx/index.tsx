
import Button from '../../../../components/Button';
import hamburgerIcon from '../../../../assets/img/burger.svg';
import closeIcon from '../../../../assets/img/close-icon-small.svg';
import { Drawer } from '@mui/material';
import { useState } from 'react';

interface Props {
    isForIpad: boolean;
    isMobile: boolean;
    isForIpadHor: boolean;
    forBurger: boolean;
}

const HeaderGravidanza: React.FC<Props> = ({
    isForIpad,
    isMobile,
    isForIpadHor,
    forBurger,
}) => {
    const [openDrawer, setOpenDrawer] = useState(false);

    const menuItems = [

        { label: 'I tuoi pensieri', id: 'pensieri' },
        { label: 'Le fasi', id: 'fasi' },
        { label: 'Nutrizione', id: 'quello-che-mangi' },
        { label: 'Chi sono', id: 'chi-sono' },
        { label: 'Dicono di me', id: 'dicono-di-me-grav' },
        { label: 'Il percorso', id: 'percorso' },
        { label: 'FAQ', id: 'faq-grav' },

    ];

    const scrollToSection = (id: string) => {
        setOpenDrawer(false);

        document.getElementById(id)?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const bookAppointment = () => {
        scrollToSection('prenota');
    };

    const isCompact = isMobile || isForIpad || forBurger;

    return (
        <>
            {isCompact && (
                <Drawer
                    transitionDuration={{ enter: 700, exit: 500 }}
                    anchor="right"
                    open={openDrawer}
                    onClose={() => setOpenDrawer(false)}
                >
                    <div
                        className="np-scrollbar"
                        style={{
                            height: '100svh',
                            width: '100vw',
                            maxWidth: '420px',
                            boxSizing: 'border-box',
                            backgroundColor: '#2E3A2B',
                            padding: '80px 24px 24px',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                        }}
                    >
                        <img
                            style={{
                                position: 'absolute',
                                top: '24px',
                                right: '24px',
                                cursor: 'pointer',
                            }}
                            onClick={() => setOpenDrawer(false)}
                            draggable={false}
                            src={closeIcon}
                            alt="Chiudi menu"
                        />

                        <nav>
                            {menuItems.map((item) => (
                                <div
                                    key={item.id}
                                    style={{
                                        padding: '16px 0',
                                        color: '#F1F8F3',
                                        borderBottom: '1px solid #9DB493',
                                    }}
                                >
                                    <a
                                        href={`#${item.id}`}
                                        className="p-large"
                                        style={{
                                            color: 'inherit',
                                            textDecoration: 'none',
                                            cursor: 'pointer',
                                        }}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            scrollToSection(item.id);
                                        }}
                                    >
                                        {item.label}
                                    </a>
                                </div>
                            ))}
                        </nav>

                        <a
                            href="#prenota"
                            className="button my-button"
                            style={{
                                transition: 'all .3s ease-out',
                                display: 'inline-block',
                                padding: '20px 24px',
                                backgroundColor: '#F1F8F3',
                                color: '#2E3A2B',
                                borderRadius: '58px',
                                cursor: 'pointer',
                                textAlign: 'center',
                                textDecoration: 'none',
                            }}
                            onClick={(event) => {
                                event.preventDefault();
                                bookAppointment();
                            }}
                        >
                            Prenota una visita
                        </a>
                    </div>
                </Drawer>
            )}

            <header
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '24px',
                    paddingBottom: isMobile ? '32px' : '48px',
                    color: '#2E3A2B',
                }}
            >
                <a
                    href="#top"
                    onClick={(event) => {
                        event.preventDefault();
                        scrollToSection('top');
                    }}
                    style={{
                        width: isCompact ? '80%' : 'auto',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    <p
                        className="button"
                        style={{ marginBottom: '4px' }}
                    >
                        Dott.ssa Benedetta Mosole
                    </p>
                    <p
                        className="caption"
                        style={{ color: '#5A7350' }}
                    >
                        Nutrizione in gravidanza
                    </p>
                </a>

                {isCompact ? (
                    <img
                        onClick={() => setOpenDrawer(true)}
                        draggable={false}
                        src={hamburgerIcon}
                        alt="Apri menu"
                        style={{ cursor: 'pointer' }}
                    />
                ) : (
                    <nav
                        style={{
                            display: 'flex',
                            gap: isForIpadHor ? '14px' : '24px',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            flexWrap: 'wrap',
                            fontSize: isForIpad ? '13px' : undefined,
                        }}
                    >
                        {menuItems.map((item) => (
                            <a
                                key={item.id}
                                className="button"
                                href={`#${item.id}`}
                                style={{
                                    color: '#2E3A2B',
                                    textDecoration: 'none',
                                    whiteSpace: 'nowrap',
                                }}
                                onClick={(event) => {
                                    event.preventDefault();
                                    scrollToSection(item.id);
                                }}
                            >
                                {item.label}
                            </a>
                        ))}

                        <Button
                            type="small"
                            text="Prenota una visita"
                            bgColor="#9DB493"
                            onClick={bookAppointment}
                        />
                    </nav>
                )}
            </header>
        </>
    );
};

export default HeaderGravidanza;