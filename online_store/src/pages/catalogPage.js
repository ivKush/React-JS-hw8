import React from 'react';

import Footer from "../components/Footer";
import Header from "../components/Header";
import Product from "../components/product/Product";
import Promo from "../components/promo/Promo";
import Subscribe from "../components/subscribe/Subscribe";
import {productCatalog} from '../bd/forCatalog'
import PageHeading from "../components/PageHeading";
import Filter from "../components/Filter";


function Catalog() {
    return (
        <>
            <Header />
            <PageHeading />
            <Filter />
            <Product product={productCatalog} />
            <Promo />
            <Subscribe />
            <Footer />
        </>
    );
}

export default Catalog;