import React from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const images = [
  "/images/photo1.jpg",
  "/images/photo2.jpg",
  "/images/photo3.jpg"
];

function AlbumDetail() {
  const { id } = useParams();

  return (
    <div style={{ padding: 20 }}>
      <h2>Album ID: {id}</h2>
      <Swiper spaceBetween={10} slidesPerView={1}>
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`album-pic-${idx}`}
              style={{ width: '100%', borderRadius: 8 }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default AlbumDetail;
