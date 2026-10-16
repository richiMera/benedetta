import arrowIcon from '../../assets/img/arrow-right.svg';
import arrowIconLeft from '../../assets/img/arrow-left.svg';
import starImg from '../../assets/img/star.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useRef, useState } from "react";
import { Grid2 } from "@mui/material";

interface Props {
    isMedium: boolean;
    isMobile: boolean;
    type?: string;


}

const DiconoDiMe: React.FC<Props> = ({ isMedium, isMobile, type = 'home' }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const swiperRef = useRef<any>(null);


    const cards = type === 'home' ? [
        { stars: 5, author: 'Omar P.', content: 'Molto competente, sempre disponibile a risolvere dubbi. Ha assecondato le mie richieste, pur fornendo preziosi consigli per una educazione alimentare sempre più efficace e duratura. Sono molto contento di essere seguito da Benedetta, poiché mette a proprio agio e permette di affrontare la dieta col sorriso.' },
        {
            stars: 5, author: 'L.M.', content: "Una professionista davvero speciale. Dimostra grande attenzione alle esigenze personali, professionalità e disponibilità, anche dopo la consegna di un piano alimentare chiaro e dettagliato. Il suo approccio empatico mi ha fatto sentire sempre a mio agio, senza mai farmi sentire giudicata. Un vero punto di riferimento per chi cerca un supporto concreto e comprensivo."
        },
        { stars: 5, author: 'Rossana M.', content: "Informata, professionale e attenta. Mi sono sentita ascoltata e seguita in ogni passo della visita e anche dopo, quando mi è stata presentata la dieta. Quando ho avuto dubbi sono seguite risposte rapide e precise, sono molto soddisfatta." },
    ] :
        [
            {
                stars: 5,
                author: 'Letizia',
                content: 'Ho iniziato il mio percorso con Benedetta all’inizio dell’anno e fin dal primo giorno ha saputo analizzare con grande cura la mia situazione, molto complessa, e seguirmi con costanza, attenzione e disponibilità. Durante questo periodo mi ha fornito tutti gli strumenti necessari per potermi gestire giorno dopo giorno, anche all’interno della mia routine, mantenendo sempre la possibilità di rimanere in contatto e avere un confronto costante. È una professionista molto competente e attenta, realmente interessata ai tuoi miglioramenti e al raggiungimento dei tuoi obiettivi.',
            },
            {
                stars: 5,
                author: 'Natalia',
                content: 'La cosa che ho amato di più è stata la sua capacità di spiegarmi le motivazioni dietro ai miei sintomi, aiutandomi a capire cosa li scatenasse. Attraverso la lettura attenta del mio diario alimentare, mi ha guidata a correggere le mie abitudini. In questi mesi ho imparato a capire i sintomi del mio corpo e ad evitarli, oppure a riconoscerne la causa se inevitabili. Ho ancora cose da imparare, ma so di essere sulla buona strada. Finalmente mangio senza privarmi di nulla, ma stando attenta a ciò che mi fa stare bene. Consigliatissima!',
            },
            {
                stars: 5,
                author: 'Giorgia',
                content: 'Benedetta ha compreso ogni mia difficoltà e mi ha accolta tenendo presente ogni dettaglio per poter creare un percorso nutrizionale totalmente aderente alle mie necessità. È la prima volta dopo anni che trovo una soluzione al mio problema, che esiste da sempre. Spero di essere brava a portare avanti le indicazioni e i consigli anche quando finirò il percorso, che ormai è diventato un appoggio fondamentale quotidiano! Ve la consiglio!',
            },
            {
                stars: 5,
                author: 'Giulia',
                content: 'Prima stavo malissimo, ero sempre gonfia e soffrivo di stitichezza, mentre oggi vado in bagno regolarmente e sto decisamente meglio a livello di gonfiore.',
            },
        ]


    const goToSlide = (index: any) => {
        setCurrentIndex(index);
        swiperRef.current.swiper.slideTo(index);
    };

    console.log(isMedium, isMobile);



    return (


        <>
            <Grid2 sx={{ padding: isMobile ? '0 24px' : '0 64px' }} size={{ md: 12, xs: 12 }} offset={{ md: 0 }}>
                <Grid2 sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>

                    <p className='overline' style={{ marginBottom: '24px', color: '#316A44' }}>{type === 'home' ? 'dicono di me' : 'dicono di questo percorso'}</p>
                    <h3 style={{ marginBottom: '48px', color: '#0F1F15', textAlign: 'center' }}>Le esperienze di chi mi ha scelta</h3>

                </Grid2>

            </Grid2>
            {isMobile && (
                <Swiper
                    spaceBetween={24}
                    slidesPerView={1}
                    onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)} // Aggiorna l'indice corrente
                    ref={swiperRef}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    className="carousel-container"
                >
                    {cards.map((card: any, index: number) => (
                        <SwiperSlide style={{ padding: '0 24px' }} key={index}>
                            <Grid2 sx={{ padding: '24px', borderRadius: '24px', backgroundColor: '#DDEEDF' }} size={{ md: 12, xs: 12 }} offset={{ md: 0 }}>
                                <div style={{ display: 'flex', gap: '2px', marginBottom: '20px' }}>
                                    {[...Array(card.stars)].map((_, i) => (
                                        <img draggable={false} key={i} src={starImg} alt={`star-${i}`} />
                                    ))}
                                </div>
                                <p className="p-small" style={{ marginBottom: '32px', color: '#21442E' }}>{card.content}</p>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', gap: '8px' }}>
                                    <h4 style={{ color: '#21442E', fontWeight: 500 }}>{card.author}</h4>
                                    <p style={{ opacity: '0.8', color: '#316A44' }} className="caption">{card.date}</p>
                                </div>
                            </Grid2>
                        </SwiperSlide>
                    ))}
                    {/* Aggiungi i bottoni di navigazione */}
                    <div className="swiper-button-next" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} />
                    <div className="swiper-button-prev" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} />
                </Swiper>
            )}

            {!isMobile && <Grid2 container size={{ md: 12, xs: 12 }} offset={{ md: 0 }}
                className="carousel-container"
                style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '100%',
                    margin: '0 auto',
                    overflow: 'hidden',
                    display: 'flex',
                }}
            >

                <Grid2 container size={{ md: 12, xs: 12 }} offset={{ md: 0 }}

                    className="carousel"
                    sx={{
                        width: '100%',
                        display: 'flex',
                        flexWrap: 'nowrap',
                        margin: isMobile ? '0 24px' : '',
                        gap: isMobile ? '24px' : '0',
                        transition: 'transform 0.3s ease-in-out', // Transizione solo al termine del drag
                        transform: `translateX(calc(-${currentIndex * 100}% - ${isMobile ? currentIndex * 24 : 0}px ))`
                        // Aggiungi dragOffset

                    }}
                >
                    {cards.map((card: any, index: number) => (

                        <Grid2 key={index} sx={{ flex: '0 0 100%', padding: isMobile ? '' : '0 64px', transition: 'transform 0.3s ease-out, background-image 0.3s ease-out', }} size={{ md: 12, xs: 12 }} offset={{ md: 0 }}>

                            <Grid2 size={{ md: 10, xs: 12 }} offset={{ md: 1 }}
                                className="carousel-card"
                                key={index}
                                style={{
                                    backgroundColor: '#DDEEDF',
                                    padding: '40px',
                                    borderRadius: '24px',
                                    // border: ' 1px solid black',
                                    position: 'relative',

                                }}
                            >
                                <div style={{ display: 'flex', gap: '2px', marginBottom: '40px' }}>
                                    <img draggable={false} src={starImg} />
                                    <img draggable={false} src={starImg} />
                                    <img draggable={false} src={starImg} />
                                    <img draggable={false} src={starImg} />
                                    <img draggable={false} src={starImg} />

                                </div>

                                <p className="p-large" style={{ marginBottom: '96px', color: '#21442E' }}>{card.content}</p>

                                <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: isMobile ? 'flex-start' : 'space-between', alignItems: isMobile ? 'flex-start' : 'center', width: '100%', gap: isMobile ? '8px' : '' }}>
                                    <h4 style={{ color: '#21442E', fontWeight: 500 }}>{card.author}</h4>
                                    <p style={{ opacity: '0.8', color: '#316A44' }} className="caption">{card.date}</p>

                                </div>
                            </Grid2>
                        </Grid2>



                    ))}
                </Grid2>



            </Grid2 >}





            {!isMobile && <Grid2 container sx={{ padding: isMobile ? '0 24px' : '0 64px' }} alignItems={'center'} size={{ md: 12, xs: 12 }} >
                <Grid2 size={{ md: 1, xs: 1 }} offset={1}>

                </Grid2>

                <Grid2 size={{ md: 8, xs: 12 }} >
                    <div
                        className="dots"
                        style={{
                            textAlign: 'center',
                            marginTop: '10px',

                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            display: 'flex',
                            gap: '8px'
                        }}
                    >
                        {cards.map((_: any, index: number) => (
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
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    backgroundColor: index === currentIndex ? '#64a376' : '#bedcc3',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s',
                                }}
                            ></span>
                        ))}

                    </div>

                </Grid2>


                <Grid2 size={{ md: 1, xs: 1 }} offset={0}>

                </Grid2>

                <Grid2 sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '4px' }} offset={1} size={10}>

                    <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>

                        <img draggable={false} style={{ cursor: 'pointer', opacity: currentIndex === 0 ? '0.5' : '' }} onClick={() => { if (currentIndex !== 0) { setCurrentIndex(currentIndex - 1) } }} src={arrowIconLeft} />
                    </div>


                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>

                        <img draggable={false} style={{ cursor: 'pointer', opacity: currentIndex !== cards.length - 1 ? '' : '0.5' }} onClick={() => { if (currentIndex !== cards.length - 1) { setCurrentIndex(currentIndex + 1) } }} src={arrowIcon} />


                    </div>


                </Grid2>
            </Grid2>}



            {isMobile && <Grid2 sx={{ padding: isMobile ? '0 24px' : '0 64px' }} size={{ md: 12, xs: 12 }} offset={{ md: 'auto' }}>
                <Grid2 sx={{ padding: isMobile ? '0 24px' : '0 64px' }} size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
                    <div
                        className="dots"
                        style={{
                            textAlign: 'center',
                            marginTop: '10px',
                            // height: '60px',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            display: 'flex',
                            gap: '8px'
                        }}
                    >
                        {cards.map((_: any, index: number) => (
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
                                    width: '12px',
                                    height: '12px',
                                    borderRadius: '50%',
                                    backgroundColor: index === currentIndex ? '#64a376' : '#bedcc3',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s',
                                }}
                            ></span>
                        ))}

                    </div>

                </Grid2>

            </Grid2>}

        </>

    );
};

