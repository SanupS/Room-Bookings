import { FALLBACK_GRADIENTS } from '../data/rooms.js'

export default function RoomCard({ room, isSelected, onSelect }) {
  const [gradientStart, gradientEnd] = FALLBACK_GRADIENTS[room.type] ?? ['#e2e8f0', '#94a3b8']

  // Layered backgrounds: the photo sits on top of a themed gradient, so if
  // the photo URL ever fails to load, the gradient swatch shows through
  // instead of a broken-image icon.
  const thumbStyle = {
    backgroundImage: `url(${room.image}), linear-gradient(135deg, ${gradientStart}, ${gradientEnd})`,
  }

  return (
    <button
      type="button"
      className={`room-card${isSelected ? ' room-card--selected' : ''}`}
      onClick={() => onSelect(room.code)}
      aria-pressed={isSelected}
    >
      <div className="room-card__thumb" style={thumbStyle} aria-hidden="true" />
      <div className="room-card__code">{room.code}</div>
      <div className="room-card__body">
        <div className="room-card__type">{room.type}</div>
        <div className="room-card__meta">Up to {room.maxGuests} guests</div>
      </div>
      <div className="room-card__price">
        <span>₹{room.pricePerNight.toLocaleString('en-IN')}</span>
        <small>/ night</small>
      </div>
    </button>
  )
}
