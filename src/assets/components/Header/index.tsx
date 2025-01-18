import Button from '../Button';
import hamburgerIcon from '../../../assets/img/burger.svg';

interface Props {
    isMedium: boolean;
    isMobile: boolean;

}

const Header: React.FC<Props> = ({ isMedium, isMobile }) => {


    return (
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '48px' }}>
            <div style={{ width: isMobile ? '80%' : '30%' }}>
                <p style={{ marginBottom: '4px' }} className='button'>Dott.ssa Benedetta Mosole</p>
                <p style={{ opacity: '.8' }} className='caption'>Biologa Nutrizionista</p>
            </div>


            {isMobile ? <img src={hamburgerIcon} /> : <div style={{ display: 'flex', width: '90%', gap: '30px', justifyContent: 'flex-end', alignItems: 'center' }}>
                <a className='button' href='#percorsi'>Prestazioni</a>
                <a className='button' href='#percorsi'>Percorsi</a>
                <a className='button' href='#chi-sono'>Chi sono</a>
                <a className='button' href='#percorsi'>Consulenze</a>
                <a className='button' href='#percorsi'>Dicono di me</a>
                <a className='button' href='#filosofia'>FAQ</a>
                <a className='button' href='#percorsi'>Contatti</a>
                <Button type='small' text={'Prenota una visita'} bgColor='white' onClick={() => { console.log('ciao') }} />

                {/* <p className='caption c-black'>{ !isMobile && 'Hai un progetto in mente?'} <span className='c-blue'>Contattaci</span></p> */}
            </div>}
        </header>
    );
};

export default Header;
