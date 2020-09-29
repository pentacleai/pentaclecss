import React, {Component} from 'react';
import Layout from "../components/layout";

class Box extends Component {
    render() {
        return <Layout>
            <h2>Box</h2>
            <article className={"box"}>I am a box</article>
        </Layout>;
    }
}

export default Box;
