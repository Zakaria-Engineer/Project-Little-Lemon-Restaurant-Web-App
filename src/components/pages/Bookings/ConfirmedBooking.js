import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ConfirmedBooking = () => {
  return (
    <div className="container confirmed-booking">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Your reservation has been successfully confirmed!</h2>
      <p>We have sent you an email containing all the details of your booking.</p>
    </div>
  );
};

export default ConfirmedBooking;
