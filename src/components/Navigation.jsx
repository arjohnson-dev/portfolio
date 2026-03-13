import { useEffect, useState } from "react";
import { navigationItems } from "../data/siteContent.js";

function getLocationState() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const hash = window.location.hash.replace(/^#/, "");
  return { pathname, hash };
}

function Navigation({ page = "home" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [locationState, setLocationState] = useState(getLocationState);
  const logoHref = page === "home" ? "#home" : "/";
  const navigationLinks = navigationItems.map((item) => {
    switch (item.key) {
      case "home":
        return { ...item, href: "/" };
      case "portfolio":
        return { ...item, href: "/portfolio" };
      case "about":
        return { ...item, href: "/about" };
      default:
        return { ...item, href: `/#${item.key}` };
    }
  });

  const activeKey =
    locationState.pathname === "/about"
      ? "about"
      : locationState.pathname === "/portfolio"
        ? "portfolio"
        : locationState.hash || "home";

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const syncLocation = () => {
      setLocationState(getLocationState());
    };

    window.addEventListener("hashchange", syncLocation);
    window.addEventListener("popstate", syncLocation);

    return () => {
      window.removeEventListener("hashchange", syncLocation);
      window.removeEventListener("popstate", syncLocation);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`site-nav${isMenuOpen ? " site-nav--open" : ""}`}>
      <a href={logoHref} className="nav-logo" onClick={closeMenu}>
        Andrew Johnson
      </a>

      <button
        type="button"
        className="nav-toggle"
        aria-expanded={isMenuOpen}
        aria-controls="site-menu"
        aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul id="site-menu" className={`nav-links${isMenuOpen ? " nav-links--open" : ""}`}>
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className={[
                link.key === activeKey ? "nav-link-active" : "",
                link.key === "portfolio" || link.key === "about"
                  ? "nav-link-external-page"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
              aria-current={link.key === activeKey ? "page" : undefined}
              onClick={() => {
                closeMenu();
                setLocationState({
                  pathname:
                    link.key === "about"
                      ? "/about"
                      : link.key === "portfolio"
                        ? "/portfolio"
                        : "/",
                  hash:
                    link.key === "home" || link.key === "about" || link.key === "portfolio"
                      ? ""
                      : link.key,
                });
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
