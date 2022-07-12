import './Modal.css'

const Modal = props => {

  // function restartVideo(){
  //   const video = document.querySelector('video');
  //   video.pause();
  //   video.currentTime = 0;
  //   video.load();
  // }

  return (
    <div className={`modal ${props.show ? 'show' : ''}`}>
      <div className='modal-content'>
        <div className='modal-body'>
          {/* <img src={props.src} className='Adjust-exercise-gif' alt={props.alt} /> */}
          < video id="Exercise-vid" className='Adjust-exercise-gif' width="750" height="500" autoPlay={true} muted playsInline src={props.src} alt={props.alt} type="video/mp4">
          </video>
        </div>
          <button onClick={props.onClose} className='close'><i className="fa-solid fa-xmark" ></i></button>
      </div>
    </div>
  );
}

export default Modal
