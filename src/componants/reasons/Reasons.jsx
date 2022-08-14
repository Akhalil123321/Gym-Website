import React from "react";
import image1 from '../../images/image1.png'
import image2 from '../../images/image2.png'
import image3 from '../../images/image3.png'
import image4 from '../../images/image4.png'
import tick from '../../images/tick.png'
import nb from '../../images/nb.png'
import nike from '../../images/nike.png'
import adidas from '../../images/adidas.png'

import './reasons.css'
const Reasons = () => {
    return(
        <div>
            <div className="pack-cont">
                <div className="colection-cont">
                    <img src={image1} alt="" className="collect-pack1"/>
                    <div className="collect-pack2">
                        <img src={image2} alt="" className="collect-pack2-1"/>
                        <div className="collect-pack2-2">
                            <img src={image3} alt="" className="collect-pack2-2-1"/>
                            <img src={image4} alt="" className="collect-pack2-2-2"/>
                        </div>
                    </div>
                </div>
                <div className="reasons-cont">
                    <span className="some-reasons">some reasons</span>
                    <div>
                        <span className="normal-title transparent-title italic">why</span>
                        <span className="normal-title italic"> choose us?</span>
                    </div>
                    <div className="reason-list-cont">
                        <div className="reason-list">
                            <img src={tick} alt=""/>
                            <span>over 140+ expert coachs</span>
                        </div>
                        <div className="reason-list">
                            <img src={tick} alt=""/>
                            <span>train smarter and faster than before</span>
                        </div>
                        <div className="reason-list">
                            <img src={tick} alt=""/>
                            <span>1 free program for new member</span>
                        </div>
                        <div className="reason-list">
                            <img src={tick} alt=""/>
                            <span>reliable partners</span>
                        </div>
                    </div>
                    <span className="parteners">our partners</span>
                    <div className="logos-cont">
                        <img src={nb} alt="" />
                        <img src={adidas} alt="" />
                        <img src={nike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Reasons