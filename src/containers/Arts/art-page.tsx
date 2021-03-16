import '../../assets/styles.scss';
import Navbar from '../../components/navbar';
import { Box } from '@material-ui/core';

const ArtPage = () => (
  <div className="background__placeholder background__placeholder--white">
    <Navbar />
    <Box display="flex">
      <nav></nav>
      <div>
        <img />
      </div>
      <div></div>
    </Box>
  </div>
);

export default ArtPage;
