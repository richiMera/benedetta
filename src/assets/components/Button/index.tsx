import React, { useState } from 'react';


interface Props {
    onClick: any;
    text: string;
    type: string;
    bgColor: string;
}

const Button: React.FC<Props> = ({ onClick, text, type, bgColor }) => {


    return (
        <div
            className='p-small'
            style={{

                display: 'inline-block',
                padding: type === 'small' ? '16px 20px' : '24px 32px',
                backgroundColor: bgColor,
                borderRadius: '58px',
                cursor: 'pointer'

            }}
            onClick={onClick}
        >
            {text}
        </div>
    );
};

export default Button;
