type Milestone = {
  period: string;
  title: string;
  description: string;
};

type TimelineProps = {
  items: Milestone[];
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="card-dark rounded-3xl p-6">
          <span className="inline-flex rounded-full bg-bons-lime/15 px-3 py-1 text-xs font-semibold text-bons-lime">
            {item.period}
          </span>
          <h3 className="mt-4 text-lg font-semibold text-slate-100">{item.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{item.description}</p>
        </article>
      ))}
    </div>
  );
}
