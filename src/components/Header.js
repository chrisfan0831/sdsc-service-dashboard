import React from "react"
import avatar from "../images/avatar.png"
// import {IoSearchOutline} from "react-icons/io5"

export default function Header() {
    return (
        <header>
            <div className="search-bar">
                {/* <img src={IoSearchOutline} alt="search-icon" /> */}
                <input type="search" placeholder="Search.."></input>
            </div>
            <div className="user-identification">
                <p className="username" style={{marginRight:"10px"}}>login/signup</p>
                <img src={avatar} alt="avatar" width="50" style={{borderRadius:"50px"}}></img>
            </div>
        </header>
    )
}
