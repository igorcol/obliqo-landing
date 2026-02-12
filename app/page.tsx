import Hero from "@/components/layout/Hero";
import Footer from "@/components/layout/Footer";
import TheGenesis from "@/components/sections/TheGenesis";
import CulturalEcosystem from "@/components/sections/CulturalEcosystem";
import SonicArchitecture from "@/components/sections/SonicArchitecture";
import YearOneResistance from "@/components/sections/YearOneResistance";
import JoinMovement from "@/components/sections/JoinMovement";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen z-10 text-white selection:bg-obliqo-red selection:text-black bg-black overflow-x-hidden">
      
      {/* 00 / INTRODUÇÃO VISUAL */}
      <Hero />

      {/* --- CONTAINER DE CONTEÚDO --- */}
      <div className="relative bg-black z-20">
        <div className="container mx-auto max-w-[1500px] border-x border-white/5 bg-black px-0 md:px-0">
          
          {/* 01 / HISTÓRIA E FUNDAÇÃO */}
          <TheGenesis />

          {/* 02 / LABELS E PLATAFORMAS CULTURAIS */}
          <CulturalEcosystem />

          {/* 03 / ENGENHARIA DE SOM */}
          <SonicArchitecture />

          {/* 04 / RELATÓRIO ANUAL DE IMPACTO */}
          <YearOneResistance />

          {/* 05 / CHAMADA PARA AÇÃO */}
          <JoinMovement />

          {/* RODAPÉ E ASSINATURA */}
          <Footer />

        </div>
      </div>
    </main>
  );
}