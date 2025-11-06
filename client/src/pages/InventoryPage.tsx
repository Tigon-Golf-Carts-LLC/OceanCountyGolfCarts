import { useState } from "react";
import { BASE_URL } from "@/config/urls";
import { useQuery } from "@tanstack/react-query";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import VehicleCard from "@/components/VehicleCard";
import VehicleFilters from "@/components/VehicleFilters";
import { Skeleton } from "@/components/ui/skeleton";
import { Vehicle } from "@shared/schema";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, { 
  generateBreadcrumbSchema,
  generateOfferCatalogSchema
} from "@/components/SchemaMarkup";


export default function InventoryPage() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const { data: vehicles, isLoading, error } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles", selectedBrand, selectedCategory],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (selectedBrand) params.append("brand", selectedBrand);
      if (selectedCategory) params.append("category", selectedCategory);
      
      const response = await fetch(`/api/vehicles?${params}`);
      if (!response.ok) {
        throw new Error("Failed to fetch vehicles");
      }
      return response.json();
    },
  });

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Error Loading Vehicles</h1>
          <p className="text-gray-600">
            Unable to load vehicle inventory. Please try again later.
          </p>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: "Home", url: "https://oceancountygolfcarts.com" },
    { name: "Inventory", url: "https://oceancountygolfcarts.com/inventory" }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Golf Cart Inventory"
        description="Browse premium DENAGO and EVOLUTION electric golf carts in Ocean County, NJ. Find your perfect vehicle today. Call 1-844-844-6638."
        keywords="golf cart inventory, DENAGO golf carts, EVOLUTION golf carts, electric vehicles, Ocean County"
        canonicalUrl="https://oceancountygolfcarts.com/inventory"
        ogImage="/attached_assets/a-photograph-of-a-bright-and-airy-modern_cSGtJe7oTWCsurFpyhqrJg_CXQ9jYUGRP2_wh-uk2Htkg_1753199147926.png"
      />
      {/* Schema Markup */}
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbItems)} />
      {vehicles && <SchemaMarkup schema={generateOfferCatalogSchema(vehicles)} />}
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(29, 78, 216, 0.8)), url('${BASE_URL}/attached_assets/a-photograph-of-a-bright-and-airy-modern_cSGtJe7oTWCsurFpyhqrJg_CXQ9jYUGRP2_wh-uk2Htkg_1753199147926.png')"}}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Golf Cart Inventory
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Browse our extensive collection of premium electric golf carts from DENAGO and EVOLUTION. 
            Find the perfect vehicle for your needs with our advanced filtering options.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">Available Vehicles</h2>
        
        <VehicleFilters
          selectedBrand={selectedBrand}
          selectedCategory={selectedCategory}
          onBrandChange={setSelectedBrand}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <Skeleton className="w-full h-48" />
              <div className="p-6 space-y-3">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
          ))}
        </div>
      ) : vehicles && vehicles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">No Vehicles Found</h2>
          <p className="text-gray-500">
            No vehicles match your current filter criteria. Try adjusting your filters or browse all vehicles.
          </p>
        </div>
      )}
      </div>

      {/* Can't Find What You're Looking For Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8">
            Our team can help you find the perfect golf cart or place a custom order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`${BASE_URL}/contact`} className="w-full sm:w-auto">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                Contact Our Team
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto">
              Call 804-585-7301
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
