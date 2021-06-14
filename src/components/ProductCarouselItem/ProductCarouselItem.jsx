import React from "react"
import { Col, Card } from "react-bootstrap"
import { PRODUCT_IM } from "assets/ListImages"
import "./Style-ProductCarouselItem.scss"

export default function ProductCarouselItem() {
    return (
        <Col>
            <Card style={{ width: "100%" }}>
                <Card.Img variant="top" src={PRODUCT_IM} />
                <Card.Body>
                    <div className="product-carousel-item__name">
                        <div>
                            <h4 className="product-carousel-item__product-name">
                                Nike Sportswear Femme
                            </h4>
                            <p className="product-carousel-item__product-type">
                                Women's Dress
                            </p>
                        </div>
                        <p className="product-carousel-item__product-price">
                            <span className="price">1,379,000₫</span>
                        </p>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}
