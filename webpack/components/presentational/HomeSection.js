import React, { Component } from "react";
import ReactPlayer from "react-player";
import DigitalSuccess from "svg-react-loader?name=DesignSuccess!../../../assets/img/layout/digitalSuccess.svg";

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
          <h1>reinventing market research</h1>
          <h2>
          finding solutions where others can’t
          </h2>
        </div>
        <div id="homevideo">
          <div className="video_overlay" />
          <ReactPlayer
            url="./assets/video/intro.mp4"
            playing={this.state.playing}
            loop={true}
            muted={true}
            playsinline={true}
          />
        </div>
      </section>
    );
  }
}

export default HomeSection;
