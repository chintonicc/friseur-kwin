import React from "react";
import '../App.css'
import './Price.css'

function Price(props) {
    return (
        <div className='price__list'>
            <div className='price__list__container'>
                <h2 className='price__list__title'>{props.title}</h2>
                <table className='price__list__table'>
                    <tbody>
                    {props.table.map((section, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <th colSpan="2">{section.category}</th>
                            </tr>
                            {section.items.map((product) => (
                                <tr key={product.name}>
                                    <td>{product.name}</td>
                                    <td>{product.price.toFixed(2)}€</td>
                                </tr>
                            ))}
                        </React.Fragment>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Price;