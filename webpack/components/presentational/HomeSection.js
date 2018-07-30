import React, { Component } from "react";
import HeroDesktop from "./../../../assets/img/layout/heroDesktop.svg";

class HomeSection extends Component {
componentDidMount(){
  this.refs.video.setAttribute('muted', true);
  this.refs.video.play();
}
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
            ref="video"
            preload="auto"
            autoPlay
            muted={true}
            loop
            playsInline
          />
        </div>
      </section>
    );
  }
}

export default HomeSection;
