import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { NewsCoverImage } from "@/components/news/NewsCoverImage";
import { getArticleBySlug, getRelatedArticles, newsArticles } from "@/content/news";
import { absoluteUrl } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return newsArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  return buildMetadataArticle(article);
}

function buildMetadataArticle(article: {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
}) {
  return {
    title: `${article.title} | HCCC`,
    description: article.excerpt,
    alternates: { canonical: absoluteUrl(`/news/${article.slug}`) },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      url: absoluteUrl(`/news/${article.slug}`),
    },
  };
}

export default async function NewsArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();
  const related = getRelatedArticles(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    datePublished: article.date,
    description: article.excerpt,
    author: { "@type": "Organization", name: "Holy Cross College of Carigara" },
    publisher: { "@type": "Organization", name: "Holy Cross College of Carigara, Incorporated" },
    mainEntityOfPage: absoluteUrl(`/news/${article.slug}`),
  };

  const shareUrl = absoluteUrl(`/news/${article.slug}`);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        eyebrow={article.category}
        title={article.title}
        description={article.excerpt}
      >
        <time className="text-sm text-white/70" dateTime={article.date}>
          {article.displayDate}
        </time>
      </PageHero>
      <section className="section-pad">
        <div className="container-page grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <article>
            <NewsCoverImage
              src={article.imageSrc}
              alt={article.imageAlt}
              tone={article.imageTone}
              className="mb-8 aspect-[16/9] rounded-2xl"
              priority
            />
            <div className="prose-hccc max-w-none space-y-4 text-base">
              {article.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-border pt-6">
              <p className="w-full text-sm font-semibold text-ink">Share</p>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border px-3 py-2 text-sm font-semibold text-forest-800 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-forest-700 hover:bg-forest-50 hover:shadow-[var(--shadow-soft)]"
              >
                Facebook
              </a>
              <a
                href={`mailto:?subject=${encodeURIComponent(article.title)}&body=${encodeURIComponent(shareUrl)}`}
                className="rounded-md border border-border px-3 py-2 text-sm font-semibold text-forest-800 no-underline transition-all duration-300 hover:-translate-y-0.5 hover:border-forest-700 hover:bg-forest-50 hover:shadow-[var(--shadow-soft)]"
              >
                Email
              </a>
            </div>
          </article>
          <aside>
            <h2 className="font-display text-2xl text-ink">Related news</h2>
            <ul className="mt-4 space-y-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/news/${item.slug}`}
                    className="block rounded-xl border border-border bg-surface p-4 no-underline hover:border-forest-600"
                  >
                    <span className="text-xs text-forest-700">{item.displayDate}</span>
                    <span className="mt-1 block text-sm font-semibold text-ink">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Button href="/news" variant="outline">
                All news
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
