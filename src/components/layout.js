import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import {
	navbar
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
				<ul>
					<li>
						<Link to="/">
						Home
						</Link>
					</li>
					<li>
						<Link to="/games">
						Games
						</Link>
					</li>
				</ul>
			</nav>
      		<main>{children}</main>
    	</div>
)}

export default Layout
