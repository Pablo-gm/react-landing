import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

function Intro() {
    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Gather","Flow", "Work"],
        });
    }, []);

  return (
    <div className="intro " id="intro">
        <div className="shape"></div>
        <div className="container">
            <div className="left">
                <div className="left__wrapper">
                    <h1>
                        A new way to <span className="text--primary" ref={textRef}></span>
                    </h1>
                    <h3>Meet takes collaboration to the next level, enables teams to have meaningful interactions and keep each other in touch.</h3>
                    <div>
                        <a href="#contact" className="button button--primary">Request a demo</a>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="right__img-container">
                    <img src="assets/Screen_1.png" alt="App" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Intro;
