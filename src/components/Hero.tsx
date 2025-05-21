import styled from 'styled-components';
import Form from './Form';
import { useState } from 'react';
import Button from './Button';
import { motion } from 'framer-motion';

// אנימציות
const animations = {
  fadeInUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }
};

const Hero = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  return (
    <StyledHero>
      <div className="hero-content">
        <motion.div 
          className="text-content"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title>מרכז לרפואה משלימה ועיסויים לנשים</Title>
          <Subtitle>חוויית עיסוי מותאמת אישית לנשים – לשחרור, רוגע וריפוי טבעי</Subtitle>
          <Button onClick={handleOpenForm}>לחצי עכשיו לקביעת תור</Button>
        </motion.div>
        <motion.div 
          className="image-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <VideoContainer>
              <HeroVideo 
                src="/hero-video.mp4" 
                autoPlay
                loop
                muted
                playsInline
              />
            </VideoContainer>
            <CardText>
              <p>חוויית טיפול ייחודית לגוף ולנפש</p>
            </CardText>
          </Card>
        </motion.div>
      </div>
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </StyledHero>
  );
}

// קומפוננטים מעוצבים
const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  font-weight: 800;
  color: #858873;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
  color: #858873;
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const Card = styled.div`
  position: relative;
  background: rgba(195, 200, 193, 0.8);
  width: 400px;
  height: 400px;
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: 0px 15px 45px rgba(195, 200, 193, 0.3);
  border: 3px solid #fefbe8;

  &:hover {
    transform: rotateY(10deg) translateY(-10px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 0px 50px 10px rgba(195, 200, 193, 0.6);
    z-index: 1;
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    width: 280px;
    height: 320px;
    margin-top: 20px;
  }
`;

const VideoContainer = styled.div`
  position: absolute;
  top: 3%;
  left: 3%;
  width: 94%;
  height: 94%;
  transition: all 0.5s ease;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid rgba(254, 251, 232, 0.7);

  ${Card}:hover & {
    transform: scale(1.02);
  }
`;

const HeroVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: all 0.5s ease;
  transform: scale(1);
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const CardText = styled.div`
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 100%;
  padding: 2rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: #FFFFFF;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  transition: all 0.3s ease;
  text-align: center;
  
  p {
    font-size: 1.4rem;
    font-weight: 700;
    opacity: 1;
    color: #FFFFFF;
  }
  
  ${Card}:hover & {
    bottom: 0;
  }
`;

const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  .hero-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
  }

  .text-content {
    flex: 1;
    text-align: right;
  }

  .image-card {
    flex: 1;
    display: flex;
    justify-content: center;
    perspective: 1000px;
  }

  @media (max-width: 768px) {
    padding-top: 120px;
    min-height: calc(100vh - 50px);
    
    .hero-content {
      flex-direction: column;
      text-align: center;
      padding: 0 16px;
    }

    .text-content {
      text-align: center;
      width: 100%;
    }
  }
`;

export default Hero;