interface HichLogoProps {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export function HichLogo({ variant = "dark", size = "md" }: HichLogoProps) {
  const wordmark = size === "lg" ? "text-6xl md:text-8xl" : size === "md" ? "text-3xl" : "text-xl";
  const sub = size === "lg" ? "text-[0.9rem] md:text-base" : "text-[0.55rem]";
  const arabic = size === "lg" ? "text-2xl md:text-3xl" : "text-sm";
  const gap = size === "lg" ? "gap-4 md:gap-5" : "gap-1";

  const wordColor = variant === "dark" ? "text-foreground" : "text-ivory";
  const goldColor = "text-accent";

  return (
    <div className={`flex flex-col items-center ${gap}`}>
      <span className={`font-display ${arabic} ${goldColor} leading-none`} aria-hidden>
        هيچ
      </span>
      <span
        className={`font-display font-normal ${wordmark} ${wordColor} tracking-[0.18em] leading-none`}
      >
        HICH
      </span>
      <span className={`${sub} tracking-brand ${goldColor} font-sans`}>G A L L E R Y</span>
    </div>
  );
}
