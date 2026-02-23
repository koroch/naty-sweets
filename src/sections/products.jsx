import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";

const sectionData = [
  // 🍕 PIZZA BROWNIE
  {
    category: "Pizza Brownie",
    title: "Pizza Brownie Kinder",
    description: "Brownie artesanal com chocolate Kinder e morangos frescos.",
    price: "R$ 89,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056465/brownie-pizza-kinder-morando_rwu6w3.jpg",
  },
  {
    category: "Pizza Brownie",
    title: "Pizza Brownie Ninho & Nutella",
    description: "Brownie com creme de Ninho e Nutella.",
    price: "R$ 84,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056465/brownie-pizza-ninho-e-nutella_tnajsz.jpg",
  },
  {
    category: "Pizza Brownie",
    title: "Pizza Brownie Ninho, Nutella & Morango",
    description: "Combinação perfeita de Ninho, Nutella e morangos.",
    price: "R$ 89,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056465/brownie-pizza-ninho-nutella-morango_orfi7g.jpg",
  },
  {
    category: "Pizza Brownie",
    title: "Pizza Brownie Brigadeiro",
    description: "Brownie recheado com brigadeiro cremoso.",
    price: "R$ 79,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056465/brownie-pizza-brigadeiro-preto_q8rann.jpg",
  },
  {
    category: "Pizza Brownie",
    title: "Pizza Brownie M&M’s",
    description: "Brownie com cobertura de chocolate e M&M’s.",
    price: "R$ 79,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056465/brownie-pizza-mm_andum7.jpg",
  },

  // 🍓 COXINHAS DOCES
  {
    category: "Coxinhas Doces",
    title: "Coxinha de Morango",
    description: "Massa de chocolate recheada com morango fresco.",
    price: "R$ 9,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056465/coxinhas-de-morango_qjstl9.jpg",
  },
  {
    category: "Coxinhas Doces",
    title: "Coxinha de Uva",
    description: "Coxinha doce com uva verde e cobertura de chocolate.",
    price: "R$ 9,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056469/coxinhas-de-uva_e9wrm6.jpg",
  },

  // 🍫 COPO FONDUE
  {
    category: "Copo Fondue",
    title: "Copo Fondue Tradicional",
    description: "Fondue de chocolate com frutas selecionadas.",
    price: "R$ 19,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056469/fondue-copo-1_c9vy2c.jpg",
  },

  // 🥚 MINI OVOS
  {
    category: "Mini Ovos",
    title: "Mini Ovos Decorados",
    description: "Mini ovos de chocolate recheados.",
    price: "R$ 14,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056470/mini-ovos-1_feil38.jpg",
  },
  {
    category: "Mini Ovos",
    title: "Mini Ovos Sortidos",
    description: "Seleção especial de mini ovos gourmet.",
    price: "R$ 16,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056470/mini-ovos-2_sgjoxx.jpg",
  },
  {
    category: "Mini Ovos",
    title: "Mini Ovos Premium",
    description: "Mini ovos com recheios especiais.",
    price: "R$ 18,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056470/mini-ovos-3_nu3g5k.jpg",
  },

  // 🥚 OVOS DE COLHER
  {
    category: "Ovos de Colher",
    title: "Ovo de Colher Kinder",
    description: "Ovo de chocolate recheado com creme Kinder.",
    price: "R$ 89,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056474/ovo-de-colher-kinder_kgq1ar.jpg",
  },
  {
    category: "Ovos de Colher",
    title: "Ovo de Colher Ninho & Nutella",
    description: "Recheio cremoso de Ninho com Nutella.",
    price: "R$ 84,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056474/ovo-de-colher-ninho-e-nutella_slr4ja.jpg",
  },
  {
    category: "Ovos de Colher",
    title: "Ovo de Colher Brownie",
    description: "Ovo recheado com brownie artesanal.",
    price: "R$ 79,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056471/ovo-de-colher-brownie-com-caramelo_ukqjia.jpg",
  },
  {
    category: "Ovos de Colher",
    title: "Ovo de Colher Franui",
    description: "Chocolate com recheio inspirado no Franui.",
    price: "R$ 89,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056476/ovo-de-colher-franui_b9t6yn.jpg",
  },

  // 🍰 TORTA BROWNIE
  {
    category: "Torta Brownie",
    title: "Torta Brownie Brigadeiro & Morango",
    description: "Brownie com brigadeiro e morangos frescos.",
    price: "R$ 99,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056475/tortal-brownie-brigadeiro-e-morango_meilsz.jpg",
  },
  {
    category: "Torta Brownie",
    title: "Torta Brownie Ninho & Nutella",
    description: "Brownie recheado com Ninho e Nutella.",
    price: "R$ 99,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056479/tortal-brownie-ninho-e-nutella_qkfhwt.jpg",
  },
  {
    category: "Torta Brownie",
    title: "Torta Brownie Tradicional",
    description: "Brownie com cobertura de chocolate.",
    price: "R$ 89,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056479/tortal-brownie-preto_czvags.jpg",
  },

  // 🍮 PUDIM
  {
    category: "Pudim",
    title: "Pudim Tradicional",
    description: "Pudim cremoso com calda de caramelo.",
    price: "R$ 12,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056474/pudim-1_whif9a.jpg",
  },
  {
    category: "Pudim",
    title: "Pudim Gourmet",
    description: "Versão especial com textura aveludada.",
    price: "R$ 14,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056475/pudin-2_x2hipf.jpg",
  },

  // 🍬 BOMBOM NO POTE
  {
    category: "Bombom no Pote",
    title: "Bombom de Morango",
    description: "Bombom no pote com morangos frescos.",
    price: "R$ 14,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056464/bombom-de-morango_mjbkri.jpg",
  },
  {
    category: "Bombom no Pote",
    title: "Bombom de Uva",
    description: "Bombom no pote com uvas selecionadas.",
    price: "R$ 14,90",
    image: "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770056464/bombom-de-uva_fmngwp.jpg",
  },
];

