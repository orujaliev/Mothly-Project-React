import { cn } from "./cn";

export function Heading({ as: Tag = "h2", size = "lg", className, children }) {
  const sizes = {
    xl: "text-3xl md:text-4xl font-bold tracking-tight",
    lg: "text-2xl font-semibold tracking-tight",
    md: "text-xl font-semibold",
    sm: "text-sm font-semibold",
  };
  return <Tag className={cn("text-black", sizes[size], className)}>{children}</Tag>;
}

export function Text({ as: Tag = "p", muted = false, className, children }) {
  return (
    <Tag className={cn("text-sm leading-relaxed", muted ? "text-neutral-500" : "text-neutral-800", className)}>
      {children}
    </Tag>
  );
}