'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Importa Swiper y SwiperSlide
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Módulos que usaremos
import "swiper/css"; // Estilos básicos de Swiper
import "swiper/css/navigation"; // Estilos para la navegación (flechas)
import "swiper/css/pagination"; // Estilos para la paginación (puntos)
import "@/app/scss/components/main-slider.scss"; // Estilos personalizados

// Componente de Slider
const MainSlider = () => {
  // Datos de ejemplo con imágenes de prueba
  const slides = [
    {
      id: 1,
      title: "Slide 1",
      image: "/images/main-slider/1.webp",
    },
    {
      id: 2,
      title: "Slide 2",
      image: "/images/main-slider/2.webp",
    },
    {
      id: 3,
      title: "Slide 3",
      image: "/images/main-slider/3.webp",
    },
    {
      id: 4,
      title: "Slide 4",
      image: "/images/main-slider/2.webp",
    },
  ];

  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={30} // Espacio entre slides
        slidesPerView={1} // Número de slides visibles a la vez
        navigation // Activar navegación (flechas)
        pagination={{ clickable: true }} // Puntos de paginación clicables
        autoplay={{ delay: 3000 }} // Autoplay con 3 segundos de retraso
        loop={true} // Hacer que el slider sea cíclico
        modules={[Navigation, Pagination, Autoplay]} // Módulos que usaremos
        className="mySwiper" // Clase CSS personalizada
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <img src={slide.image} alt={slide.title} className="slide-image" />
              {/* <div className="slide-title">
                <h2>{slide.title}</h2>
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;