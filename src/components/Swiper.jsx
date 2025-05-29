// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



export default function ClientSwiper() {
    return (
        <div className="page5">
            <div className="title">
                <div className="circ"></div>
                <h3>WHO WE WORK WITH</h3>
            </div>

            <Swiper
                spaceBetween={20}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 100,
                    }
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="./src/assets/Img/swip1.svg" alt="Client 1" />
                    <p>
                        Retained Production support across retail and events in NY, CHI, LA. Creative Design,
                        Design Management, Production/Project Management, and execution of work from concept to
                        installation across the Country.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./src/assets/Img/swip2.svg" alt="Client 2" />
                    <p>
                        Creative Concepting, Design, Design Management, Project Management, and execution of work
                        from concept to installation across the Country. Cross functional communication and
                        management of third party partners.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./src/assets/Img/swip3.svg" alt="Client 3" />
                    <p>
                        Production and design along with install oversight and execution support for the SoHo
                        store opening on Broadway St, New York. Also working on creative and production work for
                        a new store opening in Glendale, California.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./src/assets/Img/swip4.svg" alt="Client 4" />
                    <p>
                        Design and Production partner for Hunter Holiday 2022 Pop-in at Nordstrom 57th St, New York,
                        including activations in Women’s, Men’s and Kid’s zones. Thirty-five additional smaller
                        take-downs in Nordstrom stores across the US. Concept design for Holiday boot customization
                        events in stores across winter 2022.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./src/assets/Img/swip5.svg" alt="Client 5" />
                    <p>
                        Creative, Design, and Production Partner for 2023 CES. Scope Included creation of Branding
                        Identity, Assets, and Digital Content, Design, Production design, Production oversight and
                        Installation of client activations for IBM, Delta, Instacart, and more.
                    </p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src="./src/assets/Img/swip6.svg" alt="Client 6" />
                    <p>
                        Creative, Design, and Production Partner for 2022 NY Fashion Week Pop-Up space. In
                        Partnership with B-Reel scope including creation of Final Design, Design Assets, 3D Renders,
                        Production design, Production/Partner oversight and creation of a two-story pop-up for
                        Afterpay’s clients such as Crocs, JD Sports, Container Store, & Revolve.
                    </p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
