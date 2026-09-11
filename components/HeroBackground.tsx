import { GradientOrbs } from "@/components/GradientOrbs";

export function HeroBackground() {
  return (
    <div className="hero-background" aria-hidden="true">
      <div className="hero-glow" />
      <GradientOrbs />
      <div className="hero-grid-pattern" />
      <div className="hero-noise" />
      <div className="hero-fade" />
    </div>
  );
}