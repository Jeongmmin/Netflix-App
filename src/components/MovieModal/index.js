// rfce
import React, { useRef } from "react";

// closeOverlay hooks 추가
import { useCloseOverlay } from "../../hooks/useCloseOverlay";
import "./MovieModal.css";

// const MatchScore = Math.floor(Math.random()*100);

// props 가져오기
function MovieModal({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) {
  const BASE_URL = "https://image.tmdb.org/t/p/original";

  const ref = useRef(null);

  useCloseOverlay(ref, () => setModalOpen(false));

  return (
    <div className="presentation">
      <div className="wrapper-modal">
        <div className="modal" ref={ref}>
          <span onClick={() => setModalOpen(false)} className="modal-close">
            ✖
          </span>
          <img
            src={`${BASE_URL}${backdrop_path}`}
            alt="modal__poster-img"
            className="modal__poster-img"
          />

          <div className="modal__content">
            <p className="modal__details">
              <span className="modal__user-perc">{`${Math.floor(Math.random()*100)}% 일치`}</span>&nbsp;&nbsp;
              {release_date ? release_date : first_air_date}
            </p>

            <h2 className="modal__title">{title ? title : name}</h2>
            <p className="modal__overview"> 평점: {vote_average}</p>
            <p className="modal__overview"> {overview} </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
