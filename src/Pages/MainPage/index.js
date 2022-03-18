import React from "react";
import requests from '../../api/requests';
import Banner from '../../components/Banner';
import Row from '../../components/Row';

// rfc로 만들기
export default function MainPage() {
    return (
        <div>
        <Banner />

        <Row
            title="NETFLIX ORIGINALS"
            id="NO"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
        />
        <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" id="TR" fetchUrl={requests.fetchTopRated} />
        <Row title="Music" id="MS" fetchUrl={requests.fetchMusic} />
        <Row
            title="Romance Movies"
            id="RM"
            fetchUrl={requests.fetchRomanceMovies}
        />
        <Row
            title="Action Movies"
            id="AM"
            fetchUrl={requests.fetchActionMovies}
        />
        <Row title="Mistery" id="MT" fetchUrl={requests.fetchMystery} />
        </div>
    );
}