export default DiconoDiMe;

// import arrowIcon from '../../../assets/img/arrow-right.svg';
// import starImg from '../../../assets/img/star.svg';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { Grid2 } from "@mui/material";

// interface Props {
//     isMedium: boolean;
//     isMobile: boolean;
// }

// const DiconoDiMe: React.FC<Props> = ({ isMedium, isMobile }) => {
//     const cards = [
//         { stars: 5, author: 'Omar', date: '27 ottobre 2024 | Da miodottore.it', content: 'Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis.' },
//         { stars: 5, author: 'Omar', date: '27 ottobre 2024 | Da miodottore.it', content: 'Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis.' },
//         { stars: 5, author: 'Omar', date: '27 ottobre 2024 | Da miodottore.it', content: 'Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis.' },
//         { stars: 5, author: 'Omar', date: '27 ottobre 2024 | Da miodottore.it', content: 'Lorem ipsum dolor sit amet consectetur. Consequat in sed orci id lorem fermentum nisi odio. Vel ac elementum lorem massa et ut. Viverra sagittis purus tempus euismod consectetur vel mattis.' },
//     ];

//     return (
//         <>
//             <Grid2 sx={{ padding: isMobile ? '0 24px' : '0 64px' }} size={{ md: 12, xs: 12 }} offset={{ md: 0 }}>
//                 <Grid2 size={{ md: 10, xs: 12 }} offset={{ md: 1 }}>
//                     <p className='overline' style={{ marginBottom: '24px' }}>dicono di me</p>
//                     <h3 style={{ marginBottom: '64px' }}>Risultati che puoi vedere e sentire</h3>
//                 </Grid2>
//             </Grid2>

