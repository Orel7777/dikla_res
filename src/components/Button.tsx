import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ 
  onClick, 
  children, 
  className = '',
  type = "button"
}) => {
  return (
    <StyledButton 
      type={type}
      className={`${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(131, 139, 112, 0.4)' }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled(motion.button)`
  min-width: 120px;
  position: relative;
  cursor: pointer;
  padding: 12px 24px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  border-radius: 50px;
  background: linear-gradient(90deg, #838b70, #838b70, #838b70);
  background-size: 200% auto;
  color: white;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(131, 139, 112, 0.3);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  &:hover {
    color: white;
    background-position: right center;
  }
`;

export default Button; 