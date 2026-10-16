import Button from '../Button';
import hamburgerIcon from '../../assets/img/burger.svg';
import closeIcon from '../../assets/img/close-icon-small.svg';
import { Drawer } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props {
    isForIpad: boolean;
    isMobile: boolean;
    isForIpadHor: boolean;
    forBurger: boolean;

}

const Header: React.FC<Props> = ({ isForIpad, isMobile, isForIpadHor, forBurger }) => {

    const [openDrawer, setOpenDrawer] = useState(false);
    const navigate = useNavigate();




    return (
        <>
            {(isMobile || isForIpad || forBurger) &&
                <Drawer transitionDuration={{ enter: 700, exit: 500 }} anchor='right' open={openDrawer} onClose={() => { setOpenDrawer(false) }}>
                    <div className='np-scrollbar' style={{
                        height: '100svh',
                        width: '100vw',
                        backgroundColor: '#0F1F15',
                        padding: '80px 24px 24px 24px',
                        position: 'relative',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <img style={{ position: 'fixed', top: '24px', right: '24px' }} onClick={() => { setOpenDrawer(false) }} draggable={false} src={closeIcon} />
                        <div>
                            <div style={{ padding: '16px 0', color: '#F1F8F3', borderBottom: '1px solid #9CC8A7' }}>
                                <a className={'p-large'} onClick={() => { document.getElementById('prestazioni')?.scrollIntoView({ behavior: 'smooth' }); setOpenDrawer(false) }}>Focus</a>
                            </div>
                            <div style={{ padding: '16px 0', color: '#F1F8F3', borderBottom: '1px solid #9CC8A7' }}>
                                <a className={'p-large'} onClick={() => { document.getElementById('percorsi')?.scrollIntoView({ behavior: 'smooth' }); setOpenDrawer(false) }}>Percorsi</a>
                            </div>
                            <div style={{ padding: '16px 0', color: '#F1F8F3', borderBottom: '1px solid #9CC8A7' }}>
                                <a
                                    style={{ fontSize: isForIpadHor ? '' : '' }}
                                    className="button"
                                    href="/nutrizione-in-gravidanza"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        navigate('/nutrizione-in-gravidanza');
                                    }}
                                >
                                    Gravidanza
                                </a>                            </div>


                            <div style={{ padding: '16px 0', color: '#F1F8F3', borderBottom: '1px solid #9CC8A7' }}>
                                <a className={'p-large'} onClick={() => { document.getElementById('chi-sono')?.scrollIntoView({ behavior: 'smooth' }); setOpenDrawer(false) }}>Chi sono</a>
                            </div>
                            <div style={{ padding: '16px 0', color: '#F1F8F3', borderBottom: '1px solid #9CC8A7' }}>
                                <a className={'p-large'} onClick={() => { document.getElementById('consulenze')?.scrollIntoView({ behavior: 'smooth' }); setOpenDrawer(false) }}>Consulenze</a>
                            </div>
                            <div style={{ padding: '16px 0', color: '#F1F8F3', borderBottom: '1px solid #9CC8A7' }}>
                                <a className={'p-large'} onClick={() => { document.getElementById('dicono-di-me')?.scrollIntoView({ behavior: 'smooth' }); setOpenDrawer(false) }}>Dicono di me</a>
                            </div>
                            <div style={{ padding: '16px 0', color: '#F1F8F3', borderBottom: '1px solid #9CC8A7' }}>
                                <a className={'p-large'} onClick={() => { document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }); setOpenDrawer(false) }}>FAQ</a>
                            </div>
                            <div style={{ padding: '16px 0', color: '#F1F8F3', borderBottom: '1px solid #9CC8A7' }}>
                                <a className={'p-large'} onClick={() => { document.getElementById('contatti')?.scrollIntoView({ behavior: 'smooth' }); setOpenDrawer(false) }}>Contatti</a>
                            </div>
                        </div>
                        <a
                            className='button my-button'

                            style={{
                                transition: 'all .3s ease-out',
                                display: 'inline-block',
                                padding: '20px 24px',
                                backgroundColor: '#F1F8F3',
                                borderRadius: '58px',
                                cursor: 'pointer',
                                textAlign: 'center'

                            }}
                            onClick={() => {
                                window.open('https://www.miodottore.it/benedetta-mosole/nutrizionista/rho#profile-pricing', '_blank');
                            }}
                        >
                            Prenota una visita
                        </a>
                    </div>
                </Drawer >
            }
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '48px', color: '#0f1f15' }}>

                <div style={{ width: (isMobile || isForIpad || forBurger) ? '80%' : '20%' }}>
                    <p style={{ marginBottom: '4px' }} className='button'>Dott.ssa Benedetta Mosole</p>
                    <p style={{ color: '#275538' }} className='caption'>Biologa Nutrizionista</p>
                </div>


                {(isMobile || isForIpad || forBurger) ? <img style={{}} onClick={() => { setOpenDrawer(true) }} draggable={false} src={hamburgerIcon} /> : <div style={{ display: 'flex', width: '80%', gap: '24px', justifyContent: 'flex-end', alignItems: 'center', fontSize: isForIpad ? '13px' : '' }}>
                    <a style={{ fontSize: isForIpadHor ? '' : '' }} className={'button'} href='#prestazioni'>Focus</a>
                    <a style={{ fontSize: isForIpadHor ? '' : '' }} className={'button'} href='#percorsi'>Percorsi</a>
                    <a
                        style={{ fontSize: isForIpadHor ? '' : '' }}
                        className="button"
                        href="/nutrizione-in-gravidanza"
                        onClick={(event) => {
                            event.preventDefault();
                            navigate('/nutrizione-in-gravidanza');
                        }}
                    >
                        Gravidanza
                    </a>                    <a style={{ fontSize: isForIpadHor ? '' : '' }} className={'button'} href='#chi-sono'>Chi sono</a>
                    <a style={{ fontSize: isForIpadHor ? '' : '' }} className={'button'} href='#consulenze'>Consulenze</a>
                    <a style={{ fontSize: isForIpadHor ? '' : '' }} className={'button'} href='#dicono-di-me'>Dicono di me</a>
                    <a style={{ fontSize: isForIpadHor ? '' : '' }} className={'button'} href='#faq'>FAQ</a>
                    <a style={{ fontSize: isForIpadHor ? '' : '' }} className={'button'} href='#contatti'>Contatti</a>
                    <Button type='small' text={'Prenota una visita'} bgColor='white' onClick={() => {
                        window.open('https://www.miodottore.it/benedetta-mosole/nutrizionista/rho#profile-pricing', '_blank');
                    }} />

                    {/* <p className='caption c-black'>{ !isMobile && 'Hai un progetto in mente?'} <span className='c-blue'>Contattaci</span></p> */}
                </div>}
            </header>

        </>
    );
};

export default Header;
