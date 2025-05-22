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

    const routes = [
        { path: '/login', page: <LoginPage /> },
        { path: '/signup', page: <SignupPage /> },
        { path: '/', page: <Landing /> },
        { path: '/home', page: <Home /> },
        { path: '/docs', page: <Docs /> },
        { path: '/pricing', page: <Price /> },
        { path: '/blog', page: <Blog /> },
        { path: '/about', page: <About /> }
    ];

    return (
        <Routes location={location} key={pathname}>
            {routes.map(({ path, page }) => <Route key={path} path={path} element={page} />)}
        </Routes>
    );
}

export default App;
