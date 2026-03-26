import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "../components/section-title";

const sectionData = [

  // 🥚 OVOS DE COLHER
  {
    category: "Ovos de Colher",
    title: "Ovo de Colher Kinder",
    description: "Casca de chocolate ao leite banhada de chocolate branco. Recheada com brigadeiro gurmet branco e pedaços de kinder. Decoração com pedaços de kinder , kinder Bueno e um kinder ovo.",
    price: "R$ 110,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408538/ovo-kinder_rcip1w.png",
  },
  {
    category: "Ovos de Colher",
    title: "Ovo de Colher Ninho com Nutella",
    description: "Casca de chocolate ao leite banhada com chocolate branco. Recheado com brigadeiro gurmet de leite ninho, Nutella.",
    price: "R$ 95,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408538/ovo-ninho-com-nutella_en3tkc.png",
  },
  {
    category: "Ovos de Colher",
    title: "Ovo de Colher Ninho com Morango",
    description: "Casca de chocolate branco ao leite com pedaços de Oreo. Recheada com brigadeiro gurmet branco com geleia de Morango. Decorado com morangos.",
    price: "R$ 95,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408538/ovo-ninho-com-morango_fjqmmk.png",
  },
  {
    category: "Ovos de Colher",
    title: "Ovo de Colher Brigadeiro Tradicional",
    description: "Casca de chocolate ao leite. Recheado com brigadeiro gurmet tradicional. Decorado com Brigadeiros.",
    price: "R$ 80,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408539/ovo-brigadeiro-tradicional_ut9ozl.png",
  },
  {
    category: "Ovos de Colher",
    title: "Ovo de Colher Brownie",
    description: "Casca de Brownie banhada com chocolate ao leite ou branco. Recheado com pedaços de Brownie, brigadeiro tradicional,branco ou caramelo salgado.",
    price: "R$ 95,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408537/ovo-brownie_cqu34a.png",
  },
  {
    category: "Ovos de Colher",
    title: "Ovo de Colher Franui",
    description: "Casca de chocolate ao leite banhada com chocolate branco. Recheado com brigadeiro gurmet branco e geleia de frutas vermelhas.",
    price: "R$ 110,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408539/ovo-franui_zfsqoh.png",
  },
  {
    category: "Ovos de Colher",
    title: "Ovo de Colher Ferrero Rocher",
    description: "Casca de chocolate ao leite. Recheada com brigadeiro gurmet ao leite com pedaços de amendoim e nutella.",
    price: "R$ 100,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408539/ovo-ferrero-rocher_fxwkqm.png",
  },
  {
    category: "Ovos de Colher",
    title: "Ovo de Colher M&M's",
    description: "Casca de chocolate ao leite com M&ms. Recheado com brigadeiro de chocolate ao leite com M&Ms.",
    price: "R$ 95,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408537/ovo-mem_iaq2je.png",
  },
  {
    category: "Ovos de Colher",
    title: "Ovo de Colher Oreo",
    description: "Casca de chocolate branco com pedaços de oreo. Recheada com brigadeiro gurmet branco com pedaços de biscoito oreo. Decorado com oreos e brigadeiros.",
    price: "R$ 85,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408538/ovo-%C3%B3reo_p0md4g.png",
  },
  {
    category: "Ovos de Colher",
    title: "Ovo de Colher Pudim",
    description: "Casca de chocolate branco com recheio de creme de pudim e calda, com um mini pudim em cima.",
    price: "R$ 65,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408537/ovo-pudim_v5zidq.png",
  },
  {
    category: "Ovos de Colher",
    title: "Ovo de Colher Maracujá",
    description: "Casca de chocolate ao leite. Recheado com mousse de maracujá e ganache de chocolate ao leite. Decorado com Brigadeiros.",
    price: "R$ 85,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408539/ovo-maracuj%C3%A1_ck44pa.png",
  },
  {
    category: "Ovos de Colher",
    title: "Ovo de Colher Folhata de Morango",
    description: "Casca de chocolate branco, com recheio massa de baunilha acompanhada de morangos frescos, doce de leite e massa folhada.",
    price: "R$ 110,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408538/ovo-folhata-de-morango_iavtvw.png",
  },
  {
    category: "Ovos de Colher",
    title: "Ovo Bombom de Morango",
    description: "Casca de chocolate ao leite, com recheio de brigadeiro gourmet branco, moramgos frescos, brigadeiros, brownie.",
    price: "R$ 100,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408537/ovo-bombom-de-morango_lpwctp.png",
  },
  {
    category: "Ovos de Colher",
    title: "Ovo Bombom de Uva",
    description: "Casca de chocolate ao leite. Recheado com brigadeiro gurmet branco com uvas verdes sem sementes e ganche de chocolate ao leite.",
    price: "R$ 95,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408539/ovo-bombom-de-uva_kez24b.png",
  },
  {
    category: "Ovos de Colher",
    title: "Kit Ovos de Colher",
    description: "Kit a ser montado com sabores disponíveis no cardápio.",
    price: "R$ 120,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408539/kit-ovos_ayuu6i.png",
  },

  // 🍫 BARRAS
  {
    category: "Barras",
    title: "Barra Oval",
    description: "Barra disponível nos sabores: Oreo; Ninho com Nutella; Brigadeiro; M&ms; Ninho com Morango",
    price: "R$ 30,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408540/barra-de-ovo_uvfkab.png",
  },
  {
    category: "Barras",
    title: "Ovo Fatia - Kit 3 partes",
    description: "Sabores: Até 3 sabores por kit! Sabores: Oreo; Ninho com Nutella; Brigadeiro Tradicional; Ninho com Morango; M&ms; Brownie",
    price: "R$ 65,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774491750/ovo-fatia_bpg8dt.png",
  },
  {
    category: "Barras",
    title: "Ovo Fatia - Kit 6 partes",
    description: "Sabores: Até 3 sabores por kit! Sabores: Oreo; Ninho com Nutella; Brigadeiro Tradicional; Ninho com Morango; M&ms; Brownie",
    price: "R$ 155,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774491750/ovo-fatia_bpg8dt.png",
  },
  {
    category: "Barras",
    title: "Barra Recheada",
    description: "Barra de chocolate artesanal. Sabores: Ninho com Nutella; M&MS; Ninho com Morango; Brownie; Brigadeiro Tradicional; Oreo",
    price: "R$ 26,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408537/barra-recheada_vrkiyb.png",
  },
  {
    category: "Barras",
    title: "Ovo Tablete",
    description: "sabores: Oreo; Kinder; Kit Kat; Brigadeiro; M&ms; Mix castanhas",
    price: "R$ 18,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408539/ovo-tablete_bp40hk.png",
  },

  // 🎁 KITS
  {
    category: "Kits",
    title: "Kit Confeiteiro 1",
    description: "Dois recheios; 1 Granulado; 4 Casquinhas 50g",
    price: "R$ 50,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408540/kit-confeiteiro-1_kgjuzb.png",
  },
  {
    category: "Kits",
    title: "Kit Confeiteiro 2",
    description: "2 casquinhas 100g; 1 bisnaga de brigadeiro 150g; 3 tubinhos com confeiros diferentes",
    price: "R$ 70,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408540/kit-confeiteiro-2_jzzuso.png",
  },
  {
    category: "Kits",
    title: "Petisqueira",
    description: "Kit 5 mini cascas 50g; Dois recheios; Granulado; M&MS; Marshmello; Oreos ou cookies; Brownie; Frutas",
    price: "R$ 100,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408540/petisqueira_mwrzqu.png",
  },
  {
    category: "Kits",
    title: "Kit Mini Ovos - 3 Unidades",
    description: "Sabores disponíveis de acordo com o cardápio.",
    price: "R$ 30,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408539/kit-mini-ovos_htybpl.png",
  },
  {
    category: "Kits",
    title: "Kit Mini Ovos - 6 Unidades",
    description: "Sabores disponíveis de acordo com o cardápio.",
    price: "R$ 65,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408539/kit-mini-ovos_htybpl.png",
  },
  {
    category: "Kits",
    title: "Kit Ovos",
    description: "Kit a ser montado com sabores disponíveis no cardápio.",
    price: "R$ 120,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408539/kit-ovos_ayuu6i.png",
  },
  {
    category: "Kits",
    title: "Cake Box - Bolo de cenoura com brigadeiro ao leite.",
    description: "Bolo de cenoura com brigadeiro ao leite.",
    price: "R$ 50,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408537/cake-box_xcndux.png",
  },
  {
    category: "Kits",
    title: "Cake Box - Folhata de Morango",
    description: "Bolo de Doce de leite, Morango, Massa de baunilha e Massa folhada.",
    price: "R$ 65,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408537/cake-box_xcndux.png",
  },
  {
    category: "Kits",
    title: "Bombons",
    description: "Dois sabores por embalagem! Sabores: Ninho com Nutella; M&Ms; Brigadeiro Tradicional; Oreo; Ninho com Morango.",
    price: "R$ 47,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408539/bombons_rh2zls.png",
  },
  {
    category: "Kits",
    title: "Bombom de Coelho - Unidade",
    description: "Bombom especial em formato de coelho. Sabores: Ninho com Nutella; M&ms; Oreo; Franui; Ninho com Morango; Caramelo Salgado",
    price: "R$ 9,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408539/bombom-de-coelho_lynqmx.png",
  },

  // 🥚 MINI OVOS
  {
    category: "Mini Ovos",
    title: "Mini Ovos - 1 Unidade",
    description: "Sabores disponíveis de acordo com o cardápio.",
    price: "R$ 9,50",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408539/kit-mini-ovos_htybpl.png",
  },
  {
    category: "Mini Ovos",
    title: "Mini Ovos - 3 Unidades",
    description: "Sabores disponíveis de acordo com o cardápio.",
    price: "R$ 30,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408539/kit-mini-ovos_htybpl.png",
  },
  {
    category: "Mini Ovos",
    title: "Mini Ovos - 6 Unidades",
    description: "Sabores disponíveis de acordo com o cardápio.",
    price: "R$ 65,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408539/kit-mini-ovos_htybpl.png",
  },

  // Brownie
  {
    category: "Brownie",
    title: "Ovo brownie",
    description: "Fatia de brownie em formato de ovo com cobertura. Sabores de cobertura: Ninho e Nutella; Brigadeiro Tradicional; M&MS; Ninho com Moramgo; OREO",
    price: "R$ 18,00",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1774408538/fatia-ovo-brownie_d9qanw.png",
  }
];

