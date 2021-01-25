import React from "react";
import './app.css';
import Header from "./components/header/Header";
import {useState, Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Movies from "./components/movies/Movies";
import {useSelector} from "react-redux";
import Error from "./components/Error/Error";

const MovieDetailsContainer = React.lazy(() => import("./components/movieDetails/MovieDetailsContainer"));

function App() {
    let [isSwitched, ChangeSwitch] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [isGettedMovies, ChangeGettedMovies] = useState(false);
    const isError = useSelector(state => state.errorPage.isError);
    if(isError){
       return <Error />
    }
    return (
        <div className={`App ${isSwitched ? "App_active" : ""}`}>
            <div className={`App__body`}>
                <Header isSwitched={isSwitched} ChangeSwitch={ChangeSwitch} setLoading={setLoading}/>
                <Switch>
                    <Route exact path='/movies' render={() => <Movies isLoading={isLoading} setLoading={setLoading}
                                                                      ChangeGettedMovies={ChangeGettedMovies} isGettedMovies = {isGettedMovies}/>}/>
                    {isGettedMovies &&
                    <Suspense fallback={<div></div>}>
                        <Route exact path='/movie/:id' render={() => <MovieDetailsContainer
                            isLoading={isLoading}
                            setLoading={setLoading}
                        />}/>
                    </Suspense>
                    }
                    <Route render={() => <Redirect to={'/movies'}/>}/>
                </Switch>
            </div>

        </div>

    );
}

export default App;
