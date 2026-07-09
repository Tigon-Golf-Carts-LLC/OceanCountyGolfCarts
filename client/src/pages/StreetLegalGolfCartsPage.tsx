import { Link } from "wouter";
import { BASE_URL } from "@/config/urls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Car, Gauge, ShieldCheck, Phone, MapPin, FileText } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, {
  generateSalesLocalBusinessSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema
} from "@/components/SchemaMarkup";

const streetLegalFaqs = [
  {
    question: "What makes a golf cart street legal in New Jersey?",
    answer:
      "To be street legal in New Jersey, a cart must be classified as a Low Speed Vehicle (LSV) under NJ Title 39. That means a top speed of 20–25 mph and required equipment: headlights, tail lights, brake lights, turn signals, a horn, rear-view and side mirrors, a windshield, seat belts, and a 17-digit VIN. Once equipped, an LSV can be titled, registered, and insured to drive on Ocean County roads posted at 25 mph or less."
  },
  {
    question: "Which street legal golf carts do you sell near me?",
    answer:
      "We carry EVOLUTION D6 MAX (GT4, GT6, XT4, XT6) and select DENAGO models that reach LSV speeds and can be equipped to meet New Jersey street-legal standards. Our team will confirm which configuration qualifies for registration in your town before you buy."
  },
  {
    question: "Can I drive a street legal golf cart on Ocean County roads?",
    answer:
      "Yes — a registered, insured LSV may be driven on New Jersey public roads with a posted speed limit of 25 mph or less. Many Ocean County beach and lake communities, including Long Beach Island, Seaside, Point Pleasant Beach, and Barnegat, have exactly these low-speed streets, which is why street-legal carts are so popular here. Local ordinances vary, so we help you confirm your town's rules."
  },
  {
    question: "Do I need a license and insurance for a street legal LSV?",
    answer:
      "Yes. Because an LSV is titled and registered like a motor vehicle, the driver must hold a valid driver's license and the vehicle must be insured. We walk every buyer through titling, registration, and insurance so your street-legal golf cart is road-ready."
  }
];

