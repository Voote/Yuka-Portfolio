import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { labels } from '../assets/labels';
import SMIcons from './icons';
import Header from './header';
import '../assets/styles.scss';

const Navbar = () => (
  <div className="position__top">
    <div className="labels__navbar">
      <Link to="/landing">
        <Header />
      </Link>
    </div>

    <Box display="flex" className="position__top--navigation">
      <Link to="/arts">
        <button className="element__button--nav">{labels.arts}</button>
      </Link>
      <Link to="/about">
        <button className="element__button--nav">{labels.about}</button>
      </Link>
      <SMIcons />
    </Box>
  </div>
);

export default Navbar;
