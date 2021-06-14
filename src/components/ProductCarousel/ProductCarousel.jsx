import React from "react"
import { Container, Row } from "react-bootstrap"
import Slider from "react-slick"
import { ProductCarouselItem } from "components/index"
import "./Style-ProductCarousel.scss"

export default function ProductCarousel(props) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
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
            <Container className="pl-0 pr-0">
                <Slider {...settings}>
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
