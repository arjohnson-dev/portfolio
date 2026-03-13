function BrowserMock() {
  const widths = [75, 80, 65]

  return (
    <div className="browser-mock">
      <div className="browser-bar">
        <span className="browser-dot" />
        <span className="browser-dot" />
        <span className="browser-dot" />
        <div className="browser-url">yourbusiness.com</div>
      </div>

      <div className="browser-content">
        <div className="mock-nav">
          <div className="mock-nav-logo" />
          <div className="mock-nav-links">
            <div className="mock-nav-link" />
            <div className="mock-nav-link" />
            <div className="mock-nav-link" />
          </div>
        </div>

        <div className="mock-hero">
          <div className="mock-hero-tag" />
          <div className="mock-hero-h1" />
          <div className="mock-hero-h2" />
          <div className="mock-hero-p mock-hero-p--full" />
          <div className="mock-hero-p mock-hero-p--wide" />
          <div className="mock-hero-p mock-hero-p--short" />
          <div className="mock-btn" />
        </div>

        <div className="mock-cards">
          {widths.map((width) => (
            <div className="mock-card" key={width}>
              <div className="mock-card-icon" />
              <div className="mock-card-title" />
              <div className="mock-card-text" />
              <div className="mock-card-text" style={{ width: `${width}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrowserMock
