import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import  {useDarkMode} from "../components/useDarkMode"
import { GlobalStyles } from "../components/Globalstyle";
import { lightTheme, darkTheme } from "../components/Themes"
import Toggle from "../components/Toggler"
//import "../styles/app.css";
import {dummyData} from "../../common/utils";
import CardList from "../components/CardList";

const ThemeComponent= () => {

  
  const [videos, setVideos] = useState([]);
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  

  useEffect(() => {
    const timer = setTimeout(() => {
      setVideos(dummyData);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if(!mountedComponent) return <div/>

  return (
    <div>
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
        <div className="App">

          <Toggle theme={theme} toggleTheme={themeToggler} />
          {
            videos.map((list, index) => {
              return (
                <section key={index}>
                  <h2 className="section-title">{list.section}</h2>
                  <CardList list={list} />
                  <hr />
                </section>
              );
            })}
        </div>
      </>
    </ThemeProvider>
    </div>
  );
};

export default ThemeComponent;
