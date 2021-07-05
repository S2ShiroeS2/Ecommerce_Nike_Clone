import React, { useState, useEffect } from "react"
import { NavigationChild, Banner } from "components/index"
import data from "data/ListProductShoeMenPage.json"
import resTrend from "data/TrendData.json"
import { ProductCarousel, Trend } from "components/index"

export default function MenPage() {
    const [listProduct, setListProduct] = useState()
    const [dataTrend, setDataTrend] = useState()

    useEffect(() => {
        setListProduct(data?.shoes)
        setDataTrend(resTrend?.men)
    }, [listProduct, dataTrend])

    return (
        <div className="mt-6">
            <NavigationChild />
            <Banner />
            <ProductCarousel title="Featured Footwear" data={listProduct} />
            <Trend data={dataTrend} />
        </div>
    )
}
