import { Link } from "wouter";
import { BASE_URL } from "@/config/urls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Zap, Car, Users, ShieldCheck, Phone, MapPin, Percent } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Vehicle } from "@shared/schema";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, {
  generateSalesLocalBusinessSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema
} from "@/components/SchemaMarkup";

const salesFaqs = [
  {
    question: "How much do golf carts for sale near me cost in Ocean County, NJ?",
    answer:
      "New electric golf carts at Ocean County Golf Carts typically range from about $9,000 for 2-passenger models up to $17,000+ for premium 6-passenger and lifted LSV carts. Pricing depends on seating, battery (lithium vs. lead-acid), and street-legal features. We offer 0% financing on select models."
  },
  {
    question: "Do you sell street-legal (LSV) golf carts near me?",
    answer:
      "Yes. We sell street-legal Low Speed Vehicles (LSVs) that meet New Jersey requirements, including seat belts, headlights, turn signals, mirrors, a windshield, and a 17-digit VIN. LSV golf carts can be registered and insured to drive on Ocean County roads posted at 25 mph or less."
  },
  {
    question: "What is the difference between a golf cart and an LSV?",
    answer:
      "A standard golf cart tops out around 15–19 mph and is not street-legal. An LSV (Low Speed Vehicle) reaches 20–25 mph and includes DOT-required safety equipment, so it can be titled, registered, and insured for public roads in New Jersey."
  },
  {
    question: "Do you have electric golf carts for sale near me?",
    answer:
      "All of the golf carts we sell are electric. We carry DENAGO and EVOLUTION electric golf carts in 2, 4, and 6-passenger configurations, including lithium-battery models with extended range that are ideal for Ocean County's beach and lake communities."
  },
  {
    question: "Do you deliver golf carts across Ocean County?",
    answer:
      "Yes. We deliver purchased golf carts throughout Ocean County, including Toms River, Brick, Lakewood, Point Pleasant, Seaside, Long Beach Island, Barnegat, Stafford, and every surrounding town. Call 804-585-7301 for a delivery quote."
  }
];

