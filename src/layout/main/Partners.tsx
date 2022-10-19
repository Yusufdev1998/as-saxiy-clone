import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const partners = [
  "https://assets.asaxiy.uz/brand/webp//6067393b94990.webp",
  "https://assets.asaxiy.uz/brand/webp//605036814c07e.webp",
  "https://assets.asaxiy.uz/brand/webp//6013a8b3bc61c.webp",
  "https://assets.asaxiy.uz/brand//6309b524cec23.png",
  "https://assets.asaxiy.uz/brand//630b04bbdadf4.jpg",
  "https://assets.asaxiy.uz/brand/webp//5e15c4ec85cf2.webp",
  "https://assets.asaxiy.uz/brand/webp//5e15c63e06b95.webp",
  "https://assets.asaxiy.uz/brand/webp//5e15c4697e437.webp",
  "https://assets.asaxiy.uz/brand/webp//5ff6f8872a0db.webp",
];

const Partners = () => {
  return (
    <section className="mb-40">
      <div className="container">
        <div className="partners__list">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            autoplay
            slidesPerView={7}
          >
            {partners.map((p: any, i: number) => (
              <SwiperSlide>
                <div key={i} className="feature__item partner__item">
                  <a href="/product/brand/bosch">
                    <img
                      className="partner__img"
                      src={p}
                      alt="image description"
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
