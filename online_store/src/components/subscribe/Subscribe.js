
import Feedback from './feedback';


function Subscribe() {
    return (
        <section class="subscribeBackground">
            <section class="subscribe centering">
                <Feedback />
                <div class="subscribe_right">
                    <h1 class="subscribe_title"><span class="subscribe_big">
                        SUBSCRIBE
                    </span>
                        FOR OUR NEWLETTER AND PROMOTION</h1>
                    <form action="#" class="subscribe_forma">
                        <input placeholder="Enter Your Email" type="email" class="subscribe_forma_infield" />
                        <button class="subscribe_forma_text">Subscribe</button>
                    </form>
                </div>
            </section>
        </section>
    );
}

export default Subscribe;