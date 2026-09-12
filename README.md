# Hotel Room Booking — Coding Test

A single-page room booking UI built for the Raintech coding test: pick a room, pick
check-in/check-out dates, see nights and total price, with validation for bad date input.

## Stack

- **React 18** + **Vite** (plain JS, no TypeScript)
- Plain CSS (no UI library, as the brief allows)

## How to run

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To produce a production build:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data/rooms.js        Hardcoded sample room inventory
  utils/booking.js     Pure date/price calculation + validation logic (no UI)
  components/
    Header.jsx         Top app bar
    RoomList.jsx        Room list panel
    RoomCard.jsx        A single selectable room row
    BookingPanel.jsx    Date inputs, validation message, and stay summary
  App.jsx               Wires state (selected room, dates) and layout together
  main.jsx              React entry point
  index.css             All styling
```

Logic is deliberately kept out of the components: `utils/booking.js` exports pure
functions (`parseDateInput`, `nightsBetween`, `validateBooking`, `calculateStay`)
that don't touch the DOM or React, so they're straightforward to read and to unit
test in isolation.

## Behaviour implemented

- Lists the 5 sample rooms with type, price/night, and max guests.
- Native date pickers for check-in and check-out.
- Once a room and two dates are selected, shows nights and total price
  (nights × price/night).
- Validation, with a clear inline message instead of failing silently:
  - Check-in cannot be in the past (compared at day granularity, so "today" is allowed).
  - Check-out must be strictly after check-in (same-day stays are rejected).
  - A message is also shown if a room hasn't been picked yet.
- The check-out picker's `min` is tied to the chosen check-in date, so obviously
  invalid ranges are discouraged at the input level as well as validated in logic.

## What I'd improve with more time

- Prevent picking a room already booked for the chosen dates (bonus item — out of
  scope for this submission).
- Automated unit tests for `utils/booking.js` (e.g. Vitest).
- Filter/search rooms by max guests.
- Keyboard-friendlier custom date range picker instead of the native `<input type="date">`.
