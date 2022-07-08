import React from "react"
import sdsdLogo from "../images/sdsc-logo-red.jpeg"
import avatar from "../images/avatar.png"

export default function TopBar() {
    return (
        <nav>
            <div className="nav-left">
                <img src={sdsdLogo} height="50" />
                <ul className="nav-features-left">
                    <li>Dashboard</li>
                    <li>My Service</li>
                    <li>Explore</li>
                    <li>Contact</li>
                </ul>
                <input type="text" placeholder="Search.."></input>
            </div>
            <div className="nav-right">
                <p className="admin">Administration</p>
                <img src={avatar} width="60" ></img>
            </div>
        </nav>
    )
}
