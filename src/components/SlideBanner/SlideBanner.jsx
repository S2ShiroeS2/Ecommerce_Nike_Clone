import React from "react"
import { Container, Row, Carousel } from "react-bootstrap"
import { BANNER_0, BANNER_1, BANNER_2, BANNER_3 } from "assets/ListImages"
import "./Style-SlideBanner.scss"

export default function SlideBanner() {
    return (
        <Container className="mt-10">
            <Row className="reset-margin">
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={BANNER_0}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={2000}>
                        <img
                            className="d-block w-100"
                            src={BANNER_1}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={BANNER_2}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={BANNER_3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </Row>
        </Container>
    )
}
