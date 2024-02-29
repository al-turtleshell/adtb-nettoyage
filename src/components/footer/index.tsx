import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full h-[250px] flex">
            <div className="flex flex-col items-center justify-center w-1/2 text-gray-base gap-[4px]">
            <p>ADTB NETTOYAGE</p>
            <p>9a rue des courtils</p>
            <p>25000 Besançon</p> 
            <p>06 23 88 65 02</p>
            <p>ddm@adtbnettoyage.fr</p>

            </div>
            <div className="flex flex-col items-center justify-center w-1/2 text-gray-base gap-element-m">
                <Link href="#about-us" className="hover:text-gray-dark">A propos de nous</Link>
                <Link href="#our-service" className="hover:text-gray-dark">Nos services</Link>
                <Link href="#testimonial" className="hover:text-gray-dark">Témoignages</Link>
                <Link href="#faq" className="hover:text-gray-dark">FAQs</Link>

            </div>
        </div>
    )
}

export { Footer };
