import { useState } from 'react';
import { FaWaze, FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineTikTok } from "react-icons/ai";
import { RiMenuUnfoldFill, RiMenuFoldFill } from "react-icons/ri";
import Form from './Form';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';

const StyledMenuItem = styled(motion.a)`
  border: 2px solid rgba(131, 139, 112, 0.3);
  background: linear-gradient(135deg, rgba(241, 230, 226, 0.9), rgba(241, 230, 226, 0.7));
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(216, 180, 119, 0.1), transparent);
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-5px) scale(1.03);
    border-color: rgba(216, 180, 119, 0.8);
    box-shadow: 0 10px 25px rgba(131, 139, 112, 0.15);
  }

  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

const StyledMenu = styled.div`
  .menu-item {
    color: #838b70;
    font-weight: 700;
    position: relative;
    z-index: 1;
    
    &:hover {
      color: #d8b477;
      scale: 1.05;
      background: rgba(241, 230, 226, 0.95);
      box-shadow: 0 8px 20px rgba(216, 180, 119, 0.2);
    }
  }
`;

// אייקונים חברתיים מעודכנים עם צבעים מקוריים
const StyledSocialIcon = styled(motion.a)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin: 0 5px;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  
  &.waze {
    color: #33CCFF;
    svg { fill: #33CCFF; }
  }
  
  &.whatsapp {
    color: #25D366;
    svg { fill: #25D366; }
  }
  
  &.instagram {
    color: #E1306C;
    svg { fill: #E1306C; }
  }
  
  &.facebook {
    color: #4267B2;
    svg { fill: #4267B2; }
  }
  
  svg {
    width: 22px;
    height: 22px;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.2);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
    
    &::before {
      opacity: 1;
    }
    
    svg {
      transform: scale(1.2);
    }
  }
  
  &.waze:hover {
    background-color: rgba(51, 204, 255, 0.1);
    box-shadow: 0 10px 25px rgba(51, 204, 255, 0.5), 0 0 20px rgba(51, 204, 255, 0.3);
  }
  
  &.whatsapp:hover {
    background-color: rgba(37, 211, 102, 0.1);
    box-shadow: 0 10px 25px rgba(37, 211, 102, 0.5), 0 0 20px rgba(37, 211, 102, 0.3);
  }
  
  &.instagram:hover {
    background-color: rgba(225, 48, 108, 0.1);
    box-shadow: 0 10px 25px rgba(225, 48, 108, 0.5), 0 0 20px rgba(225, 48, 108, 0.3);
  }
  
  &.facebook:hover {
    background-color: rgba(66, 103, 178, 0.1);
    box-shadow: 0 10px 25px rgba(66, 103, 178, 0.5), 0 0 20px rgba(66, 103, 178, 0.3);
  }
`;

// Logo container with enhanced styling
const LogoContainer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  &::after {
    content: '';
    position: absolute;
    width: 120%;
    height: 8px;
    bottom: -8px;
    left: -10%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.7), transparent);
    border-radius: 50%;
    opacity: 0.6;
  }
`;

// Enhanced logo image styling
const LogoImage = styled(motion.img)`
  border-radius: 50%;
  filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
