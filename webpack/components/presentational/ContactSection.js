import React, { Component } from "react";
import ContactForm from "./../ContactForm";
import FindOutIcon from "svg-react-loader?name=FindOutIcon!../../../assets/img/layout/findOut.svg";
import ChallengesWelcome from "svg-react-loader?name=ChallengesWelcome!../../../assets/img/layout/challengesWelcome.svg";
import LocationMap from "svg-react-loader?name=LocationMap!../../../assets/img/layout/locationMap.svg";
import InstagramIcon from "svg-react-loader?name=InstagramIcon!../../../assets/img/social/instagram.svg";
import FacebookIcon from "svg-react-loader?name=FacebookIcon!../../../assets/img/social/facebook.svg";
import VimeoIcon from "svg-react-loader?name=VimeoIcon!../../../assets/img/social/vimeo.svg";
import YouTubeIcon from "svg-react-loader?name=YouTubeIcon!../../../assets/img/social/youtube.svg";
import LinkedInIcon from "svg-react-loader?name=LinkedInIcon!../../../assets/img/social/linkedin.svg";
import TwitterIcon from "svg-react-loader?name=TwitterIcon!../../../assets/img/social/twitter.svg";

class ContactSection extends Component {
  render() {
    return (
      <section id="contact">
        <FindOutIcon className="engageLogo" />
        <h2>
          <ChallengesWelcome />
        </h2>
        <a id="downloadPager" href="assets/pdf/one-pager.pdf" download>download PDF<br/>find:out one pager</a>
        <div className="locationContact">
          <ul className="chooseList">
            <li>las vegas</li>
            <li>mexico city</li>
            <li>copenhaguen</li>
            <li>singapore</li>
          </ul>
        </div>
        <div className="locationContact">
          <p>1-844-2 FIND OUT (1-844-234-6368)</p>
          <p>
            <a href="mailto:success@designsuccess.com">
              info@findoutresearch.com
            </a>
          </p>
        </div>
        <ContactForm />
        <LocationMap className="locationMap" />
        <footer>
          <div className="socialList">
            <FacebookIcon className="socialIcon" />
            <VimeoIcon className="socialIcon" />
            <YouTubeIcon className="socialIcon" />
            <InstagramIcon className="socialIcon" />
            <LinkedInIcon className="socialIcon" />
            <TwitterIcon className="socialIcon" />
          </div>
          <p>
            © design success international ds worldwide consulting llc. all
            rights reserved. <a>privacy of use</a> | <a>terms & conditions</a>
          </p>
        </footer>
      </section>
    );
  }
}

export default ContactSection;
