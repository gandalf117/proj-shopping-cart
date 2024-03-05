import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import './styles.css';

export interface ModalHandle {
  toggleModal: (show: boolean) => void;
}

interface ModalProps {
  children: React.ReactNode;
}

const Modal = forwardRef<ModalHandle, ModalProps>(({ children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  useImperativeHandle(ref, () => ({
    toggleModal: (show) => {
      setIsOpen(show);
    },
  }));

  return shouldRender ? (
    <div className={`modal-overlay ${isOpen ? 'show' : 'hide'}`} onAnimationEnd={() => { if (!isOpen) setShouldRender(false); }}>
      <div className="modal-content">
        {children}
      </div>
    </div>
  ) : null;
});

export default Modal;
