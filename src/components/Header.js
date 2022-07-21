import React from "react"
import avatar from "../resources/avatar.png"
import {BiSearch} from "react-icons/bi"
import "styles/header.css"

export default function Header() {

    const [menu, setMenu] = React.useState("false")
    function profileClick() {
        if(menu == "false") {
            setMenu("true")
        }
        else{
            setMenu("false")
        }
        console.log(menu)
    }

    if(menu == "true") {
        return (
            <header>
                <div className="search-bar">
                    <BiSearch class="search-icon" size={20}/>
                    <input class="search" type="search" placeholder="Search.."></input>
                </div>
                <div className="profile">
                    <div className="profile-brief">
                        <p className="username" style={{marginRight:"10px"}}>login/signup</p>
                        <img onClick={profileClick} class="profile-picture" src={avatar} alt="avatar" width="50" style={{border:"solid black 2px"}}></img>
                    </div>
                    {profileClick}
                    <div className="profile-menu">
                        <p>team-perry@sdsc.com</p>
                        <p className="menu-choice">Edit Profile</p>
                        <p className="menu-choice">Switch Account</p>
                        <p className="menu-choice">Log Out</p>
                    </div>
                </div>
            </header>
        )
    }
    else {
        return (
            <header>
                <div className="search-bar">
                    <BiSearch class="search-icon" size={20}/>
                    <input class="search" type="search" placeholder="Search.."></input>
                </div>
                <div className="profile">
                    <div className="profile-brief">
                        <p className="username" style={{marginRight:"10px"}}>login/signup</p>
                        <img onClick={profileClick} class="profile-picture" src={avatar} alt="avatar" width="50"></img>
                    </div>
                </div>
            </header>
        )
    }
    
}
