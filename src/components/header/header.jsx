import React from "react";
import { inject, observer } from "mobx-react";

import Language from "../language/language";

import "./stylesheets/header.css";

const Header = ({ language }) => (
  <div id="Header">
    <div
      className={
        language.currentLanguage === "es" ? "element current" : "element"
      }
      onClick={() => language.changeLanguageTo("es")}
    >
      <Language resource="CHANGE_SPANISH" />
    </div>
    <div
      className={
        language.currentLanguage === "en" ? "element current" : "element"
      }
      onClick={() => language.changeLanguageTo("en")}
    >
      <Language resource="CHANGE_ENGLISH" />
    </div>
  </div>
);

export default inject("language")(observer(Header));
