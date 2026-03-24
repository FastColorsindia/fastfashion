import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const images = [
  {
    url: "https://ajaxexport.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-16-at-11.41.18-AM.jpeg?w=800&q=80",
    title: "Custom T-Shirt Prints",
  },
  {
    url: "https://ajaxexport.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-16-at-11.54.13-AM.jpeg?w=800&q=80",
    title: "Hoodie Designs",
  },
  {
    url: "https://ajaxexport.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-16-at-12.59.23-PM.jpeg?w=800&q=80",
    title: "Vibrant Colors",
  },
  {
    url: "https://ajaxexport.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-16-at-1.25.45-PM.jpeg?w=800&q=80",
    title: "Detailed Artwork",
  },
  
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-fluid-h2 font-bold mb-4">Our Work</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-fluid-p">
            Browse through our portfolio of stunning DTF prints
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Image */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow-elevated">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <div className="absolute bottom-6 left-6 text-primary-foreground">
                  <h3 className="text-2xl font-semibold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full"
            onClick={goToPrevious}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm hover:bg-background rounded-full"
            onClick={goToNext}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-accent w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
