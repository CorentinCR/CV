import React from "react";
import Navigation from "../components/Navigation";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Contact = () => {
  return (
    <div className="contact">
      <Navigation />
      <div className="contactContent">
        <div className="header">
          <div className="contactBox">
            <h1>Contactez-moi</h1>
            <ul className="infocontact">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Péronne</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <CopyToClipboard text="0603427769">
                  <span
                    className="clickInput"
                    onClick={() => {
                      alert("Numéro de téléphone copié !");
                    }}
                  >
                    06 03 42 77 69
                  </span>
                </CopyToClipboard>
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <CopyToClipboard text="corentin.carette80@gmail.com">
                  <span
                    className="clickInput"
                    onClick={() => {
                      alert("adresse email copié !");
                    }}
                  >
                    corentin.carette80@gmail.com
                  </span>
                </CopyToClipboard>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
