import React, { Component } from "react";
import Graphic1 from "svg-react-loader?name=Graphic1!../../../assets/img/layout/graphic1.svg";

class RecruitmentSection extends Component {
  render() {
    return (
      <section id="recruitment">
        <Graphic1 />
        <h2>recruitment</h2>
        <p>
          <span>find:out</span> combines recruitment, moderation, analysis,
          branding and design to give you the most accurate answers while
          experiencing the best possible service.
        </p>
        <p>
          we believe that what you put in is what you get out! we have the
          industries best recruitment all 100% in house and specialized in
          unique targets like:
        </p>
        <ul>
          <li>Specific consumer health respondents</li>
          <li>Professional executive and business respondents</li>
          <li>Medical doctors & specialists</li>
          <li>Pharmacists</li>
          <li>Ethnic target respondents </li>
          <li>General population consumer respondents</li>
        </ul>
        <p>
          <b>
            Who we recruit for: everything from focus groups to ad testing and
            taste testing<br />
            We deliver professional moderation staff, hostess and locations if
            requested.
          </b>
        </p>
      </section>
    );
  }
}

export default RecruitmentSection;