export default function StreetLegalGolfCartsPage() {
  const canonicalUrl = "https://oceancountygolfcarts.com/street-legal-golf-carts-nj";
  const breadcrumbItems = [
    { name: "Home", url: "https://oceancountygolfcarts.com" },
    { name: "Street Legal Golf Carts", url: canonicalUrl }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Street Legal Golf Carts Near Me | Ocean County, NJ | Ocean County Golf Carts"
        description="Street legal golf carts for sale near you in Ocean County, NJ. NJ Title 39 LSV-compliant EVOLUTION & DENAGO models — lights, mirrors, seat belts, VIN. Call 804-585-7301."
        keywords="street legal golf cart near me, street legal golf carts nj, lsv golf carts for sale near me, low speed vehicle nj, street legal golf cart ocean county, nj title 39 golf cart"
        canonicalUrl={canonicalUrl}
      />
      <SchemaMarkup schema={generateSalesLocalBusinessSchema()} />
      <SchemaMarkup schema={generateServiceSchema()} />
      <SchemaMarkup schema={generateFAQSchema(streetLegalFaqs)} />
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
                Street Legal Golf Carts Near Me — Ocean County, NJ
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Shop street-legal, NJ Title 39–compliant Low Speed Vehicles (LSVs) built for Ocean
                County roads. Ocean County Golf Carts equips EVOLUTION and DENAGO carts with the
                lights, mirrors, seat belts, and VIN needed to title, register, and insure them in
                New Jersey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`${BASE_URL}/inventory`} className="w-full sm:w-auto">
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                    Shop Compliant Inventory
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
                alt="Street legal LSV golf cart for sale in Ocean County NJ"
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What makes a cart street legal in NJ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">
            What Makes a Golf Cart Street Legal in NJ?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
            Searching for a <strong>street legal golf cart near me</strong>? In New Jersey the answer
            comes down to one classification: the Low Speed Vehicle, or LSV. Under NJ Title 39, an LSV
            is a four-wheeled electric vehicle with a top speed between 20 and 25 mph that carries the
            same core safety equipment as a car — and can be titled, registered, and insured for public
            roads.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-theme-primary" /> NJ Title 39 LSV Requirements
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> Headlights, tail lights, brake lights &amp; turn signals</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> Horn and DOT-approved windshield</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> Rear-view and side mirrors</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> Seat belts for every seating position</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> 17-digit VIN for title, registration &amp; insurance</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> Top speed of 20–25 mph (roads posted ≤ 25 mph)</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-theme-primary" /> Ocean County Municipality Rules
              </h3>
              <p className="text-gray-700 mb-4">
                New Jersey allows registered LSVs on roads posted at 25 mph or less, but individual
                Ocean County towns set their own local rules on where carts can travel, park, and cross
                higher-speed roads. Beach and island communities such as Long Beach Island, Beach Haven,
                Surf City, Ship Bottom, Seaside, and Point Pleasant Beach are especially cart-friendly.
              </p>
              <p className="text-gray-700">
                Before you buy, our team confirms your town's ordinance so you know exactly where your
                street-legal cart can go.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliant models */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Street-Legal &amp; LSV-Compliant Models We Sell
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These EVOLUTION and DENAGO carts reach LSV speeds and can be equipped to meet New Jersey
              street-legal standards, so you can register and insure them for local roads.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-theme-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Gauge className="w-8 h-8 text-white" />
                </div>
                <CardTitle>EVOLUTION D6 MAX Series</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  The D6 MAX GT4, GT6, XT4, and XT6 reach 25+ mph and are our most popular street-legal
                  LSV builds for New Jersey shore towns.
                </p>
                <div className="flex flex-col gap-1 text-sm">
                  <Link href={`${BASE_URL}/vehicles/evolution-d6-max-gt4`} className="text-blue-600 underline hover:text-blue-800">EVOLUTION D6 MAX GT4</Link>
                  <Link href={`${BASE_URL}/vehicles/evolution-d6-max-gt6`} className="text-blue-600 underline hover:text-blue-800">EVOLUTION D6 MAX GT6</Link>
                  <Link href={`${BASE_URL}/vehicles/evolution-d6-max-xt4`} className="text-blue-600 underline hover:text-blue-800">EVOLUTION D6 MAX XT4</Link>
                  <Link href={`${BASE_URL}/vehicles/evolution-d6-max-xt6`} className="text-blue-600 underline hover:text-blue-800">EVOLUTION D6 MAX XT6</Link>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <CardTitle>DENAGO Street-Ready EVs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Select DENAGO models can be configured to LSV specification with the required lighting,
                  mirrors, belts, and VIN for New Jersey registration.
                </p>
                <Link href={`${BASE_URL}/brands/denago`} className="text-blue-600 underline hover:text-blue-800 text-sm">
                  Explore DENAGO golf carts →
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <CardTitle>LSV Guidance &amp; Titling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We handle the details — confirming which build qualifies, equipping it to code, and
                  walking you through title, registration, and insurance for your town.
                </p>
                <Link href={`${BASE_URL}/lsv-golf-carts-nj`} className="text-blue-600 underline hover:text-blue-800 text-sm">
                  Learn more about LSV golf carts in NJ →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Ocean County */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">
            Why Street-Legal Carts Thrive in Ocean County, NJ
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            New Jersey's shore is built for the golf cart lifestyle. Ocean County's barrier-island and
            bayfront towns are packed with low-speed streets, short trips to the beach or marina, and
            tight summer parking — exactly the conditions where a street-legal LSV shines. Instead of
            firing up a full-size car for a five-minute run to the boardwalk, families cruise quietly and
            emission-free in a cart that's fully licensed for the road.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            From Long Beach Island and Barnegat to Toms River, Lacey, and Point Pleasant, we help Ocean
            County residents choose an LSV that fits their household and complies with local rules. Ready
            to browse? Shop our{" "}
            <Link href={`${BASE_URL}/inventory`} className="text-blue-600 underline hover:text-blue-800">
              full NJ golf cart inventory
            </Link>{" "}
            or explore{" "}
            <Link href={`${BASE_URL}/golf-carts-for-sale`} className="text-blue-600 underline hover:text-blue-800">
              electric and LSV golf carts for sale
            </Link>
            . You can also read our dedicated guide to{" "}
            <Link href={`${BASE_URL}/lsv-golf-carts-nj`} className="text-blue-600 underline hover:text-blue-800">
              LSV golf carts in New Jersey
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">
            Street Legal Golf Carts — Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {streetLegalFaqs.map((faq, index) => (
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
          <h2 className="text-4xl font-bold mb-6">Find a Street-Legal Golf Cart in Ocean County</h2>
          <p className="text-xl mb-8">
            Call our team to confirm which LSV models qualify for your town and get street-legal pricing.
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
