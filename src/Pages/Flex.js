import React, {Component} from 'react';
import Layout from "../components/layout";
import Gist from "react-gist";


class Flex extends Component {
    render() {
        return <Layout>
            <h1>Flex</h1>
            <h2>flex group</h2>
            <article className={"flex-group"}>
                <div className={"box"}>hello</div>
                <div className={"box"}>hello</div>
                <div className={"box"}>hello</div>
            </article>

            <h2>flex group + flex start</h2>
            <article className={"flex-group flex-start"}>
                <div className={"box"}>hello</div>
                <div className={"box"}>hello</div>
                <div className={"box"}>hello</div>
            </article>

            <h2 className={"align-right"}>flex group + flex end</h2>
            <article className={"flex-group flex-end"}>
                <div className={"box"}>hello</div>
                <div className={"box"}>hello</div>
                <div className={"box"}>hello</div>
            </article>
        </Layout>;
    }
}

export default Flex;
