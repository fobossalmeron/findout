import React, { Component } from "react";
import HeroDesktop from "svg-react-loader?name=HeroDesktop!../../../assets/img/layout/heroDesktop.svg";

class HomeSection extends Component {

  render() {
    return (
      <section id="home">
        <div className="overVideo">
          <h1><HeroDesktop/></h1>
        </div>
        <div id="homevideo">
          <div className="video_overlay" />
          <video
            src="assets/video/intro.mp4"
            preload="auto"
            autoPlay
            muted
            playing="true"
            loop
            playsInline
          />
        </div>
      </section>
    );
  }
}

export default HomeSection;
