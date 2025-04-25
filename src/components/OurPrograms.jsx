import "../styles/OurPrograms.css";
import star from "../assets/images/programs/star.png";
import spiral from "../assets/images/programs/spiral.png";
import bilingual from "../assets/images/programs/regular-bilingual.png";
import preK from "../assets/images/programs/pre-k.png";
import dateNights from "../assets/images/programs/date-nights.png";
import busDrivers from "../assets/images/programs/bus-drivers.png";
import afterSchoolers from "../assets/images/programs/after-schoolers.png";
import campers from "../assets/images/programs/summer.png";

const programsData = [
  {
    icon: bilingual,
    title: "Regular Bilingual",
    description: "It's open to kids from six weeks old up to 4 years old.",
  },
  {
    icon: preK,
    title: "Pre K",
    description:
      "This program is for kids who are starting kindergarten next year. We help and teach 4- to 5-year-olds to get ready for the social and academic challenges ahead.",
  },
  {
    icon: dateNights,
    title: "Date nights",
    description:
      "We love families and understand how important it is to nurture and be intentional with our time and relationships. This program is open once a month for kids from six weeks to 12 years old (we'll give a heads-up so parents can save their spot).",
  },
  {
    icon: busDrivers,
    title: "Bus drivers",
    description:
      "This program lets parents drop off kids from 4 to 13 years old at our facility in the morning, so they can take them to and pick them up from school. After school, they can join our After Schoolers Program (which will be available later).",
  },
  {
    icon: afterSchoolers,
    title: "After schoolers",
    subtitle: "(will be available later)",
    description:
      "Kids in this program will join us after their school day ends. It's open for kids from 4 to 12 years old.",
  },
  {
    icon: campers,
    title: "Summer and winter campers",
    description:
      "This program will only be available during school vacation periods and is open for kids from 4 to 13 years old. (It'll be available later on.)",
  },
];

const OurPrograms = () => {
  return (
    <section id="programs">
      <div id="section-programs" className="programs-container">
        <div className="programs-title">
          <img src={star} alt="star icon" className="star-icon" />
          <h2>Our programs</h2>
        </div>

        <div className="programs-grid">
          {programsData.map((program, index) => (
            <div key={index} className="program-card">
              <div className="program-content">
                <div className="program-header">
                  <img
                    src={program.icon}
                    alt={program.title}
                    className="program-icon"
                  />
                  <h3>{program.title}</h3>
                </div>
                {program.subtitle && (
                  <p className="subtitle">{program.subtitle}</p>
                )}
                {program.description && (
                  <p className="description">{program.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <img
          src={spiral}
          alt="spiral decoration"
          className="spiral-decoration"
        />
      </div>
    </section>
  );
};

export default OurPrograms;
