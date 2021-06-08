import React from "react"
import { Container, Row } from "react-bootstrap"
import { FEATURE } from "assets/ListImages"
import "./Style-Feature.scss"

export default function Feature() {
    return (
        <Container className="mt-5">
            <Row>
                <div className="feature__title--wrapper">
                    <div className="feature__title--inline title-flex">
                        <h2 className="title-text">Featured</h2>
                    </div>
                </div>
            </Row>
            <Row className="feature__image-pos">
                <div className="feature__wrapper">
                    <img
                        className="feature__wrapper--image"
                        src={FEATURE}
                        alt="feature"
                    />
                </div>
                <div className="feature__block-text">
                    <div className="feature__block-text--content">
                        <p className="feature__block-text--label">
                            Nike Basketball
                        </p>
                        <p className="feature__block-text--caption">
                            OWN THE COURT
                        </p>
                        <div className="feature__btn-wrap">
                            <a href="#/" className="btn-link">
                                Shop
                            </a>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    )
}
