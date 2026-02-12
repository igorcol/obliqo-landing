export default function Footer() {
  return (
    <footer className="py-20 px-8 flex flex-col md:flex-row justify-between items-end gap-12 bg-black overflow-hidden relative border-t border-white/10">
      <div className="flex flex-col gap-6 relative z-10">
        <div className="text-obliqo-red text-5xl animate-spin-slow select-none cursor-wait">
          ✱
        </div>
        <div className="flex gap-8 text-[10px] font-mono font-black uppercase tracking-widest text-zinc-600 italic">
          <a href="https://www.instagram.com/obliqosp" target="_blank" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Soundcloud</a>
          <a href="#" className="hover:text-white transition-colors">Resident Advisor</a>
        </div>
      </div>

      <div className="text-right relative z-10">
        <h1 className="text-8xl font-black tracking-tighter text-zinc-900 select-none italic leading-none">
          OBLIQO
        </h1>
        <p className="text-[9px] font-mono text-zinc-800 mt-2 uppercase tracking-[0.3em]">
          © 2023-2026 Cultural_System_Sorocaba_BR
        </p>
      </div>
    </footer>
  );
}