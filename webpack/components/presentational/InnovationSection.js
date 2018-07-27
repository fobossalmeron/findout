import React, { Component } from "react";
import ReactPlayer from "react-player";
import Modal from "react-modal";
import Graphic3 from "./../../../assets/img/layout/graphic3.svg";

Modal.setAppElement("#app");
class InnovationSection extends Component {
  constructor() {
    super();
    this.state = {
      chosenVideo: ""
    };
    this.doOpenModal = this.doOpenModal.bind(this);
    this.doCloseModal = this.doCloseModal.bind(this);
  }
  doOpenModal(video) {
    this.setState({ chosenVideo: video });
    this.props.openModal();
  }

  doCloseModal() {
    this.props.closeModal();
  }
  render() {
    return (
      <section id="innovation">
        <Graphic3 />
        <h2>innovation: branding & design</h2>
        <p>
          creative solutions, fast and integrated. we offer add-on modules to
          our powerful research methodologies.
        </p>
        <p>
          Our team has designed, innovated and developed amazing products,
          slogans, ads and brands for the world’s biggest brands.
        </p>
        <ul>
          <li><span>Our add-on modules include:</span></li>
          <li>Brand Design</li>
          <li>Innovation Development (service or product)</li>
          <li>Ad & Slogan Development.</li>
        </ul>
        <p>
          <b>
            We have designed brands for KRAFT, bottles for The Coca-Cola
            Company, and slogans for PepsiCo just to mention a few.
          </b>
        </p>
        <Modal
          isOpen={this.props.modalOpen}
          onRequestClose={this.doCloseModal}
          contentLabel="Video Modal"
          className="modal"
          overlayClassName="overlay"
          onClick={this.doCloseModal}
        >
          <a className="close" onClick={this.doCloseModal} />
          <ReactPlayer
            className="video"
            url={`https://vimeo.com/${this.state.chosenVideo}`}
            playing={true}
          />
        </Modal>
        <div className="video" onClick={() => this.doOpenModal(228273116)} />
      </section>
    );
  }
}

export default InnovationSection;
