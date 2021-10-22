import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <div className="logo">
        <a href="https://vybe-a-music-player.herokuapp.com/">
          <img src="../Vybe-logo.png" alt="Vybe logo" />
        </a>
        <a
          className="logo-text"
          href="https://vybe-a-music-player.herokuapp.com/"
        >
          Vybe
        </a>
      </div>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        Library&nbsp;
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
