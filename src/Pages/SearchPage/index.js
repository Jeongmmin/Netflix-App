// rfc
import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import  "./SearchPage.css";
import { useDebounce } from '../../hooks/useDebounce';

export default function SearchPage() {

    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState([])

    
    const useQuery = () => {
        // console.log('useLocation()', useLocation());
        return new URLSearchParams(useLocation().search);
    }
    
    
    let query = useQuery();

    // const searchTerm = query.get("q");
    const debounceSearchTerm = useDebounce(query.get("q"), 500);
    
    // searchTerm이 바뀔 때마다 새로 영화 데이터 가져오기
    useEffect(() => {
        if (debounceSearchTerm) {
            fetchSearchMovie(debounceSearchTerm);
        }
    }, [debounceSearchTerm])

    // console.log('searchTerm', searchTerm);

    const fetchSearchMovie = async (searchTerm) => {
        try {
            const request = await axios.get(
                // 성인영화를 제외해주기 위한 코드
                `/search/multi?include_adult-false&query=${searchTerm}`
            );
            // console.log(request);
            setSearchResults(request.data.results);
        }catch (error) {
            console.log("error", error);
        }
    }
    
    const renderSearchResults = () => {
        return searchResults.length > 0 ? (
            // 해당 결과가 있을 때 (<section></section>)
        <section className="search-container">
            {searchResults.map((movie) => {    
            if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
                "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
                <div className="movie" key={movie.id}>
                <div
                // navigate로 경로 이동
                    onClick={() => navigate(`/${movie.id}`)}
                    className="movie__column-poster"
                >
                    <img
                    src={movieImageUrl}
                    alt="movie"
                    className="movie__poster"
                    />
                </div>
                </div>
            );
            }
        })}
        </section>
        ) : (
        <section className="no-results">
            <div className="no-results__text">
            <p>
                찾고자하는 검색어"{debounceSearchTerm}"에 맞는 영화가 없습니다.
            </p>
            </div>
        </section>
        );
    };

    return renderSearchResults();
}
