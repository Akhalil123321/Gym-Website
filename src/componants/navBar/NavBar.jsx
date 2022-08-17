import React from 'react'
import {Link} from 'react-scroll'
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
				<li>
					<Link 
					to='main'
					span={true}
					smooth={true}
					onClick=  {() => setList(false)}
					>
						Home
					</Link>
				</li>
				<li>
					<Link
					to='explore'
					span={true}
					smooth={true}
					onClick=  {() => setList(false)}
					>
						Programs
					</Link>
				</li>
				<li>
					<Link
					to='reasons'
					span={true}
					smooth={true}
					onClick=  {() => setList(false)}
					>
						Why us
					</Link>
				</li>
				<li>
					<Link
					to='plans'
					span={true}
					smooth={true}
					onClick=  {() => setList(false)}
					>
						Plans
					</Link>
				</li>
				<li>
					<Link
					to='aboutus'
					span={true}
					smooth={true}
					onClick=  {() => setList(false)}
					>
						Testimonials
					</Link>
				</li>
			</ul>
			<FaBuffer className="nav-list-icon" onClick={toggleList}/>
		</header>
	)
}
export default NavBar