import { motion } from "framer-motion";
import { Quote, Play } from "lucide-react";
import { useState } from "react";

const testimonialsRow1 = [
  {
    name: "Subhash Tyagi",
    location: "801, Lalani Fairmont, Khar (W)",
    text: "While retiring from ONGC as a General Manager I was in search of a good residential premises built by the most genuine builder. I immediately saw the location and the building construction which appealed me both technically as well as commercially. I am happily living in Lalani Fairmont which I believe has clear distinction with other buildings in the surrounding area.",
  },
  {
    name: "Sunflower International",
    location: "IT products and services company",
    text: "When we were looking for office in pune, right from identification of the exact area, specifications and correct information about every aspect of the place, Lalani group sales team and senior management were transparent and helpful.",
  },
  {
    name: "Mr. & Mrs. Smith",
    location: "501, Royal Manor, Bandra (W)",
    text: "Our experience so far with the Lalani Group has been extremely professional. The building is a very elegant and tastefully done construction, and also very well finished. It was truly aesthetically to our liking and the Lalani Group was very keen to satisfy us.",
  },
  {
    name: "Ms. Jayshri Shivraj",
    location: "202 Orchid Enclave, Andheri (E)",
    text: "The Lalani Group's Construction at Orchid Enclave is effective and detailed, where the residents can get some of the best amenities and also experience quality living standards at competent pricing. The apartment is very well planned and the floor space is used for the maximum giving on the worth of one's money.",
  },
];

const testimonialsRow2 = [
  {
    name: "Mr. Rajesh Kumar",
    location: "Lalani Heritage, Malad (W)",
    text: "The attention to detail and quality of construction is exceptional. Lalani Group has delivered exactly what they promised. The entire process was smooth and transparent.",
  },
  {
    name: "Mrs. Priya Sharma",
    location: "Lalani Grandeur, Andheri (E)",
    text: "We are extremely satisfied with our purchase. The amenities are world-class and the location is perfect. Lalani Group has truly created a landmark property.",
  },
  {
    name: "Tech Solutions Pvt Ltd",
    location: "Lalani Business Park, Khar (W)",
    text: "As a corporate client, we found Lalani Group to be highly professional. The commercial space is well-designed with modern infrastructure and excellent connectivity.",
  },
  {
    name: "Mr. Anil Desai",
    location: "Lalani Fairmont, Khar (W)",
    text: "Living in a Lalani property gives you peace of mind. The build quality is superior and the maintenance is excellent. Highly recommend to anyone looking for a quality home.",
  },
];

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonialsRow1[0] }) => (
  <div className="glass-card-premium rounded-2xl p-7 min-w-[380px] max-w-[380px] mx-3 hover:border-primary/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl group">
    <div className="flex items-center justify-between mb-5">
      <Quote className="w-10 h-10 text-primary/50 group-hover:text-primary transition-colors duration-300" />
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-gold-accent" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
    <p className="font-body text-foreground/90 leading-relaxed text-sm mb-6 line-clamp-4 group-hover:text-foreground transition-colors duration-300">
      "{testimonial.text}"
    </p>
    <div className="border-t border-primary/20 pt-5">
      <p className="font-heading text-base font-bold gradient-gold-text">
        {testimonial.name}
      </p>
      <p className="font-body text-xs text-gold-light mt-1.5 flex items-center gap-1">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
        {testimonial.location}
      </p>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="testimonials" className="section-padding bg-background overflow-hidden">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold gradient-gold-text mb-4">
            Testimonials
          </h2>
          <div className="gold-divider mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Hear what our satisfied customers have to say about their experience with Lalani Group
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group ring-2 ring-primary/20 hover:ring-primary/40 transition-all duration-500">
            {!showVideo ? (
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-gold-accent/20 flex items-center justify-center cursor-pointer"
                   onClick={() => setShowVideo(true)}>
                <img 
                  src="https://img.youtube.com/vi/ZT7uTjJIMtE/maxresdefault.jpg" 
                  alt="Lalani Group Video"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-black/40 group-hover:from-black/50 group-hover:via-black/20 group-hover:to-black/30 transition-all duration-500" />
                <div className="relative z-10 w-24 h-24 rounded-full bg-gradient-to-br from-primary to-gold-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                  <Play className="w-12 h-12 text-white ml-1.5" fill="white" />
                </div>
              </div>
            ) : (
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ZT7uTjJIMtE?autoplay=1"
                  title="Lalani Group Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            )}
          </div>
        </motion.div>

        {/* Marquee Row 1 - Forward */}
        <div className="relative mb-8">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: [0, -1400],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...testimonialsRow1, ...testimonialsRow1].map((testimonial, index) => (
                <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Marquee Row 2 - Reverse */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: [-1400, 0],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {[...testimonialsRow2, ...testimonialsRow2].map((testimonial, index) => (
                <TestimonialCard key={`row2-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
