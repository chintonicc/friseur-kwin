import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1 className='cards-text'>Was wir bieten:</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-1.jpg'
                            text='Haarschnitt'
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Haarfärbung'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/img-3.jpg'
                            text='Dauerwelle'
                        />
                        <CardItem
                            src='images/img-4.jpg'
                            text='Haarpflege'
                        />
                        <CardItem
                            src='images/img-5.jpg'
                            text='Beratung'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;