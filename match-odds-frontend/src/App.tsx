import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FC, Suspense } from "react";
import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import LoginPage from "./pages/Auth/Login";
import SignupPage from "./pages/Auth/Signup";
import HomePage from "./pages/Home";
import { LoadingIcon } from "./components/icons";
import { iSmooth } from "./interfaces/interfaces";

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
          <Route path="/" element={<Smooth> <HomePage /> </Smooth>} />
          <Route path="/login" element={<Smooth> <LoginPage /> </Smooth>} />
          <Route path="/signup" element={<Smooth> <SignupPage /> </Smooth>} />
          <Route path="/home" element={<Smooth> <IndexPage /> </Smooth>} />
          <Route path="/docs" element={<Smooth> <DocsPage /> </Smooth>} />
          <Route path="/pricing" element={<Smooth> <PricingPage /> </Smooth>} />
          <Route path="/blog" element={<Smooth> <BlogPage /> </Smooth>} />
          <Route path="/about" element={<Smooth> <AboutPage /> </Smooth>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default App;