export default function GolfCartsForSalePage() {
  const { data: vehicles } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles"],
  });

  const featuredVehicles = vehicles?.slice(0, 6) || [];

  const canonicalUrl = "https://oceancountygolfcarts.com/golf-carts-for-sale";
  const breadcrumbItems = [
    { name: "Home", url: "https://oceancountygolfcarts.com" },
    { name: "Golf Carts for Sale", url: canonicalUrl }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Golf Carts for Sale in Ocean County, NJ | Electric & LSV Carts"
        description="Shop electric, LSV & street-legal golf carts for sale in Ocean County, NJ. New DENAGO & EVOLUTION 2, 4 & 6-seat models with financing. Call 804-585-7301."
        keywords="golf carts for sale near me, electric golf carts for sale near me, golf cart sales near me, lsv golf carts for sale near me, street legal golf cart near me, golf carts for sale toms river"
        canonicalUrl={canonicalUrl}
      />
      <SchemaMarkup schema={generateSalesLocalBusinessSchema()} />
      <SchemaMarkup schema={generateServiceSchema()} />
      <SchemaMarkup schema={generateFAQSchema(salesFaqs)} />
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbItems)} />

      {/* Hero */}
      <section
        className="relative py-20 px-4 bg-gradient-to-br from-theme-primary via-blue-800 to-theme-primary text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.85), rgba(29, 78, 216, 0.8)), url('${BASE_URL}/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg')" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Golf Carts for Sale in Ocean County, NJ
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Shop new electric, LSV, and street-legal golf carts for sale near you.
                Ocean County Golf Carts carries DENAGO and EVOLUTION 2, 4, and 6-passenger
                models with 0% financing available and free local delivery across Ocean County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`${BASE_URL}/inventory`} className="w-full sm:w-auto">
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                    Browse Full Inventory
                  </Button>
                </Link>
                <a href="tel:804-585-7301" className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="text-blue-700 bg-white border-white hover:bg-gray-100 hover:text-blue-700 w-full sm:w-auto">
                    <Phone className="w-4 h-4 mr-2" /> Call 804-585-7301
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src={`${BASE_URL}/attached_assets/D6-XT6-4wd-color-PORTIMAO-BLUE_1753135231312.png`}
                alt="Electric golf cart for sale in Ocean County NJ"
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Electric Golf Carts for Sale Near You</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you need a compact 2-passenger cart for the neighborhood or a street-legal
              6-seater for the beach, we have the right golf cart for sale in Ocean County.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Electric Golf Carts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Quiet, low-maintenance electric golf carts with lithium and lead-acid battery
                  options. Perfect for gated communities, golf courses, and Ocean County beach towns.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <CardTitle>LSV & Street-Legal Carts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Low Speed Vehicles built to New Jersey standards with seat belts, lights, signals,
                  and VINs so you can register, insure, and drive them on local roads.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle>2, 4 & 6-Passenger Models</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From nimble 2-seat carts to family-sized 6-passenger models, choose the seating,
                  range, and features that fit how you'll ride.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* LSV / Street-Legal deep section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">
            LSV & Street-Legal Golf Carts in Ocean County
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Searching for a <strong>street legal golf cart near me</strong>? Ocean County's beach and
            lake communities are ideal for Low Speed Vehicles (LSVs). Under New Jersey law, an LSV is a
            four-wheeled electric vehicle with a top speed between 20 and 25 mph that is equipped with the
            safety features required for road use — and can be titled, registered, and insured just like a car.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">What makes a golf cart street legal in NJ?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> Headlights, tail lights, brake lights & turn signals</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> Seat belts and DOT-approved windshield</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> Rear-view and side mirrors</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> 17-digit VIN for title, registration & insurance</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> Top speed of 20–25 mph (roads posted ≤ 25 mph)</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Why Ocean County loves LSV carts</h3>
              <p className="text-gray-700 mb-4">
                From Long Beach Island and Seaside to Point Pleasant Beach and Barnegat, low speed limits
                and short trips make street-legal golf carts a practical, eco-friendly second vehicle for
                running to the beach, the marina, or downtown.
              </p>
              <p className="text-gray-700">
                We'll help you pick an LSV that qualifies for registration and walk you through the
                titling process for your town.
              </p>
            </div>
          </div>
          <div className="text-center">
            <a href="tel:804-585-7301">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                Ask About Street-Legal LSV Carts
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Featured inventory */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Golf Cart Deals in Toms River &amp; Beyond</h2>
          <p className="text-xl text-gray-600 mb-12">
            A few of the electric golf carts for sale right now at Ocean County Golf Carts
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  {vehicle.images && vehicle.images[0] && (
                    <img
                      src={vehicle.images[0]}
                      alt={`${vehicle.name} for sale in Ocean County NJ`}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-white">For Sale</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{vehicle.name}</CardTitle>
                  <CardDescription className="text-left">{vehicle.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      ${vehicle.price.toLocaleString()}
                    </span>
                    <Link href={`${BASE_URL}/inventory`}>
                      <Button size="sm" className="bg-theme-orange hover:bg-orange-600">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Link href={`${BASE_URL}/inventory`}>
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              View All Golf Carts for Sale
            </Button>
          </Link>
        </div>
      </section>

      {/* Why buy / financing */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Buy From Ocean County Golf Carts</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Percent className="w-12 h-12 text-theme-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">0% Financing</h3>
              <p className="text-gray-600">Flexible payment options on select new models.</p>
            </div>
            <div className="text-center">
              <ShieldCheck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Factory Warranties</h3>
              <p className="text-gray-600">Authorized DENAGO &amp; EVOLUTION dealer with genuine parts.</p>
            </div>
            <div className="text-center">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Local Delivery</h3>
              <p className="text-gray-600">Delivered throughout all 33 Ocean County towns.</p>
            </div>
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Service After the Sale</h3>
              <p className="text-gray-600">
                In-house{" "}
                <Link href={`${BASE_URL}/services`} className="text-blue-600 underline hover:text-blue-800">
                  golf cart repair and maintenance
                </Link>{" "}
                to keep your cart running.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">
            Golf Carts for Sale — Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {salesFaqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related links */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Explore More</h2>
          <p className="text-gray-700">
            Not ready to buy?{" "}
            <Link href={`${BASE_URL}/rentals`} className="text-blue-600 underline hover:text-blue-800">
              Golf cart rentals in Ocean County
            </Link>{" "}
            are available daily, weekly, and monthly. Already own a cart? Book{" "}
            <Link href={`${BASE_URL}/services`} className="text-blue-600 underline hover:text-blue-800">
              mobile golf cart repair near you
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Buy a Golf Cart in Ocean County?</h2>
          <p className="text-xl mb-8">
            Call our sales team for current pricing, availability, and financing options.
          </p>
          <a href="tel:804-585-7301">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              <Phone className="w-5 h-5 mr-2" /> Call 804-585-7301
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
