import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { TREND_0, TREND_1 } from "assets/ListImages"
import PropTypes from "prop-types"
import "./Style-Trend.scss"

Trend.propTypes = {
    data: PropTypes.array
}

Trend.defaultProps = {
    data: []
}

export default function Trend(props) {
    const { data } = props
    return (
        <Container className="mt-5 trend">
            <div className="trend__title--wrapper">
                <div className="trend__title--inline title-flex">
                    <h2 className="title-text">Trending</h2>
                </div>
            </div>
            <Row className="flex-mobile">
                {data.map(item => (
                    <Col key={item.cardID} className="trend__card">
                        <div className="trend__wrapper">
                            <div className="trend__link">
                                <img
                                    className="trend__image b-r-1"
                                    src={item.imageUrl}
                                    alt="trend-00"
                                />
                            </div>
                            <div className="trend__block-text">
                                <p className="trend__caption">{item.text}</p>
                                <div className="trend__btn--wrapper">
                                    <a className="btn-link" href="#/">
                                        Shop
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}
