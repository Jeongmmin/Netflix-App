import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import MovieModal from "./MovieModal";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

import "./Row.css";

import { FreeMode } from "swiper";
import { Navigation } from "swiper";

export default function Row({ isLargeRow, title, id, fetchUrl }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <section className='row '>
      <h2>{title}</h2>
      <div className='slider'>
        <Swiper
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            992: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
          }}
          slidesPerGroup={4}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          navigation
          className='mySwiper'
        >
          {movies.map((movie) =>
            movie.poster_path | (movie.backdrop_path !== null) ? (
              <SwiperSlide key={movie.id} id={id} className='swiper-slide'>
                <div>
                  <img
                    key={movie.id}
                    src={`${BASE_URL}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    className={`row__poster ${
                      isLargeRow && "row__posterLarge"
                    }`}
                    loading='lazy'
                    alt='{movie.name}'
                    onClick={() => handleClick(movie)}
                  />
                  <div className='title_of_movie'>
                    {truncate(movie.title ? movie.title : movie.name, 14)}
                  </div>
                </div>
                <div className='swiper-prev'></div>{" "}
                <div className='swiper-next'></div>
              </SwiperSlide>
            ) : (
              ""
            )
          )}
        </Swiper>
      </div>
      {modalOpen && (
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </section>
  );
}
