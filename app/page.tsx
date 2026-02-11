export default function Home() {
  return (
    <main className="w-full min-h-screen relative z-10">
      {/* Hero Section Wrapper - Height Screen */}
      <section className="h-screen w-full flex flex-col items-center justify-center">
        
        {/* O Título "OBLIQO" agora está no fundo 3D. Aqui fica só o "tempero" */}
        
        <div className="absolute bottom-20 flex flex-col items-center gap-4">
          <p className="text-obliqo-cyan tracking-[0.5em] text-xs md:text-sm font-mono animate-pulse uppercase">
            System_Init /// V4.0
          </p>
          <div className="w-[1px] h-12 bg-gradient-to-b from-obliqo-cyan to-transparent"></div>
        </div>

      </section>

      {/* Conteúdo Dummy para Scroll */}
      <section className="h-[100vh] w-full flex items-center justify-center bg-black/50 backdrop-blur-sm border-t border-white/10">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter">
          THE ARCHIVE
        </h2>
      </section>
    </main>
  );
}