import React, { Component } from "react";
import ReactPlayer from "react-player";
import BrandGrid from "./../BrandGrid";
import Graphic1 from "./../../../assets/img/layout/graphic1.svg";
import Graphic2 from "./../../../assets/img/layout/graphic2.svg";
import Graphic3 from "./../../../assets/img/layout/graphic3.svg";

class WhoSection extends Component {
  render() {
    return (
      <section id="who">
        <div className="screen1 screen">
          <ReactPlayer url="https://vimeo.com/277727787" className="fullVideo"/>
        </div>
        <p>
          <span>find:out</span> is an innovative boutique research company that finds solutions where
          others can’t!
        </p>
        <p>
          <span>unique, simple & easy:</span>
          <br />
          The perfect mix of industry leading methodologies – many of which we
          have invented, like QualQuant™, merging qualitative and qualitative
          research simultaneous, is what sets find:out apart from the rest.
        </p>
        <ul>
          <li>
            <Graphic1 />
            <h3>unique recruitment</h3>
            <h4>the industries recruitment</h4>
          </li>
          <li>
            <Graphic2 />
            <h3>best methodologies</h3>
            <h4>choosing the best mix together</h4>
          </li>
          <li>
            <Graphic3 />
            <h3>branding & innovation</h3>
            <h4>from insight to solution </h4>
          </li>
        </ul>
        <BrandGrid/>
      </section>
    );
  }
}

export default WhoSection;
