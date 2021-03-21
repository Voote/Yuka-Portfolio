import { Link } from 'react-router-dom';
import SMIcons from '../../components/icons';
import Header from '../../components/header';
import { labels } from '../../assets/labels';
import '../../assets/styles.scss';

const Landing = () => (
  <div className="background__placeholder">
    <div className="position__top position__top--header">
      <Link to="/about">
        <button className="element__button--nav">{labels.about}</button>
      </Link>
      <SMIcons />
    </div>

    <div className="position__bottom">
      <div className="position__bottom--on-line">
        <Header />

        <Link to="/arts">
          <button className="element__button--gallery">
            {labels.seeArts}
            <i className="fas fa-angle-double-right" />
          </button>
        </Link>
      </div>
      <div className="element__line--bottom" />
    </div>
  </div>
);

export default Landing;
