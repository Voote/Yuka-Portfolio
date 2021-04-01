import '../../assets/styles.scss';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Box } from '@material-ui/core';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { labels } from '../../assets/labels';
import { images } from '../../containers/Arts/background-images';

const getRandom = (max: number) => Math.floor(Math.random() * Math.floor(max));

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
    <div className="background__placeholder background__placeholder--black">
      <Navbar />
      <Box display="flex">
        <div className="background__art">
          <div className="position__artwork">
            <nav>
              <div className={smallImgTop} />
              <div className={smallImgRandom} />
            </nav>
          </div>
          <div className={bigImg} />
        </div>
        <div className="background__black background__img--big position__labels">
          <div className="position__bottom--on-line">
            <Box display="flex" className="element__icons--hover">
              <Link to="/arts">
                <i className="far fa-arrow-alt-circle-left fa-2x position__labels--icon" />
              </Link>
              <h1 className="labels__uppercase labels__light labels__light--name position__labels--name">
                {artName}
              </h1>
            </Box>
            <div className="element__icons--gold">
              <Box display="flex">
                <a href="/">
                  <i className="fab fa-pinterest fa-2x position__labels--icon" />
                </a>
                <a href="/">
                  <i className="fab fa-instagram fa-2x position__labels--icon " />
                </a>
              </Box>
            </div>
          </div>
          <div className="element__line element__line--lifted" />
          <span className="labels__info">
            <p className="labels__light">{artInfo}</p>
            <h4>
              {labels.tool}
              {artTool}
            </h4>
            <h4>
              {labels.madeAt}
              {artDate}
            </h4>
          </span>
        </div>
      </Box>
      <Footer />
    </div>
  );
};

export default ArtPage;
