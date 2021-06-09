import React from "react"
import { PRODUCT_IM } from "assets/ListImages"
import { Container, Row, Col, Card } from "react-bootstrap"
import Slider from "react-slick"
import "./Style-ProductCarousel.scss"

export default function ProductCarousel() {
    const settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        centerPadding: "60px",
        speed: 500,
        slidesToShow: 3
    }
    return (
        <div className="mt-5">
            <Container>
                <Row className="product-carousel__title--wrapper">
                    <div className="title-flex product-carousel__title--inline">
                        <h2 className="title-text">Just In: Women's Apparel</h2>
                    </div>
                </Row>
            </Container>
            <Container fluid>
                <Slider {...settings}>
                    <Col>
                        <Card style={{ width: "100%" }}>
                            <Card.Img variant="top" src={PRODUCT_IM} />
                            <Card.Body>
                                <div className="product-carousel__name">
                                    <div>
                                        <h4 className="product-carousel__product-name">
                                            Nike Sportswear Femme
                                        </h4>
                                        <p className="product-carousel__product-type">
                                            Women's Dress
                                        </p>
                                    </div>
                                    <p className="product-carousel__product-price">
                                        <span className="price">
                                            1,379,000₫
                                        </span>
                                    </p>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "100%" }}>
                            <Card.Img variant="top" src={PRODUCT_IM} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "100%" }}>
                            <Card.Img variant="top" src={PRODUCT_IM} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: "100%" }}>
                            <Card.Img variant="top" src={PRODUCT_IM} />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Slider>
            </Container>
        </div>
    )
}
