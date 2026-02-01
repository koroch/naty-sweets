import { motion } from "framer-motion";
import TiltedImage from "../components/tilt-image";
import SectionTitle from "../components/section-title";

export default function HeroSection() {
    return (
        <section className="flex flex-col items-center -mt-18">
            
            <motion.h1 className="text-center text-5xl leading-[68px] md:text-6xl md:leading-[70px] mt-4 font-semibold max-w-2xl"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
            >
            <SectionTitle className="" title="Seja bem-vindo(a) à Naty__Sweets" description="" />
                
            </motion.h1>
            <motion.p className="text-center text-base max-w-lg mt-2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                Doceria Gourmet Online e doces artesanais
            </motion.p>
            
            <TiltedImage />
        </section>
    );
}