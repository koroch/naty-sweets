import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  const message = encodeURIComponent(
    "Oi! Vi os produtos da Naty Sweets e gostaria de fazer meu pedido"
  );
  const whatsappLink = `https://wa.me/5551997145016?text=${message}`;

  const sectionData = [
    {
      title: "WhatsApp",
      subtitle: "(51) 99714-5016",
      description: "Faça seu pedido, orçamento ou tire dúvidas rapidinho 💬",
      image:
        "https://raw.githubusercontent.com/dheereshag/coloured-icons/5e55f843379d810870d1708c2fff4fc25c3fea6d/public/logos/social%20media/whatsapp/whatsapp.svg",
      src: whatsappLink,
      accent: "from-green-400/30 to-green-500/10",
    },
    {
      title: "Instagram",
      subtitle: "@naty__sweets",
      description: "Veja nossos doces, novidades e promoções 🍫✨",
      image:
        "https://raw.githubusercontent.com/dheereshag/coloured-icons/5e55f843379d810870d1708c2fff4fc25c3fea6d/public/logos/social%20media/instagram/instagram.svg",
      src: "https://www.instagram.com/naty__sweets/",
      accent: "from-pink-400/30 to-fuchsia-500/10",
    },
  ];

  return (
    <section className="flex flex-col items-center mt-32" id="contact">
      <SectionTitle
        title="Fale com a gente"
        description="Escolha a melhor forma de fazer seu pedido 💖"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full px-6 mt-16">
        {sectionData.map((data, index) => (
          <motion.a
            key={data.title}
            href={data.src}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.15,
              type: "spring",
              stiffness: 260,
              damping: 25,
            }}
            className={`
              group relative rounded-2xl p-8
              bg-stone/10 backdrop-blur
              border border-pink-200/50
              shadow-md hover:shadow-xl
              transition-all duration-500
              hover:-translate-y-1
            `}
          >
            {/* fundo decorativo */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${data.accent} opacity-0 group-hover:opacity-100 transition`}
            />

            <div className="relative z-10 flex flex-col gap-5">
              {/* Ícone */}
              <div className="flex items-center justify-between">
                <div className="size-16 rounded-xl bg-pink-100 flex items-center justify-center shadow-inner group-hover:scale-105 transition">
                  <img src={data.image} alt="" className="size-10" />
                </div>

                <ArrowUpRight className="text-slate-400 group-hover:text-pink-500 transition" />
              </div>

              {/* Texto */}
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-slate-800">
                  {data.title}
                </h3>
                <p className="text-sm font-medium text-pink-600">
                  {data.subtitle}
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {data.description}
              </p>

              {/* CTA */}
              <span className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-pink-600 group-hover:gap-3 transition-all">
                Entrar em contato
                <ArrowUpRight className="size-4" />
              </span>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
