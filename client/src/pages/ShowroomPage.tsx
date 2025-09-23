import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Star, Facebook, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";

export default function ShowroomPage() {
  const locations = [
    {
      name: "TIGON Golf Carts Bayville",
      address: "155 Atlantic City Blvd, Bayville, NJ 08721",
      phone: "804-585-7301",
      coordinates: "39.9277698,-74.1748497",
      googleMapsUrl: "https://www.google.com/maps?cid=16812778070531162551",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsBayville/",
      websiteUrl: "https://tigongolfcarts.com/bayville/",
      reviewUrl: "https://g.page/r/CbfBfMWT_FLpEBM/review",
      city: "Bayville"
    },
    {
      name: "TIGON Golf Carts Waretown",
      address: "526 US-9, Waretown, NJ 08758",
      phone: "804-585-7301",
      coordinates: "",
      googleMapsUrl: "https://www.google.com/maps?cid=11595558320608622005",
      facebookUrl: "https://www.facebook.com/TigonGolfCartsWaretown/",
      websiteUrl: "https://tigongolfcarts.com/waretown/",
      reviewUrl: "https://g.page/r/CbW1M1DbsuugEBM/review",
      city: "Waretown"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="Golf Cart Showroom"
        description="Visit our TIGON Golf Cart showrooms in Bayville and Waretown, NJ for DENAGO and EVOLUTION vehicles. Call 1-844-844-6638."
        keywords="golf cart showroom, TIGON Golf Carts, Bayville NJ, Waretown NJ, Ocean County showroom"
        canonicalUrl="https://oceancountygolfcarts.com/showroom"
        ogImage="/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg"
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(29, 78, 216, 0.8)), url('/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg')"}}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Golf Cart Showroom
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Visit our TIGON Golf Cart dealership locations in Ocean County, New Jersey. 
            Experience our full lineup of DENAGO and EVOLUTION electric vehicles in person.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Today
            </Button>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-theme-primary">Our Locations</h2>
            <p className="text-xl text-gray-600">Two convenient locations serving Ocean County and surrounding areas</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 hover:border-theme-orange">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl text-theme-primary mb-2">
                        <a href={location.websiteUrl} target="_blank" rel="noopener noreferrer" 
                           className="hover:text-theme-orange transition-colors cursor-pointer">
                          {location.name}
                        </a>
                      </CardTitle>
                      <Badge className="bg-theme-orange text-white">
                        {location.city} Location
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-theme-orange mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">{location.address}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-theme-orange flex-shrink-0" />
                      <a href={`tel:${location.phone}`} className="font-medium text-theme-primary hover:text-theme-orange transition-colors">
                        {location.phone}
                      </a>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-theme-orange mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-gray-900">Business Hours</p>
                        <p className="text-gray-600 text-sm">Mon-Fri: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-600 text-sm">Sat: 9:00 AM - 5:00 PM</p>
                        <p className="text-gray-600 text-sm">Sun: CLOSED</p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3 pt-4">
                      <a href={location.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-theme-orange hover:bg-orange-600 text-white">
                          <MapPin className="w-4 h-4 mr-2" />
                          Directions
                        </Button>
                      </a>
                      <a href={`tel:${location.phone}`}>
                        <Button variant="outline" className="w-full border-theme-orange text-theme-orange hover:bg-orange-50">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now
                        </Button>
                      </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-3 pt-2">
                      <a href={location.facebookUrl} target="_blank" rel="noopener noreferrer" 
                         className="text-gray-600 hover:text-blue-600 transition-colors">
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a href={location.websiteUrl} target="_blank" rel="noopener noreferrer"
                         className="text-gray-600 hover:text-theme-orange transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a href={location.reviewUrl} target="_blank" rel="noopener noreferrer"
                         className="text-gray-600 hover:text-yellow-500 transition-colors">
                        <Star className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-theme-primary">Showroom Services</h2>
            <p className="text-xl text-gray-600">Everything you need for your golf cart experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-theme-primary">Test Drives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Experience our golf carts firsthand with comprehensive test drives on our demonstration courses.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-theme-primary">Expert Consultation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our knowledgeable staff will help you choose the perfect golf cart for your specific needs and budget.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-theme-primary">Financing Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Flexible financing solutions to make your golf cart purchase affordable and convenient.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Visit Our Showroom?
          </h2>
          <p className="text-xl mb-8">
            Stop by either of our convenient Ocean County locations to see our full inventory of DENAGO and EVOLUTION golf carts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                Schedule Visit
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100">
              <Phone className="w-5 h-5 mr-2" />
              Call Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}