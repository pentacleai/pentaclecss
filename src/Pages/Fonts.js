import React, {Component} from 'react';
import Layout from "../components/layout";


class Fonts extends Component {
    render() {
        return <Layout>
            <h1>Fonts</h1>
            <p>Currently there is only one font, Fira Code.</p>
            <p>The fonts are served in the `fonts` folder and are licenced using the Open Font Licence – via <a href={"https://fonts.google.com/specimen/Fira+Code?selection.family=Fira+Code&sidebar.open=true#license"}>Google fonts</a>.</p>
            <p class={"text-bold"}>Fira Code Bold</p>
            <p class={"text-semibold"}>Fira Code SemiBold</p>
            <p class={"text-medium"}>Fira Code Medium</p>
            <p class={"text-regular"}>Fira Code Regular</p>
            <p class={"text-light"}>Fira Code Light</p>
        </Layout>;
    }
}

export default Fonts;
