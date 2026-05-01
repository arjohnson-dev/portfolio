import { pricingPlans } from "../data/siteContent.js";
import SectionIntro from "./SectionIntro.jsx";

function PricingSection() {
  return (
    <section className="pricing" id="pricing">
      <SectionIntro
        label="Working Together"
        title="Clear pricing."
        emphasis="Shared expectations."
      />
      <p className="pricing-note">
        These are two common starting points. If your project needs something
        different, we can talk through the scope together and shape a quote from
        there.
      </p>

      <div className="pricing-grid">
        {pricingPlans.map((plan) => (
          <article
            className={`pricing-card ${plan.featured ? "featured" : ""}`.trim()}
            key={plan.name}
          >
            {plan.badge ? (
              <div
                className={`pricing-badge ${
                  plan.badgeColor ? `pricing-badge--${plan.badgeColor}` : ""
                }`.trim()}
              >
                {plan.badge}
              </div>
            ) : null}
            <div className="pricing-name">{plan.name}</div>
            <div className="pricing-price-row">
              <div className="pricing-price-group">
                <div
                  className={`pricing-price ${plan.custom ? "pricing-price--custom" : ""} ${
                    plan.priceColor ? `pricing-price--${plan.priceColor}` : ""
                  }`.trim()}
                >
                  {plan.price.startsWith("$") ? (
                    <>
                      <sup>$</sup>
                      {plan.price.replace("$", "")}
                    </>
                  ) : (
                    plan.price
                  )}
                </div>
              </div>
            </div>
            {plan.note ? (
              <div className="pricing-price-note">{plan.note}</div>
            ) : null}

            <ul className="pricing-features">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="pricing-actions">
        <a
          href="https://calendly.com/arjohnson-dev"
          className="btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Book A Free Consultation
        </a>
      </div>
    </section>
  );
}

export default PricingSection;
