import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import clases from "../Footer/footer.module.css";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";




// import Swiper core and required modules
import SwiperCore, {
    Navigation, Thumbs
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);


const SwiperClip = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
        <Swiper style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color': '#fff' }} loop={true}
                        spaceBetween={10}  thumbs={{ swiper: thumbsSwiper }} className={clases.swiper}>
                        <SwiperSlide className={clases.swiper_item}>
                            <video className={clases.video_tag} controls>
                                <source src="/movie.mp4" type="video/mp4" />
                            </video>
                        </SwiperSlide>
                    </Swiper>
                    <Swiper onSwiper={setThumbsSwiper} loop={true} spaceBetween={10} slidesPerView={4} freeMode={true}
                        watchSlidesVisibility={true} watchSlidesProgress={true} className={clases.swiper_two}>
                        <SwiperSlide className={clases.swiper_item}><img src="https://swiperjs.com/demos/images/nature-1.jpg" /></SwiperSlide ><SwiperSlide className={clases.swiper_item}><img
                            src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide><SwiperSlide className={clases.swiper_item}><img
                                src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide><SwiperSlide className={clases.swiper_item}><img
                                    src="https://swiperjs.com/demos/images/nature-4.jpg" /></SwiperSlide><SwiperSlide className={clases.swiper_item}><img
                                        src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide><SwiperSlide className={clases.swiper_item}><img
                                            src="https://swiperjs.com/demos/images/nature-6.jpg" /></SwiperSlide><SwiperSlide className={clases.swiper_item}><img
                                                src="https://swiperjs.com/demos/images/nature-7.jpg" /></SwiperSlide><SwiperSlide className={clases.swiper_item}><img
                                                    src="https://swiperjs.com/demos/images/nature-8.jpg" /></SwiperSlide><SwiperSlide className={clases.swiper_item}><img
                                                        src="https://swiperjs.com/demos/images/nature-9.jpg" /></SwiperSlide><SwiperSlide className={clases.swiper_item}><img
                                                            src="https://swiperjs.com/demos/images/nature-10.jpg" /></SwiperSlide>
                    </Swiper>
        </>
    );
};

export default SwiperClip;