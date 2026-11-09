import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "../components/site";
import { templeImage } from "../components/content";

export const metadata: Metadata = { title: "Our Temple" };

const values = [
  { title: "Worship", text: "A shared space for prayer and reflection, welcoming every devotee and every sincere visitor." },
  { title: "Tradition", text: "Ritual, language and celebration keep ancient wisdom present in the lives of new generations." },
  { title: "Service", text: "Seva is devotion in action: care for one another and for the wider community around us." },
];

export default function AboutPage() {
  return (
    <main>
      <PageIntro eyebrow="Rooted in devotion" title="A temple for all." description="A place to worship, learn and belong, bringing the richness of Hindu tradition into everyday life in Traralgon." image={templeImage("photo-1759134334610-488eb3937c82", 1800)} />
      <section className="page-body">
        <div className="wrap prose-layout">
          <div className="prose-copy">
            <p className="eyebrow">Our story</p>
            <h2>One home, many traditions.</h2>
            <p>First Gippsland Shiva Vishnu Temple is a spiritual home for Traralgon and the wider Gippsland Hindu community. Here, devotion is expressed in many languages and traditions, united by reverence, generosity and a deep sense of belonging.</p>
            <p>Whether you come for daily darshan, a festival, a cultural program or a quiet moment, you are welcome. We honour the practices carried by families over generations while making room for the community growing around us today.</p>
            <Link className="button button-dark" href="/visit">Plan a visit <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="image-panel" role="img" aria-label="Carved details of a Hindu temple" style={{ backgroundImage: `url('${templeImage("photo-1677434654722-69e7ba88b4ef", 1200)}')` }} />
        </div>
      </section>
      <section className="soft-band">
        <div className="wrap value-grid">
          {values.map((value) => <article className="value-item" key={value.title}><h3>{value.title}</h3><p>{value.text}</p></article>)}
        </div>
      </section>
    </main>
  );
}