import { Play } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    thumbnail: "https://ajaxexport.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-16-at-3.55.01-PM.jpeg?w=400&q=80",
    title: "We Export Globally",
    
  },
  {
    thumbnail: "https://ajaxexport.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-16-at-4.17.34-PM.jpeg?w=400&q=80",
    title: "Quality through Excellance",
    
  },
  {
    thumbnail: "https://ajaxexport.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-16-at-5.01.14-PM.jpeg?w=400&q=80",
    title: "Eco Friendly Garment Materials",
    
  },
  
];

const VideoReels = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-fluid-h2 font-bold mb-4">Explore & Learn</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-fluid-p">
            Explore our process and see how we create stunning prints
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer shadow-soft hover:shadow-elevated transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              
              {/* Play Button */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                hoveredIndex === index ? "opacity-100" : "opacity-70"
              }`}>
                <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-6 h-6 text-accent-foreground fill-current ml-1" />
                </div>
              </div>

              {/* Info */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-primary-foreground font-medium text-sm line-clamp-2">
                  {video.title}
                </p>
                <p className="text-primary-foreground/70 text-xs mt-1">
                  {video.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoReels;
