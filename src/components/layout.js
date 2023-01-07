import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import {
	navbar,
	navbarList,
	navbarLink,
} from "./layout.module.css"



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
					<Link className ={navbarLink} to="/">HOME</Link>
				</li>
				<li className={navbarList}>
					<Link className ={navbarLink} to="/games">GAMES</Link>
				</li>
		</nav>
		<main>{children}</main>
	</div>
)}

export default Layout
