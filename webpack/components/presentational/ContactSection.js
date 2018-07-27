import React, { Component } from "react";
import ContactForm from "./../ContactForm";
import FindOutIcon from "./../../../assets/img/layout/findOut.svg";
import ChallengesWelcome from "./../../../assets/img/layout/challengesWelcome.svg";
import LocationMap from "./../../../assets/img/layout/locationMap.svg";
import InstagramIcon from "./../../../assets/img/social/instagram.svg";
import FacebookIcon from "./../../../assets/img/social/facebook.svg";
import VimeoIcon from "./../../../assets/img/social/vimeo.svg";
import YouTubeIcon from "./../../../assets/img/social/youtube.svg";
import LinkedInIcon from "./../../../assets/img/social/linkedin.svg";
import TwitterIcon from "./../../../assets/img/social/twitter.svg";

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
