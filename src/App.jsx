import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./views/HomePage.jsx";
import AboutPage from "./views/AboutPage.jsx";
import PortfolioPage from "./views/PortfolioPage.jsx";

function getCurrentPage() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  if (pathname === "/about") {
    return "about";
  }

  if (pathname === "/portfolio") {
    return "portfolio";
  }

  return "home";
}

function App() {
  const [page, setPage] = useState(getCurrentPage);

  useEffect(() => {
    const handlePopState = () => {
      setPage(getCurrentPage());
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  if (page === "about") {
    return <AboutPage />;
  }

  if (page === "portfolio") {
    return <PortfolioPage />;
  }

  return <HomePage />;
}

export default App;
