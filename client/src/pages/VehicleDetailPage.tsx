import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/config/urls";
import { useParams, Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { Vehicle } from "@shared/schema";
import SchemaMarkup, { 
  generateProductSchema,
  generateBreadcrumbSchema
} from "@/components/SchemaMarkup";

export default function VehicleDetailPage() {
  const { id } = useParams<{ id: string }>();

  const { data: vehicle, isLoading, error } = useQuery<Vehicle>({
    queryKey: ["/api/vehicles", id],
    queryFn: async () => {
      const response = await fetch(`/api/vehicles/${id}`);
      if (!response.ok) {
        throw new Error("Vehicle not found");
      }
      return response.json();
    },
    enabled: !!id,
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const getStatusBadge = (inStock: boolean, isNew: boolean) => {
    if (isNew) {
      return <Badge className="bg-emerald-100 text-emerald-800">NEW</Badge>;
    }
    if (inStock) {
      return <Badge className="bg-blue-100 text-blue-800">In Stock</Badge>;
    }
    return <Badge className="bg-gray-100 text-gray-800">Out of Stock</Badge>;
  };

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-red-600 mb-4">Vehicle Not Found</h1>
          <p className="text-gray-600 mb-6">
            The vehicle you're looking for doesn't exist or has been removed.
          </p>
          <Link href={`${BASE_URL}/inventory`}>
            <Button className="bg-theme-orange hover:bg-orange-600 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Inventory
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Skeleton className="h-8 w-40 mb-6" />
        <div className="grid md:grid-cols-2 gap-8">
          <Skeleton className="w-full h-96 rounded-lg" />
          <div className="space-y-4">
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-32 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!vehicle) {
    return null;
  }

  const breadcrumbItems = [
    { name: "Home", url: "https://oceancountygolfcarts.com" },
    { name: "Inventory", url: "https://oceancountygolfcarts.com/inventory" },
    { name: vehicle.name, url: `https://oceancountygolfcarts.com/vehicles/${vehicle.id}` }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Schema Markup */}
      <SchemaMarkup schema={generateProductSchema(vehicle)} />
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbItems)} />
      <Link href={`${BASE_URL}/inventory`}>
        <Button variant="ghost" className="mb-6 text-ocean-blue hover:text-blue-600">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Inventory
        </Button>
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Vehicle Image */}
        <div className="relative">
          <img
            src={vehicle.images[0]}
            alt={vehicle.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-4 right-4">
            {getStatusBadge(vehicle.inStock, vehicle.isNew)}
          </div>
        </div>

        {/* Vehicle Information */}
        <div>
          <div className="mb-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              {vehicle.name}
            </h1>
            <p className="text-xl text-gray-600 mb-4">{vehicle.description}</p>
            <div className="text-3xl font-bold text-navy mb-4">
              {formatPrice(vehicle.price)}
            </div>
          </div>

          {/* Quick Specs */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-navy">{vehicle.specifications.seatingCapacity}</div>
              <div className="text-sm text-gray-600">Seats</div>
            </div>
            <div className="text-center bg-gray-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-navy">{vehicle.brand.toUpperCase()}</div>
              <div className="text-sm text-gray-600">Brand</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <Link href={`${BASE_URL}/contact`}>
              <Button size="lg" className="w-full bg-theme-orange hover:bg-orange-600 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Schedule Test Drive
              </Button>
            </Link>
            <Link href={`${BASE_URL}/contact`}>
              <Button size="lg" variant="outline" className="w-full border-accent-orange text-accent-orange hover:bg-accent-orange hover:text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Get Financing Quote
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Detailed Information */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Features */}
        <Card>
          <CardHeader>
            <CardTitle>Features</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {vehicle.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-ocean-blue rounded-full mr-3 flex-shrink-0"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Specifications */}
        <Card>
          <CardHeader>
            <CardTitle>Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {Object.entries(vehicle.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="text-gray-600">{key}:</span>
                  <span className="font-medium text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Contact Section */}
      <Card className="mt-8">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Interested in this vehicle?
          </h3>
          <p className="text-gray-600 mb-6">
            Contact our sales team to schedule a test drive, discuss financing options, or get more information about this {vehicle.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`${BASE_URL}/contact`}>
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                <Phone className="w-4 h-4 mr-2" />
                Contact Sales Team
              </Button>
            </Link>
            <Link href={`${BASE_URL}/inventory`}>
              <Button size="lg" variant="outline" className="border-navy text-navy hover:bg-navy hover:text-white">
                View More Vehicles
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
