import React from "react"
import sdsdLogo from "/Users/chrisfan/Documents/Projects/sdsc-sde/src/images/sdsc-logo-red.jpeg"
import avatar from "/Users/chrisfan/Documents/Projects/sdsc-sde/src/images/avatar.png"

export default function NavBar() {
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
