import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const Testimonials = () => {
return (
    <div id="testimonial" className="mb-section-m  -mt-section-l pt-section-l">
        <div className="flex items-center mb-section-m">
            <h1 className="text-heading-2 text-gray-dark mr-element-l whitespace-nowrap"> Témoignages </h1>
            <div className="w-full h-[80px] bg-pink-base" />
        </div>
            <Carousel className="w-full">
                <CarouselContent>
                    <CarouselItem>
                        <div className="text-text-base text-gray-base  px-section-l">
                            <p>
                            Chaque jour de travail commence dans un environnement frais et impeccable. Leur équipe ne manque jamais un rendez-vous, et la constance de la qualité de leur travail est tout simplement remarquable. 
                            C'est un plaisir de travailler dans un espace si bien entretenu, et cela contribue grandement à maintenir le moral et la productivité de notre équipe. 
                            Ils ont vraiment élevé le standard de ce à quoi nous nous attendons en matière de services de nettoyage
                            </p>
                            <h1 className="font-bold text-right"> Les rhumatologues des OS</h1>
                        </div>   
                    </CarouselItem>
                    <CarouselItem>
                        <div className="text-text-base text-gray-base  px-section-l">
                            <p>
                            Chaque interaction est une démonstration de leur engagement envers l'excellence. 
                            Non seulement la qualité de leur nettoyage dépasse systématiquement nos attentes, mais leur capacité à répondre rapidement à nos demandes de dernière minute est tout simplement exceptionnelle. 
                            Dans notre secteur d'activité où les impressions comptent énormément, pouvoir compter sur une entreprise aussi fiable et attentive aux détails est un véritable atout.
                            </p>
                            <h1 className="font-bold text-right">Jean michel BRUNO</h1>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="text-text-base text-gray-base px-section-l">
                            <p>
                            Chaque interaction est une démonstration de leur engagement envers l'excellence. 
                            Non seulement la qualité de leur nettoyage dépasse systématiquement nos attentes, mais leur capacité à répondre rapidement à nos demandes de dernière minute est tout simplement exceptionnelle. 
                            Dans notre secteur d'activité où les impressions comptent énormément, pouvoir compter sur une entreprise aussi fiable et attentive aux détails est un véritable atout.
                            </p>
                            <h1 className="font-bold text-right">Jean michel BRUNO</h1>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="fill-gray-dark" />
                <CarouselNext />
            </Carousel>
        <div className="flex text-text-base text-gray-base gap-element-l">
         
        </div>
    </div>
    )
};

export {Testimonials}