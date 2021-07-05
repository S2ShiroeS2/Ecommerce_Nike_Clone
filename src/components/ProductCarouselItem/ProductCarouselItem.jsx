import React, { useState, useEffect } from "react"
import { Col, Card } from "react-bootstrap"
import PropTypes from "prop-types"
import "./Style-ProductCarouselItem.scss"

ProductCarouselItem.propTypes = {
    props: PropTypes.object
}

ProductCarouselItem.defaultProps = {
    props: {}
}

export default function ProductCarouselItem(props) {
    const [dataProduct, setDataProduct] = useState()

    useEffect(() => {
        setDataProduct(props.data)
    }, [props, dataProduct])

    return (
        <Col>
            <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={dataProduct?.imgUrl} />
                <Card.Body>
                    <div className="product-carousel-item__name">
                        <div>
                            <h4 className="product-carousel-item__product-name">
                                {dataProduct?.title}
                            </h4>
                            <p className="product-carousel-item__product-type">
                                {dataProduct?.subtitle}
                            </p>
                        </div>
                        <p className="product-carousel-item__product-price">
                            <span className="price">
                                {dataProduct?.listPrice.toLocaleString(
                                    "it-IT",
                                    { style: "currency", currency: "VND" }
                                )}
                            </span>
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}
