
import React from "react";
import { motion } from "framer-motion"  
import leftArrow from '../../images/leftArrow.png'
import testimonialsData from '../../data/testimonialsData'
import './aboutus.css'
const AboutUs = () => {
    const transition = {type: 'spring', duration: 3}
    // const getElements = (element, animation) => {
    //     document.getElementById(element).classList.remove(animation)
    //     setTimeout(()=>{document.getElementById(element).classList.add(animation)},1)
    // }
    // const resetAnimation =() => {
    //     getElements('timonial-bordered', 'animation1')
    //     getElements('timonial-solid', 'animation2')
    //     getElements('timoinal-image', 'animation3')
    //     getElements('timonial-review', 'animation4')
    // }
    const [count,setCount] = React.useState(0)
    let timonials = testimonialsData[count]
    const rightHandle=() => {
        setCount(prevCount => prevCount + 1)
        if(count >= 2){
            setCount(prevCount => prevCount = 0)
        }
        // resetAnimation()
    }    
    const leftHandle=() => {
        setCount(prevCount => prevCount - 1)
        if(count <= 0){
            setCount(prevCount => prevCount = 2)
        }
        // resetAnimation()
    }
    return(
        <section className="testimonials-cont" id="aboutus">
            <div className="right-all">
                <div className="testimonials">testimonials</div>
                <div className='aboutus-title-cont'>
                    <span className='normal-title transparent-title' >what they</span>
                    <span className="normal-title">say about us</span>
                </div>
                <div className="test-timonials">
                    <div className="timonial-left">
                        <motion.div 
                        className="timonial-review"
                        key={count}
                        initial={{opacity:0, x:-100}}
                        animate={{opacity:1, x:0}}
                        exit= {{opacity:0, x:100}}
                        transition={transition}
                        >
                            {timonials.review}
                        </motion.div>
                        <div className="timonial-name-status">
                            <span>{timonials.name}</span>
                            <span> - {timonials.status}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="timonial-right">
                    <motion.div 
                    className="box bordered"
                    initial={{opacity:0, x:-100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{...transition, duration:2}}
                    >
                    </motion.div>
                    <motion.div 
                    className="box solid"
                    initial={{opacity:0, x:100}}
                    whileInView={{opacity:1, x:0}}
                    transition={{...transition, duration:2}}
                    >
                    </motion.div>
                    <motion.img 
                    src={timonials.image} 
                    alt="" 
                    className="timoinal-image" 
                    key={count}
                    initial={{opacity:0, x:100}}
                    animate={{opacity:1, x:0}}
                    exit= {{opacity:0, x:-100}}
                    transition={transition}
                    />
                    <div className="timonial-arrows">
                        <img src={leftArrow} alt="" onClick={leftHandle} className="timonial-left-arrow" />
                        <img src={leftArrow} alt="" onClick={rightHandle} className="timonial-right-arrow" />
                    </div>
                </div>
        </section>
    )
}

export default AboutUs