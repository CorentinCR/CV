import React from "react";

const Hobbies = () => {
  return (
    <div className="hobbies">
      <h3>Intérêts</h3>
      <ul>
        <li className="hobby">
          <i className="fas fa-dumbbell">
            <span>Musculation</span>
          </i>
        </li>
        <li className="hobby">
          <i class="fas fa-running">
            <span>Badminton</span>
          </i>
        </li>
        <li className="hobby">
          <i className="fab fa-bitcoin">
            <span>Crypto-monnaies</span>
          </i>
        </li>
        <li className="hobby">
          <i class="fas fa-headset">
            <span>Jeux Vidéo</span>
          </i>
        </li>
      </ul>
    </div>
  );
};

export default Hobbies;
