import { cn } from "./cn";

export default function Container({ className, children }) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-6", className)}>{children}</div>
  );
}