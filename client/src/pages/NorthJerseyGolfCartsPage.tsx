import { Link } from "wouter";
import { BASE_URL } from "@/config/urls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Car, MapPin, Phone, CheckCircle, ShieldCheck } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, {
  generateSalesLocalBusinessSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema
} from "@/components/SchemaMarkup";

const northJerseyFaqs = [
  {
    question: "Do you deliver golf carts to North Jersey?",
    answer:
      "Yes. While our dealership is based in Ocean County, we arrange statewide delivery of new EVOLUTION and DENAGO golf carts throughout New Jersey, including North Jersey counties such as Monmouth, Middlesex, Bergen, Essex, and Morris. Call 804-585-7301 for a delivery quote to your town."
  },
  {
    question: "Are your golf carts street legal in North Jersey?",
    answer:
      "Street-legal rules are set at the state and municipal level. Our Low Speed Vehicles (LSVs) meet New Jersey's Title 39 requirements and can be titled, registered, and insured for roads posted at 25 mph or less anywhere in NJ, including northern counties. Local ordinances vary, so we confirm your town's rules before delivery."
  },
  {
    question: "Can I buy a golf cart online for North Jersey delivery?",
    answer:
      "Absolutely. Browse our inventory online, call or message us with the model you want, and we'll handle pricing, financing, and delivery to North Jersey. Many customers finalize their purchase without ever leaving home."
  }
];

export default function NorthJerseyGolfCartsPage() {
  const canonicalUrl = "https://oceancountygolfcarts.com/north-jersey-golf-carts";
  const breadcrumbItems = [
    { name: "Home", url: "https://oceancountygolfcarts.com" },
    { name: "North Jersey Golf Carts", url: canonicalUrl }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="North Jersey Golf Carts for Sale | Statewide Delivery | Ocean County Golf Carts"
        description="North Jersey golf carts for sale with statewide NJ delivery. New EVOLUTION & DENAGO electric & street-legal LSV models, financing available. Call 804-585-7301."
        keywords="north jersey golf carts, golf carts north jersey, nj golf cart delivery, golf carts for sale nj, street legal golf cart north jersey, monmouth county golf carts"
        canonicalUrl={canonicalUrl}
      />
      <SchemaMarkup schema={generateSalesLocalBusinessSchema()} />
      <SchemaMarkup schema={generateServiceSchema()} />
      <SchemaMarkup schema={generateFAQSchema(northJerseyFaqs)} />
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbItems)} />

      {/* Hero */}
      <section
        className="relative py-20 px-4 bg-gradient-to-br from-theme-primary via-blue-800 to-theme-primary text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.85), rgba(29, 78, 216, 0.8)), url('${BASE_URL}/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg')` }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                North Jersey Golf Carts — Statewide NJ Delivery
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Shopping for golf carts in North Jersey? Ocean County Golf Carts delivers new EVOLUTION
                and DENAGO electric and street-legal LSV carts throughout New Jersey — from the Jersey
                Shore to North Jersey's suburbs and lake communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`${BASE_URL}/inventory`} className="w-full sm:w-auto">
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                    Browse Inventory
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
                alt="North Jersey golf cart for sale with statewide NJ delivery"
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Statewide delivery */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">
            Golf Carts Delivered Across North Jersey
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Our showroom is rooted in Ocean County, but our reach covers the whole state. If you're in
            North Jersey and want a new electric golf cart, you don't have to settle for limited local
            options — we deliver directly to your driveway. We regularly serve buyers in Monmouth,
            Middlesex, and Mercer counties, and arrange delivery into Bergen, Essex, Morris, and beyond.
          </p>
          <p className="text-lg text-gray-700">
            You get the same selection, financing, and factory-backed warranties our Ocean County
            customers enjoy — just delivered north. Start by browsing our{" "}
            <Link href={`${BASE_URL}/inventory`} className="text-blue-600 underline hover:text-blue-800">
              full golf cart inventory
            </Link>{" "}
            and applying for{" "}
            <a href="https://tigongolfcarts.com/apply-for-financing/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
              financing
            </a>
            .
          </p>
        </div>
      </section>

      {/* Value props */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Why North Jersey Buyers Choose Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-theme-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Statewide Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Door-to-door delivery of your new cart anywhere in New Jersey, including every North
                  Jersey county.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Street-Legal LSV Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Choose a{" "}
                  <Link href={`${BASE_URL}/street-legal-golf-carts-nj`} className="text-blue-600 underline hover:text-blue-800">
                    street-legal LSV
                  </Link>{" "}
                  that can be registered and insured for North Jersey roads posted at 25 mph or less.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Authorized Dealer</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Genuine EVOLUTION and DENAGO carts with factory warranties, real parts, and service
                  support after the sale.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* North Jersey street-legal note */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">
            Street-Legal Requirements in Northern NJ Counties
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            New Jersey's Low Speed Vehicle law applies statewide, so the same rules that let a street-legal
            cart onto the road in Ocean County apply in North Jersey too: the vehicle must be an LSV with a
            20–25 mph top speed, full lighting, mirrors, seat belts, a windshield, and a VIN, and it must be
            titled, registered, and insured. On top of that, individual North Jersey municipalities may
            regulate exactly where carts can operate.
          </p>
          <div className="space-y-3 mb-6">
            <div className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-500" /> <span className="text-gray-700">NJ-wide delivery from our Ocean County showroom</span></div>
            <div className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-500" /> <span className="text-gray-700">LSV builds that qualify for statewide registration</span></div>
            <div className="flex items-center gap-3"><CheckCircle className="w-6 h-6 text-green-500" /> <span className="text-gray-700">Financing and factory warranties on new models</span></div>
          </div>
          <p className="text-lg text-gray-700">
            Have questions about your town's rules? <Link href={`${BASE_URL}/contact`} className="text-blue-600 underline hover:text-blue-800">Contact our team</Link> and we'll help you sort out registration before delivery.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">
            North Jersey Golf Carts — Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {northJerseyFaqs.map((faq, index) => (
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
          <h2 className="text-4xl font-bold mb-6">Get a Golf Cart Delivered to North Jersey</h2>
          <p className="text-xl mb-8">
            Call for statewide delivery pricing, availability, and financing on new EVOLUTION and DENAGO carts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:804-585-7301">
              <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                <Phone className="w-5 h-5 mr-2" /> Call 804-585-7301
              </Button>
            </a>
            <Link href={`${BASE_URL}/contact`}>
              <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100 hover:text-theme-primary">
                <MapPin className="w-5 h-5 mr-2" /> Request a Delivery Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
