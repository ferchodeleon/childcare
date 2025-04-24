import "../styles/Contact.css";
import home from "../assets/images/contact/home.png";
import email from "../assets/images/contact/email.png";
import phone from "../assets/images/contact/phone.png";
import address from "../assets/images/contact/address.png";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact us</h2>
          <div className="info-container">
            <img src={home} alt="Home icon" className="home-icon" />
            <div className="contact-details">
              <div className="contact-item">
                <img src={email} alt="Email icon" />
                <a href="mailto:spinfokids@supresencia.com">
                  spinfokids@supresencia.com
                </a>
              </div>

              <div className="contact-item">
                <img src={phone} alt="Phone icon" />
                <a href="tel:+14699290000">+1 (469) 9 29-0000</a>
              </div>

              <div className="contact-item">
                <img src={address} alt="Address icon" />
                <address>
                  3622 N Garland Ave
                  <br />
                  Garland, Texas 75040
                </address>
              </div>
            </div>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.7731557542366!2d-96.63869792428297!3d32.94770997439761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea1e7c1c0c5c9%3A0x7cc8dd762e9f1c5f!2s3622%20N%20Garland%20Ave%2C%20Garland%2C%20TX%2075040%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1709762429099!5m2!1ses!2sco"
            width="600"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location map"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
