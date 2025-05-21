import styled from 'styled-components';
import Form from './Form';
import { useState, useEffect } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';
import { FaBluesky, FaDove } from "react-icons/fa6";
import Lottie from "lottie-react";
import { TbMassage } from "react-icons/tb";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lord-icon': any;
    }
  }
}

const Services = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [serviceAnimation, setServiceAnimation] = useState(null);

  useEffect(() => {
    fetch('/icons/4.json')
      .then(res => res.text())
      .then(text => {
        try {
          const jsonData = JSON.parse(text);
          setServiceAnimation(jsonData);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch(error => console.error('Error loading animation:', error));
  }, []);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const floatAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const hoverScale = {
    scale: 1.03,
    boxShadow: "0 15px 30px rgba(166, 165, 144, 0.3)",
    transition: { duration: 0.3 }
  };

  return (
    <StyledServices className="" id="services">
      <div className="service-bg-pattern">
        <div className="gradient-overlay"></div>
        <div className="pattern-dots"></div>
        <div className="pattern-lines"></div>
        <div className="decorative-shape shape-1"></div>
        <div className="decorative-shape shape-2"></div>
        <div className="decorative-shape shape-3"></div>
        <div className="decorative-shape shape-4"></div>
      </div>
      <div className="relative z-10 px-4 mx-auto max-w-6xl">
        <motion.div 
          className="flex flex-col gap-4 items-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        > 
          <motion.div
            animate={floatAnimation}
            className="mb-4 text-gray-800"
          >
            {serviceAnimation && (
              <Lottie animationData={serviceAnimation} style={{ width: 200, height: 200 }} />
            )}
          </motion.div>
          <h2 
            className="mb-6 text-4xl font-bold md:text-5xl"
            style={{ 
              fontFamily: 'Assistant, sans-serif',
              color: '#858873',
              textShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px',
              lineHeight: 1.2
            }}
          >
             הטיפולים שלנו 
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-white via-[#858873] to-[#858873] rounded-full mb-6"></div>
          <p className="text-xl md:text-2xl text-center max-w-2xl mb-8" style={{ color: '#858873' }}>
            מגוון טיפולים מקצועיים המותאמים לצרכים הייחודיים שלך
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.div 
            className="service-card"
            variants={fadeInUp}
            whileHover={hoverScale}
          >
            <div className="card-gradient-overlay"></div>
            <div className="card-inner">
              <div className="service-icon-container">
                <FaDove className="service-icon" style={{ color: 'white' }} />
              </div>
              <h3 className="service-title" style={{ color: 'white' }}>עיסויים רפואיים וטיפוליים</h3>
              <div className="service-divider"></div>
              <ul className="service-list">
                <li>
                  <span className="service-bullet"></span>
                  עיסוי רפואי
                </li>
                <li>
                  <span className="service-bullet"></span>
                  עיסוי רקמות עמוק
                </li>
                <li>
                  <span className="service-bullet"></span>
                  עיסוי לנשים בהריון
                </li>
                <li>
                  <span className="service-bullet"></span>
                  עיסוי לאחר לידה
                </li>
                <li>
                  <span className="service-bullet"></span>
                  עיסוי לימפטי
                
                </li>
                <li>
                  <span className="service-bullet"></span>
                  עיסוי לספורטאיות
                </li>
                <li>
                  <span className="service-bullet"></span>
                  עיסוי לכאבי גב וצוואר
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="service-card"
            variants={fadeInUp}
            whileHover={hoverScale}
          >
            <div className="card-gradient-overlay"></div>
            <div className="card-inner">
              <div className="service-icon-container">
                <FaBluesky className="service-icon" style={{ color: 'white' }} />
              </div>
              <h3 className="service-title" style={{ color: 'white' }}>עיסויים מסורתיים ומרגיעים</h3>
              <div className="service-divider"></div>
              <ul className="service-list">
                <li>
                  <span className="service-bullet"></span>
                  עיסוי שוודי
                </li>
                <li>
                  <span className="service-bullet"></span>
                  עיסוי הוליסטי
                </li>
                <li>
                  <span className="service-bullet"></span>
                  עיסוי באבנים חמות
                </li>
                <li>
                  <span className="service-bullet"></span>
                  עיסוי לומי-לומי
                  <span className="service-note">(מהוואי)</span>
                </li>
                <li>
                  <span className="service-bullet"></span>
                  עיסוי תאילנדי
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="service-card"
            variants={fadeInUp}
            whileHover={hoverScale}
          >
            <div className="card-gradient-overlay"></div>
            <div className="card-inner">
              <div className="service-icon-container">
                <TbMassage className="service-icon" style={{ color: 'white' }} />
              </div>
              <h3 className="service-title" style={{ color: 'white' }}>שיטות מיוחדות ועיסויים משולבים</h3>
              <div className="service-divider"></div>
              <ul className="service-list">
                <li>
                  <span className="service-bullet"></span>
                  עיסוי כוסות רוח
                </li>
                <li>
                  <span className="service-bullet"></span>
                  רפלקסולוגיה
                </li>
                <li>
                  <span className="service-bullet"></span>
                  עיסוי משולב
                </li>
                <li>
                  <span className="service-bullet"></span>
                  עיסוי קרקפת ופנים
                </li>
                <li>
                  <span className="service-bullet"></span>
                  שיאצו
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <Button onClick={handleOpenForm}>לתיאום תור</Button>
        </motion.div>
      </div>
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </StyledServices>
  );
};

const StyledServices = styled.section`
  position: relative;
  padding: 100px 0;
  overflow-x: hidden;

  .service-bg-pattern {
    position: absolute;
    inset: 0;
    width: 100vw;
    left: 50%;
    transform: translateX(-50%);
    overflow: hidden;
  }

  .gradient-overlay,
  .pattern-dots,
  .pattern-lines,
  .decorative-shape {
    position: absolute;
    inset: 0;
    width: 100vw;
    left: 50%;
    transform: translateX(-50%);
  }

  .gradient-overlay {
    background: linear-gradient(135deg, rgba(254, 251, 232, 0.9), rgba(193, 166, 147, 0.9));
    z-index: 2;
  }

  .pattern-dots {
    background-image: radial-gradient(rgba(139, 69, 19, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    z-index: 1;
  }

  .pattern-lines {
    background-image: repeating-linear-gradient(
      -45deg,
      rgba(139, 69, 19, 0.05) 0px,
      rgba(139, 69, 19, 0.05) 1px,
      transparent 1px,
      transparent 10px
    );
    z-index: 1;
  }

  .decorative-shape {
    opacity: 0.1;
    z-index: 1;
  }

  .shape-1 {
    background: radial-gradient(circle at 0% 0%, #8B4513 0%, transparent 50%);
  }

  .shape-2 {
    background: radial-gradient(circle at 100% 0%, #8B4513 0%, transparent 50%);
  }

  .shape-3 {
    background: radial-gradient(circle at 100% 100%, #8B4513 0%, transparent 50%);
  }

  .shape-4 {
    background: radial-gradient(circle at 0% 100%, #8B4513 0%, transparent 50%);
  }

  .cta-button {
    font-size: 1.25rem;
    padding: 1rem 2.5rem;
    border-radius: 50px;
    box-shadow: 0 10px 20px rgba(166, 165, 144, 0.25);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 25px rgba(166, 165, 144, 0.3);
    }
  }

  .service-card {
    position: relative;
    background: #a6a590;
    backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    overflow: hidden;
    padding: 2px;
    height: 100%;
    box-shadow: 0 10px 30px rgba(166, 165, 144, 0.25);
    transition: all 0.3s ease;
    transform-style: preserve-3d;
    perspective: 1000px;
  }

  .card-gradient-overlay {
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #656d55, transparent);
    opacity: 0.1;
    border-radius: 20px;
    z-index: 0;
    transition: opacity 0.3s ease;
  }

  .service-card:hover .card-gradient-overlay {
    opacity: 0.2;
  }

  .card-inner {
    background: rgba(195, 200, 193, 0.5);
    border-radius: 19px;
    height: 100%;
    padding: 40px 30px;
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .service-icon-container {
    background: linear-gradient(135deg, #656d55, #98a27d);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 25px;
    box-shadow: 0 5px 15px rgba(166, 165, 144, 0.3);
    position: relative;
    z-index: 2;
    
    &::after {
      content: '';
      position: absolute;
      width: 90px;
      height: 90px;
      border-radius: 50%;
      border: 2px solid rgba(166, 165, 144, 0.3);
      animation: pulse 2s infinite;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.8;
    }
    70% {
      transform: scale(1.1);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }

  .service-icon {
    font-size: 35px;
    color: white;
  }

  .service-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: white;
    text-align: center;
    margin-bottom: 20px;
  }

  .service-divider {
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, transparent, white, transparent);
    margin-bottom: 25px;
  }

  .service-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .service-list li {
    display: flex;
    align-items: flex-start;
    font-size: 18px;
    font-weight: 500;
    color: white;
    line-height: 1.4;
    position: relative;
    padding-right: 25px;
  }

  .service-bullet {
    position: absolute;
    right: 0;
    top: 10px;
    width: 10px;
    height: 10px;
    background-color: white;
    border-radius: 50%;
    transform: translateY(-50%);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }

  .service-note {
    font-size: 15px;
    color: white;
    opacity: 0.8;
    margin-right: 5px;
  }

  @media (max-width: 768px) {
    padding: 70px 0;
    
    .service-card {
      margin-bottom: 30px;
    }
    
    .card-inner {
      padding: 30px 20px;
    }
    
    .service-title {
      font-size: 1.5rem;
    }
    
    .service-list li {
      font-size: 16px;
    }
    
    .service-icon-container {
      width: 70px;
      height: 70px;
      
      &::after {
        width: 80px;
        height: 80px;
      }
    }
    
    .service-icon {
      font-size: 30px;
    }
  }
`;

export default Services;