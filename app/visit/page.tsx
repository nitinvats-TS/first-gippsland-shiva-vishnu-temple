import type { Metadata } from "next";
import { PageIntro, PageTitle } from "../components/site";
import { templeImage } from "../components/content";

export const metadata: Metadata = { title: "Visit the Temple" };

const hours = [
  { day: "Monday – Friday", time: "5:30 am – 12:00 pm · 5:00 pm – 8:30 pm" },
  { day: "Weekends", time: "5:30 am – 12:00 pm · 5:00 pm – 8:30 pm" },
  { day: "Special poojas", time: "Weekends and festival days; timings may vary" },
];

export default function VisitPage() {
  return (
    <main>
      <PageIntro eyebrow="Your first visit" title="You are welcome here." description="Come for darshan, a festival or a moment of quiet. The temple is open to everyone." image={templeImage("photo-1689525508929-eb6b773b1fd2", 1800)} />
      <section className="page-body">
        <div className="wrap">
          <PageTitle eyebrow="Plan your visit" title="A little practical detail" description="The temple welcomes visitors throughout the week. Festival schedules can differ from regular hours." />
          <div className="visit-hours">
            {hours.map((row) => <div className="visit-hours-row" key={row.day}><strong>{row.day}</strong><span>{row.time}</span></div>)}
          </div>
          <p className="visit-note">Dress modestly when visiting the shrines. Please follow any guidance from temple staff and check festival timings before travelling.</p>
        </div>
      </section>
      <section className="soft-band"><div className="wrap visit-cta"><div><p className="eyebrow">Getting here</p><h2>Near Traralgon Railway Station.</h2><p>Traralgon VIC 3844, Australia</p></div><a className="button button-dark" href="https://maps.google.com/?q=Traralgon+Railway+Station%2C+Traralgon+VIC+3844%2C+Australia" target="_blank" rel="noreferrer">Open directions <span aria-hidden="true">↗</span></a></div></section>
    </main>
  );
}