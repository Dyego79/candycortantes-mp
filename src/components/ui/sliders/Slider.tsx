"use client";

import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function App() {
  const progressCircle = useRef<any>(null);
  const progressContent = useRef<any>(null);
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={0}
        centeredSlides={true}
        /* autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }} */
        speed={500}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-principal h-full w-full relative">
            <Image
              src={"/img/sile-background_1.webp"}
              alt=""
              width={2000}
              height={500}
              style={{ objectFit: "cover", position: "absolute" }}
            />
            <div className="flex container h-full max-w-[1650px] flex-row items-center justify-center w-full relative">
              <div className="text-white w-2/3 border">
                <h2>CELEBRÁ CON ESTILO</h2>
                <span>Cortantes para todas tus fiestas</span>
              </div>
              <div className="text-white w-1/3 border">2</div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-principal h-full w-full relative flex">
            <Image
              src={"/img/sile-background_1.webp"}
              alt=""
              width={2000}
              height={500}
              style={{ objectFit: "cover", position: "absolute" }}
            />
            <div>1</div>
            <div>2</div>
          </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20" className=""></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
