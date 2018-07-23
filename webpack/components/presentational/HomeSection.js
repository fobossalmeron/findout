import React, { Component } from "react";
import ReactPlayer from "react-player";
import HeroDesktop from "svg-react-loader?name=HeroDesktop!../../../assets/img/layout/heroDesktop.svg";


class HomeSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
  }

  componentDidMount() {
    this.setState({ playing: true });
  }

  render() {
    return (
      <section id="home">
        <div className="overVideo">
          <h1><HeroDesktop/></h1>
        </div>
        <div id="homevideo">
          <div className="video_overlay" />
          <ReactPlayer
            url="assets/video/intro.mp4"
            playing
            loop
            muted
            playsinline
          />
        </div>
      </section>
    );
  }
}

export default HomeSection;
