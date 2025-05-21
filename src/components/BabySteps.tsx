import { motion } from 'framer-motion';
import { TbMassage } from "react-icons/tb";
import styled from 'styled-components';
import Lottie from "lottie-react";
import { useState, useEffect } from 'react';

const BabySteps = () => {
  const [massageAnimation, setMassageAnimation] = useState(null);
  const [yogaAnimation, setYogaAnimation] = useState(null);

  useEffect(() => {
    // טעינת אנימציית עיסוי
    fetch('/icons/3.json')
      .then(res => res.text())
      .then(text => {
        try {
          const jsonData = JSON.parse(text);
          setMassageAnimation(jsonData);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch(error => console.error('Error loading massage animation:', error));
      
    // טעינת אנימציית יוגה
    fetch('/icons/2.json')
      .then(res => res.text())
      .then(text => {
        try {
          const jsonData = JSON.parse(text);
          setYogaAnimation(jsonData);
        } catch (error) {
          console.error('Error parsing JSON:', error);
        }
      })
      .catch(error => console.error('Error loading yoga animation:', error));
  }, []);

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

  return (
    <StyledBabySteps id="methodology">
      <div className="container">
        <motion.div 
          className="content-wrapper"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="header">
            <h2>הטיפול המושלם - בארבעה שלבים</h2>
            <div className="divider"></div>
            <p className="subtitle">תהליך טיפול מקצועי ומותאם אישית</p>
          </div>

          <div className="steps-grid">
            <motion.div 
              className="step"
              variants={fadeInUp}
            >
              <div className="step-number">1</div>
              <h3>אבחון ראשוני</h3>
              <p>הבנת הצרכים והמטרות שלך</p>
            </motion.div>

            <motion.div 
              className="step"
              variants={fadeInUp}
            >
              <div className="step-number">2</div>
              <h3>תכנית טיפול</h3>
              <p>התאמה אישית של הטיפול</p>
            </motion.div>

            <motion.div 
              className="step"
              variants={fadeInUp}
            >
              <div className="step-number">3</div>
              <h3>טיפול מקצועי</h3>
              <p>ביצוע הטיפול בקפידה</p>
            </motion.div>

            <motion.div 
              className="step"
              variants={fadeInUp}
            >
              <div className="step-number">4</div>
              <h3>מעקב והתאמה</h3>
              <p>התאמת הטיפול לפי הצורך</p>
            </motion.div>
          </div>

          <div className="animation-container">
            {massageAnimation && (
              <Lottie animationData={massageAnimation} style={{ width: 200, height: 200 }} />
            )}
          </div>
        </motion.div>
      </div>
    </StyledBabySteps>
  );
};

const StyledBabySteps = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #f1e6e2, #f1e6e2);
  position: relative;
  overflow: hidden;
  margin: 0 -50vw;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-bottom: 8px solid rgba(255, 255, 255, 0.2);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, transparent 0%, rgba(241, 230, 226, 0.2) 100%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 20px;
    background: linear-gradient(to top, rgba(255, 255, 255, 0.1), transparent);
    pointer-events: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .content-wrapper {
    position: relative;
    z-index: 1;
  }

  .header {
    text-align: center;
    margin-bottom: 60px;
    
    h2 {
      font-size: 2.5rem;
      color: #858873;
      font-weight: 700;
      margin-bottom: 20px;
      text-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .divider {
      width: 120px;
      height: 3px;
      background: linear-gradient(to right, transparent, #858873, transparent);
      margin: 20px auto;
    }

    .subtitle {
      font-size: 1.25rem;
      color: #858873;
      font-weight: 500;
    }
  }

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin: 40px 0;
  }

  .step {
    background: rgba(241, 230, 226, 0.5);
    backdrop-filter: blur(10px);
    border: 2px solid #858873;
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.05);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 20px rgba(133, 136, 115, 0.2);
      background: rgba(241, 230, 226, 0.7);
      border-color: #858873;
      border-width: 3px;
    }

    .step-number {
      width: 50px;
      height: 50px;
      background: linear-gradient(135deg, #858873, #858873);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0 auto 20px;
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
      border: 2px solid white;
    }

    h3 {
      font-size: 1.5rem;
      color: #858873;
      margin-bottom: 15px;
      font-weight: 600;
    }

    p {
      color: #858873;
      line-height: 1.6;
      font-size: 1.1rem;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(241, 230, 226, 0.3), transparent);
      pointer-events: none;
    }
  }

  .animation-container {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  @media (max-width: 768px) {
    padding: 60px 0;

    .header h2 {
      font-size: 2rem;
    }

    .steps-grid {
      gap: 20px;
    }

    .step {
      padding: 20px;
    }
  }

  /* Add sparkle effect */
  .sparkle {
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #f1e6e2;
    animation: sparkle 1.5s infinite;
    opacity: 0.5;
  }

  @keyframes sparkle {
    0% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.5); opacity: 1; }
    100% { transform: scale(1); opacity: 0.5; }
  }
`;

export default BabySteps;