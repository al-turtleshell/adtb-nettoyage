import { FAQs } from "@/components/FAQs";
import { AboutUs } from "@/components/about-us";
import { Footer } from "@/components/footer";
import { OurService } from "@/components/our-service";
import { Testimonials } from "@/components/testimonials";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="w-full h-[100px] flex items-center fixed bg-gray-light z-50">
        <Image src={'/logo-adtb.png'} alt="hero" width="63" height="67" className="mr-element-m"/>
        <h1 className="text-heading-4 text-gray-dark mr-section-m">ADTB NETTOYAGE</h1>
        <div className="flex gap-element-l text-text-base text-gray-base">
                <Link href="#about-us" className="hover:text-gray-dark">A propos de nous</Link>
                <Link href="#our-service" className="hover:text-gray-dark">Nos services</Link>
                <Link href="#testimonial" className="hover:text-gray-dark">Témoignages</Link>
                <Link href="#faq" className="hover:text-gray-dark">FAQs</Link>
        </div>

      </div>
      <div className="w-full max-w-0 mb-section-m relative">
        <Image src={'/hero_section.png'} alt="hero" width="1200" height="550"  />
        <div className="absolute bottom-[75px] left-[350px] text-center z-0">

        </div>
      </div>
      <AboutUs />
      <OurService />
      <Testimonials />
      <FAQs />
      <Footer />
    </main>
  );
}
