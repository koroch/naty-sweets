import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    category: "Torta Brownie Tradicional",
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
    "Coxinhas Doces",
    "Copo Fondue",
    "Mini Ovos",
    "Ovos de Colher",
    "Torta Brownie",
    "Pudim",
    "Bombom no Pote",
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredProducts = sectionData.filter(
    (product) => product.category === activeCategory
  );

  return (
    <section
      className="flex flex-col items-center py-24"
      id="creations"
    >
      {/* Título */}
      <SectionTitle
        title="Conheça nossos Produtos"
        description="Escolha seu doce favorito 🍫"
      />

      {/* Categorias */}
      <div className="flex flex-wrap justify-center gap-3 mt-12 px-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              px-5 py-2 rounded-full text-sm font-medium transition
              ${
                activeCategory === category
                  ? "bg-yellow-500 text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-yellow-100"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Produtos */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mt-16 px-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.08 }}
              className="relative group rounded-xl overflow-hidden shadow-lg bg-white"
            >
              {/* Imagem */}
              <img
                src={product.image}
                alt={product.title}
                className="
                  h-[360px]
                  w-full
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-105
                "
              />

              {/* Hover Card */}
              <div
                className="
                  absolute bottom-0 left-0 w-full
                  h-1/3
                  bg-white/95
                  translate-y-full
                  group-hover:translate-y-0
                  transition-transform duration-500
                  p-4
                  flex flex-col justify-between
                "
              >
                <div>
                  <h3 className="text-sm font-semibold text-slate-800">
                    {product.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {product.description}
                  </p>
                </div>

                <span className="text-lg font-bold text-yellow-500">
                  {product.price}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
