import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useScrollToSection } from "@/hooks/useScrollToSection";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollToSection = useScrollToSection();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", path: "/services" },
    { name: "Gallery", id: "gallery" },
    { name: "Infrastructure", id: "infrastructure" },
    { name: "Blog", path: "/blogs" },
    { name: "About", id: "about" },
    { name: "Pricing", id: "pricing" },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.id) {
      scrollToSection(item.id);
    }
    closeMenu();
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-white backdrop-blur-md shadow-soft py-3"
            : "bg-white py-5"
          }`}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/FCmain.png"
                alt="Fastcolorfashion Logo"
                className="w-auto h-10"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) =>
                item.path ? (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-sm font-medium hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className="text-sm font-medium hover:text-accent transition-colors cursor-pointer"
                  >
                    {item.name}
                  </button>
                )
              )}
              <Button
                className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6"
                onClick={() => scrollToSection("order-form")}
              >
                Place Order
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - OUTSIDE nav to avoid transform containing block issue */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[998] bg-black/40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel - OUTSIDE nav */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-[280px] bg-white shadow-2xl z-[999] transform transition-transform duration-300 ease-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <img
              src="/FCmain.png"
              alt="Fastcolorfashion"
              className="h-8 w-auto"
            />
            <button
              onClick={closeMenu}
              className="p-2 text-gray-500 hover:text-gray-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <div className="flex-1 overflow-y-auto px-5 py-6">
            {navItems.map((item) =>
              item.path ? (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block py-4 text-[15px] font-medium text-gray-700 hover:text-accent border-b border-gray-100 transition-colors"
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ) : (
                <button
                  key={item.name}
                  className="block w-full text-left py-4 text-[15px] font-medium text-gray-700 hover:text-accent border-b border-gray-100 transition-colors"
                  onClick={() => handleNavClick(item)}
                >
                  {item.name}
                </button>
              )
            )}
          </div>

          {/* Place Order Button */}
          <div className="px-5 py-4 border-t border-gray-100">
            <Button
              className="w-full bg-accent hover:bg-accent/90 text-white text-base py-5 rounded-full"
              onClick={() => {
                scrollToSection("order-form");
                closeMenu();
              }}
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
