export default function RoomCard({ room, isSelected, onSelect }) {
  return (
    <button
      type="button"
      className={`room-card${isSelected ? ' room-card--selected' : ''}`}
      onClick={() => onSelect(room.code)}
      aria-pressed={isSelected}
    >
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
