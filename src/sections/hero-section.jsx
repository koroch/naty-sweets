import { motion } from "framer-motion";
import TiltedImage from "../components/tilt-image";
import SectionTitle from "../components/section-title";

export default function HeroSection() {
    return (
        <section className="font-lobster flex flex-col items-center -mt-18">
            <motion.p className="text-center text-base max-w-lg mt-2"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
            >
                <SectionTitle className="" title="Seja bem-vindo(a) à Naty__Sweets" description="Doceria Gourmet Online e doces artesanais" />
            </motion.p>
            
            <TiltedImage />
        </section>
    );
}