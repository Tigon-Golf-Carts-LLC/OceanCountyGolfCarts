import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { Zap, Shield, Settings, Award, Phone, MapPin, Clock, Users, Battery, Gauge, Car } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import vehicleImage from "@assets/EVOLUTIOND6MAXGT6_1751893159004_1753135350620.jpg";

import { BASE_URL } from "@/config/urls";
export default function EvolutionD6MaxGT6() {
  return (
    <>
      <SEOHead
        title="EVOLUTION® D6 Max GT6 — LSV / Street Legal Golf Cart"
        description="The EVOLUTION® D6 Max GT6 reaches 25+ mph and can be equipped as a street-legal Low Speed Vehicle (LSV) for New Jersey roads. Call 1-844-844-6638."
        keywords="EVOLUTION D6 Max GT6, LSV golf cart, street legal golf cart NJ, low speed vehicle, high performance golf cart, 6-passenger, luxury features, maximum power, EVOLUTION dealer Ocean County"
        ogImage="/attached_assets/EVOLUTIOND6MAXGT6_1751893159004_1753135350620.jpg"
      />

      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "EVOLUTION D6 Max GT6 — LSV / Street Legal Golf Cart",
        "brand": { "@type": "Brand", "name": "EVOLUTION" },
        "vehicleConfiguration": "LSV",
        "description": "The EVOLUTION D6 Max GT6 is a 6-passenger electric golf cart that reaches 25+ mph and can be equipped and registered as a street-legal Low Speed Vehicle (LSV) for New Jersey roads posted 25 mph or less.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": { "@type": "Organization", "name": "Ocean County Golf Carts" },
          "url": "https://oceancountygolfcarts.com/vehicles/evolution-d6-max-gt6"
        }
      }} />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <nav className="py-4 px-4 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <a href={`${BASE_URL}/`} className="text-theme-primary hover:text-blue-800">Home</a>
              <span>→</span>
              <a href={`${BASE_URL}/inventory`} className="text-theme-primary hover:text-blue-800">Vehicles</a>
              <span>→</span>
              <a href={`${BASE_URL}/evolution`} className="text-theme-primary hover:text-blue-800">EVOLUTION</a>
              <span>→</span>
              <span className="text-gray-900">D6 Max GT6</span>
            </div>
          </div>
        </nav>

        <section className="relative py-12 px-4 bg-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.9)), url('/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg')"}}>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge className="bg-theme-primary text-white px-4 py-2 text-sm font-semibold">
                    EVOLUTION® D6 MAX
                  </Badge>
                  <Badge className="bg-theme-orange text-white px-4 py-2 text-sm font-semibold">
                    LSV · Street Legal
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                  Max GT6 <span className="block text-2xl lg:text-3xl text-theme-primary mt-2">LSV / Street Legal Golf Cart</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Six-passenger high-performance golf cart with maximum power and luxury features. Reaching 25+ mph, this D6 MAX qualifies as a Low Speed Vehicle (LSV) and can be equipped and registered as a street-legal golf cart for New Jersey roads posted 25 mph or less — the ultimate combination of performance, comfort, and style.
                </p>

                {/* Street-Legal LSV blurb */}
                <div className="mb-8 p-5 bg-blue-50 border border-blue-100 rounded-lg">
                  <h2 className="text-lg font-semibold text-theme-primary mb-2">Street-Legal LSV in New Jersey</h2>
                  <p className="text-gray-700">
                    Because the D6 Max GT6 tops 25 mph, it can be outfitted with the DOT equipment required to register as a Low Speed Vehicle and driven legally on NJ streets posted 25 mph or less. Learn more about{" "}
                    <Link href={`${BASE_URL}/street-legal-golf-carts-nj`} className="text-theme-primary underline font-medium">street-legal golf carts in NJ</Link>{" "}and{" "}
                    <Link href={`${BASE_URL}/lsv-golf-carts-nj`} className="text-theme-primary underline font-medium">LSV golf carts in NJ</Link>.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">High Performance</div>
                    <div className="text-gray-900">Maximum Power</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Range</div>
                    <div className="text-gray-900">45-60 miles</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">6-Passenger</div>
                    <div className="text-gray-900">Luxury Seating</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Luxury Features</div>
                    <div className="text-gray-900">Premium Comfort</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`${BASE_URL}/contact`}>
                    <Button size="lg" className="w-full sm:w-auto bg-theme-primary hover:bg-theme-primary text-white">
                      Get Quote
                    </Button>
                  </Link>
                  <a href="https://tigongolfcarts.com/apply-for-financing/" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-theme-orange text-theme-primary hover:bg-orange-50">
                      Finance Options
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src={vehicleImage} 
                    alt="EVOLUTION D6 Max GT6 High Performance Golf Cart"
                    className="w-full h-auto rounded-lg shadow-2xl"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-theme-primary text-white px-3 py-1 text-sm font-semibold">
                      NEW
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 px-4 bg-green-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <div className="text-3xl font-bold text-theme-primary mb-2">$18,995</div>
                <div className="text-gray-600">MSRP • Financing Available</div>
              </div>
              <div className="mt-4 md:mt-0 flex gap-4">
                <div className="text-center">
                  <div className="text-sm text-gray-600">Availability</div>
                  <div className="font-semibold text-theme-primary">In Stock</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-600">Delivery</div>
                  <div className="font-semibold text-gray-900">2-3 Weeks</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Performance Features</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-theme-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">High Performance</h3>
                      <p className="text-gray-600">Maximum power and performance with high-performance lithium battery technology for superior speed and range.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-theme-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">6-Passenger</h3>
                      <p className="text-gray-600">Spacious luxury seating for six passengers with premium comfort and high-end appointments.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Settings className="w-6 h-6 text-theme-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Luxury Features</h3>
                      <p className="text-gray-600">Premium luxury features and high-end appointments for the ultimate golf cart experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-theme-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Maximum Power</h3>
                      <p className="text-gray-600">Industry-leading power and performance with cutting-edge technology and premium engineering.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Specifications</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <Gauge className="w-5 h-5 text-theme-primary" />
                          <span className="font-medium">Top Speed</span>
                        </div>
                        <span className="text-gray-900">25+ mph</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <Battery className="w-5 h-5 text-theme-primary" />
                          <span className="font-medium">Range</span>
                        </div>
                        <span className="text-gray-900">45-60 miles</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <Users className="w-5 h-5 text-theme-primary" />
                          <span className="font-medium">Seating Capacity</span>
                        </div>
                        <span className="text-gray-900">6 passengers</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <Car className="w-5 h-5 text-theme-primary" />
                          <span className="font-medium">Battery Type</span>
                        </div>
                        <span className="text-gray-900">High Performance Lithium</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-theme-primary" />
                          <span className="font-medium">Charging Time</span>
                        </div>
                        <span className="text-gray-900">6-8 hours</span>
                      </div>
                      <div className="flex items-center justify-between py-3">
                        <div className="flex items-center gap-3">
                          <Settings className="w-5 h-5 text-theme-primary" />
                          <span className="font-medium">Payload</span>
                        </div>
                        <span className="text-gray-900">1,200 lbs</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Maximum Performance, Maximum Luxury
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact Ocean County Golf Carts today for your EVOLUTION D6 Max GT6.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`${BASE_URL}/contact`}>
                <Button size="lg" className="bg-theme-primary hover:bg-theme-primary text-white">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Quote Today
                </Button>
              </Link>
              <a href="https://tigongolfcarts.com/apply-for-financing/" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100 hover:text-gray-900">
                  <MapPin className="w-5 h-5 mr-2" />
                  Visit Showroom
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}