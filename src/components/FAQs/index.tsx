import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const FAQs = () => {
return (
    <div id="faq" className="mb-section-m  -mt-section-l pt-section-l">
        <div className="flex items-center mb-element-l">
            <h1 className="text-heading-2 text-gray-dark mr-element-l whitespace-nowrap"> FAQs </h1>
            <div className="w-full h-[80px] bg-pink-base" />
        </div>
        <div>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>Quels types de services de nettoyage proposez-vous ?</AccordionTrigger>
                <AccordionContent>
                    Nous offrons une gamme complète de services de nettoyage adaptés aux copropriétés, bureaux et associations. 
                    Cela inclut le nettoyage régulier, le nettoyage en profondeur, le nettoyage de printemps, le nettoyage après travaux et le nettoyage spécialisé selon vos besoins spécifiques.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>Comment puis-je réserver un service de nettoyage ?</AccordionTrigger>
                <AccordionContent>
                Vous pouvez réserver nos services en nous contactant directement par téléphone, email.
                Nous travaillons avec vous pour établir un calendrier qui répond à vos besoins, que ce soit pour des interventions ponctuelles ou des contrats réguliers.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Comment sont calculés vos tarifs ?</AccordionTrigger>
                <AccordionContent>
                Nos tarifs sont basés sur la taille de l&apos;espace à nettoyer, la fréquence des services et le type de nettoyage requis. Nous proposons des devis personnalisés pour garantir une tarification transparente et juste.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>Quelle est votre politique d&apos;annulation ?</AccordionTrigger>
                <AccordionContent>
                Les annulations peuvent être effectuées sans frais jusqu&apos;à 48 heures avant le service prévu. 
                Pour les annulations tardives, des frais peuvent s&apos;appliquer. 
                En cas de circonstances exceptionnelles, nous nous efforçons d&apos;être flexibles pour répondre à vos besoins.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>Comment puis-je vous contacter pour plus d&apos;informations ou en cas de problème ?</AccordionTrigger>
                <AccordionContent>
                Vous pouvez nous contacter par téléphone, email pour toute question ou préoccupation. Notre équipe de support client est là pour vous aider et garantir votre satisfaction.
                </AccordionContent>
            </AccordionItem>
        </Accordion>

        </div>
    </div>
    )
};

export {FAQs}