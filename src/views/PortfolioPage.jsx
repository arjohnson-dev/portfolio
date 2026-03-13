import Navigation from "../components/Navigation.jsx";
import SiteFooter from "../components/SiteFooter.jsx";
import { portfolioProjects } from "../data/siteContent.js";

function PortfolioPage() {
  return (
    <div className="page-shell">
      <Navigation page="portfolio" />
      <main className="portfolio-page">
        <section className="portfolio-hero">
          <div className="section-label portfolio-label">Portfolio</div>
          <h1 className="section-title portfolio-title">
            A selection of websites I&apos;ve designed and built.
          </h1>
          <p className="portfolio-intro">
            A straightforward look at recent work across products, business
            websites, and this portfolio itself.
          </p>
        </section>

        <section className="portfolio-list-section">
          <div className="portfolio-list">
            {portfolioProjects.map((project) => {
              const isLink = Boolean(project.href);
              const isExternal = project.href?.startsWith("http");
              const itemClassName = `portfolio-item${
                isLink ? "" : " portfolio-item--static"
              }`;
              const content = (
                <>
                  {project.imageSrc ? (
                    <div className="portfolio-item-image-wrap">
                      <img
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        className="portfolio-item-image"
                        style={{
                          objectPosition: project.imagePosition ?? "center",
                        }}
                      />
                    </div>
                  ) : null}

                  <div className="portfolio-item-content">
                    <div className="portfolio-item-name">{project.name}</div>
                    {project.href ? (
                      <div className="portfolio-item-url">{project.href}</div>
                    ) : null}
                    <p className="portfolio-item-description">
                      {project.description}
                    </p>
                  </div>
                </>
              );

              if (!isLink) {
                return (
                  <article key={project.name} className={itemClassName}>
                    {content}
                  </article>
                );
              }

              return (
                <a
                  key={project.name}
                  href={project.href}
                  className={itemClassName}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noreferrer" : undefined}
                >
                  {content}
                </a>
              );
            })}
          </div>
        </section>
      </main>
      <SiteFooter page="portfolio" />
    </div>
  );
}

export default PortfolioPage;
