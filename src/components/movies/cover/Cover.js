import React, {useEffect, useState} from "react";
import {withRouter} from "react-router";
import {moviesAPI} from "../../../API/API";
import "./cover.css"
import {getIsFavorite, getRating, setFavoriteThunk} from "../../../redux/movieDetailsReducer";
import {useDispatch} from "react-redux";
import {addErrorThunk} from "../../../redux/errorReducer";

const Cover = React.forwardRef((props, ref) => {
    const [isLoading, ChangeLoading] = useState(true);
    const [movieDetails, ChangeDetails] = useState({});
    const [movie, ChangeMovie] = useState(props.movie);
    const dispatch = useDispatch();
    const id = movie.id;
    useEffect(async () => {
        let rating = getRating(movie).vote_average;
        let isFavorite =  getIsFavorite(movie).isFavorite;
        ChangeMovie({...movie,isFavorite:isFavorite,vote_average:rating});
        await moviesAPI.getMovieById(id).then((res) => {
            if(res.status >= 400) {
                dispatch(addErrorThunk(res.status,res.data.status_message));
                return
            }
            ChangeDetails(res.data);
            ChangeLoading(false);
        });
    }, []);

    async function ChangeRating() {
        let isFavorite = await dispatch(setFavoriteThunk(id,false));
        ChangeMovie({...movie,isFavorite:isFavorite})
    }

    if (isLoading) {
        return <div>
        </div>
    }
    return <div className={"cover"} ref={ref} onClick={(e) => {
        if (e.target.classList.contains(`cover__body`)) {
            props.history.push(`/movie/${id}`)
        }
    }}>
        <div className={"cover__body"}>
            <div className={"cover__heart"}>
                <i className={`fas fa-heart ${movie.isFavorite?'fa-heart_active' : ''}`}
                onClick={() => ChangeRating()} />
            </div>
            <div className={"cover__description"}>
                <div className={"cover__genre"}>
                    {movieDetails.genres.slice(0,2).map((el, index) => {
                        if (index + 1 !== 2) {
                            return `${el.name}/`
                        } else {
                            return `${el.name}`
                        }
                    })
                    }
                </div>
                <div className={"cover__time"}>
                    {movieDetails.runtime} minutes
                </div>
                <div className={"cover__yearStar"}>
                    <div className={"cover__year"}>
                        {movieDetails.release_date.split('-')[0]}
                    </div>
                    <div className={"cover__star"}>
                        <span>{movie.vote_average}</span>
                        <i className="fas fa-star"></i>
                    </div>
                </div>
            </div>
        </div>
    </div>
});

const withRouterForwardRef = Component => {
    const WithRouter = withRouter(({forwardedRef, ...props}) => (
        <Component ref={forwardedRef} {...props} />
    ));

    return React.forwardRef((props, ref) => (
        <WithRouter {...props} forwardedRef={ref}/>
    ));
};

export default withRouterForwardRef(Cover);
