import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// 컴포넌트 임포트 (경로 주의!)
import Main from './Main';
import About from './About';
import Team from './Team';
import Sponsor from './Sponsor';
import Other from './other';

const pageVariants = {
  initial: { y: "100%", opacity: 1 }, // 다음 화면이 아래에서 대기
  in: { y: 0, opacity: 1 },           // 제자리로 올라옴
  out: { y: "-100%", opacity: 1 }      // 현재 화면은 위로 밀려남
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.5 // 속도가 답답하면 0.4로 줄이세요
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // mode="wait"를 제거해야 두 페이지가 동시에 움직여서 자연스럽습니다.
    <AnimatePresence initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageLayout><Main /></PageLayout>} />
        <Route path="/about" element={<PageLayout><About /></PageLayout>} />
        <Route path="/team" element={<PageLayout><Team /></PageLayout>} />
        <Route path="/sponsor" element={<PageLayout><Sponsor /></PageLayout>} />
        <Route path="/other" element={<PageLayout><Other /></PageLayout>} />
      </Routes>
    </AnimatePresence>
  );
};

const PageLayout = ({ children }) => (
  <motion.div
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
      left: 0
    }}
  >
    {children}
  </motion.div>
);

export default AnimatedRoutes;