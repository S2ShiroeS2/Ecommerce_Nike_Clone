import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./Style-MerchMenu.scss"

export default function MerchMenu() {
    return (
        <div className="mt-5">
            <Container className="merch-menu__wrapper pt-5">
                <Row className="merch-menu__box-menu">
                    <Col>
                        <h4 className="merch-menu__title">
                            <span>Icons</span>
                        </h4>
                        <div>
                            <ul>
                                <li className="merch-menu__item">
                                    <a className="merch-menu__link" href="#/">
                                        Air Force 1
                                    </a>
                                </li>
                                <li className="merch-menu__item">
                                    <a className="merch-menu__link" href="#/">
                                        Huarache
                                    </a>
                                </li>
                                <li className="merch-menu__item">
                                    <a className="merch-menu__link" href="#/">
                                        Air Max 90
                                    </a>
                                </li>
                                <li className="merch-menu__item">
                                    <a className="merch-menu__link" href="#/">
                                        Air Max 95
                                    </a>
                                </li>
                                <div className="merch-menu__list-hidden">
                                    <li className="merch-menu__item">
                                        <a
                                            className="merch-menu__link"
                                            href="#/"
                                        >
                                            Air Max 97
                                        </a>
                                    </li>
                                    <li className="merch-menu__item">
                                        <a
                                            className="merch-menu__link"
                                            href="#/"
                                        >
                                            Air Max 270
                                        </a>
                                    </li>
                                    <li className="merch-menu__item">
                                        <a
                                            className="merch-menu__link"
                                            href="#/"
                                        >
                                            Air Max 720
                                        </a>
                                    </li>
                                    <li className="merch-menu__item">
                                        <a
                                            className="merch-menu__link"
                                            href="#/"
                                        >
                                            All Air Max
                                        </a>
                                    </li>
                                    <li className="merch-menu__item">
                                        <a
                                            className="merch-menu__link"
                                            href="#/"
                                        >
                                            Vapormax
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <h4 className="merch-menu__title">
                            <span>Shoes</span>
                        </h4>
                        <div>
                            <ul>
                                <li className="merch-menu__item">
                                    <a className="merch-menu__link" href="#/">
                                        All Shoes
                                    </a>
                                </li>
                                <li className="merch-menu__item">
                                    <a className="merch-menu__link" href="#/">
                                        Custom Shoes
                                    </a>
                                </li>
                                <li className="merch-menu__item">
                                    <a className="merch-menu__link" href="#/">
                                        Jordan Shoes
                                    </a>
                                </li>
                                <li className="merch-menu__item">
                                    <a className="merch-menu__link" href="#/">
                                        Running Shoes
                                    </a>
                                </li>
                                <div className="merch-menu__list-hidden">
                                    <li className="merch-menu__item">
                                        <a
                                            className="merch-menu__link"
                                            href="#/"
                                        >
                                            Basketball Shoes
                                        </a>
                                    </li>
                                    <li className="merch-menu__item">
                                        <a
                                            className="merch-menu__link"
                                            href="#/"
                                        >
                                            Football Shoes
                                        </a>
                                    </li>
                                    <li className="merch-menu__item">
                                        <a
                                            className="merch-menu__link"
                                            href="#/"
                                        >
                                            Gym & Training Shoes
                                        </a>
                                    </li>
                                    <li className="merch-menu__item">
                                        <a
                                            className="merch-menu__link"
                                            href="#/"
                                        >
                                            Lifestyle Shoes
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <h4 className="merch-menu__title">
                            <span>Clothing</span>
                        </h4>
                        <div>
                            <ul>
                                <li className="merch-menu__item">
                                    <a className="merch-menu__link" href="#/">
                                        All Clothing
                                    </a>
                                </li>
                                <li className="merch-menu__item">
                                    <a className="merch-menu__link" href="#/">
                                        Modest Wear
                                    </a>
                                </li>
                                <li className="merch-menu__item">
                                    <a className="merch-menu__link" href="#/">
                                        Hoodies & Pullovers
                                    </a>
                                </li>
                                <li className="merch-menu__item">
                                    <a className="merch-menu__link" href="#/">
                                        Shirts & Tops
                                    </a>
                                </li>
                                <div className="merch-menu__list-hidden">
                                    <li className="merch-menu__item">
                                        <a
                                            className="merch-menu__link"
                                            href="#/"
                                        >
                                            Jackets
                                        </a>
                                    </li>
                                    <li className="merch-menu__item">
                                        <a
                                            className="merch-menu__link"
                                            href="#/"
                                        >
                                            Compression & Nike Pro
                                        </a>
                                    </li>
                                    <li className="merch-menu__item">
                                        <a
                                            className="merch-menu__link"
                                            href="#/"
                                        >
                                            Trousers & Leggings
                                        </a>
                                    </li>
                                    <li className="merch-menu__item">
                                        <a
                                            className="merch-menu__link"
                                            href="#/"
                                        >
                                            Shorts
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <h4 className="merch-menu__title">
                            <span>Kids'</span>
                        </h4>
                        <div>
                            <ul>
                                <li className="merch-menu__item">
                                    <a className="merch-menu__link" href="#/">
                                        Infant & Toddler Shoes
                                    </a>
                                </li>
                                <li className="merch-menu__item">
                                    <a className="merch-menu__link" href="#/">
                                        Kids' Shoes
                                    </a>
                                </li>
                                <li className="merch-menu__item">
                                    <a className="merch-menu__link" href="#/">
                                        Kids' Jordan Shoes
                                    </a>
                                </li>
                                <li className="merch-menu__item">
                                    <a className="merch-menu__link" href="#/">
                                        Kids' Basketball Shoes
                                    </a>
                                </li>
                                <div className="merch-menu__list-hidden">
                                    <li className="merch-menu__item">
                                        <a
                                            className="merch-menu__link"
                                            href="#/"
                                        >
                                            Kids' Running Shoes
                                        </a>
                                    </li>
                                    <li className="merch-menu__item">
                                        <a
                                            className="merch-menu__link"
                                            href="#/"
                                        >
                                            Kids' Clothing
                                        </a>
                                    </li>
                                    <li className="merch-menu__item">
                                        <a
                                            className="merch-menu__link"
                                            href="#/"
                                        >
                                            Kids' Backpacks
                                        </a>
                                    </li>
                                    <li className="merch-menu__item">
                                        <a
                                            className="merch-menu__link"
                                            href="#/"
                                        >
                                            Kids' Socks
                                        </a>
                                    </li>
                                </div>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
