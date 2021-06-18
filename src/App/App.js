import React from "react"
import { Header, Footer } from "layouts/index"
import HomePage from "pages/Home/HomePage"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
    return (
        <div className="App">
            <Header />
            <HomePage />
            <Footer />
        </div>
    )
}

export default App
