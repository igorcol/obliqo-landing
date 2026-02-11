import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen z-10 text-white selection:bg-obliqo-red selection:text-black">
      
      {/* --- HERO OVERLAY (Mantendo a navegação técnica) --- */}
      <section className="h-screen w-full flex flex-col justify-between p-6 md:p-12 relative pointer-events-none">
        
        {/* Header: Identidade */}
        <div className="flex justify-between items-start uppercase text-[10px] font-mono tracking-widest opacity-60">
          <div className="flex flex-col gap-1">
            <span>CULTURAL MOVEMENT</span>
            <span>EST. 2023</span>
          </div>
          <div className="text-right flex flex-col gap-1">
            <span>SOROCABA — SP</span>
            <span>UNDERGROUND RESEARCH</span>
          </div>
        </div>

        {/* Footer Hero */}
        <div className="flex justify-between items-end">
          <div className="text-[10px] font-mono tracking-widest animate-pulse text-obliqo-red">
            /// SCROLL TO ACCESS THE ARCHIVE
          </div>
          <div className="text-[10px] font-mono opacity-50 hidden md:block w-32 text-right">
            AUDIO: OFF <br/> VISUALS: RAW
          </div>
        </div>
      </section>

      {/* --- O CONTEÚDO CULTURAL --- */}
      <div className="relative bg-black z-20 border-t border-white/10">
        
        <div className="container mx-auto max-w-7xl border-x border-white/10">

          {/* CAPÍTULO 1: O CONCEITO */}
          <section className="grid grid-cols-1 md:grid-cols-12 min-h-[80vh]">
            {/* Coluna Esquerda: Título Sticky */}
            <div className="md:col-span-4 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 relative">
              <div className="sticky top-12">
                <span className="text-obliqo-red font-mono text-xs tracking-widest mb-4 block">01 /// CONCEPT</span>
                <h2 className="text-4xl md:text-5xl font-bold uppercase leading-none tracking-tighter">
                  Beyond <br/> The Club
                </h2>
              </div>
            </div>
            
            {/* Coluna Direita: O Manifesto */}
            <div className="md:col-span-8 p-8 md:p-24 flex flex-col justify-center border-b border-white/10">
              <p className="text-xl md:text-2xl leading-relaxed text-zinc-300 font-light mb-8">
                A OBLIQO não é sobre entretenimento. É sobre <strong className="text-white font-normal">pertencimento</strong>.
                Nascemos da necessidade de criar um espaço seguro para a expressão da cultura eletrônica em sua forma mais pura.
              </p>
              <p className="text-zinc-500 font-mono text-sm md:text-base leading-relaxed max-w-md text-justify">
                Somos um movimento cultural que mistura arte, design e frequências sonoras. 
                Um lugar intimista, desenhado para quem entende que a pista de dança é um ritual sagrado. 
                Aqui, a estética encontra o grave, e o indivíduo se dissolve no coletivo.
              </p>
            </div>
          </section>

          {/* CAPÍTULO 2: A CASA (Arquitetura & Vibe) */}
          <section className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10">
             {/* Texto Descritivo */}
             <div className="md:col-span-5 p-8 md:p-12 flex flex-col justify-end order-2 md:order-1 border-l border-white/10">
                <span className="text-obliqo-red font-mono text-xs tracking-widest mb-4 block">02 /// THE SPACE</span>
                <h3 className="text-3xl font-bold uppercase mb-6">Intimate & Raw</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                  Escuro com boa luz. Nossa arquitetura foi pensada para isolar o mundo exterior. 
                  Não há distrações. Apenas o sistema de som, a iluminação imersiva e você. 
                  Um ambiente industrial que respeita as raízes do techno e house, mas com um toque de sofisticação moderna.
                </p>
                
                {/* Lista de Specs */}
                <ul className="font-mono text-xs text-zinc-600 space-y-2 border-t border-white/10 pt-4">
                  <li className="flex justify-between"><span>CAPACITY</span> <span>LIMITED</span></li>
                  <li className="flex justify-between"><span>SOUND</span> <span>HIGH FIDELITY</span></li>
                  <li className="flex justify-between"><span>LIGHTS</span> <span>MINIMALIST</span></li>
                </ul>
             </div>

             {/* Imagem Conceitual (Placeholder Geométrico) */}
             <div className="md:col-span-7 bg-zinc-900 min-h-[500px] relative overflow-hidden order-1 md:order-2 group">
                {/* Aqui vai uma foto do ambiente ou do público sem mostrar rostos (silhuetas) */}
                <div className="absolute inset-0 bg-[url('/images/gallery-2.jpg')] bg-cover bg-center opacity-40 grayscale group-hover:opacity-60 transition-opacity duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-32 h-32 border border-obliqo-red rounded-full flex items-center justify-center animate-spin-slow opacity-50">
                      <div className="w-2 h-2 bg-obliqo-red rounded-full"></div>
                   </div>
                </div>
             </div>
          </section>

          {/* CAPÍTULO 3: O CÓDIGO (Cultura) */}
          <section className="py-24 px-6 md:px-12">
            <div className="text-center mb-16">
               <span className="text-obliqo-red font-mono text-xs tracking-widest">03 /// THE CODE</span>
               <h2 className="text-4xl md:text-6xl font-bold uppercase mt-4">Culture First</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
               {/* Regra 1 */}
               <div className="border border-white/10 p-8 hover:border-obliqo-red transition-colors group">
                  <h4 className="text-xl font-bold mb-4 group-hover:text-obliqo-red">Disconnect</h4>
                  <p className="text-zinc-500 text-sm font-mono">
                    A pista é para dançar. O uso excessivo de celulares e flash na pista quebra a imersão. 
                    Esteja presente no momento.
                  </p>
               </div>
               
               {/* Regra 2 */}
               <div className="border-x md:border-x-0 border-y md:border-y border-white/10 p-8 hover:border-obliqo-red transition-colors group md:border-r">
                  <h4 className="text-xl font-bold mb-4 group-hover:text-obliqo-red">Respect</h4>
                  <p className="text-zinc-500 text-sm font-mono">
                    Tolerância zero para assédio, racismo, homofobia ou qualquer tipo de discriminação. 
                    Somos uma comunidade unida pela música.
                  </p>
               </div>

               {/* Regra 3 */}
               <div className="border border-white/10 p-8 hover:border-obliqo-red transition-colors group">
                  <h4 className="text-xl font-bold mb-4 group-hover:text-obliqo-red">Quality</h4>
                  <p className="text-zinc-500 text-sm font-mono">
                    Nossa curadoria é focada na vanguarda. Trazemos o que há de mais relevante na cena, 
                    do local ao internacional.
                  </p>
               </div>
            </div>
          </section>

          {/* FOOTER: Minimalista */}
          <footer className="border-t border-white/10 py-12 px-6 flex flex-col md:flex-row justify-between items-end bg-black">
             <div>
               <h1 className="text-[10rem] leading-[0.8] font-bold tracking-tighter text-zinc-900 select-none hover:text-obliqo-red transition-colors duration-500">
                 OBLIQO
               </h1>
             </div>
             
             <div className="flex flex-col items-end gap-4 mt-8 md:mt-0">
               <div className="flex gap-4 font-mono text-xs text-zinc-500 uppercase">
                 <a href="#" className="hover:text-white transition-colors">Instagram</a>
                 <a href="#" className="hover:text-white transition-colors">Soundcloud</a>
                 <a href="#" className="hover:text-white transition-colors">Resident Advisor</a>
               </div>
               <p className="text-xs font-mono text-zinc-700">
                 SOROCABA // BRASIL // COPYRIGHT 2025
               </p>
             </div>
          </footer>

        </div>
      </div>
    </main>
  );
}