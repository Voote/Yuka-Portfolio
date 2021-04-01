import { labels } from '../assets/labels';
import '../assets/styles.scss';

const Header = () => {
  const spanNoy = <span className="labels__logo">{labels.noy}</span>;
  const spanArt = <span className="labels__logo--gold">{labels.art}</span>;
  const result = `${labels.the} ${spanNoy} ${spanArt}`;
  return (
    <header>
      <div className="labels">
        <span>{labels.the} </span>
        <span className="labels__logo">{labels.noy} </span>
        <span className="labels__logo--gold">{labels.art}</span>
      </div>
    </header>
  );
};

export default Header;
