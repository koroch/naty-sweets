import { motion } from "framer-motion";

export default function Footer() {
    return (
        <motion.footer className="bg-stone-700 px-6 md:px-16 lg:px-24 xl:px-32 pt-16 pb-8 w-full text-sm text-slate-200 mt-40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                <div className="sm:col-span-2 lg:col-span-1">
                    <a href="#">
                        <img className="h-20 w-auto mt-2" src="./assets/footer-logo.png" width={138} height={36} alt="logo" />
                    </a>
                    <p className="text-sm/7 mt-6">Compre doces artesanais de qualidade e feitos com amor ❤️</p>
                </div>
                <div className="flex flex-col lg:items-center lg:justify-center">
                    <div className="flex flex-col text-sm space-y-2.5">
                        <h2 className="font-semibold mb-5 text-white">Sessões</h2>
                        <a className="hover:text-slate-400 transition" href="#creations">Produtos</a>
                        <a className="hover:text-slate-400 transition" href="#about">Sobre nós</a>
                        <a className="hover:text-slate-400 transition" href="#contact">Contato</a>
                    </div>
                </div>
                <div className="flex flex-col lg:items-center lg:justify-center">
                    <h2 className="font-semibold text-white mb-5">Nos siga no Instagram!</h2>
                    <div className="flex items-center space-x-2 text-sm max-w-sm">
                        <a href="https://www.instagram.com/naty__sweets/" target="_blank">
                            <img
                            className="h-9 w-auto"
                            src="https://raw.githubusercontent.com/dheereshag/coloured-icons/5e55f843379d810870d1708c2fff4fc25c3fea6d/public/logos/social%20media/instagram/instagram.svg"
                            alt="Instagram"
                            />
                        </a>
                        <p>@naty__sweets</p>
                    </div>
                </div>
            </div>
            <p className="py-4 text-center border-t mt-6 border-slate-200">
                Copyright 2026© • Developed by <a href="https://github.com/koroch" target="_blank">Koroch</a> • All Right Reserved.
            </p>
        </motion.footer>
    );
};