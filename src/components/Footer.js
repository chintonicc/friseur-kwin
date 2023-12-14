import './Footer.css'

function Footer() {
    const invisible = {
        visibility: 'hidden',
    };

    const handleCopyPhoneNumber = () => {
        const phoneNumber = document.getElementById('phoneNumber');
        copyToClipboard(phoneNumber.innerText);
    };

    const handleCopyEmail = () => {
        const email = document.getElementById('email');
        copyToClipboard(email.innerText);
    };

    const copyToClipboard = (text) => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    };

    return (
        <footer className='footer'>
            <div className='items__container'>
                <div className='days'>
                    <h3>Öffnungszeiten:</h3>
                    <p>Montag:</p>
                    <p>Dienstag:</p>
                    <p>Mittwoch:</p>
                    <p>Donnerstag:</p>
                    <p>Freitag:</p>
                </div>
                <div className='hours'>
                    <h3 style={invisible}>lol</h3>
                    <p>8:00 - 17:00 Uhr</p>
                    <p>8:00 - 17:00 Uhr</p>
                    <p>8:00 - 17:00 Uhr</p>
                    <p>8:00 - 17:00 Uhr</p>
                    <p>9:00 - 14:00 Uhr</p>
                </div>
            </div>
            <div className='items__container'>
                <div className='address'>
                    <h3>So finden sie uns:</h3>
                    <p>Volmstraße 48</p>
                    <p>81241 München</p>
                </div>
                <div className='contact'>
                    <h3>Kontakt:</h3>
                    <div className="icon-wrapper">
                        <i className="fa-solid fa-phone"
                           id="paragraphToCopy"
                           onClick={handleCopyPhoneNumber}
                           title="kopieren"></i>
                        <p id='phoneNumber'>089 32362897</p>
                    </div>
                    <div className="icon-wrapper">
                        <i className="fa-regular fa-envelope"
                           onClick={handleCopyEmail}
                           title="kopieren"></i>
                        <p id='email'>kevin.nguyen@tum.de</p>
                    </div>
                </div>
            </div>
            <div className="horizontal-line"></div>
            <div className="icon-wrapper">
                <i className="fa-regular fa-copyright"></i>
                <p>Marcel Do 2023 | Alle Rechte vorbehalten.</p>
            </div>
        </footer>
    )
}

export default Footer;