import React, { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import Slider from "react-slick"
import { ProductCarouselItem } from "components/index"
import "./Style-ProductCarousel.scss"

export default function ProductCarousel(props) {
    const [withDevice, setWidthDevice] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize", () => handleResize())
    })

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:
            withDevice <= 576
                ? 1
                : withDevice > 576 && withDevice <= 768
                ? 2
                : 3,
        slidesToScroll: 1
    }

    const handleResize = () => {
        setWidthDevice(window.innerWidth)
    }
    return (
        <div className="mt-5">
            <Container className="pt-5">
                <Row className="product-carousel__title--wrapper">
                    <div className="title-flex product-carousel__title--inline">
                        <h2 className="title-text">{props.title}</h2>
                    </div>
                </Row>
            </Container>
            <Container className="product-carousel__slide-wrapper fix-p">
                <Slider className="fix-row-15" {...settings}>
                    <ProductCarouselItem />
                    <ProductCarouselItem />
                    <ProductCarouselItem />
                    <ProductCarouselItem />
                    <ProductCarouselItem />
                    <ProductCarouselItem />
                    <ProductCarouselItem />
                    <ProductCarouselItem />
                    <ProductCarouselItem />
                    <ProductCarouselItem />
                </Slider>
            </Container>
        </div>
    )
}
