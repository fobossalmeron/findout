import React, { Component } from "react";
import HamburgerIcon from "./../../assets/img/layout/hamburger.svg";
import FindOut from "./../../assets/img/layout/findOut.svg";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      relative: false,
      menuToggled: false
    }; 
    this.navScrollMagic = this.navScrollMagic.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.doHideNav = this.doHideNav.bind(this);
  }

  toggleMenu() {
    this.setState({ menuToggled: !this.state.menuToggled });
    document.body.classList.toggle("restrictBody");
    document.addEventListener("touchstart", this.touchstart);
    document.addEventListener("touchmove", this.touchmove);
    function touchstart(e) {
      e.preventDefault();
    }
    function touchmove(e) {
      e.preventDefault();
    }
    this.props.closeModal();
  }
  doHideNav() {
    this.setState({ menuToggled: false });
    document.body.classList.remove("restrictBody");
    document.removeEventListener("touchstart", this.touchstart);
    document.removeEventListener("touchmove", this.touchmove);
    this.props.closeModal();
  }

  componentDidMount() {
    if (typeof this.props.relativePath !== "undefined") {
      this.setState({ relative: true }, () => this.navScrollMagic());
    } else {
      this.navScrollMagic();
    }
  }

  doScrollToHome(event) {
    this.props.closeModal();
    if (typeof this.props.scrollToHome !== "undefined") {
      event.preventDefault();
      this.props.scrollToHome();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#");
      }
    }
  }

  doScrollToWho(event) {
    this.props.closeModal();
    if (typeof this.props.scrollToWho !== "undefined") {
      event.preventDefault();
      this.props.scrollToWho();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#who");
      }
    }
  }
  doScrollToRecruitment() {
    this.props.closeModal();
    if (typeof this.props.scrollToRecruitment !== "undefined") {
      event.preventDefault();
      this.props.scrollToRecruitment();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#recruitment");
      }
    }
  }
  doScrollToMethodologies() {
    this.props.closeModal();
    if (typeof this.props.scrollToMethodologies !== "undefined") {
      event.preventDefault();
      this.props.scrollToMethodologies();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#methodologies");
      }
    }
  }
  doScrollToInnovation() {
    this.props.closeModal();
    if (typeof this.props.scrollToInnovation !== "undefined") {
      event.preventDefault();
      this.props.scrollToInnovation();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#innovation");
      }
    }
  }
  doScrollToWhy() {
    this.props.closeModal();
    if (typeof this.props.scrollToWhy !== "undefined") {
      event.preventDefault();
      this.props.scrollToWhy();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#why");
      }
    }
  }
  doScrollToContact() {
    this.props.closeModal();
    if (typeof this.props.scrollToContact !== "undefined") {
      event.preventDefault();
      this.props.scrollToContact();
      if (window.history && window.history.pushState) {
        history.pushState("", document.title, "#contact");
      }
    }
  }

  navScrollMagic() {
    var controllerX = new ScrollMagic.Controller({
      globalSceneOptions: { triggerHook: 0 }
    });
    var logoScene = new ScrollMagic.Scene({
      triggerElement: "body",
      offset: 20
    })
      .setClassToggle("header", "headerScroll")
      .addTo(controllerX);
  }

  render() {
    var baseUrl = this.state.relative ? this.props.relativePath : "";
    var navIsActive = this.state.menuToggled ? "navActive" : "";
    var navToggled = this.state.menuToggled ? "toggled" : "";
    var active = this.state.menuToggled ? "active" : "";

    return (
      <header>
        <div className="headerWrapper">
          <a
            onClick={() => {
              this.doHideNav();
              this.doScrollToHome(event);
            }}
            href={baseUrl + "#home"}
            className="hideText a"
          >
            <FindOut className="websiteLogo" id="websiteLogo" />
          </a>
          <HamburgerIcon
            id="hamburger"
            className={active}
            onClick={() => this.toggleMenu()}
          />
          <nav className={active} onClick={() => this.closeNav()}>
            <ul>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToWho(event);
                }}
              >
                <a href={baseUrl + "#who"}>who</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToRecruitment(event);
                }}
              >
                <a href={baseUrl + "#recruitment"}>recruitment</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToMethodologies();
                }}
              >
                <a href={baseUrl + "#methodologies"}>methodologies</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToInnovation();
                }}
              >
                <a href={baseUrl + "#innovation"}>innovation</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToWhy();
                }}
              >
                <a href={baseUrl + "#why"}>why</a>
              </li>
              <li
                onClick={() => {
                  this.doHideNav();
                  this.doScrollToContact();
                }}
              >
                <a href={baseUrl + "#contact"}>contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Nav;
