import React from "react";
import "./header.css"
import iconB from "../../icons/filmIconBrown.png"
import iconW from "../../icons/filmIconWhite.png"
import searchB from "../../icons/Search.png"
import searchW from "../../icons/SearchW.png"
import {useDispatch} from "react-redux";
import {actionsMovie, movieSearchThunk} from "../../redux/movieReducer";

const Header = (props) => {
    const dispatch = useDispatch();

    function ChangeColor() {
        props.ChangeSwitch(!props.isSwitched)
    }

    let timeOutId;
    function search(e) {
        clearTimeout(timeOutId);
        timeOutId = setTimeout( async () => {
            let text = e.target.value;
            if(text.trim() !== '') {
                await dispatch(actionsMovie.changeIsSearchingMovieAC(true));
                props.setLoading(true);
                await dispatch(actionsMovie.changePageNumberAC(1));
                await dispatch(movieSearchThunk(text,1));
                props.setLoading(false)
            } else {
                await dispatch(actionsMovie.changePageNumberAC(1));
                await dispatch(actionsMovie.changeIsSearchingMovieAC(false));
            }

        },1000)
    }
    return <div className={"header"}>
        <div className={"header__body"}>
            <div className={"header__left"}>
                <div className={"header__icon"}>
                   <img src={props.isSwitched?iconW:iconB} alt="icon"/>
                </div>
                <div className={"header__input"}>
                    <input type={"text"} placeholder={"Search"} onChange={(e) => search(e)}/>
                    <div className={"header__searchIcon"}>
                        <img src={props.isSwitched?searchW:searchB} alt="search"/>
                    </div>
                </div>
            </div>
            <div className={"header__right"}>
                Dark theme:
                <div className={`header__switch ${props.isSwitched ? "header__switch_active":""}`}
                    onClick={ChangeColor}
                >
                </div>
            </div>
        </div>
    </div>
};


export default Header;