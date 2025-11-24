import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "I know in 10 seconds if a crypto is worth my time.",
    author: "Julien",
    role: "Long-term investor",
  },
  {
    quote: "Finally data that kills emotional decision-making.",
    author: "Manon",
    role: "Swing trader",
  },
  {
    quote: "It already saved me from two dangerous projects.",
    author: "Theo",
    role: "Beginner analyst",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">They trust us</h2>
          <p className="text-lg text-gray-400">
            Discover what our users think about CryptoScores.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gray-900/30 border-gray-800 p-8 hover:border-[#0666c6]/30 transition-colors"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#0666c6] text-[#0666c6]" />
                ))}
              </div>
              <blockquote className="text-gray-300 mb-6 leading-relaxed">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="pt-4 border-t border-gray-800">
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
