import React from 'react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from "swiper/modules";

import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Home.css"
import Productcarousle from "./Productcarousle";

function Home(props) {
    return (
        <>
            <div className="homepage">
                <div className="top-carousle">
                    <Swiper
                        // install Swiper modules
                        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                        pagination={{clickable: true}}
                        scrollbar={{draggable: true}}
                        autoplay={true}
                    >
                        <SwiperSlide>
                            <img
                                src="https://www.reebok.ae/media/wysiwyg/1920-x-560-RBK-BLKNOV.jpg"
                                alt="" style={{width: '100%'}}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img
                                src="https://www.reebok.ae/media/wysiwyg/1920_x_560_DFC_Reebok_1.jpg"
                                alt="" style={{width: '100%'}}
                            />
                        </SwiperSlide>


                    </Swiper>
                </div>
                <div className="popular">
                    <h1>POPULAR RIGHT NOW</h1>
                </div>
                <div className="button-links">

                    <div className="links">
                        <button><a className="link" href="">Nano</a></button>
                        <button><a className="link" href="">Club C</a></button>
                        <button><a className="link" href="">BB 4000</a></button>
                        <button><a className="link" href="">Zig Kinetica</a></button>
                        <button><a className="link" href="">Classic Leather</a></button>
                    </div>
                </div>
                <div className="First_card_section">
                    <div className="card">
                        <img src="https://www.reebok.ae/media/wysiwyg/WOMEN.jpg" alt="image"/>
                        <span>WOMEN</span>
                    </div>
                    <div className="card">
                        <img src="https://www.reebok.ae/media/wysiwyg/MEN.jpg" alt="image"/>
                        <span>MEN</span>
                    </div>
                    <div className="card">
                        <img src="https://www.reebok.ae/media/wysiwyg/KIDS.jpg" alt="image"/>
                        <span>KIDS</span>
                    </div>
                </div>
                <img className="pagebuilder-mobile-hidden" src="https://www.reebok.ae/media/wysiwyg/1920-x-560-RBK-BLKNOV-LASTCHANCE.gif" alt="" title="" data-element="desktop_image" data-pb-style="WHU64GN"/>
                <Productcarousle/>

            </div>
        </>
    );
}

export default Home;