import { Button } from "@/components/ui/Button";
import { FacebookIcon } from "@/components/ui/FacebookIcon";
import { siteConfig } from "@/content/site";

export function FacebookFollowBanner({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section className={compact ? "pt-10" : "section-pad pt-0"}>
      <div className="container-wide">
        <div className="overflow-hidden rounded-[1.5rem] border border-border bg-forest-950 px-6 py-10 text-white sm:px-10 md:flex md:items-center md:justify-between md:gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow text-yellow">Official Facebook</p>
            <h2 className="font-display mt-3 text-3xl leading-tight sm:text-4xl">
              See the latest campus moments on Facebook
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              Follow the main campus page and the College Department page for announcements,
              events, and community life. Approved photos from either page can be added to this
              website gallery.
            </p>
          </div>
          <div className="mt-6 flex w-full shrink-0 flex-col gap-3 md:mt-0 md:w-auto">
            <Button
              href={siteConfig.social.facebook}
              external
              variant="secondary"
              size="lg"
              className="w-full md:w-auto"
            >
              <FacebookIcon className="h-4 w-4" />
              Main Campus Page
            </Button>
            <Button
              href={siteConfig.social.facebookCollege}
              external
              variant="light"
              size="lg"
              className="w-full md:w-auto"
            >
              <FacebookIcon className="h-4 w-4" />
              College Department
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
