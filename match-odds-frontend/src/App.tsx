import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FC, Suspense } from "react";
import { LoadingIcon } from "./components/Icons/icons";
import { iSmooth } from "./interfaces/interfaces";
import LoginPage from "./pages/Auth/Login";
import SignupPage from "./pages/Auth/Signup";
import Landing from "./pages/Landing";
import Home from "@/pages/Home";
import Docs from "./pages/Docs";
import Price from "@/pages/Price";
import Blog from "./pages/Blog";
import About from "./pages/About";

const Smooth: FC<iSmooth> = ({ children }) => {
  const { div: Animate } = motion;
  return (
    <Animate initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {children}
    </Animate>
  )
};

const loader = (
  <div className="flex justify-center items-center h-screen">
    <LoadingIcon />
  </div>
);

function App() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={loader}>
        <Routes location={location} key={pathname}>
          <Route path="/login" element={<Smooth> <LoginPage /> </Smooth>} />
          <Route path="/signup" element={<Smooth> <SignupPage /> </Smooth>} />
          <Route path="/" element={<Smooth> <Landing /> </Smooth>} />
          <Route path="/home" element={<Smooth> <Home /> </Smooth>} />
          <Route path="/docs" element={<Smooth> <Docs /> </Smooth>} />
          <Route path="/pricing" element={<Smooth> <Price /> </Smooth>} />
          <Route path="/blog" element={<Smooth> <Blog /> </Smooth>} />
          <Route path="/about" element={<Smooth> <About /> </Smooth>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
