import React from 'react';
import './quiSommesNous.scss';

const QuiSommesNous = () => (
  <div className="quiSommesNous">
    <div className="intro">
      <h1> La team de jardiniers</h1>
      <p>
        C'est l'histoire d'une idée qui a pris racine au
        seins d'une équipe en reconversion professionnelle ! <br />
        Claudia, Fouzia, Jonathan, Mathieu et Paul, <br />
        on voulu mettre en pratique leurs connaissances
        fraichement acquises durant leur formation chez O'clock
        au services des jardiniers (novices ou confirmés), afin de leur proposer un outils
        de gestion pour leur potager.
      </p>
    </div>
    <div className="team-front">
      <h2>Team Front</h2>
      <div className="team-dev">
        <div className="dev">
          <img src="" alt="avatar" />
          <h3>Claudia</h3>
          <p>Product Owner</p>
        </div>
        <div className="dev">
          <img src="" alt="avatar" />
          <h3>Fouzia</h3>
          <p> Lead Dev</p>
        </div>
        <div className="dev">
          <img src="" alt="avatar" />
          <h3>Jonathan</h3>
          <p>Referent technique</p>
        </div>
      </div>
    </div>
    <div className="team-back">
      <h2>Team back</h2>
      <div className="team-dev">
        <div className="dev">
          <img src="" alt="avatar" />
          <h3>Mathieu</h3>
          <p>Scrum Master</p>
        </div>
        <div className="dev">
          <img src="" alt="avatar" />
          <h3>Mathieu</h3>
          <p>Lead Dev</p>
        </div>
      </div>
    </div>
  </div>
);

export default QuiSommesNous;
