import React from "react";
import '../App.css'
import Price from './Price'
import './Price.css'

const PriceList = () => {
    const menPrices = [
        {name: 'Haareschnitt + Styling', price: 22},
        {name: 'Intensiv - Pflege', price: 20},
        {name: 'Dauerwelle', price: 70},
        {name: 'Haarfärbung', price: 75},
        {name: 'Augenbrauen formen + färben', price: 15},
    ];

    const womenPrices = [
        {name: 'Haareschnitt + Styling', price: 32},
        {name: 'Intensiv - Pflege', price: 30},
        {name: 'Dauerwelle', price: 100},
        {name: 'Haarfärbung', price: 110},
        {name: 'Augenbrauen formen + färben', price: 18},
    ];

    return (
        <div>
            <ul className='price__list__items'>
                <Price title="Preise - Herren" table={menPrices}/>
                <Price title="Preise - Damen" table={womenPrices}/>
            </ul>
        </div>
    );
};

export default PriceList;