import React, { useState } from 'react';


interface Props {
    text: string;
    bgColor: string;
    isMobile: boolean;
}

const Chip: React.FC<Props> = ({ text, bgColor, isMobile }) => {


    return (
        <div
            className='button'
            style={{
                fontSize: isMobile ? '12px' : '',
                display: 'inline-block',
                padding: isMobile ? '12px' : '20px 24px',
                backgroundColor: bgColor,
                borderRadius: '6px',


            }}
        >
            {text}
        </div>
    );
};

export default Chip;
