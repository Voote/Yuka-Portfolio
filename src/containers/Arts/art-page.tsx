import '../../assets/styles.scss';
import Navbar from '../../components/navbar';
import { Box } from '@material-ui/core';

const ArtPage = () => (
  <div className="background__placeholder background__placeholder--white">
    <Navbar />
    <Box display="flex">
      <div style={{ marginRight: 'auto', border: '1px solid red' }}>
        <nav>
          <div className="background__img--small background__img--noy" />
          <div className="background__img--small background__img--wanda" />
        </nav>
      </div>
      <div style={{ margin: '1rem' }}>
        <div className="background__img background__img--noy" />
      </div>
      <div style={{ margin: 'auto', padding: '10rem', background: 'black' }}>
        <span>
          <h1>THE NOY</h1>
          <p>It's Yuka, the Noy, she said: Hi!</p>
          <h4>Tool: Photoshop</h4>
          <h4>made at Feb 2021</h4>
        </span>
      </div>
    </Box>
  </div>
);

export default ArtPage;
