import { Link } from 'react-router-dom';
import { Box, Grid } from '@material-ui/core';

import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { labels } from '../../assets/labels';
import { images } from './background-images';
import '../../assets/styles.scss';

const Arts = () => (
  <div className="background__placeholder background__placeholder--noy">
    <Navbar />
    <div className="position__gallery">
      <Grid container>
        {images.map((element) => (
          <Grid item key={element.id} xs={4}>
            <div className="element__gallery">
              <Link to={`/artpage/${element.id}`}>
                <Box display="flex">
                  <div
                    className={`background__img ${element.class} element element__parent`}
                  />
                  <div className="labels__logo labels__uppercase labels__light position__labels--info element element__child">
                    <span className=" labels__logo--gold">
                      {labels.viewDetails}
                    </span>
                    <h4>{element.name}</h4>
                    <span className="element__dimmed">{element.date}</span>
                  </div>
                </Box>
              </Link>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
    <Footer />
  </div>
);

export default Arts;
