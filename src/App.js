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
            <section class={"editorial-content"}>
                <h1>Hello</h1>
                <article>
                    <p>Pentacle CSS is super simple css library written in sass.</p>
                    <p>It's designed to provide a clean, lightweight layout that just works.</p>
                </article>
                <article>
                    <h2>About</h2>
                    <p>By day I'm a consultant specialising in refactoring bootstrap and other crufty ui libs out of
                        enterprise software systems at banks and FTSE100 companies, and putting in custom sass libraries.</p>
                    <p>A reduction in often unnecessary design complexity gives large rewards in ease of use, accessibility and performance.</p>
                    <p>This incarnation of the library is a new work in progress, however none of the selector names will change as standard html element naming conventions are used.</p>
                    <p>I am currently writing sass functions and working on theming so people can change overall sizing and colour themes by switching just a few sets of variables.</p>
                </article>
                <article className={"margin-top-2"}>
                    <p>
                        View the <a href={"https://trello.com/b/3ZPKFldK/pentacle-css"} target={"_blank"}
                                   rel="noopener noreferrer">trello</a> board
                    </p>
                    <p>Get the <a href={"https://www.npmjs.com/package/pentacle-css"} target={"_blank"}
                                  rel="noopener noreferrer">npm</a></p>
                </article>
            </section>
        </Layout>
    </>
}

export default App;
