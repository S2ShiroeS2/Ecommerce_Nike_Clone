import React from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
import { MEN, WOMEN, KID } from "assets/ListImages"
import "./Style-MoreShoes.scss"

export default function MoreShoes() {
    return (
        <div className="mt-5">
            <Container className="pt-5">
                <Row className="more-shoes__title--wrapper">
                    <div className="title-flex more-shoes__title--inline">
                        <h2 className="title-text">More Shoes</h2>
                    </div>
                </Row>
                <Row className="fix-row-30 flex-m">
                    <Col className="more-shoes__item">
                        <Card>
                            <Card.Img variant="top" src={MEN} />
                            <div className="more-shoes__wrapper">
                                <div className="more-shoes__btn-wrapper">
                                    <a className="btn-link" href="#/">
                                        Men's
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col className="more-shoes__item">
                        <Card>
                            <Card.Img variant="top" src={WOMEN} />
                            <div className="more-shoes__wrapper">
                                <div className="more-shoes__btn-wrapper">
                                    <a className="btn-link" href="#/">
                                        Women's
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col className="more-shoes__item">
                        <Card>
                            <Card.Img variant="top" src={KID} />
                            <div className="more-shoes__wrapper">
                                <div className="more-shoes__btn-wrapper">
                                    <a className="btn-link" href="#/">
                                        Kid's
                                    </a>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
