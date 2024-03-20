import chevronDown from "../icon/chevronDown.svg";

function Filter() {
    return ( 
        <section class="filter centering">
        <div class="filter-items">
            <details class="filter-items-category">
                <summary class="filter-items-category-summary">FILTER <span class="filter-items-category-summary-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10" fill="none">
                            <path
                                d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                                fill="black" />
                        </svg>
                    </span>
                </summary>
                <details class="filter-items-category-subcategory">
                    <summary class="filter-items-category-subcategory-summary">CATEGORY</summary>
                    <div class="filter-items-category-subcategory-elements">
                        <a class="filter-items-category-subcategory-elements-el" href="#">Accessories</a>
                        <a class="filter-items-category-subcategory-elements-el" href="#">Bags</a>
                        <a class="filter-items-category-subcategory-elements-el" href="#">Denim</a>
                        <a class="filter-items-category-subcategory-elements-el" href="#">Hoodies & Sweatshirts</a>
                        <a class="filter-items-category-subcategory-elements-el" href="#">Jackets & Coats</a>
                        <a class="filter-items-category-subcategory-elements-el" href="#">Polos</a>
                        <a class="filter-items-category-subcategory-elements-el" href="#">Shirts</a>
                        <a class="filter-items-category-subcategory-elements-el" href="#">Shoes</a>
                        <a class="filter-items-category-subcategory-elements-el" href="#">Sweaters & Knits</a>
                        <a class="filter-items-category-subcategory-elements-el" href="#">T-Shirts</a>
                        <a class="filter-items-category-subcategory-elements-el" href="#">Tanks</a>
                    </div>
                </details>

                <details class="filter-items-category-subcategory">
                    <summary class="filter-items-category-subcategory-summary">BRAND</summary>
                </details>

                <details class="filter-items-category-subcategory">
                    <summary class="filter-items-category-subcategory-summary">DESIGNER</summary>
                </details>
            </details>
        </div>
        <div class="filter-items">
            <div class="filter-items-box">
                <details class="filter-items-box-details">
                    <summary class="filter-items-box-details-summary">TRENDING NOW <img src={chevronDown} alt="chevron Down"
                            class="filter-items-box-details-summary"/></summary>
                </details>
            </div>
            <div class="filter-items-box">
                <details class="filter-items-box-details">
                    <summary class="filter-items-box-details-summary">SIZE <img src={chevronDown} alt="chevron Down"
                            class="filter-items-box-details-summary"/></summary>
                    <div class="filter-items-box-details-pre_part">
                        <div class="filter-items-box-details-part">
                            <input id="input1" type="checkbox"/>
                            <label for="input1">XS</label>
                        </div>
                        <div class="filter-items-box-details-part">
                            <input id="input2" type="checkbox"/>
                            <label for="input2">S</label>
                        </div>
                        <div class="filter-items-box-details-part">
                            <input id="input3" type="checkbox"/>
                            <label for="input3">M</label>
                        </div>
                        <div class="filter-items-box-details-part">
                            <input id="input4" type="checkbox"/>
                            <label for="input4">L</label>
                        </div>
                    </div>
                </details>
            </div>
            <div class="filter-items-box">
                <details class="filter-items-box-details">
                    <summary class="filter-items-box-details-summary">PRICE <img src={chevronDown} alt="chevron Down"
                            class="filter-items-box-details-summary"/></summary>
                </details>
            </div>
        </div>
    </section>
     );
}

export default Filter;