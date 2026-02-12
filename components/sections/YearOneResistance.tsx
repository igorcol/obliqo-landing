import Image from "next/image";

export default function YearOneResistance() {
  return (
    <section className="relative border-b border-white/5 bg-zinc-950 overflow-hidden">
      
      {/* Título de Fundo Monumental (Scroll Decorativo) */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
        <span className="text-[30vw] font-black italic tracking-tighter uppercase">RESIST</span>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 min-h-screen border-l border-white/5">
        
        {/* Coluna da Esquerda: Mural de Dados e Manifesto */}
        <div className="md:col-span-4 p-8 md:p-16 flex flex-col justify-between border-r border-white/5">
          <div>
            <span className="text-obliqo-red font-mono text-[10px] tracking-[0.4em] block mb-8 uppercase italic">
              Report_Log: Anniversary_01
            </span>
            <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.8] mb-12">
              1 Year <br/> <span className="text-zinc-800 group-hover:text-white transition-colors italic">Legacy.</span>
            </h3>
          </div>

          <div className="space-y-10">
            <div className="border-l-2 border-obliqo-red pl-6 space-y-4">
              <p className="text-sm font-mono text-zinc-400 leading-relaxed uppercase italic">
                &quot;Revivemos a história. Reunimos gerações. Sorocaba está de volta ao mapa.&quot;
              </p>
              <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                — Curadoria OBLIQO
              </p>
            </div>

            {/* Counters Brutalistas */}
            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-10">
              <div className="flex flex-col">
                <span className="text-2xl font-bold italic tracking-tighter text-white font-sans">52+</span>
                <span className="text-[9px] font-mono text-zinc-600 uppercase">Rituals_Performed</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold italic tracking-tighter text-white font-sans">100%</span>
                <span className="text-[9px] font-mono text-zinc-600 uppercase">Underground_Focus</span>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna da Direita: Imagem e Timeline de Status */}
        <div className="md:col-span-8 flex flex-col">
          
          {/* Imagem Hero da Pista */}
          <div className="relative h-[60vh] md:h-[70vh] overflow-hidden group">
            <Image 
              src="/imagens/crowd-hero.jpg" 
              alt="Anniversary Crowd" 
              fill 
              className="object-cover grayscale group-hover:grayscale-0 contrast-125 transition-all duration-[2s] scale-105 group-hover:scale-100" 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000"></div>
            
            <div className="absolute top-0 right-0 p-8 border-l border-b border-white/10 bg-black/80 backdrop-blur-md">
               <span className="text-obliqo-red text-2xl font-bold animate-pulse">✱</span>
            </div>
          </div>

          {/* Sub-grid de Status Cultural */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-x divide-white/5 border-t border-white/5 bg-black h-full italic uppercase font-mono text-[9px] tracking-widest">
             <div className="p-8 flex flex-col justify-between hover:bg-zinc-900 transition-colors">
                <span className="text-zinc-700">MISSION_KEY</span>
                <span className="text-white">TILTING_PERSPECTIVES</span>
             </div>
             <div className="p-8 flex flex-col justify-between hover:bg-zinc-900 transition-colors">
                <span className="text-zinc-700">LOCATION_ID</span>
                <span className="text-white">USINA_CULTURAL_SOROCABA</span>
             </div>
             <div className="p-8 flex flex-col justify-between hover:bg-obliqo-red transition-colors group">
                <span className="text-zinc-700 group-hover:text-black transition-colors">STATUS</span>
                <span className="text-white group-hover:text-black transition-colors">1_YEAR_RESISTANCE_COMPLETE</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}