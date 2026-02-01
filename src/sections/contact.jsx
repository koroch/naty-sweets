import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

export default function Contact() {
    const sectionData = [
        {
            title: "Nos chame pelo (51) 99714-5016",
            description: "Faça diretamente por aqui o seu pedido, orçamentos ou tire dúvidas!",
            image: "https://raw.githubusercontent.com/dheereshag/coloured-icons/5e55f843379d810870d1708c2fff4fc25c3fea6d/public/logos/social%20media/whatsapp/whatsapp.svg",
            className: "py-10 border-b border-slate-700 md:py-0 md:border-r md:border-b-0 md:px-10",
            src: "http://wa.me/5551997145016"
        },
        {
            title: "Nos chame pelo instagram @naty__sweets",
            description: "Por lá você terá acesso aos nossos conteúdos e novidades!",
            image: "https://raw.githubusercontent.com/dheereshag/coloured-icons/5e55f843379d810870d1708c2fff4fc25c3fea6d/public/logos/social%20media/instagram/instagram.svg",
            className: "py-10 border-b border-slate-700 md:py-0 md:border-b-0 md:px-10",
            src: "https://www.instagram.com/naty__sweets/"
        }
    ];
    return (
        <section className="flex flex-col items-center" id="contact">
            <SectionTitle title="Contato" description="Conheça as formas de fazer o seu pedido!" />
            <div className="relative max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-8 md:px-0 mt-18">
                {sectionData.map((data, index) => (
                    <motion.div key={data.title} className={data.className}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <a
                            href={data.src}
                            target="_blank"
                            className="inline-block"
                            >
                            <div className="size-20 p-1 bg-red-600/10 border border-red-400/30 rounded hover:scale-105 transition cursor-pointer">
                                <img src={data.image} alt="" />
                            </div>
                        </a>
                        <div className="mt-5 space-y-2">
                            <h3 className="text-base font-medium text-slate-800">{data.title}</h3>
                            <p className="text-sm text-slate-400">{data.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}