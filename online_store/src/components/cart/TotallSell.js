import { useContext } from "react";
import { TotalSellContext } from "./CardsCart";

function TotallSell() {

    const totalSell = useContext(TotalSellContext)

    return (
            <div class="cart-right-total">
                <div class="cart-right-total-summ">
                    <h4 class="text_fz11px_fw400">
                        <pre>SUB TOTAL    $ {totalSell}</pre>
                    </h4>
                    <h1 class="text_fz16px_fw300">GRAND TOTAL<span class="cartPrice">&emsp;$ {totalSell}</span></h1>
                </div>
                <button class="cart-right-total-btn">
                    <p>PROCEED TO CHECKOUT</p>
                </button>
            </div>
    );
}

export default TotallSell;