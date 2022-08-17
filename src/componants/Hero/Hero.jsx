import React from 'react'
import { motion } from "framer-motion"
import NumberCounter from 'number-counter';
import NavBar from '../navBar/NavBar'
import heart from '../../images/heart.png'
import hero from '../../images/hero_image.png'
import calories from '../../images/calories.png'
import heroBackground from '../../images/hero_image_back.png'
import './hero.css'
const Hero = () => {
    const transition = {type: 'spring', duration: 3}
	return(
    <main id='main'>
        <div className="blur hero-blure"></div>
		<div className='hero'>
            <div className='l-side'>
                <NavBar/>
                <div className="the-best-fitness">
                    <motion.div className="slider"
                    initial={{left: '70%'}}
                    whileInView={{left: '0'}}
                    transition={{...transition, type:'tween'}}
                    >
                    </motion.div>
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
                        <span className='score-num'><NumberCounter end={140} start={100} delay='4' preFix='+'/></span>
                        <span className='score-type'>EXPERT COACHES</span>
                    </div>
                    <div className='scores'>
                        <span className='score-num'><NumberCounter end={978} start={800} delay='3' preFix='+'/></span>
                        <span className='score-type'>MEMBERS JOINED</span>
                    </div>
                    <div className='scores'>
                        <span className='score-num'><NumberCounter end={50} start={0} delay='2' preFix='+'/></span>
                        <span className='score-type'>FITNESS PROGRAMS</span>
                    </div>
                </div>
                <div>
                    <button className='btn orange'>Get Started</button>
                    <button className='btn orange transparent'>Learn More</button>
                </div>
            </div>
            <div className='r-side'>
                <button className='btn l-btn absoulute'>Join Now</button>
                <motion.div 
                className="heart-rate"
                initial={{right:'-2rem'}}
                whileInView={{right:'4rem'}}
                transition={transition}
                >
                    <img src={heart} alt="" />
                    <span className='score-type score-n1'>Heart Rate</span>
                    <span className='score-num score-n2'>116 bpm</span>
                </motion.div>
                <img src={hero} alt="" className='hero-img'/>
                <motion.img 
                src={heroBackground} 
                alt="" 
                className='hero-back-img'
                initial={{right:'10rem'}}
                whileInView={{right:'20rem'}}
                transition={transition}
                />
                <motion.div
                initial={{right:'35rem'}}
                whileInView={{right:'27rem'}}
                transition={transition}
                className="calories-burner">
                    <img src={calories} alt="" />
                    <div className="calories-dedailes">
                            <span className='score-type score-n1'>Calories burned</span>
                            <span className='score-num score-n2'>220 kcal</span>
                    </div>
                </motion.div>
            </div>
        </div>
    </main>

	)
}
export default Hero