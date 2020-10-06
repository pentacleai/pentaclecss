import React, {Component} from 'react';
import Layout from "../components/layout";

class Box extends Component {
    render() {
        return <Layout>
            <h1>Box</h1>
            <section>
               <article className={"box"}><p>I am a box</p></article>
            </section>
        </Layout>;
    }
}

export default Box;
