import React, {Component} from 'react';
import {Route, HashRouter} from "react-router-dom";
import Layout from "./components/layout";

import './pentacle-css';
import Box from "./Pages/Box";
import Flex from "./Pages/Flex";
import Inputs from "./Pages/Inputs";
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
                <Route path="/inputs" component={Inputs}/>
                <Route path="/fonts" component={Fonts}/>
                <Route path="/layout" component={LayoutPage}/>
                <Route path="/typography" component={Typography}/>
            </HashRouter>
        );
    }
}

function Main() {
    return <>
        <Layout>
            <h1>Hello</h1>
            <article>
                <p>Pentacle CSS is super simple css library written in sass.</p>
                <p>It's designed to provide a clean, lightweight layout that just works.</p>
                <p>Get the <a href={"https://www.npmjs.com/package/pentacle-css"} target={"_blank"} rel="noopener noreferrer">npm</a></p>
            </article>
            <article>
                <h2>Roadmap</h2>
                <p>
                   View at <a href={"https://trello.com/b/3ZPKFldK/pentacle-css"} target={"_blank"} rel="noopener noreferrer">trello</a>
                </p>
            </article>
        </Layout>
    </>
}

export default App;
