import Image from "next/image";

type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
};

export default function TeamCard({ name, role, bio }: TeamCardProps) {
  return (
    <article className="card-dark rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
      <Image
        src="/avatar-placeholder.svg"
        alt={`${name} avatar placeholder`}
        width={72}
        height={72}
        className="h-[72px] w-[72px] rounded-2xl border border-white/10"
      />
      <h3 className="mt-4 text-xl font-semibold text-slate-100">{name}</h3>
      <p className="mt-1 text-sm font-medium text-bons-lime">{role}</p>
      <p className="mt-3 text-sm text-slate-300">{bio}</p>
    </article>
  );
}
