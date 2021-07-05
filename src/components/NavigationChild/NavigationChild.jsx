import React from "react"
import { useRouteMatch } from "react-router-dom"
import { Container, Nav } from "react-bootstrap"

import "./Style-NavigationChild.scss"

export default function NavigationChild() {
    const routeMatch = useRouteMatch()
    return (
        <Container className="nav-child">
            <div className="clear-flex">
                <Nav className="nav-child__wrapper">
                    <h1 className="nav-child__title">Men</h1>
                    <div className="nav-child__list-item">
                        <Nav.Item>
                            <Nav.Link href={`${routeMatch.path}/shoes`}>
                                Shoes
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href={`${routeMatch.path}/clothing`}>
                                Clothing
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href={`${routeMatch.path}/gear`}>
                                Gear
                            </Nav.Link>
                        </Nav.Item>
                    </div>
                    <div className="nav-child__block-empty">Men</div>
                </Nav>
            </div>
        </Container>
    )
}
