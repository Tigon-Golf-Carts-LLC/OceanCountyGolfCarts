import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, Zap, Shield, Settings, Award, Phone, MapPin, Clock, Users, Battery, Gauge, Car } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import rangerImage from "@assets/EVOLUTIOND5RANGER6PLUS_1751893159004_1753135350619.jpg";

import { BASE_URL } from "@/config/urls";
export default function EvolutionD5Ranger6Plus() {
  return (
    <>
      <SEOHead 
        title="EVOLUTION® D5 RANGER 6 PLUS"
        description="Discover the EVOLUTION® D5 RANGER 6 PLUS with ultimate electric performance and premium 6-passenger seating. Call 1-844-844-6638."
        keywords="EVOLUTION D5 RANGER 6 PLUS, electric golf cart, premium electric vehicle, EVOLUTION dealer Ocean County"
        ogImage="/attached_assets/EVOLUTIOND5RANGER6PLUS_1751893159004_1753135350619.jpg"
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
              <a href={`${BASE_URL}/evolution`} className="text-theme-primary hover:text-blue-800">EVOLUTION</a>
              <span>→</span>
              <span className="text-gray-900">D5 RANGER 6 PLUS</span>
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
                    EVOLUTION®
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                  D5 RANGER 6 PLUS
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Discover the EVOLUTION® D5 RANGER 6 PLUS lineup and its unique features. Advanced electric vehicle technology meets premium comfort and performance.
                </p>
                
                {/* Key Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Passengers</div>
                    <div className="text-gray-900">6 Adults</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Range</div>
                    <div className="text-gray-900">30-45 miles</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Top Speed</div>
                    <div className="text-gray-900">19 mph</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Motor</div>
                    <div className="text-gray-900">Electric AC Motor</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`${BASE_URL}/contact`}>
                    <Button size="lg" className="w-full sm:w-auto bg-theme-primary hover:bg-theme-primary text-white">
                      Get Quote
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
                    src={rangerImage} 
                    alt="EVOLUTION® D5 RANGER 6 PLUS - Premium electric golf cart" 
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
                  <Zap className="w-16 h-16 text-theme-primary mx-auto mb-4" />
                  <CardTitle>Electric Power</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Eco-friendly electric motor for quiet, efficient operation with zero emissions.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Safety First</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Advanced safety features and reliable braking systems for maximum protection.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Settings className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Low Maintenance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Minimal maintenance requirements with long-lasting components for reliable operation.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <CardTitle>Eco-Friendly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Zero emissions for environmentally conscious transportation solution.</p>
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
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                    <Gauge className="w-6 h-6" />
                    Performance
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Top Speed:</span>
                      <span>19 mph</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Range:</span>
                      <span>30-45 miles</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Charging Time:</span>
                      <span>6-8 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Motor Type:</span>
                      <span>Electric AC Motor</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                    <Car className="w-6 h-6" />
                    Dimensions
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Overall Length:</span>
                      <span>158 inches</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Overall Width:</span>
                      <span>61 inches</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Overall Height:</span>
                      <span>75 inches</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Ground Clearance:</span>
                      <span>6.5 inches</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    Capacity & Features
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Seating Capacity:</span>
                      <span>6 Adults</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Payload Capacity:</span>
                      <span>1,200 lbs</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Towing Capacity:</span>
                      <span>1,500 lbs</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Turning Radius:</span>
                      <span>11 feet</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Standard Features */}
        <section className="relative py-16 px-4 bg-gray-50 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(249, 250, 251, 0.9)), url('/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg')"}}>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-theme-primary">Standard Features</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Comfort & Convenience</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Premium vinyl seats</li>
                  <li>• Fold-down windshield</li>
                  <li>• Weather protection package</li>
                  <li>• Cup holders</li>
                  <li>• Storage compartments</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Safety & Performance</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• LED headlights and taillights</li>
                  <li>• Hydraulic brakes</li>
                  <li>• Self-adjusting brakes</li>
                  <li>• Heavy-duty suspension</li>
                  <li>• Electronic throttle control</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Drive System</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• AC electric motor</li>
                  <li>• Maintenance-free battery</li>
                  <li>• On-board charger</li>
                  <li>• Digital instrumentation</li>
                  <li>• Forward/reverse switch</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-theme-primary text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience the EVOLUTION® D5 RANGER 6 PLUS?
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
                  <Phone className="w-12 h-12 text-theme-primary mx-auto mb-4" />
                  <CardTitle>Call Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-theme-primary mb-2">804-585-7301</p>
                  <p className="text-gray-600">Speak with our EVOLUTION specialists</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
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