import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, Zap, Shield, Settings, Award, Phone, MapPin, Clock, Users, Battery, Gauge, Car } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import vehicleImage from "@assets/DENAGONEVNOMADXL_1751893047472_1753135231313.jpg";

import { BASE_URL } from "@/config/urls";
export default function DenagoEvNomadXL() {
  return (
    <>
      <SEOHead 
        title="DENAGO® EV Nomad XL"
        description="Discover the DENAGO® EV Nomad XL with extended seating and enhanced storage for adventure groups. Call 1-844-844-6638."
        keywords="DENAGO EV Nomad XL, adventure electric vehicle, 6-passenger golf cart, DENAGO dealer Ocean County"
        ogImage="/attached_assets/DENAGONEVNOMADXL_1751893047472_1753135231313.jpg"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Breadcrumb */}
        <nav className="py-4 px-4 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <a href={`${BASE_URL}/`} className="text-theme-primary hover:text-blue-800">Home</a>
              <span>→</span>
              <a href={`${BASE_URL}/inventory`} className="text-theme-primary hover:text-blue-800">Vehicles</a>
              <span>→</span>
              <a href={`${BASE_URL}/denago`} className="text-theme-primary hover:text-blue-800">DENAGO</a>
              <span>→</span>
              <span className="text-gray-900">EV Nomad XL</span>
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
                    DENAGO® EV
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                  Nomad XL
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Extended version of the popular Nomad with enhanced storage and seating capacity for larger adventures. Perfect for group exploration and extended outdoor activities.
                </p>
                
                {/* Key Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Adventure Ready</div>
                    <div className="text-gray-900">All-Terrain</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Range</div>
                    <div className="text-gray-900">45-55 miles</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Top Speed</div>
                    <div className="text-gray-900">25 mph</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Seating</div>
                    <div className="text-gray-900">6 Passengers</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`${BASE_URL}/contact`}>
                    <Button size="lg" className="w-full sm:w-auto bg-theme-orange hover:bg-orange-600 text-white">
                      Get Quote
                    </Button>
                  </Link>
                  <a href="https://tigongolfcarts.com/apply-for-financing/" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto border-theme-orange text-theme-orange hover:bg-orange-50">
                      Finance Options
                    </Button>
                  </a>
                  <a href="https://tigongolfcarts.com/denago-ev/nomad-xl/" target="_blank" rel="noopener noreferrer">
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
                    alt="DENAGO EV Nomad XL Electric Vehicle"
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
        <section className="py-8 px-4 bg-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <div className="text-3xl font-bold text-theme-primary mb-2">$15,995</div>
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
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Premium Features</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Zap className="w-6 h-6 text-theme-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Extended Seating</h3>
                      <p className="text-gray-600">Comfortably seats 6 passengers with enhanced storage capacity for extended adventures.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-theme-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Adventure Ready</h3>
                      <p className="text-gray-600">Built for outdoor exploration with rugged design and all-terrain capabilities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Settings className="w-6 h-6 text-theme-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Enhanced Storage</h3>
                      <p className="text-gray-600">Expanded storage compartments for gear and equipment on longer journeys.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Award className="w-6 h-6 text-theme-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Group Ready</h3>
                      <p className="text-gray-600">Perfect for larger groups with extended range and enhanced comfort features.</p>
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
                        <span className="text-gray-900">25 mph</span>
                      </div>
                      <div className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div className="flex items-center gap-3">
                          <Battery className="w-5 h-5 text-theme-primary" />
                          <span className="font-medium">Range</span>
                        </div>
                        <span className="text-gray-900">45-55 miles</span>
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
                        <span className="text-gray-900">Lithium Ion</span>
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

        {/* Call to Action */}
        <section className="py-16 px-4 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact Ocean County Golf Carts today to schedule a test drive or get a personalized quote for your DENAGO EV Nomad XL.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`${BASE_URL}/contact`}>
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
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