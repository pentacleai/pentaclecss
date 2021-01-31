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
    return <>
        <Layout>
            <h1>Hello</h1>
            <article>
                <p>Pentacle CSS is super simple css library written in sass.</p>
                <p>It's designed to provide a clean, lightweight layout that just works.</p>
                <p>Get the <a href={"https://www.npmjs.com/package/pentacle-css"}>npm</a></p>
            </article>
            <article className={"margin-top-2"}>
                <h2>Roadmap</h2>
                <ul>
                    <li>Form elements</li>
                    <li>Gists so you can copy the code from the style guide</li>
                    <li>Dark mode</li>
                    <li>Colour themes</li>
                    <li>Drop-shadows and hover options for box</li>
                    <li>Gradient background</li>
                    <li>Basic guide to design</li>
                    <li>Switch to Sass Dart @use instead of @import</li>
                </ul>
            </article>
        </Layout>
    </>
}

export default App;
