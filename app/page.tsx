import Link from "next/link";
import { SectionHeading } from "./components/site";
import { deities, festivals, galleryImages, services, templeImage } from "./components/content";

export default function Home() {
  return (
    <main>
      <section className="hero" style={{ backgroundImage: `url('${templeImage("photo-1689525508929-eb6b773b1fd2", 2200)}')` }}>
        <div className="hero-shade" />
        <div className="hero-content wrap">
          <p className="eyebrow eyebrow-light"><span /> First Gippsland Shiva Vishnu Temple</p>
          <h1>A sacred home<br /><em>in Gippsland.</em></h1>
          <p className="hero-copy">A place for worship, culture and community in Traralgon. Rooted in tradition, open to all.</p>
          <div className="hero-actions">
            <Link className="button button-gold" href="/visit">Plan your visit <span aria-hidden="true">↗</span></Link>
            <Link className="button button-ghost" href="/events">Explore what&apos;s on</Link>
          </div>
          <div className="hero-caption"><span className="caption-rule" /> Traralgon <span>·</span> Victoria, Australia</div>
        </div>
        <a className="hero-scroll" href="#welcome"><span /> Scroll to discover</a>
      </section>

      <section className="timings-band" id="welcome">
        <div className="wrap timings-inner">
          <div className="timings-label"><span className="mini-sun">✳</span><div><span className="eyebrow">Come as you are</span><strong>Daily darshan</strong></div></div>
          <div className="timing-item"><span>Morning</span><strong>5:30 am – 12:00 pm</strong></div>
          <div className="timing-item"><span>Evening</span><strong>5:00 pm – 8:30 pm</strong></div>
          <Link className="text-link" href="/visit">Plan your visit <span aria-hidden="true">→</span></Link>
        </div>
      </section>

      <section className="section section-deities">
        <div className="wrap">
          <SectionHeading eyebrow="Many forms, one devotion" title="Meet the deities" detail="Find a moment of stillness, gratitude or courage with the divine forms loved across generations." link="/deities" linkText="Explore all deities" />
          <div className="deity-grid">
            {deities.map((deity) => (
              <Link className={`deity-card deity-${deity.tone}`} href="/deities" key={deity.name}>
                <span className="deity-mark" aria-hidden="true">{deity.mark}</span>
                <span className="deity-name">{deity.name}</span>
                <span className="deity-subtitle">{deity.subtitle}</span>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section festivals-section">
        <div className="wrap festival-layout">
          <div className="festival-intro">
            <p className="eyebrow">Mark the moment</p>
            <h2>Our year, in<br /><em>celebration.</em></h2>
            <p>From quiet rituals to joyful gatherings, there is always a reason to come together.</p>
            <Link className="button button-dark" href="/events">View all events <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="festival-list">
            {festivals.map((festival) => (
              <article className="festival-row" key={festival.name}>
                <div className="festival-date"><span>{festival.month}</span><strong>{festival.day}</strong></div>
                <div className="festival-info"><h3>{festival.name}</h3><p>{festival.note}</p></div>
                <span className="festival-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
            <p className="calendar-note">Festival dates are indicative and follow the Hindu lunar calendar. Please check with the temple before travelling.</p>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="wrap">
          <SectionHeading eyebrow="More than a place of worship" title="A community that cares" detail="Service is at the heart of our practice. There is a place here for every age, every story and every helping hand." />
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-item" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.name}</h3>
                <p>{service.detail}</p>
                <Link href="/community" aria-label={`Learn about ${service.name}`} className="service-link">Learn more <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="wrap">
          <SectionHeading eyebrow="Life at the temple" title="Moments that stay with us" link="/gallery" linkText="Visit the gallery" />
          <div className="gallery-grid">
            {galleryImages.map((image, index) => (
              <Link className={`gallery-tile gallery-tile-${index + 1}`} href="/gallery" key={image.src} aria-label={`Open gallery: ${image.alt}`} style={{ backgroundImage: `url('${templeImage(image.src, 1000)}')` }}>
                <span>{image.alt}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="visit-section">
        <div className="visit-copy">
          <p className="eyebrow eyebrow-light">Your next visit</p>
          <h2>A little closer<br />to the sacred.</h2>
          <p>We welcome you to worship, learn and share in community. All are welcome at the temple.</p>
          <Link className="button button-gold" href="/visit">Opening hours & directions <span aria-hidden="true">↗</span></Link>
        </div>
        <div className="map-frame" aria-label="Map showing First Gippsland Shiva Vishnu Temple in Traralgon">
          <iframe title="Map near Traralgon Railway Station, Traralgon VIC 3844" src="https://maps.google.com/maps?q=Traralgon%20Railway%20Station%2C%20Traralgon%20VIC%203844%2C%20Australia&t=&z=15&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          <a className="map-label" href="https://maps.google.com/?q=Traralgon+Railway+Station%2C+Traralgon+VIC+3844%2C+Australia" target="_blank" rel="noreferrer">Open directions <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="contact-strip">
        <div className="wrap contact-inner">
          <div><p className="eyebrow">We would love to hear from you</p><h2>Make this place yours.</h2></div>
          <p>Questions about worship, visiting or getting involved? Our community is here to help.</p>
          <Link className="button button-dark" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
        </div>
      </section>
    </main>
  );
}