import React from "react"
import PropTypes from "prop-types"
import Header from "./header"

const Layout = ({children}) => {
    return (
        <>
            <Header/>

            <main>{children}</main>
            <footer>
                <article className={"footer-content flex-group space-between"}>
                    <div>
                        © 2019 - {new Date().getFullYear()} <a href={"https://github.com/pentacleai"}>github</a>
                        | <a href={"https://www.npmjs.com/package/pentacle-css"}>npm</a>
                        | <a href={"https://pentacle.substack.com"} target={"_blank"}
                             rel="noopener noreferrer">substack</a>
                        | <a href={"https://twitter.com/pentacleai"} target={"_blank"}
                             rel="noopener noreferrer">twitter</a>
                    </div>
                    <div>
                        {/*<a href={"https://twitter.com/pentacleai"} target={"_blank"}*/}
                        {/*   rel="noopener noreferrer">donate</a>*/}
                    </div>
                </article>
            </footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
