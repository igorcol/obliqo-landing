export default function JoinMovement() {
  return (
    <section className="py-40 bg-zinc-950 flex flex-col items-center justify-center relative border-b border-white/5 overflow-hidden">
      <div className="text-center mb-16 px-6 z-10">
        <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter italic mb-4">
          FAÇA PARTE.
        </h2>
        <p className="font-mono text-[10px] tracking-[0.5em] text-obliqo-red uppercase">
          Official Archive Updates @obliqosp
        </p>
      </div>

      <a
        href="https://www.instagram.com/obliqosp"
        target="_blank"
        rel="noopener noreferrer"
        className="px-20 py-6 border border-obliqo-red text-obliqo-red font-black uppercase tracking-[0.4em] text-xs hover:bg-obliqo-red hover:text-black transition-all duration-500 relative overflow-hidden group z-10 italic"
      >
        <span className="relative z-10">Access Dossiê</span>
        <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 italic"></div>
      </a>

      {/* Marca d'água monumental do símbolo obliquo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none text-[40vw] select-none">
        ✱
      </div>
    </section>
  );
}