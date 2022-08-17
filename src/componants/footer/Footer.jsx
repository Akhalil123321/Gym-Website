/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from '../../images/logo.png'
import { FaLinkedinIn, FaGlobeAmericas , FaGithub} from 'react-icons/fa';
import './footer.css'
const Footer = () => {
    return(
        <footer>
                <div className="blur footer-blur f-blue-l"></div>
                <div className="blur footer-blur f-blue-r red-blur"></div>
            <div className="social-cont">
                <a href="https://www.linkedin.com/in/ahmed-khalil8" target='_blank' title='Linkedin' ><FaLinkedinIn className='foot-icon'/></a>
                <a href="https://ahmed-khalil.netlify.app/" target='_blank' title='My site'><FaGlobeAmericas className='foot-icon'/></a>
                <a href="https://github.com/Akhalil123321" target='_blank' title='Github'><FaGithub className='foot-icon'/></a>
            </div>
            <img src={logo} alt="" className="logo"/>
        </footer>
    )
}
export default Footer