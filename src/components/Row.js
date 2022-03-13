import React, { useEffect, useState } from "react";
import axios from "../api/axios";
import MovieModal from './MovieModal';
import "./Row.css";

export default function Row({ isLargeRow, title, id, fetchUrl }) {

	const BASE_URL = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({})

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    console.log(request);
    setMovies(request.data.results);
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  }

  return (
      <section className="row">
        {/**TITLE*/}
				<h2>{title}</h2>
        <div className="slider">
          <div className="slider__arrow-left">
            <span className="arrow" onClick={() => {
							document.getElementById(id).scrollLeft -= window.innerWidth - 80;
						}}>{"<"}</span>
          </div>
          <div id={id} className="row__posters">
            {/**SEVERAL ROS__POSTER */}
            {movies.map((movie) => (
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
            ))}
          </div>
					<div className="slider__arrow-right">
						<span className="arrow" onClick={() => {
							document.getElementById(id).scrollLeft += window.innerWidth - 80;
						}}>
							{">"}
						</span>
					</div>
        </div>
            {/*modal이 열리면 MovieModal이 열린다. */}
            {
              modalOpen && (
                // movie 정보를 넣어줌
                  <MovieModal {...movieSelected} setModalOpen={setModalOpen}/>
                )   
            }

      </section>
  );
}
