import { faqs } from '../data/siteContent.js'
import SectionIntro from './SectionIntro.jsx'

function FaqSection() {
  return (
    <section className="faq" id="faq">
      <SectionIntro
        label="Frequently Asked Questions"
        title="Answers to common questions"
        emphasis="before we begin."
      />
      <p className="section-sub">
        Here are a few details that often help people feel more prepared before
        we talk.
      </p>

      <div className="faq-grid">
        {faqs.map((item) => (
          <article className="faq-item" key={item.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FaqSection
