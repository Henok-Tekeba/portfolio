import useCursor from '../hooks/useCursor'

export default function Cursor() {
  useCursor()

  return (
    <>
      <div id="cursor" style={{
        position: 'fixed',
        width: '10px',
        height: '10px',
        background: 'var(--accent)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 99999,
        transform: 'translate(-50%, -50%)',
        mixBlendMode: 'difference',
        transition: 'width 0.3s, height 0.3s',
      }} />
      <div id="cursor-ring" style={{
        position: 'fixed',
        width: '38px',
        height: '38px',
        border: '1px solid rgba(212,168,83,0.35)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 99998,
        transform: 'translate(-50%, -50%)',
        transition: 'width 0.4s, height 0.4s, border-color 0.3s',
      }} />
    </>
  )
}