import '../../assets/styles.scss';
import { Box } from '@material-ui/core';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { labels } from '../../assets/labels';
import { useParams } from 'react-router-dom';

// const ArtPage = ({ artName, artDescribtion, artTool, artDate }) => (
const ArtPage = () => {
  const { id }: { id: number } = useParams();
  console.log(id);
  return (
    <div className="background__placeholder background__placeholder--white">
      <Navbar />
      <Box display="flex">
        <div style={{ marginRight: 'auto', border: '1px solid red' }}>
          <nav>
            <div className="background__img background__img--left background__img--small background__img--noy" />
            <div className="background__img background__img--small background__img--wanda" />
          </nav>
        </div>
        <div>
          <div className="background__img background__img--big background__img--noy" />
        </div>
        <div className="background__black">
          <span>
            <h1 className="labels__uppercase">The Noy</h1>
            <p>It's Yuka, the Noy, she said: Hi!</p>
            <h4>{labels.tool}Photoshop</h4>
            <h4>{labels.madeAt}Feb 2021</h4>
          </span>
        </div>
      </Box>
      <Footer />
    </div>
  );
};

export default ArtPage;
