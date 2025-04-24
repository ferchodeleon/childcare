import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ourTeam1 from "../assets/images/our-team/photo-our-team.png";
import crown from "../assets/images/our-team/crown.png";
import borderTextOurTeam from "../assets/images/border-text-banner.png";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/OurTeam.css";
import TeamDescription from "./TeamDescription";

const OutTeamContent = [
  {
    description: (
      <>
        We’re super proud of the{" "}
        <strong>unique qualities, experience, and skills</strong> of our
        teaching and admin team.
      </>
    ),
  },
];

const OurTeam = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="team">
      <div className="ourTeam-wrapper">
        <div className="ourTeam-container-top " />
        <div className="ourTeam-container-bottom " />
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          <SwiperSlide>
            <img src={ourTeam1} alt="ourTeam1" />
          </SwiperSlide>
        </Swiper>

        <div className="ourTeam-text-container">
          <img
            className="border-text-ourTeam"
            src={borderTextOurTeam}
            alt="border text ourTeam"
          />
          <img className="start-ourTeam" src={crown} alt="start ourTeam" />
          <p>{OutTeamContent[activeIndex].description}</p>
        </div>
      </div>
      <TeamDescription />
    </section>
  );
};

export default OurTeam;
