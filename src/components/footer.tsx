import '../assets/styles.scss';
import SMIcons from './icons';

const Footer = () => (
  <div className="position__footer">
    <div className="element__line--footer" />
    <div className="position">
      <h5 className="labels__footer">THANK YOU FOR VISITING ME!</h5>
      <div className="position__footer--icons">
        <SMIcons />
      </div>
    </div>
  </div>
);

export default Footer;