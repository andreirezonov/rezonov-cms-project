import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import "./layout.css"

const Layout = ({ children }) => {
  	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
				title
			}
		}
	}`
)

return (
    <>
      	<div>
      		<title>{data.site.siteMetadata.title}</title>
      		<nav>
				<header>{data.site.siteMetadata.title}</header>
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
    </>
)}

export default Layout
