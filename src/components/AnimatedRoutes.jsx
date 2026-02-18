import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Main from './Main';
import About from './About';
import Team from './Team';
import Sponsor from './Sponsor';
import Other from './other';

const pageOrder = ["/", "/about", "/team", "/sponsor", "/other"];

const pageVariants = {
  initial: (direction) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 1
  }),
  in: { y: 0, opacity: 1 },
  out: (direction) => ({
    y: direction > 0 ? "-100%" : "100%",
    opacity: 1
  })
};

const pageTransition = {
  type: "tween",
  ease: "[0.25, 1, 0.5, 1]",
  duration: 0.6
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const direction = location.state?.direction || 1;

  return (
    <AnimatePresence mode='popLayout' custom={direction}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageLayout direction={direction}><Main /></PageLayout>} />
        <Route path="/about" element={<PageLayout direction={direction}><About /></PageLayout>} />
        <Route path="/team" element={<PageLayout direction={direction}><Team /></PageLayout>} />
        <Route path="/sponsor" element={<PageLayout direction={direction}><Sponsor /></PageLayout>} />
        <Route path="/other" element={<PageLayout direction={direction}><Other /></PageLayout>} />
      </Routes>
    </AnimatePresence>
  );
};

const PageLayout = ({ children, direction }) => (
  <motion.div
    custom={direction}
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    style={{ 
      position: "absolute", 
      width: "100%", 
      height: "100vh",
      top: 0,
      left: 0,
      paddingTop: "0px",
      willChange: "tranform, opacity",
      overflow: "hidden"
    }}
  >
    {children}
  </motion.div>
);

export default AnimatedRoutes;