`;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const handleOpenForm = () => {
    setIsFormOpen(true);
    setIsMenuOpen(false);
  };

  // הפונקציה מחזירה את הנתיב המתאים בהתאם למיקום הנוכחי
  const getNavigationPath = (anchor: string) => {
    if (isHomePage) {
      return `#${anchor}`;
    } else {
      return `/#${anchor}`;
    }
  };

  return (
    <>
      <header className="fixed top-0 z-40 w-full">
        <div className="shadow-md backdrop-blur-md" style={{
          background: 'rgba(216, 180, 119, 0.95)'
        }}>
          <div className="mx-auto max-w-6xl">
            <nav className="flex justify-between items-center px-4 py-3 md:py-2 lg:px-0">
              {/* Enhanced Logo */}
              <LogoContainer 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Link to="/">
                  <motion.div
                    className="relative"
                    whileHover={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <LogoImage 
                      src="/לוגו_גדול.jpeg" 
                  alt="דקלה מדואלה" 
                      className="p-1 w-auto h-20 z-10"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ 
                        scale: 1, 
                        opacity: 1,
                        transition: { 
                          type: "spring", 
                          stiffness: 300, 
                          damping: 15,
                          delay: 0.2
                        }
                      }}
                      whileHover={{ 
                        scale: 1.15,
                        boxShadow: "0 0 25px rgba(255, 255, 255, 0.5)"
                      }}
                      style={{
                        boxShadow: '0 8px 25px rgba(216, 180, 119, 0.4)',
                        border: '3px solid rgba(255, 255, 255, 0.8)',
                        background: 'linear-gradient(135deg, rgba(216, 180, 119, 0.9), rgba(216, 180, 119, 0.8))'
                      }}
                    />
                    {/* Decorative ring around logo */}
                    <motion.div 
                      className="absolute top-0 left-0 right-0 bottom-0 rounded-full -z-10"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: [0.5, 0.8, 0.5], 
                        scale: [0.9, 1.05, 0.9],
                        transition: { 
                          repeat: Infinity,
                          duration: 3,
                          ease: "easeInOut"
                        }
                      }}
                      style={{
                        background: 'radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 70%)',
                        transform: 'translate(-5%, -5%)',
                        width: '110%',
                        height: '110%'
                      }}
                    />
                  </motion.div>
                </Link>
                <motion.span 
                  className="mt-1 text-sm font-semibold text-white"
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  style={{
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
                  }}
                >
                  נעים מאוד - מדואלה דקלה שליט
                </motion.span>
              </LogoContainer>

              {/* Desktop Menu */}
              <div className="hidden gap-8 items-center md:flex">
                {[
                  { name: "שירותים", anchor: "services" },
                  { name: "המלצות", anchor: "testimonials" },
                  { name: "שיטת הטיפול", anchor: "methodology" },
                  { name: "אודות", anchor: "stats" }
                ].map((item, index) => (
                  <motion.a 
                    key={item.name}
                    href={getNavigationPath(item.anchor)}
                    className="relative text-lg font-medium text-white"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover="hover"
                  >
                    {item.name}
                    <motion.span 
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-white to-[#d8b477] rounded-full"
                      initial={{ width: 0 }}
                      variants={{
                        hover: { width: "100%" }
                      }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Mobile Menu Button */}
              <motion.button
                className="relative w-10 h-10 text-white md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="block absolute top-1/2 left-1/2 w-5 transform -translate-x-1/2 -translate-y-1/2">
                  <motion.span 
                    className="absolute top-0 left-0 w-5 h-0.5 bg-current transform"
                    animate={{ 
                      rotate: isMenuOpen ? 45 : 0, 
                      translateY: isMenuOpen ? 8 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span 
                    className="absolute top-1.5 left-0 w-5 h-0.5 bg-current transform"
                    animate={{ 
                      opacity: isMenuOpen ? 0 : 1
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span 
                    className="absolute top-3 left-0 w-5 h-0.5 bg-current transform"
                    animate={{ 
                      rotate: isMenuOpen ? -45 : 0, 
                      translateY: isMenuOpen ? -8 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </span>
              </motion.button>

              {/* Desktop Social Icons and CTA */}
              <div className="hidden items-center space-x-4 md:flex rtl:space-x-reverse">
                <div className="flex space-x-4 rtl:space-x-reverse">
                  <StyledSocialIcon 
                    href="https://waze.com/ul?q=נס ציונה, ישראל" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="waze"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.5 }}
                  >
                    <FaWaze className="w-5 h-5" />
                  </StyledSocialIcon>
                  
                  <StyledSocialIcon 
                    href="https://api.whatsapp.com/message/MATPQKJZYWELF1?autoload=1&app_absent=0" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="whatsapp"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.6 }}
                  >
                    <FaWhatsapp className="w-5 h-5" />
                  </StyledSocialIcon>
                  
                  <StyledSocialIcon 
                    href="https://www.instagram.com/dikla_maduel?utm_source=qr&igsh=MWRiM2JkcWowbGxh" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="instagram"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.7 }}
                  >
                    <FaInstagram className="w-5 h-5" />
                  </StyledSocialIcon>
                  
                  <StyledSocialIcon 
                    href="https://www.facebook.com/profile.php?id=100058313266229" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="facebook"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.8 }}
                  >
                    <FaFacebook className="w-5 h-5" />
                  </StyledSocialIcon>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 15,
                    delay: 0.9
                  }}
                >
                <Button onClick={handleOpenForm}>קביעת תור</Button>
                </motion.div>
              </div>
            </nav>
          </div>
        </div>

        {/* Mobile Menu Fullscreen */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="fixed inset-0 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'linear-gradient(135deg, rgba(241, 230, 226, 0.98), rgba(241, 230, 226, 0.95))'
              }}
            >
              <motion.div 
                className="flex flex-col justify-center items-center px-4 py-2 min-h-screen"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="relative p-6 space-y-5 w-full max-w-md text-center rounded-2xl"
          style={{
                    background: 'linear-gradient(to bottom, rgba(241, 230, 226, 0.8), rgba(241, 230, 226, 0.6))',
                    boxShadow: '0 20px 50px rgba(131, 139, 112, 0.2), inset 0 0 30px rgba(216, 180, 119, 0.2)',
                    border: '2px solid rgba(131, 139, 112, 0.3)',
                    backdropFilter: 'blur(10px)'
          }}
        >
                  <motion.button
                onClick={() => setIsMenuOpen(false)}
                    className="absolute top-3 right-3 p-2 text-[#838b70] rounded-full shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                      background: 'linear-gradient(135deg, rgba(241, 230, 226, 0.95), rgba(241, 230, 226, 0.85))',
                      boxShadow: '0 4px 12px rgba(131, 139, 112, 0.2)',
                      border: '1px solid rgba(216, 180, 119, 0.5)'
                    }}
              >
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2.5" 
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                  </motion.button>

                  <div className="flex flex-col justify-center items-center mb-6">
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                      <motion.img 
                        src="/לוגו_גדול.jpeg" 
                  alt="דקלה מדואלה" 
                        className="p-1 w-24 h-24 rounded-full"
                        whileHover={{ scale: 1.05, rotate: 5 }}
                        style={{
                          boxShadow: '0 8px 25px rgba(216, 180, 119, 0.4)',
                          border: '3px solid rgba(216, 180, 119, 0.8)',
                          background: 'linear-gradient(135deg, rgba(241, 230, 226, 0.9), rgba(241, 230, 226, 0.8))'
                        }}
                      />
                    </Link>
                    <span className="mt-3 text-lg font-semibold text-[#838b70]">
                      נעים מאוד - מדואלה דקלה שליט
                    </span>
              </div>

                  <div className="flex gap-3 justify-center items-center mb-8">
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <RiMenuUnfoldFill className="w-6 h-6 text-[#d8b477]" />
                    </motion.div>
                    <div className="text-2xl font-bold text-[#838b70]" style={{ 
                      textShadow: '0 2px 10px rgba(216, 180, 119, 0.2)',
                      background: 'linear-gradient(90deg, #838b70, #d8b477, #838b70)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundSize: '200% auto',
                      animation: 'gradient 3s linear infinite'
                    }}>תפריט</div>
                    <motion.div
                      initial={{ rotate: 0 }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <RiMenuUnfoldFill className="w-6 h-6 text-[#d8b477]" />
                    </motion.div>
              </div>

                  <StyledMenu className="mb-8 space-y-4">
                    {[
                      { name: "שירותים", anchor: "services" },
                      { name: "המלצות", anchor: "testimonials" },
                      { name: "שיטת הטיפול", anchor: "methodology" },
                      { name: "אודות", anchor: "stats" }
                    ].map((item, index) => (
                      <StyledMenuItem 
                        key={item.name}
                        href={getNavigationPath(item.anchor)} 
                        className="block text-xl font-semibold transition-all text-white py-2.5 px-4 rounded-xl menu-item"
                  onClick={() => setIsMenuOpen(false)}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index, duration: 0.3 }}
                      >
                        {item.name}
                      </StyledMenuItem>
                    ))}
                  </StyledMenu>
              
              {/* Mobile Social Icons */}
                  <div className="flex justify-center mb-8 space-x-8 rtl:space-x-reverse">
                    <StyledSocialIcon 
                  href="https://waze.com/ul?q=נס ציונה, ישראל" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                      className="waze"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.3 }}
                      style={{ boxShadow: '0 5px 15px rgba(51, 204, 255, 0.2)' }}
                    >
                      <FaWaze className="w-6 h-6" />
                    </StyledSocialIcon>
                    
                    <StyledSocialIcon 
                  href="https://api.whatsapp.com/message/MATPQKJZYWELF1?autoload=1&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                      className="whatsapp"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.4 }}
                      style={{ boxShadow: '0 5px 15px rgba(37, 211, 102, 0.2)' }}
                    >
                      <FaWhatsapp className="w-6 h-6" />
                    </StyledSocialIcon>
                    
                    <StyledSocialIcon 
                  href="https://www.instagram.com/dikla_maduel?utm_source=qr&igsh=MWRiM2JkcWowbGxh" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                      className="instagram"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.5 }}
                      style={{ boxShadow: '0 5px 15px rgba(225, 48, 108, 0.2)' }}
                    >
                      <FaInstagram className="w-6 h-6" />
                    </StyledSocialIcon>
                    
                    <StyledSocialIcon 
                  href="https://www.facebook.com/profile.php?id=100058313266229" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                      className="facebook"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 15, delay: 0.6 }}
                      style={{ boxShadow: '0 5px 15px rgba(66, 103, 178, 0.2)' }}
                    >
                      <FaFacebook className="w-6 h-6" />
                    </StyledSocialIcon>
              </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="mt-4"
                  >
                    <motion.button
                      onClick={handleOpenForm}
                      className="px-8 py-3 rounded-full text-white font-bold tracking-wide text-xl"
                      whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(131, 139, 112, 0.3)' }}
                      whileTap={{ scale: 0.95 }}
                      style={{ 
                        background: 'linear-gradient(45deg, #838b70, #d8b477, #838b70)',
                        backgroundSize: '200% auto',
                        animation: 'gradient 4s ease infinite',
                        border: '2px solid rgba(241, 230, 226, 0.8)',
                        boxShadow: '0 5px 15px rgba(131, 139, 112, 0.2)'
                      }}
                    >
                      קביעת תור
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </>
  );
};

export default Header;
