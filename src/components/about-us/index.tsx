'use client';
import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
const AboutUs = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      } else {
        // controls.start('hidden');
      }
    }, [controls, inView]);
    
    const variants = (delay: number) => ({
        "hidden": { opacity: 0  },
        "visible": { opacity: 1, transition: { duration: 1.25, delay} }
    })

    const variantPinkBand = {
        "hidden": { width: 0  },
      "visible": { width: '100%', transition: { duration: 2, delay: 1 } }
    }

    return (
        <motion.div id="about-us" ref={ref} className='mb-section-xl -mt-section-l pt-section-l'>
            <div className="flex items-center mb-element-l">
                <motion.h1
                    initial="hidden"
                    animate={controls}
                    variants={variants(0)}
                    className="text-heading-2 text-gray-dark mr-element-l whitespace-nowrap"
                > 
                    
                    A propos de nous

                </motion.h1>
                <motion.div 
                    initial="hidden"
                    animate={controls}
                    variants={variantPinkBand}

                    className="w-full h-[80px] bg-pink-base" 
                />

            </div>
            <motion.div 
                className="text-center px-section-l mb-section-m"
                initial="hidden"
                animate={controls}
                variants={variants(1)}
            >
                <p className="text-text-base text-gray-dark">
                    Bienvenue chez ADTB NETTOYAGE, votre partenaire de confiance pour des solutions de nettoyage à Besançon. 
                    Fondée il y a plus de 20 ans, notre entreprise familiale s'est bâtie sur des valeurs de fiabilité, de qualité et de proximité, 
                    qui nous guident dans chaque service que nous proposons.
                </p>
            </motion.div>
            <div className="flex gap-section-s mb-section-l">
                    <motion.div 
                        className="w-1/2"
                        initial="hidden"
                        animate={controls}
                        variants={variants(2)}
                    >
                        <h1 className="border-b border-b-[10px] border-b-pink-base pb-[2px] px-element-s mb-element-m inline-block text-gray-dark font-bold"> NOTRE HISTOIRE</h1>
                        <p className="text-text-base text-gray-base">Depuis notre création, nous avons eu à cœur de fournir des services de nettoyage de haute qualité adaptés aux besoins spécifiques de nos clients. 
                            Notre longue expérience dans le secteur nous permet de comprendre en profondeur les exigences uniques des espaces professionnels et résidentiels, ce qui fait de nous le choix pour de nombreux syndics et professionnels de la région.</p>
                    </motion.div>
                
                    <motion.div 
                        className="w-1/2"
                        initial="hidden"
                        animate={controls}
                        variants={variants(3)}
                    >
                        <h1 className="border-b border-b-[10px] border-b-pink-base pb-[2px] px-element-s mb-element-m inline-block text-gray-dark font-bold"> NOTRE ENGAGEMENT</h1>
                        <p className="text-text-base text-gray-base">Depuis notre création, nous avons eu à cœur de fournir des services de nettoyage de haute qualité adaptés aux besoins spécifiques de nos clients. 
                            Notre longue expérience dans le secteur nous permet de comprendre en profondeur les exigences uniques des espaces professionnels et résidentiels, ce qui fait de nous le choix pour de nombreux syndics et professionnels de la région.</p>
                    </motion.div>
            </div>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={variants(4)}
            >
                <h1 className="text-heading-4 italic text-center text-gray-dark">“La qualité prime sur la quantité, car chaque détail compte.”</h1>
            </motion.div>
        </motion.div>
    )
};

export { AboutUs };