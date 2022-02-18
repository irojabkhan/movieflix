import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/BottomNav";
import Container from '@mui/material/Container';
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import SingleItem from "./Pages/SingleItem/SingleItem";

import './index.css';


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <SimpleBottomNavigation />
                <Container>
                    <Switch>
                        <Route path='/' component={Trending} exact />
                        <Route path='/movies' component={Movies} />
                        <Route path='/series' component={Series} />
                        <Route path='/search' component={Search} />

                        <Route path='/item' component={SingleItem} />
                    </Switch>
                </Container>
            </div>
        </BrowserRouter>
    );
}

export default App;
