import React, {Component} from 'react';
import {Route, HashRouter} from "react-router-dom";
import Layout from "./components/layout";

import './lottecss/assets/styles/lotte.scss';
import Box from "./Pages/Box";
import Flex from "./Pages/Flex";
import Typography from "./Pages/Typography";
import Fonts from "./Pages/Fonts";


class App extends Component {
    render() {
        return (
            <HashRouter>
                <Route path="/" exact component={Main}/>
                <Route path="/box" component={Box}/>
                <Route path="/flex" component={Flex}/>
                <Route path="/fonts" component={Fonts}/>
                <Route path="/typography" component={Typography}/>

            </HashRouter>
        );
    }
}

function Main() {
    return <div>
        <Layout>Home page</Layout>
    </div>
}

export default App;
