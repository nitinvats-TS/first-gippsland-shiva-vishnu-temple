import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, PageTitle } from "../components/site";
import { deities, templeImage } from "../components/content";

export const metadata: Metadata = { title: "Deities" };

export default function DeitiesPage() {
  return (
    <main>
      <PageIntro eyebrow="Many forms, one devotion" title="Meet the deities." description="Each divine form offers a different way to reflect on courage, wisdom, compassion and the sacred." image={templeImage("photo-1689525508929-eb6b773b1fd2", 1800)} />
      <section className="page-body">
        <div className="wrap">
          <PageTitle eyebrow="A living tradition" title="A place for every prayer" description="Explore the deities worshipped at the temple and the qualities they inspire in daily life." />
          <div className="deities-page-grid">
            {deities.map((deity) => (
              <article className={`deity-card deity-${deity.tone}`} key={deity.name}>
                <span className="deity-mark" aria-hidden="true">{deity.mark}</span>
                <span className="deity-name">{deity.name}</span>
                <span className="deity-subtitle">{deity.subtitle}</span>
                <span className="card-arrow" aria-hidden="true">✳</span>
                <span className="deity-description">{deity.description}</span>
              </article>
            ))}
          </div>
          <div className="page-callout"><p>All are welcome to join daily worship and festival observances.</p><Link className="text-link" href="/visit">Visit the temple <span aria-hidden="true">→</span></Link></div>
        </div>
      </section>
    </main>
  );
}