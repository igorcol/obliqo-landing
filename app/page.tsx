import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen z-10 text-white selection:bg-obliqo-red selection:text-black bg-black overflow-x-hidden">

      {/* --- SECTION 00: THE VOID (HERO) --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/textures/ceiling-lights.jpg"
            alt="Obliqo Atmosphere"
            fill
            className="object-cover opacity-15 grayscale contrast-[1.4] scale-110"
            priority
          />
        </div>

        {/* Noise e Vinheta Cinematográfica */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.02] noise-animation"></div>
        <div className="absolute inset-0 bg-radial-vignette z-15"></div>

        {/* Branding Centralizado */}
        <div className="relative z-20 flex flex-col items-center text-center">
          <span className="text-obliqo-red text-5xl mb-6 animate-spin-slow select-none">✱</span>
          <h1 className="text-[22vw] md:text-[18vw] font-black tracking-tighter leading-none mix-blend-difference italic">
            OBLIQO
          </h1>
          <div className="flex flex-col items-center mt-4">
            <span className="text-[9px] font-mono tracking-[0.8em] text-zinc-500 uppercase">
              Tilting Humans // Tilting Visions // Tilting Perspectives
            </span>
          </div>
        </div>

        {/* HUD de Informação (Fixo nos Cantos) */}
        <div className="absolute inset-0 z-30 flex flex-col justify-between p-6 md:p-10 pointer-events-none font-mono text-[9px] tracking-widest text-zinc-500">
          <div className="flex justify-between items-start uppercase">
            <div className="flex flex-col gap-1">
              <span className="text-white opacity-100">✱ CULTURAL CENTER</span>
              <span>EST. 2023 // SOROCABA, SP</span>
            </div>
            <div className="text-right flex flex-col gap-1">
              <span className="text-obliqo-red opacity-100">OBLIQO_ARCHIVE_2026</span>
              <span>FOUNDED BY MOCHAKK</span>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div className="animate-pulse text-obliqo-red opacity-100 uppercase tracking-widest">
              [ SCROLL TO ACCESS DOSSIER ]
            </div>
            <div className="text-right flex flex-col items-end gap-2 text-zinc-600">
              <span>SYSTEM: STABLE</span>
              <span>VISUALS: RAW</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative bg-black z-20">

        <div className="container mx-auto max-w-[1500px] border-x border-white/5 bg-black">

          {/* 01 /// O LEGADO MOCHAKK */}
          <section className="grid grid-cols-1 md:grid-cols-12 min-h-screen items-center border-b border-white/5">
            <div className="md:col-span-6 p-8 md:p-20 relative h-full flex flex-col justify-center bg-zinc-950/30">
              <span className="text-obliqo-red font-mono text-[10px] tracking-widest mb-6 block italic">/// THE GENESIS</span>
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-10 italic">
                Pedro <br /> Maia's <br /> <span className="text-zinc-800 italic">Vision.</span>
              </h2>
              <div className="space-y-8 text-zinc-400 font-mono text-xs md:text-sm leading-relaxed max-w-md">
                <p className="border-l border-obliqo-red pl-6">
                  Inaugurado em 6 de Setembro de 2024, o OBLIQO é a materialização do desejo de Mochakk em retribuir à sua cidade natal. Um espaço revolucionário dedicado a celebrar, educar e inspirar a comunidade local.
                </p>
                <p>
                  A inauguração coincidiu com o lançamento do EP "Locomotiva Ibiza 2099 II", transformando Sorocaba em um ponto vital da rota global da música eletrônica nacional.
                </p>
              </div>
            </div>

            <div className="md:col-span-6 relative h-[70vh] md:h-full overflow-hidden group">
              <Image
                src="/textures/img-6.jpg"
                alt="Mochakk at Obliqo"
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-obliqo-red/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute top-12 right-12 text-[10px] font-mono rotate-90 origin-right text-white/20 uppercase tracking-widest">
                ARCHIVE_IMG_REF_060924
              </div>
            </div>
          </section>

          {/* 02 /// LABELS & RITUAIS (Cultural Ecosystem) */}
          <section className="border-b border-white/5 overflow-hidden">
            <div className="p-12 border-b border-white/5 flex justify-between items-center bg-zinc-950/50">
              <h3 className="text-2xl font-bold uppercase italic tracking-tighter">Cultural_Ecosystem ✱</h3>
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">3 ACTIVE PLATFORMS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
              {[
                {
                  title: "NAPONTA",
                  desc: "Onde o grave de rua colide com a vanguarda. Pesquisa sonora focada no funk e em frequências experimentais que desafiam o padrão.",
                  tag: "BPM_RESEARCH",
                  img: "/textures/img-4.jpg"
                },
                {
                  title: "SELECTA",
                  desc: "Purismo e técnica. Uma curadoria rigorosa de house e techno, entregando rituais de pista desenhados para a imersão absoluta.",
                  tag: "HIGH_FIDELITY",
                  img: "/textures/ceiling-lights.jpg"
                },
                {
                  title: "RADIO GALERIA",
                  desc: "Plataforma de amplificação. Um palco dedicado a expor a nova safra de artistas locais e fortalecer o ecossistema cultural de Sorocaba.",
                  tag: "OPEN_SOURCE",
                  img: "/textures/crowd-hero.jpg"
                }
              ].map((label, idx) => (
                <div key={idx} className="group relative flex flex-col min-h-[600px] overflow-hidden bg-black transition-all">
                  <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-[1.5s] ease-out">
                    <Image src={label.img} alt={label.title} fill className="object-cover grayscale" />
                  </div>
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="relative z-20 p-12 mt-auto flex flex-col items-start">
                    <span className="text-zinc-700 text-5xl font-black mb-4 group-hover:text-obliqo-red/40 transition-colors">0{idx + 1}</span>
                    <h4 className="text-5xl font-black uppercase mb-6 group-hover:italic group-hover:translate-x-2 transition-all italic">{label.title}</h4>
                    <p className="text-zinc-400 font-mono text-xs leading-relaxed mb-8 max-w-[280px] uppercase tracking-wide italic">{label.desc}</p>
                    <span className="text-[9px] font-mono border border-zinc-800 px-3 py-1 text-zinc-500 group-hover:border-obliqo-red group-hover:text-obliqo-red transition-colors uppercase tracking-widest">{label.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 03 /// AUDIO ARCHITECTURE */}
          <section className="py-32 px-8 border-b border-white/5 flex flex-col items-center">
            <div className="max-w-4xl w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className="relative aspect-square w-full bg-zinc-900 border border-white/5 p-12 group">
                  <div className="absolute inset-4 border border-obliqo-red/20 animate-spin-slow"></div>
                  <div className="w-full h-full flex items-center justify-center text-8xl text-obliqo-red opacity-20 group-hover:opacity-100 transition-opacity select-none">✱</div>
                  <div className="absolute bottom-8 left-8 font-mono text-[9px] text-zinc-500 uppercase tracking-widest">System: 4VIAS + B&C Speakers</div>
                </div>
                <div className="space-y-6">
                  <span className="text-obliqo-red font-mono text-[10px] tracking-[0.4em] uppercase">Audio Engineering</span>
                  <h3 className="text-5xl font-black uppercase leading-tight italic">Sonic <br /> Architecture.</h3>
                  <p className="text-zinc-500 font-mono text-sm leading-relaxed italic uppercase">
                    Equipado com sistemas de som de alta fidelidade, o OBLIQO eleva o som a uma forma de arte, respeitando as raízes do techno e house com sofisticação brutalista.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 04 /// O ARQUIVO: 1 YEAR OF RESISTANCE */}
          <section className="relative border-b border-white/5 bg-zinc-950 overflow-hidden">
            
            {/* Título de Fundo Monumental (Scroll Decorativo) */}
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-[0.03] select-none">
              <span className="text-[30vw] font-black italic tracking-tighter uppercase">RESIST</span>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 min-h-screen border-l border-white/5">
              
              {/* Coluna da Esquerda: Mural de Dados e Manifesto */}
              <div className="md:col-span-4 p-8 md:p-16 flex flex-col justify-between border-r border-white/5">
                <div>
                  <span className="text-obliqo-red font-mono text-[10px] tracking-[0.4em] block mb-8 uppercase italic">Report_Log: Anniversary_01</span>
                  <h3 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-[0.8] mb-12">
                    1 Year <br/> <span className="text-zinc-800 group-hover:text-white transition-colors italic">Legacy.</span>
                  </h3>
                </div>

                <div className="space-y-10">
                  <div className="border-l-2 border-obliqo-red pl-6 space-y-4">
                    <p className="text-sm font-mono text-zinc-400 leading-relaxed uppercase italic">
                      "Revivemos a história. Reunimos gerações. Sorocaba está de volta ao mapa."
                    </p>
                    <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
                      — Curadoria OBLIQO
                    </p>
                  </div>

                  {/* Pequenos "Counters" Brutalistas */}
                  <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-10">
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold italic tracking-tighter text-white">52+</span>
                      <span className="text-[9px] font-mono text-zinc-600 uppercase">Rituals_Performed</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold italic tracking-tighter text-white">100%</span>
                      <span className="text-[9px] font-mono text-zinc-600 uppercase">Underground_Focus</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coluna da Direita: Imagem e Timeline de Labels */}
              <div className="md:col-span-8 flex flex-col">
                
                {/* Imagem Hero da Pista */}
                <div className="relative h-[60vh] md:h-[70vh] overflow-hidden group">
                  <Image 
                    src="/textures/crowd-hero.jpg" 
                    alt="Anniversary Crowd" 
                    fill 
                    className="object-cover grayscale group-hover:grayscale-0 contrast-125 transition-all duration-[2s] scale-105 group-hover:scale-100" 
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-1000"></div>
                  
                  {/* Overlay de Canto Técnico */}
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

          {/* 05 /// AGENDA & RITUALS */}
          <section className="py-40 bg-zinc-950 flex flex-col items-center justify-center relative border-b border-white/5 overflow-hidden">
            <div className="text-center mb-16 px-6 z-10">
              <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter italic mb-4">FAÇA PARTE.</h2>
              <p className="font-mono text-[10px] tracking-[0.5em] text-obliqo-red uppercase">Official Archive Updates @obliqosp</p>
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

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none text-[40vw] select-none">✱</div>
          </section>

          {/* FOOTER */}
          <footer className="py-20 px-8 flex flex-col md:flex-row justify-between items-end gap-12 bg-black overflow-hidden relative">
            <div className="flex flex-col gap-6 relative z-10">
              <div className="text-obliqo-red text-5xl animate-spin-slow select-none cursor-wait">✱</div>
              <div className="flex gap-8 text-[10px] font-mono font-black uppercase tracking-widest text-zinc-600 italic">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Soundcloud</a>
                <a href="#" className="hover:text-white transition-colors">Resident Advisor</a>
              </div>
            </div>

            <div className="text-right relative z-10">
              <h1 className="text-8xl font-black tracking-tighter text-zinc-900 select-none italic leading-none">OBLIQO</h1>
              <p className="text-[9px] font-mono text-zinc-800 mt-2 uppercase tracking-[0.3em]">© 2023-2026 Cultural_System_Sorocaba_BR</p>
            </div>
          </footer>

        </div>
      </div>
    </main>
  );
}