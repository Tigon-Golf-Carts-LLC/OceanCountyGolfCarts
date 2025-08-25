import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/inventory", label: "Inventory" },
    { path: "/rentals", label: "Rentals" },
    { path: "/services", label: "Services" },
    { path: "/showroom", label: "Showroom" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location === "/";
    return location.startsWith(path);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="rounded-lg">
              <img 
                src="/attached_assets/Ocean County Golf Carts (3)_1753196262875.png" 
                alt="Ocean County Golf Carts Logo" 
                className="h-16 w-16"
              />
            </div>
            <Link href="/">
              <div className="cursor-pointer">
                <div className="text-lg font-bold text-theme-primary">OCEAN COUNTY</div>
                <div className="text-lg font-bold text-theme-primary -mt-1">GOLF CARTS</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-baseline space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-gray-900 font-semibold"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <Button className="bg-theme-orange hover:bg-orange-600 text-white px-4 py-2 text-sm font-medium">
                Call Now 804-585-7301
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={`px-3 py-2 text-base font-medium transition-colors ${
                        isActive(item.path)
                          ? "text-gray-900 font-semibold"
                          : "text-gray-700 hover:text-gray-900"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="border-t pt-4 mt-4">
                    <Button className="bg-theme-orange hover:bg-orange-600 text-white w-full">
                      Call Now 804-585-7301
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
