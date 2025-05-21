import styled from 'styled-components';
import { GrDeploy } from "react-icons/gr";
import { GiMuscleUp } from "react-icons/gi";
import Form from './Form';
import { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';

// נתיבי התמונות למצגת
const slideshowImages = [
  '/סרטון מתנגן/3.1.jpeg',
  '/סרטון מתנגן/3.2.jpeg',
  '/סרטון מתנגן/3.3.jpeg',
  '/סרטון מתנגן/3.4.jpeg',
  '/סרטון מתנגן/3.5.jpeg',
  '/סרטון מתנגן/3.7.jpeg',
];

const Modaah = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // פונקציה למעבר לתמונה הבאה
  const nextImage = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === slideshowImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // החלפת תמונות אוטומטית
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextImage();
    }, 3000); // מעבר כל 3 שניות
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentImageIndex]);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  return (
    <StyledModaah className="relative py-16" id="services">
      {/* רקע גרדיאנט יפה */}
      <div className="absolute inset-0  to-[#ad8b72] opacity-50"></div>
      
      <div className="relative z-10 px-4 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 items-center mb-12"
        >
          <div className="mb-4 text-gray-800" style={{ transform: 'translateY(-4.57191px)' }}>
            <h2 
              className="mb-6 text-4xl font-bold md:text-5xl"
              style={{ 
                fontFamily: 'Assistant, sans-serif',
                color: '#858873',
                textShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px',
                lineHeight: 1.2
              }}
            >
              שירותי הקליניקה
            </h2>
            <div className="absolute bottom-0 left-0 right-0 h-3 bg-gradient-to-r from-white via-[#858873] to-[#858873] rounded-full transform translate-y-2"></div>
          </div>
          <p className="mx-auto max-w-2xl text-lg text-center" style={{ color: '#858873' }}>
            מגוון טיפולים מותאמים אישית לצרכים שלך, בסביבה מרגיעה ומקצועית
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div 
          className="grid grid-cols-1 gap-4 mb-4 w-full md:grid-cols-3"
          style={{
            margin: '0 -50vw',
            width: '100vw',
            position: 'relative',
            left: '50%',
            right: '50%',
            marginLeft: '-50vw',
            marginRight: '-50vw',
            padding: '0 10%'
          }}
        >

        </div>

        <div className="mt-12 text-center">
          <Button 
            onClick={handleOpenForm}
          >
            לתיאום תור
          </Button>
        </div>
      </div>
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
      
      {/* יצירת אפקט של עיטורים */}
      <div className="overflow-hidden absolute right-0 bottom-0 left-0 h-16">
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-r from-[#c3c8c1] via-[#98a27d] to-[#656d55] opacity-20"
             style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 75% 100%, 50% 0, 25% 100%, 0 0)' }}></div>
      </div>
    </StyledModaah>
  );
};

const StyledModaah = styled.section`
  /* סגנון המצגת בתוך הקארד */
  .slideshow-wrapper {
    height: 100%;
    width: 100%;
    background: rgba(195, 200, 193, 0.3);
    border-radius: 12px;
    overflow: hidden;
    position: relative;
  }

  .slideshow-image-wrapper {
    width: 95%;
    height: 95%;
    margin: 2.5%;
    position: relative;
    overflow: hidden;
    border-radius: 8px;
  }

  .slideshow-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 0.5s ease;
  }

  .slideshow-controls {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    z-index: 10;
  }

  .control-button {
    background-color: rgba(166, 165, 144, 0.5);
    color: white;
    border: none;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 20;

    &:hover {
      background-color: rgba(166, 165, 144, 0.8);
      transform: scale(1.1);
    }
  }

  .slideshow-indicators {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
  }

  .indicator {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: rgba(254, 251, 232, 0.3);
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;

    &.active {
      background-color: #fefbe8;
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    .slideshow-image-wrapper {
      height: 300px;
    }
    
    .control-button {
      width: 35px;
      height: 35px;
    }
    
    .indicator {
      width: 8px;
      height: 8px;
    }
  }

  .video-card {
    position: relative;
    height: 400px;
    border-radius: 16px;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0px 10px 30px rgba(166, 165, 144, 0.2);
    transition: all 0.3s ease;
    padding: 8px;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0px 15px 35px rgba(166, 165, 144, 0.4);

      .service-video, .slideshow-image {
        transform: scale(1.03);
      }

      .text-overlay {
        padding-bottom: 2.5rem;
      }
    }
  }

  .video-container {
    height: 100%;
    width: 100%;
    background: rgba(195, 200, 193, 0.3);
    border-radius: 12px;
    overflow: hidden;

    .service-video {
      width: 95%;
      height: 95%;
      margin: 2.5%;
      object-fit: cover;
      object-position: center;
      transition: transform 0.5s ease;
      border-radius: 8px;
    }
  }

  .text-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    color: white;
    transition: all 0.3s ease;

    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
      font-weight: 600;
      text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    }

    p {
      font-size: 1.1rem;
      opacity: 0.95;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    }
  }

  .icon-container {
    display: inline-flex;
    animation: floatAndRotate 3s ease-in-out infinite;
  }

  .achievement-icon {
    width: 24px;
    height: 24px;
    color: white;
    filter: invert(1);
  }

  .muscle-icon {
    width: 24px;
    height: 24px;
    color: white;
    filter: invert(1);
  }

  @keyframes floatAndRotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    .video-card {
      height: 300px;
    }

    .text-overlay {
      padding: 1.5rem;
      
      h3 {
        font-size: 1.3rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

export default Modaah;
