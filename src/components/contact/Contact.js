import { useState } from "react";
import "./contact.scss"

function Contact() {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setMessage(true);
    };
    return (
      <div className="contact" id="contact">
        <div className="container ">
          <div className="grid grid--two">
            <div className="contact__app-info">
              <div className="h1">
               Get started by downloading our app.
              </div>
              <div className="contact__apps">
                <img src="/assets/ios.png" alt="ios"/>
                <img src="/assets/android.png" alt="android"/>
              </div>

            </div>
            <div className="">
              <form onSubmit={handleSubmit}>
                <h3>Send a message</h3>
                <input type="text" placeholder="Email" />
                <textarea placeholder="Message" rows="8"></textarea>
                <button type="submit" className="button button--primary">Send</button>
                {message && <span>Message send!</span>}
              </form>
            </div>
          </div>
          

        </div>

      </div>
    );
}

export default Contact
