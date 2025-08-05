import cuppingImage from "@/assets/cupping-therapy.jpg";
import guaShaImage from "@/assets/gua-sha.jpg";
import bambooImage from "@/assets/bamboo-massage.jpg";

const SpecialtyModalitiesSection = () => {
  const modalities = [
    {
      name: "Cupping Therapy",
      image: cuppingImage,
      description: "Ancient healing technique using suction cups to improve circulation and reduce muscle tension.",
      benefits: ["Improved circulation", "Pain relief", "Reduced inflammation", "Muscle recovery"]
    },
    {
      name: "Gua Sha Massage",
      image: guaShaImage,
      description: "Traditional Chinese medicine technique using smooth-edged tools to release tension and toxins.",
      benefits: ["Increased blood flow", "Lymphatic drainage", "Facial rejuvenation", "Stress relief"]
    },
    {
      name: "Warm Bamboo Massage",
      image: bambooImage,
      description: "Innovative technique using heated bamboo stalks to provide deep pressure and relaxation.",
      benefits: ["Deep tissue relief", "Improved flexibility", "Stress reduction", "Enhanced wellness"]
    }
  ];

  return (
    <section className="py-20 bg-cream/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Specialized Therapeutic Techniques
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Advanced modalities for enhanced healing and wellness
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
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
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