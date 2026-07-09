import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { ArrowLeft, Zap, Shield, Settings, Award, Phone, MapPin, Clock, Users, Battery, Gauge, Car } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup from "@/components/SchemaMarkup";
import maxgtImage from "@assets/EVOLUTIOND6MAXGT4_1751893159004_1753135350620.jpg";

import { BASE_URL } from "@/config/urls";
export default function EvolutionD6MaxGT4() {
  return (
    <>
      <SEOHead
        title="EVOLUTION® D6 MAX GT4 — LSV / Street Legal Golf Cart"
        description="The EVOLUTION® D6 MAX GT4 reaches 25+ mph and can be equipped as a street-legal Low Speed Vehicle (LSV) for New Jersey roads. Call 1-844-844-6638."
        keywords="EVOLUTION D6 MAX GT4, LSV golf cart, street legal golf cart NJ, low speed vehicle, performance golf cart, luxury electric vehicle, high performance, EVOLUTION dealer Ocean County"
        ogImage="/attached_assets/EVOLUTIOND6MAXGT4_1751893159004_1753135350620.jpg"
      />

      <SchemaMarkup schema={{
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "EVOLUTION D6 MAX GT4 — LSV / Street Legal Golf Cart",
        "brand": { "@type": "Brand", "name": "EVOLUTION" },
        "vehicleConfiguration": "LSV",
        "description": "The EVOLUTION D6 MAX GT4 is a 4-passenger electric golf cart that reaches 25+ mph and can be equipped and registered as a street-legal Low Speed Vehicle (LSV) for New Jersey roads posted 25 mph or less.",
        "offers": {
          "@type": "Offer",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "seller": { "@type": "Organization", "name": "Ocean County Golf Carts" },
          "url": "https://oceancountygolfcarts.com/vehicles/evolution-d6-max-gt4"
        }
      }} />
      
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
              <span className="text-gray-900">D6 MAX GT4</span>
            </div>
          </div>
        </nav>

        {/* Vehicle Hero Section */}
        <section className="relative py-12 px-4 bg-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.9)), url('/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg')"}}>
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="mb-4 flex flex-wrap gap-2">
                  <Badge className="bg-theme-primary text-white px-4 py-2 text-sm font-semibold">
                    EVOLUTION® D6
                  </Badge>
                  <Badge className="bg-theme-orange text-white px-4 py-2 text-sm font-semibold">
                    LSV · Street Legal
                  </Badge>
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                  MAX GT4 <span className="block text-2xl lg:text-3xl text-theme-primary mt-2">LSV / Street Legal Golf Cart</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Experience the EVOLUTION® D6 MAX GT4 with premium performance features and luxury appointments. Reaching 25+ mph, this D6 MAX qualifies as a Low Speed Vehicle (LSV) and can be equipped and registered as a street-legal golf cart for New Jersey roads posted 25 mph or less — the ultimate in high-performance electric golf cart technology.
                </p>

                {/* Street-Legal LSV blurb */}
                <div className="mb-8 p-5 bg-blue-50 border border-blue-100 rounded-lg">
                  <h2 className="text-lg font-semibold text-theme-primary mb-2">Street-Legal LSV in New Jersey</h2>
                  <p className="text-gray-700">
                    Because the D6 MAX GT4 tops 25 mph, it can be outfitted with the DOT equipment required to register as a Low Speed Vehicle and driven legally on NJ streets posted 25 mph or less. Learn more about{" "}
                    <Link href={`${BASE_URL}/street-legal-golf-carts-nj`} className="text-theme-primary underline font-medium">street-legal golf carts in NJ</Link>{" "}and{" "}
                    <Link href={`${BASE_URL}/lsv-golf-carts-nj`} className="text-theme-primary underline font-medium">LSV golf carts in NJ</Link>.
                  </p>
                </div>
                
                {/* Key Features Grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Performance</div>
                    <div className="text-gray-900">High Speed Motor</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Range</div>
                    <div className="text-gray-900">40-55 miles</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Top Speed</div>
                    <div className="text-gray-900">25+ mph</div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg border">
                    <div className="font-semibold text-theme-primary">Seating</div>
                    <div className="text-gray-900">4 Premium Seats</div>
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
                    src={maxgtImage} 
                    alt="EVOLUTION® D6 MAX GT4 - High performance golf cart" 
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
              <h2 className="text-4xl font-bold mb-4 text-theme-primary">Performance Features</h2>
              <p className="text-xl text-gray-600">Engineered for power, built for luxury</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Zap className="w-16 h-16 text-theme-primary mx-auto mb-4" />
                  <CardTitle>High Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Advanced electric motor system for superior acceleration and hill climbing.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Premium Safety</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Enhanced safety features including advanced braking and stability control.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Settings className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Luxury Comfort</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Premium seating, advanced suspension, and luxury appointments throughout.</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Award className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <CardTitle>Elite Performance</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Top-tier performance with advanced battery technology and smart systems.</p>
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
                      <span>25+ mph</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Range:</span>
                      <span>40-55 miles</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Charging Time:</span>
                      <span>6-8 hours</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Motor Type:</span>
                      <span>High Performance AC</span>
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
                      <span>118 inches</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Overall Width:</span>
                      <span>60 inches</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Overall Height:</span>
                      <span>76 inches</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Ground Clearance:</span>
                      <span>7 inches</span>
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
                      <span>4 Adults</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Payload Capacity:</span>
                      <span>900 lbs</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Battery:</span>
                      <span>Lithium Ion</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="font-medium">Suspension:</span>
                      <span>Independent Front/Rear</span>
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
              Ready to Experience the EVOLUTION® D6 MAX GT4?
            </h2>
            <p className="text-xl mb-8">
              Contact Ocean County Golf Carts today for pricing, availability, and to schedule a performance test drive.
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
                  <CardTitle>Performance Sales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-theme-primary mb-2">804-585-7301</p>
                  <p className="text-gray-600">Speak with our performance specialists</p>
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
                    Premium delivery and pickup service available throughout Ocean County.
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