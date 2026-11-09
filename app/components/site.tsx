"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { href: "/about", label: "Our temple" },
  { href: "/deities", label: "Deities" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/community", label: "Community" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="utility-bar">
        <div className="wrap utility-inner">
          <span>Traralgon, Victoria <span className="utility-divider">·</span> All are welcome</span>
          <Link href="/visit">Today&apos;s timings <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
      <header className="site-header">
        <div className="wrap header-inner">
          <Link className="brand" href="/" aria-label="First Gippsland Shiva Vishnu Temple home" onClick={() => setMenuOpen(false)}>
            <span className="brand-seal" aria-hidden="true">ॐ</span>
            <span className="brand-copy"><strong>First Gippsland</strong><small>SHIVA VISHNU TEMPLE · TRARALGON</small></span>
          </Link>
          <button className={`menu-toggle${menuOpen ? " is-open" : ""}`} type="button" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
            <span /><span />
          </button>
          <nav className={`main-nav${menuOpen ? " nav-open" : ""}`} aria-label="Main navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</Link>
            ))}
            <Link className="nav-visit" href="/visit" onClick={() => setMenuOpen(false)}>Visit us <span aria-hidden="true">↗</span></Link>
            <Link className="nav-donate" href="/donate" onClick={() => setMenuOpen(false)}>Give with love</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <div className="footer-about">
          <Link className="brand brand-footer" href="/">
            <span className="brand-seal" aria-hidden="true">ॐ</span>
            <span className="brand-copy"><strong>First Gippsland</strong><small>SHIVA VISHNU TEMPLE · TRARALGON</small></span>
          </Link>
          <p>A place for worship, service and community. Rooted in tradition, open to all.</p>
          <span className="footer-blessing">Lokah samastah sukhino bhavantu</span>
        </div>
        <div className="footer-column"><h2>Discover</h2><Link href="/about">Our temple</Link><Link href="/deities">Deities</Link><Link href="/events">Events</Link><Link href="/gallery">Gallery</Link></div>
        <div className="footer-column"><h2>Get involved</h2><Link href="/community">Community</Link><Link href="/donate">Make an offering</Link><Link href="/contact">Contact</Link><Link href="/visit">Plan a visit</Link></div>
        <div className="footer-column footer-contact"><h2>Find us</h2><p>First Gippsland Shiva Vishnu Temple<br />Near Traralgon Railway Station<br />Traralgon VIC 3844<br />Australia</p><a href="tel:+61300000000">(03) 0000 0000</a><a href="mailto:info@gippslandtemple.org.au">info@gippslandtemple.org.au</a><Link href="https://maps.google.com/?q=Traralgon+Railway+Station%2C+Traralgon+VIC+3844%2C+Australia" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></Link></div>
      </div>
      <div className="wrap footer-bottom"><span>© First Gippsland Shiva Vishnu Temple. All are welcome.</span><span>Made for devotion. Held by community.</span></div>
    </footer>
  );
}

export function SectionHeading({ eyebrow, title, detail, link, linkText }: { eyebrow: string; title: string; detail?: string; link?: string; linkText?: string }) {
  return (
    <div className="section-heading">
      <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{detail && <p className="section-detail">{detail}</p>}</div>
      {link && <Link className="text-link heading-link" href={link}>{linkText} <span aria-hidden="true">→</span></Link>}
    </div>
  );
}

export function PageIntro({ eyebrow, title, description, image }: { eyebrow: string; title: string; description: string; image: string }) {
  return (
    <section className="page-intro" style={{ backgroundImage: `url('${image}')` }}>
      <div className="page-intro-shade" />
      <div className="wrap page-intro-content"><p className="eyebrow eyebrow-light">{eyebrow}</p><h1>{title}</h1><p>{description}</p></div>
    </section>
  );
}

export function PageTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="page-title"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2><p>{description}</p></div>;
}