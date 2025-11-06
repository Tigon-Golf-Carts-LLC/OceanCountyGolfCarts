import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/config/urls";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Vehicle } from "@shared/schema";
import SEOHead from "@/components/SEOHead";
import evolutionD5Ranger6Image from "@assets/EVOLUTIOND5RANGER6_1751893159004_1753135350623.jpg";
import evolutionD5Ranger4PlusImage from "@assets/EVOLUTIOND5RANGER4PLUS_1751893115782_1753135350622.jpg";
import evolutionForester4PlusImage from "@assets/EVOLUTIONFORESTER4PLUS_1751893159005_1753135437836.jpg";
import evolutionTurfman800Image from "@assets/EVOLUTIONTURFMAN800_1751893159006_1753135437836.jpg";
import evolutionD6MaxXT4Image from "@assets/EVOLUTIOND6MAXXT4_1751893159005_1753135437836.jpg";
import evolutionTurfman1000Image from "@assets/EVOLUTIONTURFMAN1000_1751893159006_1753135437836.jpg";

export default function EvolutionPage() {
  const { data: evolutionVehicles, isLoading } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles/brand/evolution"],
  });

  const modelCategories = [
    {
      title: "Ranger Series",
      description: "Premium recreational vehicles with LED lighting and modern styling",
      image: evolutionD5Ranger4PlusImage,
      badge: "4-6 Seats Available",
      badgeColor: "bg-ocean-blue text-white",
    },
    {
      title: "Forester Series", 
      description: "Lifted recreational vehicles designed for off-road adventures",
      image: evolutionForester4PlusImage,
      badge: "4X4 Terrain Ready",
      badgeColor: "bg-emerald-500 text-white",
    },
    {
      title: "Turfman Series",
      description: "Versatile utility vehicles for work and recreational use", 
      image: evolutionTurfman800Image,
      badge: "Utility Ready",
      badgeColor: "bg-accent-orange text-white",
    },
  ];

  const featuredModels = [
    {
      title: "D6 MaxXT Series",
      description: "The future of recreational vehicles with advanced technology, premium seating, and striking LED accents.",
      image: evolutionD6MaxXT4Image,
      price: "Starting at $24,999",
      buttonText: "View Models",
      buttonLink: "/inventory",
      buttonColor: "bg-theme-orange hover:bg-orange-600",
    },
    {
      title: "Turfman 1000", 
      description: "Heavy-duty utility vehicle with extended bed for maximum cargo capacity and versatility.",
      image: evolutionTurfman1000Image,
      price: "Contact for Pricing",
      buttonText: "Get Quote",
      buttonLink: "/contact",
      buttonColor: "bg-accent-orange hover:bg-orange-600",
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <SEOHead 
        title="EVOLUTION Golf Carts"
        description="Explore EVOLUTION Golf Carts featuring Ranger, Forester, and Turfman series with premium LED lighting. Call 1-844-844-6638."
        keywords="EVOLUTION golf carts, Ranger series, Forester series, Turfman series, electric vehicles"
        canonicalUrl="https://oceancountygolfcarts.com/brands/evolution"
        ogImage="/attached_assets/EVOLUTIOND5RANGER6_1751893159004_1753135350623.jpg"
      />
      {/* Brand Hero */}
      <div 
        className="relative bg-cover bg-center h-64 md:h-80 rounded-xl mb-8"
        style={{
          backgroundImage: `linear-gradient(rgba(14, 165, 233, 0.6), rgba(14, 165, 233, 0.6)), url(${evolutionD5Ranger6Image})`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">EVOLUTION</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Advanced recreational vehicles with innovative technology and superior comfort
            </p>
          </div>
        </div>
      </div>

      {/* Model Categories */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Evolution Model Categories</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {modelCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden shadow-lg">
              <div className="relative h-48">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Badge className={category.badgeColor}>
                  {category.badge}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Models */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Evolution Models</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {featuredModels.map((model, index) => (
            <Card key={index} className="overflow-hidden shadow-lg">
              <div className="relative h-64">
                <img
                  src={model.image}
                  alt={model.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{model.title}</h3>
                <p className="text-gray-600 mb-4">{model.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-navy">{model.price}</span>
                  <Link href={model.buttonLink}>
                    <Button className={`text-white ${model.buttonColor}`}>
                      {model.buttonText}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Current Evolution Inventory */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Current Evolution Inventory</h2>
        
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="overflow-hidden shadow-lg">
                <Skeleton className="w-full h-48" />
                <CardContent className="p-6 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-10 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : evolutionVehicles && evolutionVehicles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evolutionVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img
                    src={vehicle.images[0]}
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className={vehicle.status === "available" ? "bg-emerald-100 text-emerald-800" : "bg-yellow-100 text-yellow-800"}>
                      {vehicle.status === "available" ? "Available" : "Pre-Order"}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{vehicle.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{vehicle.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-500">
                      {vehicle.driveType.toUpperCase()} • {vehicle.seats} Seats
                    </span>
                    <span className="text-lg font-bold text-navy">
                      {formatPrice(vehicle.price)}
                    </span>
                  </div>
                  <Link href={`/vehicle/${vehicle.id}`}>
                    <Button className="w-full bg-theme-orange hover:bg-orange-600 text-white">
                      View Details
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="shadow-lg">
            <CardContent className="p-8 text-center">
              <p className="text-lg text-gray-600 mb-6">
                No Evolution vehicles are currently in our inventory. Contact us for availability updates.
              </p>
              <Link href={`${BASE_URL}/contact`}>
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  Contact for Availability
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
