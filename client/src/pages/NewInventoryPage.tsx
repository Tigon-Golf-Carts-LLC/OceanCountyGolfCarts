import { useState } from "react";
import { BASE_URL } from "@/config/urls";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Filter, Star, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, {
  generateItemListSchema,
  generateBreadcrumbSchema
} from "@/components/SchemaMarkup";
import type { Vehicle } from "@shared/schema";
import inventoryHeroImage from "@assets/Ocean County New Jersey Golf Carts_1756131126751.png";

export default function NewInventoryPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [brandFilter, setBrandFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");

  const { data: vehicles, isLoading, error } = useQuery<Vehicle[]>({
    queryKey: ["vehicles"],
    queryFn: async () => {
      const response = await fetch('/api/vehicles');
      if (!response.ok) {
        throw new Error(`Failed to fetch vehicles: ${response.status}`);
      }
      return response.json();
    },
    retry: 3,
    refetchOnWindowFocus: false,
  });

  const filteredVehicles = vehicles?.filter(vehicle => {
    const matchesSearch = vehicle.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vehicle.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = brandFilter === "all" || vehicle.brand.toLowerCase() === brandFilter.toLowerCase();
    const matchesCategory = categoryFilter === "all" || vehicle.category.toLowerCase().includes(categoryFilter.toLowerCase());
    const matchesPrice = priceFilter === "all" || 
                        (priceFilter === "under-15000" && vehicle.price < 15000) ||
                        (priceFilter === "15000-25000" && vehicle.price >= 15000 && vehicle.price <= 25000) ||
                        (priceFilter === "over-25000" && vehicle.price > 25000);
    
    return matchesSearch && matchesBrand && matchesCategory && matchesPrice;
  });

  return (
    <>
      <SEOHead
        title="New Jersey Golf Carts for Sale | Browse Our NJ Inventory"
        description="Shop new & electric golf carts for sale in New Jersey. Ocean County Golf Carts carries Evolution & Denago — financing available. Visit us today!"
        keywords="new jersey golf carts, new jersey golf carts for sale, NJ golf carts for sale, golf cart inventory, DENAGO, EVOLUTION, Ocean County golf carts"
        canonicalUrl="https://oceancountygolfcarts.com/inventory"
        ogImage="/attached_assets/Ocean County New Jersey Golf Carts_1756131126751.png"
      />
      {vehicles && vehicles.length > 0 && (
        <SchemaMarkup schema={generateItemListSchema(vehicles)} />
      )}
      <SchemaMarkup schema={generateBreadcrumbSchema([
        { name: "Home", url: "https://oceancountygolfcarts.com" },
        { name: "New Jersey Golf Carts for Sale", url: "https://oceancountygolfcarts.com/inventory" }
      ])} />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section 
          className="relative text-white py-32"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.7), rgba(14, 46, 85, 0.7)), url('${inventoryHeroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                New Jersey Golf Carts for Sale — Shop Our Full Inventory
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
                Browse our complete selection of Evolution and Denago electric golf carts for sale in
                New Jersey. New arrivals and custom builds available across Ocean County.
              </p>
            </div>
          </div>
        </section>

        {/* NJ Inventory Intro */}
        <section className="py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-700 mb-4">
              Ocean County Golf Carts is your source for <strong>New Jersey golf carts</strong> for sale,
              serving all of Ocean County and the greater NJ shore. From compact 2-passenger carts to
              lifted 6-seaters and street-legal LSVs, every cart in our inventory is electric, backed by
              factory warranties, and available with financing and free local delivery. Whether you're in
              a beach town, a lake community, or a 55+ neighborhood, we'll help you find the right{" "}
              <strong>NJ golf carts for sale</strong> for how you ride.
            </p>
            <p className="text-lg text-gray-700">
              Shopping a specific town? Explore{" "}
              <Link href={`${BASE_URL}/toms-river-township-golf-carts`} className="text-blue-600 underline hover:text-blue-800">
                golf carts for sale in Toms River, NJ
              </Link>
              , browse{" "}
              <Link href={`${BASE_URL}/golf-carts-for-sale`} className="text-blue-600 underline hover:text-blue-800">
                electric and LSV golf carts for sale
              </Link>
              , or view all{" "}
              <Link href={`${BASE_URL}/brick-township-golf-carts`} className="text-blue-600 underline hover:text-blue-800">
                Brick
              </Link>{" "}and{" "}
              <Link href={`${BASE_URL}/lakewood-township-golf-carts`} className="text-blue-600 underline hover:text-blue-800">
                Lakewood
              </Link>{" "}township pages.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search golf carts..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Select value={brandFilter} onValueChange={setBrandFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Brands" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Brands</SelectItem>
                  <SelectItem value="denago">DENAGO</SelectItem>
                  <SelectItem value="evolution">EVOLUTION</SelectItem>
                </SelectContent>
              </Select>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="ranger">Ranger Series</SelectItem>
                  <SelectItem value="maverick">Maverick Series</SelectItem>
                  <SelectItem value="forester">Forester Series</SelectItem>
                  <SelectItem value="turfman">Turfman Series</SelectItem>
                  <SelectItem value="rover">Rover Series</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Prices" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="under-15000">Under $15,000</SelectItem>
                  <SelectItem value="15000-25000">$15,000 - $25,000</SelectItem>
                  <SelectItem value="over-25000">Over $25,000</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-theme-orange hover:bg-orange-600">
                <Filter className="w-4 h-4 mr-2" />
                Apply Filters
              </Button>
            </div>
          </div>
        </section>

        {/* Inventory Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Available Golf Carts ({filteredVehicles?.length || 0})
              </h2>
            </div>

            {error && (
              <div className="text-center py-8">
                <p className="text-red-600">Error loading vehicles: {error.message}</p>
              </div>
            )}
            
            {isLoading ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                  <Card key={i} className="animate-pulse">
                    <div className="bg-gray-200 h-48 rounded-t-lg"></div>
                    <CardHeader>
                      <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                    </CardHeader>
                    <CardContent>
                      <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : !filteredVehicles || filteredVehicles.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600">No vehicles match your current filters.</p>
                {vehicles && vehicles.length > 0 && (
                  <p className="text-sm text-gray-500 mt-2">
                    Showing 0 of {vehicles.length} total vehicles
                  </p>
                )}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredVehicles?.map((vehicle) => (
                  <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow bg-white border border-gray-200">
                    <div className="relative">
                      <img
                        src={vehicle.images[0] || "/placeholder-golf-cart.jpg"}
                        alt={vehicle.name}
                        className="w-full h-56 object-cover"
                      />
                      {vehicle.isNew && (
                        <Badge className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded">
                          NEW
                        </Badge>
                      )}
                    </div>
                    
                    <CardContent className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {vehicle.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                        {vehicle.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-blue-600">
                          ${vehicle.price.toLocaleString()}
                        </span>
                        <Button 
                          size="sm" 
                          className="bg-theme-orange hover:bg-orange-600 text-white px-4 py-2 rounded text-sm font-medium"
                          asChild
                        >
                          <Link href={`/vehicles/${vehicle.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {filteredVehicles?.length === 0 && !isLoading && (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No vehicles found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters.</p>
                <Button onClick={() => {
                  setSearchTerm("");
                  setBrandFilter("all");
                  setCategoryFilter("all");
                  setPriceFilter("all");
                }}>
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* NJ Golf Carts For Sale Content */}
        <section className="py-16 bg-white border-t">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              New Jersey Golf Carts for Sale — Find Your Perfect Ride
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Buying a golf cart in New Jersey is simple with Ocean County Golf Carts. We carry two of the
              most trusted brands — Evolution and Denago — in 2, 4, and 6-passenger configurations, plus
              street-legal LSV models that can be titled, registered, and insured for local NJ roads. Every
              cart is 100% electric for quiet, low-maintenance driving.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Not sure where to start? Tell us how you'll use your cart — beach trips, neighborhood
              cruising, golf, or hauling — and we'll match you to the right model and budget. With 0%
              financing on select models, factory warranties, genuine parts, and free local delivery
              across Ocean County, it's easy to drive home the perfect New Jersey golf cart for sale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://tigongolfcarts.com/apply-for-financing/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  Apply for Financing
                </Button>
              </a>
              <Link href={`${BASE_URL}/contact`}>
                <Button size="lg" variant="outline" className="border-theme-primary text-theme-primary hover:bg-blue-50">
                  Request a Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl mb-8">
              Our team can help you find the perfect golf cart or place a custom order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`${BASE_URL}/contact`}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Contact Our Team
                </Button>
              </Link>
              <a href="tel:804-585-7301">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  Call 804-585-7301
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Call Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600 mb-2">804-585-7301</p>
                  <p className="text-gray-600">Speak with our golf cart specialists</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-700">
                    <p>Monday-Friday: 9AM-5PM</p>
                    <p>Saturday: 9AM-5PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Ocean County Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Delivery and pickup available throughout Ocean County and surrounding areas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}