import Image from "next/image";

export default function Bonsai3D() {
  return (
    <div className="mx-auto w-full max-w-[340px] rounded-[1.8rem] border border-white/35 bg-white/10 p-2 shadow-[0_30px_80px_-40px_rgba(184,255,78,0.6)] backdrop-blur-sm">
      <Image
        src="/bonsai-realistic.svg"
        alt="Bonsai visual"
        width={640}
        height={640}
        className="h-auto w-full rounded-[1.4rem]"
        priority
      />
    </div>
  );
}
