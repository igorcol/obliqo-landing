import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen z-10 text-white selection:bg-obliqo-red selection:text-black bg-black overflow-x-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/textures/ceiling-lights.jpg" 
            alt="Obliqo Atmosphere"
            fill
            className="object-cover opacity-30 grayscale contrast-150"
            priority
          />
          <div className="absolute inset-0 bg-black/40 bg-radial-gradient"></div>
        </div>

        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] noise-animation"></div>

        <div className="relative z-20 flex flex-col items-center">
          <span className="text-obliqo-red text-4xl mb-4 animate-pulse">✱</span>
          <h1 className="text-[18vw] md:text-[15vw] font-bold tracking-tighter leading-none relative group cursor-default">
            <span className="relative z-10">OBLIQO</span>
            <span className="absolute inset-0 text-obliqo-red translate-x-1 translate-y-1 -z-10 opacity-70">
              OBLIQO
            </span>
          </h1>

          <div className="mt-4 flex flex-col items-center gap-2">
            <span className="text-[10px] font-mono tracking-[0.4em] text-zinc-400 uppercase">
              tilting humans. tilting visions. tilting perspectives.
            </span>
          </div>
        </div>

        <div className="absolute inset-0 z-30 flex flex-col justify-between p-6 md:p-12 pointer-events-none">
          <div className="flex justify-between items-start uppercase text-[10px] font-mono tracking-widest opacity-60">
            <div className="flex flex-col gap-1">
              <span>✱ CULTURAL CENTER</span>
              <span>EST. 2023 // SOROCABA</span>
            </div>
            <div className="text-right flex flex-col gap-1">
              <span>FOUNDED BY MOCHAKK</span>
              <span>UNDERGROUND RESEARCH</span>
            </div>
          </div>
          <div className="flex justify-between items-end pointer-events-auto">
            <div className="text-[10px] font-mono tracking-widest animate-bounce text-obliqo-red">
              /// SCROLL TO ENTER ARCHIVE
            </div>
            <div className="text-[10px] font-mono opacity-50 text-right">
              SOUND SYSTEM: 4VIAS ACTIVE <br/> VISUALS: BRUTALIST
            </div>
          </div>
        </div>
      </section>

      <div className="relative bg-black z-20 border-t border-white/10">
        <div className="container mx-auto max-w-[1400px] border-x border-white/10">

          {/* 01 /// O MANIFESTO */}
          <section className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10">
            <div className="md:col-span-5 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 relative">
              <div className="sticky top-12">
                <span className="text-obliqo-red font-mono text-xs tracking-widest mb-4 block">01 /// THE VISION</span>
                <h2 className="text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-8">
                  A New <br/> Perspective
                </h2>
                <p className="text-zinc-500 font-mono text-xs leading-relaxed uppercase">
                  O nome OBLIQO remete ao olhar fora do comum. Uma proposta de visão alternativa para a música e a arte.
                </p>
              </div>
            </div>
            
            <div className="md:col-span-7 p-8 md:p-24 bg-zinc-950/50">
              <p className="text-2xl md:text-3xl leading-tight text-zinc-200 font-light mb-12">
                Idealizado por <strong className="text-white">Mochakk</strong>, o OBLIQO nasce para celebrar, educar e inspirar a comunidade local.
              </p>
              <div className="space-y-6 text-zinc-400 font-mono text-sm leading-relaxed text-justify">
                <p>
                  Mais do que um club, somos um centro cultural. Um espaço onde a velha guarda e a nova geração se encontram para reviver a história da música eletrônica em Sorocaba.
                </p>
                <p>
                  Através de workshops com veteranos da indústria e exposições mensais, conectamos artistas e público, transformando a região em um ponto vital da rota global.
                </p>
              </div>
            </div>
          </section>

          {/* 02 /// SOUND SYSTEM SEÇÃO TÉCNICA */}
          <section className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 bg-obliqo-red text-black">
            <div className="md:col-span-12 p-12 flex flex-col items-center text-center">
              <span className="font-mono text-[10px] tracking-[0.5em] mb-4">ENGINEERING THE FLOW</span>
              <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8 italic">4VIAS + B&C SPEAKERS</h2>
              <p className="max-w-2xl font-mono text-sm leading-tight uppercase font-bold">
                Elevamos o som a uma forma de arte imersiva. Fidelidade absoluta. Resposta de frequência desenhada para o corpo, não apenas para os ouvidos.
              </p>
            </div>
          </section>

          {/* 03 /// AS LABELS (O QUE FAZEMOS) */}
          <section className="border-b border-white/10">
            <div className="p-8 border-b border-white/10">
               <span className="text-obliqo-red font-mono text-xs tracking-widest block mb-2">02 /// CULTURAL LABELS</span>
               <h3 className="text-4xl font-bold uppercase tracking-tighter italic">The Ecosystem</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
               {/* NAPONTA */}
               <div className="p-12 hover:bg-zinc-950 transition-all group">
                  <span className="text-obliqo-red text-2xl">✱</span>
                  <h4 className="text-4xl font-bold uppercase my-6 group-hover:italic transition-all">NAPONTA</h4>
                  <p className="text-zinc-500 font-mono text-xs leading-relaxed">
                    Focado na energia do funk e vertentes experimentais. A cultura de periferia encontra a vanguarda eletrônica.
                  </p>
               </div>
               {/* SELECTA */}
               <div className="p-12 hover:bg-zinc-950 transition-all group">
                  <span className="text-obliqo-red text-2xl">✱</span>
                  <h4 className="text-4xl font-bold uppercase my-6 group-hover:italic transition-all">SELECTA</h4>
                  <p className="text-zinc-500 font-mono text-xs leading-relaxed">
                    A curadoria fina da house e techno. Onde rituais de pista são conduzidos por seletores nacionais e internacionais.
                  </p>
               </div>
               {/* RADIO GALERIA */}
               <div className="p-12 hover:bg-zinc-950 transition-all group">
                  <span className="text-obliqo-red text-2xl">✱</span>
                  <h4 className="text-4xl font-bold uppercase my-6 group-hover:italic transition-all">RADIO <br/> GALERIA</h4>
                  <p className="text-zinc-500 font-mono text-xs leading-relaxed">
                    Plataforma de visibilidade. Um palco dedicado a expor e amplificar o talento de artistas locais e emergentes.
                  </p>
               </div>
            </div>
          </section>

          {/* 04 /// ARQUIVO VISUAL */}
          <section className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10">
            <div className="md:col-span-8 relative h-[600px] bg-zinc-900 overflow-hidden">
              <Image src="/textures/crowd-hero.jpg" alt="Obliqo Crowd" fill className="object-cover grayscale opacity-50 hover:opacity-100 hover:scale-105 transition-all duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent"></div>
              <div className="absolute bottom-12 left-12">
                <span className="bg-obliqo-red text-black px-2 py-1 font-mono text-[10px] font-bold">ANNIVERSARY_01</span>
                <h3 className="text-4xl font-bold uppercase mt-4">1 Year of Resistance</h3>
              </div>
            </div>
            <div className="md:col-span-4 p-12 flex flex-col justify-center border-l border-white/10">
              <p className="text-zinc-400 font-mono text-sm leading-relaxed italic">
                "Ver Sorocaba novamente no mapa da rota dos grandes artistas em conexão com nossos artistas locais é a prova de que o trabalho coletivo vale a pena."
              </p>
            </div>
          </section>

          {/* 05 /// AGENDA INSTAGRAM */}
          <section className="py-24 px-6 md:px-12 bg-zinc-950 relative overflow-hidden">
            <div className="flex flex-col items-center text-center mb-16 relative z-10">
              <span className="text-obliqo-red font-mono text-xs tracking-[0.5em] uppercase mb-4">Join the Movement</span>
              <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter">Next Rituals</h2>
            </div>

            <a 
              href="https://www.instagram.com/obliqosp" 
              target="_blank" 
              className="group relative block w-full border border-white/10 p-12 md:p-24 overflow-hidden transition-all duration-700 hover:border-obliqo-red z-10 bg-black"
            >
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl md:text-5xl font-bold uppercase mb-2 group-hover:italic transition-all">Archive & Updates</h3>
                  <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Follow @OBLIQOSP for dates and workshops</p>
                </div>
                <div className="mt-8 md:mt-0 text-obliqo-red text-6xl group-hover:scale-110 transition-transform">✱</div>
              </div>
            </a>

            {/* Background Decorativo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
              <span className="text-[40vw] font-bold">✱</span>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="border-t border-white/10 py-24 px-6 md:px-12 flex flex-col gap-12 bg-black overflow-hidden relative">
             <div className="relative z-10 flex flex-col md:flex-row justify-between items-end">
               <div className="flex flex-col gap-8">
                 <div className="flex gap-8 font-bold text-lg md:text-2xl uppercase tracking-tighter">
                   <a href="#" className="hover:text-obliqo-red">Instagram</a>
                   <a href="#" className="hover:text-obliqo-red">Soundcloud</a>
                   <a href="#" className="hover:text-obliqo-red">RA</a>
                 </div>
                 <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                   Tilting humans. Tilting visions. Tilting perspectives.
                 </p>
               </div>
               <div className="text-right font-mono text-[10px] text-zinc-700">
                 SOROCABA // BR // 2023-2025 <br/>
                 OBLIQO CULTURAL SYSTEM ©
               </div>
             </div>
             
             <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-5 flex justify-center">
                <h1 className="text-[25vw] leading-[0.7] font-bold tracking-tighter text-white translate-y-1/4">OBLIQO</h1>
             </div>
          </footer>
        </div>
      </div>
    </main>
  );
}