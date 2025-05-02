import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

const UnderConstruction = () => {
  return (
    <div className="container under-construction">
      <div className="icon-container">
        <FontAwesomeIcon icon={faHammer} size="5x" />
      </div>
      <h2 className="construction-title">
        Page Under Construction 🚧
      </h2>
      <p className="construction-message">
        We're working hard to bring you something great. Please check back later!
      </p>
    </div>
  );
};

export default UnderConstruction;
