import React from 'react'
import logo from '../../images/logo.png'
import './navBar.css'
const NavBar = () => {
	return(
		<div className='header'>
			<img src={logo} alt='' className='logo'/>
			<ul className='n-b-list'>
				<li>Home</li>
				<li>Programs</li>
				<li>Why us</li>
				<li>Plans</li>
				<li>Testimonials</li>
			</ul>
		</div>
	)
}
export default NavBar