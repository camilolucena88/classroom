import React from 'react';
import './App.css';
import ErrorBoundary from "./components/ErrorBoundary";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home/Home";
import Activities from "./pages/Activities/Activities";
import Videos from "./pages/Videos/Videos";
import Books from "./pages/Books/Books";
import Activity from "./pages/Activities/Activity/Activity";
import Book from "./pages/Books/Book/Book";
import Video from "./pages/Videos/Video/Video";
import ActivityFactory from './pages/Activities/Activity/ActivityFactory';
import Quiz from "./pages/Activities/Quiz/Quiz";

function App() {
    return (
        <div className="App">
            <ErrorBoundary>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/activities">
                            <Activities/>
                        </Route>
                        <Route path="/videos">
                            <Videos/>
                        </Route>
                        <Route path="/books">
                            <Books/>
                        </Route>
                        <Route path="/activity/id/:id" children={<Activity/>}/>
                        <Route path="/activity/:type/id/:id/start" children={<ActivityFactory/>}/>
                        <Route path="/book/id/:id" children={<Book/>}/>
                        <Route path="/video/id/:id" children={<Video/>}/>
                    </Switch>
                </Router>
            </ErrorBoundary>
        </div>
    );
}

export default App;
