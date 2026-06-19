import "./WhyWhistle.css";
import WhyWhistleCard from "./WhyWhistleCard";
import { whyWhistleData } from "../../data/whyWhistle";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function WhyWhistle() {
  return (
    <section className="why-whistle">
      <div className="container">
        <h2 className="section-title">
          Why Whistle?
        </h2>

        <Swiper
          className="why-swiper"
          spaceBetween={16}
          breakpoints={{
            320: {
              slidesPerView: 1.15,
            },
            480: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {whyWhistleData.map((item) => (
            <SwiperSlide key={item.id}>
              <WhyWhistleCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default WhyWhistle;