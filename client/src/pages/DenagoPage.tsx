import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function DenagoPage() {
  const features = [
    "Advanced suspension systems",
    "High-performance electric motors",
    "Premium interior materials",
    "Extended warranty coverage",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <SEOHead 
        title="DENAGO"
        description="Premium DENAGO recreational vehicles with advanced suspension systems and high-performance electric motors. Call 1-844-844-6638."
        keywords="DENAGO golf carts, premium recreational vehicles, electric vehicles, Ocean County"
        canonicalUrl="https://oceancountygolfcarts.com/brands/denago"
        ogImage="https://pixabay.com/get/g2710ff58f7ab50725c0d101c0fcdfb7325183aedf06d94408c107ce4e8347053f40265e8288a3384c4f39deb14c0b7525de8e49901f584f95ec44a2bde1953de_1280.jpg"
      />
      {/* Brand Hero */}
      <div 
        className="relative bg-cover bg-center h-64 md:h-80 rounded-xl mb-8"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.6), rgba(30, 58, 138, 0.6)), url('https://pixabay.com/get/g2710ff58f7ab50725c0d101c0fcdfb7325183aedf06d94408c107ce4e8347053f40265e8288a3384c4f39deb14c0b7525de8e49901f584f95ec44a2bde1953de_1280.jpg')`
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">DENAGO</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Premium recreational vehicles engineered for performance and built to last
            </p>
          </div>
        </div>
      </div>

      {/* Brand Information */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About DENAGO</h2>
          <p className="text-gray-600 mb-4">
            DENAGO represents the pinnacle of recreational vehicle engineering, combining cutting-edge 
            technology with exceptional craftsmanship. Each vehicle is designed to deliver superior 
            performance across all terrains.
          </p>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-600">
                <Check className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <img
            src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
            alt="DENAGO specifications"
            className="rounded-xl shadow-lg w-full h-auto"
          />
        </div>
      </div>

      {/* Available Models */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Available DENAGO Models</h2>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-center">Coming Soon</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-600 text-center py-8 mb-6">
              DENAGO models coming soon to our inventory. Contact us for pre-order information 
              and availability updates.
            </p>
            <div className="text-center">
              <Link href="/contact">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                  Contact for Availability
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
