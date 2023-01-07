import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import {
	navbar,
	navbarLogo,
	navbarList,
	navbarLink,
} from "./layout.module.css"

import logo from "../images/logo.png"

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
				<div className={navbarLogo}>
					<Link to="/">
						<img src={logo} alt="logo" height={75}/>
					</Link>
				</div>
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
