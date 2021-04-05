import '../../assets/styles.scss';
import { labels } from '../../assets/labels';
import { Box } from '@material-ui/core';

const ArtInfo = ({ imgClass, artName, artDate }) => (
  <Box display="flex">
    <div className={imgClass} />
    <div className="labels__logo labels__uppercase labels__light position__labels--info element element__child">
      <span className=" labels__logo--gold">{labels.viewDetails}</span>
      <h4>{artName}</h4>
      <span className="element__dimmed">{artDate}</span>
    </div>
  </Box>
);

export default ArtInfo;
