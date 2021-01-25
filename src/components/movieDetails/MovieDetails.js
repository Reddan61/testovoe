import React from "react";
import "./movieDetails.css";
import noImage from "../../icons/noimage.jpg";
import {Link} from "react-router-dom";
import StarRatings from "react-star-ratings";


const MovieDetails = (props) => {
    const movie = props.movie;
    const credits = props.credits;
    return <div className={"movieDetails"}>
        <div className={"movieDetails__body"}>
            <div className={"movieDetails__upper"}>
                <div className={'movieDetails__back'}>
                    <Link to={'/movies'}>
                        <div className={'movieDetails__arrow'}></div>
                        <span>Back</span>
                    </Link>
                </div>
            </div>
            <div className={"movieDetails__main"}>
                <div className={"movieDetails__left"}>
                    <img src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : noImage}
                         alt="poster"
                         width={"382"}
                         height={'574'}
                    />
                </div>
                <div className={"movieDetails__right"}>
                    <div className={"movieDetails__title"}>
                        <span>{movie.title}</span>
                        <i className={`fas fa-heart ${movie.isFavorite ? 'fa-heart_active' : ''}`} onClick={() => props.changeIsFavorite()}/>
                    </div>
                    <div className={"movieDetails__stars"}>
                        <span>{movie.vote_average}</span>
                        <StarRatings
                            rating={movie.vote_average}
                            starRatedColor={"#FFB800"}
                            starHoverColor={"#FFB800"}
                            changeRating={((e) => {
                                props.changeRating(e)
                            })}
                            numberOfStars={10}
                            starDimension={'20px'}
                            starSpacing={'4px'}
                            name='rating'
                        />

                    </div>
                    <div className={"movieDetails__about"}>
                        <div className={"movieDetails__genre"}>
                            <span
                                className={"movieDetails__nameCategories"}>Genre: </span> {movie.genres.map((el, index) => {
                                if (index + 1 !== movie.genres.length) {
                                    return `${el.name}/`
                                } else {
                                    return `${el.name}`
                                }
                            }
                        )}
                        </div>
                        <div className={"movieDetails__year"}>
                            <span
                                className={"movieDetails__nameCategories"}>Year:</span> {movie.release_date.split('-')[0]}
                        </div>
                        <div className={"movieDetails__runningTime"}>
                            <span
                                className={"movieDetails__nameCategories"}>Running Time:</span> {movie.runtime} minutes
                        </div>
                        <div className={"movieDetails__starring"}>
                            <span
                                className={"movieDetails__nameCategories"}> Starring: </span> {credits.map((el, index) => {
                            if (index === 0) {
                                return `${el.name},`
                            } else if (index + 1 !== credits.length) {
                                return ` ${el.name},`
                            } else {
                                return ` ${el.name}`
                            }
                        })
                        }
                        </div>
                    </div>
                    <div className={"movieDetails__description"}>
                        {movie.overview}
                    </div>
                </div>

            </div>
        </div>
    </div>
};


export default MovieDetails;