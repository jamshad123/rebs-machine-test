import React from 'react'
import "./Category.css"

import { AiOutlineRight } from 'react-icons/ai';
import logo8 from "../../assets/logo8.svg";
import logo9 from "../../assets/logo9.svg";
import logo10 from "../../assets/logo10.svg";
import logo11 from "../../assets/logo11.svg";

const Category = () => {
    return (
        <div className='categoryContainer' >

            <div className="heading">
                <h3>Most Popular</h3>
                <span>View all <AiOutlineRight /> </span>
            </div>

            <div className="category__cards">
                <div className="category__card">
                    <img src={logo8} alt="" />
                    <h4>Wires</h4>
                </div>
                <div className="category__card">
                    <img src={logo9} alt="" />
                    <h4>Zion light</h4>
                </div>
                <div className="category__card">
                    <img src={logo10} alt="" />
                    <h4>T - Pipes</h4>
                </div>
                <div className="category__card">
                    <img src={logo11} alt="" />
                    <h4>Woodland Teak Plus</h4>
                </div>
            </div>

        </div>
    )
}

export default Category