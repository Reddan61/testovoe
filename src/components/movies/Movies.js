import React, {useEffect, useState} from 'react';
import "./movies.css";
import Movie from "./movieItem/Movie";
import {useDispatch, useSelector} from "react-redux";
import {addMoviesThunk, FilterByNameThunk, FilterByYearThunk} from "../../redux/movieReducer";
import Pagination from "../pagination/Pagination";


const Movies = (props) => {
    const dispatch = useDispatch();
    const moviesGrid = useSelector(state => state.moviesPage.moviesGrid);
    const portionSize = 5;
    const pageCount = useSelector(state => state.moviesPage.totalCountPages);
    const pageNumber = useSelector(state => state.moviesPage.pageNumber);
    const isSearching = useSelector(state => state.moviesPage.isSearching);
    const [isFilteredName,ChangeFilterName] = useState(false);
    const [isFilteredDate,ChangeFilterDate] = useState(false);

    useEffect(async () => {
        if (!isSearching) {
            await dispatch(addMoviesThunk(pageNumber));
            props.ChangeGettedMovies(true);
        }
        props.setLoading(false);
    },[isSearching]);

    function changePage(e) {
        if (!e.target.classList.contains(`movies__span_active`)) {
            let spans = document.querySelectorAll(".movies__span");
            for (let i = 0; i < spans.length; i++) {
                spans[i].classList.remove(`${e.target.className}_active`)
            }
            e.target.classList.toggle(`${e.target.className}_active`);
        }
    }

    function nameFilter() {
        ChangeFilterName(!isFilteredName);
        dispatch(FilterByNameThunk(!isFilteredName));
    }
    function dateFilter() {
        ChangeFilterDate(!isFilteredDate);
        dispatch(FilterByYearThunk(!isFilteredDate));
    }

    return <div className={"movies"}>
        <div className={"movies__body"}>
            <div className={"movies__title"}>
                <div className={"movies__sample"}>
                    <span className={"movies__span movies__span_active"} onClick={(e) => changePage(e)}>Films</span>
                    <span className={"movies__span"} onClick={(e) => changePage(e)}>TV series</span>
                </div>
                <div className={"movies__filter"}>
                    <span onClick={() => nameFilter()}>Name</span>
                    <span onClick={() => dateFilter()}>Date</span>
                </div>
            </div>
            {props.isLoading ? <div>Loading</div>
                :
                <div className={"movies__items"}>
                    {moviesGrid.map((el, index) => <div className={"movies__row"} key={index}>
                            {el.map(el => <Movie key={el.id} movie={el}/>)}
                        </div>
                    )}
                </div>
            }
            <div className={"movies__pagination"}>
                {props.isLoading ? <div></div>
                    :
                    <Pagination pageCount={pageCount} portionSize={portionSize} pageNumber={pageNumber}
                                setLoading={props.setLoading}/>
                }
            </div>
        </div>
    </div>
};

export default Movies;