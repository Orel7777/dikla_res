import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import { Link } from 'react-router-dom';

interface FormProps {
  isOpen: boolean;
  onClose: () => void;
}

const StyledWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  direction: rtl;

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(8px);
    animation: fadeIn 0.3s ease-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translateY(30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  .form-container {
    position: relative;
    width: 90%;
    max-width: 300px;
    max-height: 80vh;
    overflow-y: auto;
    background: linear-gradient(135deg, rgba(241, 230, 226, 0.95), rgba(241, 230, 226, 0.85));
    border-radius: 20px;
    padding: 14px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
    animation: slideIn 0.4s ease-out;
    border: 1px solid rgba(241, 230, 226, 0.5);
    backdrop-filter: blur(10px);
  }
  
  /* רקע סטטי ללא תנועה */
  .form-container::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(45deg, rgba(241, 230, 226, 0.05), rgba(241, 230, 226, 0), rgba(241, 230, 226, 0.05));
    z-index: -1;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background: #f1e6e2;
    color: #838b70;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    z-index: 100;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    border: 2px solid rgba(241, 230, 226, 0.8);
    transition: all 0.3s ease;
  }

  .close-button:hover {
    transform: scale(1.1);
    background: #e6dbd7;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }

  .form-group label {
    font-size: 14px;
    color: #838b70;
    font-weight: 500;
    margin-bottom: 5px;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 8px 12px;
    border-radius: 10px;
    border: 2px solid rgba(241, 230, 226, 0.6);
    background: rgba(255, 255, 255, 0.95);
    font-size: 14px;
    text-align: right;
    direction: rtl;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    color: #838b70;
    font-weight: 500;
  }

  .form-group input:hover,
  .form-group textarea:hover,
  .form-group select:hover {
    border-color: rgba(241, 230, 226, 0.9);
    background: #fff;
  }

  .form-group textarea {
    resize: none;
    height: 80px;
  }

  .form-group input::placeholder,
  .form-group textarea::placeholder,
  .form-group select::placeholder {
    color: #b5b5b5;
  }

  .form-group select {
    appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23838b70' viewBox='0 0 16 16'%3E%3Cpath d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: 12px center;
    padding-left: 30px;
    color: #838b70;
    font-weight: 500;
  }

  .form-group select option {
    color: #838b70;
    font-weight: 500;
    padding: 12px;
    background-color: #fff;
  }

  .form-group select option:hover,
  .form-group select option:focus {
    background-color: rgba(241, 230, 226, 0.2);
  }

  .form-note {
    color: rgba(241, 230, 226, 0.9);
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    text-align: center;
    font-size: 13px;
  }

  .privacy-policy-container {
    text-align: center;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  .privacy-policy-link {
    color: #838b70;
    font-weight: 600;
    text-decoration: none;
    padding: 6px 15px;
    border-radius: 20px;
    background: rgba(241, 230, 226, 0.7);
    transition: all 0.3s ease;
    border: 1px solid rgba(241, 230, 226, 0.3);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  }

  .privacy-policy-link:hover {
    background: rgba(241, 230, 226, 0.9);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  .privacy-policy-link-inline {
    color: #838b70;
    font-weight: 600;
    text-decoration: underline;
    transition: all 0.3s ease;
  }

  .privacy-policy-link-inline:hover {
    color: #727c60;
  }

  .form-submit-btn {
    background: linear-gradient(90deg, #838b70, #98a27d, #838b70);
    background-size: 200% auto;
    color: white;
    border: none;
    border-radius: 50px;
    padding: 12px 30px;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    display: block;
    width: 100%;
    margin-top: 20px;
    box-shadow: 0 4px 15px rgba(131, 139, 112, 0.4);
    animation: gradient 3s ease infinite;
    border: 1px solid rgba(241, 230, 226, 0.5);
  }

  .form-submit-btn:hover {
    background-position: right center;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(131, 139, 112, 0.5);
  }

  .logo {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    border-radius: 50%;
    border: 3px solid rgba(241, 230, 226, 0.9);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
  
  .logo:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }

  .logo-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8px;
  }

  .logo-text {
    margin-top: 4px;
    font-size: 16px;
    color: #838b70;
    font-weight: bold;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }

  .form-success {
    text-align: center;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 280px;
  }
  
  .form-success h3 {
    color: #838b70;
    font-size: 1.8rem;
    margin-bottom: 15px;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
  }
  
  .form-success p {
    color: #838b70;
    font-size: 1.1rem;
    line-height: 1.5;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    .form-container {
      width: 92%;
      padding: 14px;
      max-height: 80vh;
      overflow-y: auto;
      margin-top: 20px;
    }
    
    .form-container::-webkit-scrollbar {
      width: 6px;
    }
    
    .form-container::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.1);
      border-radius: 10px;
    }
    
    .form-container::-webkit-scrollbar-thumb {
      background: rgba(241, 230, 226, 0.5);
      border-radius: 10px;
    }
    
    .close-button {
      top: 8px;
      right: 8px;
      width: 32px;
      height: 32px;
    }
    
    .logo {
      width: 50px;
      height: 50px;
    }
    
    .logo-text {
      font-size: 14px;
    }
    
    .form-group label {
      font-size: 13px;
    }
    
    .form-group input,
    .form-group textarea,
    .form-group select {
      padding: 6px 10px;
      font-size: 13px;
    }
    
    .form-submit-btn {
      padding: 8px;
    }
  }

  @media (min-width: 769px) {
    .form-container {
      width: 75%;
      max-width: 420px;
    }
  }
`;

const StyledCalendarButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f6f6f6;
  color: #838b70;
  border: 1px solid rgba(241, 230, 226, 0.8);
  border-radius: 40px;
  padding: 8px 18px;
  margin: 8px auto;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 3px 10px rgba(201, 182, 174, 0.3);
  text-decoration: none;
  width: auto;
  max-width: 180px;
  
  svg {
    margin-left: 6px;
    width: 16px;
    height: 16px;
    fill: #838b70;
  }
  
  &:hover {
    background: #efefef;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(201, 182, 174, 0.4);
  }
  
  @media (max-width: 768px) {
    padding: 6px 16px;
    font-size: 13px;
    max-width: 160px;
    
    svg {
      width: 14px;
      height: 14px;
      margin-left: 5px;
    }
  }
`;

const Form: React.FC<FormProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const formDataRef = useRef<FormData | null>(null);
  
  // הגדרת ה-URL הנוכחי כאשר הקומפוננטה נטענת
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
    }
  }, []);
  
  // פונקציה לאיפוס הטופס במקרה של סגירה
  const handleClose = () => {
    // איפוס מצב הטופס בעת סגירה
    setFormSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };
  
  if (!isOpen) return null;
  
  // פונקציה ליצירת הודעת וואטסאפ
  const sendToWhatsApp = (formData: FormData) => {
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const treatmentType = formData.get('treatmentType') as string;
    
    // בניית הודעת וואטסאפ
    const whatsappMessage = `
*פנייה חדשה מהאתר*
שם: ${name}
טלפון: ${phone}
אימייל: ${email}
סוג טיפול: ${treatmentType}
    `.trim();
    
    // קידוד ההודעה לשימוש ב-URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // יצירת קישור וואטסאפ עם המספר הנכון (972 במקום 0 בהתחלה)
    const phoneNumber = "972533353203"; // המספר של דקלה בפורמט בינלאומי
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    console.log("פתיחת וואטסאפ:", whatsappUrl);
    
    // פתיחת חלון חדש עם הקישור
    window.open(whatsappUrl, '_blank');
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // נקבל גישה לטופס
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    // שמירת הנתונים לשימוש מאוחר יותר
    formDataRef.current = formData;
    
    // שליחת הטופס
    if (form) {
      // שליחה בשיטה הסטנדרטית
      // שימוש ב-FormSubmit בדרך סטנדרטית דרך action ו-method
      fetch("https://formsubmit.co/ajax/Dikla.spa@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get('name'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          treatmentType: formData.get('treatmentType'),
        }),
      })
      .then(response => response.json())
      .then(data => {
        console.log("פרטי הטופס נשלחו בהצלחה:", data);
        setFormSubmitted(true);
        setIsSubmitting(false);
      })
      .catch(error => {
        console.error("שגיאה בשליחת הטופס:", error);
        setIsSubmitting(false);
        // אפשר להוסיף כאן טיפול בשגיאות
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
    <StyledWrapper>
          <motion.div 
            className="overlay" 
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>
          <motion.div 
            className="form-container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
          >
            <motion.button 
              className="close-button" 
              onClick={handleClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="סגור טופס"
              title="סגור טופס"
            >×</motion.button>
            
            <motion.div 
              className="logo-container"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
          <img src="/לוגו_גדול.jpeg" alt="דקלה מדואלה" className="logo" />
          <span className="logo-text">מדואלה דקלה שליט</span>
            </motion.div>
            
            {formSubmitted ? (
              <div className="form-success">
                <h3>תודה על פנייתך!</h3>
                <p>ההודעה נשלחה בהצלחה למייל, ניצור איתך קשר בהקדם.</p>
                
                <button 
                  className="whatsapp-btn" 
                  onClick={() => formDataRef.current && sendToWhatsApp(formDataRef.current)}
                  style={{
                    background: "#25D366",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "50px",
                    fontWeight: "bold",
                    margin: "20px 0 0",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 4px 12px rgba(37, 211, 102, 0.2)"
                  }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="white"
                    style={{ marginLeft: "8px" }}
                  >
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  שלח/י גם בוואטסאפ
                </button>
                
                <StyledCalendarButton 
                  href="https://calmark.io/p/MbBUZ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="white"
                  >
                    <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 0c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2z"/>
                  </svg>
                  הוסף ליומן
                </StyledCalendarButton>
                
                <button 
                  onClick={handleClose}
                  style={{
                    background: "rgba(241, 230, 226, 0.9)",
                    color: "#838b70",
                    border: "1px solid rgba(241, 230, 226, 0.5)",
                    padding: "8px 16px",
                    borderRadius: "50px",
                    fontWeight: "bold",
                    margin: "15px 0 0",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"
                  }}
                >
                  סגירה
                </button>
        </div>
            ) : (
              <form 
                className="form" 
                onSubmit={handleSubmit}
              >
                {/* FormSubmit הגדרות */}
                <input type="hidden" name="_subject" value="פנייה חדשה מהאתר - דקלה מדואלה" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value={currentUrl} />
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
          <div className="form-group">
                  <label className="form-group-label" htmlFor="name">שם מלא *</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              required 
              placeholder="הכנס/י את שמך המלא" 
              minLength={2}
              pattern="^[\u0590-\u05FF\u200f\u200e a-zA-Z\s]+$"
              title="אנא הכנס/י שם תקין (אותיות בלבד)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">מספר טלפון *</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              required 
              placeholder="הכנס/י מספר טלפון (לדוגמה: 0501234567)" 
              pattern="^0(5[0-9]|[2-4]|[8-9]|7[0-9])[0-9]{7}$"
              title="אנא הכנס/י מספר טלפון ישראלי תקין (10 ספרות)"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">אימייל *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              required 
              placeholder="הכנס/י כתובת אימייל" 
              title="אנא הכנס/י כתובת אימייל תקינה"
            />
          </div>
          <div className="form-group">
            <label htmlFor="treatmentType">סוג הטיפול *</label>
            <select id="treatmentType" name="treatmentType" required defaultValue="">
              <option value="" disabled>בחר/י סוג טיפול</option>
                    <option value="עיסוי רפואי">עיסוי רפואי</option>
                    <option value="עיסוי רקמות עמוק">עיסוי רקמות עמוק</option>
                    <option value="עיסוי לנשים בהריון">עיסוי לנשים בהריון</option>
                    <option value="עיסוי לאחר לידה">עיסוי לאחר לידה</option>
                    <option value="עיסוי לימפטי">עיסוי לימפטי </option>
                    <option value="עיסוי לספורטאיות">עיסוי לספורטאיות</option>
                    <option value="עיסוי לכאבי גב וצוואר">עיסוי לכאבי גב וצוואר</option>
                    <option value="עיסוי שוודי">עיסוי שוודי</option>
                    <option value="עיסוי הוליסטי">עיסוי הוליסטי</option>
                    <option value="עיסוי באבנים חמות">עיסוי באבנים חמות</option>
                    <option value="עיסוי תאילנדי">עיסוי תאילנדי </option>
                    <option value="עיסוי לומי-לומי">עיסוי לומי-לומי (מהוואי)</option>
                    <option value="עיסוי כוסות רוח">עיסוי כוסות רוח</option>
                    <option value="רפלקסולוגיה">רפלקסולוגיה</option>
                    <option value="עיסוי משולב">עיסוי משולב </option>
                    <option value="עיסוי קרקפת ופנים">עיסוי קרקפת ופנים</option>
                    <option value="שיאצו">שיאצו</option>
                    <option value="פיסול פנים טבעי">פיסול פנים טבעי</option>
                    <option value="אחר">אחר</option>
            </select>
                  <div className="privacy-policy-container">
                    <StyledPrivacyLink
  as={Link}
  to="/privacy-policy"
  onClick={() => {
    if (onClose) onClose();
  }}
>
  מדיניות הפרטיות
</StyledPrivacyLink>
                    <StyledPrivacySmall>
  בשליחת הטופס הנך מאשר/ת את <StyledPrivacyLink
    as={Link}
    to="/privacy-policy"
    onClick={() => {
      if (onClose) onClose();
    }}
  >
    מדיניות הפרטיות
  </StyledPrivacyLink> שלנו
</StyledPrivacySmall>
                  </div>
          </div>
          <div className="form-group">
                  <label htmlFor="medicalIssues" style={{ fontWeight: 600 }}>
                    האם אתה סובל מבעיות רפואיות? אם כן פרט או רשום לא *
                  </label>
                  <StyledMedicalTextarea
                    id="medicalIssues"
              name="medicalIssues" 
              required
              minLength={2}
                    placeholder="פרט כאן או רשום לא"
                    title="אנא פרט או רשום לא"
            />
          </div>
          
          <div className="form-note">
            <StyledRequiredSmall>* שדות חובה</StyledRequiredSmall>
          </div>
          
          <StyledCalendarButton 
            href="https://calmark.io/p/MbBUZ" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="#838b70"
            >
              <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 0c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2z"/>
            </svg>
            הוסף ליומן
          </StyledCalendarButton>
          
                <button 
                  className="form-submit-btn" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'שולח...' : 'שליחה'}
                </button>
        </form>
            )}
          </motion.div>
    </StyledWrapper>
      )}
    </AnimatePresence>
  );
};


const StyledRequiredSmall = styled.small`
  color: #838b70;
  font-size: 1.18em;
  font-weight: 600;
  letter-spacing: 0.03em;
  margin-bottom: 0.3em;
  display: block;
`;

const StyledPrivacyLink = styled.a`
  color: #838b70;
  text-decoration: underline;
  font-weight: 500;
  &:hover {
    color: #727c60;
  }
`;

const StyledPrivacySmall = styled.small`
  color: #838b70;
  font-size: 1em;
`;

const StyledMedicalTextarea = styled.textarea`
  width: 100%;
  min-height: 36px;
  font-size: 1.07em;
  color: #838b70;
  background: rgba(241, 230, 226, 0.1);
  border: 1px solid rgba(241, 230, 226, 0.6);
  border-radius: 10px;
  padding: 10px;
  margin-top: 0px;
  resize: vertical;
  font-weight: 500;
  letter-spacing: 0.02em;
  &::placeholder {
    color: rgba(131, 139, 112, 0.7);
    opacity: 1;
  }
`;

export default Form;