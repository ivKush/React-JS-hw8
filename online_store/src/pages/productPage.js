import React from 'react';

import Header from "../components/Header";
import PageHeading from "../components/PageHeading";
import Product from "../components/product/Product";
import Subscribe from "../components/subscribe/Subscribe";
import Footer from "../components/Footer";

function Product_page() {
    return (
        <>
            <Header />
            <PageHeading />
            <section class="carusel centering">
                <a class="carusel_item"><i class="fa fa-solid fa-chevron-left fa-xl"></i></a>
                <img src="img/pageProduct.png" alt="product" class="carusel_item_img_product" />
                <a class="carusel_item"><i class="fa fa-solid fa-chevron-right fa-xl"></i></a>
            </section>
            <section class="offer centering">
                <article class="currentProduct">
                    <h3 class="currentProduct-title">WOMEN COLLECTION</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" width="63" height="4" viewBox="0 0 63 4" fill="none">
                        <path d="M63 0.786865H0V3.81225H63V0.786865Z" fill="#EF5B70" />
                    </svg>
                    <h1 class="currentProduct-name">MOSCHINO CHEAP AND CHIC</h1>
                    <h4 class="currentProduct-text">Compellingly actualize fully researched processes before proactive
                        outsourcing. Progressively syndicate collaborative architectures before cutting-edge services.
                        Completely visualize parallel core competencies rather than exceptional portals. </h4>
                    <h1 class="currentProduct-price">$561</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="642" height="1" viewBox="0 0 642 1" fill="none">
                        <path d="M0.5 0.498291H641.5H0.5Z" stroke="#EAEAEA" stroke-linejoin="round" />
                    </svg>
                    <div class="currentProduct-option">
                        <a class="currentProduct-option-color">CHOOSE COLOR <span><img class="chevronDown"
                            src="icon/chevronDown.svg" alt="chevron Down" /></span></a>
                        <a class="currentProduct-option-color">CHOOSE SIZE <span><img class="chevronDown"
                            src="icon/chevronDown.svg" alt="chevron Down" /></span></a>
                        <a class="currentProduct-option-color">QUANTITY <span><img class="chevronDown"
                            src="icon/chevronDown.svg" alt="chevron Down" /></span></a>
                    </div>
                    <button class="currentProduct-button"><img class="currentProduct-button-img" src="icon/bascketPink.svg" alt="icon bascketPink" />Add to Cart</button>
                </article>
            </section>
            <Product />
            <Subscribe />
            <Footer />
        </>
    );
}

export default Product_page;