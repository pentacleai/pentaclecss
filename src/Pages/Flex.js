import React, {Component} from 'react';
import Layout from "../components/layout";

class Flex extends Component {
    render() {
        return <Layout>
            <h1>Flex</h1>
            <em>Wrap child elements in a container with a class of `flex-group`</em>
            <section>
                <h2>flex-group</h2>
                <article className={"flex-group"}>
                    <div className={"box"}><p>Hello</p></div>
                    <div className={"box"}><p>Hello</p></div>
                    <div className={"box"}><p>Hello</p></div>
                </article>
            </section>

            <section>
                <h2>flex-group flex-start</h2>
                <article className={"flex-group flex-start"}>
                    <div className={"box"}><p>Hello</p></div>
                    <div className={"box"}><p>Hello</p></div>
                    <div className={"box"}><p>Hello</p></div>
                </article>
            </section>

            <section>
                <h2 className={"align-right"}>flex-group flex-end</h2>
                <article className={"flex-group flex-end"}>
                    <div className={"box"}><p>Hello</p></div>
                    <div className={"box"}><p>Hello</p></div>
                    <div className={"box"}><p>Hello</p></div>
                </article>
            </section>

        </Layout>;
    }
}

export default Flex;
