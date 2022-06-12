import React, { Component } from "react";
import ProgressBar from "./ProgressBar";

export default class Languages extends Component {
  state = {
    languages: [
      { id: 1, value: "Javascript", xp: 1.2 },
      { id: 2, value: "CSS", xp: 2 },
      { id: 3, value: "HTML", xp: 2 },
      { id: 4, value: "Php", xp: 0.4 },
    ],
    frameworks: [
      { id: 1, value: "React", xp: 0.4 },
      { id: 2, value: "Sass", xp: 1 },
      { id: 3, value: "Node", xp: 0.2 },
      { id: 4, value: "symfony", xp: 0.1 },
    ],
  };
  render() {
    let { languages, frameworks } = this.state;
    return (
      <div className="languagesFrameworks">
        <ProgressBar
          languages={languages}
          className="languagesDisplay"
          title="languages"
        />
        <ProgressBar
          languages={frameworks}
          title="frameworks & bibliothèques"
          className="frameworksDisplay"
        />
      </div>
    );
  }
}
