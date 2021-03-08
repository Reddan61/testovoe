import {moviesAPI} from "../API/API";
import {addErrorThunk, errorCatch} from "./errorReducer";

const ADDMOVIES = "CHANGEMOVIES";
const CHANGEPAGENUMBER = "CHANGEPAGENUMBER";
const CHANGEISSEARCHINGMOVIE = "CHANGEISSEARCHINGMOVIE";
const CHANGESEARCHINGTEXTMOVIE = "CHANGESEARCHINGTEXTMOVIE";
const SORTMOVIE = "SORTMOVIE";


let initialState = {
    isSearching: false,
    searchingText: '',
    pageNumber: 1,
    totalCountPages: null,
    movies: []
};


const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDMOVIES:
            return {
                ...state,
                movies: action.movies,
                totalCountPages: action.totalCountPages,
                moviesGrid: action.moviesGrid,
                pageNumber: Number(action.pageNumber)
            };
        case CHANGEPAGENUMBER:
            return {
                ...state,
                pageNumber: Number(action.pageNumber)
            };
        case CHANGEISSEARCHINGMOVIE:
            return {
                ...state,
                isSearching: action.bool
            };
        case CHANGESEARCHINGTEXTMOVIE:
            return {
                ...state,
                searchingText: action.text
            };
        case SORTMOVIE:
            return {
                ...state,
                movies: action.movies,
                moviesGrid: action.movieGrid
            };
        default:
            return state;
    }
};

export default MovieReducer;


export const actionsMovie = {
    addMovieAC: (movies, totalCountPages, pageNumber) => ({
        type: ADDMOVIES,
        movies,
        totalCountPages,
        pageNumber
    }),
    changePageNumberAC: (pageNumber) => ({type: CHANGEPAGENUMBER, pageNumber}),
    changeSearchingTextMovieAC: (text) => ({type: CHANGESEARCHINGTEXTMOVIE, text}),
    changeIsSearchingMovieAC: (bool) => ({type: CHANGEISSEARCHINGMOVIE, bool}),
    sortMovieAC: (movies,movieGrid) => ({type: SORTMOVIE, movies})
};

/*function arrGrid(movies) {
    let arr = [];
    for (let i = 0; i < Math.ceil(movies.length / 4); i++) {
        arr[i] = movies.slice((i * 4), (i * 4) + 4);
    }
    return arr;
}*/


export const addMoviesThunk = (pageNumber) => {
    return async dispatch => {
        try {
            let res = await moviesAPI.addMovies(pageNumber);
            if(res.status >= 400) {
                dispatch(addErrorThunk(res.status,res.data.status_message));
                return
            }
            let movies = res.data.results;
           /* let arr = arrGrid(movies);*/
            dispatch(actionsMovie.addMovieAC(movies, res.data.total_pages, pageNumber));
        } catch (e) {
            console.log(e);
        }
    }
};


export const movieSearchThunk = (text, pageNumber) => {
    return async dispatch => {
        try {
            let res = await moviesAPI.movieSearch(text, pageNumber);
            if(res.status >= 400) {
                dispatch(addErrorThunk(res.status,res.data.status_message));
                return
            }
            let movies = res.data.results;
            /*let arr = arrGrid(movies);*/

            dispatch(actionsMovie.changeSearchingTextMovieAC(text));
            dispatch(actionsMovie.addMovieAC(movies, res.data.total_pages, pageNumber));
        } catch (e) {
            console.log(e);
        }
    }
};



export const FilterByNameThunk = (isFiltered) => {
    return (dispatch,getState) => {
        let state = getState().moviesPage;
        let movies = [...state.movies];
        /*let moviesGrid = [];*/

        if (isFiltered) {
            movies.sort((a, b) => a.original_title.localeCompare(b.original_title));
            /*moviesGrid = arrGrid(movies);*/
        } else {
            movies.sort((a, b) => b.original_title.localeCompare(a.original_title));
            /*moviesGrid = arrGrid(movies);*/
        }
        dispatch(actionsMovie.sortMovieAC(movies))
    }
};


export const FilterByYearThunk = (isFiltered) => {
    return (dispatch,getState) => {
        let state = getState().moviesPage;
        let movies = [...state.movies];
       /* let moviesGrid = [];*/

        if (isFiltered) {
            movies.sort((a, b) => {
                a = new Date(a.release_date);
                b = new Date(b.release_date);
                return a>b ? -1 : a<b ? 1 : 0;
            });
           /* moviesGrid = arrGrid(movies);*/
        } else {
            movies.sort((a, b) => {
                a = new Date(a.release_date);
                b = new Date(b.release_date);
                return a<b ? -1 : a>b ? 1 : 0;
            });
           /* moviesGrid = arrGrid(movies);*/
        }
        dispatch(actionsMovie.sortMovieAC(movies))
    }
};

