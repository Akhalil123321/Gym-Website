import React from 'react'

import {FaBuffer} from 'react-icons/fa';

import logo from '../../images/logo.png'
import './navBar.css'
const NavBar = () => {
	const [list, setList] = React.useState(false)
	const listSwitch = list? 'n-b-on' : 'n-b-off'
	const toggleList = () => {
		setList(!list)
	}
	return(
		<header className='header'>
			<img src={logo} alt='' className='logo'/>
			<ul className={listSwitch}>
				<li>Home</li>
				<li>Programs</li>
				<li>Why us</li>
				<li>Plans</li>
				<li>Testimonials</li>
			</ul>
			<FaBuffer className="nav-list-icon" onClick={toggleList}/>
		</header>
	)
}
export default NavBar