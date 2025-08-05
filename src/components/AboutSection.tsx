import aboutImage1 from "@/assets/about-1.jpg";
import aboutImage2 from "@/assets/about-2.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-cream/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-wide uppercase mb-4">
            Your Health, Elevated
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 max-w-4xl mx-auto leading-tight">
            Our focus in each massage session is to heal the body, reduce pain, and restore balance.
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Card 1 */}
          <div className="bg-gradient-card rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-smooth group">
            <div className="relative h-80">
              <img 
                src={aboutImage1} 
                alt="Holistic Wellness approach" 
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-sage/90 text-sage-foreground px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase">
                  Holistic Wellness
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Therapeutic Focus
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We tailor our massage style and treatments to emphasize the health of the body. While spa massages 
                tend to emphasize pampering, our massage services focus on deep rejuvenation and healing for our clients.
              </p>
              <button className="text-primary font-medium hover:text-primary/80 transition-smooth">
                Learn more →
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-card rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-smooth group">
            <div className="relative h-80">
              <img 
                src={aboutImage2} 
                alt="Personalized care approach" 
                className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
              />
              <div className="absolute top-6 left-6">
                <span className="bg-earth/90 text-earth-foreground px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase">
                  Personalized Care
                </span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Float Therapy & Recovery
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We have tailored our floating experience to be the most comfortable rejuvenating experience possible. 
                Floating massage therapy is great for pain and sports recovery and may help with stress relief, anxiety, depression, or even PTSD symptoms.
              </p>
              <button className="text-primary font-medium hover:text-primary/80 transition-smooth">
                Learn more →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;