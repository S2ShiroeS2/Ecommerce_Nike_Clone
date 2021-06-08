import React from "react"
import { Header } from "layouts/index"
import { SlideBanner } from "components/index"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
    return (
        <div className="App">
            <Header />
            <SlideBanner />
        </div>
    )
}

export default App
