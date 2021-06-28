import React, { useState } from "react"
import { Container, Row } from "react-bootstrap"
import "./Style-MerchMenu.scss"
import data from "data/MerchMenuData.json"
import { MerchMenuItem } from "components/index"

export default function MerchMenu() {
    const [dataMenu] = useState(data.MerchData)

    return (
        <div className="mt-5">
            <Container className="merch-menu__wrapper pt-5">
                <Row className="merch-menu__box-menu">
                    {dataMenu.map(data => (
                        <MerchMenuItem key={data.id} dataItem={data} />
                    ))}
                </Row>
            </Container>
        </div>
    )
}
