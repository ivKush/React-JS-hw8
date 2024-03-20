import React from 'react';
import { Link } from 'react-router-dom';

import '../css/style.css';

import Promo from '../components/promo/Promo';
import Product from '../components/product/Product';
import Subscribe from '../components/subscribe/Subscribe';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { product_card } from '../bd/forProductCard'
import { ProductHeading } from "../components/product/Product";
import { ProductBtn } from "../components/product/Product";


function Main() {
    return (
        <>
            <Header />
            <main class="main">
                <div class="main_img hidden_phone"></div>
                <div class="main_heading">
                    <div class="main_heading_text">
                        <h1 class="main_heading_h1">THE BRAND</h1>
                        <h2 class="main_heading_h2">OF LUXERIOUS <span class="main_selectiv">FASHION</span></h2>
                    </div>
                </div>
            </main>
            <nav class="nav_lists centering">
                <div class="nav_lists_left lists_unified">
                    <Link to="/Product">
                        <h2 class="nav_lists_text">30% OFF <span class="nav_lists_selectiv">FOR WOMEN</span></h2>
                    </Link>
                </div>
                <div class="nav_lists_center lists_unified">
                    <Link to="/Catalog">
                        <h2 class="nav_lists_text">HOT DEAL <span class="nav_lists_selectiv">FOR MEN</span></h2>
                    </Link>
                </div>
                <div class="nav_lists_rigth lists_unified">
                    <Link to="/Catalog">
                        <h2 class="nav_lists_text">NEW ARRIVALS <span class="nav_lists_selectiv">FOR KIDS</span></h2>
                    </Link>
                </div>
                <div class="nav_lists_big lists_unified">
                    <Link to="/Catalog">
                        <h2 class="nav_lists_text">LUXIROUS & TRENDY <span class="nav_lists_selectiv">ACCESORIES</span>
                        </h2>
                    </Link>
                </div>
            </nav>
            <ProductHeading />
            <Product product={product_card} />
            <ProductBtn />
            <Promo />
            <Subscribe />
            <Footer />
        </>
    );
}

export default Main;
