import { Link } from "wouter";
import { BASE_URL } from "@/config/urls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MapPin, Phone, Clock, Truck, FileText } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Vehicle } from "@shared/schema";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, {
  generateTownSalesSchema,
  generateProductSchema,
  generateFAQSchema,
  generateBreadcrumbSchema
} from "@/components/SchemaMarkup";

const tomsRiverFaqs = [
  {
    question: "Where can I find golf carts for sale in Toms River, NJ?",
    answer:
      "Ocean County Golf Carts sells new electric and LSV golf carts to Toms River buyers, with free local delivery throughout Toms River Township and Ocean County. Call 804-585-7301 to check current inventory and pricing."
  },
  {
    question: "Do you deliver golf carts in Toms River?",
    answer:
      "Yes. We provide free local delivery of purchased golf carts across Toms River — from North Dover and Silverton to the Toms River beaches and Pine Beach border — and handle setup so your cart is ready to ride."
  },
  {
    question: "Can I register a street-legal golf cart in Toms River?",
    answer:
      "Street-legal Low Speed Vehicles (LSVs) can be titled, registered, and insured in New Jersey. We sell LSV carts that meet the state's requirements and help Toms River residents understand the registration process for local roads posted at 25 mph or less."
  },
  {
    question: "How much do golf carts cost in Toms River?",
    answer:
      "New electric golf carts at Ocean County Golf Carts range from about $11,995 for compact models up to roughly $19,995 for premium 6-passenger and lifted LSV carts, with 0% financing available on select models."
  }
];

