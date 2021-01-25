import {combineReducers, applyMiddleware, createStore, Action, compose} from "redux";
import thunk from "redux-thunk";
import MovieReducer from "./movieReducer";
import movieDetailsReducer from "./movieDetailsReducer";
import ErrorReducer from "./errorReducer";


let reducers =combineReducers({
    moviesPage:MovieReducer,
    detailsPage:movieDetailsReducer,
    errorPage:ErrorReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
/*const store = createStore(reducers,applyMiddleware(thunk));*/


window.store = store;


export default store;