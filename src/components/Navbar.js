import React, {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import {Button} from './Button';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const location = useLocation();
    const isTerminePage = location.pathname === '/termine';

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function scrollToDiv(id) {
        if (isTerminePage) {
            await sleep(750);
        }
        
        const navbarHeight = 80;  // Adjust this value to the height of your navbar
        const targetDiv = document.getElementById(id);

        if (targetDiv) {
            const divPosition = targetDiv.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: divPosition - navbarHeight,  // Subtract the navbar height
                behavior: 'smooth'
            });
        } else {
            console.error('Element with ID "targetDiv" not found.');
        }
    }

    const handleButtonClick = () => {
        window.location.href = '/termine';
    };


    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    {/* eslint-disable-next-line no-sequences */}
                    <Link to='/' className='navbar-logo' onClick={() => {
                        closeMobileMenu();
                        scrollToTop();
                    }}>
                        Friseur Kwin{'\u00A0'}
                        <i className="fa-solid fa-scissors fa-xs"></i>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={() => {
                                closeMobileMenu();
                                scrollToTop();
                            }}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={() => {
                                closeMobileMenu();
                                scrollToDiv('about-container');
                            }}>
                                Über uns
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={() => {
                                closeMobileMenu();
                                scrollToDiv('price__list')
                            }}>
                                Preise
                            </Link>
                        </li>
                        <li>
                            <Link to='/termine' className='nav-links-mobile' onClick={closeMobileMenu}>
                                Termin buchen
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline' onClick={handleButtonClick}>Termin buchen</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar;