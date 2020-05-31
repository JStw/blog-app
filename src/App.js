import React from 'react';
import './App.css';

import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FindArticle from './Components/FindArticle/FindArticle';
import CreateMovie from './Components/CreateArticle/CreateMovie';
import EditArticle from './Components/EditArticle/EditArticle';
import Home from './Components/Home/Home';

export const API_BASE_URL = 'put your api base url here (do not put the /)';

function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/find">
                    <FindArticle/>
                </Route>
                <Route path="/create">
                    <CreateMovie/>
                </Route>
                <Route path="/edit/:title/:author" component={EditArticle}>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;