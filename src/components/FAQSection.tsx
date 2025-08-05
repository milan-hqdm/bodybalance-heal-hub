import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of massage therapy do you offer?",
      answer: "We offer a comprehensive range of massage services including Swedish relaxation massage, deep tissue therapy, sports massage, prenatal massage, cupping therapy, Gua Sha, and warm bamboo massage. Each treatment is customized to your specific needs."
    },
    {
      question: "Do I need any prior experience for massage therapy?",
      answer: "No prior experience is necessary. Our licensed therapists will guide you through the entire process, from initial consultation to post-treatment care. We welcome both first-time clients and experienced massage enthusiasts."
    },
    {
      question: "How do I book a personalized treatment session?",
      answer: "You can book online through our website, call us directly at (123) 456-7890, or use our mobile app. We recommend booking in advance, especially for preferred time slots and specific therapists."
    },
    {
      question: "What should I bring to a massage session?",
      answer: "Simply bring yourself! We provide all necessary linens, oils, and amenities. Arrive 10-15 minutes early for intake forms and to relax. Wear comfortable clothing that's easy to change out of."
    },
    {
      question: "Are your treatment plans tailored to individual needs?",
      answer: "Absolutely! Every treatment begins with a consultation to understand your health history, current concerns, and wellness goals. We create personalized treatment plans that evolve with your progress."
    },
    {
      question: "How often are wellness workshops and classes held?",
      answer: "We offer wellness workshops monthly, covering topics like self-massage techniques, stress management, and injury prevention. Our specialty modality classes are held quarterly. Check our events calendar for upcoming sessions."
    }
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently <span className="italic text-coral">asked</span> questions
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Everything you need to know about our services and treatments.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border-b border-primary-foreground/20 last:border-b-0"
              >
                <button
                  className="w-full py-6 flex items-center justify-between text-left hover:text-coral transition-smooth"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="text-lg font-medium pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 transition-smooth ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="pb-6">
                    <p className="text-primary-foreground/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;