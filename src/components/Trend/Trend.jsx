import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { TREND_0, TREND_1 } from "assets/ListImages"
import "./Style-Trend.scss"

export default function Trend() {
    return (
        <Container className="mt-5 trend">
            <div className="trend__title--wrapper">
                <div className="trend__title--inline title-flex">
                    <h2 className="title-text">Trending</h2>
                </div>
            </div>
            <Row className="flex-mobile">
                <Col className="pl-0 trend__card">
                    <div className="trend__wrapper">
                        <div className="trend__link">
                            <img
                                className="trend__image b-r-1"
                                src={TREND_0}
                                alt="trend-00"
                            />
                        </div>
                        <div className="trend__block-text">
                            <p className="trend__caption">
                                Liverpool FC 2021/22 Home Jersey
                            </p>
                            <div className="trend__btn--wrapper">
                                <a className="btn-link" href="#/">
                                    Shop
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="pr-0 trend__card">
                    <div className="trend__wrapper">
                        <div className="trend__link">
                            <img
                                className="trend__image b-r-1"
                                src={TREND_1}
                                alt="trend-00"
                            />
                        </div>
                        <div className="trend__block-text">
                            <p className="trend__caption">
                                Nike Football Impulse Pack
                            </p>
                            <div className="trend__btn--wrapper">
                                <a className="btn-link" href="#/">
                                    Shop
                                </a>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
