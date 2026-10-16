import React, { } from 'react';
import './style.css';

interface Props {
    onClick: any;
    text: string;
    type: string;
    bgColor: string;
    href?: string;
}

const Button: React.FC<Props> = ({ onClick, text, type, bgColor, href }) => {


    return (
        <a
            className='button my-button'
            href={href}
            style={{
                transition: 'all .3s ease-out',
                display: 'inline-block',
                padding: type === 'small' ? '16px 20px' : '20px 24px',
                backgroundColor: bgColor,
                borderRadius: '58px',
                cursor: 'pointer'

            }}
            onClick={onClick}
        >
            {text}
        </a>
    );
};

export default Button;
