"use client";

import Image from "next/image";

export default function Hero() {
  const bars = Array.from({ length: 32 }, (_, i) => ({
    height: ((i * 13) % 60) + 20, // Altura mínima de 20% e máxima de 80%
    delay: i * 0.1,
  }));

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden flex flex-col md:grid md:grid-cols-12 border-b border-white/10">
      
      {/* --- COLUNA ESQUERDA: THE MAIN ANCHOR --- */}
      <div className="md:col-span-8 relative flex flex-col justify-end p-6 md:p-20 border-r border-white/5 group">
        
        <div className="absolute inset-0 z-0 opacity-[0.07] grayscale contrast-125 group-hover:opacity-15 transition-opacity duration-[2s]">
           <Image 
             src="/textures/ceiling-lights.jpg" 
             alt="System Atmosphere" fill className="object-cover scale-110 group-hover:scale-100 transition-transform duration-[10s]"
           />
        </div>

        <div className="absolute top-0 left-0 w-full h-px bg-obliqo-red/40 shadow-[0_0_20px_rgba(255,0,0,0.8)] z-20 animate-scan pointer-events-none"></div>

        <div className="relative z-30">
          <div className="flex items-center gap-6 mb-12">
            <span className="text-obliqo-red text-5xl animate-spin-slow select-none cursor-crosshair">✱</span>
            <div className="h-px w-32 bg-linear-to-r from-obliqo-red/60 to-transparent"></div>
            <div className="flex flex-col">
              <span className="font-mono text-[8px] tracking-[0.6em] text-zinc-600 uppercase">Status</span>
              <span className="font-mono text-[10px] tracking-[0.4em] text-obliqo-red uppercase animate-pulse">System_Live_Active</span>
            </div>
          </div>

          <h1 className="text-[14vw] md:text-[11vw] font-black leading-none tracking-[-0.08em] uppercase italic mix-blend-difference whitespace-nowrap">
            OBLIQO
          </h1>

          <div className="mt-12 max-w-lg border-l-2 border-obliqo-red pl-8 py-2">
            <p className="font-mono text-[10px] md:text-[12px] text-zinc-500 leading-relaxed uppercase tracking-[0.3em] italic">
              &quot;Create the future instead of predicting it.&quot; <br/>
              A perspective shift in sound and culture. <br/>
              Tilting humans // Tilting visions // Tilting perspectives.
            </p>
          </div>
        </div>
      </div>

      {/* --- COLUNA DIREITA: THE CORE ENGINE --- */}
      <div className="md:col-span-4 relative flex flex-col bg-obliqo-black">
        
        <div className="flex-1 border-b border-white/5 relative group overflow-hidden">
          <Image 
            src="/textures/dj-red.jpg" 
            alt="Mochakk Detail" 
            fill className="object-cover grayscale contrast-150 opacity-20 group-hover:opacity-70 group-hover:scale-105 transition-all duration-[3s]"
          />
          <div className="absolute inset-10 border border-white/5 pointer-events-none group-hover:border-obliqo-red/20 transition-colors">
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-obliqo-red"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-obliqo-red"></div>
          </div>
          
          <div className="absolute bottom-6 left-6 font-mono text-[8px] tracking-[0.5em] text-white/30 uppercase bg-black/60 backdrop-blur-sm p-3 border border-white/5">
            Ref_Archive: // 2026
          </div>
        </div>

        {/* Bloco Inferior: Data HUD */}
        <div className="h-2/5 p-10 flex flex-col justify-between bg-zinc-950 font-mono text-[9px] tracking-[0.4em] uppercase relative overflow-hidden">
          
          <div className="absolute top-0 left-0 w-full h-px bg-white/5"></div>
          
          {/* Waveform 100% Pura e Idempotente */}
          <div className="absolute bottom-0 left-0 w-full h-16 flex items-end gap-0.5 px-6 opacity-20 group-hover:opacity-40 transition-opacity">
             {bars.map((bar, i) => (
               <div 
                 key={i} 
                 className="flex-1 bg-obliqo-red animate-pulse" 
                 style={{ 
                    height: `${bar.height}%`, 
                    animationDelay: `${bar.delay}s` 
                 }}
               ></div>
             ))}
          </div>

          <div className="space-y-6 relative z-10">
             <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-zinc-600">Established</span>
                <span className="text-white font-bold">06_09_2024</span>
             </div>
             <div className="flex justify-between items-center border-b border-white/5 pb-3">
                <span className="text-zinc-600">Coordinate</span>
                <span className="text-white text-[8px]">23.5015° S, 47.4521° W</span>
             </div>
             <div className="flex justify-between items-center border-b border-white/5 pb-3 text-obliqo-red">
                <span className="font-bold">Mission</span>
                <span className="italic">Tilting_Perspectives</span>
             </div>
          </div>

          <div className="flex justify-between items-end relative z-10">
             <div className="text-[7px] text-zinc-600 leading-relaxed tracking-[0.2em]">
                ARCHIVE_RAW_DEPLOYED<br/>
                SONIC_ARCHITECTURE_4VIAS
             </div>
             <div className="flex flex-col items-end gap-2">
                <span className="text-white animate-pulse flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-obliqo-red rounded-full"></span> REC_ACTIVE
                </span>
                <span className="text-[6px] text-zinc-800 tracking-tighter">OBLIQO_CULTURAL_SYSTEM_V.5</span>
             </div>
          </div>
        </div>
      </div>

      {/* Global Digital Noise */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.04] noise-animation"></div>
    </section>
  );
}