import './Modal.css'

const Modal = props => {
  const img = document.querySelector('img')
  setTimeout(() => {
    img.src = `${img.src.replace(/\?.*$/,"")}?x=${Math.random()}`;
  }, 0)

  return (
    <div className={`modal ${props.show ? 'show' : ''}`}>
      <div className='modal-content'>
        <div className='modal-body'>
          <img src={props.src} className='Adjust-exercise-gif' alt={props.alt} />
        </div>
          <button onClick={props.onClose} className='close'><i className="fa-solid fa-xmark" ></i></button>
      </div>
    </div>
  );
}

export default Modal
