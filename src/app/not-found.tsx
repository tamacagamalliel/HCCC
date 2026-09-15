import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="section-pad">
      <div className="container-page max-w-xl py-24 text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="font-display mt-3 text-4xl text-ink">Page not found</h1>
        <p className="mt-4 text-muted">
          The page you are looking for may have moved, or the link may be incorrect.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to Home</Button>
          <Button href="/contact" variant="outline">
            Contact HCCC
          </Button>
        </div>
        <p className="mt-6 text-sm text-muted">
          Or visit{" "}
          <Link href="/admissions" className="font-semibold text-forest-800">
            Admissions
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
