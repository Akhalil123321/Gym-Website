
import React from "react";
import leftArrow from '../../images/leftArrow.png'
import testimonialsData from '../../data/testimonialsData'
import './aboutus.css'
const AboutUs = () => {
    const resetAnimation =() => {
        document.getElementById('timonial-bordered').classList.remove('animation1')
        setTimeout(()=>{document.getElementById('timonial-bordered').classList.add('animation1')},1)
        document.getElementById('timonial-solid').classList.remove('animation2')
        setTimeout(()=>{document.getElementById('timonial-solid').classList.add('animation2')},1)
        document.getElementById('timoinal-image').classList.remove('animation3')
        setTimeout(()=>{document.getElementById('timoinal-image').classList.add('animation3')},1)
        document.getElementById('timonial-review').classList.remove('animation4')
        setTimeout(()=>{document.getElementById('timonial-review').classList.add('animation4')},1)
    }
    const [count,setCount] = React.useState(0)
    let timonials = testimonialsData[count]
    const rightHandle=() => {
        setCount(prevCount => prevCount + 1)
        if(count >= 2){
            setCount(prevCount => prevCount = 0)
        }
        resetAnimation()
    }    
    const leftHandle=() => {
        setCount(prevCount => prevCount - 1)
        if(count <= 0){
            setCount(prevCount => prevCount = 2)
        }
        resetAnimation()
    }
    return(
        <section className="testimonials-cont">
            <div className="right-all">
                <div className="testimonials">testimonials</div>
                <div className='aboutus-title-cont'>
                    <span className='normal-title transparent-title' >what they</span>
                    <span className="normal-title">say about us</span>
                </div>
                <div className="test-timonials">
                    <div className="timonial-left">
                        <div id="timonial-review" className="timonial-review animation4">{timonials.review}</div>
                        <div className="timonial-name-status">
                            <span>{timonials.name}</span>
                            <span> - {timonials.status}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="timonial-right">
                    <div id="timonial-bordered" className="box bordered animation1"></div>
                    <div id="timonial-solid" className="box solid animation2"></div>
                    <img src={timonials.image} alt="" id="timoinal-image" className="timoinal-image animation3" />
                    <div className="timonial-arrows">
                        <img src={leftArrow} alt="" onClick={leftHandle} className="timonial-left-arrow" />
                        <img src={leftArrow} alt="" onClick={rightHandle} className="timonial-right-arrow" />
                    </div>
                </div>
        </section>
    )
}

export default AboutUs