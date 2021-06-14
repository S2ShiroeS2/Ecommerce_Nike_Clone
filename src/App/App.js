import React from "react"
import { Header } from "layouts/index"
import HomePage from "pages/Home/HomePage"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
    return (
        <div className="App">
            <Header />
            <HomePage />
        </div>
    )
}

export default App
