import React from 'react';
import { Box } from '@material-ui/core';
import { labels } from '../../assets/labels';
import '../../assets/styles.scss';

const Landing = () => (
  <div className="background__placeholder">
    <div className="position__top">
      <button className="element__button--about">{labels.about}</button>
      <div className="element__icons">
        <i className="far fa-envelope" />
        <i className="fab fa-facebook" />
        <i className="fab fa-pinterest" />
        <i className="fab fa-instagram" />
        <i className="fab fa-youtube" />
      </div>
    </div>

    <div className="position__bottom">
      <div className="position__bottom--on-line">
        <header>
          <span className="labels">
            {labels.the}
            <span className="labels__logo">{labels.noy}</span>
            {labels.space}
            <span className="labels__logo--gold">
              {labels.art}
              <i className="fab fa-facebook-messenger" />
            </span>
          </span>
        </header>

        <Box display="flex">
          <button className="element__button--gallery">
            {labels.seeArts}
            <i className="fas fa-angle-double-right" />
          </button>
        </Box>
      </div>
      <div className="element__line-bottom" />
    </div>
  </div>
);

export default Landing;
