import { useState, useEffect } from 'react'
import './topbar.scss'
//import {Call, Mail} from "@material-ui/icons"

const navigation = [
    { link: '#intro', text: 'Home' },
    { link: '#testimonials', text: 'Testimonials' },
    { link: '#pricing', text: 'Pricing' },
    { link: '#contact', text: 'Contact', featured: true },
];

function Topbar({menuOpen, setMenuOpen}) {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 48);
      });
    }, []);

    return (
        <div className={"topbar" + (menuOpen ? ' active' : '') + (scroll ? ' moving' : '')}>
            <div className="container topbar__wrapper">
                <div className="topbar__left">
                    <a href="#intro" className="topbar__logo"><img src="assets/logo.png" alt="Logo" /></a>
                </div>
                <div className="topbar__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
                <div className="topbar__right">
                    <ul className="topbar__links-wrapper">
                    {navigation.map(nav => (
                        <li key={nav.text} onClick={()=>setMenuOpen(false)}>
                            <a href={nav.link} className={nav.featured ? "topbar__link topbar__link--featured" : "topbar__link"}>
                                {nav.text}
                            </a>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Topbar
