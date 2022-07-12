import './Modal.css'

const Modal = props => {

  return (
    <div className={`modal ${props.show ? 'show' : ''}`}>
      <div className='modal-content'>
        <div className='modal-body'>
          < video id="Exercise-vid" className='Adjust-exercise-gif' width="750" height="500" autoPlay={true} muted playsInline src={props.src} alt={props.alt} type="video/mp4">
          </video>
        </div>
          <button onClick={props.onClose} className='close'><i className="fa-solid fa-xmark" ></i></button>
      </div>
    </div>
  );
}

export default Modal
