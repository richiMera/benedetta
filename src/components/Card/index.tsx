import React, { useState } from 'react';
import Button from '../Button';


interface Props {
    content?: string;
    bgColor?: string;
    isMobile: boolean;
    isBig?: boolean;
    isForIpad?: boolean;
    title?: string;
    btnText?: string;
    onClickBtn?: any;
    onClick?: any;
    type?: string;
    icon?: any;
    cardImg?: string;
    caption?: any;
    isForIpadHor?: boolean;
    number?: string;
    preTitle?: string;
}

const Card: React.FC<Props> = ({ content, isMobile, isBig, number, preTitle, title, btnText, onClickBtn, onClick, type, icon, cardImg, caption, isForIpad, isForIpadHor }) => {
    console.log(onClick, btnText, icon, isForIpad);

    const [openDetail, setOpenDetail] = useState(false);





    if (type === 'consulenza') {
        return (
            <div
                className='button'
                style={{
                    padding: isMobile ? '16px' : '32px',
                    backgroundColor: '#DDEEDF',
                    borderRadius: '16px',
                    border: '1px solid black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: isMobile ? '270px' : '373px'


                }}
            >
                <div>
                    <h4 style={{ marginBottom: '12px', color: '#0F1F15' }}>{title}</h4>
                    <p style={{ color: '#0F1F15' }} className='p-regular'>{content}</p>
                </div>
                <div style={{ color: '#F1F8F3', display: 'flex', justifyContent: 'space-between' }}>
                    <Button type='big' onClick={onClickBtn} text={caption ? 'Prenota*' : 'Prenota'} bgColor='#64A376' />
                    {caption && <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                        <p style={{ color: '#316a44' }} className='caption'>{caption}</p>
                    </div>}
                </div>


            </div>
        )
    }
    if (type === 'percorsogravidanza') {
        return (
            <div
                style={{
                    background: '#EC DADC'.replace(' ', ''),
                    borderRadius: '28px',
                    padding: '28px 28px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    width: '100%',
                    boxSizing: 'border-box',
                }}
            >
                {/* Numero e pretitolo */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                    }}
                >
                    <span
                        style={{
                            width: '36px',
                            height: '36px',
                            minWidth: '36px',
                            borderRadius: '50%',
                            background: '#C49399',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                            fontWeight: 600,
                            color: '#0E1F15',
                        }}
                    >
                        {number}
                    </span>

                    <span
                        style={{
                            fontSize: '13px',
                            fontWeight: 500,
                            letterSpacing: '0.1em',
                            color: '#6E3D44',
                        }}
                    >
                        {preTitle}
                    </span>
                </div>

                {/* Titolo */}
                <div
                    style={{
                        fontSize: '26px',
                        lineHeight: 1.12,
                        fontWeight: 500,
                        letterSpacing: '-0.02em',
                        color: '#0E1F15',
                    }}
                >
                    {title}
                </div>

                {/* Descrizione */}
                <p
                    style={{
                        margin: 0,
                        fontSize: '16px',
                        lineHeight: 1.5,
                        color: '#3D1F23',
                        textWrap: 'pretty',
                    }}
                >
                    {content}
                </p>
            </div>
        )
    }
    return (
        <div
            onClick={() => { setOpenDetail(!openDetail) }}
            className={isMobile || isForIpad || isForIpadHor ? 'button ' : 'button hoverd-card'}
            style={{
                padding: isForIpadHor ? '24px' : '32px',
                transition: 'all .4s ease',
                backgroundColor: 'rgba(241, 248, 243, 0.04)',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: isMobile ? '507px' : isBig ? '588px' : isForIpadHor ? '360px' : '507px',
                width: '100%',
                position: 'relative',
                bottom: '0',
                overflow: 'hidden',
                cursor: 'pointer',
                boxShadow: '0px 4px 24px 0px rgba(12,24,17,0.4)',
                border: '2px solid rgba(241, 248, 243, 0.04)',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    top: isForIpadHor ? '-8%' : '-24px',
                    left: '50%',
                    height: isForIpadHor ? '400px' : '600px',
                    width: isForIpadHor ? '400px' : '600px',
                    borderRadius: '100%',
                    overflow: 'hidden',
                    backgroundImage: `url(${cardImg})`,
                    backgroundSize: '100%',
                    backgroundPosition: 'bottom center',
                    backgroundRepeat: 'no-repeat',
                    transform: 'translate(-50%, -50%)',
                    opacity: openDetail ? 0 : 1,
                    transition: 'all .4s ease',
                    WebkitBorderRadius: '100%',
                    MozBorderRadius: '100%',

                    boxShadow: '0 0 0 24px rgba(241, 248, 243, 0.04)'  // Simula l'outline esterno
                }}
            >
            </div>


            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: '32px', height: '100%', opacity: openDetail ? 0 : 1, transition: 'all .4s ease', }}>
                <p style={{ fontSize: isForIpadHor ? '20px' : '40px', color: '#DDEEDF', fontWeight: '500', lineHeight: '100%' }}> {title}</p>
                <p onClick={onClick} style={{ color: '#9CC8A7', cursor: 'pointer' }} className='button'>Scopri di più</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: isForIpadHor ? '24px' : '32px', color: '#DDEEDF', position: 'absolute', top: '0', left: '0', height: '100%', width: '100%', opacity: openDetail ? 1 : 0, transition: 'all .4s ease', }}>
                <div>
                    <p style={{ marginBottom: '8px', color: '#9cc8a7' }} className='p-regular'>{title}</p>
                    <p style={{ fontSize: isForIpadHor ? '12px' : '18px' }} className='p-regular'>{content}</p>
                </div>
                <p onClick={onClick} style={{ color: '#9CC8A7', cursor: 'pointer' }} className='button'>Chiudi</p>

            </div>
            {/* <p style={{ fontSize: '56px' }}>{icon}</p>
        <h4 style={{ marginBottom: '64px' }}>{title}</h4>
        <p style={{ fontSize: '16px', lineHeight: '130%' }} className=''>{content}</p> */}
        </div>
    );
};

export default Card;
