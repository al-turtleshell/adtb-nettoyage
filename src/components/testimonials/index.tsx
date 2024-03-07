import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  

const Testimonials = () => {
return (
    <div id="testimonial" className="mb-section-s lg:mb-section-m  -mt-section-l pt-section-l px-element-s">
        <div className="flex items-center mb-section-s lg:mb-section-m">
            <h1 className="text-heading-5 lg:text-heading-2 text-gray-dark mr-element-l whitespace-nowrap"> Témoignages </h1>
            <div className="w-full h-[50px] lg:h-[80px] bg-pink-base" />
        </div>
            <Carousel className="w-full">
                <CarouselContent>
                    <CarouselItem>
                        <div className="text-text-base text-gray-base px-element-l lg:px-section-l">
                            <p className="mb-element-m">
                                Le conseil syndical vous remercie pour la qualité de votre travail et plus particulierement lors de cette dernière période difficile. Toute notre reconnaissance et nos remerciements.
                            </p>
                            <h1 className="font-bold text-right">Les Balcons de la citadelle</h1>
                        </div>   
                    </CarouselItem>
                    <CarouselItem>
                        <div className="text-text-base text-gray-base  px-element-l lg:px-section-l">
                            <p className="mb-element-m">
                                Un grand merci pour votre travail consciencieux, efficace et votre bonne humeur.
                            </p>
                            <h1 className="font-bold text-right">Copropriété Villa Marceau</h1>
                        </div>
                    </CarouselItem>
                    <CarouselItem>
                        <div className="text-text-base text-gray-base px-element-l lg:px-section-l">
                            <p className="mb-element-m">
                                Nous restons toujours extremement satisfait de vos prestations, nous vous en remercions beaucoup.
                            </p>
                            <h1 className="font-bold text-right">Cabinet Rhumatologie</h1>
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