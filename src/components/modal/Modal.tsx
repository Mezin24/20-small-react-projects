import { ReactNode, useCallback } from 'react';
import './style.css';

interface ModalProps {
  onClose?: () => void;
  id?: string;
  header?: ReactNode | string;
  body?: ReactNode | string;
  footer?: ReactNode | string;
}

const Modal = ({ id, body, footer, header, onClose }: ModalProps) => {
  const handleClose = useCallback(() => {
    onClose && onClose();
  }, [onClose]);

  return (
    <div className='modal-overlay' id={id ? id : 'modal'} onClick={handleClose}>
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <header>
          {header ? header : 'Header'}
          <button className='modal-close-btn' onClick={handleClose}>
            &times;
          </button>
        </header>
        <div className='modal-body'>{body ? body : 'My modal body'}</div>
        <div className='modal-footer'>
          {footer ? footer : 'My modal footer'}
        </div>
      </div>
    </div>
  );
};
export default Modal;
