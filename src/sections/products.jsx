import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";

export default function OurLatestCreation() {
    const sectionData = [
    {
      title: "Ovo de Páscoa Tradicional",
      description: "Chocolate ao leite artesanal com recheio cremoso.",
      price: "R$ 79,90",
      image: "./assets/pascoa.png",
    },
    {
      title: "Ovo Trufado",
      description: "Recheio trufado intenso com chocolate belga.",
      price: "R$ 89,90",
      image: "./assets/pascoa.png",
    },
    {
      title: "Caixa Gourmet",
      description: "Seleção especial de doces artesanais.",
      price: "R$ 59,90",
      image: "./assets/pascoa.png",
    },
    {
      title: "Ovo Kinder Artesanal",
      description: "Inspirado no clássico, com toque gourmet.",
      price: "R$ 99,90",
      image: "./assets/pascoa.png",
    },
    {
      title: "Brownie Recheado",
      description: "Macio, intenso e irresistível.",
      price: "R$ 24,90",
      image: "./assets/pascoa.png",
    },
    {
      title: "Combo Páscoa",
      description: "Perfeito para presentear quem você ama.",
      price: "R$ 149,90",
      image: "./assets/pascoa.png",
    },
  ];

  return (
    <section className="flex flex-col items-center" id="creations">
      <SectionTitle
        title="Conheça nossos Produtos"
        description="Escolha seu doce favorito 🍫"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full mt-16 px-6">
        {sectionData.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group rounded-xl overflow-hidden shadow-lg"
          >
            {/* Imagem */}
            <img
              src={product.image}
              alt={product.title}
              className="h-[380px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Card hover */}
            <div className="
              absolute bottom-0 left-0 w-full
              h-1/4
              bg-white/95
              translate-y-full
              group-hover:translate-y-0
              transition-transform duration-500
              p-4
              flex flex-col justify-between
            ">
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
      </div>
    </section>
  );
}
