import React from "react"
import { Header, Footer } from "./index"

export default function LayoutWrapper(props) {
    return (
        <>
            <Header />
            {props.children}
            <Footer />
        </>
    )
}
