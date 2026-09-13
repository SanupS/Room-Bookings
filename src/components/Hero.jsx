import { HERO_IMAGE } from '../data/rooms.js'

export default function Hero() {
 


  
  const heroStyle = {
    backgroundImage: [
      'linear-gradient(120deg, rgba(20,41,61,0.82), rgba(20,41,61,0.45))',
      `url(${HERO_IMAGE})`,
      'linear-gradient(120deg, #1d3a56, #14293d)',
    ].join(', '),
  }

  return (
    <section className="hero" style={heroStyle}>
      <div className="hero__content">
        <p className="hero__eyebrow">Rajarani Hotels</p>
        <h2>Find your perfect room</h2>
        <p className="hero__sub">Pick a room and your dates below to see the total instantly.</p>
      </div>
    </section>
  )
}
