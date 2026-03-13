import { useEffect, useMemo, useState } from 'react'
import Highlight from './Highlight.jsx'

function getTotalCharacters(segments) {
  return segments.reduce((count, segment) => {
    if (segment.break) {
      return count
    }

    return count + segment.text.length
  }, 0)
}

function renderSegmentContent(segment, visibleCharacters) {
  if (segment.break || visibleCharacters <= 0) {
    return null
  }

  const content = segment.text.slice(0, visibleCharacters)

  if (segment.color) {
    return <Highlight color={segment.color}>{content}</Highlight>
  }

  if (segment.emphasis) {
    return <em>{content}</em>
  }

  return content
}

function TypewriterText({
  as = 'p',
  className = '',
  segments,
  speed = 24,
  delay = 0,
  onComplete,
}) {
  const [visibleCount, setVisibleCount] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)
  const totalCharacters = useMemo(() => getTotalCharacters(segments), [segments])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => setReducedMotion(mediaQuery.matches)

    updatePreference()
    mediaQuery.addEventListener('change', updatePreference)

    return () => mediaQuery.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (reducedMotion) {
      setVisibleCount(totalCharacters)
      return undefined
    }

    setVisibleCount(0)
    let intervalId

    const timeoutId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        setVisibleCount((currentCount) => {
          if (currentCount >= totalCharacters) {
            window.clearInterval(intervalId)
            return currentCount
          }

          return currentCount + 1
        })
      }, speed)
    }, delay)

    return () => {
      window.clearTimeout(timeoutId)
      if (intervalId) {
        window.clearInterval(intervalId)
      }
    }
  }, [delay, reducedMotion, speed, totalCharacters])

  useEffect(() => {
    if (visibleCount === totalCharacters) {
      onComplete?.()
    }
  }, [onComplete, totalCharacters, visibleCount])

  const Component = as
  let charactersRemaining = visibleCount
  let processedCharacters = 0

  return (
    <Component className={`typewriter ${className}`.trim()}>
      {segments.map((segment, index) => {
        if (segment.break) {
          return visibleCount > processedCharacters ? <br key={`break-${index}`} /> : null
        }

        const visibleCharacters = Math.max(
          0,
          Math.min(segment.text.length, charactersRemaining),
        )

        charactersRemaining -= visibleCharacters
        processedCharacters += segment.text.length

        return (
          <span key={`${segment.text}-${index}`}>
            {renderSegmentContent(segment, visibleCharacters)}
          </span>
        )
      })}
      {visibleCount < totalCharacters ? (
        <span className="typewriter-caret" aria-hidden="true" />
      ) : null}
    </Component>
  )
}

export default TypewriterText
