import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import MovieModal from './MovieModal';
import "./Row.css";
// swiper 추가
import { Swiper, SwiperSlide } from "swiper/react";
// swiper style 추가
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper";



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
  }

  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   direction: 'vertical',
  //   loop: true,
  
  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  
  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });

//   const swiper = document.querySelector('.swiper').swiper;

// // Now you can use all slider methods like
// swiper.slideNext();

  return (
      <section className="row ">
        {/**TITLE*/}
				<h2>{title}</h2>
        <div className="slider">
        <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode]}
        className="mySwiper"
        
      >
          <div className="slider__arrow-left">
            {/* <span className="arrow" onClick={() => {
							document.getElementById(id).scrollLeft -= window.innerWidth - 80;
						}}>{"<"}</span> */}
          <div className="swiper-button-prev">{"<"}</div>
          </div>
            {/**SEVERAL ROWS__POSTER */}
            {movies.map((movie) => (
          <SwiperSlide id={id} className="swiper-slide">
            <div>
              <img
							key={movie.id}
                src={`${BASE_URL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
								loading="lazy"
                alt="{movie.name}"
                onClick={() =>handleClick(movie)}
              />
              <div className="titleOfMovie" >{movie.title ? movie.title: movie.name}</div>
            </div>
          </SwiperSlide>
            ))}
					<div className="slider__arrow-right">
						<span className="arrow" onClick={() => {
							document.getElementById(id).scrollLeft += window.innerWidth - 80;
						}}>
							{">"}
						</span>
					</div>
					</Swiper>
        </div>
            {/*modal이 열리면 MovieModal이 열린다. */}
            {
              modalOpen && (
                // movie 정보를 넣어줌
                  <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
                )   
            }

      </section>
  );

}

