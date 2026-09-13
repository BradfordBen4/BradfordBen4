import Link from "next/link";
import { cn } from "@/lib/utils";

type CommonProps = {
  variant?: "pink" | "yellow" | "blue" | "navy" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsLink = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantStyles: Record<NonNullable<CommonProps["variant"]>, string> = {
  pink: "bg-brand-pink text-white",
  yellow: "bg-brand-yellow text-brand-navy",
  blue: "bg-brand-blue text-brand-navy",
  navy: "bg-brand-navy text-white",
  outline: "bg-white text-brand-navy border-2 border-brand-navy/15",
};

const sizeStyles: Record<NonNullable<CommonProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "pink",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "btn-soft inline-flex items-center justify-center gap-2",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, ...rest } = props;
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
