import React, { useState } from 'react';
import Button from '../Button';


interface Props {
    content?: string;
    bgColor?: string;
    isMobile: boolean;
    title?: string;
    btnText?: string;
    onClickBtn?: any;
    onClick?: any;
    type?: string;
}

const Card: React.FC<Props> = ({ content, bgColor, isMobile, title, btnText, onClickBtn, onClick, type }) => {




    if (type === 'consulenza') {
        return (
            <div
                className='button'
                style={{
                    padding: isMobile ? '16px' : '32px',
                    backgroundColor: bgColor,
                    borderRadius: '16px',
                    border: '1px solid black',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: isMobile ? '270px' : '373px'


                }}
            >
                <div>
                    <h4>{title}</h4>
                    <p style={{ opacity: '0.8' }} className='p-regular'>{content}</p>
                </div>
                <div style={{ color: 'white' }}>
                    <Button type='small' onClick={onClickBtn} text={'Prenota'} bgColor='black' />
                </div>
            </div>
        )
    }
    return (
        <div
            className='button'
            style={{
                padding: isMobile ? '12px' : '32px',
                backgroundColor: bgColor,
                borderRadius: '16px',
                border: '1px solid black',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: isMobile ? '400px' : '500px'


            }}
        >
            <h4>{title}</h4>
            <p className='p-regular'>{content}</p>
        </div>
    );
};

export default Card;
