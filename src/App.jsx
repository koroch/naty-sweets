import Footer from "./components/footer";
import LenisScroll from "./components/lenis-scroll";
import Navbar from "./components/navbar";
import HeroSection from "./sections/hero-section";
import OurLatestCreation from "./sections/products";
import AboutUs from "./sections/about-us";
import Contact from "./sections/contact";

export default function Page() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <main className="px-6 md:px-16 lg:px-24 xl:px-32">
                <HeroSection />
                <OurLatestCreation />
                <AboutUs />
                <Contact />
            </main>
            <Footer />
        </>
    );
}