export default function OurLatestCreation() {
  const categories = [
    "Pizza Brownie",
    "Torta Brownie",
    "Coxinhas Doces",
    "Mini Ovos",
    "Pudim",
    "Bombom no Pote",
    "Picolé"
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);

  const filteredProducts = sectionData.filter(
    (product) => product.category === activeCategory
  );

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const maxIndex = Math.max(filteredProducts.length - itemsPerView, 0);

  const goNext = () => {
    setCurrentIndex((prev) =>
      prev >= maxIndex ? 0 : prev + 1
    );
  };

  const goPrev = () => {
    setCurrentIndex((prev) =>
      prev <= 0 ? maxIndex : prev - 1
    );
  };

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

        {/* MOBILE SELECT */}
        <div className="sm:hidden mt-8">
          <select
            value={activeCategory}
            onChange={(e) => setActiveCategory(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white shadow-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
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

          {/* SETA ESQUERDA (sempre visível) */}
          <button
            onClick={goPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full w-11 h-11 flex items-center justify-center hover:scale-105 active:scale-95 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-slate-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* SETA DIREITA (sempre visível) */}
          <button
            onClick={goNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-md rounded-full w-11 h-11 flex items-center justify-center hover:scale-105 active:scale-95 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-slate-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.x < -50) goNext();
                if (info.offset.x > 50) goPrev();
              }}
              animate={{
                x: `-${(100 / itemsPerView) * currentIndex}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
              }}
              className="flex cursor-grab active:cursor-grabbing"
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.title}
                  className="min-w-full sm:min-w-1/2 lg:min-w-1/3 px-4"
                >
                  <div className="relative rounded-xl overflow-hidden shadow-lg bg-white">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-[360px] w-full object-cover"
                    />

                    <div className="absolute bottom-0 left-0 w-full bg-white p-4">
                      <h3 className="text-sm font-semibold text-slate-800">
                        {product.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        {product.description}
                      </p>
                      <span className="text-lg font-bold text-yellow-500 mt-2 block">
                        {product.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}