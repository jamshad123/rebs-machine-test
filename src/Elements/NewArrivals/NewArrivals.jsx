import React from 'react'
import "./NewArrivals.css"

import { AiOutlineRight } from 'react-icons/ai';
import logo2 from "../../assets/logo2.svg";
import logo3 from "../../assets/logo3.svg";
import logo4 from "../../assets/logo4.svg";
import logo5 from "../../assets/logo5.svg";
import logo6 from "../../assets/logo6.svg";
import logo7 from "../../assets/logo7.svg";

const NewArrivals = () => {
    return (
        <div className='newArrivalsContainer' >
            <div className="newArrivalsContainer__inner">
                <div className="heading">
                    <h3>Shop from <span>Top Categories</span></h3>
                    <span>View All <AiOutlineRight /> </span>
                </div>

                <div className="newArrivalsContainer__inner__cards">
                    
                    <div className="newArrivalsContainer__inner__card">
                            <img src={logo2} alt="" />
                            <h3>TILES</h3>
                    </div>
                    
                    <div className="newArrivalsContainer__inner__card">
                            <img src={logo3} alt="" />
                            <h3>PIPES</h3>

                    </div>
                    
                    <div className="newArrivalsContainer__inner__card">
                            <img src={logo4} alt="" />
                            <h4>WIRING CABLES</h4>
            
                    </div>
                    
                    <div className="newArrivalsContainer__inner__card">
                            <img src={logo5} alt="" />
                            <h3>LIGHTS</h3>
                    </div>
                    <div className="newArrivalsContainer__inner__card">
                            <img src={logo6} alt="" />
                            <h3>SWITCH BOARD</h3>
        
                    </div>
                    <div className="newArrivalsContainer__inner__card">
                            <img src={logo7} alt="" />
                            <h3>WASH BASIN</h3>
        
                    </div>
                    
                </div>

            </div>
        </div>
    )
}

export default NewArrivals