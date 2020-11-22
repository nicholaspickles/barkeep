import React from "react";

import 'antd/dist/antd.css';
import { Carousel } from "antd";
import { AboutUsWrapper, AboutUsHeader, AboutUsText, Carouselh3 } from "../styles";

import cocktails from "../localImages/cocktais.jpg";
import abs from '../localImages/absinthe.png';

const About = () => {
  return (
    <AboutUsWrapper>
      <Carousel autoplay autoplaySpeed={3500} effect="fade" speed = {1500}>
        <div>
          <Carouselh3>image 1</Carouselh3>
        </div>
        <div>
          <Carouselh3>image 2</Carouselh3>
        </div>
        <div>
          <Carouselh3>Image 3</Carouselh3>
        </div>
        <div>
          <Carouselh3>Image 4</Carouselh3>
        </div>
      </Carousel>
      <AboutUsHeader>
        Bringing cheap, experimental cocktails for everyone.
      </AboutUsHeader>
      <hr style={{ marginRight: "5%", marginLeft: "5%", marginBottom: "2%" }} />
      <h3 style={{ marginLeft: "2%", marginBottom: "2%", textAlign: "center" }}>
        This is a passion project from someone who likes their drinks.
      </h3>
      <AboutUsText>
        Cocktails are way too expensive, so here's an opportunity to get some at
        a cheaper price right in the comforts of your home.
      </AboutUsText>
      <AboutUsText>
        The goal are barkeep is to replicate some of our favorite cocktails from
        around Singapore for a considerably cheaper price, and from time to
        time, include some of our own concoctions.
      </AboutUsText>
      <h3 style={{ textAlign: "center" }}>
        We aren't bar professions - just a team of cocktail lovers
      </h3>
      <AboutUsText>
        Don't worry! Our consistent testing and sampling of cocktails with
        experiment and feedback sessions help to ensure that the cocktails you
        get are to our standards.
      </AboutUsText>
    </AboutUsWrapper>
  );
};

export default About;
