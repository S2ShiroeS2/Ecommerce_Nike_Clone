import React from "react"
import { Container, Row, Nav } from "react-bootstrap"
import "./Style-NavigationChild.scss"

export default function NavigationChild() {
    return (
        <Container className="nav-child">
            <div className="clear-flex">
                <Nav className="nav-child__wrapper">
                    <h1 className="nav-child__title">Men</h1>
                    <div className="nav-child__list-item">
                        <Nav.Item>
                            <Nav.Link href="/shoes">Shoes</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/clothing">Clothing</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/gear">Gear</Nav.Link>
                        </Nav.Item>
                    </div>
                    <div className="nav-child__block-empty">Men</div>
                </Nav>
            </div>
        </Container>
    )
}
