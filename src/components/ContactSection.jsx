import SectionIntro from "./SectionIntro.jsx";

function ContactSection() {
  return (
    <section className="contact" id="contact">
      <div className="contact-info">
        <SectionIntro
          label="Start With A Conversation"
          title="Let's figure out what would be"
          emphasis="most helpful."
          description="Share a little about your business and what you are thinking through. I'll follow up with thoughtful feedback and some clear next steps."
        />
      </div>

      <div className="contact-form">
        <h3 className="form-title">Need more information?</h3>

        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input id="name" type="text" placeholder="Jane Smith" />
            </div>
            <div className="form-group">
              <label htmlFor="business-name">Business Name</label>
              <input
                id="business-name"
                type="text"
                placeholder="Smith Hardware Co."
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="jane@smithhardware.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input id="subject" type="text" placeholder="How can I help?" />
          </div>

          <div className="form-group">
            <label htmlFor="details">Message</label>
            <textarea id="details" placeholder="Tell me more." />
          </div>

          <button type="submit" className="form-submit">
            Send Your Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
