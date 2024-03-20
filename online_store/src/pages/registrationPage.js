import Header from '../components/Header'
import Subscribe from "../components/subscribe/Subscribe";
import Footer from "../components/Footer";

function RegistrationPage() {
    return (
        <>
            <Header />
            <section class="registration-heading centering">
                <div class="registration-heading-text">
                    <h1>REGISTRATION</h1>
                </div>
            </section>
            <section class="regisration-wraper centering">
                <form class="regisration-profile" action="#">
                    <div class="regisration-profile-form">
                        <legend class="regisration-profile-form-title">Your Name</legend>
                        <input placeholder="First Name" type="text" class="regisration-profile-form-input" />
                        <input placeholder="Last Name" type="text" class="regisration-profile-form-input" />
                    </div>
                    <div class="regisration-profile-formSex">
                        <label class="regisration-profile-formSex-label" for="male"><input name="formSex" id="male" type="image" />Male
                        </label>
                        <label class="regisration-profile-formSex-label" for="female"><input name="formSex" id="female" type="image" src="icon/emptyCircle.svg" />Female</label>
                    </div>
                    <div class="regisration-profile-form">
                        <legend class="regisration-profile-form-title">Login details</legend>
                        <input placeholder="Email" type="email" class="regisration-profile-form-input" />
                        <input placeholder="Password" type="password" class="regisration-profile-form-input" />
                        <p class="regisration-profile-form-text">Please use 8 or more characters, with at least 1 number and a
                            mixture of uppercase and lowercase letters
                        </p>
                    </div>
                    <button class="regisration-profile-btn">JOIN NOW <span class="regisration-profile-btnIcon"></span></button>
                </form>
                <article class="regisration-banerPromo">
                    <p class="regisration-banerPromo-title">LOYALTY HAS ITS PERKS</p>
                    <p class="regisration-banerPromo-title">Get in on the loyalty program where you can earn points and unlock serious perks. Starting with these as soon as you join:</p>
                    <div class="regisration-banerPromo-list">
                        <p class="regisration-banerPromo-text">
                            <span class="regisration-banerPromo-checkIcon"></span>15% off
                            welcome offer
                        </p>
                        <p class="regisration-banerPromo-text">
                            <span class="regisration-banerPromo-checkIcon"></span>Free shipping, returns and exchanges on all
                            orders
                        </p>
                        <p class="regisration-banerPromo-text">
                            <span class="regisration-banerPromo-checkIcon"></span>$10 off a purchase on your birthday
                        </p>
                        <p class="regisration-banerPromo-text">
                            <span class="regisration-banerPromo-checkIcon"></span>Early access to products
                        </p>
                        <p class="regisration-banerPromo-text">
                            <span class="regisration-banerPromo-checkIcon"></span>Exclusive offers & rewards
                        </p>
                    </div>
                </article>
            </section>
            <Subscribe />
            <Footer />
        </>
    );
}

export default RegistrationPage;