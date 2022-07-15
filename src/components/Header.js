import React from "react"
import avatar from "../images/avatar.png"
import {BiSearch} from "react-icons/bi"

export default function Header() {
    return (
        <header>
            <div className="search-bar">
                <BiSearch class="search-icon" size={20}/>
                <input class="search" type="search" placeholder="Search.."></input>
            </div>
            <div className="user-identification">
                <p className="username" style={{marginRight:"10px"}}>login/signup</p>
                <img class="profile-picture" src={avatar} alt="avatar" width="50" style={{borderRadius:"50px"}}></img>
            </div>
        </header>
    )
}
