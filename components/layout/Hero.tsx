/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden px-4">
      {/* Camada de Atmosfera Estática */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/textures/ceiling-lights.jpg"
          alt="Obliqo Atmosphere"
          fill
          className="object-cover opacity-15 grayscale contrast-[1.4] scale-110"
          priority
        />
      </div>

      {/* Efeitos de Pós-processamento CSS */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.02] noise-animation"></div>
      <div className="absolute inset-0 bg-radial-vignette z-15"></div>

      {/* Branding Central - Ajustado para Mobile */}
      <div className="relative z-20 flex flex-col items-center text-center w-full max-w-[100vw]">
        <span className="text-obliqo-red text-4xl md:text-5xl mb-4 md:mb-6 animate-spin-slow select-none">✱</span>
        
        {/* Título: Usando text-[18vw] base e reduzindo o leading para não encavalar no mobile */}
        <h1 className="text-[18vw] leading-[0.85] font-black tracking-tighter mix-blend-difference italic md:text-[18vw]">
          OBLIQO
        </h1>
        
        {/* Tagline: Quebra de linha inteligente para telas pequenas */}
        <div className="flex flex-col items-center mt-6 px-4">
          <span className="text-[8px] md:text-[9px] font-mono tracking-[0.4em] md:tracking-[0.8em] text-zinc-500 uppercase leading-relaxed">
            Tilting Humans <span className="hidden md:inline">//</span> <br className="md:hidden" /> 
            Tilting Visions <span className="hidden md:inline">//</span> <br className="md:hidden" /> 
            Tilting Perspectives
          </span>
        </div>
      </div>

      {/* HUD de Informação Técnica - Adaptado para Mobile */}
      <div className="absolute inset-0 z-30 flex flex-col justify-between p-6 md:p-10 pointer-events-none font-mono text-[8px] md:text-[9px] tracking-widest text-zinc-500">
        <div className="flex justify-between items-start uppercase w-full">
          <div className="flex flex-col gap-1">
            <span className="text-white opacity-100">✱ CULTURAL CENTER</span>
            <span className="hidden md:inline">EST. 2023 // SOROCABA, SP</span>
          </div>
          <div className="text-right flex flex-col gap-1">
            <span className="text-obliqo-red opacity-100">ARCHIVE_2026</span>
            <span className="hidden md:inline text-[7px]">FOUNDED BY MOCHAKK</span>
          </div>
        </div>
        
        <div className="flex justify-between items-end w-full">
          <div className="animate-pulse text-obliqo-red opacity-100 uppercase tracking-widest">
            [ <span className="hidden md:inline">SCROLL TO ACCESS </span>DOSSIER ]
          </div>
          <div className="text-right flex flex-col items-end gap-1 md:gap-2 text-zinc-600">
            <span className="h-px w-12 md:w-20 bg-zinc-800"></span>
            <span className="text-[7px] md:text-[9px]">SYSTEM: STABLE</span>
            <span className="text-[7px] md:text-[9px]">VISUALS: RAW</span>
          </div>
        </div>
      </div>
    </section>
  );
}