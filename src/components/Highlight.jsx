const colorMap = {
  blue: 'var(--rust)',
  gold: 'var(--accent-gold)',
  purple: 'var(--accent-purple)',
  orange: 'var(--accent-orange)',
}

function Highlight({ color, children }) {
  const resolvedColor = colorMap[color] ?? color

  return (
    <span className="highlight" style={{ '--highlight-color': resolvedColor }}>
      {children}
    </span>
  )
}

export default Highlight
