import { useState, useEffect } from 'react';
import { FaChevronDown, FaInstagram, FaFacebookF, FaWhatsapp, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const location = useLocation();
  const isPrivacyPolicy = location.pathname === '/privacy-policy';

  useEffect(() => {
    const checkIfOpen = () => {
      const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' });
      const date = new Date(now);
      const day = date.getDay();
      const hour = date.getHours();
      
      setCurrentTime(date.toLocaleTimeString('he-IL', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }));

      if (day === 6) {
        setIsBusinessOpen(false);
      } else if (day >= 0 && day <= 4) {
        setIsBusinessOpen(hour >= 10 && hour < 20);
      }
    };

    checkIfOpen();
    const interval = setInterval(checkIfOpen, 60000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // אם אנחנו בעמוד מדיניות הפרטיות, נחזיר רק את החלק התחתון של הפוטר
  if (isPrivacyPolicy) {
  return (
      <footer className="relative">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f1e6e2] to-[#f1e6e2] opacity-90" />
        <div className="absolute inset-0 backdrop-blur-md" />
        
        {/* Content - רק החלק של הקרדיטים */}
        <div className="relative z-10 px-4 py-10 mx-auto max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-10 pt-6 border-t border-[#8B4513]/20 text-center"
          >
            <div className="flex flex-col items-center gap-4 mb-6">
              <p className="text-white" style={{ color: '#111' }}>
                כל הזכויות שמורות ל
                <span className="font-bold text-white" style={{ color: '#111' }}>אוראל בוקריס</span>
                {' '}מפתח אתרים ואפליקציות בתלת מימד
              </p>
              <a 
                href="/privacy-policy" 
                className="text-white hover:text-gray-200 transition-colors underline"
                style={{ color: '#111' }}
              >
                מדיניות פרטיות
              </a>
            </div>
            
            {/* Developer Card */}
            <div className="flex justify-center">
              <a 
                href="https://www.orelweb.co.il/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <motion.div 
                  className="flex flex-col gap-5 mx-2 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="bg-gradient-to-r from-[#c3c8c1]/30 to-[#98a27d]/20 w-44 aspect-square rounded-lg border border-[#656d55]/30 flex items-center justify-center backdrop-blur-sm">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="w-20 aspect-square transition-all duration-700 group-hover:rotate-[360deg] fill-[#656d55]" 
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.202 15.967a7.987 7.987 0 0 1-3.552-1.26c-.898-.585-1.101-.826-1.101-1.306 0-.965 1.062-2.656 2.879-4.583C6.459 7.723 7.897 6.44 8.052 6.475c.302.068 2.718 2.423 3.622 3.531 1.43 1.753 2.088 3.189 1.754 3.829-.254.486-1.83 1.437-2.987 1.802-.954.301-2.207.429-3.239.33Zm-5.866-3.57C.589 11.253.212 10.127.03 8.497c-.06-.539-.038-.846.137-1.95.218-1.377 1.002-2.97 1.945-3.95.401-.417.437-.427.926-.263.595.2 1.23.638 2.213 1.528l.574.519-.313.385C4.056 6.553 2.52 9.086 1.94 10.653c-.315.852-.442 1.707-.306 2.063.091.24.007.15-.3-.319Zm13.101.195c.074-.36-.019-1.02-.238-1.687-.473-1.443-2.055-4.128-3.508-5.953l-.457-.575.494-.454c.646-.593 1.095-.948 1.58-1.25.381-.237.927-.448 1.161-.448.145 0 .654.528 1.065 1.104a8.372 8.372 0 0 1 1.343 3.102c.153.728.166 2.286.024 3.012a9.495 9.495 0 0 1-.6 1.893c-.179.393-.624 1.156-.82 1.404-.1.128-.1.127-.043-.148ZM7.335 1.952c-.67-.34-1.704-.705-2.276-.803a4.171 4.171 0 0 0-.759-.043c-.471.024-.45 0 .306-.358A7.778 7.778 0 0 1 6.47.128c.8-.169 2.306-.17 3.094-.005.85.18 1.853.552 2.418.9l.168.103-.385-.02c-.766-.038-1.88.27-3.078.853-.361.176-.676.316-.699.312a12.246 12.246 0 0 1-.654-.319Z" />
                    </svg>
                  </div>
                  <div className="flex flex-row justify-between items-center">
                    <div className="flex flex-col gap-1">
                      <p className="font-semibold text-lg text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white after:scale-x-0 after:origin-bottom-left after:transition-transform after:duration-300 group-hover:after:scale-x-100" style={{ color: '#111' }}>
                        אתרים בתלת מימד
                      </p>
                      <p className="text-sm text-white" style={{ color: '#111' }}>עיצוב, פיתוח</p>
                    </div>
                    <motion.div 
                      className="text-white"
                      whileHover={{ rotate: 45 }}
                    >
                      <svg className="w-9 h-9" viewBox="0 0 24 24">
                        <path d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" />
                      </svg>
                    </motion.div>
                  </div>
                </motion.div>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#8B4513]/20 to-transparent" />
      </footer>
    );
  }

  // הפוטר הרגיל לכל העמודים האחרים
  return (
    <footer className="relative">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f1e6e2] to-[#f1e6e2] opacity-90" />
      <div className="absolute inset-0 backdrop-blur-md" />
      
      {/* Content */}
      <div className="relative z-10 px-4 py-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
          {/* Opening Hours */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center md:text-right"
          >
            <h3 className="text-2xl font-bold text-[#838b70] mb-6">שעות פעילות</h3>
            <div className="space-y-3">
              <p className="text-[#838b70] transition-colors hover:text-[#656d55]">
                א' - ה' 10:00 - 20:00
              </p>
              <p className="font-bold text-[#838b70]">בתיאום מראש!</p>
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                isBusinessOpen ? 'text-green-800 bg-green-100' : 'text-red-800 bg-red-100'
              }`}>
                <span className={`w-2 h-2 rounded-full ${
                  isBusinessOpen ? 'bg-green-500' : 'bg-red-500'
                }`} />
                <span className="font-medium">
                  {isBusinessOpen ? "פתוח" : "סגור"} ({currentTime})
                </span>
              </div>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center md:text-right"
          >
            <h3 className="text-2xl font-bold text-[#838b70] mb-6">המיקום שלנו</h3>
            <a 
              href="https://waze.com/ul?q=נס ציונה, ישראל" 
                target="_blank" 
                rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-[#838b70] hover:text-[#656d55] transition-colors"
            >
              <FaMapMarkerAlt className="text-xl" />
              <span className="text-lg">נס ציונה, ישראל</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center md:text-right"
          >
            <h3 className="text-2xl font-bold text-[#838b70] mb-6">עקבו אחרינו</h3>
            <div className="flex gap-6 justify-center md:justify-start">
              {[
                { 
                  icon: FaInstagram, 
                  href: "https://www.instagram.com/dikla_maduel?utm_source=qr&igsh=MWRiM2JkcWowbGxh",
                  label: "Instagram",
                  color: "#E1306C",
                  hoverBg: "rgba(225, 48, 108, 0.1)",
                  hoverShadow: "rgba(225, 48, 108, 0.5)"
                },
                { 
                  icon: FaFacebookF, 
                  href: "https://www.facebook.com/profile.php?id=100058313266229",
                  label: "Facebook",
                  color: "#4267B2",
                  hoverBg: "rgba(66, 103, 178, 0.1)",
                  hoverShadow: "rgba(66, 103, 178, 0.5)"
                },
                { 
                  icon: FaWhatsapp, 
                  href: "https://api.whatsapp.com/message/MATPQKJZYWELF1?autoload=1&app_absent=0",
                  label: "WhatsApp",
                  color: "#25D366",
                  hoverBg: "rgba(37, 211, 102, 0.1)",
                  hoverShadow: "rgba(37, 211, 102, 0.5)"
                }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
                  whileHover={{ 
                    scale: 1.2, 
                    y: -8,
                    boxShadow: `0 10px 25px ${social.hoverShadow}, 0 0 20px ${social.hoverShadow}`
                  }}
                  style={{ 
                    boxShadow: `0 5px 15px ${social.hoverShadow}`,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.icon className="text-xl" style={{ fill: social.color }} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Credits */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-10 pt-6 border-t border-[#838b70]/20 text-center"
        >
          <div className="flex flex-col items-center gap-4 mb-6">
            <p className="text-[#838b70]">
              כל הזכויות שמורות ל
              <span className="font-bold text-[#838b70]">אוראל בוקריס</span>
              {' '}מפתח אתרים ואפליקציות בתלת מימד
            </p>
            <a 
              href="/privacy-policy" 
              className="text-[#838b70] hover:text-[#656d55] transition-colors underline"
            >
              מדיניות פרטיות
            </a>
          </div>
          
          {/* Developer Card */}
          <div className="flex justify-center">
            <a 
              href="https://www.orelweb.co.il/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group"
            >
              <motion.div 
                className="flex flex-col gap-5 mx-2 cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-gradient-to-r from-[#f1e6e2]/30 to-[#f1e6e2]/20 w-44 aspect-square rounded-lg border border-[#838b70]/30 flex items-center justify-center backdrop-blur-sm">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="w-20 aspect-square transition-all duration-700 group-hover:rotate-[360deg] fill-[#838b70]" 
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.202 15.967a7.987 7.987 0 0 1-3.552-1.26c-.898-.585-1.101-.826-1.101-1.306 0-.965 1.062-2.656 2.879-4.583C6.459 7.723 7.897 6.44 8.052 6.475c.302.068 2.718 2.423 3.622 3.531 1.43 1.753 2.088 3.189 1.754 3.829-.254.486-1.83 1.437-2.987 1.802-.954.301-2.207.429-3.239.33Zm-5.866-3.57C.589 11.253.212 10.127.03 8.497c-.06-.539-.038-.846.137-1.95.218-1.377 1.002-2.97 1.945-3.95.401-.417.437-.427.926-.263.595.2 1.23.638 2.213 1.528l.574.519-.313.385C4.056 6.553 2.52 9.086 1.94 10.653c-.315.852-.442 1.707-.306 2.063.091.24.007.15-.3-.319Zm13.101.195c.074-.36-.019-1.02-.238-1.687-.473-1.443-2.055-4.128-3.508-5.953l-.457-.575.494-.454c.646-.593 1.095-.948 1.58-1.25.381-.237.927-.448 1.161-.448.145 0 .654.528 1.065 1.104a8.372 8.372 0 0 1 1.343 3.102c.153.728.166 2.286.024 3.012a9.495 9.495 0 0 1-.6 1.893c-.179.393-.624 1.156-.82 1.404-.1.128-.1.127-.043-.148ZM7.335 1.952c-.67-.34-1.704-.705-2.276-.803a4.171 4.171 0 0 0-.759-.043c-.471.024-.45 0 .306-.358A7.778 7.778 0 0 1 6.47.128c.8-.169 2.306-.17 3.094-.005.85.18 1.853.552 2.418.9l.168.103-.385-.02c-.766-.038-1.88.27-3.078.853-.361.176-.676.316-.699.312a12.246 12.246 0 0 1-.654-.319Z" />
                  </svg>
                </div>
                <div className="flex flex-row justify-between items-center">
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-lg text-[#838b70] relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#838b70] after:scale-x-0 after:origin-bottom-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                      אתרים בתלת מימד
                    </p>
                    <p className="text-sm text-[#838b70]">עיצוב, פיתוח</p>
                  </div>
                  <motion.div 
                    className="text-[#838b70]"
                    whileHover={{ rotate: 45 }}
                  >
                    <svg className="w-9 h-9" viewBox="0 0 24 24">
                      <path d="m12.012 1.995c-5.518 0-9.998 4.48-9.998 9.998s4.48 9.998 9.998 9.998 9.997-4.48 9.997-9.998-4.479-9.998-9.997-9.998zm0 1.5c4.69 0 8.497 3.808 8.497 8.498s-3.807 8.498-8.497 8.498-8.498-3.808-8.498-8.498 3.808-8.498 8.498-8.498zm1.528 4.715s1.502 1.505 3.255 3.259c.146.147.219.339.219.531s-.073.383-.219.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.336.217-.527.217-.191-.001-.383-.074-.53-.221-.293-.293-.295-.766-.004-1.057l1.978-1.977h-6.694c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.694l-1.979-1.979c-.289-.289-.286-.762.006-1.054.147-.147.339-.221.531-.222.19 0 .38.071.524.215z" />
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#838b70]/20 to-transparent" />
    </footer>
  );
};

export default Footer;