import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { images } from './background-images';
import '../../assets/styles.scss';

const Arts = () => (
  <div className="background__placeholder background__placeholder--noy">
    <Navbar />
    <div className="position__gallery">
      <Grid container>
        {images.map((element) => (
          <Grid item key={element.id} xs={4}>
            <Link to={`/artpage/${element.id}`}>
              <div className={element.class} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
    <Footer />
  </div>
);

export default Arts;
