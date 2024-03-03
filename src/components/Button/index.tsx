import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ButtonProps {
  label: string;
  icon?: any;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, icon = '', onClick, className = '' }) => {
  return (
    <button className={`cool-button ${className}`} onClick={onClick}>
      {label}
      {icon && 
        <FontAwesomeIcon
          className="icon"
          icon={icon}
        />
      }
    </button>
  );
};

export default Button;
