

function Promo_box(props) {

    return (
        <div class="promo_box">
            <img class="promo_img" src={props.img} alt="icon1" />
            <h1 class="promo_title">{props.title}</h1>
            <h3 class="promo_text">{props.text}</h3>
        </div>
    );
}

export default Promo_box;