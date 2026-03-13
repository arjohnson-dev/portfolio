import { navigationLinks } from "../data/siteContent.js";

function Navigation() {
  return (
    <nav className="site-nav">
      <a href="#home" className="nav-logo">
        Andrew Johnson
      </a>

      <ul className="nav-links">
        {navigationLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      <a href="#contact" className="nav-cta">
        CONTACT
      </a>
    </nav>
  );
}

export default Navigation;
