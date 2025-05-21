import { useState, useEffect, useCallback } from 'react';
import Form from './Form';
import Button from './Button';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBattleNet } from "react-icons/fa6";
import Lottie from "lottie-react";
import styled from 'styled-components';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import BlobCardWithVideo from './BlobCardWithVideo';

const StyledStatsTitle = styled.h2`
  color: #838b70 !important;
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 2rem;
  letter-spacing: 0.03em;
  background: none !important;
  box-shadow: none !important;
  filter: none !important;
  text-shadow: none !important;
  opacity: 1 !important;
  text-align: center;
`;


const Stats = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [phoneAnimation, setPhoneAnimation] = useState(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    containScroll: false,
    dragFree: false,
    direction: 'rtl'
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Prevent scrolling of the body when the image modal is open
    if (isImageOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup function to restore scrolling when component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isImageOpen]);

  const certificates = [
    {
      src: "/images/תעודות_2/WhatsApp Image 2025-04-14 at 19.44.28 (1).jpeg",
      alt: "תעודת הסמכה 1"
    },
    {
      src: "/t.jpg",
      alt: "תעודה נוספת"
    },
    {
      src: "/images/תעודות_2/WhatsApp Image 2025-04-14 at 19.44.28.jpeg",
      alt: "תעודת הסמכה 2"
    },
    {
      src: "/images/תעודות_2/WhatsApp Image 2025-04-14 at 19.45.24.jpeg",
      alt: "תעודת הסמכה 3"
    },
    {
      src: "/images/תעודות_2/WhatsApp Image 2025-04-14 at 19.47.12.jpeg",
      alt: "תעודת הסמכה 4"
    },
    {
      src: "/images/תעודות_2/WhatsApp Image 2025-04-14 at 19.50.00.jpeg",
      alt: "תעודת הסמכה 5"
    },
    {
      src: "/images/תעודות_2/WhatsApp Image 2025-04-14 at 19.55.01.jpeg",
      alt: "תעודת הסמכה 6"
    },
    {
      src: "/images/תעודות_2/WhatsApp Image 2025-04-14 at 19.56.19.jpeg",
      alt: "תעודת הסמכה 7"
    },
    {
      src: "/images/תעודות_2/WhatsApp Image 2025-04-14 at 19.57.12.jpeg",
      alt: "תעודת הסמכה 8"
    }
  ];

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    fetch('/icons/1.json')
      .then(res => res.text())
      .then(text => {
        try {
          const jsonData = JSON.parse(text);
          setPhoneAnimation(jsonData);
        } catch (error) {
          console.error('Error parsing phone animation JSON:', error);
        }
      })
      .catch(error => console.error('Error loading phone animation:', error));
  }, []);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const openImage = (src: string, index: number) => {
    setCurrentImage(src);
    setCurrentImageIndex(index);
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
    setCurrentImage('');
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      const newIndex = currentImageIndex === 0 ? certificates.length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(newIndex);
      setCurrentImage(certificates[newIndex].src);
    } else {
      const newIndex = currentImageIndex === certificates.length - 1 ? 0 : currentImageIndex + 1;
      setCurrentImageIndex(newIndex);
      setCurrentImage(certificates[newIndex].src);
    }
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

  return (
    <StyledStats className="overflow-hidden relative bg-[#f1e6e2]" id="stats">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[#f1e6e2] opacity-100" />
      
      
      {/* Top Decorative Border */}
      <div className="absolute top-0 left-0 w-full h-16 bg-white/10 top-border" />
      
      {/* Content Container */}
      <div className="relative z-10 px-4 py-32 mx-auto max-w-3xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-12 text-center"
        >
            <motion.div
            animate={{
              y: [-5, 5, -5],
              transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
            }}
            className="inline-block mb-6"
          >
            <FaBattleNet className="w-16 h-16" style={{ color: '#7b8269' }} />
            </motion.div>
          
          <StyledStatsTitle>
  נעים להכיר- דקלה שליט מדואלה
</StyledStatsTitle>
          
          <motion.div 
            className="mt-40 mb-10 featured-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 1.2, 
              type: "spring",
              stiffness: 80
            }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <BlobCardWithVideo
              videoSrc="/images/video_24.mp4"
              blobColor="#656d55"
              width="100%"
              height="450px"
              overlay={true}
              overlayText="מקצועיות ואיכות ללא פשרות"
            />
          </motion.div>
          
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#656d55] to-transparent mx-auto mb-6" />
          
          <h3 className="mb-8 text-2xl font-semibold" style={{ color: '#858873' }}>
            מומחית בטיפולי מגע, קוסמטיקה רפואית ורפואה משלימה
          </h3>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="overflow-hidden relative p-10 mb-12 bg-gradient-to-br rounded-3xl border shadow-2xl backdrop-blur-lg from-white/20 to-white/5 border-white/30"
          whileHover={{ 
            boxShadow: "0 25px 50px -12px rgba(101, 109, 85, 0.4)",
            scale: 1.01,
            transition: { duration: 0.3 }
          }}
        >
          <div className="absolute top-0 left-0 z-0 w-full h-full bg-gradient-to-br opacity-5 from-white/5 to-black/5"></div>
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#656d55]/20 to-transparent rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-[#656d55]/20 to-transparent rounded-full blur-3xl -ml-20 -mb-20"></div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {/* Experience Section */}
              <motion.div
                className="p-8 rounded-2xl border border-white/30 shadow-xl backdrop-blur-md hover:bg-gradient-to-br from-[#98a27d] to-[#656d55]" style={{ background: '#d3c6be' }}>
  <h4 className="flex items-center mb-6 text-3xl font-extrabold" style={{ color: '#858873', fontWeight: 900, fontFamily: 'Heebo, Assistant, Arial, sans-serif', letterSpacing: '0.03em', textShadow: '0 1px 2px rgba(0,0,0,0.07)' }}>
    <span className="inline-block w-10 h-10 mr-3 bg-[#858873]/10 rounded-full flex items-center justify-center" style={{ color: '#858873' }}>
      <span className="w-4 h-4 bg-[#858873] rounded-full" style={{ color: '#858873' }}></span>
    </span>
    <span className="relative" style={{ color: '#858873', fontWeight: 900, fontFamily: 'Heebo, Assistant, Arial, sans-serif', letterSpacing: '0.03em', textShadow: '0 1px 2px rgba(0,0,0,0.07)' }}>
              הניסיון שלי
      <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#858873]/0 via-[#858873] to-[#858873]/0"></div>
    </span>
            </h4>
  <ul className="space-y-8 text-white">
  <li className="flex gap-5 items-start group">
    <span className="w-3 h-3 bg-gradient-to-br from-[#656d55] to-[#a29f7c] rounded-full flex-shrink-0 mt-1.5 shadow-md group-hover:scale-110 transition-transform" />
    <span className="text-lg font-bold leading-relaxed" style={{ color: '#333', fontFamily: 'Heebo, Assistant, Arial, sans-serif', textShadow: '0 1px 2px rgba(0,0,0,0.07)' }}>מנהלת וקוסמטיקאית רפואית במכונים מובילים</span>
  </li>
  <li className="flex gap-5 items-start group">
    <span className="w-3 h-3 bg-gradient-to-br from-[#656d55] to-[#a29f7c] rounded-full flex-shrink-0 mt-1.5 shadow-md group-hover:scale-110 transition-transform" />
    <span className="text-lg font-bold leading-relaxed" style={{ color: '#333', fontFamily: 'Heebo, Assistant, Arial, sans-serif', textShadow: '0 1px 2px rgba(0,0,0,0.07)' }}>The Spa במלון אינטרקונטיננטל</span>
  </li>
  <li className="flex gap-5 items-start group">
    <span className="w-3 h-3 bg-gradient-to-br from-[#656d55] to-[#a29f7c] rounded-full flex-shrink-0 mt-1.5 shadow-md group-hover:scale-110 transition-transform" />
    <span className="text-lg font-bold leading-relaxed" style={{ color: '#333', fontFamily: 'Heebo, Assistant, Arial, sans-serif', textShadow: '0 1px 2px rgba(0,0,0,0.07)' }}>Alokino בראשון לציון</span>
  </li>
                </ul>
              </motion.div>

              {/* What I Offer Section */}
              <motion.div
                className="p-8 rounded-2xl border border-white/30 shadow-xl backdrop-blur-md hover:bg-gradient-to-br from-[#98a27d] to-[#656d55]" style={{ background: '#d3c6be' }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(101, 109, 85, 0.3)"
                }}
              >
                <h4 className="flex items-center mb-6 text-2xl font-bold" style={{ color: 'white' }}>
                  <span className="inline-block w-10 h-10 mr-3 bg-[#858873]/10 rounded-full flex items-center justify-center" style={{ color: 'white' }}>
                    <span className="w-4 h-4 bg-[#858873] rounded-full" style={{ color: 'white' }}></span>
                  </span>
                  <span className="relative" style={{ color: '#858873', fontWeight: 900, fontFamily: 'Heebo, Assistant, Arial, sans-serif', letterSpacing: '0.03em', textShadow: '0 1px 2px rgba(0,0,0,0.07)' }}>
                    מה אני מציעה
                    <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#858873]/0 via-[#858873] to-[#858873]/0"></div>
                  </span>
                </h4>
                <ul className="space-y-8 text-white">
                  <li className="flex gap-5 items-start group">
                    <span className="w-3 h-3 bg-gradient-to-br from-[#656d55] to-[#a29f7c] rounded-full flex-shrink-0 mt-1.5 shadow-md group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-bold leading-relaxed" style={{ color: '#333', fontFamily: 'Heebo, Assistant, Arial, sans-serif', textShadow: '0 1px 2px rgba(0,0,0,0.07)' }}>טיפולים מותאמים אישית</span>
                      </li>
                  <li className="flex gap-5 items-start group">
                    <span className="w-3 h-3 bg-gradient-to-br from-[#656d55] to-[#a29f7c] rounded-full flex-shrink-0 mt-1.5 shadow-md group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-bold leading-relaxed" style={{ color: '#333', fontFamily: 'Heebo, Assistant, Arial, sans-serif', textShadow: '0 1px 2px rgba(0,0,0,0.07)' }}>טכניקות ריפוי מתקדמות</span>
              </li>
                  <li className="flex gap-5 items-start group">
                    <span className="w-3 h-3 bg-gradient-to-br from-[#656d55] to-[#a29f7c] rounded-full flex-shrink-0 mt-1.5 shadow-md group-hover:scale-110 transition-transform" />
                    <span className="text-lg font-bold leading-relaxed" style={{ color: '#333', fontFamily: 'Heebo, Assistant, Arial, sans-serif', textShadow: '0 1px 2px rgba(0,0,0,0.07)' }}>תוצאות ברמה הגבוהה ביותר</span>
              </li>
            </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Certificates Section */}
          <motion.div 
            variants={fadeInUp}
          className="overflow-hidden mb-12"
        >
          <div className="px-4 mx-auto max-w-2xl">
            <h3 className="mb-8 text-3xl font-bold text-center text-white">
              <span className="relative" style={{ color: '#838b70' }}>
                התעודות שלי
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#838b70]/0 via-[#838b70] to-[#838b70]/0"></div>
              </span>
            </h3>

            <div className="relative p-3 bg-gradient-to-br rounded-2xl border shadow-xl backdrop-blur-md from-white/30 to-white/10 border-white/30">
              <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                  {certificates.map((cert, index) => (
                    <div key={index} className="flex-[0_0_100%] min-w-0 relative px-2">
                      <div 
                        className="max-w-[160px] sm:max-w-[200px] mx-auto aspect-[3/4] relative rounded-xl overflow-hidden shadow-lg transform hover:scale-[1.02] transition-transform duration-300 cursor-pointer group"
                        onClick={() => openImage(cert.src, index)}
                      >
                        <img
                          src={cert.src}
                          alt={cert.alt}
                          className="object-contain absolute inset-0 w-full h-full bg-white"
                          loading="lazy"
                        />
                        <div className="flex absolute inset-0 justify-center items-center opacity-0 transition-all bg-black/0 group-hover:bg-black/20 group-hover:opacity-100">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                    </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons */}
                <button 
                className="absolute -left-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-[#e7d8b9] via-[#98a27d] to-[#c3c8c1] border-2 border-[#333] shadow-2xl flex items-center justify-center text-[#333] hover:from-[#98a27d] hover:to-[#656d55] hover:text-[#222] hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-[#d3c6be]/60 z-10"
                onClick={scrollPrev}
                aria-label="הקודם"
                title="הקודם"
              >
                <ChevronLeft className="w-7 h-7 font-extrabold md:w-8 md:h-8" />
                </button>
                <button 
                className="absolute -right-4 top-1/2 -translate-y-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-[#e7d8b9] via-[#98a27d] to-[#c3c8c1] border-2 border-[#333] shadow-2xl flex items-center justify-center text-[#333] hover:from-[#98a27d] hover:to-[#656d55] hover:text-[#222] hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-[#d3c6be]/60 z-10"
                onClick={scrollNext}
                aria-label="הבא"
                title="הבא"
              >
                <ChevronRight className="w-7 h-7 font-extrabold md:w-8 md:h-8" />
                </button>

              {/* Progress Indicator */}
              <div className="flex absolute -bottom-4 left-1/2 gap-1 -translate-x-1/2">
                {certificates.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all ${
                      idx === selectedIndex ? 'w-3 bg-[#656d55]' : 'w-1 bg-[#656d55]/40'
                    }`}
                  />
                ))}
              </div>
              </div>
              
            {/* Fullscreen Image Modal */}
            {isImageOpen && (
              <div 
                className="fixed inset-0 bg-gradient-to-br from-[#d3c6be]/90 to-[#98a27d]/90 backdrop-blur-md z-[100] flex items-center justify-center p-8 md:p-12 lg:p-16 overflow-hidden" 
                onClick={closeImage}
                style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
              >
                <div 
                  className="relative w-full max-w-[85vw] md:max-w-[70vw] lg:max-w-[60vw] max-h-[80vh] md:max-h-[85vh] bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm rounded-xl overflow-hidden border border-white/30 shadow-xl flex flex-col items-center justify-center"
                  onClick={e => e.stopPropagation()}
                >
                  {/* Close Button - Made much more prominent */}
                  <button
                    onClick={closeImage}
                    className="fixed top-14 right-14 md:top-16 md:right-16 lg:top-20 lg:right-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#d3c6be] border-2 border-[#333] shadow-xl flex items-center justify-center text-[#333] hover:bg-[#98a27d] hover:text-white hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-[#d3c6be]/60 z-[500]"
                    aria-label="סגור תעודה"
                    title="סגור"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-9 md:h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  
                  {/* More Padding around the image */}
                  <div className="flex justify-center items-center p-10 w-full h-full md:p-12 lg:p-16">
                    <img
                      src={currentImage}
                      alt="תעודת הסמכה במסך מלא"
                      className="max-w-full max-h-[60vh] md:max-h-[65vh] lg:max-h-[70vh] object-contain bg-white rounded-lg shadow-md"
                      style={{ padding: '32px' }}
                    />
                  </div>
                  
                  {/* Navigation buttons - Moved further out */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('prev');
                    }}
                    className="absolute left-6 top-1/2 md:left-10 lg:left-20 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#d3c6be] border-2 border-[#333] shadow-2xl flex items-center justify-center text-[#333] hover:bg-[#98a27d] hover:text-white hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-[#d3c6be]/60 z-[300]"
                    aria-label="התמונה הקודמת"
                    title="הקודם"
                  >
                    <ChevronLeft className="w-9 h-9 font-extrabold md:w-11 md:h-11" />
                  </button>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigateImage('next');
                    }}
                    className="absolute right-6 top-1/2 md:right-10 lg:right-20 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#d3c6be] border-2 border-[#333] shadow-2xl flex items-center justify-center text-[#333] hover:bg-[#98a27d] hover:text-white hover:scale-110 transition-all focus:outline-none focus:ring-4 focus:ring-[#d3c6be]/60 z-[300]"
                    aria-label="התמונה הבאה"
                    title="הבא"
                  >
                    <ChevronRight className="w-9 h-9 font-extrabold md:w-11 md:h-11" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="p-8 text-center rounded-2xl border shadow-xl backdrop-blur-md bg-white/10 border-white/20"
        >
          <h4 className="mb-4 text-2xl font-bold" style={{ color: '#838b70' }}>
            צרי קשר עוד היום וקבלי ייעוץ מותאם אישית!
          </h4>
          
          <div className="flex gap-4 justify-center items-center mb-6">
            <span className="text-2xl font-bold" style={{ color: '#838b70' }}>053-3353203</span>
            {phoneAnimation && (
              <Lottie animationData={phoneAnimation} style={{ width: 40, height: 40 }} />
            )}
          </div>
          
          <p className="mb-8 text-lg" style={{ color: '#838b70' }}>
            אני מחכה להעניק לך את החוויה האולטימטיבית של בריאות ויופי
          </p>
          
          <Button onClick={handleOpenForm}>
            קביעת תור לייעוץ
          </Button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b to-transparent from-white/10" />
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t to-transparent from-white/10" />
      
      <Form isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </StyledStats>
  );
};

const StyledStats = styled.section`
  position: relative;
  overflow: hidden;
  margin: 0 -50vw;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  .top-border {
    border-top: 8px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.05);
  }

  .featured-image-container {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  .image-frame {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(101, 109, 85, 0.15);
    aspect-ratio: auto;
    margin-bottom: 20px;
    border: 2px solid rgba(101, 109, 85, 0.2);
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.6);
  }

  .featured-image {
    width: 100%;
    height: auto;
    max-height: 350px;
    object-fit: contain;
    border-radius: 15px;
    transition: all 0.3s ease;
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, rgba(173, 139, 114, 0.5), rgba(206, 172, 147, 0.3));
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .image-overlay span {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 700;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    background-color: rgba(101, 109, 85, 0.7);
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    transform: translateY(20px);
    opacity: 0;
    transition: all 0.5s ease;
  }

  .image-frame:hover .image-overlay {
    opacity: 1;
  }

  .image-frame:hover .image-overlay span {
    transform: translateY(0);
    opacity: 1;
  }

  .image-frame:hover .featured-image {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    .featured-image-container {
      max-width: 100%;
      padding: 0 10px;
    }

    .image-frame,
    .featured-image {
      height: auto;
      max-height: none;
    }

    .image-overlay span {
      font-size: 1.2rem;
      padding: 0.4rem 1.2rem;
    }
  }

  h2 {
    font-family: 'Rubik', 'Assistant', sans-serif;
    font-weight: 800;
    letter-spacing: 0.02em;
    color: #ffffff;
    text-shadow: 0 2px 4px rgba(101, 109, 85, 0.1);
    font-size: 2.25rem;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }
`;

export default Stats;