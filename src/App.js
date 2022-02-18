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

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Container>
                    <Switch>
                        <Route path='/' component={Trending} exact />
                        <Route path='/movies' component={Movies} />
                        <Route path='/series' component={Series} />
                        <Route path='/search' component={Search} />
                        <Route path='./browse' component={Trending} />

                        <Route path='/:media_type/:id' component={ItemDetails} />
                    </Switch>
                </Container>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
