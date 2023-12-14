import React from "react";
import '../App.css'
import Price from './Price'
import './Price.css'

const PriceList = () => {

    const prices = [
        {
            category: 'Herren - Haarschnitte, Bart, Pflege',
            items: [
                {name: 'Waschen, Schneiden + Styling', price: 35},
                {name: 'Maschinenschnitt', price: 18},
                {name: 'Intensiv - Pflege', price: 20},
                {name: 'Bart trimmen', price:10},
            ]
        },
        {
            category: 'Damen - Haarschnitte, Pflege',
            items: [
                {name: 'Waschen, Schneiden + Styling', price: 50},
                {name: 'Intensiv - Pflege', price: 30},
                {name: 'Rebuild Treatment + Styling', price: 75}
            ],
        },
        {
            category: 'Styling',
            items: [
                {name: 'kurzes Haar', price: 20},
                {name: 'mittellanges Haar', price: 30},
                {name: 'langes Haar', price: 35},
            ]
        },
        {
           category: 'Farbe / Tönung',
            items: [
                {name: 'Ansatz', price: 40},
                {name: 'kurzes Haar', price: 50},
                {name: 'mittellanges Haar', price: 60},
                {name: 'langes Haar', price: 80},
                {name: 'Strähnen (kurz)', price: 55},
                {name: 'Strähnen (mittel)', price: 65},
                {name: 'Strähnen (lang)', price: 85},
                {name: 'Glossing', price: 25},
            ]
        },
        {
            category: 'Dauerwelle',
            items: [
                {name: 'Teilkopf', price: 50},
                {name: 'ganzer Kopf', price: 80},
            ]
        },
        {
            category: 'Augen',
            items: [
                {name: 'Augenbrauen färben', price: 10},
                {name: 'Augenbrauen zupfen', price: 8},
                {name: 'Augenbrauen waxen', price: 13},
                {name: 'Wimpern färben', price: 18}
            ]
        },
        {
            category: 'Kinder',
            items: [
                {name: 'Mädchen (bis 14 J.)', price: 25},
                {name: 'Jungs (bis 14 J.)', price: 16},
            ]

        }
    ];

    return (
        <div>
            <Price title="Preisliste" table={prices}/>
        </div>
    );
};

export default PriceList;