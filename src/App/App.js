import React from "react"
import { BrowserRouter } from "react-router-dom"
import LayoutWrapper from "layouts/LayoutWrapper"
import RouteWrapper from "routes/RouteWrapper"
import { HomePage, MenPage } from "pages/index"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function App() {
    return (
        <BrowserRouter>
            <RouteWrapper
                exact
                path="/"
                component={HomePage}
                layout={LayoutWrapper}
            />
            <RouteWrapper
                path="/men"
                component={MenPage}
                layout={LayoutWrapper}
            />
        </BrowserRouter>
    )
}

export default App
