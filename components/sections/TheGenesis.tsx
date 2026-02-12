/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";

export default function TheGenesis() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 min-h-screen items-center border-b border-white/5">
      {/* Coluna de Texto / Manifesto */}
      <div className="md:col-span-6 p-8 md:p-20 relative h-full flex flex-col justify-center bg-zinc-950/30">
        <span className="text-obliqo-red font-mono text-[10px] tracking-widest mb-6 block italic">
          /// THE GENESIS
        </span>
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.8] mb-10 italic">
          Pedro <br /> Maia&apos;s <br /> <span className="text-zinc-800 italic">Vision.</span>
        </h2>
        
        <div className="space-y-8 text-zinc-400 font-mono text-xs md:text-sm leading-relaxed max-w-md">
          <p className="border-l border-obliqo-red pl-6 uppercase">
            Inaugurado em 6 de Setembro de 2024, o OBLIQO é a materialização do desejo de Mochakk em retribuir à sua cidade natal. Um espaço revolucionário dedicado a celebrar, educar e inspirar a comunidade local.
          </p>
          <p className="uppercase">
            A inauguração coincidiu com o lançamento do EP &apos;Locomotiva Ibiza 2099 II&apos;, transformando Sorocaba em um ponto vital da rota global da música eletrônica nacional.
          </p>
        </div>
      </div>

      {/* Coluna de Imagem / Arquivo */}
      <div className="md:col-span-6 relative h-[70vh] md:h-full overflow-hidden group">
        <Image
          src="/textures/img-6.jpg"
          alt="Mochakk at Obliqo"
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] scale-105 group-hover:scale-100"
        />
        {/* Overlay de cor sutil no hover */}
        <div className="absolute inset-0 bg-obliqo-red/10 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        {/* Etiqueta de Metadados */}
        <div className="absolute top-12 right-12 text-[10px] font-mono rotate-90 origin-right text-white/20 uppercase tracking-widest">
          ARCHIVE_IMG_REF_060924
        </div>
      </div>
    </section>
  );
}