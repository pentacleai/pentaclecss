import React, {Component} from 'react';
import {Route, HashRouter} from "react-router-dom";
import Layout from "./components/layout"

import './assets/styles/lotte.scss';


class App extends Component {
    render() {
        return (
            <HashRouter>
                <Route path="/" exact component={Main}/>
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
