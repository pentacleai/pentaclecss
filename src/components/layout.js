import React from "react"
import PropTypes from "prop-types"
import Header from "./header"

const Layout = ({children}) => {
    return (
        <>
            <Header/>

            <main>{children}</main>
            <footer>
                <article className={"footer-content"}>
                    © 2019 - {new Date().getFullYear()} <a href={"https://github.com/pentacleai"}>Pentacle</a> |  <a href={"https://www.npmjs.com/package/pentacle-css"}>npmjs</a>
                </article>
            </footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
