export default function SonicArchitecture() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 border-b border-white/5 flex flex-col items-center overflow-hidden">
      <div className="max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-center">
          
          {/* Visualização Técnica / Elemento Gráfico */}
          {/* Ajustado o aspecto e padding para não esmagar no mobile */}
          <div className="relative aspect-square w-full bg-zinc-950 md:bg-zinc-900 border border-white/5 p-8 md:p-12 group">
            <div className="absolute inset-4 border border-obliqo-red/20 animate-spin-slow"></div>
            <div className="w-full h-full flex items-center justify-center text-6xl md:text-8xl text-obliqo-red opacity-20 group-hover:opacity-100 transition-opacity select-none">
              ✱
            </div>
            {/* Metadados do Sistema */}
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 font-mono text-[8px] md:text-[9px] text-zinc-500 uppercase tracking-widest">
              System: 4VIAS + B&C Speakers
            </div>
          </div>

          {/* Manifesto Técnico */}
          <div className="space-y-6">
            <span className="text-obliqo-red font-mono text-[9px] md:text-[10px] tracking-[0.4em] uppercase">
              Audio Engineering
            </span>
            
            {/* Título: Reduzido no mobile para evitar o overflow na borda direita */}
            <h3 className="text-4xl md:text-5xl font-black uppercase leading-[0.9] md:leading-tight italic tracking-tighter">
              Sonic <br /> Architecture.
            </h3>
            
            <p className="text-zinc-500 font-mono text-xs md:text-sm leading-relaxed italic uppercase">
              Equipado com sistemas de som de alta fidelidade, o OBLIQO eleva o som a uma forma de arte, respeitando as raízes do techno e house com sofisticação brutalista.
            </p>
            
            {/* Status do Driver */}
            <div className="pt-4 md:pt-6 flex gap-3 md:gap-4">
              <div className="h-1 w-10 md:w-12 bg-obliqo-red"></div>
              <div className="h-1 w-10 md:w-12 bg-zinc-800"></div>
              <div className="h-1 w-10 md:w-12 bg-zinc-800"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}