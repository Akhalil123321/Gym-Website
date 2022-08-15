import React from "react";
import whiteTick from '../../images/whiteTick.png'
import rightArrow from '../../images/rightArrow.png'
import plansData from '../../data/plansData'
import './plans.css'
const Plans = () => {
    const plans = plansData.map(items =>{
        return(
            <section className="plan-one">
                {items.icon}
                <h4>{items.name}</h4>
                <h1 className="planes-price">$ {items.price}</h1>
                <div className="plan-list-cont">
                    <div className="plan-list">
                        <img src={whiteTick} alt="" />
                        <span>{items.features[0]}</span>
                    </div>
                    <div className="plan-list">
                        <img src={whiteTick} alt="" />
                        <span>{items.features[1]}</span>
                    </div>
                    <div className="plan-list">
                        <img src={whiteTick} alt="" />
                        <span>{items.features[2]}</span>
                    </div>
                </div>
                <div className="plan-penifits">
                    <span>See more benefits</span>
                    <img src={rightArrow} alt="" />
                </div>
                <button className="btn l-btn full">Join now</button>
            </section>
            
        )
    })

    return(
        <div>
            <div className="plans-head-cont">
                <span className="normal-title transparent-title small italic">ready to start</span>
                <span className="normal-title small italic">your journey</span>
                <span className="normal-title transparent-title small italic">now with us</span>
            </div>
            <div className="plan-cards-cont">
                {plans}
            </div>
        </div>
    )
}
export default Plans