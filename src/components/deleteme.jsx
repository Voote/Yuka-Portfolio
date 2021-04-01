import { labels } from '../assets/labels';
import '../assets/styles.scss';

const Header = () => {
  const noy = labels.noy;
  const art = labels.art;
  const spanNoy = <span className="labels__logo">dupa</span>;
  const spanArt = <span className="labels__logo--gold">{`${art}`}</span>;
  const result = `${labels.the} ${spanNoy} ${spanArt}`;
  // console.log(JSON.stringify(spanNoy));
  return (
    <header>
      <div className="labels">{result}</div>
    </header>
  );
};

export default Header;
