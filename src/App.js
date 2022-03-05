import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import Container from '@mui/material/Container';
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import ItemDetails from "./Pages/ItemDetails/ItemDetails";
import Footer from './components/Footer/Footer';

import './index.css';
import NotFound from "./Pages/NotFound/NotFound";
import Upcoming from "./Pages/Upcoming/Upcoming";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Container>
                    <Switch>
                        <Route path='/' component={Trending} exact />
                        <Route path='/trending' component={Trending} exact />
                        <Route path='/movie' component={Movies} exact />
                        <Route path='/tv' component={Series} exact />
                        <Route path='/search' component={Search} exact />
                        <Route path='/upcoming' component={Upcoming} exact />
                        <Route path='/browse' component={Trending} exact />

                        <Route path='/:media_type/:id' component={ItemDetails} />

                        <Route component={NotFound} />
                    </Switch>
                </Container>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
