import React from "react";
import {useSelector} from "react-redux";
import "./error.css";


const Error = () => {
    const errorStatus = useSelector(state => state.errorPage.errorStatus);
    const errorMessage = useSelector(state => state.errorPage.errorMessage);
    return <div className={"error"}>
        <div className={"error__body"}>
            <div className={"error__status"}><span>{errorStatus} </span>ERROR</div>
            <div className={"error__message"}>{errorMessage}</div>
        </div>
    </div>
};

export default Error;