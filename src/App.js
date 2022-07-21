import React from "react"
import SideNavbar from "./components/SideNavbar"
import Header from "./components/Header"
import "App.css"

export default function App() {

    return (
        <div className="container">
            <SideNavbar/>
            <Header />
        </div>
    )
}
