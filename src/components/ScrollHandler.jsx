import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ScrollHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);

  const pageOrder = ["/", "/about", "/team", "/sponsor", "/other"];

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling || Math.abs(e.deltaY) < 15) return;

      const currentIndex = pageOrder.indexOf(location.pathname);
      if (currentIndex === -1) return;

      let nextIndex = currentIndex;
      let direction = 1;

      if (e.deltaY > 0) {
        if (currentIndex < pageOrder.length - 1) {
          nextIndex = currentIndex + 1;
          direction = 1;
        } else return;
      } else {
        if (currentIndex > 0) {
          nextIndex = currentIndex - 1;
          direction = -1;
        } else return;
      }

      setIsScrolling(true);
      navigate(pageOrder[nextIndex], { state: { direction } });
      setTimeout(() => setIsScrolling(false), 700);
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [location.pathname, isScrolling, navigate]);

  return null;
};

export default ScrollHandler;