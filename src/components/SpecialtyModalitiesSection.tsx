import cuppingImage from "@/assets/cupping-therapy.jpg";
import guaShaImage from "@/assets/gua-sha.jpg";
import bambooImage from "@/assets/bamboo-massage.jpg";

const SpecialtyModalitiesSection = () => {
  const modalities = [
    {
      name: "Cupping Therapy",
      image: cuppingImage,
      description: "Works deep to heal more difficult or chronic pain and can be useful for enhancing sport performance as well.",
      benefits: ["Improved circulation", "Pain relief", "Reduced inflammation", "Muscle recovery"]
    },
    {
      name: "Gua Sha Massage",
      image: guaShaImage,
      description: "Using high quality stainless steel tools these techniques are great for releasing deep tight muscles and improving movement of the muscles.",
      benefits: ["Increased blood flow", "Lymphatic drainage", "Facial rejuvenation", "Stress relief"]
    },
    {
      name: "Warm Bamboo Massage",
      image: bambooImage,
      description: "With the soothing addition of heat this massage can be deep and therapeutic or light and relaxing.",
      benefits: ["Deep tissue relief", "Improved flexibility", "Stress reduction", "Enhanced wellness"]
    }
  ];

  return (
    <section className="py-20 bg-cream/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Specialty Modalities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            While massage therapy is fantastic at healing by itself we take that healing potential to the next level 
            by utilizing special massage modalities that offer deeper healing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {modalities.map((modality, index) => (
            <div 
              key={index}
              className="bg-gradient-card rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-smooth group"
            >
              <div className="relative h-64">
                <img 
                  src={modality.image} 
                  alt={modality.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {modality.name}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {modality.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-foreground text-sm">Key Benefits:</h4>
                  <ul className="space-y-1">
                    {modality.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className="text-primary font-medium hover:text-primary/80 transition-smooth">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtyModalitiesSection;