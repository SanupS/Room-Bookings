export default function Header() {
  const today = new Date().toLocaleDateString('en-IN', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return (
    <header className="app-header">
      <div className="app-header__brand">
        <span className="app-header__mark">H</span>
        <div>
          <h1>Rajarani Hotels</h1>
          <p>Room booking</p>
        </div>
      </div>
      <div className="app-header__date">{today}</div>
    </header>
  )
}
