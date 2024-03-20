import subscribe_img from '../../img/subscribe_img.png'

function Feedback() {
    return (
        <figure class="subscribe_left">
            <img src={subscribe_img} alt="img" class="subscribe_img" />
            <figcaption class="subscribe_text">“Vestibulum quis porttitor dui! Quisque viverra nunc mi, a pulvinar purus condimentum“
            </figcaption>
        </figure>
    );
}

export default Feedback;