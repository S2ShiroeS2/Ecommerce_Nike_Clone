import React, { useState, useEffect } from "react"
import { NavigationChild, Banner } from "components/index"
import data from "data/ListProductShoeMenPage.json"
import { ProductCarousel } from "components/index"

export default function MenPage() {
    const [listProduct, setListProduct] = useState()

    useEffect(() => {
        setListProduct(data?.shoes)
    }, [listProduct])

    return (
        <div className="mt-6">
            <NavigationChild />
            <Banner />
            <ProductCarousel title="Featured Footwear" data={listProduct} />
        </div>
    )
}
