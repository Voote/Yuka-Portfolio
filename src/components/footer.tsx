import '../assets/styles.scss';
import SMIcons from './icons';

const Footer = () => (
  <div className="position__footer">
    <div className="element__line element__dimmed" />
    <div className="position element__dimmed">
      <h5 className="labels__footer">THANK YOU FOR VISITING ME!</h5>
      <div className="position__footer--icons">
        <SMIcons />
      </div>
    </div>
  </div>
);

export default Footer;
