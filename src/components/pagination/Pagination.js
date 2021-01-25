import React, {useState} from "react";
import "./pagination.css";
import {useDispatch, useSelector} from "react-redux";
import {addMoviesThunk, movieSearchThunk} from "../../redux/movieReducer";
import {withRouter} from "react-router";


const Pagination = (props) => {
    const dispatch = useDispatch();
    const textSearching = useSelector(state => state.moviesPage.searchingText);
    const isSearching = useSelector(state => state.moviesPage.isSearching);
    let pages = [];
    for (let i = 1; i <= props.pageCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(props.pageCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPositionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPositionPageNumber = portionNumber * props.portionSize;


    function chooseNumber(e) {
        if (e.target.classList.contains(`pagination__number`) && !e.target.classList.contains(`pagination__number_active`) ) {
            props.setLoading(true);
           if(props.location.pathname === '/movies' && isSearching) {
                dispatch(movieSearchThunk(textSearching,e.target.innerHTML))
            } else if (props.location.pathname === '/movies') {
                dispatch(addMoviesThunk(e.target.innerHTML));
            }

            props.setLoading(false);
        }
    }
    return <div className={"pagination"}>
        <div className={"pagination__body"}>
            {portionNumber > 1 && <div className={"pagination__left"}>
                <div className={"pagination__leftArrow pagination__arrow"} onClick={() => setPortionNumber(portionNumber - 1)}>
                </div>
                <div className={"pagination__leftPoints points"}>
                    <span></span>
                </div>
            </div>}
            <div className={"pagination__numbers"} onClick={(e) => chooseNumber(e)}>
            {
                pages
                    .filter((el) => el >= leftPositionPageNumber && el <= rightPositionPageNumber)
                    .map(el => <span key = {el} className={`pagination__number ${el === props.pageNumber ? 'pagination__number_active' : ''}`}>{el}</span>)
            }
            </div>
            {portionCount > portionNumber && <div className={"pagination__right"}>
                <div className={"pagination__rightPoints points"}>
                    <span></span>
                </div>
                <div className={"pagination__rightArrow pagination__arrow"} onClick={() => setPortionNumber(portionNumber + 1)}>
                </div>
            </div>}
        </div>
    </div>
};

export default withRouter(Pagination);