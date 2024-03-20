import { Link } from 'react-router-dom';

import Header from '../components/Header'
import CardsCart from '../components/cart/CardsCart';
import DeliveryCart from '../components/cart/DeliveryCart';
// import TotallSell from '../components/cart/TotallSell';
import Subscribe from "../components/subscribe/Subscribe";
import Footer from "../components/Footer";
import { cart } from '../bd/cart';
import { useState } from 'react';


function CartPage() {

    const [cartCurrent, setCartCurrent] = useState(cart)

    // function clearCurrentCart() {
    //     cart.splice(0, 1)
    // }

    function clearCart() {
        setCartCurrent(cart.splice(0))
    }
    
    const [quant, setQuant] = useState()
    const [quant2, setQuant2] = useState()
    
    function total(elem) {
        // const subTotal = [];
        // subTotal.push(elem);
        // console.log(subTotal);
        // setQuant(subTotal.map(el => setQuant(el)));
        setQuant(elem)
    }

    return (
        <>
            <Header />
            <section class="cart-heading centering">
                <div class="cart-heading-text">
                    <h1>SHOPPING CART</h1>
                </div>
            </section>
            <section class="cart centering">
                <div class="cart-left ">
                    {cartCurrent.map(elem => <CardsCart product={elem} total={total} />)}
                    <div class="cart-left-buttons">
                        <button onClick={clearCart} class="cart-left-buttons-btn">
                            <p>CLEAR SHOPPING CART</p>
                        </button>
                        <Link to='/Catalog' class="cart-left-buttons-btn">
                            <p>CONTINUE SHOPPING</p>
                        </Link>
                    </div>
                </div>
                <div class="cart-right">
                    <DeliveryCart />
                    {/* <TotallSell /> */}
                    <div class="cart-right-total">
                        <div class="cart-right-total-summ">
                            <h4 class="text_fz11px_fw400">
                                <pre>SUB TOTAL    $ {quant}</pre>
                            </h4>
                            <h1 class="text_fz16px_fw300">GRAND TOTAL<span class="cartPrice">&emsp;$ {quant}</span></h1>
                        </div>
                        <button class="cart-right-total-btn">
                            <p>PROCEED TO CHECKOUT</p>
                        </button>
                    </div>
                </div>
            </section>
            <Subscribe />
            <Footer />
        </>
    );
}

export default CartPage;