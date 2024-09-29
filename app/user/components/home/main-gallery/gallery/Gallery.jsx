'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Importa Swiper y SwiperSlide
import { Pagination, Autoplay } from "swiper/modules"; // Módulos que usaremos
import "swiper/css"; // Estilos básicos de Swiper
import "swiper/css/pagination"; // Estilos para la paginación
// import "./ImageSlider.scss"; // Importamos el archivo SCSS personalizado

const Gallery = () => {
  // Array de objetos con imágenes y descripciones cortas
  const slidesData = [
    {
      src: "https://ironusa.vtexassets.com/arquivos/ids/214913-500-auto?v=638629744372670000&width=500&height=auto&aspect=true",
      description: "Imagen 1 - Descripción corta Imagen 1 - Descripción corta Imagen 1 - Descripción corta",
      link: "https://www.google.com"
    },
    {
      src: "https://ironusa.vtexassets.com/arquivos/ids/214913-500-auto?v=638629744372670000&width=500&height=auto&aspect=true",
      description: "Imagen 1 - Descripción corta Imagen 1 - Descripción corta Imagen 1 - Descripción corta",
      link: "https://www.google.com"
    },
    {
      src: "https://ironusa.vtexassets.com/arquivos/ids/214913-500-auto?v=638629744372670000&width=500&height=auto&aspect=true",
      description: "Imagen 1 - Descripción corta Imagen 1 - Descripción corta Imagen 1 - Descripción corta",
      link: "https://www.google.com"
    },
    {
      src: "https://ironusa.vtexassets.com/arquivos/ids/214913-500-auto?v=638629744372670000&width=500&height=auto&aspect=true",
      description: "Imagen 1 - Descripción corta Imagen 1 - Descripción corta Imagen 1 - Descripción corta",
      link: "https://www.google.com"
    },
    {
      src: "https://ironusa.vtexassets.com/arquivos/ids/214913-500-auto?v=638629744372670000&width=500&height=auto&aspect=true",
      description: "Imagen 1 - Descripción corta Imagen 1 - Descripción corta Imagen 1 - Descripción corta",
      link: "https://www.google.com"
    },
    {
      src: "https://ironusa.vtexassets.com/arquivos/ids/214913-500-auto?v=638629744372670000&width=500&height=auto&aspect=true",
      description: "Imagen 1 - Descripción corta Imagen 1 - Descripción corta Imagen 1 - Descripción corta",
      link: "https://www.google.com"
    },
    {
      src: "https://ironusa.vtexassets.com/arquivos/ids/214913-500-auto?v=638629744372670000&width=500&height=auto&aspect=true",
      description: "Imagen 1 - Descripción corta Imagen 1 - Descripción corta Imagen 1 - Descripción corta",
      link: "https://www.google.com"
    },
    {
      src: "https://ironusa.vtexassets.com/arquivos/ids/214913-500-auto?v=638629744372670000&width=500&height=auto&aspect=true",
      description: "Imagen 1 - Descripción corta Imagen 1 - Descripción corta Imagen 1 - Descripción corta",
      link: "https://www.google.com"
    },
    {
      src: "https://ironusa.vtexassets.com/arquivos/ids/214913-500-auto?v=638629744372670000&width=500&height=auto&aspect=true",
      description: "Imagen 1 - Descripción corta Imagen 1 - Descripción corta Imagen 1 - Descripción corta",
      link: "https://www.google.com"
    },
    {
      src: "https://ironusa.vtexassets.com/arquivos/ids/214913-500-auto?v=638629744372670000&width=500&height=auto&aspect=true",
      description: "Imagen 1 - Descripción corta Imagen 1 - Descripción corta Imagen 1 - Descripción corta",
      link: "https://www.google.com"
    }
  ];

  return (
    <div className="gallery-container">
      <Swiper
        spaceBetween={0} // Espacio entre las imágenes
        slidesPerView={6} // Mostrar 6 imágenes a la vez
        pagination={{ clickable: true }} // Puntos de paginación clicables
        autoplay={{ delay: 4000 }} // Autoplay con 4 segundos de retraso
        loop={true} // Loop infinito
        modules={[Pagination, Autoplay]} // Módulos que vamos a usar
        className="mySwiper"
      >
        {slidesData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img src={slide.src} alt={`Slide ${index}`} className="slide-image" />
              <div className="call_to_action_container">
                <p className="slide-description">{slide.description}</p>
                <a href={slide.link} className="call_to_action">Comprar</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Gallery;