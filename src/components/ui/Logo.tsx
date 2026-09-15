import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  size?: number;
  priority?: boolean;
};

export function Logo({ className, size = 40, priority = false }: LogoProps) {
  return (
    <Image
      src="/images/logo.webp"
      alt="Holy Cross College of Carigara official seal"
      width={size}
      height={size}
      priority={priority}
      className={cn("h-auto w-auto object-contain", className)}
    />
  );
}
