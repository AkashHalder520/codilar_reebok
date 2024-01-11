import React, { useEffect, useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Home.css"
import Productcarousle from "./Productcarousle";
import Toast from '../../common/Toast/Toast';

function Home() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 640);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return (
        <>
            {/* <Toast message={"hello this is my tostify"}/> */}
            <div className="homepage">
                <div className="top-carousle">

                    { isMobile? (
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            autoplay={true}
                        >
                            <SwiperSlide>
                                <img
                                    src="https://www.reebok.ae/media/wysiwyg/600-x-700_1.jpg"
                                    alt=""
                                    style={{ width: '100%' }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://www.reebok.ae/media/wysiwyg/600-x-700-NANO-X3.jpg"
                                    alt=""
                                    style={{ width: '100%' }}
                                />
                            </SwiperSlide>
                        </Swiper>
                    ) : (
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                            autoplay={true}
                        >
                            <SwiperSlide>
                                <img
                                    src="https://www.reebok.ae/media/wysiwyg/1920-x-560-RBK-BLKNOV.jpg"
                                    alt=""
                                    style={{ width: '100%' }}
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://www.reebok.ae/media/wysiwyg/1920_x_560_DFC_Reebok_1.jpg"
                                    alt=""
                                    style={{ width: '100%' }}
                                />
                            </SwiperSlide>
                        </Swiper>
                    )}
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
                        <img src="https://www.reebok.ae/media/wysiwyg/WOMEN.jpg" alt="image" />
                        <span>WOMEN</span>
                    </div>
                    <div className="card">
                        <img src="https://www.reebok.ae/media/wysiwyg/MEN.jpg" alt="image" />
                        <span>MEN</span>
                    </div>
                    <div className="card">
                        <img src="https://www.reebok.ae/media/wysiwyg/KIDS.jpg" alt="image" />
                        <span>KIDS</span>
                    </div>
                </div>
                <img className="pagebuilder-mobile-hidden"
                    src="https://www.reebok.ae/media/wysiwyg/1920-x-560-RBK-BLKNOV-LASTCHANCE.gif" alt="" title=""
                    data-element="desktop_image" data-pb-style="WHU64GN" />
                <img className="pagebuilder-mobile-view"
                    src="https://www.reebok.ae/media/wysiwyg/600-x-700-LAST-CHANCE_1.jpg" alt="" title=""
                    data-element="desktop_image" data-pb-style="WHU64GN" />
                <div className="First_card_section">
                    <h2>NEW ARRIVALS</h2>
                </div>
                <Productcarousle />
                <div className="First_card_section">
                    <h2>BLACK NOVEMBER DEALS</h2>
                </div>

                <div className="First_card_sectionBND">

                    <div className="card">
                        <img src="https://www.reebok.ae/media/wysiwyg/900-X-1200-TSHIRTS-UNDER-79_rev.gif" alt="image" />
                        <p>FONT AND CENTER</p>
                    </div>
                    <div className="card">
                        <img src="https://www.reebok.ae/media/wysiwyg/900-X-1200-SHOES-UNDER-99_rev.gif" alt="image" />
                        <p>FORWARD MOVES ONLY</p>
                    </div>
                    <div className="card">
                        <img src="https://www.reebok.ae/media/wysiwyg/900-X-1200-ACCESSORIES-UNDER-79_rev.gif"
                            alt="image" />
                        <p>CLASSIC FROM HEAD TO TOE</p>
                    </div>
                    <div className="card">
                        <img src="https://www.reebok.ae/media/wysiwyg/900-X-1200-BOTTOMS-UNDER-99_rev.gif" alt="image" />
                        <p>STYLE STARTS HERE</p>
                    </div>
                </div>
                <div className="First_card_section">
                    <h2>YOU MAY ALSO LIKE</h2>
                </div>

                <Productcarousle />

                <div className="homeparagraph">
                    <div>
                        <h3>SMASHING IT WITH REEBOK SPORTSWEAR</h3>
                        <p>
                            Once you find a sport you love, it all makes sense. In a hectic world, gift yourself the time you need to free your mind and let your body move. Don’t hesitate to get out there, you know it’ll be worth it. Whether it’s a jog in the rain or yoga in your lunchbreak, stick with it and you’ll feel on top of the world each time. When life’s busy or you don’t feel like it – take charge, and move with conviction. It’ll feel even better when you rise to meet the challenge. You can make it social by teaming up with a friend and training with a buddy. Feel good, feel great! Well fitting, beautifully designed sports clothing that’s a pleasure to wear plays a huge part in getting you out there to live your best life. Follow your passion in comfortable, specialist sportswear from Reebok that will boost your motivation and enhance your performance.
                        </p>

                    </div>
                    <div>
                        <h3>SPORT SHOP SHOWCASING EPIC REEBOK CHOICE</h3>
                        <p>
                            Whatever your thing – dance, cross training, boxing, running or the gym – you’ll find Reebok sports gear in our online sport shop that will trigger your enthusiasm. All our workout clothes offer thoughtful design, elevated fabrics and comfort to power you through your sessions looking and feeling your best. Packed with useful design features to keep you free from distraction, we pride ourselves on the choice we offer across sports with dedicated ranges and stylish collections for adults and children. From ventilated, technically designed gear for high intensity workouts to stylish and comfy cool-down looks that are fashionable enough to hang out in all day, we’ve got it covered with a huge range of sizes and styles. Check out our outstanding range of trainers offering colourful style alongside collaborations with designers and sportspeople as well as classic Reebok retro looks. Proud of our British heritage, Reebok clothes are built for the long-haul and are designed to accompany you on your sports journey.
                        </p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Home;