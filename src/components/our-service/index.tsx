'use client';
import Image from "next/image";
import { useAnimation, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
const OurService = () => {

    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1});
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      } else {
        // controls.start('hidden');
      }
    }, [controls, inView]);


    const variants = (delay: number) => ({
        "hidden": { opacity: 0  },
        "visible": { opacity: 1, transition: { duration: 2, delay} }
    })

    const variantPinkBand = {
        "hidden": { width: 0  },
      "visible": { width: '100%', transition: { duration: 2, delay: 1 } }
    }

    
    const variantsPost = (offset: number, delay: number) => ({
        "hidden": { x: offset, opacity: 0  },
        "visible": { x: 0, opacity: 1 , transition: { duration: 1, delay} }
    })

    return (
        <div id="our-service"
            ref={ref}
            className="-mt-section-l pt-section-l px-element-s"
        >
            
            <div className="flex items-center mb-element-l">
                <motion.h1
                    initial="hidden"
                    animate={controls}
                    variants={variants(0)}
                    className="text-heading-5 lg:text-heading-2 text-gray-dark mr-element-l whitespace-nowrap"
                > 
                    Nos Services
                </motion.h1>
                <motion.div 
                    initial="hidden"
                    animate={controls}
                    variants={variantPinkBand}
                    className="w-full h-[50px] lg:h-[80px] bg-pink-base" 
                />
            </div>
            <motion.div 
                className="text-center mb-section-s lg:px-section-l lg:mb-section-l"
                initial="hidden"
                animate={controls}
                variants={variants(1)}
            >
                <p className="text-text-base text-gray-base">
                    Notre entreprise de nettoyage se dédie à offrir des environnements propres, sains et accueillants pour une variété d&apos;espaces.
                </p>
            </motion.div>

            <div className="lg:flex mb-section-l">
                <motion.div
                    initial="hidden"
                    variants={variantsPost(100, 1.75)}
                    animate={controls}
                    className="lg:hidden mb-element-l"
                >   
                    <Image src={'/copro.jpeg'} alt="hero" width="590" height="388" style={{ height: '100%', width: '100%', borderRadius: '15px' }}  />
                </motion.div>
                <motion.div 
                    className="lg:w-1/2 lg:mr-section-m"
                    initial="hidden"
                    variants={variantsPost(-100, 1.5)}
                    animate={controls}
                >
                
                    <div className="border-l border-l-[20px] border-l-pink-base pl-element-s mb-section-m">
                        <h1 className="text-heading-3 text-gray-dark pb-element-s">Entretien des copropriétés</h1>
                        <p className="text-text-small text-gray-base">Nous comprenons l&apos;importance de maintenir des espaces communs propres et accueillants dans les copropriétés.</p>
                    </div>
                    <div className="text-center text-text-base text-gray-base flex flex-col gap-element-s mb-section-m">
                        <p>Nettoyage des halls d&apos;entrée et des couloirs</p>
                        <p>Entretien des escaliers et des ascenseurs</p>
                        <p>Nettoyage des vitres dans les parties communes</p>
                        <p>Gestion des déchets et tri sélectif</p>
                    </div>
                    <p className="text-center text-text-base text-gray-base">Chaque copropriété est unique, c&apos;est pourquoi nous adaptons nos services pour répondre aux besoins spécifiques de chaque communauté.</p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    variants={variantsPost(100, 1.75)}
                    animate={controls}
                    className="hidden lg:block"
                >   
                    <Image src={'/copro.jpeg'} alt="hero" width="590" height="388" style={{ height: '100%', width: '100%', borderRadius: '15px' }}  />
                </motion.div>
            </div>

            <div className="lg:flex mb-section-l">
                <motion.div
                    initial="hidden"
                    variants={variantsPost(-100, 2)}
                    animate={controls}
                    className="mb-element-l"
                >   
                    <Image src={'/bureau.jpeg'} alt="hero" width="590" height="388" style={{ height: '100%', width: '100%', borderRadius: '15px' }}  />
                </motion.div>
                <motion.div 
                    className="lg:w-1/2 lg:ml-section-m"
                    initial="hidden"
                    variants={variantsPost(100, 2.25)}
                    animate={controls}
                >
                    <div className="border-l border-l-[20px] border-l-pink-base pl-element-s mb-section-m">
                        <h1 className="text-heading-3 text-gray-dark pb-element-s">Entretien des bureaux</h1>
                        <p className="text-text-small text-gray-base">Un bureau propre augmente la productivité et transmet une image professionnelle.</p>
                    </div>
                    <div className="text-center text-text-base text-gray-base flex flex-col gap-element-s mb-section-m">
                        <p>Nettoyage des postes de travail et des espaces communs</p>
                        <p>Désinfection des points de contact fréquents</p>
                        <p>Entretien des sols, moquettes et surfaces</p>
                        <p>Gestion et recyclage des déchets de bureau</p>
                        <p>Nettoyage des cuisines et espaces de pause</p>
                    </div>
                    <p className="text-center text-text-base text-gray-base">Nos horaires flexibles permettent de réaliser ces tâches en dehors des heures de travail pour minimiser les perturbations.</p>
                </motion.div>
            </div>

            <div className="lg:flex mb-section-l">
                <motion.div
                    initial="hidden"
                    variants={variantsPost(100, 2.75)}
                    animate={controls}
                    className="lg:hidden mb-element-l"
                >   
                    <Image src={'/asso.jpeg'} alt="hero" width="590" height="388" style={{ height: '100%', width: '100%', borderRadius: '15px' }}  />
                </motion.div>
                <motion.div 
                    className="lg:w-1/2 lg:mr-section-m"
                    initial="hidden"
                    variants={variantsPost(-100, 2.5)}
                    animate={controls}
                >
                    <div className="border-l border-l-[20px] border-l-pink-base pl-element-s mb-section-m">
                        <h1 className="text-heading-3 text-gray-dark pb-element-s">Entretien des associations</h1>
                        <p className="text-text-small text-gray-base">Les associations, qu&apos;elles soient culturelles, sportives ou sociales, méritent des espaces propres pour accueillir leurs membres.</p>
                    </div>
                    <div className="text-center text-text-base text-gray-base flex flex-col gap-element-s mb-section-m">
                        <p>Nettoyage des salles de réunion et des zones d&apos;accueil</p>
                        <p>Entretien des équipements et des installations sportives</p>
                        <p>Nettoyage des vestiaires et sanitaires</p>
                        <p>Maintenance des espaces extérieurs</p>
                    </div>
                    <p className="text-center text-text-base text-gray-base">Nous collaborons étroitement avec chaque association pour fournir un service qui respecte leurs valeurs et leur budget.</p>
                </motion.div>
                <motion.div
                    initial="hidden"
                    variants={variantsPost(100, 2.75)}
                    animate={controls}
                    className="hidden lg:block"
                >   
                    <Image src={'/asso.jpeg'} alt="hero" width="590" height="388" style={{ height: '100%', width: '100%', borderRadius: '15px' }}  />
                </motion.div>
            </div>
        </div>
    )
}

export { OurService };