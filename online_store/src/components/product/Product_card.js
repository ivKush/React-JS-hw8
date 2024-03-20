import iconBasket from '../../icon/iconBasket.svg'
import { cart } from '../../bd/cart'
import { useContext } from 'react';

function Product_card(props) {

    const cardToCart = useContext(cart)

    const addCart = () => {
        cardToCart.push(props);
    }

    return (
        <figure class="product_card">
            <div class="product_card_img">
                <img src={props.url} alt="img product" />
                <button class="card-hover" type="button" onClick={addCart}>
                    <div class="card-hover-wrap">
                        <img src={iconBasket} alt="icon bascet" />
                        <h1 class="card-hover-wrap-text">Add to Cart</h1>
                    </div>
                </button>
            </div>
            <h2 class="product_card_title">{props.title}</h2>
            <h3 class="product_card_text">{props.text}</h3>
            <h2 class="product_card_price">{props.price}</h2>
        </figure>
    );
}

export default Product_card;