import { PageHero, AdminNote } from "@/components/ui/Section";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { FacebookFollowBanner } from "@/components/social/FacebookFollowBanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Campus Gallery",
  description:
    "Campus gallery for Holy Cross College of Carigara. Follow the official Facebook page for the latest photos and updates.",
  path: "/campus-life/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments from campus life"
        description="Featured campus photography for HCCC. Additional photos from the official Facebook page can be added as they are approved for website use."
      />
      <section className="section-pad">
        <div className="container-wide">
          <AdminNote>
            Download approved photos from the official Facebook page and save them to{" "}
            <code>public/images/gallery/</code> using the filenames listed in{" "}
            <code>images/gallery/README.txt</code>. Missing files fall back to branded color
            frames automatically.
          </AdminNote>
          <div className="mt-8">
            <GalleryGrid />
          </div>
        </div>
      </section>
      <FacebookFollowBanner />
    </>
  );
}
