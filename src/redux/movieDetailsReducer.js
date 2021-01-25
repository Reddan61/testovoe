import {moviesAPI} from "../API/API";
import {addErrorThunk} from "./errorReducer";

const GETMOVIEBYID = "GETMOVIEBYID";
const GETCREDITSBYID = "GETCREDITSBYID";
const CHANGERATING = "CHANGERATING";
const CHANGEFAVORITE = "CHANGEFAVORITE";

let initialState = {
    movie: {},
    credits: []
};


const movieDetailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETMOVIEBYID:
            return {
                ...state,
                movie: action.movie
            };
        case GETCREDITSBYID:
            return {
                ...state,
                credits: action.credits
            };
        case CHANGERATING:
            return {
                ...state,
                movie: {...state.movie, vote_average: action.rating}
            };
        case CHANGEFAVORITE:
            return {
                ...state,
                movie: {...state.movie,isFavorite:action.bool}
            };
        default:
            return state
    }
};

export default movieDetailsReducer;


const movieDetailsActions = {
    getMovieByIdAC: (movie) => ({type: GETMOVIEBYID, movie}),
    getCreditsByIdAC: (credits) => ({type: GETCREDITSBYID, credits}),
    changeRatingAC: (rating) => ({type: CHANGERATING, rating}),
    changeFavoriteAC: (bool) => ({type: CHANGEFAVORITE, bool}),
};

function creditsFilter(credits) {
    let i = 0;
    credits = credits.data.cast;
    while (credits.length > 11) {
        credits = credits.filter(el => el.popularity >= i);
        i += 0.5;
    }
    if (credits.length === 11) {
        credits.splice(10, credits.length)
    }
    return credits;
}

export function getRating(movie) {
    let arr = JSON.parse(localStorage.getItem('movieRating'));
    movie.vote_average = 0;
    if (arr && typeof (arr) === "object") {
        arr.forEach((el) => {
            if (el.movieId == movie.id) {
                movie.vote_average = el.movieRating
            }
        })
    } else {
        movie.vote_average = 0;
    }

    return movie
}

export function getIsFavorite(movie) {
    let arr = JSON.parse(localStorage.getItem('movieFavorite'));
    movie.isFavorite = false;
    if (arr && typeof (arr) === "object") {
        arr.forEach((el) => {
            if (el.movieId == movie.id) {
                movie.isFavorite = el.isFavorite
            }
        })
    } else {
        movie.isFavorite = false;
    }

    return movie
}




export const getMovieByIdThunk = (id) => {
    return async dispatch => {
        try {
            let res = await moviesAPI.getMovieById(id);
            if(res.status >= 400) {
                dispatch(addErrorThunk(res.status,res.data.status_message));
                return
            }
            let movie = res.data;
            movie = await getRating(movie);
            movie = await getIsFavorite(movie);
            let credits = await moviesAPI.getMovieCreditsById(id);
            if(credits.status >= 400) {
                dispatch(addErrorThunk(credits.status,credits.data.status_message));
                return
            }
            dispatch(movieDetailsActions.getCreditsByIdAC(creditsFilter(credits)));
            dispatch(movieDetailsActions.getMovieByIdAC(movie));
        } catch (e) {
            console.log(e)
        }
    }
};

export const setRatingThunk = (id, rating) => {
    return dispatch => {
        try {
            let arr = JSON.parse(localStorage.getItem('movieRating'));
            if (arr && arr.length !== 0) {
                let isEqualId = arr.filter(el => el.movieId == id);
                if(isEqualId.length !== 0) {
                    arr = arr.map(el => {
                        if(el.movieId == id) {
                            return {
                                ...el,
                                movieRating: rating
                            }
                        }
                        else return el;
                    })
                } else {
                    arr.push({movieId: id, movieRating: rating});
                }
                localStorage.setItem("movieRating", JSON.stringify(arr));

            } else {
                localStorage.setItem("movieRating", JSON.stringify([{
                    movieId: id,
                    movieRating: rating
                }]));
            }
            dispatch(movieDetailsActions.changeRatingAC(rating))
        } catch (e) {
            console.log(e)
        }
    }
};



export const setFavoriteThunk = (id,withDispatch = true) => {
    return async dispatch => {
        try {
            let isFavorite = false;
            let arr = JSON.parse(localStorage.getItem('movieFavorite'));
            if (arr && arr.length !== 0) {
                let isEqualId = arr.filter(el => el.movieId == id);
                if(isEqualId.length !== 0) {
                    arr = arr.map(el => {
                        if(el.movieId == id) {
                            isFavorite = !el.isFavorite;
                            return {
                                ...el,
                                isFavorite: !el.isFavorite
                            }
                        }
                        else return el;
                    })
                } else {
                    isFavorite = true;
                    arr.push({movieId: id, isFavorite: true});
                }
                localStorage.setItem("movieFavorite", JSON.stringify(arr));
            }
            else {
                isFavorite = true;
                localStorage.setItem("movieFavorite", JSON.stringify([{
                    movieId: id,
                    isFavorite: true
                }]));
            }
            if(withDispatch){
                dispatch(movieDetailsActions.changeFavoriteAC(isFavorite))
            } else {
                return isFavorite
            }
        }
        catch (e) {
            console.log(e)
        }
    }
};
