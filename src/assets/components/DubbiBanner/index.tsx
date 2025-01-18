import Button from "../Button";

interface Props {
    isMedium: boolean;
    isMobile: boolean;

}

const DubbiBanner: React.FC<Props> = ({ isMedium, isMobile }) => {

    console.log(isMedium, isMobile);



    return (
        <div>
            <h3 style={{ marginBottom: '12px', color: '#DADADA' }}>Hai dubbi o domande?</h3>
            <p className='p-regular' style={{ marginBottom: '32px', color: '#DADADA' }}>Prenota una chiamata conoscitiva gratuita.</p>
            <Button type="small" text="Contattami" bgColor="#DADADA" onClick={() => {
                console.log('ciao');
            }} />

        </div>
    );
};

export default DubbiBanner;



