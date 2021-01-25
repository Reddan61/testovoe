import React, {useState, useRef} from "react";
import "./movie.css";
import noImage from "../../../icons/noimage.jpg"
import {withRouter} from "react-router";
import Cover from "../cover/Cover";

const Movie = (props) => {

    const movie = props.movie;
    let ref = useRef(null);

    function onHover() {
        if (ref.current !== null) {
            ref.current.classList.add('cover_active');
        }
    }

    function onOut() {
        if (ref.current !== null) {
            ref.current.classList.remove('cover_active');
        }

    }

    return <div className={"movie"}>
        <div className={"movie__body"}
             onMouseOver={(e) => onHover()}
             onMouseOut={(e) => onOut()}>
            <Cover movie={props.movie} ref={ref}/>
            <img src={movie.poster_path === null ? noImage : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                 alt="movieImage" width={"285"} height={"428"}
            />
            <div className={"movie__title"}>
                <span>{movie.title}</span>
            </div>
        </div>
    </div>
};


export default withRouter(Movie);