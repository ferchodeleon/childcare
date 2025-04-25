import "../styles/AboutUs.css";
import photoAbout from "../assets/images/photo-about.png";
import sun from "../assets/images/sun.png";
import flower from "../assets/images/flower.png";
import asterics from "../assets/images/drives/asterics.png";
import image1 from "../assets/images/drives/image1.png";
import image2 from "../assets/images/drives/image2.png";
import image3 from "../assets/images/drives/image3.png";
import image4 from "../assets/images/drives/image4.png";
import image5 from "../assets/images/drives/image5.png";
import image6 from "../assets/images/drives/image6.png";

const drivesData = [
  {
    icon: image1,
    text: "To cherish the individuality of each child.",
  },
  {
    icon: image2,
    text: "Families are essential collaborators in every child's development.",
  },
  {
    icon: image3,
    text: "We strive for constant improvement.",
  },
  {
    icon: image4,
    text: "By setting a good example for children, we can change society.",
  },
  {
    icon: image5,
    text: "Love outshines any negative deed.",
  },
  {
    icon: image6,
    text: "To play a positive role in our community.",
  },
];

const AboutUs = () => {
  return (
    <section className="aboutUs">
      <div id="about" className="about-container">
        <div className="about-image-container">
          <img src={sun} alt="sun icon" className="sun-icon" />
          <div className="image-wrapper">
            <img
              src={photoAbout}
              alt="teacher with children"
              className="main-photo"
            />
          </div>
        </div>

        <div className="about-content">
          <div className="content-section">
            <h2 className="title">Just imagine</h2>
            <p className="description">
              We're building a playground of values and beliefs where every
              little step can lead to big leaps towards a brighter world for
              all.
            </p>
          </div>

          <div className="content-section">
            <h2 className="title">Our promise</h2>
            <p className="description">
              We're here to help every child shine in their own unique way,
              mixing smarts with heart, friendships with fun, and lessons with
              laughter, all wrapped up in a big, safe hug.
            </p>
          </div>
        </div>
        <div className="about-flower">
          <img src={flower} alt="flower" />
        </div>
      </div>

      <div className="drives-container">
        <div className="drives-title">
          <img src={asterics} alt="asterisk" className="asterisk-icon" />
          <h2>What drives us</h2>
        </div>
        <div className="drives-grid">
          {drivesData.map((item, index) => (
            <div key={index} className="drive-item">
              <div className="drive-icon">
                <img src={item.icon} alt={`drive icon ${index + 1}`} />
              </div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
