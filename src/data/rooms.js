// Sample room inventory. In a real app this would come from an API.
// `image` is a representative stock photo; RoomCard falls back to a
// gradient swatch (see FALLBACK_GRADIENTS) if it fails to load.
export const ROOMS = [
  {
    code: 'R101',
    type: 'Deluxe Room',
    pricePerNight: 3500,
    maxGuests: 2,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=200&h=160&q=70',
  },
  {
    code: 'R102',
    type: 'Deluxe Room',
    pricePerNight: 3500,
    maxGuests: 2,
    image: 'https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=200&h=160&q=70',
  },
  {
    code: 'R201',
    type: 'Executive Suite',
    pricePerNight: 5800,
    maxGuests: 3,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=200&h=160&q=70',
  },
  {
    code: 'R202',
    type: 'Executive Suite',
    pricePerNight: 5800,
    maxGuests: 3,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=200&h=160&q=70',
  },
  {
    code: 'R301',
    type: 'Family Room',
    pricePerNight: 4200,
    maxGuests: 4,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=200&h=160&q=70',
  },
]

// Fallback gradient per room type, used behind the photo so a failed
// image load never shows a broken-image icon — just a themed swatch.
export const FALLBACK_GRADIENTS = {
  'Deluxe Room': ['#fde8c8', '#f0b429'],
  'Executive Suite': ['#c7d8f0', '#2b4a76'],
  'Family Room': ['#d7f0df', '#2f9e59'],
}

export const HERO_IMAGE =
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&h=500&q=70'