//             {/* Swiper per i dispositivi mobili */}
//             {isMobile && (
//                 <Swiper
//                     spaceBetween={24}
//                     slidesPerView={1}
//                     navigation={{
//                         nextEl: '.swiper-button-next',
//                         prevEl: '.swiper-button-prev',
//                     }}
//                     className="carousel-container"
//                 >
//                     {cards.map((card, index) => (
//                         <SwiperSlide key={index}>
//                             <Grid2 sx={{ padding: '40px', borderRadius: '24px', border: '1px solid black' }} size={{ md: 12, xs: 12 }} offset={{ md: 0 }}>
//                                 <div style={{ display: 'flex', gap: '2px', marginBottom: '40px' }}>
//                                     {[...Array(card.stars)].map((_, i) => (
//                                         <img draggable={false} key={i} src={starImg} alt={`star-${i}`} />
//                                     ))}
//                                 </div>
//                                 <p className="p-x-large" style={{ marginBottom: '96px' }}>{card.content}</p>
//                                 <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', width: '100%', gap: '8px' }}>
//                                     <h4>{card.author}</h4>
//                                     <p style={{ opacity: '0.8' }} className="caption">{card.date}</p>
//                                 </div>
//                             </Grid2>
//                         </SwiperSlide>
//                     ))}
//                     {/* Aggiungi i bottoni di navigazione */}
//                     <div className="swiper-button-next" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} />
//                     <div className="swiper-button-prev" style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }} />
//                 </Swiper>
//             )}

