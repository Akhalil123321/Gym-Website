import React from "react";
import './plans.css'
const Plans = () => {
    return(
        <div>
            <div className="plans-head-cont">
                <span className="normal-title transparent-title small italic">ready to start</span>
                <span className="normal-title small italic">your journey</span>
                <span className="normal-title transparent-title small italic">now with us</span>
            </div>
            <div className="plan-cards-cont">
                <div className="gray-card"></div>
                <div className="orange-card"></div>
                <div className="gray-card"></div>
            </div>
        </div>
    )
}
export default Plans