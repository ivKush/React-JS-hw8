
import { Link } from 'react-router-dom';
import Product_card from './Product_card';

function Product(props) {
    return (
        <>
            <section class="product centering">
                {props.product.map(prod => <Product_card url={prod.url} title={prod.title} text={prod.text} price={prod.price} />)}
            </section>
        </>
    );
}

export default Product;

export function ProductHeading() {
    return (
        <div class="product_heding">
            <h1 class="product_heding_h1">Fetured Items</h1>
            <h4 class="product_heding_text">Shop for items based on what we featured in this week</h4>
        </div>
    );
}

export function ProductBtn() {
    return (
        <section class="product_btn centering">
            <Link to='/Catalog' class="product_btn_button">
                Browse All Product
            </Link>
        </section>
    )
}


