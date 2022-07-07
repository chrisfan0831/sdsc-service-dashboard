import React from "react"
import MainContent from "./components/MainContent"
import NavBar from "./components/NavBar"

export default function App() {
    return (
        <div className="container">
            <NavBar />
            <MainContent />
        </div>
    )
}
