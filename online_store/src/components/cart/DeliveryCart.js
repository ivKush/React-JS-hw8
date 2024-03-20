

function DeliveryCart() {
    return (
        <form class="cart-right-delivery">
            <p>SHIPPING ADRESS</p>
            <input placeholder="Bangladesh" type="text" />
            <input placeholder="State" type="text" />
            <input placeholder="Postcode / Zip" type="text" />
            <button class="cart-right-delivery-btn">
                <p>GET A QUOTE</p>
            </button>
        </form>
    );
}

export default DeliveryCart;