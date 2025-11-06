import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, Zap, Shield, Settings, Award, Phone, MapPin, Clock } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import roverXLImage from "@assets/DENAGONEVROVERXL_1751893047473_1753135231313.jpg";

import { BASE_URL } from "@/config/urls";
export default function DenagoEVRoverXL() {
  return (
    <>
      <SEOHead 
        title="DENAGO® EV ROVER XL"
        description="Discover the DENAGO® EV ROVER XL with ultimate electric performance and premium features. Call 1-844-844-6638."
        keywords="DENAGO EV ROVER XL, electric golf cart, premium electric vehicle, DENAGO dealer Ocean County"
        ogImage="/attached_assets/DENAGONEVROVERXL_1751893047473_1753135231313.jpg"
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
              <span className="text-gray-900">EV ROVER XL</span>
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
                    DENAGO®
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                  EV ROVER XL
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Ultimate in electric vehicle performance with advanced capabilities and premium features designed for the modern explorer.
                </p>
                
                {/* Key Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Passengers</div>
                    <div className="text-gray-900">4 Adults</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Range</div>
                    <div className="text-gray-900">Up to 50 miles</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Top Speed</div>
                    <div className="text-gray-900">25 mph</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Motor</div>
                    <div className="text-gray-900">AC Electric</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`${BASE_URL}/contact`}>
                    <Button size="lg" className="w-full sm:w-auto bg-theme-orange hover:bg-orange-600 text-white">
                      Request Quote
                    </Button>
                  </Link>
                  <Link href={`${BASE_URL}/contact`}>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      Schedule Test Drive
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img 
                    src={roverXLImage} 
                    alt="DENAGO EV ROVER XL - Premium electric golf cart" 
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Features */}
        <section className="relative py-16 px-4 bg-gray-50 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(249, 250, 251, 0.9)), url('/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg')"}}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-theme-primary">Premium Features</h2>
              <p className="text-xl text-gray-600">Advanced technology and premium comfort</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Advanced Electric System</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">High-efficiency AC motor with regenerative braking and smart battery management system.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="w-16 h-16 text-theme-primary mx-auto mb-4" />
                  <CardTitle>Safety First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">LED lighting system, seat belts, and advanced braking system for maximum safety.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Settings className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Precision Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Responsive steering and smooth acceleration for precise handling in any terrain.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <CardTitle>Premium Comfort</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Luxury seating, weather protection, and ergonomic design for maximum comfort.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl border">
              <h2 className="text-4xl font-bold text-center mb-12 text-theme-primary">Technical Specifications</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">Performance</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Top Speed:</span>
                      <span>25 mph</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Range:</span>
                      <span>Up to 50 miles</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Charging Time:</span>
                      <span>6-8 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Motor Type:</span>
                      <span>AC Electric Motor</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Battery:</span>
                      <span>Lithium-ion</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900">Dimensions & Capacity</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Seating Capacity:</span>
                      <span>4 Adults</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Payload:</span>
                      <span>800 lbs</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Ground Clearance:</span>
                      <span>6 inches</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Brakes:</span>
                      <span>Hydraulic disc brakes</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Warranty:</span>
                      <span>2-year limited warranty</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-theme-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience the DENAGO® EV ROVER XL?
            </h2>
            <p className="text-xl mb-8">
              Contact Ocean County Golf Carts today for pricing, availability, and to schedule a test drive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`${BASE_URL}/contact`}>
                <Button size="lg" className="bg-white text-theme-primary hover:bg-gray-100">
                  Contact Us Today
                </Button>
              </Link>
              <a href="tel:804-585-7301">
                <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100 hover:text-theme-primary">
                  Call 804-585-7301
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Call Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-theme-primary mb-2">804-585-7301</p>
                  <p className="text-gray-600">Speak with our DENAGO specialists</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Clock className="w-12 h-12 text-theme-primary mx-auto mb-4" />
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