export default function TomsRiverGolfCartsPage() {
  const { data: vehicles } = useQuery<Vehicle[]>({
    queryKey: ["vehicles"],
    queryFn: async () => {
      const response = await fetch('/api/vehicles');
      if (!response.ok) {
        throw new Error(`Failed to fetch vehicles: ${response.status}`);
      }
      return response.json();
    },
    refetchOnWindowFocus: false,
  });

  const models = vehicles?.slice(0, 6) || [];
  const canonicalUrl = "https://oceancountygolfcarts.com/toms-river-township-golf-carts";
  const breadcrumbItems = [
    { name: "Home", url: "https://oceancountygolfcarts.com" },
    { name: "Toms River Golf Carts", url: canonicalUrl }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Golf Carts for Sale in Toms River, NJ | Ocean County Golf Carts"
        description="Golf carts for sale in Toms River, NJ. Shop new electric & LSV Evolution and Denago carts with local delivery & financing. Call 804-585-7301 today!"
        keywords="golf carts for sale toms river, golf cart dealer toms river nj, toms river golf carts, electric golf carts toms river, lsv golf carts toms river"
        canonicalUrl={canonicalUrl}
      />
      <SchemaMarkup schema={generateTownSalesSchema("Toms River")} />
      <SchemaMarkup schema={generateFAQSchema(tomsRiverFaqs)} />
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbItems)} />
      {models.slice(0, 3).map((v) => (
        <SchemaMarkup key={v.id} schema={generateProductSchema(v)} />
      ))}

      {/* Hero */}
      <section
        className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(29, 78, 216, 0.8)), url('${BASE_URL}/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg')" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Golf Carts for Sale in Toms River, NJ
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Ocean County Golf Carts is your local source for golf carts for sale in Toms River.
                Shop new electric and street-legal LSV Evolution and Denago carts with free local
                delivery, financing, and expert service right here in Ocean County.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#models" className="w-full sm:w-auto">
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                    Browse Models
                  </Button>
                </a>
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
                alt="Golf cart for sale in Toms River NJ"
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local buying context */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Buying a Golf Cart in Toms River, NJ
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Toms River is one of Ocean County's largest and most golf-cart-friendly communities, and
            demand for <strong>golf carts for sale in Toms River</strong> keeps growing. Whether you're
            cruising the neighborhoods of Silverton and Holiday City, running to the Toms River beaches
            and boat ramps, or getting around a 55+ community, an electric golf cart is a fun, practical
            way to get around town. Our team helps you match the right cart to how you'll actually ride —
            from compact 2-passenger models to lifted 6-seaters.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <Truck className="w-10 h-10 text-theme-orange mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Free Local Delivery</h3>
              <p className="text-gray-700">
                We deliver your new golf cart anywhere in Toms River Township and set it up ready to ride.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <FileText className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">NJ Registration Help</h3>
              <p className="text-gray-700">
                Buying a street-legal LSV? We'll walk you through New Jersey titling, registration, and
                insurance for Ocean County roads.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <MapPin className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Built for Toms River</h3>
              <p className="text-gray-700">
                Perfect for neighborhood rides, beach paths, and short trips around town — quiet, clean,
                and easy to park.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Models available */}
      <section id="models" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Golf Cart Models Available in Toms River
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            A selection of the Evolution and Denago electric golf carts we sell to Toms River buyers
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12 text-left">
            {models.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  {vehicle.images && vehicle.images[0] && (
                    <img
                      src={vehicle.images[0]}
                      alt={`${vehicle.name} for sale in Toms River NJ`}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-white">{vehicle.brand}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{vehicle.name}</CardTitle>
                  <CardDescription>
                    {vehicle.category}
                    {vehicle.specifications?.seatingCapacity
                      ? ` · Seats ${vehicle.specifications.seatingCapacity}`
                      : ""}
                    {vehicle.specifications?.topSpeed ? ` · ${vehicle.specifications.topSpeed}` : ""}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      ${vehicle.price.toLocaleString()}
                    </span>
                    <Link href={`/vehicles/${vehicle.id}`}>
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
              View Full Golf Cart Inventory
            </Button>
          </Link>
        </div>
      </section>

      {/* Cross-links: rentals & service */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Golf Cart Rentals in Toms River</h2>
            <p className="text-gray-700 mb-4">
              Not ready to buy? Reserve a{" "}
              <Link href={`${BASE_URL}/rentals`} className="text-blue-600 underline hover:text-blue-800">
                golf cart rental in Toms River
              </Link>{" "}
              by the day, week, or month — delivered to your door.
            </p>
            <Link href={`${BASE_URL}/rentals`}>
              <Button className="bg-theme-orange hover:bg-orange-600 text-white">View Rental Options</Button>
            </Link>
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-3 text-gray-900">Golf Cart Service in Toms River</h2>
            <p className="text-gray-700 mb-4">
              Already own a cart? Book{" "}
              <Link href={`${BASE_URL}/services`} className="text-green-700 underline hover:text-green-900">
                golf cart repair and service in Toms River
              </Link>{" "}
              — including mobile repair throughout Ocean County.
            </p>
            <Link href={`${BASE_URL}/services`}>
              <Button className="bg-green-600 hover:bg-green-700 text-white">Schedule Service</Button>
            </Link>
          </div>
        </div>
        <div className="max-w-5xl mx-auto mt-8 text-center">
          <p className="text-gray-700">
            Want a road-ready cart? Learn about{" "}
            <Link href={`${BASE_URL}/street-legal-golf-carts-nj`} className="text-blue-600 underline hover:text-blue-800">
              street legal golf carts in NJ
            </Link>{" "}
            and{" "}
            <Link href={`${BASE_URL}/lsv-golf-carts-nj`} className="text-blue-600 underline hover:text-blue-800">
              LSV golf carts
            </Link>
            , or explore{" "}
            <Link href={`${BASE_URL}/new-jersey-shore-golf-carts`} className="text-blue-600 underline hover:text-blue-800">
              New Jersey shore golf carts
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Contact + Map */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="grid gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Call Our Toms River Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600 mb-2">804-585-7301</p>
                  <p className="text-gray-600">Ask about current Toms River inventory and pricing</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardHeader>
                  <Clock className="w-12 h-12 text-green-500 mx-auto mb-4" />
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
            </div>
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49127.5!2d-74.2748!3d39.9532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19c8e0379c5a3%3A0x5a0f6e8e1b5e6c1d!2sToms%20River%20Township%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300031!5m2!1sen!2sus"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Toms River Township Map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">
            Toms River Golf Carts — FAQs
          </h2>
          <div className="space-y-6">
            {tomsRiverFaqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-theme-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Buy a Golf Cart in Toms River?</h2>
          <p className="text-xl mb-8">
            Call Ocean County Golf Carts for current pricing, availability, and financing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:804-585-7301">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                <Phone className="w-5 h-5 mr-2" /> Call 804-585-7301
              </Button>
            </a>
            <Link href={`${BASE_URL}/golf-carts-for-sale`}>
              <Button size="lg" variant="outline" className="text-blue-700 bg-white border-white hover:bg-gray-100 hover:text-blue-700">
                All Golf Carts for Sale
              </Button>
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-200">
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> New electric &amp; LSV carts</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> 0% financing available</span>
            <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4" /> Free Toms River delivery</span>
          </div>
        </div>
      </section>
    </div>
  );
}
