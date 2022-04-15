import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import MovieModal from './MovieModal';
import requests from "../api/requests";
import "./Banner.css";
import styled from 'styled-components';

export default function Banner( { fetchUrl }) {

    const [movie, setMovie] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    const setMovies = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});
    // const BASE_URL = "https://image.tmdb.org/t/p/original";
    
    useEffect(() => {
        fetchData();
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

    const fetchData = async () => {
        // 현재 상영중인 영화 정보를 가져오기(여러 영화)
        const request = await axios.get(requests.fetchNowPlaying);
        // console.log(request);

        // 여러 영화 중 영화 하나의 ID를 가져오기
        const movieId 
        = request.data.results[
            Math.floor(Math.random() * request.data.results.length)
        ].id;

         // 특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
        const { data: movieDetail } = await axios.get(`movie/${movieId}`, {
            params: { append_to_response: "videos" },
        });
        setMovie(movieDetail);
        };

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n-1) + "..." : str;
    };

    // console.log('movie', movie);
    if(!isClicked) {
        return ( 
            <header
            className="banner"
            style={{
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path && movie.backdrop_path }")`,
                backgroundPosition: "top center",
                backgroundSize: "cover",
                }}
            >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie.title || movie.name || movie.original_name}
                </h1>
    
                <div className="banner__buttons">
                    <button className="banner__button play" onClick={() => setIsClicked(true)}>
                    🎬 재생
                    </button>
                    <button className="banner__button info" onClick={() =>handleClick(movie)} key={movie.id}>
                        {/* <div className="space"></div> 📍 상세 정보 */}
                        📍 상세 정보
                    </button>
                    {/*modal이 열리면 MovieModal이 열린다. */}
                    {
                    modalOpen && (
                        // movie 정보를 넣어줌
                        <MovieModal {...movieSelected} setModalOpen={setModalOpen} />
                        )   
                    }
                </div>
    
                <h1 className="banner__description">
                    {truncate(movie.overview, 100)}
                </h1>
                {/**Description */}
            </div>
            <div className="banner--fadeBottom" />    
        </header>
        );
    } else {
        return (
            <Container>
                <HomeContainer>
                {/* key가 없을 때 에러를 방지하기 위해서 src에 movie.videos.results[0] && 구문 추가함 -> 추가 후 동영상 없을 때 안내문구 나옴*/}
                    <Iframe
                        width="640"
                        height="360"
                        src={`https://www.youtube.com/embed/${movie.videos.results[0] && movie.videos.results[0].key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie.videos.results[0] && movie.videos.results[0].key}`}
                        title="YouTube video player"
                        frameborder="0"
                        allow="autoplay; fullscreen"
                        allowfullscreen
                    >
                    </Iframe>
                </HomeContainer>
            </Container>
        )
    }
    
}
// opacity: 0.65;
const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    z-index: -1;
    
    border: none;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;
    
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
`;

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
`;
