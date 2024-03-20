import { Link } from 'react-router-dom';

function PageHeading() {
    return (
        <section class="page_heading centering">
            <h1 class="page_heading_title">NEW ARRIVALS</h1>
            <div class="page_heading_breadCrumbs">
                <Link to='/' class="page_heading_breadCrumbs_text">HOME</Link>
                <Link to='/Catalog' class="page_heading_breadCrumbs_text">MEN</Link>
                <span class="page_heading_breadCrumbs_text unic">NEW ARRIVALS</span>
            </div>
        </section>
    );
}

export default PageHeading;