import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navlinks = [
        { href: "#creations", text: "Produtos" },
        { href: "#about", text: "Sobre nós" },
        { href: "#contact", text: "Contato" },
    ];

    return (
        <>
            <motion.nav
                className="bg-stone-600 text-slate-200 sticky top-0 z-50 flex items-center justify-between px-6 h-16"
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
            >
                <img src="./assets/logo.png" className="h-10" />

                <button onClick={() => setIsMenuOpen(true)} className="lg:hidden">
                    <MenuIcon />
                </button>
            </motion.nav>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* BACKDROP */}
                        <motion.div
                            className="fixed inset-0 bg-black/60 z-[90]"
                            onClick={() => setIsMenuOpen(false)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* MENU */}
                        <motion.div
                            className="fixed top-0 right-0 w-full h-screen bg-stone-800 z-[100] flex flex-col items-center pt-24 gap-8 text-white overflow-y-auto"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.3 }}
                        >
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="absolute top-6 right-6"
                            >
                                <XIcon />
                            </button>

                            {navlinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-xl"
                                >
                                    {link.text}
                                </a>
                            ))}

                            <div className="h-96" />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
