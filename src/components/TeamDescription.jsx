import "../styles/TeamDescription.css";
import flower from "../assets/images/our-team/flower.png";
import stains from "../assets/images/our-team/stains.png";
import camilaImage from "../assets/images/our-team/camilaImage.png";
import danielaImage from "../assets/images/our-team/danielaImage.png";
import joseImage from "../assets/images/our-team/joseImage.png";

const TeamDescription = () => {
  return (
    <section id="team-description">
      <div className="team-container">
        <div className="team-header">
          <h2>Our team</h2>
          <img src={flower} alt="flower decoration" className="flower-icon" />
        </div>

        <div className="team-content">
          <p>
            Our Staff is chosen not just for their education and experience in
            early childhood, but also for their personal qualities like warmth,
            empathy, and ability to connect well with others.
          </p>

          <p>
            We check references, do thorough background checks, and require our
            staff to keep up with CPR and first aid certifications. We also
            encourage ongoing learning and certification in early childhood
            education to keep our teaching standards high for the kids at{" "}
            <span className="highlight">CHILDCARE SU PRESENCIA</span>.
          </p>

          <p>
            We set up schedules and routines to make sure kids get plenty of
            physical activity, rest, and playtime.
          </p>
        </div>
        <img
          src={stains}
          alt="decorative stains"
          className="stains-decoration"
        />
      </div>

      <div className="team-members">
        <div className="team-card">
          <div className="card-content">
            <img
              src={camilaImage}
              alt="Camila Torres"
              className="member-image"
            />
            <div className="member-info">
              <h3 className="member-name">Camila Torres</h3>
              <p className="member-role">Teacher</p>
            </div>
          </div>
        </div>

        <div className="team-card">
          <div className="card-content">
            <img
              src={danielaImage}
              alt="Daniela Pérez"
              className="member-image"
            />
            <div className="member-info">
              <h3 className="member-name">Daniela Pérez</h3>
              <p className="member-role">Teacher</p>
            </div>
          </div>
        </div>

        <div className="team-card">
          <div className="card-content">
            <img src={joseImage} alt="José Reyes" className="member-image" />
            <div className="member-info">
              <h3 className="member-name">José Reyes</h3>
              <p className="member-role">Teacher</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamDescription;
