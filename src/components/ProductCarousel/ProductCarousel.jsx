import React, { useState, useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import Slider from "react-slick"
import { ProductCarouselItem } from "components/index"
import PropTypes from "prop-types"
import "./Style-ProductCarousel.scss"

ProductCarousel.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array
}

ProductCarousel.defaultProps = {
    title: "",
    data: []
}

export default function ProductCarousel({ title, data }) {
    const [withDevice, setWidthDevice] = useState(window.innerWidth)
    const [dataProducts, setDataProducts] = useState()

    useEffect(() => {
        window.addEventListener("resize", () => handleResize())
    })

    useEffect(() => {
        setDataProducts(data)
    }, [data])

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
                        <h2 className="title-text">{title}</h2>
                    </div>
                </Row>
            </Container>
            <Container className="product-carousel__slide-wrapper fix-p">
                <Slider className="fix-row-15" {...settings}>
                    {dataProducts?.map(product => (
                        <ProductCarouselItem
                            key={product.productId}
                            data={product}
                        />
                    ))}
                </Slider>
            </Container>
        </div>
    )
}
