import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import RoomList from './components/RoomList.jsx'
import BookingPanel from './components/BookingPanel.jsx'
import { ROOMS } from './data/rooms.js'
import { parseDateInput, startOfToday, validateBooking } from './utils/booking.js'

function toDateInputValue(date) {
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const dd = String(date.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

export default function App() {
  const [selectedRoomCode, setSelectedRoomCode] = useState(null)
  const [checkInValue, setCheckInValue] = useState('')
  const [checkOutValue, setCheckOutValue] = useState('')

  const minCheckIn = useMemo(() => toDateInputValue(startOfToday()), [])
  const selectedRoom = ROOMS.find((room) => room.code === selectedRoomCode) ?? null

  const validation = validateBooking({
    checkIn: parseDateInput(checkInValue),
    checkOut: parseDateInput(checkOutValue),
    room: selectedRoom,
  })

  return (
    <div className="app">
      <Header />
      <main className="app__grid">
        <RoomList
          rooms={ROOMS}
          selectedRoomCode={selectedRoomCode}
          onSelectRoom={setSelectedRoomCode}
        />
        <BookingPanel
          checkInValue={checkInValue}
          checkOutValue={checkOutValue}
          onCheckInChange={setCheckInValue}
          onCheckOutChange={setCheckOutValue}
          selectedRoom={selectedRoom}
          validation={validation}
          minCheckIn={minCheckIn}
        />
      </main>
    </div>
  )
}
