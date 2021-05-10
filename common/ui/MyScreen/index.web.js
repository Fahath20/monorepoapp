import React, { Component } from "react";
import ThemeComponent from "../../../web/ui/themeComponent";
import "../../../web/styles/app.css";
import ThemeSample from "../themeSample";

//This component will render only in web, I made this to show we can add web specific UI rendering when needed
class WebOnly extends Component {

  render() {
    const {language} = this.props
    return (
      <div className="Theme">
        <ThemeSample/>

        <ThemeComponent/>
      </div>
    );
  }
}

export default WebOnly;
