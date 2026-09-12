// Pure, UI-free logic for date/price calculations and validation.
// Keeping this separate from components makes it easy to unit test
// and to reason about independently of rendering.

const MS_PER_DAY = 1000 * 60 * 60 * 24

/** Returns today's date with the time stripped, for fair day-based comparisons. */
export function startOfToday() {
  const now = new Date()
  return new Date(now.getFullYear(), now.getMonth(), now.getDate())
}

/** Parses a 'YYYY-MM-DD' input value into a local Date at midnight, or null if empty/invalid. */
export function parseDateInput(value) {
  if (!value) return null
  const [year, month, day] = value.split('-').map(Number)
  if (!year || !month || !day) return null
  const date = new Date(year, month - 1, day)
  return Number.isNaN(date.getTime()) ? null : date
}

/** Whole number of nights between two dates. Assumes checkOut is after checkIn. */
export function nightsBetween(checkIn, checkOut) {
  return Math.round((checkOut.getTime() - checkIn.getTime()) / MS_PER_DAY)
}

/**
 * Validates the selected dates and room, independent of each other and combined.
 * Returns { valid: boolean, message: string|null }.
 */
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

/** Computes nights and total price for a valid booking. Call only after validateBooking passes. */
export function calculateStay({ checkIn, checkOut, room }) {
  const nights = nightsBetween(checkIn, checkOut)
  return {
    nights,
    totalPrice: nights * room.pricePerNight,
  }
}
