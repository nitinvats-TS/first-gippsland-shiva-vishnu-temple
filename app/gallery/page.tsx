import type { Metadata } from "next";
import { PageIntro, PageTitle } from "../components/site";
import { galleryImages, templeImage } from "../components/content";

export const metadata: Metadata = { title: "Gallery" };

export default function GalleryPage() {
  return (
    <main>
      <PageIntro eyebrow="Life at the temple" title="Moments we share." description="A glimpse of the spaces, celebrations and quiet moments that make a spiritual home." image={templeImage("photo-1679635520566-980d28a8e507", 1800)} />
      <section className="page-body">
        <div className="wrap">
          <PageTitle eyebrow="A community in pictures" title="Held in memory" description="From the stillness of the shrine to the joyful bustle of a festival, every moment belongs to the community." />
          <div className="photo-grid">
            {galleryImages.map((image) => (
              <div className="photo-grid-item" key={image.src} role="img" aria-label={image.alt} style={{ backgroundImage: `url('${templeImage(image.src, 1000)}')` }}><span>{image.alt}</span></div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}