//             {/* Carousel customizzato per i dispositivi non mobili */}
//             {!isMobile && (
//                 <Grid2 container size={{ md: 12, xs: 12 }} offset={{ md: 0 }} className="carousel-container" style={{ position: 'relative', width: '100%', maxWidth: '100%', margin: '0 auto', overflow: 'hidden', display: 'flex' }}>
//                     <Grid2 container size={{ md: 12, xs: 12 }} offset={{ md: 0 }} className="carousel" sx={{ display: 'flex', flexWrap: 'nowrap', margin: '0 64px', gap: '24px' }}>
//                         {cards.map((card, index) => (
//                             <Grid2 sx={{ flex: '0 0 100%', padding: '0 64px' }} key={index}>
//                                 <div style={{ padding: '40px', borderRadius: '24px', border: '1px solid black' }}>
//                                     <div style={{ display: 'flex', gap: '2px', marginBottom: '40px' }}>
//                                         {[...Array(card.stars)].map((_, i) => (
//                                             <img draggable={false} key={i} src={starImg} alt={`star-${i}`} />
//                                         ))}
//                                     </div>
//                                     <p className="p-x-large" style={{ marginBottom: '96px' }}>{card.content}</p>
//                                     <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
//                                         <h4>{card.author}</h4>
//                                         <p style={{ opacity: '0.8' }} className="caption">{card.date}</p>
//                                     </div>
//                                 </div>
//                             </Grid2>
//                         ))}
//                     </Grid2>
//                 </Grid2>
//             )}
//         </>
//     );
// };

// export default DiconoDiMe;












