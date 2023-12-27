/**
 * Button component that renders a button with different styles and sizes.
 *
 * @component
 * @param {Object} props - The properties of the button.
 * @param {ReactNode} props.children - The content of the button.
 * @param {string} props.type - The type of the button.
 * @param {function} props.onClick - The click event handler for the button.
 * @param {string} props.buttonStyle - The style of the button. Can be 'btn--primary' or 'btn--outline'.
 * @param {string} props.buttonSize - The size of the button. Can be 'btn--medium' or 'btn--large'.
 * @returns {JSX.Element} The rendered Button component.
 */
import React from 'react';
import './Button.css'
import {Link} from 'react-router-dom'

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children,
                           type,
                           onClick,
                           buttonStyle,
                           buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/' className="btn-mobile">
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        </Link>
    )
};