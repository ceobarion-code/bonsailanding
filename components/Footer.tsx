export default function Footer() {
  return (
    <footer className="border-t border-white/20 bg-[#1a2e4d] py-10">
      <div className="container-base flex flex-col justify-between gap-4 text-sm text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} Bons AI. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-5">
          <a href="#" className="hover:text-slate-200">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-200">
            Terms
          </a>
          <a href="#contact" className="hover:text-slate-200">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
