import React, {Component} from 'react';
import {Route, HashRouter} from "react-router-dom";
import Layout from "./components/layout";

import './lottecss/assets/styles/lotte.scss';
import Box from "./Pages/Box";
import Flex from "./Pages/Flex";
import Typography from "./Pages/Typography";
import Fonts from "./Pages/Fonts";
import LayoutPage from "./Pages/Layout";


class App extends Component {
    render() {
        return (
            <HashRouter>
                <Route path="/" exact component={Main}/>
                <Route path="/box" component={Box}/>
                <Route path="/flex" component={Flex}/>
                <Route path="/fonts" component={Fonts}/>
                <Route path="/layout" component={LayoutPage}/>
                <Route path="/typography" component={Typography}/>
            </HashRouter>
        );
    }
}

function Main() {
    return <div>
        <Layout>
            <h1>Hello</h1>
            <article>
                <p>Lotte CSS is super simple css framework written in sass.</p>
                <p>It's designed to provide a very clean layout that just works.</p>
                <p>You just need to provide 2 or 3 brand colours and some snappy content.</p>
            </article>
            <article className={"margin-top-2"}>
                <em>Currently in alpha - there will be gists soon. October 2020.</em>
            </article>
        </Layout>
    </div>
}

export default App;
