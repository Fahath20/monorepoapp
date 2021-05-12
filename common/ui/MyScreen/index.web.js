import React, { Component } from "react";
import ThemeComponent from "../../../web/ui/themeWebOnly";
import "../../../web/styles/app.css";
import ThemeSample from "../themeNative";

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
