import '../../assets/styles.scss';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { labels } from '../../assets/labels';
import { images } from '../../containers/Arts/background-images';

const getRandom = (max) => Math.floor(Math.random() * Math.floor(max));

const ArtPage = () => {
  const { id }: { id: number } = useParams();
  const random = getRandom(9);
  const smallImgTop = `background__img background__img--small ${images[id].class} element__active`;
  const smallImgRandom = `background__img background__img--small ${images[random].class}`;
  const bigImg = `background__img background__img--big ${images[id].class}`;
  const artName = images[id].name;
  const artInfo = images[id].describtion;
  const artTool = images[id].tool;
  const artDate = images[id].date;

  return (
    <div className="background__placeholder background__placeholder--white">
      <Navbar />
      <Box display="flex">
        <div className="position__placeholder">
          <nav>
            <div className={smallImgTop} />
            <div className={smallImgRandom} />
          </nav>
        </div>
        <div>
          <div className={bigImg} />
        </div>
        <div className="background__black background__img--big">
          <div className="position__labels">
            <h1 className="labels__uppercase">{artName}</h1>
            <div className="element__line element__line--lifted" />
            <p>{artInfo}</p>
            <h4>
              {labels.tool}
              {artTool}
            </h4>
            <h4>
              {labels.madeAt}
              {artDate}
            </h4>
          </div>
        </div>
      </Box>
      <Footer />
    </div>
  );
};

export default ArtPage;
