import React from "react";
import './About.css'
import '../App.css'

function About() {
    return (
        <>
            <div className='about-container' id='about-container'>
                <div className='about-text'>
                    <h2>Sehr geehrte Leserinnen und Leser, </h2>
                    <p>Seit 2021 sind wir stolz darauf, unseren Kunden in Pasing und
                        Umgebung einen erstklassigen Friseurservice zu bieten. Als ein lokales Juwel Münchens verstehen
                        wir die Bedeutung von Tradition gepaart mit modernem Flair und bringen genau das in jeden
                        Schnitt, jede Farbe und jeden Stil, den wir kreieren, ein.
                        <br/>
                        <br/>
                        Unser engagiertes Team aus erfahrenen Friseurmeistern und talentierten Stylisten bleibt stets am
                        Puls der Zeit, um Ihnen die neuesten Trends und Techniken aus der Welt der Haarkunst anzubieten.
                        Gleichzeitig ehren wir klassische Stile und Techniken, die die zeitlose Eleganz unterstreichen,
                        für die München bekannt ist.
                        <br/>
                        <br/>
                        Hier im FriseurKwin glauben wir, dass jeder Kunde einzigartig ist. Deshalb nehmen wir uns die
                        Zeit, Ihre individuellen Wünsche und Bedürfnisse zu verstehen, um einen Look zu kreieren, der
                        perfekt zu Ihren Geishctszügen passt.
                        <br/>
                        <br/>
                        Doch mehr als nur Haarschnitte und Styling, bieten wir ein ganzheitliches Salon-Erlebnis.
                        Genießen Sie eine entspannende Kopfmassage, ein erfrischendes Getränk und lassen Sie sich in der
                        entspannten Atmosphäre unseres Salons verwöhnen.
                        <br/>
                        <br/>
                        Besuchen Sie uns im FriseurKwin und entdecken Sie, warum wir der bevorzugte Friseur-Salon für so
                        viele Münchner sind. Wir freuen uns darauf, Sie bald kennenzulernen!</p>
                </div>
                <img
                    className='about-image'
                    alt='about'
                    src='/images/img-6.jpg'
                />

            </div>
        </>
    )
}

export default About;