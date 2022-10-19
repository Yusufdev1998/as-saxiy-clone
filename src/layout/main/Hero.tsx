import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import CountDown from "../../components/CountDown";
const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={50}
              autoplay
              slidesPerView={1}
    
            >
              <SwiperSlide>
                <img
                  style={{ borderRadius: "20px" }}
                  src="https://assets.asaxiy.uz/uploads/banner/desktop/633520602d4ca.jpg.webp"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  style={{ borderRadius: "20px" }}
                  src="https://assets.asaxiy.uz/uploads/banner/desktop/625fe1f1373f3.jpg.webp"
                ></img>
              </SwiperSlide>
              <SwiperSlide>
                <img
                  style={{ borderRadius: "20px" }}
                  src="https://assets.asaxiy.uz/uploads/banner/desktop/633ed75a7d00c.png.webp"
                ></img>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-lg-3 position-relative">
           
                <img className="img-fluid"    style={{ borderRadius: "20px" }}  src="https://assets.asaxiy.uz/uploads/toptoday/mobile/634e8e17d3db6.jpg"></img>
                <CountDown futureDate={new Date("10/22/2022")}></CountDown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
