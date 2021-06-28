import React from "react"
import PropTypes from "prop-types"
import { Col } from "react-bootstrap"

MerchMenuItem.propTypes = {
    dataItem: PropTypes.object
}

MerchMenuItem.defaultProps = {
    dataItem: {}
}

export default function MerchMenuItem({ dataItem }) {
    return (
        <Col>
            <h4 className="merch-menu__title">
                <span>{dataItem.title}</span>
            </h4>
            <div>
                <ul>
                    {dataItem.sub.show.map(item => (
                        <li key={item.id} className="merch-menu__item">
                            <a className="merch-menu__link" href={item.href}>
                                {item.displayName}
                            </a>
                        </li>
                    ))}
                    <div className="merch-menu__list-hidden">
                        {dataItem.sub.hidden.map(item => (
                            <li key={item.id} className="merch-menu__item">
                                <a
                                    className="merch-menu__link"
                                    href={item.href}
                                >
                                    {item.displayName}
                                </a>
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        </Col>
    )
}
