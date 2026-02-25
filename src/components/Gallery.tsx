import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const imagesPerPage = 12;

// DTF folder images from public/DTF/
const images = [
  { id: 1, url: "/DTF/1.jpg", title: "DTF Print 1" },
  { id: 2, url: "/DTF/2.jpg", title: "DTF Print 2" },
  { id: 3, url: "/DTF/3.jpg", title: "DTF Print 3" },
  { id: 4, url: "/DTF/4.jpg", title: "DTF Print 4" },
  { id: 5, url: "/DTF/5.jpg", title: "DTF Print 5" },
  { id: 6, url: "/DTF/6.jpg", title: "DTF Print 6" },
  { id: 7, url: "/DTF/7.jpg", title: "DTF Print 7" },
  { id: 8, url: "/DTF/8.jpg", title: "DTF Print 8" },
  { id: 9, url: "/DTF/9.jpg", title: "DTF Print 9" },
  { id: 10, url: "/DTF/10.jpg", title: "DTF Print 10" },
  { id: 11, url: "/DTF/11.jpg", title: "DTF Print 11" },
  { id: 12, url: "/DTF/12.jpg", title: "DTF Print 12" },
  { id: 13, url: "/DTF/13.jpg", title: "DTF Print 13" },
  { id: 14, url: "/DTF/14.jpg", title: "DTF Print 14" },
  { id: 15, url: "/DTF/15.jpg", title: "DTF Print 15" },
  { id: 16, url: "/DTF/16.jpg", title: "DTF Print 16" },
  { id: 17, url: "/DTF/17.jpg", title: "DTF Print 17" },
  { id: 18, url: "/DTF/18.jpg", title: "DTF Print 18" },
  { id: 19, url: "/DTF/19.jpg", title: "DTF Print 19" },
  { id: 20, url: "/DTF/20.jpg", title: "DTF Print 20" },
  { id: 21, url: "/DTF/21.jpg", title: "DTF Print 21" },
  { id: 22, url: "/DTF/22.jpg", title: "DTF Print 22" },
  { id: 23, url: "/DTF/23.jpg", title: "DTF Print 23" },
  { id: 24, url: "/DTF/24.jpg", title: "DTF Print 24" },
  { id: 25, url: "/DTF/25.jpg", title: "DTF Print 25" },
  { id: 26, url: "/DTF/26.jpg", title: "DTF Print 26" },
  { id: 27, url: "/DTF/27.jpg", title: "DTF Print 27" },
  { id: 28, url: "/DTF/28.jpg", title: "DTF Print 28" },
  { id: 29, url: "/DTF/29.jpg", title: "DTF Print 29" },
  { id: 30, url: "/DTF/30.jpg", title: "DTF Print 30" },
  { id: 31, url: "/DTF/31.jpg", title: "DTF Print 31" },
  { id: 32, url: "/DTF/32.jpg", title: "DTF Print 32" },
  { id: 33, url: "/DTF/33.jpg", title: "DTF Print 33" },
  { id: 34, url: "/DTF/34.jpg", title: "DTF Print 34" },
  { id: 35, url: "/DTF/35.jpg", title: "DTF Print 35" },
  { id: 36, url: "/DTF/36.jpg", title: "DTF Print 36" },
  { id: 37, url: "/DTF/37.png", title: "DTF Print 37" },
  { id: 38, url: "/DTF/38.jpg", title: "DTF Print 38" },
  { id: 39, url: "/DTF/39.png", title: "DTF Print 39" },
  { id: 40, url: "/DTF/40.jpg", title: "DTF Print 40" },
  { id: 41, url: "/DTF/41.jpg", title: "DTF Print 41" },
  { id: 42, url: "/DTF/42.jpg", title: "DTF Print 42" },
  { id: 43, url: "/DTF/43.jpg", title: "DTF Print 43" },
  { id: 44, url: "/DTF/44.jpg", title: "DTF Print 44" },
  { id: 45, url: "/DTF/45.jpg", title: "DTF Print 45" },
  { id: 46, url: "/DTF/46.jpg", title: "DTF Print 46" },
  { id: 47, url: "/DTF/47.jpg", title: "DTF Print 47" },
  { id: 48, url: "/DTF/48.jpg", title: "DTF Print 48" },
  { id: 49, url: "/DTF/49.jpg", title: "DTF Print 49" },
  { id: 50, url: "/DTF/50.jpg", title: "DTF Print 50" },
  { id: 51, url: "/DTF/51.jpg", title: "DTF Print 51" },
  { id: 52, url: "/DTF/52.jpg", title: "DTF Print 52" },
  { id: 53, url: "/DTF/53.jpg", title: "DTF Print 53" },
  { id: 54, url: "/DTF/54.jpg", title: "DTF Print 54" },
  { id: 55, url: "/DTF/55.jpg", title: "DTF Print 55" },
  { id: 56, url: "/DTF/56.jpg", title: "DTF Print 56" },
  { id: 57, url: "/DTF/57.jpg", title: "DTF Print 57" },
  { id: 58, url: "/DTF/58.jpg", title: "DTF Print 58" },
  { id: 59, url: "/DTF/59.jpg", title: "DTF Print 59" },
  { id: 60, url: "/DTF/60.jpg", title: "DTF Print 60" },
  { id: 61, url: "/DTF/61.jpg", title: "DTF Print 61" },
  { id: 62, url: "/DTF/62.jpg", title: "DTF Print 62" },
  { id: 63, url: "/DTF/63.jpg", title: "DTF Print 63" },
  { id: 64, url: "/DTF/64.jpg", title: "DTF Print 64" },
  { id: 65, url: "/DTF/65.jpg", title: "DTF Print 65" },
  { id: 66, url: "/DTF/66.jpg", title: "DTF Print 66" },
  { id: 67, url: "/DTF/67.jpg", title: "DTF Print 67" },
  { id: 68, url: "/DTF/68.jpg", title: "DTF Print 68" },
  { id: 69, url: "/DTF/69.jpg", title: "DTF Print 69" },
  { id: 70, url: "/DTF/70.jpg", title: "DTF Print 70" },
  { id: 71, url: "/DTF/71.jpg", title: "DTF Print 71" },
  { id: 72, url: "/DTF/72.jpg", title: "DTF Print 72" },
  { id: 73, url: "/DTF/73.jpg", title: "DTF Print 73" },
  { id: 74, url: "/DTF/74.jpg", title: "DTF Print 74" },
  { id: 75, url: "/DTF/75.jpg", title: "DTF Print 75" },
  { id: 76, url: "/DTF/76.jpg", title: "DTF Print 76" },
  { id: 77, url: "/DTF/77.jpg", title: "DTF Print 77" },
  { id: 78, url: "/DTF/78.jpg", title: "DTF Print 78" },
  { id: 79, url: "/DTF/79.jpg", title: "DTF Print 79" },
  { id: 80, url: "/DTF/80.jpg", title: "DTF Print 80" },
  { id: 81, url: "/DTF/81.jpg", title: "DTF Print 81" },
  { id: 82, url: "/DTF/82.jpg", title: "DTF Print 82" },
  { id: 83, url: "/DTF/83.jpg", title: "DTF Print 83" },
  { id: 84, url: "/DTF/88.jpg", title: "DTF Print 88" },
  { id: 85, url: "/DTF/89.jpg", title: "DTF Print 89" },
  { id: 86, url: "/DTF/90.jpg", title: "DTF Print 90" },
  { id: 87, url: "/DTF/91.jpg", title: "DTF Print 91" },
  { id: 88, url: "/DTF/92.jpg", title: "DTF Print 92" },
  { id: 89, url: "/DTF/93.jpg", title: "DTF Print 93" },
  { id: 90, url: "/DTF/94.jpg", title: "DTF Print 94" },
  { id: 91, url: "/DTF/95.jpg", title: "DTF Print 95" },
  { id: 92, url: "/DTF/96.jpg", title: "DTF Print 96" },
  { id: 93, url: "/DTF/97.jpg", title: "DTF Print 97" },
  { id: 94, url: "/DTF/98.jpg", title: "DTF Print 98" },
  { id: 95, url: "/DTF/99.jpg", title: "DTF Print 99" },
  { id: 96, url: "/DTF/100.jpg", title: "DTF Print 100" },
  { id: 97, url: "/DTF/101.jpg", title: "DTF Print 101" },
  { id: 98, url: "/DTF/13493d8573622fb010899233adbb9a3c.jpg", title: "DTF Design" },
  { id: 99, url: "/DTF/3d1a142f4f00eb9aa8420d648f1d3d31.jpg", title: "DTF Design" },
  { id: 100, url: "/DTF/44a9085799c94c45950327c58e52219e.jpg", title: "DTF Design" },
  { id: 101, url: "/DTF/61019-CN BACK-11X14.jpg", title: "CN Back 11×14" },
  { id: 102, url: "/DTF/61023-CN BACK-7X17.jpg", title: "CN Back 7×17" },
  { id: 103, url: "/DTF/61027-CN BACK-9X17.jpg", title: "CN Back 9×17" },
  { id: 104, url: "/DTF/61031-SSH BACK-11X14.jpg", title: "SSH Back 11×14" },
  { id: 105, url: "/DTF/61035-SSH BACK-6X18.jpg", title: "SSH Back 6×18" },
  { id: 106, url: "/DTF/61039-SSH BACK-11X14.jpg", title: "SSH Back 11×14" },
  { id: 107, url: "/DTF/61043-SSH BACK-11X14.jpg", title: "SSH Back 11×14" },
  { id: 108, url: "/DTF/61059-SSH BACK-11X14.png.jpg", title: "SSH Back 11×14" },
  { id: 109, url: "/DTF/61062-SSH BACK-11X14.jpg", title: "SSH Back 11×14" },
  { id: 110, url: "/DTF/61071-SSH BACK-11X16.jpg", title: "SSH Back 11×16" },
  { id: 111, url: "/DTF/61075-SSH BACK-11X14.jpg", title: "SSH Back 11×14" },
  { id: 112, url: "/DTF/61082-SSH BACK-11X14.jpg", title: "SSH Back 11×14" },
  { id: 113, url: "/DTF/62020-SSJ-7X18.jpg", title: "SSJ 7×18" },
  { id: 114, url: "/DTF/62030-BACK-11X14.jpg", title: "Back 11×14" },
  { id: 115, url: "/DTF/62035-BACK-11X14.jpg", title: "Back 11×14" },
  { id: 116, url: "/DTF/62037-BACK-11x14.jpg", title: "Back 11×14" },
  { id: 117, url: "/DTF/62044-BACK-11X14.jpg", title: "Back 11×14" },
  { id: 118, url: "/DTF/62045-BACK-11-14.jpg", title: "Back 11×14" },
  { id: 119, url: "/DTF/62049-BACK-11X14.jpg", title: "Back 11×14" },
  { id: 120, url: "/DTF/62053-BACK-11X14.jpg", title: "Back 11×14" },
  { id: 121, url: "/DTF/62061-BACK-11X14.jpg", title: "Back 11×14" },
  { id: 122, url: "/DTF/62063-BACK-11X14.jpg", title: "Back 11×14" },
  { id: 123, url: "/DTF/62067-4X10.5 FRONT.jpg", title: "Front 4×10.5" },
  { id: 124, url: "/DTF/70000.jpg", title: "DTF Design 70000" },
  { id: 125, url: "/DTF/70001-white.jpg", title: "DTF Design White" },
  { id: 126, url: "/DTF/70003-70004.jpg", title: "DTF Design 70003-70004" },
  { id: 127, url: "/DTF/70009-1.jpg", title: "DTF Design 70009" },
  { id: 128, url: "/DTF/70014-70015.jpg", title: "DTF Design 70014-70015" },
  { id: 129, url: "/DTF/70018-white.jpg", title: "DTF Design White" },
  { id: 130, url: "/DTF/70020-70021.jpg", title: "DTF Design 70020-70021" },
  { id: 131, url: "/DTF/70022-70023 - Copy.jpg", title: "DTF Design 70022-70023" },
  { id: 132, url: "/DTF/70026-70027.jpg", title: "DTF Design 70026-70027" },
  { id: 133, url: "/DTF/70028-70029-70030.jpg", title: "DTF Design 70028-70030" },
  { id: 134, url: "/DTF/80002-4X4.jpg", title: "DTF 4×4" },
  { id: 135, url: "/DTF/80004-10X10.jpg", title: "DTF 10×10" },
  { id: 136, url: "/DTF/png 8.jpg", title: "DTF PNG Print" },
  { id: 137, url: "/DTF/png 11.jpg", title: "DTF PNG Print" },
  { id: 138, url: "/DTF/WhatsApp Image 2026-02-07 at 1.58.34 PM (2).jpg", title: "DTF Sample" },
  { id: 139, url: "/DTF/WhatsApp Image 2026-02-07 at 1.58.44 PM (2).jpg", title: "DTF Sample" },
  { id: 140, url: "/DTF/WhatsApp Image 2026-02-07 at 1.58.45 PM (1).jpg", title: "DTF Sample" },
  { id: 141, url: "/DTF/WhatsApp Image 2026-02-07 at 1.58.47 PM.jpg", title: "DTF Sample" },
  { id: 142, url: "/DTF/WhatsApp Image 2026-02-07 at 1.58.48 PM (2).jpg", title: "DTF Sample" },
  { id: 143, url: "/DTF/WhatsApp Image 2026-02-07 at 1.58.48 PM.jpg", title: "DTF Sample" },
  { id: 144, url: "/DTF/WhatsApp Image 2026-02-07 at 1.58.51 PM (1).jpg", title: "DTF Sample" },
  { id: 145, url: "/DTF/WhatsApp Image 2026-02-07 at 1.58.51 PM (2).jpg", title: "DTF Sample" },
  { id: 146, url: "/DTF/WhatsApp Image 2026-02-07 at 1.58.52 PM (1).jpg", title: "DTF Sample" },
];

