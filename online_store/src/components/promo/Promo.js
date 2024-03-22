import { promo } from "../../bd/promo";
import Promo_box from './Promo_box';

function Promo() {
    
    return (
        <section class="promo centering">
            {promo.map(elem => <Promo_box key={elem.id} img={elem.urlIcon} title={elem.title} text={elem.text} />)}
        </section>
    );
}

export default Promo;