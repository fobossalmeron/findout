import React, { Component } from "react";

class MethodModal extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log(this.props.method);
  }

  returnList(list) {
    for (var i = 0; i < list.length; i++) {
      <li />;
    }
  }

  render() {
    var method = this.props.method;
    var blueList = !method.special
      ? method.blues.map((blue, index) => (
          <li key={"blue" + index} dangerouslySetInnerHTML={{ __html: blue }} />
        ))
      : null;
      
    var blackList =
      !method.special && method.blacks
        ? method.blacks.map((black, index) => (
            <li
              key={"black" + index}
              dangerouslySetInnerHTML={{ __html: black }}
            />
          ))
        : null;

    var generalText = method.general ? (
      <div className="special" dangerouslySetInnerHTML={{ __html: method.general }} />
    ) : null;

    var allInfo = (
      <div>
        <p>What find:out provides:</p>
        <ul>{blueList}</ul>
        <p dangerouslySetInnerHTML={{ __html: method.general }} />
        <ul>{blackList}</ul>
      </div>
    );
    var specialBox =
      this.props.method.special !== undefined ? generalText : allInfo;
    return (
      <div className={`methodModal ${this.props.className}`}>
        <a className="close" onClick={() => this.props.closeModal()} />
        <a className="next" onClick={() => this.props.nextModal(method)} />
        <a className="next prev" onClick={() => this.props.prevModal(method)} />
        {method.icon}
        <h3 dangerouslySetInnerHTML={{ __html: method.title }} />
        {specialBox}
      </div>
    );
  }
}

export default MethodModal;
