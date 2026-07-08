import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BASE_URL } from "@/config/urls";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wrench, Battery, Paintbrush, Shield, Clock, CheckCircle, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, {
  generateLocalBusinessSchema,
  generateRepairServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema
} from "@/components/SchemaMarkup";
import serviceHeroImage from "@assets/Ocean County New Jersey Golf Carts (3)_1756131126750.png";

const serviceFaqs = [
  {
    question: "Do you offer mobile golf cart repair near me?",
    answer:
      "Yes. We provide on-site, mobile golf cart repair throughout Ocean County for many major repairs and routine maintenance, so you don't have to transport your cart. Call 804-585-7301 to schedule mobile service in your town."
  },
  {
    question: "How much does golf cart repair cost?",
    answer:
      "Diagnostic and repair labor starts at $85/hour, and battery services start at $50. Custom modifications are quoted on request. We provide an estimate before any work begins."
  },
  {
    question: "What golf cart brands do you service?",
    answer:
      "Our certified technicians service all major golf cart brands, including DENAGO, EVOLUTION, Club Car, EZ-GO, Yamaha, and more — using genuine OEM parts and honoring factory warranties where applicable."
  },
  {
    question: "How long does a typical golf cart repair take?",
    answer:
      "Most repairs are completed within 24–48 hours. Emergency service is available for urgent needs. Battery testing and many maintenance items can be handled same-day."
  },
  {
    question: "What areas do you cover for golf cart service?",
    answer:
      "We serve every Ocean County community, including Toms River, Brick, Lakewood, Point Pleasant, Seaside, Long Beach Island, Barnegat, Stafford, Manchester, Berkeley, and all surrounding towns."
  }
];

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
        title="Golf Cart Service & Repair in New Jersey | Ocean County Golf Carts"
        description="New Jersey golf cart service & repair — battery, brakes, tires, diagnostics & mobile golf cart repair NJ. Certified techs, all brands. Call 804-585-7301."
        ogImage="/attached_assets/Ocean County New Jersey Golf Carts (3)_1756131126750.png"
        keywords="new jersey golf cart service, golf cart repair nj, mobile golf cart repair nj, golf cart battery service nj, golf cart service Ocean County, golf cart maintenance NJ"
        canonicalUrl="https://oceancountygolfcarts.com/services"
      />
      <SchemaMarkup schema={generateLocalBusinessSchema()} />
      <SchemaMarkup schema={generateRepairServiceSchema()} />
      <SchemaMarkup schema={generateFAQSchema(serviceFaqs)} />
      <SchemaMarkup schema={generateBreadcrumbSchema([
        { name: "Home", url: "https://oceancountygolfcarts.com" },
        { name: "Golf Cart Services", url: "https://oceancountygolfcarts.com/services" }
      ])} />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section 
          className="relative text-white py-32"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.75), rgba(14, 46, 85, 0.75)), url('${serviceHeroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                Golf Cart Service &amp; Repair in New Jersey
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
                Certified New Jersey golf cart service and repair for every make and model —
                from battery replacement and electrical diagnostics to brakes, tires, and annual tune-ups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`${BASE_URL}/contact`}>
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

        {/* NJ Service Intro + Structured Menu */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-lg text-gray-700 mb-4">
              Ocean County Golf Carts is your trusted source for <strong>New Jersey golf cart service</strong>.
              Our certified technicians handle everything your cart needs to run its best — battery testing
              and replacement, electrical diagnostics, brake and tire service, suspension repair, software
              updates, and annual tune-ups. We service all major brands, including Evolution, Denago, Club
              Car, EZ-GO, and Yamaha, using genuine OEM parts and honoring factory warranties where they apply.
            </p>
            <p className="text-lg text-gray-700 mb-10">
              Need <strong>golf cart repair NJ</strong> drivers can count on? We offer fast turnaround —
              most repairs are completed within 24–48 hours — plus mobile golf cart repair throughout
              Ocean County, so many jobs can be handled without you ever transporting your cart. Call
              804-585-7301 to schedule service or request a quote.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Golf Cart Battery Service NJ</h3>
                <p className="text-gray-700">
                  Battery testing, new lithium and lead-acid battery installation, charger diagnostics, and
                  full charging-system repair. Battery services start at $50, and most can be completed the
                  same day.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Electric Golf Cart Diagnostics</h3>
                <p className="text-gray-700">
                  Computerized electrical troubleshooting for controllers, wiring, solenoids, and motor
                  issues. We pinpoint the problem, explain it clearly, and provide an estimate before any
                  work begins.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Golf Cart Brake &amp; Tire Service</h3>
                <p className="text-gray-700">
                  Brake inspection and repair, tire replacement, rotation, and alignment to keep your cart
                  safe and smooth. Labor starts at $85/hour with a typical 24–48 hour turnaround.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Golf Cart Repair NJ</h3>
                <p className="text-gray-700">
                  On-site mobile golf cart repair throughout Ocean County for many major repairs and routine
                  maintenance — so you don't have to transport your cart. Emergency service is available for
                  urgent needs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Annual Golf Cart Tune-Up</h3>
                <p className="text-gray-700">
                  A complete seasonal inspection covering battery health, brakes, tires, electrical, and
                  fluids to keep your cart reliable year-round. Ideal before shore season each spring.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Modifications &amp; Warranty Work</h3>
                <p className="text-gray-700">
                  Lift kits, custom seating, lighting, and paint, plus authorized warranty service for major
                  brands. Modifications are quoted on request.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 bg-gray-50">
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

        {/* Service Area + Internal Links */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Golf Cart Repair Across Ocean County</h2>
            <p className="text-lg text-gray-600 mb-6">
              From Toms River and Brick to Point Pleasant, Seaside, Long Beach Island, Barnegat, and
              Stafford, our mobile golf cart repair team serves every Ocean County community. Certified
              technicians come to you for battery service, brake and suspension repair, electrical
              diagnostics, and warranty work.
            </p>
            <p className="text-lg text-gray-600">
              Need a new cart instead of a repair? Shop{" "}
              <Link href={`${BASE_URL}/golf-carts-for-sale`} className="text-green-700 underline hover:text-green-900">
                golf carts for sale in Ocean County
              </Link>{" "}
              or reserve a{" "}
              <Link href={`${BASE_URL}/rentals`} className="text-green-700 underline hover:text-green-900">
                golf cart rental
              </Link>
              .
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">
              Golf Cart Service &amp; Repair FAQs
            </h2>
            <div className="space-y-6">
              {serviceFaqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
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
              <Link href={`${BASE_URL}/contact`}>
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