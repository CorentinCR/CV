import React, { Component } from "react";

export default class Project extends Component {
  state = {
    showInfo: false,
  };
  //ouvre et ferme la fenetre info
  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo,
    });
  };

  render() {
    let { name, languagesIcons, source, info, picture } = this.props.item;
    return (
      <div className="project">
        {/* les projets */}
        <div className="icons">
          {languagesIcons.map((icon) => (
            <i className={icon} key={icon}></i>
          ))}
        </div>
        <h3>{name}</h3>
        <img src={picture} alt="" onClick={this.handleInfo} />
        <span className="infos" onClick={this.handleInfo}>
          <i className="fas fa-plus-circle"></i>
        </span>
        {/* fenetre info */}
        {this.state.showInfo && (
          <div className="showInfos">
            <div className="infosContent">
              <div className="head">
                <h2>{name}</h2>
                <div className="sourceCode">
                  <a
                    href={source}
                    rel="noopener noreferrer"
                    className="button"
                    target="_blank"
                  >
                    Code source
                  </a>
                </div>
              </div>
              <p className="text">{info}</p>
              <div className="button return" onClick={this.handleInfo}>
                retourner sur la page
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
