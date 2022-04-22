import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import MovieModal from "./MovieModal";
import "./Row.css";
// swiper 추가
import { Swiper, SwiperSlide } from "swiper/react";
// swiper style 추가
import "swiper/css";
import "swiper/css/free-mode";
// import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
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
    // console.log(request);
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
    <section className="row ">
      {/**TITLE*/}
      <h2>{title}</h2>
      <div className="slider">
        <Swiper
          loop={true} // loop 기능을 사용할 것인지
          breakpoints={{
            1378: {
              slidesPerView: 8, // 한번에 보이는 슬라이드 개수
              slidesPerGroup: 8, // 몇개씩 슬라이드 할지
            },
            998: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
            768: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
            0: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          spaceBetween={20}
          freeMode={true}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[FreeMode, Navigation]}
          navigation
          className="mySwiper"
        >
          {movies.map((movie) => (
            movie.poster_path  | movie.backdrop_path !== null ?
            (
            <SwiperSlide key={movie.id} id={id} className="swiper-slide">
                {/* {movie.poster_path | movie.backdrop_path !== null && */}
              <div>
                
                <img
                  key={movie.id}
                  src={`${BASE_URL}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  loading="lazy"
                  alt="{movie.name}"
                  onClick={() => handleClick(movie)}
                  />
                <div className="titleOfMovie">
                  {truncate(movie.title ? movie.title : movie.name, 14)}
                </div>
              </div>
                {/* } */}
                {/* <div class="swiper-prev"></div> <div class="swiper-next"></div> */}
            </SwiperSlide>
            )
            : ''
          ))}
        </Swiper>
      </div>
      {/*modal이 열리면 MovieModal이 열린다. */}
      {modalOpen && (
        // movie 정보를 넣어줌
        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </section>
  );
}
