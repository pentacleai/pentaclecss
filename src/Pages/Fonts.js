import React, {Component} from 'react';
import Layout from "../components/layout";


class Fonts extends Component {
    render() {
        return <Layout>
            <h1>Fonts</h1>
            <article>
                <p>Currently there is only one font, Fira Code.</p>
                <p>The fonts are self-hosted and live in the `assets/fonts` dir. Licencing is via the Open Font Licence
                    –
                    via <a
                        href={"https://fonts.google.com/specimen/Fira+Code?selection.family=Fira+Code&sidebar.open=true#license"}>Google
                        fonts</a>.</p>
            </article>
            <article className={"margin-top-2"}>
                <p className={"text-bold"}>Fira Code Bold</p>
                <p className={"text-semibold"}>Fira Code SemiBold</p>
                <p className={"text-medium"}>Fira Code Medium</p>
                <p className={"text-regular"}>Fira Code Regular</p>
                <p className={"text-light"}>Fira Code Light</p>
            </article>
        </Layout>;
    }
}

export default Fonts;
