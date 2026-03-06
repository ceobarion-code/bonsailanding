type StatCardProps = {
  value: string;
  label: string;
};

export default function StatCard({ value, label }: StatCardProps) {
  return (
    <article className="card-dark rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-white/20">
      <p className="text-3xl font-semibold tracking-tight text-bons-lime">{value}</p>
      <p className="mt-3 text-sm text-slate-300">{label}</p>
    </article>
  );
}
