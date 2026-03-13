import { useEffect, useState } from "react";
import BrowserMock from "./BrowserMock.jsx";
import TypewriterText from "./TypewriterText.jsx";

function HeroSection() {
  const [heroTypingComplete, setHeroTypingComplete] = useState(false);
  const [showHeroCta, setShowHeroCta] = useState(false);
  const headingSegments = [
    { text: "Helping " },
    { text: "small businesses", emphasis: true },
    { break: true },
    { text: "build a " },
    { text: "sharper edge", color: "blue" },
    { text: " — " },
    { text: "online", color: "purple" },
    { text: "." },
  ];

  const paragraphSegments = [
    { text: "I help small businesses stand out with " },
    { text: "modern design", color: "gold" },
    { text: ", " },
    { text: "fast performance", color: "blue" },
    { text: ", " },
    { text: "and mobile-first experiences", color: "purple" },
    { text: " that make their site feel " },
    { text: "current, credible, and easier to trust", color: "orange" },
    { text: "." },
  ];

  useEffect(() => {
    if (!heroTypingComplete) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setShowHeroCta(true);
    }, 333);

    return () => window.clearTimeout(timeoutId);
  }, [heroTypingComplete]);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-eyebrow">
          Modern Web Design for Small Businesses
        </div>
        <TypewriterText as="h1" segments={headingSegments} speed={41} />
        <TypewriterText
          as="p"
          segments={paragraphSegments}
          className="hero-type-paragraph"
          speed={22}
          delay={1860}
          onComplete={() => setHeroTypingComplete(true)}
        />
        <div
          className={`hero-actions hero-actions--animated ${
            showHeroCta ? "hero-actions--visible" : ""
          }`}
        >
          <a href="#contact" className="btn-primary">
            Book A Free Consultation Now
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <BrowserMock />
      </div>
    </section>
  );
}

export default HeroSection;
