import type { Metadata } from "next";
import { PageIntro, PageTitle } from "../components/site";
import { festivals, templeImage } from "../components/content";

export const metadata: Metadata = { title: "Festivals & Events" };

export default function EventsPage() {
  return (
    <main>
      <PageIntro eyebrow="Gather in celebration" title="The year, together." description="Festival days bring the temple to life with prayer, music, colour and the joy of being together." image={templeImage("photo-1759509334486-3ae81c4dcb01", 1800)} />
      <section className="page-body">
        <div className="wrap">
          <PageTitle eyebrow="2026 festival calendar" title="Save a place in your year" description="Join us for the festivals and observances that bring our community together throughout the year." />
          <div className="events-page-list">
            {festivals.map((festival) => (
              <article className="festival-row" key={festival.name}>
                <div className="festival-date"><span>{festival.month}</span><strong>{festival.day}</strong></div>
                <div className="festival-info"><h3>{festival.name}</h3><p>{festival.detail}</p></div>
                <span className="festival-arrow" aria-hidden="true">✳</span>
              </article>
            ))}
          </div>
          <p className="event-note">Dates are indicative and follow the Hindu lunar calendar. Please confirm observance dates and timings with the temple before travelling.</p>
        </div>
      </section>
    </main>
  );
}