import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, PageTitle } from "../components/site";
import { services, templeImage } from "../components/content";

export const metadata: Metadata = { title: "Community & Service" };

export default function CommunityPage() {
  return (
    <main>
      <PageIntro eyebrow="Seva · service" title="Care is a practice." description="A temple is made by the people who gather, serve and care for one another. There is room for you here." image={templeImage("photo-1715876722520-02ccc9248dab", 1800)} />
      <section className="page-body">
        <div className="wrap">
          <PageTitle eyebrow="A community that cares" title="Many ways to take part" description="From sharing a meal to passing on a tradition, community service connects devotion with everyday life." />
          <div className="service-grid community-grid">
            {services.map((service) => <article className="service-item" key={service.number}><span className="service-number">{service.number}</span><h3>{service.name}</h3><p>{service.detail}</p><Link href="/contact" className="service-link">Ask about taking part <span aria-hidden="true">→</span></Link></article>)}
          </div>
          <div className="community-quote"><span aria-hidden="true">“</span><p>Service offered with sincerity is itself a form of worship.</p></div>
        </div>
      </section>
    </main>
  );
}