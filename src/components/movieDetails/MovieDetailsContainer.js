import React, {useEffect,useState} from "react";
import {withRouter} from "react-router";
import MovieDetails from "./MovieDetails";
import {useDispatch, useSelector} from "react-redux";
import {getMovieByIdThunk, setFavoriteThunk, setRatingThunk} from "../../redux/movieDetailsReducer";


const MovieDetailsContainer = (props) => {
    let movie = useSelector(state => state.detailsPage.movie);
    let credits = useSelector(state => state.detailsPage.credits);
    const [isLoading,changeLoading] = useState(true);
    const dispatch = useDispatch();
    let id = props.match.params.id;
    useEffect(async () => {
        await dispatch(getMovieByIdThunk(id));
        changeLoading(false);
    },[]);

    async function changeRating (rating) {
        await dispatch(setRatingThunk(id,rating));
    }

    async function changeIsFavorite () {
        await dispatch(setFavoriteThunk(id));
    }

    if (isLoading) {
        return <></>
    }
    return <>
        <MovieDetails movie = {movie} credits = {credits} changeRating = {changeRating} changeIsFavorite = {changeIsFavorite}/>
    </>
};


export default withRouter(MovieDetailsContainer);