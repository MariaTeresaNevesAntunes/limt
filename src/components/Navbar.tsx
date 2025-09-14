import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
const navItems = [{
  id: 'hero',
  label: 'Início',
  href: '#hero'
}, {
  id: 'what-is-limit',
  label: 'O que é um limite?',
  href: '#what-is-limit'
}, {
  id: 'lateral-limits',
  label: 'Limites Laterais',
  href: '#lateral-limits'
}, {
  id: 'infinite-limits',
  label: 'Limites Infinitos',
  href: '#infinite-limits'
}, {
  id: 'indeterminations',
  label: 'Indeterminações',
  href: '#indeterminations'
}];
export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, {
      threshold: 0.6
    });
    navItems.forEach(({
      id
    }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent")}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">📘 Limites</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({
            id,
            label
           }) => <button key={id} onClick={() => scrollToSection(id)} className={cn("text-sm font-medium transition-colors duration-200 hover:text-primary relative", activeSection === id ? "text-white font-semibold" : "text-foreground/80")}>
                {label}
                {activeSection === id && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-white rounded-full" />}
              </button>)}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border">
              {navItems.map(({
            id,
            label
           }) => <button key={id} onClick={() => scrollToSection(id)} className={cn("block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-colors duration-200", activeSection === id ? "text-white bg-white/10 font-semibold" : "text-foreground/80 hover:text-primary hover:bg-muted/50")}>
                  {label}
                </button>)}
            </div>
          </div>}
      </div>
    </nav>;
};