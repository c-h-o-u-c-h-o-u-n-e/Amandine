import { ArticleCard } from "@/sections/ArticlesSection/components/ArticleCard";

export const ArticlesSection = () => {
  return (
    <section className="bg-white box-border caret-transparent w-full py-16 md:py-24">
      <div className="box-border caret-transparent max-w-none w-full mx-auto px-4 md:max-w-screen-xl md:px-8">
        <div className="relative box-border caret-transparent max-w-6xl mx-auto">
          <ArticleCard
            description="Rencontre avec des créateurs qui repoussent les limites de leur discipline."
            authorName="Jean Martin"
            date="12 janvier 2024"
            category="Journal intime"
            href="/blog/conversations-creatives-innovation"
            imageUrl="https://c.animaapp.com/mkj1il3o8LXpDA/assets/ai_2.png"
            imageAlt="casual creative discussion"
            title="Conversations créatives : dialogue sur l'innovation"
            isReversed={true}
          />

          <ArticleCard
            description="Welcome to my smoky garden of delights."
            authorName="Sophie Laurent"
            date="10 janvier 2024"
            href="/blog/focus-exclusif-narration-visuelle"
            imageUrl="https://c.animaapp.com/mkj1il3o8LXpDA/assets/ai_3.png"
            imageAlt="exclusive editorial focus"
            title="Focus exclusif : l'art de la narration visuelle"
            isReversed={false}
          />

          <ArticleCard
            description="Welcome to my smoky garden of delights."
            authorName="Pierre Rousseau"
            date="8 janvier 2024"
            href="/blog/visualisation-sonore-audio-art"
            imageUrl="https://c.animaapp.com/mkj1il3o8LXpDA/assets/ai_4.png"
            imageAlt="abstract sound visualization"
            title="Visualisation sonore : quand l'audio devient art"
            isReversed={true}
          />

          <ArticleCard
            description="Analyse des stratégies qui permettent aux créateurs de monétiser leur travail."
            authorName="Claire Moreau"
            date="5 janvier 2024"
            href="/blog/modeles-abonnement-economie-contenu"
            imageUrl="https://c.animaapp.com/mkj1il3o8LXpDA/assets/ai_5.png"
            imageAlt="abstract paywall concept"
            title="Modèles d'abonnement : l'économie du contenu premium"
            isReversed={false}
          />

          <ArticleCard
            description="Les grandes tendances qui vont marquer l'année dans le monde du design et de la création."
            authorName="Marc Lefevre"
            date="3 janvier 2024"
            href="/blog/tendances-2024-design-creation"
            imageUrl="https://c.animaapp.com/mkj1il3o8LXpDA/assets/ai_1.png"
            imageAlt="featured editorial workspace"
            title="Tendances 2024 : ce qui nous attend"
            isReversed={true}
          />

          <ArticleCard
            description="Un guide approfondi pour maîtriser l'art de la composition visuelle."
            authorName="Isabelle Bernard"
            date="1 janvier 2024"
            href="/blog/masterclass-techniques-composition"
            imageUrl="https://c.animaapp.com/mkj1il3o8LXpDA/assets/ai_2.png"
            imageAlt="casual creative discussion"
            title="Masterclass : techniques avancées de composition"
            isReversed={false}
          />
        </div>
      </div>
    </section>
  );
};
