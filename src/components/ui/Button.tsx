import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light" | "outline";
type ButtonSize = "sm" | "md" | "lg";

/**
 * Shared motion + focus for every button variant.
 * Hover: soft lift, glow, fill shift — eased for a smooth feel.
 */
const baseClasses =
  "group/btn relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-md font-semibold tracking-tight " +
  "transition-[transform,box-shadow,background-color,border-color,color,filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] " +
  "hover:-translate-y-0.5 hover:scale-[1.015] " +
  "active:translate-y-0 active:scale-[0.99] active:duration-150 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
  "disabled:pointer-events-none disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:scale-100 disabled:hover:shadow-none " +
  "motion-reduce:transition-colors motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-forest-700 !text-white shadow-[var(--shadow-soft)] " +
    "hover:bg-forest-600 hover:!text-white hover:shadow-[0_14px_32px_-14px_rgba(63,56,122,0.45),0_0_0_1px_rgba(245,243,34,0.28)] " +
    "active:shadow-[var(--shadow-soft)]",
  secondary:
    "bg-yellow !text-forest-950 shadow-[var(--shadow-soft)] " +
    "hover:bg-yellow-soft hover:!text-forest-950 hover:brightness-[1.03] " +
    "hover:shadow-[0_14px_32px_-14px_rgba(245,243,34,0.45),0_0_0_1px_rgba(245,243,34,0.35)] " +
    "active:shadow-[var(--shadow-soft)] active:brightness-100",
  ghost:
    "bg-transparent !text-forest-800 shadow-none " +
    "hover:bg-forest-100 hover:!text-forest-950 hover:shadow-[var(--shadow-soft)]",
  light:
    "bg-white !text-forest-950 shadow-[var(--shadow-soft)] " +
    "hover:bg-yellow hover:!text-forest-950 hover:brightness-[1.03] " +
    "hover:shadow-[0_14px_32px_-14px_rgba(245,243,34,0.4),0_0_0_1px_rgba(245,243,34,0.28)] " +
    "active:brightness-100",
  outline:
    "bg-transparent !text-forest-800 border-2 border-forest-700 shadow-none " +
    "hover:bg-forest-800 hover:!text-white hover:border-forest-800 " +
    "hover:shadow-[0_12px_28px_-14px_rgba(63,56,122,0.4)]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
};

type ButtonAsButton = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps & {
  href: string;
  external?: boolean;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    onClick,
  } = props;

  const classes = cn(baseClasses, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const external = props.external || props.href.startsWith("http");
    if (external) {
      return (
        <a
          href={props.href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClick}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton & {
    href?: undefined;
  };
  void _href;

  return (
    <button
      {...buttonProps}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement> | undefined}
      className={classes}
    >
      {children}
    </button>
  );
}
