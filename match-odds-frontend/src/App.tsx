import { Route, Routes, useLocation } from "react-router-dom";
import LoginPage from "./pages/Auth/Login";
import SignupPage from "./pages/Auth/Signup";
import Landing from "./pages/Landing";
import Home from "@/pages/Home";
import Docs from "./pages/Docs";
import Price from "@/pages/Price";
import Blog from "./pages/Blog";
import About from "./pages/About";

function App() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <Routes location={location} key={pathname}>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/docs" element={<Docs />} />
      <Route path="/pricing" element={<Price />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
