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
                    <p>A reduction in design complexity give rewards in ease of use,
                        accessibility and performance – for developers and people who use the software we create.</p>
                    <p>I write away bootstrap and third-party ui plugins from enterprise software at banks and FTSE100 companies, and replace them with clean sass libraries
                        and hand-rolled js components.</p>
                </article>
                <article>
                    <h2>Roadmap</h2>
                    <p>This incarnation of the library is a new work in progress (Feb 2021), however none of the
                        selector names
                        will change as standard html element naming conventions are used.</p>
                    <p>
                        <a href={"https://trello.com/b/3ZPKFldK/pentacle-css"} target={"_blank"}
                                    rel="noopener noreferrer">Take a look at the board</a>
                    </p>
                </article>
            </section>
        </Layout>
    </>
}

export default App;
