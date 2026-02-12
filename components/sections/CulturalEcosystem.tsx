import Image from "next/image";

const LABELS = [
  {
    title: "NAPONTA",
    desc: "Onde o grave de rua colide com a vanguarda. Pesquisa sonora focada no funk e em frequências experimentais que desafiam o padrão.",
    tag: "BPM_RESEARCH",
    img: "/images/img-4.jpg",
  },
  {
    title: "SELECTA",
    desc: "Purismo e técnica. Uma curadoria rigorosa de house e techno, entregando rituais de pista desenhados para a imersão absoluta.",
    tag: "HIGH_FIDELITY",
    img: "/images/ceiling-lights.jpg",
  },
  {
    title: "RADIO GALERIA",
    desc: "Plataforma de amplificação. Um palco dedicado a expor a nova safra de artistas locais e fortalecer o ecossistema cultural de Sorocaba.",
    tag: "OPEN_SOURCE",
    img: "/images/crowd-hero.jpg",
  },
];

export default function CulturalEcosystem() {
  return (
    <section className="border-b border-white/5 overflow-hidden">
      {/* Header da Seção: Ajustado para empilhar no mobile e alinhar no desktop */}
      <div className="p-6 md:p-12 border-b border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center bg-zinc-950/50 gap-2">
        <h3 className="text-xl md:text-2xl font-bold uppercase italic tracking-tighter">
          Cultural_Ecosystem <span className="text-obliqo-red">✱</span>
        </h3>
        <span className="text-[8px] md:text-[10px] font-mono text-zinc-600 uppercase tracking-widest">
          3 ACTIVE PLATFORMS
        </span>
      </div>

      {/* Grid de Labels: Remove divisores md no mobile para usar divisores y fixos */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
        {LABELS.map((label, idx) => (
          <div
            key={idx}
            className="group relative flex flex-col min-h-112.5 md:min-h-150 overflow-hidden bg-black transition-all"
          >
            {/* Background Image com Efeito Zoom */}
            <div className="absolute inset-0 z-0 opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-[1.5s] ease-out">
              <Image
                src={label.img}
                alt={label.title}
                fill
                className="object-cover grayscale"
              />
            </div>

            {/* Overlay de Gradiente para Legibilidade */}
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black via-black/40 to-transparent"></div>

            {/* Conteúdo da Card: Paddings e tamanhos de fonte responsivos */}
            <div className="relative z-20 p-8 md:p-12 mt-auto flex flex-col items-start">
              <span className="text-zinc-700 text-4xl md:text-5xl font-black mb-2 md:mb-4 group-hover:text-obliqo-red/40 transition-colors">
                0{idx + 1}
              </span>
              <h4 className="text-4xl md:text-5xl font-black uppercase mb-4 md:mb-6 group-hover:italic group-hover:translate-x-2 transition-all italic">
                {label.title}
              </h4>
              <p className="text-zinc-400 font-mono text-[10px] md:text-xs leading-relaxed mb-6 md:mb-8 max-w-70 uppercase tracking-wide italic">
                {label.desc}
              </p>
              <span className="text-[8px] md:text-[9px] font-mono border border-zinc-800 px-3 py-1 text-zinc-500 group-hover:border-obliqo-red group-hover:text-obliqo-red transition-colors uppercase tracking-widest">
                {label.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}