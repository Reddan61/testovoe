import axios from "axios";
import {config} from "../config/config"

const apiKey = config.APIKey;

let instance = axios.create({
    /*withCredentials:true,*/
    baseURL:'https://api.themoviedb.org/3/'
});


export const moviesAPI = {
    addMovies: (pageNumber) => {
        return instance.get(`movie/popular?api_key=${apiKey}&page=${pageNumber}`).then(res => res).catch(e => e.response)
    },
    movieSearch: (text,pageNumber) => {
        return instance.get(`/search/movie?api_key=${apiKey}&query=${text}&page=${pageNumber}`).then(res => res).catch(e => e.response);
    },
    getMovieById: (id) => {
        return instance.get(`/movie/${id}?api_key=${apiKey}`).then(res => res).catch(e => e.response);
    },
    getMovieCreditsById: (id) => {
        return instance.get(`/movie/${id}/credits?api_key=${apiKey}`).then(res => res).catch(e => e.response)
    }
};
