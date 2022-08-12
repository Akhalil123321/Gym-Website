import React from "react";
import arrow from '../../images/rightArrow.png'
import programsData from '../../data/programsData'
import './explore.css'
const Explore = () => {
    const programCards = programsData.map(items => {
        console.log(items);
        return(
            <div className="card-one">
                <div>{items.image}</div>
                <span className="ex-header">{items.heading}</span>
                <span className="ex-detailes">{items.details}</span>
                <div className="join-now">
                    <span>Join Now</span>
                    <img src={arrow} alt="" className="ex-arrow"/>
                </div>
            </div>
        )
    })
    return(
        <div>
            <div className="ex-head-cont">
                <span className="normal-span transparent-text ">explore our</span>
                <span className="normal-span ">programs</span>
                <span className="normal-span transparent-text ">to shape you</span>
            </div>
            <div className="cards-container">
                {programCards}
            </div>
        </div>
    )
}
export default Explore