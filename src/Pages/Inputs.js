import React, {Component} from 'react';
import Layout from "../components/layout";
import Gist from "../components/gist";

class Inputs extends Component {
    render() {
        return <Layout>
            <h1>Inputs</h1>
            <article>
                <h2>Buttons</h2>
                <button className={"primary"}>Primary button</button>
                <button className={"secondary"}>Secondary button</button>
                <button className={"cancel"}>Cancel button</button>
                <button className={"delete"}>Delete button</button>
                <Gist gist="0993d5c23318d2aa6bd9e2f1a32d3765" />
            </article>
            <article>
                <h2>Checkbox</h2>
                <input type="checkbox"/>
                <Gist gist="ae3f25050f0d04bfef0ca2db8b7f30dc" />
            </article>
        </Layout>;
    }
}

export default Inputs;
