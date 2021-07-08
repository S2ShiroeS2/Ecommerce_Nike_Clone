import React from "react"
import { MEN_LATEST } from "assets/ListVideo"
import { Container, Row } from "react-bootstrap"
import "./Style-TheLatest.scss"

export default function TheLatest() {
    return (
        <Container className="mt-5">
            <Row className="fix-m-l">
                <div className="latest__title--wrapper">
                    <div className="latest__title--inline title-flex">
                        <h2 className="title-text">latestd</h2>
                    </div>
                </div>
            </Row>
            <Row className="latest__image-pos fix-m-l fix-m-r">
                <div className="latest__wrapper">
                    <video
                        className="latest__wrapper--video"
                        muted="muted"
                        preload
                        loop
                        autoPlay
                    >
                        <source src={MEN_LATEST} type="video/mp4" />
                    </video>
                </div>
                <div className="latest__block-text">
                    <div className="latest__block-text--content">
                        <p className="latest__block-text--label">
                            Nike LookBook
                        </p>
                        <p className="latest__block-text--caption">
                            SKY'S THE LIMIT
                        </p>
                        <p className="latest__block-text--label">
                            Advanced performance and off-court comfort inspired
                            by the elements.
                        </p>
                        <div className="latest__btn-wrap">
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
