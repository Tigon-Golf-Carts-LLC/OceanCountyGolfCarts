import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wrench, Battery, Paintbrush, Shield, Clock, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";

export default function NewServicesPage() {
  const services = [
    {
      icon: Wrench,
      title: "Maintenance & Repair",
      description: "Complete maintenance and repair services for all golf cart brands",
      features: ["Brake service", "Suspension repair", "Engine diagnostics", "Electrical troubleshooting"],
      price: "Starting at $85/hour"
    },
    {
      icon: Battery,
      title: "Battery Services",
      description: "Battery testing, replacement, and maintenance services",
      features: ["Battery testing", "New battery installation", "Battery maintenance", "Charging system repair"],
      price: "Starting at $50"
    },
    {
      icon: Paintbrush,
      title: "Custom Modifications",
      description: "Personalize your golf cart with custom modifications and accessories",
      features: ["Custom paint jobs", "Lift kits", "Custom seating", "Lighting upgrades"],
      price: "Quote on request"
    },
    {
      icon: Shield,
      title: "Warranty Service",
      description: "Authorized warranty service for all major brands",
      features: ["Factory warranty work", "Extended warranty options", "Certified technicians", "OEM parts"],
      price: "Covered by warranty"
    }
  ];

  return (
    <>
      <SEOHead 
        title="Golf Cart Services & Repair | Ocean County Golf Carts"
        description="Professional golf cart services including maintenance, repair, battery service, and custom modifications. Serving Ocean County, NJ with certified technicians."
        keywords="golf cart service, golf cart repair, battery replacement, maintenance, Ocean County"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section 
          className="relative text-white py-32"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.85), rgba(14, 46, 85, 0.85)), url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&h=800')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Professional Golf Cart Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
                Keep your golf cart running smoothly with our comprehensive service offerings. 
                From routine maintenance to major repairs, our certified technicians have you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                    Schedule Service
                  </Button>
                </Link>
                <a href="tel:804-585-7301">
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-ocean-blue">
                    Call for Emergency Service
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg text-gray-600">Comprehensive golf cart services for all makes and models</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <service.icon className="w-8 h-8 text-green-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <Badge variant="outline">{service.price}</Badge>
                      </div>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Service Center?</h2>
              <p className="text-lg text-gray-600">Experience the difference of professional golf cart service</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Wrench className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certified Technicians</h3>
                <p className="text-gray-600">Factory-trained technicians with years of experience in golf cart repair and maintenance.</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Turnaround</h3>
                <p className="text-gray-600">Most repairs completed within 24-48 hours. Emergency service available for urgent needs.</p>
              </div>

              <div className="text-center">
                <div className="p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">All work backed by our comprehensive warranty. We stand behind our repairs and service.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Schedule Your Service?
            </h2>
            <p className="text-xl mb-8">
              Contact us today to schedule your golf cart service or request a quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Schedule Service Online
                </Button>
              </Link>
              <a href="tel:804-585-7301">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
                  Call 804-585-7301
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>Service Department</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-green-600 mb-2">804-585-7301</p>
                  <p className="text-gray-600">Direct line to our service team</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Service Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-700">
                    <p>Monday-Friday: 8AM-5PM</p>
                    <p>Saturday: 9AM-3PM</p>
                    <p>Sunday: Emergency Only</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Mobile Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    On-site service available throughout Ocean County for major repairs and maintenance.
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