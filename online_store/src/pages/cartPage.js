import { Link } from 'react-router-dom';

import Header from '../components/Header'
import CardsCart from '../components/cart/CardsCart';
import DeliveryCart from '../components/cart/DeliveryCart';
// import TotallSell from '../components/cart/TotallSell';
import Subscribe from "../components/subscribe/Subscribe";
import Footer from "../components/Footer";
import { useContext, useState } from 'react';
import { cart } from '../bd/cart';


function CartPage() {

    // const cartTotal = useContext(cart)
    const [cartTotal, setCartTotal] = useState(useContext(cart))

    const [quant, setQuant] = useState()

    function clearCurrentCart(val) {
        console.log(val);
        setCartTotal(cartTotal.filter((el) => el.id !== val))
    }

    let subTotal = [];

    function total(value, product) {
        for (const i of cartTotal) {
            if (i.id === product.id) {
                let subValue = value * product.price;
                subTotal.splice(i.id - 1, 1, subValue)
            }
        }
        console.log(subTotal);
        setQuant(subTotal.reduce((a, b) => a + b))
    }

    function clearCart() {
        cartTotal.splice(0)
        setQuant(0);
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
                    {cartTotal.map(elem => <CardsCart key={elem.id} product={elem} total={total} clearCurrentCart={clearCurrentCart} />)}
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