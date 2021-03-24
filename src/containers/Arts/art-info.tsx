import '../../assets/styles.scss';
import { labels } from '../../assets/labels';

const ArtInfo = ({ imgClass, artName, artDate }) => {
  //   const mouseIn = () => (imgClass = 'dupa');
  return (
    <div className={imgClass}>
      <div
        className="labels__logo 
          labels__uppercase 
          labels__light 
          position__labels--info
          element__child"
      >
        <span className=" labels__logo--gold">{labels.viewDetails}</span>
        <h4>{artName}</h4>
        <span className="element__dimmed">{artDate}</span>
      </div>
    </div>
  );
};

export default ArtInfo;
