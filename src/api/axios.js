import axios from 'axios';

const instance = axios.create({
    baseUrl: 'http://www.themoviedb.org/3',
    params: {
        apiKey: 'b9682768a1183be6002ab448442e44a4',
        language: 'ko-KR'
    },
});

export default instance;