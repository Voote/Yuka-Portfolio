// import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';
import Header from '../../components/header';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { labels } from '../../assets/labels';
import '../../assets/styles.scss';

const AboutMe = () => (
  <div className="background__placeholder background__placeholder--white">
    <Navbar />
    <Box display="flex">
      <div className="background__art background__img background__img--about background__img--noy" />
      <div className="background__black background__img--big position__labels">
        <div className="position__bottom--on-line">
          <Header />
          <Box display="flex" className="element__icons--gold">
            <a href="/">
              <i
                className="fab
                  fa-facebook-messenger
                fa-2x 
              position__labels--icon"
              />
            </a>
            <a href="/">
              <i
                className="far 
                  fa-envelope fa-2x 
              position__labels--icon"
              />
            </a>
          </Box>
        </div>
        <div className="element__line element__line--lifted" />
        <span className="labels__placeholder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
            ullamcorper sit amet risus nullam eget felis. Sed odio morbi quis
            commodo odio aenean. Tincidunt tortor aliquam nulla facilisi cras
            fermentum odio eu. Id velit ut tortor pretium viverra suspendisse
            potenti nullam ac. Sed egestas egestas fringilla phasellus faucibus
            scelerisque eleifend donec. Eget velit aliquet sagittis id
            consectetur purus ut faucibus pulvinar. Justo nec ultrices dui
            sapien eget mi proin. Ultricies lacus sed turpis tincidunt id
            aliquet. Vel risus commodo viverra maecenas accumsan. Nec dui nunc
            mattis enim ut tellus.
          </p>
          <p>
            Eu ultrices vitae auctor eu augue ut lectus. Hac habitasse platea
            dictumst vestibulum rhoncus. Vulputate ut pharetra sit amet aliquam
            id diam maecenas. Phasellus vestibulum lorem sed risus. In est ante
            in nibh. Quis hendrerit dolor magna eget est lorem. Porttitor eget
            dolor morbi non arcu. Integer malesuada nunc vel risus commodo
            viverra maecenas accumsan lacus. Leo in vitae turpis massa.
            Consectetur adipiscing elit pellentesque habitant morbi tristique.
            Amet cursus sit amet dictum sit.
          </p>
          <p>
            accumsan lacus. Leo in vitae turpis massa. Consectetur adipiscing
            elit pellentesque habitant morbi tristique. Amet cursus sit amet
            dictum sit.
          </p>
        </span>
      </div>
    </Box>
    <Footer />
  </div>
);

export default AboutMe;
