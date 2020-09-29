import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Navigation from "./navigation"

const Layout = ({children}) => {
    return (
        <>
            <Header/>
            <Navigation/>
            <main>{children}</main>
            <footer>
                <article className={"footer-content"}>
                    © 2019 - {new Date().getFullYear()} Lotte Code
                </article>
            </footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
