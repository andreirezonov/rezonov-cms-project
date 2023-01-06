import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import {
	navbar,
	navbarList,
	navbarLink,
} from "./layout.module.css"

import "../page.module.css"

const Layout = ({ children }) => {
  	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
				title
			}
		}
	}`
)

return (
	<div>
		<title>{data.site.siteMetadata.title}</title>
		<nav className={navbar}>
				<li className={navbarList}>
					<Link className ={navbarLink} to="/">Home</Link>
				</li>
				<li className={navbarList}>
					<Link className ={navbarLink} to="/games">Games</Link>
				</li>
		</nav>
		<main>{children}</main>
	</div>
)}

export default Layout
