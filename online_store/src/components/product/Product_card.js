import iconBasket from '../../icon/iconBasket.svg'
import { cart } from '../../bd/cart'
import { useContext } from 'react';

function Product_card(props) {

    const cardToCart = useContext(cart)

    const addCart = () => {
        cardToCart.push(props.prod);
        alert('Добавили в корзину')
        console.log(cardToCart);
    }

    return (
        <figure class="product_card">
            <div class="product_card_img">
                <img src={props.prod.url} alt="img product" />
                <button class="card-hover" type="button" onClick={addCart}>
                    <div class="card-hover-wrap">
                        <img src={iconBasket} alt="icon bascet" />
                        <h1 class="card-hover-wrap-text">Add to Cart</h1>
                    </div>
                </button>
            </div>
            <h2 class="product_card_title">{props.prod.title}</h2>
            <h3 class="product_card_text">{props.prod.text}</h3>
            <h2 class="product_card_price">$ {(props.prod.price).toFixed(2)}</h2>
        </figure>
    );
}

export default Product_card;