import { useSyncExternalStore } from 'react'

const compactLayout = window.matchMedia('(max-width: 620px)')
function subscribeToLayout(listener) {
  compactLayout.addEventListener('change', listener)
  return () => compactLayout.removeEventListener('change', listener)
}
const isCompact = () => compactLayout.matches

export default function SectionIntro({ title, lead, children, heading: Heading = 'h2', id }) {
  const mobile = useSyncExternalStore(subscribeToLayout, isCompact)
  if (!mobile) return <><Heading id={id}>{title}</Heading><p>{lead} {children}</p></>

  return (
    <details className="section-disclosure">
      <summary>
        <Heading id={id}>{title}</Heading>
        <span className="section-preview">{lead}</span>
      </summary>
      <p>{children}</p>
    </details>
  )
}
