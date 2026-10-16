import React, { } from 'react';
import checkIcon from '../../assets/img/chips-check.svg';

interface Props {
    text: string;
    isMobile: boolean;
}

const Chip: React.FC<Props> = ({ text, isMobile }) => {


    return (
        <div
            className='button'
            style={{
                fontSize: isMobile ? '' : '',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: isMobile ? '12px' : '12px 20px 12px 12px',
                backgroundColor: '#DDEEDF',
                borderRadius: '64px',
                color: '#0F1F15'

            }}
        >
            <img draggable={false} src={checkIcon} />
            {text}
        </div>
    );
};

export default Chip;
