import React from "react"
import { Container, Row } from "react-bootstrap"
import { BANNER_MEN } from "assets/ListImages"
import "./Style-Banner.scss"

export default function Banner() {
    return (
        <Container>
            <Row>
                <div className="banner__wrapper">
                    <a href="#/">
                        <img
                            className="banner__image"
                            src={BANNER_MEN}
                            alt="banner-men"
                        />
                    </a>
                </div>
            </Row>
            <Row className="banner__wrap-content">
                <div className="banner__content">
                    <p className="banner__content--title">
                        PLASTIC BOTTLES NEVER LOOKED THIS BOSS.
                    </p>
                    <p className="banner__content--sub-title">
                        The Liverpool FC 2021/22 Home Jersey. Made from 100%
                        recycled plastic bottles.
                    </p>
                    <div className="banner__wrap-btn">
                        <a className="btn-link btn-color" href="#/">
                            Shop
                        </a>
                    </div>
                </div>
            </Row>
        </Container>
    )
}
