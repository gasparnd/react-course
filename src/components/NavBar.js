import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
import './styles/NavBar.css'

class NavBar extends React.Component {
	render() {
		return(
			<section className="Navbar">
				<div className="container-fluid">
					<Link className="Navbar__brand" to="/">
						<img className="Navbar__brand-logo" src={logo} alt="Platzi Conf Logo" />
						<span className="font-weight-light">Paltzi</span>
						<span className="font-weight-bold">Conf</span>
					</Link>
				</div>
			</section>
		)
	}
}

export default NavBar