function SectionIntro({ label, title, emphasis, description, className = '' }) {
  return (
    <div className={`section-intro ${className}`.trim()}>
      <div className="section-label">{label}</div>
      <h2 className="section-title">
        {title} {emphasis ? <em>{emphasis}</em> : null}
      </h2>
      {description ? <p className="section-sub">{description}</p> : null}
    </div>
  )
}

export default SectionIntro
