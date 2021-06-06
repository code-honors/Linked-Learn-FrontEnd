import React from 'react'
import { NavLink } from "react-router-dom";

export default function nav() {
    return (
        <div>
            <nav >
                <ul>
                    <li><NavLink to='/course/description'>Description</NavLink></li>
                    <li ><NavLink to='/course/review'>Review</NavLink></li>
                </ul>

            </nav>
        </div>
    )
}
