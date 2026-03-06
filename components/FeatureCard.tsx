import type { LucideIcon } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
  light?: boolean;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  light = false,
}: FeatureCardProps) {
  return (
    <article
      className={`group rounded-3xl border p-7 transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
        light
          ? "border-slate-200 bg-white"
          : "border-white/10 bg-white/[0.03] hover:border-white/20"
      }`}
    >
      <span
        className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl ${
          light ? "bg-bons-lime/20 text-bons-ink" : "bg-bons-lime text-bons-ink"
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className={`text-xl font-semibold ${light ? "text-bons-ink" : "text-slate-100"}`}>
        {title}
      </h3>
      <p className={`mt-3 text-sm ${light ? "text-slate-600" : "text-slate-300"}`}>{description}</p>
    </article>
  );
}
