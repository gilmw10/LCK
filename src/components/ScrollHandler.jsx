import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ScrollHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);

  const pageOrder = ["/", "/about", "/team", "/sponsor", "/other"];

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling) return; 

      const currentIndex = pageOrder.indexOf(location.pathname);
      if (currentIndex === -1) return;

      if (e.deltaY > 0) {
        if (currentIndex < pageOrder.length - 1) {
          setIsScrolling(true);
          navigate(pageOrder[currentIndex + 1]);
        }
      } else if (e.deltaY < 0) {
        if (currentIndex > 0) {
          setIsScrolling(true);
          navigate(pageOrder[currentIndex - 1]);
        }
      }

      setTimeout(() => setIsScrolling(false), 1000);
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [location.pathname, isScrolling, navigate]);

  return null; 
};

export default ScrollHandler;