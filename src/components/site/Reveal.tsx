import { useInView } from "@/hooks/use-in-view";

type From = "bottom" | "left" | "right" | "top" | "fade";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: From;
  threshold?: number;
}

const hidden: Record<From, string> = {
  bottom: "opacity-0 translate-y-8",
  top:    "opacity-0 -translate-y-8",
  left:   "opacity-0 -translate-x-8",
  right:  "opacity-0 translate-x-8",
  fade:   "opacity-0",
};

export function Reveal({ children, className = "", delay = 0, from = "bottom", threshold }: RevealProps) {
  const { ref, visible } = useInView(threshold);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? "opacity-100 translate-y-0 translate-x-0" : hidden[from]} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
