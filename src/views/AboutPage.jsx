import Navigation from "../components/Navigation.jsx";
import PhotoCarousel from "../components/PhotoCarousel.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import { aboutPhotos } from "../data/siteContent.js";

function AboutPage() {
  return (
    <div className="page-shell">
      <Navigation page="about" />
      <main className="about-page">
        <section className="about-hero-page">
          <div className="about-hero-media">
            <PhotoCarousel slides={aboutPhotos} />
            <div className="about-hero-overlay">
              <div className="about-hero-grid">
                <div className="about-hero-title-block">
                  <div className="section-label about-hero-label">About Me</div>
                  <h1 className="section-title about-hero-title">
                    Software engineer, product builder, and{" "}
                    <span className="about-title-accent">practical problem solver.</span>
                  </h1>
                </div>
                <div className="about-hero-copy-columns">
                  <div className="about-hero-copy">
                    <p>
                      I&apos;m a software engineer with a background in simulation,
                      product development, and modern web applications. Over the
                      past several years, I&apos;ve worked on complex software
                      systems across both defense and commercial sectors. Early in
                      my career at SSE, I helped develop virtual
                      maintenance trainers and VR simulations for military
                      platforms such as the F-15 and P-8A aircraft.
                    </p>
                    <p>
                      I later joined ECS, where I built
                      Unity-based applications and training systems for the U.S.
                      Air Force while mentoring junior developers.
                    </p>
                    <p>
                      Most recently, I served as{" "}
                      Head of Product and Lead Unity Developer at Space Grid AI
                      , where I led development of the company&apos;s core
                      platform, managed a small team of engineers and artists, and
                      worked closely with customers to shape product direction and
                      strategy.
                    </p>
                    <p>
                      Today I focus on building practical, well-designed software,
                      both through independent projects and freelance work helping
                      small businesses establish a modern, professional presence
                      online. I enjoy creating tools that solve real problems,
                      whether that&apos;s a custom website, a web application, or
                      a product like CatchLogs, a fishing log
                      application I built to help anglers track and analyze their
                      catches. Outside of work, I enjoy traveling, spending time
                      on the water, and getting outdoors whenever I can. Much of
                      my free time is spent with my partner and our dog, Suki,
                      exploring new places or simply enjoying a quiet day by the
                      lake.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-copy-section-mobile">
          <div className="about-copy-mobile">
            <div className="section-label">About Me</div>
            <h1 className="section-title about-copy-mobile-title">
              Software engineer, product builder, and{" "}
              <span className="about-title-accent">practical problem solver.</span>
            </h1>
            <p>
              I&apos;m a software engineer with a background in simulation,
              product development, and modern web applications. Over the past
              several years, I&apos;ve worked on complex software systems across
              both defense and commercial sectors. Early in my career at SSE, I
              helped develop virtual maintenance trainers and VR simulations for
              military platforms such as the F-15 and P-8A aircraft.
            </p>
            <p>
              I later joined ECS, where I built Unity-based applications and
              training systems for the U.S. Air Force while mentoring junior
              developers.
            </p>
            <p>
              Most recently, I served as Head of Product and Lead Unity
              Developer at Space Grid AI, where I led development of the
              company&apos;s core platform, managed a small team of engineers and
              artists, and worked closely with customers to shape product
              direction and strategy.
            </p>
            <p>
              Today I focus on building practical, well-designed software, both
              through independent projects and freelance work helping small
              businesses establish a modern, professional presence online. I
              enjoy creating tools that solve real problems, whether that&apos;s a
              custom website, a web application, or a product like CatchLogs, a
              fishing log application I built to help anglers track and analyze
              their catches. Outside of work, I enjoy traveling, spending time
              on the water, and getting outdoors whenever I can. Much of my free
              time is spent with my partner and our dog, Suki, exploring new
              places or simply enjoying a quiet day by the lake.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter page="about" />
    </div>
  );
}

export default AboutPage;
