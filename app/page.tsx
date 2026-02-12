import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen z-10 text-white selection:bg-obliqo-red selection:text-black bg-black overflow-x-hidden">
      
      {/* --- HERO: THE MONOLITH --- */}
      <section className="relative h-[110vh] w-full flex items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <Image 
            src="/textures/ceiling-lights.jpg" 
            alt="Obliqo Atmosphere"
            fill
            className="object-cover opacity-20 grayscale contrast-150 scale-110 hover:scale-100 transition-transform duration-[10s]"
            priority
          />
          <div className="absolute inset-0 bg-black/60 bg-radial-gradient"></div>
        </div>

        {/* Overlay de Noise Dinâmico */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03] noise-animation"></div>

        {/* Identidade Central Refinada */}
        <div className="relative z-20 flex flex-col items-center">
          <div className="mb-8 flex flex-col items-center group">
             <span className="text-obliqo-red text-6xl animate-spin-slow cursor-wait">✱</span>
             <div className="h-px w-0 group-hover:w-24 bg-obliqo-red transition-all duration-700 mt-4"></div>
          </div>
          
          <h1 className="text-[20vw] md:text-[16vw] font-bold tracking-tighter leading-none relative mix-blend-difference">
            OBLIQO
          </h1>

          <div className="mt-6 flex flex-col items-center gap-4">
            <p className="text-[9px] font-mono tracking-[0.6em] text-obliqo-red uppercase bg-white/5 px-4 py-1 backdrop-blur-sm">
              tilting humans. tilting visions. tilting perspectives.
            </p>
          </div>
        </div>

        {/* UI Elements - Fixed positions */}
        <div className="absolute inset-0 z-30 flex flex-col justify-between p-8 md:p-12 pointer-events-none font-mono text-[9px] tracking-[0.4em] opacity-40">
          <div className="flex justify-between items-start uppercase">
            <div className="space-y-1">
              <p>✱ NIGHTCLUB & CULTURAL CENTER</p>
              <p>SOROCABA // BRAZIL</p>
            </div>
            <div className="text-right space-y-1 text-obliqo-red">
              <p>INTERNAL_ARCHIVE_2026</p>
              <p>STATUS: DEPLOYED</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTENT CONTAINER --- */}
      <div className="relative bg-black z-20">
        
        {/* GRID DE CAPÍTULOS */}
        <div className="container mx-auto max-w-[1500px] border-x border-white/5">

          {/* 01 /// O LEGADO MOCHAKK (Destaque Visual) */}
          <section className="grid grid-cols-1 md:grid-cols-12 min-h-screen items-center border-b border-white/5">
            <div className="md:col-span-6 p-8 md:p-20 relative h-full flex flex-col justify-center">
               <span className="text-obliqo-red font-mono text-[10px] tracking-widest mb-6 block italic">/// THE GENESIS</span>
               <h2 className="text-6xl md:text-8xl font-bold uppercase tracking-tighter leading-[0.8] mb-10">
                 Pedro <br/> Maia's <br/> <span className="text-zinc-800">Vision.</span>
               </h2>
               <div className="space-y-8 text-zinc-400 font-mono text-xs md:text-sm leading-relaxed max-w-md">
                 <p className="border-l border-obliqo-red pl-6">
                   Inaugurado em 6 de Setembro de 2024, o OBLIQO é a materialização do desejo de Mochakk em retribuir à sua cidade natal. Um espaço dedicado a celebrar, educar e inspirar a comunidade da música eletrônica.
                 </p>
                 <p>
                   A inauguração coincidiu com o lançamento do EP "Locomotiva Ibiza 2099 II", marcando um novo capítulo para Sorocaba na rota global do techno e house.
                 </p>
               </div>
            </div>

            <div className="md:col-span-6 relative h-[70vh] md:h-full overflow-hidden group">
               <Image src="/textures/img-6.jpg" alt="Mochakk at Obliqo" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] scale-105 group-hover:scale-100" />
               <div className="absolute inset-0 bg-obliqo-red/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
               <div className="absolute top-12 right-12 text-[10px] font-mono rotate-90 origin-right text-white/20">
                 ARCHIVE_IMG_REF_060924
               </div>
            </div>
          </section>

          {/* 02 /// LABELS & RITUAIS (Interatividade) */}
          <section className="border-b border-white/5 overflow-hidden">
            <div className="p-12 border-b border-white/5 flex justify-between items-center bg-zinc-950/50">
               <h3 className="text-2xl font-bold uppercase italic tracking-tighter italic">Cultural_Ecosystem ✱</h3>
               <span className="text-[10px] font-mono text-zinc-600">3 ACTIVE PLATFORMS</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3">
               {[
                 { title: "NAPONTA", desc: "A fusão entre o grave do funk e a vanguarda eletrônica. Onde a rua dita o ritmo.", tag: "EXPERIMENTAL" },
                 { title: "SELECTA", desc: "A curadoria técnica da casa. Rituais de pista conduzidos por mentes obliquo.", tag: "CURATED" },
                 { title: "RADIO_G", desc: "Visibilidade para o talento local. A voz da comunidade de Sorocaba.", tag: "COLLECTIVE" }
               ].map((label, idx) => (
                 <div key={idx} className="p-16 border-b md:border-b-0 border-white/5 hover:bg-zinc-900 transition-all cursor-crosshair group relative">
                    <span className="text-zinc-800 text-6xl font-bold absolute top-8 right-8 group-hover:text-obliqo-red/20 transition-colors">0{idx+1}</span>
                    <h4 className="text-4xl font-bold uppercase mb-8 group-hover:translate-x-2 transition-transform italic">{label.title}</h4>
                    <p className="text-zinc-500 font-mono text-xs leading-relaxed mb-10">{label.desc}</p>
                    <span className="text-[9px] font-mono border border-zinc-800 px-2 py-1 text-zinc-700 group-hover:border-obliqo-red group-hover:text-obliqo-red">{label.tag}</span>
                 </div>
               ))}
            </div>
          </section>

          {/* 03 /// AUDIO ARCHITECTURE (Technical Focus) */}
          <section className="py-32 px-8 border-b border-white/5 flex flex-col items-center">
            <div className="max-w-4xl w-full">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                 <div className="relative aspect-square w-full bg-zinc-900 border border-white/5 p-12 group">
                    <div className="absolute inset-4 border border-obliqo-red/20 animate-spin-slow"></div>
                    <div className="w-full h-full flex items-center justify-center text-8xl text-obliqo-red opacity-20 group-hover:opacity-100 transition-opacity">✱</div>
                    <div className="absolute bottom-8 left-8 font-mono text-[9px] text-zinc-500">SYSTEM_MODEL: 4VIAS_BC_SPEAKERS</div>
                 </div>
                 <div className="space-y-6">
                    <span className="text-obliqo-red font-mono text-[10px] tracking-[0.4em] uppercase">Audio Engineering</span>
                    <h3 className="text-5xl font-bold uppercase leading-tight italic">Sonic <br/> Architecture.</h3>
                    <p className="text-zinc-500 font-mono text-sm leading-relaxed italic">
                      Equipado com sistemas de som 4VIAS e B&C Speakers, o OBLIQO eleva o som a uma forma de arte. Uma experiência imersiva onde a acústica brutalista encontra a tecnologia de ponta.
                    </p>
                 </div>
               </div>
            </div>
          </section>

          {/* 04 /// O CLUBE (Visual imersivo) */}
          <section className="grid grid-cols-1 md:grid-cols-12 border-b border-white/5 min-h-[80vh]">
            <div className="md:col-span-7 border-r border-white/5 relative group overflow-hidden">
               <Image src="/textures/crowd-hero.jpg" alt="Obliqo Crowd" fill className="object-cover opacity-40 grayscale group-hover:opacity-80 transition-all duration-700 scale-110 group-hover:scale-100" />
               <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
               <div className="absolute bottom-16 left-16">
                  <span className="text-obliqo-red font-mono text-[10px] tracking-widest block mb-4 italic">ANNIVERSARY_REPORT ///</span>
                  <h3 className="text-4xl md:text-6xl font-bold uppercase italic">1 Year of <br/> Resistance.</h3>
               </div>
            </div>
            <div className="md:col-span-5 p-12 md:p-20 flex flex-col justify-between bg-zinc-950/30 font-mono">
               <p className="text-sm text-zinc-400 leading-relaxed italic uppercase">
                 "Ver Sorocaba novamente no mapa da rota dos grandes artistas em conexão com nossos artistas locais é a prova de que o trabalho coletivo vale a pena."
               </p>
               <div className="space-y-4">
                  <div className="flex justify-between text-[9px] text-zinc-600 border-b border-white/5 pb-2">
                    <span>SECTOR</span> <span>USINA CULTURAL</span>
                  </div>
                  <div className="flex justify-between text-[9px] text-zinc-600 border-b border-white/5 pb-2">
                    <span>CAPACITY</span> <span>LIMITLESS_SOULS</span>
                  </div>
                  <div className="flex justify-between text-[9px] text-zinc-600 border-b border-white/5 pb-2">
                    <span>MISSION</span> <span>TILTING_VISIONS</span>
                  </div>
               </div>
            </div>
          </section>

          {/* 05 /// CTAs TÉCNICOS */}
          <section className="py-40 bg-zinc-950 flex flex-col items-center justify-center relative border-b border-white/5">
            <div className="text-center mb-16 px-6">
               <h2 className="text-5xl md:text-9xl font-bold uppercase tracking-tighter italic mb-4">Follow the Ritual.</h2>
               <p className="font-mono text-[10px] tracking-[0.5em] text-obliqo-red uppercase">Official Archive Updates @obliqosp</p>
            </div>
            
            <a 
              href="https://www.instagram.com/obliqosp" 
              target="_blank"
              className="px-20 py-6 border border-obliqo-red text-obliqo-red font-bold uppercase tracking-[0.4em] text-xs hover:bg-obliqo-red hover:text-black transition-all duration-500 relative overflow-hidden group"
            >
              <span className="relative z-10">Access Dossiê</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </a>
          </section>

          {/* FOOTER BRUTALISTA */}
          <footer className="py-20 px-8 flex flex-col md:flex-row justify-between items-end gap-12 bg-black">
             <div className="flex flex-col gap-6">
               <div className="text-obliqo-red text-5xl animate-spin-slow">✱</div>
               <div className="flex gap-8 text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-600 italic">
                 <a href="#" className="hover:text-white">Instagram</a>
                 <a href="#" className="hover:text-white">Soundcloud</a>
                 <a href="#" className="hover:text-white">Email</a>
               </div>
             </div>
             
             <div className="text-right">
                <h1 className="text-8xl font-bold tracking-tighter text-zinc-900 select-none">OBLIQO</h1>
                <p className="text-[9px] font-mono text-zinc-700 mt-2">© 2023-2026 CULTURAL_SYSTEM_SOROCABA_BR</p>
             </div>
          </footer>

        </div>
      </div>
    </main>
  );
}