// ─── Ícone WhatsApp ───────────────────────────────────────────────────────────
function WhatsAppIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.118 1.528 5.855L0 24l6.335-1.508A11.933 11.933 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.803 9.803 0 01-5.001-1.371l-.359-.213-3.72.885.927-3.62-.234-.371A9.818 9.818 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z" />
    </svg>
  );
}

// ─── Componente do card individual ───────────────────────────────────────────
function ProductCard({ product }) {
  const [expanded, setExpanded] = useState(false);

  const handleWhatsApp = (e) => {
    e.stopPropagation();
    const message = encodeURIComponent(
      `Gostaria de fazer um pedido! ${product.title} (Categoria: ${product.category}) de valor ${product.price}`
    );
    window.open(`https://wa.me/5551997145016?text=${message}`, "_blank");
  };

  const handleExpand = (e) => {
    e.stopPropagation();
    setExpanded((prev) => !prev);
  };

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg bg-white group">
      {/* Imagem — leve zoom no hover desktop */}
      <img
        src={product.image}
        alt={product.title}
        className="h-[360px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* ── BARRA INFERIOR SEMPRE VISÍVEL ──
          Desktop: some no hover para o painel subir
          Mobile:  sempre visível, tem o botão "↑" */}
      <div
        className={`
          absolute bottom-0 left-0 w-full px-4 py-3 bg-white
          flex items-center justify-between gap-2
          transition-opacity duration-200
          ${expanded ? "opacity-0 pointer-events-none" : ""}
          group-hover:opacity-0 group-hover:pointer-events-none
        `}
      >
        <h3 className="text-sm font-semibold text-slate-800 leading-snug truncate">
          {product.title}
        </h3>

        {/* Botão expandir — visível apenas no mobile (touch devices) */}
        <button
          onClick={handleExpand}
          aria-label="Ver detalhes"
          className="sm:hidden shrink-0 w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 active:bg-yellow-200 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
      </div>

      {/* ── PAINEL DE DETALHES ──
          Desktop: sobe com CSS hover (group-hover)
          Mobile:  controlado pelo estado `expanded` */}
      <div
        className={`
          absolute bottom-0 left-0 w-full
          bg-white rounded-t-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.12)]
          px-4 pt-4 pb-5
          transition-transform duration-300 ease-out
          ${expanded ? "translate-y-0" : "translate-y-full"}
          group-hover:translate-y-0
        `}
        style={{ minHeight: "170px" }}
      >
        {/* Alça — no mobile fecha o painel, no desktop é decorativa */}
        <button
          onClick={handleExpand}
          aria-label="Fechar detalhes"
          className="sm:pointer-events-none w-full flex justify-center mb-3"
        >
          <div className="w-8 h-1 bg-slate-200 rounded-full" />
        </button>

        <h3 className="text-sm font-semibold text-slate-800 leading-snug mb-1">
          {product.title}
        </h3>

        <p className="text-xs text-slate-500 leading-relaxed mb-3">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-yellow-500">
            {product.price}
          </span>

          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-1.5 bg-green-50 text-green-700 text-xs font-medium px-3 py-1.5 rounded-full active:bg-green-100 transition-colors"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
            Pedir agora
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function OurLatestCreation() {
  const categories = ["Ovos de Colher", "Mini Ovos", "Brownie", "Barras", "Kits"];

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isDragging, setIsDragging] = useState(false);

  const filteredProducts = sectionData.filter(
    (product) => product.category === activeCategory
  );

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 640) setItemsPerView(2);
      else setItemsPerView(1);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const maxIndex = Math.max(filteredProducts.length - itemsPerView, 0);

  const goNext = () => setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  const goPrev = () => setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));

  return (
    <section
      id="creations"
      className="relative w-screen left-1/2 -ml-[50vw] bg-white/80 pt-6 pb-20 mb-8"
    >
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Conheça nossos Produtos"
          description="Escolha seu doce favorito 🍫"
        />

        {/* ── BANNER CATÁLOGO PÁSCOA 2026 ── */}
        <a
          href="https://drive.google.com/file/d/1mPtgydeOsY-fwQUuz1a5-1wMyHlQa_ly/view"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center gap-4 bg-gradient-to-r from-yellow-50 to-pink-50 border border-yellow-200 rounded-2xl px-5 py-4 shadow-sm hover:shadow-md hover:border-yellow-400 transition-all duration-200 group"
        >
          <div className="shrink-0 w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center group-hover:bg-yellow-200 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-yellow-600">
              <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="1" />
              <line x1="9" y1="12" x2="15" y2="12" />
              <line x1="9" y1="15" x2="13" y2="15" />
              <line x1="9" y1="9" x2="15" y2="9" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-yellow-600 uppercase tracking-wide mb-0.5">
              Páscoa 2026 🐰🍫
            </p>
            <p className="text-sm font-bold text-slate-800 leading-snug">
              Tabela de Preços - Cardápio de ovos
            </p>
            <p className="text-xs text-slate-500 mt-0.5">
              Veja todos os produtos, sabores e preços em detalhes
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-1.5 text-yellow-600 text-xs font-semibold group-hover:translate-x-1 transition-transform duration-200">
            <span className="hidden sm:inline whitespace-nowrap">Ver catálogo</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </a>

        {/* MOBILE SELECT */}
        <div className="sm:hidden mt-8">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* DESKTOP BUTTONS */}
        <div className="hidden sm:flex flex-wrap justify-center gap-3 mt-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-yellow-500 text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-yellow-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* CARROSSEL */}
        <div className="mt-12 relative">

          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full w-11 h-11 flex items-center justify-center hover:scale-105 active:scale-95 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full w-11 h-11 flex items-center justify-center hover:scale-105 active:scale-95 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(event, info) => {
                setTimeout(() => setIsDragging(false), 50);
                if (info.offset.x < -50) goNext();
                if (info.offset.x > 50) goPrev();
              }}
              animate={{ x: `-${(100 / itemsPerView) * currentIndex}%` }}
              transition={{ type: "spring", stiffness: 200, damping: 25 }}
              className="flex cursor-grab active:cursor-grabbing"
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.title}
                  className="min-w-full sm:min-w-1/2 lg:min-w-1/3 px-4"
                  onClick={(e) => isDragging && e.stopPropagation()}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}