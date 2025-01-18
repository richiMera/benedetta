

import Button from "../Button";
import arrowIcon from '../../../assets/img/arrow-right.svg';
import starImg from '../../../assets/img/star.svg';

import { useRef, useState } from "react";
import { Grid2 } from "@mui/material";

interface Props {
    isMedium: boolean;
    isMobile: boolean;

}

const DiconoDiMe: React.FC<Props> = ({ isMedium, isMobile }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const startX = useRef(0);
    const moveX = useRef(0);

    const handleTouchStart = (e: any) => {
        startX.current = e.touches[0].clientX; // Registra la posizione iniziale del tocco
    };

    const handleTouchMove = (e: any) => {
        moveX.current = e.touches[0].clientX - startX.current; // Calcola la distanza spostata
    };

    const handleTouchEnd = () => {
        if (moveX.current > 50 && currentIndex > 0) {
            // Scorri a sinistra
            setCurrentIndex(currentIndex - 1);
        } else if (moveX.current < -50 && currentIndex < cards.length - 1) {
            // Scorri a destra
            setCurrentIndex(currentIndex + 1);
        }
        moveX.current = 0; // Resetta lo spostamento
    };
    const cards = [
        { stars: 5, author: 'Omar', date: '27 ottobre 2024 | Da miodottore.it', content: 'Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis.' },
        { stars: 5, author: 'Omar', date: '27 ottobre 2024 | Da miodottore.it', content: 'Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis.' },
        { stars: 5, author: 'Omar', date: '27 ottobre 2024 | Da miodottore.it', content: 'Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis.' },
        { stars: 5, author: 'Omar', date: '27 ottobre 2024 | Da miodottore.it', content: 'Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis.' },
    ];

    const goToSlide = (index: any) => {
        setCurrentIndex(index);
    };

    console.log(isMedium, isMobile);



    return (


        <>
            <Grid2 size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
                <p className='overline' style={{ marginBottom: '24px', }}>dicono di me</p>
                <h3 style={{ marginBottom: '64px' }}>Risultati che puoi vedere e sentire</h3>

            </Grid2>
            <Grid2 size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
                <div
                    className="carousel-container"
                    style={{
                        position: 'relative',
                        width: '100%',
                        maxWidth: '100%',
                        margin: '0 auto',
                        overflow: 'hidden',
                    }}
                >

                    <div
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        className="carousel"
                        style={{
                            display: 'flex',
                            gap: '20px',
                            transition: 'transform 0.3s ease-in-out',
                            transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 20}px))`, // Percentuale + gap

                        }}
                    >
                        {cards.map((card, index) => (


                            <div
                                className="carousel-card"
                                key={index}
                                style={{
                                    width: '100%',
                                    flex: '0 0 100%',
                                    padding: '40px',
                                    borderRadius: '24px',
                                    border: ' 1px solid black',
                                    position: 'relative',
                                    transition: 'transform 0.3s ease-out, background-image 0.3s ease-out',
                                }}
                            >
                                <div style={{ display: 'flex', gap: '2px', marginBottom: '40px' }}>
                                    <img src={starImg} />
                                    <img src={starImg} />
                                    <img src={starImg} />
                                    <img src={starImg} />
                                    <img src={starImg} />

                                </div>

                                <p className="p-x-large" style={{ marginBottom: '96px' }}>{card.content}</p>

                                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: isMobile ? 'flex-start' : 'space-between', alignItems: isMobile ? 'flex-start' : 'center', width: '100%', gap: isMobile ? '8px' : '' }}>
                                    <h4>{card.author}</h4>
                                    <p style={{ opacity: '0.8' }} className="caption">{card.date}</p>

                                </div>
                            </div>



                        ))}
                    </div>



                </div>


            </Grid2 >


            {!isMobile && <Grid2 alignItems={'center'} size={{ md: 1, xs: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', height: '100%', width: '64px' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '64px', width: '64px', border: '1px solid black', borderRadius: '50%' }}>
                        <img style={{ cursor: 'pointer' }} onClick={() => { if (currentIndex !== 3) { setCurrentIndex(currentIndex + 1) } }} src={arrowIcon} />

                    </div>
                </div>
            </Grid2>
            }

            <Grid2 size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
                <div
                    className="dots"
                    style={{
                        textAlign: 'center',
                        marginTop: '10px',
                        height: '60px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        position: 'relative',
                        display: 'flex',
                        gap: '8px'
                    }}
                >
                    {cards.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            style={{
                                display: 'inline-block',
                                // width: '12px',
                                // height: '12px',
                                // margin: '0 5px',
                                // borderRadius: '50%',
                                // backgroundColor: index === currentIndex ? '#fff' : 'rgba(0, 0, 0, 0.5)',
                                // cursor: 'pointer',
                                // transition: 'background-color 0.3s ease',
                                width: '16px',
                                height: '16px',
                                border: '1px solid black',
                                borderRadius: '50%',
                                backgroundColor: index === currentIndex ? 'black' : '',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                            }}
                        ></span>
                    ))}

                </div>

            </Grid2>

        </>

    );
};

export default DiconoDiMe;













