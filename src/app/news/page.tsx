import Link from "next/link";
import { PageHero } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { NewsCoverImage } from "@/components/news/NewsCoverImage";
import { buildMetadata } from "@/lib/seo";
import { newsArticles } from "@/content/news";

export const metadata = buildMetadata({
  title: "News & Announcements",
  description: "Latest news and announcements from Holy Cross College of Carigara.",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="Announcements from the HCCC community"
        description="Public updates on admissions, academics, events, and school life."
      />
      <section className="section-pad">
        <div className="container-wide grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {newsArticles.map((article, index) => (
            <Reveal key={article.slug}>
              <Link
                href={`/news/${article.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface no-underline shadow-[var(--shadow-soft)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
              >
                <NewsCoverImage
                  src={article.imageSrc}
                  alt={article.imageAlt}
                  tone={article.imageTone}
                  className="aspect-[16/10]"
                  priority={index < 3}
                />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2 text-xs text-forest-700">
                    <span className="font-bold uppercase tracking-wider">{article.category}</span>
                    <span className="text-border-strong">•</span>
                    <time dateTime={article.date}>{article.displayDate}</time>
                  </div>
                  <h2 className="font-display mt-3 text-2xl leading-snug text-ink">
                    {article.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {article.excerpt}
                  </p>
                  <span className="mt-4 text-sm font-semibold text-forest-800">Read More →</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