const totalImages = images.length;

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  const goToPrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <section
        id="gallery"
        className="pt-28 pb-20 bg-background relative overflow-hidden"
      >
        <div className="container relative z-10 px-6">
          {/* Section Header */}
          <div className="text-center mb-14">
            <span className="inline-block px-5 py-1.5 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4 tracking-wide uppercase">
              Our Work
            </span>
            <h2 className="text-fluid-h2 font-bold mb-4">DTF Print Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-fluid-p">
              Browse our collection of {totalImages} premium DTF prints – vibrant colors, sharp details, and lasting quality.
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 mb-10">
            {currentImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl bg-gray-100 cursor-pointer"
                onClick={() => setLightboxImage(image.url)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-xs font-medium">{image.title}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevious}
              disabled={currentPage === 1}
              className="rounded-full"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Prev
            </Button>

            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                const page =
                  Math.max(
                    1,
                    Math.min(totalPages - 4, currentPage - 2)
                  ) + i;
                return (
                  <Button
                    key={page}
                    variant={page === currentPage ? "default" : "outline"}
                    size="sm"
                    onClick={() => goToPage(page)}
                    className={`w-9 h-9 rounded-full text-xs ${page === currentPage
                        ? "bg-accent text-white hover:bg-accent/90"
                        : ""
                      }`}
                  >
                    {page}
                  </Button>
                );
              })}
              {totalPages > 5 && currentPage < totalPages - 2 && (
                <>
                  <span className="text-muted-foreground px-1">...</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => goToPage(totalPages)}
                    className="w-9 h-9 rounded-full text-xs"
                  >
                    {totalPages}
                  </Button>
                </>
              )}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              disabled={currentPage === totalPages}
              className="rounded-full"
              aria-label="Next page"
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          <div className="text-center mt-4 text-sm text-muted-foreground">
            Page {currentPage} of {totalPages} · {totalImages} prints
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={lightboxImage}
            alt="DTF Print"
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default Gallery;