import { labels } from '../assets/labels';
import '../assets/styles.scss';

const Header = () => (
  <header>
    <div className="labels">
      <span>{labels.the} </span>
      <span className="labels__logo">{labels.noy} </span>
      <span className="labels__logo--gold">{labels.art}</span>
    </div>
  </header>
);

export default Header;
