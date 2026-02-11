export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center justify-center relative z-10">
      {/* Seção 1 */}
      <section className="h-screen w-full flex items-center justify-center border-b border-obliqo-gray/20">
        <h1 className="text-8xl font-black tracking-tighter uppercase text-transparent bg-clip-text bg-linear-to-b from-white to-gray-800">
          OBLIQO
        </h1>
      </section>
      
      {/* Seção 2 - Teste de Altura */}
      <section className="h-[150vh] w-full flex items-center justify-center bg-obliqo-gray/5">
        <p className="text-obliqo-cyan font-mono text-xl animate-pulse">
          KEEP SCROLLING /// TESTING INERTIA
        </p>
      </section>

      {/* Seção 3 */}
      <section className="h-screen w-full flex items-center justify-center border-t border-obliqo-gray/20">
        <h2 className="text-6xl font-bold text-obliqo-red">
          END OF SIGNAL
        </h2>
      </section>
    </main>
  );
}