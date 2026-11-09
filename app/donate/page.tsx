import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, PageTitle } from "../components/site";
import { templeImage } from "../components/content";

export const metadata: Metadata = { title: "Offerings & Giving" };

const givingWays = [
  { mark: "01", title: "Support daily worship", text: "Offerings help care for the shrines and sustain the daily rituals that welcome devotees." },
  { mark: "02", title: "Share a meal", text: "Support annadaanam and community meals, creating a place at the table for everyone." },
  { mark: "03", title: "Celebrate together", text: "Help bring festivals, cultural learning and community programs to life throughout the year." },
];

export default function DonatePage() {
  return (
    <main>
      <PageIntro eyebrow="Give with an open heart" title="Make an offering." description="Every contribution helps care for a shared spiritual home and the people who make it a community." image={templeImage("photo-1715876722520-02ccc9248dab", 1800)} />
      <section className="page-body">
        <div className="wrap">
          <PageTitle eyebrow="Your generosity in action" title="A little becomes a lot" description="Offerings support the ongoing care of the temple, daily worship and programs that bring people together." />
          <div className="giving-layout">
            <div className="giving-methods">
              {givingWays.map((way) => <article className="giving-method" key={way.mark}><span className="giving-method-mark">{way.mark}</span><div><h3>{way.title}</h3><p>{way.text}</p></div></article>)}
            </div>
            <aside className="giving-aside">
              <h3>Offer in person</h3>
              <p>You are welcome to make an offering at the temple during opening hours. For current donation options, receipts or a larger contribution, please speak with the temple office.</p>
              <p>Thank you for supporting a place of worship, service and belonging.</p>
              <Link className="button button-dark" href="/contact">Contact the temple <span aria-hidden="true">↗</span></Link>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}