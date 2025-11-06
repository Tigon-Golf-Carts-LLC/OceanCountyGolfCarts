import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { BASE_URL } from "@/config/urls";

export default function Navigation() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: `${BASE_URL}/`, label: "Home" },
    { path: `${BASE_URL}/inventory`, label: "Inventory" },
    { path: `${BASE_URL}/rentals`, label: "Rentals" },
    { path: `${BASE_URL}/services`, label: "Services" },
    { path: `${BASE_URL}/showroom`, label: "Showroom" },
    { path: `${BASE_URL}/about`, label: "About" },
    { path: `${BASE_URL}/contact`, label: "Contact" },
  ];

  const isActive = (path: string) => {
    const relativePath = path.replace(BASE_URL, '');
    if (relativePath === "/" || relativePath === "") return location === "/";
    return location.startsWith(relativePath);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="rounded-lg">
              <img 
                src={`${BASE_URL}/attached_assets/Ocean County Golf Carts (3)_1753196262875.png`} 
                alt="Ocean County Golf Carts Logo" 
                className="h-16 w-16"
              />
            </div>
            <Link href={`${BASE_URL}/`}>
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
