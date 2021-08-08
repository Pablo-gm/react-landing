import React from 'react'
import './footer.scss'

const links = [
    { link: '#pricing', text: 'Pricing' },
    { link: '#contact', text: 'Contact' },
];

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <div className="footer__left">
                        <a href="#intro" className="logo"><img src="assets/logo.png" alt="Logo Footer" /></a>
                        <span>© {(new Date().getFullYear())} Meet.</span>
                    </div>
                    <div className="footer__right">
                        <ul className="footer__links-wrapper">
                        {links.map(link => (
                            <li key={link.text}>
                                <a href={link.link} className="button button--small">
                                    {link.text}
                                </a>
                            </li>
                        ))}
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
