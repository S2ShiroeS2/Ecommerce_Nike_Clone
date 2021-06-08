import React from "react"
import { Header } from "layouts/index"
import { SlideBanner, Trend } from "components/index"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
    return (
        <div className="App">
            <Header />
            <SlideBanner />
            <Trend />
        </div>
    )
}

export default App
