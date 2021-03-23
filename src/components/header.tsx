import { labels } from '../assets/labels';
import '../assets/styles.scss';

const Header = () => (
  <header>
    <span className="labels">
      {labels.the}
      <span className="labels__logo">{labels.noy}</span>
      {labels.space}
      <span className="labels__logo--gold">
        {labels.art}
        {/* <i className="fab fa-facebook-messenger" /> */}
        {/* <i className="fa fa-chevron-circle-left" /> */}
      </span>
    </span>
  </header>
);

export default Header;
