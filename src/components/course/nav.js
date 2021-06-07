import React from 'react'
import { NavLink } from "react-router-dom";
import './description.scss';


export default function nav() {
    return (
        <div className='navClass'>
            <nav  >
                <ul>
                    <li ><NavLink to='/course/description'>Description</NavLink></li>
                    <li ><NavLink to='/course/review'>Review</NavLink></li>
                </ul>

            </nav>
        </div>
    )
}
