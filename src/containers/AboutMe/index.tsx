import { Box } from '@material-ui/core';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import { labels } from '../../assets/labels';
import '../../assets/styles.scss';

const AboutMe = () => (
  <div className="background__placeholder background__placeholder--white">
    <div className="background__placeholder background__about" />
    <Navbar />
    <Box display="flex">
      <div className="background__art" />
      <div className="background__black background__img--big position__labels">
        <div className="position__bottom--on-line">
          <Header />
          <Box
            display="flex"
            className="element__icons--gold position__labels--first"
          >
            <a href="/">
              <i
                className="fab
                  fa-facebook-messenger
                fa-3x 
              position__labels--icon"
              />
            </a>
            <a href="/">
              <i
                className="far 
                  fa-envelope fa-3x 
              position__labels--icon"
              />
            </a>
          </Box>
        </div>
        <div className="element__line element__line--lifted" />
        <span className="labels__placeholder">
          <p>{labels.aboutPar1}</p>
          <p>{labels.aboutPar2}</p>
          <p>{labels.aboutPar3}</p>
        </span>
      </div>
    </Box>
  </div>
);

export default AboutMe;
