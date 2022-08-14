import React from 'react'
import NavBar from '../navBar/NavBar'
import heart from '../../images/heart.png'
import hero from '../../images/hero_image.png'
import calories from '../../images/calories.png'
import heroBackground from '../../images/hero_image_back.png'
import './hero.css'
const Hero = () => {
	return(
		<div className='hero'>
            <div className='l-side'>
                <NavBar/>
                <div className="the-best-fitness">
                    <div className="slider"></div>
                    <span >THE BEST FITNESS CLUB IN THE TOWN</span>
                </div>
                <div className='shap-ideal-body'>
                    <div>
                        <span className='normal-title transparent-title large'>shape </span>
                        <span className='normal-title large'>your</span>
                    </div>
                    <div>
                        <span className='normal-title large'>ideal body</span>
                    </div>
                </div>
                <p className='hero-par'>In here we will help you to shape and build your ideal body and live up your life to fullest</p>
                <div className='score-cont'>
                    <div className='scores'>
                        <span className='score-num'>+ 140</span>
                        <span className='score-type'>EXPERT COACHES</span>
                    </div>
                    <div className='scores'>
                        <span className='score-num'>+ 978</span>
                        <span className='score-type'>MEMBERS JOINED</span>
                    </div>
                    <div className='scores'>
                        <span className='score-num'>+ 50</span>
                        <span className='score-type'>FITNESS PROGRAMS</span>
                    </div>
                </div>
                <div>
                    <button className='btn orange'>Get Started</button>
                    <button className='btn orange transparent'>Learn More</button>
                </div>
            </div>
            <div className='r-side'>
                <button className='btn l-btn'>Join Now</button>
                <div className="heart-rate">
                    <img src={heart} alt="" />
                    <span className='score-type score-n1'>Heart Rate</span>
                    <span className='score-num score-n2'>116 bpm</span>
                </div>
                <img src={hero} alt="" className='hero-img'/>
                <img src={heroBackground} alt="" className='hero-back-img'/>
                <div className="calories-burner">
                    <img src={calories} alt="" />
                    <div className="calories-dedailes">
                            <span className='score-type score-n1'>Calories burned</span>
                            <span className='score-num score-n2'>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>
	)
}
export default Hero