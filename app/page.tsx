import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen z-10 text-white selection:bg-obliqo-red selection:text-black bg-black">
      
      {/* --- NOVA HERO SECTION (SEM 3D) --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Camada 1: Imagem de Fundo Estática (Atmosfera) */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/textures/ceiling-lights.jpg" 
            alt="Obliqo Atmosphere"
            fill
            className="object-cover opacity-40 grayscale contrast-150"
            priority
          />
          {/* Vinheta e Gradiente para profundidade */}
          <div className="absolute inset-0 bg-black/40 bg-radial-gradient"></div>
        </div>

        {/* Camada 2: Ruído Analógico Animado (CSS puro) */}
        <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.05] noise-animation"></div>

        {/* Camada 3: Tipografia Central (OBLIQO) */}
        <div className="relative z-20 flex flex-col items-center">
          {/* Logo "Ghost" atrás (Opcional, estilo brutalista) */}
          <h1 className="text-[25vw] font-bold tracking-tighter text-white/5 absolute -translate-y-1/2 select-none">
            OBLIQO
          </h1>
          
          {/* Logo Principal com Glitch Sutil */}
          <h1 className="text-[18vw] md:text-[15vw] font-bold tracking-tighter leading-none relative group cursor-default">
            <span className="relative z-10">OBLIQO</span>
            {/* Efeito de rastro vermelho no hover ou fixo */}
            <span className="absolute inset-0 text-obliqo-red translate-x-1 translate-y-1 -z-10 opacity-70 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300">
              OBLIQO
            </span>
          </h1>

          {/* Tagline Técnica */}
          <div className="mt-4 flex gap-4 items-center">
            <div className="h-[1px] w-12 bg-obliqo-red/50"></div>
            <span className="text-[10px] font-mono tracking-[0.5em] text-zinc-400 uppercase">
              Analog_Soul // Digital_Void
            </span>
            <div className="h-[1px] w-12 bg-obliqo-red/50"></div>
          </div>
        </div>

        {/* Camada 4: Elementos de Interface (Overlay Fixo) */}
        <div className="absolute inset-0 z-30 flex flex-col justify-between p-6 md:p-12 pointer-events-none">
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
          <div className="flex justify-between items-end">
            <div className="text-[10px] font-mono tracking-widest animate-pulse text-obliqo-red pointer-events-auto">
              /// SCROLL TO ACCESS THE DOSSIER
            </div>
            <div className="text-[10px] font-mono opacity-50 hidden md:block w-32 text-right">
              SYSTEM: STABLE <br/> VISUALS: RAW
            </div>
          </div>
        </div>

        {/* Camada 5: Linhas Geométricas Médias (Atravessando a tela) */}
        <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden opacity-20">
          <div className="absolute top-[20%] -left-10 w-[120%] h-[1px] bg-obliqo-red rotate-[-15deg]"></div>
          <div className="absolute bottom-[30%] -left-10 w-[120%] h-[1px] bg-obliqo-red rotate-[10deg]"></div>
          <div className="absolute top-[50%] left-[10%] w-[1px] h-[100%] bg-obliqo-red/30 rotate-[5deg]"></div>
        </div>
      </section>

      {/* --- O CONTEÚDO CULTURAL (Sobe cobrindo o 3D) --- */}
      <div className="relative bg-black z-20 border-t border-white/10">
        
        <div className="container mx-auto max-w-[1400px] border-x border-white/10 bg-black">

          {/* CAPÍTULO 1: O CONCEITO */}
          <section className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10">
            {/* Coluna Esquerda: Título Sticky */}
            <div className="md:col-span-5 p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/10 relative">
              <div className="sticky top-12">
                <span className="text-obliqo-red font-mono text-xs tracking-widest mb-4 block">01 /// CONCEPT</span>
                <h2 className="text-5xl md:text-7xl font-bold uppercase leading-[0.9] tracking-tighter mb-8">
                  Beyond <br/> The Club
                </h2>
                {/* Imagem Abstrata de Apoio */}
                <div className="relative h-64 w-full overflow-hidden grayscale contrast-125 opacity-80">
                  <Image
                    src="/textures/img-3.jpg" // NOME DA IMAGEM NA PASTA PUBLIC/IMAGES
                    alt="Concrete texture abstract"
                    fill
                    className="object-cover"
                  />
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
            
            {/* Coluna Direita: O Manifesto Detalhado */}
            <div className="md:col-span-7 p-8 md:p-24 flex flex-col justify-center bg-zinc-950">
              <p className="text-2xl md:text-3xl leading-relaxed text-zinc-200 font-light mb-12">
                A OBLIQO não é sobre entretenimento. É sobre <strong className="text-obliqo-red font-normal">resistência cultural</strong>.
              </p>
              <div className="space-y-6 text-zinc-500 font-mono text-sm md:text-base leading-relaxed text-justify max-w-lg">
                <p>
                  Nascemos da necessidade de criar um espaço seguro para a expressão da música eletrônica em sua forma mais pura, longe das demandas comerciais do mainstream.
                </p>
                <p>
                  Somos um movimento que entende a pista de dança como um ritual sagrado de desconexão e coletividade. Operamos nas frequências graves, onde a estética brutalista encontra o design sonoro de alta fidelidade.
                </p>
                <p className="border-l-2 border-obliqo-red pl-4 text-zinc-300">
                  "Não criamos festas. Criamos atmosferas temporárias para almas analógicas em um mundo digital."
                </p>
              </div>
            </div>
          </section>

          {/* CAPÍTULO 2: O ESPAÇO (Arquitetura & Vibe) */}
          <section className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10">
             {/* Texto Descritivo */}
             <div className="md:col-span-4 p-8 md:p-12 flex flex-col justify-end order-2 md:order-1 border-r border-white/10 bg-zinc-950">
                <span className="text-obliqo-red font-mono text-xs tracking-widest mb-4 block">02 /// THE SPACE</span>
                <h3 className="text-4xl font-bold uppercase mb-6 leading-none">Intimate <br/>& Raw</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-mono">
                  Escuro com boa luz. Nossa arquitetura foi pensada para isolar o mundo exterior. 
                  Não há distrações. Apenas o sistema de som Funktion-One, a iluminação imersiva e você. 
                </p>
                
                {/* Lista Técnica Style */}
                <div className="font-mono text-[10px] uppercase text-zinc-500 border-t border-white/10 pt-4 grid grid-cols-2 gap-4">
                  <div>
                    <span className="block text-zinc-700">Location Type</span>
                    <span className="text-white">Industrial Warehouse</span>
                  </div>
                   <div>
                    <span className="block text-zinc-700">Capacity</span>
                    <span className="text-white">Strictly Limited (300)</span>
                  </div>
                  <div>
                    <span className="block text-zinc-700">Audio</span>
                    <span className="text-white">High Fidelity Point Source</span>
                  </div>
                   <div>
                    <span className="block text-zinc-700">Atmosphere</span>
                    <span className="text-white">Haze / Red Light / Dark</span>
                  </div>
                </div>
             </div>

             {/* IMAGEM PRINCIPAL DO ESPAÇO */}
             <div className="md:col-span-8 bg-zinc-900 min-h-[700px] relative overflow-hidden order-1 md:order-2 group border-b md:border-b-0 border-white/10">
                <Image
                    src="/textures/img-6.jpg" // NOME DA IMAGEM NA PASTA PUBLIC/IMAGES
                    alt="Obliqo Warehouse Main Floor"
                    fill
                    className="object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
                    priority
                />
                {/* Overlay para garantir leitura do texto branco se a foto for clara */}
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-colors duration-1000"></div>
                
                <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 pointer-events-none">
                  <h4 className="text-white text-xl uppercase font-bold tracking-wider">Main Floor /// Sector A</h4>
                  <p className="text-obliqo-red font-mono text-xs mt-1">Architecture of Sound</p>
                </div>
             </div>
          </section>

          {/* NOVA SEÇÃO: ARQUIVO VISUAL (Galeria Grid) */}
          <section className="border-b border-white/10">
            <div className="p-8 md:px-12 md:py-16 border-b border-white/10 flex justify-between items-end">
               <div>
                 <span className="text-obliqo-red font-mono text-xs tracking-widest mb-2 block">03 /// VISUAL ARCHIVE</span>
                 <h3 className="text-3xl md:text-5xl font-bold uppercase leading-none tracking-tighter">Fragments of Time</h3>
               </div>
               <span className="font-mono text-xs text-zinc-500 hidden md:block">SELECTS FROM PAST RITUALS</span>
            </div>
            
            {/* Grid de 3 Imagens */}
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-zinc-950">
               {/* Imagem 1 */}
               <div className="group relative h-[400px] md:h-[500px] overflow-hidden">
                  <Image 
                    src="/textures/crowd-hero.jpg" // NOME DA IMAGEM
                    alt="Archive shot 1" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-4 left-4 bg-black/80 px-2 py-1 font-mono text-[9px] text-obliqo-red opacity-70 group-hover:opacity-100 transition-opacity">DOC_REC_001.RAW</div>
               </div>
               {/* Imagem 2 */}
               <div className="group relative h-[400px] md:h-[500px] overflow-hidden">
                  <Image 
                    src="/textures/img-5.jpg" // NOME DA IMAGEM
                    alt="Archive shot 2" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-4 left-4 bg-black/80 px-2 py-1 font-mono text-[9px] text-obliqo-red opacity-70 group-hover:opacity-100 transition-opacity">DOC_REC_002.RAW</div>
               </div>
               {/* Imagem 3 */}
               <div className="group relative h-[400px] md:h-[500px] overflow-hidden">
                  <Image 
                    src="/textures/img-4.jpg" // NOME DA IMAGEM
                    alt="Archive shot 3" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                   <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute bottom-4 left-4 bg-black/80 px-2 py-1 font-mono text-[9px] text-obliqo-red opacity-70 group-hover:opacity-100 transition-opacity">DOC_REC_003.RAW</div>
               </div>
            </div>
          </section>

          {/* CAPÍTULO 4: O CÓDIGO (Ética) */}
          <section className="py-24 px-6 md:px-24 bg-black relative overflow-hidden">
            {/* Background sutil de texto repetido */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none overflow-hidden">
              <span className="text-[20vw] font-bold uppercase tracking-tighter text-white whitespace-nowrap">RESPECT THE VIBE</span>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-16">
                  <span className="text-obliqo-red font-mono text-xs tracking-widest">04 /// THE CODE</span>
                  <h2 className="text-4xl md:text-6xl font-bold uppercase mt-4 tracking-tight">Our Ethos</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/20 border border-white/20">
                  {/* Regra 1 */}
                  <div className="bg-black p-12 hover:bg-zinc-950 transition-colors group">
                    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-obliqo-red">Disconnect</h4>
                    <p className="text-zinc-500 text-sm font-mono leading-relaxed">
                      A pista é sagrada. O uso excessivo de celulares e flash quebra a imersão coletiva. Esteja presente no agora.
                    </p>
                  </div>
                  
                  {/* Regra 2 */}
                  <div className="bg-black p-12 hover:bg-zinc-950 transition-colors group">
                    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-obliqo-red">Respect</h4>
                    <p className="text-zinc-500 text-sm font-mono leading-relaxed">
                      Tolerância zero para assédio, racismo, homofobia, transfobia ou qualquer tipo de discriminação. Cuidamos uns dos outros.
                    </p>
                  </div>

                  {/* Regra 3 */}
                  <div className="bg-black p-12 hover:bg-zinc-950 transition-colors group">
                    <h4 className="text-xl font-bold mb-4 text-white group-hover:text-obliqo-red">No Ego</h4>
                    <p className="text-zinc-500 text-sm font-mono leading-relaxed">
                      Aqui dentro, somos todos iguais perante o sistema de som. Deixe as hierarquias sociais na porta.
                    </p>
                  </div>
              </div>
            </div>
          </section>

          {/* --- SEÇÃO: PRÓXIMOS EVENTOS (RITUAIS) --- */}
          <section className="py-24 px-6 md:px-12 border-t border-white/10 bg-zinc-950">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
              <div>
                <span className="text-obliqo-red font-mono text-xs tracking-widest block mb-2">05 /// AGENDA</span>
                <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter">Upcoming Rituals</h2>
              </div>
              <p className="text-zinc-500 font-mono text-[10px] max-w-[200px] text-right uppercase">
                A curadoria obliqo foca na vanguarda. rituais limitados para mentes abertas.
              </p>
            </div>

            {/* CARD DE REDIRECIONAMENTO (INSTAGRAM) */}
            <a 
              href="https://www.instagram.com/obliqosp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative block w-full border border-white/10 p-8 md:p-16 overflow-hidden transition-all duration-500 hover:border-obliqo-red"
            >
              {/* Background sutil animado no hover */}
              <div className="absolute inset-0 bg-obliqo-red opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <h3 className="text-2xl md:text-4xl font-bold uppercase mb-2 group-hover:tracking-widest transition-all duration-500">
                    Acompanhe o Movimento
                  </h3>
                  <p className="text-zinc-500 font-mono text-sm">
                    Datas, line-ups e manifestos em tempo real.
                  </p>
                </div>

                <div className="flex flex-col items-center gap-4">
                  <span className="text-obliqo-red font-mono text-xl md:text-2xl font-bold tracking-tighter">
                    @OBLIQOSP
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="h-[1px] w-8 bg-zinc-800"></span>
                    <span className="text-[10px] font-mono text-zinc-400 group-hover:text-white transition-colors">
                      FOLLOW_ON_INSTAGRAM
                    </span>
                    <span className="h-[1px] w-8 bg-zinc-800"></span>
                  </div>
                </div>
              </div>

              {/* Elemento Decorativo (Círculo de mira técnico) */}
              <div className="absolute -right-20 -bottom-20 w-64 h-64 border border-white/5 rounded-full pointer-events-none group-hover:border-obliqo-red/20 transition-colors duration-700 flex items-center justify-center">
                 <div className="w-32 h-32 border border-white/5 rounded-full animate-spin-slow"></div>
              </div>
            </a>

            <div className="mt-12 text-center">
              <p className="text-[10px] font-mono text-zinc-700 uppercase tracking-[0.3em]">
                Sorocaba /// São Paulo /// Underground Research
              </p>
            </div>
          </section>

          {/* FOOTER: Marca D'água */}
          <footer className="border-t border-white/10 py-12 px-6 md:px-12 flex flex-col gap-12 bg-zinc-950 overflow-hidden relative">
             <div className="relative z-10 flex flex-col md:flex-row justify-between items-end gap-8">
               <div className="flex flex-col gap-4">
                 <span className="font-mono text-xs text-obliqo-red uppercase tracking-widest">Connect ///</span>
                 <div className="flex gap-6 font-bold text-sm md:text-lg uppercase tracking-wider">
                   <a href="#" className="hover:text-obliqo-red transition-colors">Instagram</a>
                   <a href="#" className="hover:text-obliqo-red transition-colors">Soundcloud</a>
                   <a href="#" className="hover:text-obliqo-red transition-colors">Resident Advisor</a>
                   <a href="#" className="hover:text-obliqo-red transition-colors">Email</a>
                 </div>
               </div>
               <p className="text-xs font-mono text-zinc-600 text-right">
                 SOROCABA // BRASIL <br/> COPYRIGHT © 2023-2025 OBLIQO CULTURAL SYSTEM.
               </p>
             </div>
             
             {/* Marca D'água Gigante no Fundo */}
             <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-10 flex justify-center">
                <h1 className="text-[18vw] leading-[0.75] font-bold tracking-tighter text-white translate-y-[10%]">
                  OBLIQO
                </h1>
             </div>
          </footer>

        </div>
      </div>
    </main>
  );
}