import RoomCard from './RoomCard.jsx'

export default function RoomList({ rooms, selectedRoomCode, onSelectRoom }) {
  return (
    <section className="panel">
      <div className="panel__header">
        <h2>1. Select a room</h2>
      </div>
      <div className="panel__body room-list">
        {rooms.map((room) => (
          <RoomCard
            key={room.code}
            room={room}
            isSelected={room.code === selectedRoomCode}
            onSelect={onSelectRoom}
          />
        ))}
      </div>
    </section>
  )
}
