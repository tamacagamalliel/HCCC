import Image from "next/image";
import { cn } from "@/lib/utils";

export function NewsCoverImage({
  src,
  alt,
  tone,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  tone: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden", className, `tone-${tone}`)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="img-zoom object-cover"
        priority={priority}
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-forest-950/35 via-transparent to-forest-950/10"
        aria-hidden
      />
    </div>
  );
}
