import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";

export default function AboutUs() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [className, setClassName] = useState("");

  const sectionData = [
    {
      title: "O início",
      description:
        "Tudo começou com a venda de barcas de brigadeiro em datas comemorativas e docinhos artesanais, sempre preparados com muito amor e carinho.",
      image:
        "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770422649/logo-brigstore_otkvqo.jpg",
      align: "object-center",
    },
    {
      title: "Nova marca com novos produtos!",
      description:
        "A mudança de nome aconteceu de forma natural, pois, além dos brigadeiros, passamos a nos aventurar no mundo da confeitaria gourmet, trazendo doces sofisticados e buscando sempre a melhor receita para cada criação.",
      image:
        "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770422359/logo-antigo_h7duql.webp",
      align: "object-center",
    },
    {
      title: "Surge uma Gastróloga",
      description:
        "Em julho de 2025, Amélia Natiele, mais conhecida como Naty, formou-se em Gastronomia pela Universidade de Santa Cruz do Sul.",
      image:
        "https://res.cloudinary.com/dbqabjuqy/image/upload/v1770422359/formatura_omstnk.webp",
      align: "object-right",
    },
  ];

  useEffect(() => {
    if (isHovered || window.innerWidth < 768) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sectionData.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isHovered, sectionData.length]);

  return (
    <section className="flex flex-col items-center" id="about">
      <SectionTitle
        title="Sobre nós"
        description="Conheça um pouco sobre nosso trabalho"
      />

      <div
        className="
          flex flex-col 
          md:flex-row 
          items-stretch md:items-center 
          gap-4 
          w-full 
          max-w-5xl 
          mt-16 
          mx-auto
        "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {sectionData.map((data, index) => (
          <motion.div
            key={data.title}
            className={`
              relative group
              w-full
              md:flex-grow
              h-[300px] md:h-[400px]
              rounded-xl
              overflow-hidden
              ${
                isHovered && className
                  ? "md:hover:w-full md:w-56"
                  : index === activeIndex
                  ? "md:w-full"
                  : "md:w-56"
              }
              ${className}
            `}
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            onAnimationComplete={() =>
              setClassName("transition-all duration-500")
            }
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 320,
              damping: 70,
              mass: 1,
            }}
          >
            <img
              className={`h-full w-full object-cover ${data.align}`}
              src={data.image}
              alt={data.title}
            />

            <div
                className={`
                    absolute inset-0
                    flex flex-col justify-end
                    p-6 md:p-10
                    text-white
                    bg-black/50
                    transition-all duration-300

                    /* MOBILE: sempre visível */
                    opacity-100

                    /* DESKTOP: começa oculto */
                    md:opacity-0

                    ${
                    /* DESKTOP – hover manual */
                    isHovered && className
                        ? "md:group-hover:opacity-100"
                        : index === activeIndex
                        ? "md:opacity-100"
                        : ""
                    }
                `}
            >

              <h1 className="text-2xl md:text-3xl font-semibold">
                {data.title}
              </h1>
              <p className="text-sm mt-2">{data.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
