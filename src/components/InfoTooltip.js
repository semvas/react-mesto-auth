import IconSuccess from '../images/IconSuccess.svg';
import IconError from '../images/IconError.svg';

function InfoTooltip(props) {
  return (
    <div className={`popup ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <img className="popup__status-img" src={`${ props.isSuccess ? IconSuccess : IconError}`} alt="Иконка статуса" />
        <h2 className="popup__status-msg">{`${ props.isSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}`}</h2>
        <button type="button" className="btn popup__close-btn" onClick={props.onClose} />
      </div>
    </div>
  );
}

export default InfoTooltip;