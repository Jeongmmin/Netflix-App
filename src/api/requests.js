const requests = {
    fetchNowPlaying: `movie/now_playing`,  
    fetchNetflixOriginals: `/discover/tv?with_networks=213`,
    fetchTrending: `/trending/all/week`,
    fetchTopRated: `/movie/top_rated`,
    fetchActionMovies: `/discover/movie?with_geners=28`,
    fetchComedyMovies: `/discover/movie?with_geners=35`,
    // fetchHorrorMovies: `/discover/movie?with_geners=27`,
    fetchRomanceMovies: `/discover/movie?with_geners=10749`,
    fetchDocumentaries: `/discover/movie?with_geners=99`,
    fetchMystery: "/discover/movie?with_genres=9648",
    fetchDrama: "/discover/movie?with_genres=18",
}
export default requests;












//<a class="no_click" href="/discover/movie?with_genres=9648">미스터리</a> 
//<a class="no_click" href="/discover/movie?with_genres=18">드라마</a> 

// fetchMystery: "/discover/movie?with_genres=9648",
// fetchDrama: "/discover/movie?with_genres=18",