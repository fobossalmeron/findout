import React, { Component } from "react";
import Nav from "./Nav";
import HomeSection from "./presentational/HomeSection";
import WhoSection from "./presentational/WhoSection";
import InnovationSection from "./presentational/InnovationSection";
import RecruitmentSection from "./presentational/RecruitmentSection";
import MethodologiesSection from "./presentational/MethodologiesSection";
import WhySection from "./presentational/WhySection";
import ContactSection from "./presentational/ContactSection";
import scrollToComponent from "react-scroll-to-component";
import FindOutIcon from "./../../assets/img/layout/findOut.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOn: false,
      modalOpen: false,
      maintenance: false
    };
    this.quitMaintenance = this.quitMaintenance.bind(this);
    this.initScrollMagic = this.initScrollMagic.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  toggleMenu() {
    this.setState({ menuOn: !this.state.menuOn });
  }

  hideNav() {
    this.setState({ menuOn: false });
  }

  initScrollMagic() {
    const script = document.createElement("script");
    script.src = "assets/js/scrollmagic.js";
    script.async = true;
    document.body.appendChild(script);
  }

  quitMaintenance() {
    this.setState({ maintenance: false });
    this.initScrollMagic();
  }

  componentDidMount() {
    if (this.state.maintenance == false) {
      this.initScrollMagic();
    }
  }

  goToTab(index) {
    this.setState({ tabIndex: index });
  }

  render() {
    var maintenanceScreen = (
      <div className="loading">
        <FindOutIcon/>
        <h2>website under construction</h2>
        <button onClick={this.quitMaintenance}>quit</button>
      </div>
    );
    var app = (
      <div>
        <Nav
          toggleMenu={this.toggleMenu.bind(this)}
          hideNav={this.hideNav.bind(this)}
          menuOn={this.state.menuOn}
          closeModal={this.closeModal.bind(this)}
          scrollToHome={() =>
            scrollToComponent(this.Home, { offset: 0, align: "top" })
          }
          scrollToWho={() =>
            scrollToComponent(this.Who, { offset: 0, align: "top" })
          }
          scrollToRecruitment={() =>
            scrollToComponent(this.Recruitment, { offset: -45, align: "top" })
          }
          scrollToMethodologies={() =>
            scrollToComponent(this.Methodologies, { offset: -45, align: "top" })
          }
          scrollToInnovation={() =>
            scrollToComponent(this.Innovation, { offset: -45, align: "top" })
          }
          scrollToWhy={() =>
            scrollToComponent(this.Why, { offset: -45, align: "top" })
          }
          scrollToContact={() =>
            scrollToComponent(this.Contact, { offset: -45, align: "top" })
          }
        />
        <HomeSection
          ref={section => {
            this.Home = section;
          }}
        />
        <WhoSection
          ref={section => {
            this.Who = section;
          }}
        />
        <RecruitmentSection
          ref={section => {
            this.Recruitment = section;
          }}
        />
        <MethodologiesSection
          ref={section => {
            this.Methodologies = section;
          }}
        />
        <InnovationSection
          ref={section => {
            this.Innovation = section;
          }}
          modalOpen={this.state.modalOpen}
          openModal={this.openModal.bind(this)}
          closeModal={this.closeModal.bind(this)}
        />
        <WhySection
          ref={section => {
            this.Why = section;
          }}
        />
        <ContactSection
          ref={section => {
            this.Contact = section;
          }}
        />
      </div>
    );
    var doRenderApp = this.state.maintenance ? maintenanceScreen : app;
    return doRenderApp;
  }
}

export default App;
