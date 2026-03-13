import { useForm, ValidationError } from "@formspree/react";
import SectionIntro from "./SectionIntro.jsx";

function ContactSection() {
  const [state, handleSubmit] = useForm("xyknjodz");

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

        {state.succeeded ? (
          <p className="form-success">
            Thanks for reaching out. Your message was sent successfully.
          </p>
        ) : null}

        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Jane Smith"
              />
            </div>
            <div className="form-group">
              <label htmlFor="business-name">Business Name</label>
              <input
                id="business-name"
                name="businessName"
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
              name="email"
              placeholder="jane@smithhardware.com"
              required
            />
            <ValidationError
              className="form-error"
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="How can I help?"
            />
          </div>

          <div className="form-group">
            <label htmlFor="details">Message</label>
            <textarea
              id="details"
              name="message"
              placeholder="Tell me more."
              required
            />
            <ValidationError
              className="form-error"
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            className="form-submit"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send A Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
