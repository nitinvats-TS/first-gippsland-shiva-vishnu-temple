import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/site";
import { templeImage } from "../components/content";

export const metadata: Metadata = { title: "Contact & Location" };

export default function ContactPage() {
  return (
    <main>
      <PageIntro eyebrow="The door is open" title="Come say hello." description="Planning a visit, asking about a ceremony or looking to get involved? We would be glad to welcome you." image={templeImage("photo-1759134334610-488eb3937c82", 1800)} />
      <section className="page-body">
        <div className="wrap contact-layout">
          <div className="contact-details">
            <p className="eyebrow">Find your way here</p>
            <h2>We look forward to welcoming you.</h2>
            <p>The temple is in Traralgon, Victoria. Check opening hours before travelling, especially on festival days when timings may vary.</p>
            <div className="detail-row"><strong>Address</strong><span>First Gippsland Shiva Vishnu Temple<br />Near Traralgon Railway Station<br />Traralgon VIC 3844<br />Australia</span></div>
            <div className="detail-row"><strong>Phone</strong><a href="tel:+61300000000">(03) 0000 0000</a></div>
            <div className="detail-row"><strong>Email</strong><a href="mailto:info@gippslandtemple.org.au">info@gippslandtemple.org.au</a></div>
            <div className="detail-row"><strong>Daily darshan</strong><span>5:30 am–12:00 pm<br />5:00 pm–8:30 pm</span></div>
            <div className="detail-row"><strong>Directions</strong><span>Near Traralgon Railway Station, Traralgon VIC 3844, Australia.</span></div>
            <Link className="button button-dark" href="/visit">Visiting information <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="contact-map"><iframe title="Map to Traralgon Railway Station, Traralgon VIC 3844" src="https://maps.google.com/maps?q=Traralgon%20Railway%20Station%2C%20Traralgon%20VIC%203844%2C%20Australia&t=&z=15&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /><a className="map-label" href="https://maps.google.com/?q=Traralgon+Railway+Station%2C+Traralgon+VIC+3844%2C+Australia" target="_blank" rel="noreferrer">Open directions <span aria-hidden="true">↗</span></a></div>
        </div>
      </section>
    </main>
  );
}