import { calculateStay } from '../utils/booking.js'

export default function BookingPanel({
  checkInValue,
  checkOutValue,
  onCheckInChange,
  onCheckOutChange,
  selectedRoom,
  validation,
  minCheckIn,
}) {
  const showSummary = validation.valid
  const stay = showSummary
    ? calculateStay({
        checkIn: new Date(checkInValue),
        checkOut: new Date(checkOutValue),
        room: selectedRoom,
      })
    : null

  return (
    <section className="panel">
      <div className="panel__header">
        <h2>2. Choose dates &amp; confirm</h2>
      </div>
      <div className="panel__body">
        <div className="date-fields">
          <label className="field">
            <span>Check-in</span>
            <input
              type="date"
              value={checkInValue}
              min={minCheckIn}
              onChange={(event) => onCheckInChange(event.target.value)}
            />
          </label>
          <label className="field">
            <span>Check-out</span>
            <input
              type="date"
              value={checkOutValue}
              min={checkInValue || minCheckIn}
              onChange={(event) => onCheckOutChange(event.target.value)}
            />
          </label>
        </div>

        {!validation.valid && (checkInValue || checkOutValue || selectedRoom) && (
          <p className="message message--error" role="alert">
            {validation.message}
          </p>
        )}

        {!validation.valid && !checkInValue && !checkOutValue && !selectedRoom && (
          <p className="message message--hint">
            Pick a room and both dates to see your total.
          </p>
        )}

        {showSummary && (
          <div className="summary">
            <div className="summary__row">
              <span>Room</span>
              <strong>
                {selectedRoom.type} ({selectedRoom.code})
              </strong>
            </div>
            <div className="summary__row">
              <span>Nights</span>
              <strong>{stay.nights}</strong>
            </div>
            <div className="summary__row">
              <span>Rate</span>
              <strong>₹{selectedRoom.pricePerNight.toLocaleString('en-IN')} / night</strong>
            </div>
            <div className="summary__row summary__row--total">
              <span>Total price</span>
              <strong>₹{stay.totalPrice.toLocaleString('en-IN')}</strong>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
