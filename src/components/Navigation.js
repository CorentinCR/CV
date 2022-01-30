import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="sidebar">
      <div className="id">
        <div className="idContent">
          <img src="./media/corentin.jpg" alt="profil-pic" />
          <h3>Corentin Carette</h3>
        </div>
      </div>

      <div className="navigation">
        <ul>
          <li>
            <NavLink
              className={(navActive) => (navActive.isActive ? "active" : "")}
              to="/"
            >
              <i className="fas fa-home"></i>
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navActive) => (navActive.isActive ? "active" : "")}
              to="/competence"
            >
              <i className="fas fa-mountain"></i>
              <span>compétence</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              //https://dev.to/gabrlcj/react-router-v6-some-of-the-new-changes-181m  changement de v5 a v6 mais change pas ?
              className={(navActive) => (navActive.isActive ? "active" : "")}
              to="/portfolio"
            >
              <i className="fas fa-images"></i>
              <span>Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navActive) => (navActive.isActive ? "active" : "")}
              to="/contact"
            >
              <i className="fas fa-address-book"></i>
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="socialNetwork">
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/corentin-carette-9819b0193/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>

          <li>
            <a
              href="https://gitlab.com/corentin.carette80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-gitlab"></i>
            </a>
          </li>
          <li>
            <a
              href="https://codepen.io/CorentinCrt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-codepen"></i>
            </a>
          </li>
        </ul>
        <div className="signature">
          <p>fromScratch - 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
