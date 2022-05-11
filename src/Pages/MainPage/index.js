import React from "react";
import requests from "../../api/requests";
import Banner from "../../components/Banner";
import Row from "../../components/Row";

// rfc로 만들기
export default function MainPage() {
  return (
    <div>
      <Banner />
      <Row
        title='넷플릭스 오리지널'
        id='NO'
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title='지금 뜨는 콘텐츠' id='TN' fetchUrl={requests.fetchTrending} />{" "}
      <Row
        title='오늘의 TOP 10 콘텐츠'
        id='TR'
        fetchUrl={requests.fetchTopRated}
      />{" "}
      <Row title='음악 관련 영화' id='MS' fetchUrl={requests.fetchMusic} />{" "}
      <Row
        title='설렘주의 로맨틱한 영화'
        id='RM'
        fetchUrl={requests.fetchRomanceMovies}
      />{" "}
      <Row
        title='스펙타클 액션 영화'
        id='AM'
        fetchUrl={requests.fetchActionMovies}
      />{" "}
      <Row
        title='흥미진진 미스터리 영화'
        id='MT'
        fetchUrl={requests.fetchMystery}
      />{" "}
    </div>
  );
}
