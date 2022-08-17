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
        <section className="part-cont" id='explore'>
            <div className="ex-head-cont">
                <span className="normal-title transparent-title italic">explore our</span>
                <span className="normal-title italic">programs</span>
                <span className="normal-title transparent-title italic">to shape you</span>
            </div>
            <div className="cards-container">
                {programCards}
            </div>
        </section>
    )
}
export default Explore