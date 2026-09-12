

const MS_PER_DAY = 1000 * 60 * 60 * 24


export function startOfToday() {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}


export function parseDateInput(value) {
  if (!value) return null
  const [year, month, day] = value.split('-').map(Number)
  if (!year || !month || !day) return null
  const date = new Date(year, month - 1, day)
  return Number.isNaN(date.getTime()) ? null : date
}


export function nightsBetween(checkIn, checkOut) {
  return Math.round((checkOut.getTime() - checkIn.getTime()) / MS_PER_DAY)
}


export function validateBooking({ checkIn, checkOut, room }) {
  if (!checkIn || !checkOut) {
    return { valid: false, message: 'Choose both a check-in and check-out date.' }
  }

  const today = startOfToday()

  if (checkIn < today) {
    return { valid: false, message: 'Check-in date cannot be in the past.' }
  }

  if (checkOut <= checkIn) {
    return { valid: false, message: 'Check-out date must be after check-in date.' }
  }

  if (!room) {
    return { valid: false, message: 'Select a room to see the total price.' }
  }

  return { valid: true, message: null }
}


export function calculateStay({ checkIn, checkOut, room }) {
  const nights = nightsBetween(checkIn, checkOut)
  return {
    nights,
    totalPrice: nights * room.pricePerNight,
  }
}
