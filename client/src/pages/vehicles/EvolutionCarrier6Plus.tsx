import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, Zap, Shield, Settings, Award, Phone, MapPin, Clock, Users, Battery, Gauge, Car } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import vehicleImage from "@assets/EVOLUTIONCARRIER6PLUS_1751893115778_1753135231314.jpg";

export default function EvolutionCarrier6Plus() {
  return (
    <>
      <SEOHead 
        title="EVOLUTION® Carrier 6 Plus"
        description="Discover the EVOLUTION® Carrier 6 Plus with enhanced cargo capacity and utility features for work. Call 1-844-844-6638."
        keywords="EVOLUTION Carrier 6 Plus, utility golf cart, cargo capacity, 6-passenger, work vehicle, EVOLUTION dealer Ocean County"
        ogImage="/attached_assets/EVOLUTIONCARRIER6PLUS_1751893115778_1753135231314.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Breadcrumb */}
        <nav className="py-4 px-4 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <a href="/" className="text-theme-primary hover:text-blue-800">Home</a>
              <span>→</span>
              <a href="/inventory" className="text-theme-primary hover:text-blue-800">Vehicles</a>
              <span>→</span>
              <a href="/evolution" className="text-theme-primary hover:text-blue-800">EVOLUTION</a>
              <span>→</span>
              <span className="text-gray-900">Carrier 6 Plus</span>
            </div>
          </div>
        </nav>

        {/* Vehicle Hero Section */}
        <section className="relative py-12 px-4 bg-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.9)), url('/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg')"}}>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-4">
                  <Badge className="bg-theme-primary text-white px-4 py-2 text-sm font-semibold">
                    EVOLUTION® CARRIER
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                  Carrier 6 Plus
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Six-passenger carrier with enhanced cargo capacity and utility features for work and recreation. The perfect balance of passenger comfort and utility functionality.
                </p>
                
                {/* Key Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Cargo Ready</div>
                    <div className="text-gray-900">Enhanced Storage</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Range</div>
                    <div className="text-gray-900">30-40 miles</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Top Speed</div>
                    <div className="text-gray-900">20 mph</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Seating</div>
                    <div className="text-gray-900">6 Passengers</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="w-full sm:w-auto bg-theme-orange hover:bg-orange-600 text-white">
                      Get Quote
                    </Button>
                  </Link>
                  <a href="https://tigongolfcarts.com/apply-for-financing/" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-theme-orange text-theme-orange hover:bg-orange-50">
                      Finance Options
                    </Button>
                  </a>
                  <a href="https://tigongolfcarts.com/evolution/carrier/6-plus/" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="w-full sm:w-auto bg-theme-orange hover:bg-orange-600 text-white">
                      View More Details
                    </Button>
                  </a>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src={vehicleImage} 
                    alt="EVOLUTION Carrier 6 Plus Utility Golf Cart"
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

        {/* Price & Availability */}
        <section className="py-8 px-4 bg-green-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <div className="text-3xl font-bold text-theme-primary mb-2">$13,995</div>
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

        {/* Features & Specifications */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Utility Features</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-theme-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Cargo Ready</h3>
                      <p className="text-gray-600">Enhanced cargo capacity with utility features designed for work and recreational activities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-theme-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">6-Passenger</h3>
                      <p className="text-gray-600">Comfortable seating for six passengers with practical design for utility and transport needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Settings className="w-6 h-6 text-theme-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Utility Features</h3>
                      <p className="text-gray-600">Purpose-built utility features and storage solutions for commercial and recreational use.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-theme-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Work Ready</h3>
                      <p className="text-gray-600">Durable construction and reliable performance for demanding work environments and applications.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specifications */}
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
                        <span className="text-gray-900">20 mph</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <Battery className="w-5 h-5 text-theme-primary" />
                          <span className="font-medium">Range</span>
                        </div>
                        <span className="text-gray-900">30-40 miles</span>
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
                        <span className="text-gray-900">Deep Cycle</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-theme-primary" />
                          <span className="font-medium">Charging Time</span>
                        </div>
                        <span className="text-gray-900">8-10 hours</span>
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

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Work and Recreation
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact Ocean County Golf Carts today to schedule a test drive or get a personalized quote for your EVOLUTION Carrier 6 Plus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
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