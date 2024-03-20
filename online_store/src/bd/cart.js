import imgCard1 from '../img/product3.jpg'
import imgCard2 from '../img/catalog_img7.jpg'
import { createContext } from 'react';

export const cart = createContext([
    {
        id: 1,
        productName: 'MANGO PEOPLE',
        url: imgCard1,
        price: 300,
        color: 'Red',
        size: 'Xl',
    },
    {
        id: 2,
        productName: 'MANGO PEOPLE',
        url: imgCard2,
        price: 300,
        color: 'Red',
        size: 'Xl',
    },
]);


// function viewCart() {
//     cart.map((elem) => console.log(elem));
// }