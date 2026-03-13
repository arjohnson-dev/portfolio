import { processItems } from "../data/siteContent.js";
import SectionIntro from "./SectionIntro.jsx";

function ProcessSection() {
  return (
    <section className="how" id="about">
      <div className="how-layout">
        <div className="how-left">
          <SectionIntro
            label="How I Work"
            title="A process that stays"
            emphasis="simple."
            description="You do not need to arrive with a perfect plan. Whether you have a finished concept or only a starting point, we can shape the project step by step."
          />
        </div>

        <div className="how-right">
          {processItems.map((item) => (
            <article className="how-item" key={item.number}>
              <div className="how-item-header">
                <span className="how-num-inline">{item.number}</span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
