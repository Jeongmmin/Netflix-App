const requests = {
    fetchNowPlaying: `movie/now_playing`,
    fetchNetflixOriginals: `/discover/tv?with_networks=213`,
    fetchTrending: `/trending/all/week`,
    fetchTopRated: `/movie/top_rated`,
    fetchActionMovies: `/discover/movie?with_genres=28`,
    fetchComedyMOvies: `/discover/movie?with_genres=35`,
    fetchHorrorMovies: `/discover/movie?with_genres=27`,
    fetchRomanceMovies: `/discover/movie?with_genres=10749`,
    fetchDocumentaries: `/discover/movie?with_genres=99`,
    fetchMystery: `/discover/movie?with_genres=9648`,
    fetchDrama: `/discover/movie?with_genres=18`,

}

//<a class="no_click" href="/discover/movie?with_genres=9648">미스터리</a> 
//<a class="no_click" href="/discover/movie?with_genres=18">드라마</a> 

export default requests;