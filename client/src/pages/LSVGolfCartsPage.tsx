import { Link } from "wouter";
import { BASE_URL } from "@/config/urls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Gauge, Car, FileText, Phone, ShieldCheck } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, {
  generateSalesLocalBusinessSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema
} from "@/components/SchemaMarkup";

const lsvFaqs = [
  {
    question: "What is an LSV (Low Speed Vehicle)?",
    answer:
      "An LSV, or Low Speed Vehicle, is a federally defined class of four-wheeled electric vehicle with a top speed between 20 and 25 mph. Under federal FMVSS 500 and New Jersey Title 39, LSVs must carry headlights, tail and brake lights, turn signals, a horn, mirrors, a windshield, seat belts, and a 17-digit VIN — which is why an LSV can be titled, registered, and insured while a standard golf cart cannot."
  },
  {
    question: "Are LSV golf carts for sale near me street legal in NJ?",
    answer:
      "Yes. A properly equipped LSV that is titled, registered, and insured may be driven on New Jersey public roads posted at 25 mph or less. Ocean County's beach and lake communities are full of these low-speed streets, making LSV golf carts a practical, road-legal choice."
  },
  {
    question: "Which Ocean County Golf Cart models qualify as LSVs?",
    answer:
      "Our EVOLUTION D6 MAX GT4, GT6, XT4, and XT6 reach LSV speeds and can be built to New Jersey LSV specification. Select DENAGO models can also be equipped to qualify. We confirm the exact configuration that meets the requirements before you buy."
  },
  {
    question: "Do I need insurance and registration for an LSV?",
    answer:
      "Yes. Because an LSV is titled like a motor vehicle, New Jersey requires registration, insurance, and a licensed driver. We help every buyer through titling, registration, and insurance so the vehicle is fully road-ready for Ocean County."
  }
];

export default function LSVGolfCartsPage() {
  const canonicalUrl = "https://oceancountygolfcarts.com/lsv-golf-carts-nj";
  const breadcrumbItems = [
    { name: "Home", url: "https://oceancountygolfcarts.com" },
    { name: "LSV Golf Carts", url: canonicalUrl }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="LSV Golf Carts for Sale Near Me | Low Speed Vehicle Dealer NJ | Ocean County Golf Carts"
        description="LSV golf carts for sale near you in Ocean County, NJ. Street-legal Low Speed Vehicles from EVOLUTION & DENAGO — registration, insurance & titling help. Call 804-585-7301."
        keywords="lsv golf carts for sale near me, low speed vehicle nj, lsv golf carts nj, lsv dealer nj, street legal golf cart near me, electric lsv ocean county"
        canonicalUrl={canonicalUrl}
      />
      <SchemaMarkup schema={generateSalesLocalBusinessSchema()} />
      <SchemaMarkup schema={generateServiceSchema()} />
      <SchemaMarkup schema={generateFAQSchema(lsvFaqs)} />
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
                LSV Golf Carts for Sale Near Me — Ocean County, NJ
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Shop street-legal Low Speed Vehicles (LSVs) at your local Ocean County dealer. EVOLUTION
                and DENAGO electric LSVs are built to reach 20–25 mph and can be titled, registered, and
                insured for New Jersey roads.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`${BASE_URL}/inventory`} className="w-full sm:w-auto">
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                    Shop LSV Inventory
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
                alt="LSV low speed vehicle golf cart for sale near me in Ocean County NJ"
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is an LSV */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">
            LSV vs. Golf Cart — What's the Difference?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
            Shoppers searching for <strong>LSV golf carts for sale near me</strong> are usually looking
            for a cart they can actually drive on the road. That's what separates an LSV from a standard
            golf cart. A regular golf cart tops out around 15–19 mph and isn't street legal. An LSV
            reaches 20–25 mph, carries DOT-required safety equipment, and can be registered and insured
            for public roads in New Jersey.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-theme-primary" /> Federal &amp; NJ LSV Requirements
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> Top speed of 20–25 mph (FMVSS 500 class)</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> Head, tail, brake lights &amp; turn signals</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> Mirrors, horn, and windshield</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> Seat belts at every seat</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> 17-digit VIN, NJ title, registration &amp; insurance</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-gray-900 flex items-center gap-2">
                <Gauge className="w-5 h-5 text-theme-primary" /> Where You Can Drive an LSV
              </h3>
              <p className="text-gray-700 mb-4">
                In New Jersey, a registered LSV may travel on roads posted at 25 mph or less and cross
                certain higher-speed roads where local rules allow. That covers the vast majority of
                streets in Ocean County's shore and lake towns.
              </p>
              <p className="text-gray-700">
                Not sure whether an LSV or a standard cart fits your needs? Compare options on our{" "}
                <Link href={`${BASE_URL}/street-legal-golf-carts-nj`} className="text-blue-600 underline hover:text-blue-800">
                  street-legal golf carts page
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifying models */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              LSV-Eligible Models at Ocean County Golf Carts
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These electric models can be built and equipped to qualify as New Jersey LSVs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-theme-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <CardTitle>EVOLUTION D6 MAX Series (LSV)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  The 4- and 6-passenger D6 MAX models reach 25+ mph and are our most requested LSV builds
                  for New Jersey shore driving.
                </p>
                <div className="grid grid-cols-2 gap-1 text-sm">
                  <Link href={`${BASE_URL}/vehicles/evolution-d6-max-gt4`} className="text-blue-600 underline hover:text-blue-800">D6 MAX GT4</Link>
                  <Link href={`${BASE_URL}/vehicles/evolution-d6-max-gt6`} className="text-blue-600 underline hover:text-blue-800">D6 MAX GT6</Link>
                  <Link href={`${BASE_URL}/vehicles/evolution-d6-max-xt4`} className="text-blue-600 underline hover:text-blue-800">D6 MAX XT4</Link>
                  <Link href={`${BASE_URL}/vehicles/evolution-d6-max-xt6`} className="text-blue-600 underline hover:text-blue-800">D6 MAX XT6</Link>
                </div>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <CardTitle>DENAGO Street-Ready EVs</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Select DENAGO electric vehicles can be configured to LSV specification for New Jersey
                  registration. Ask us which build qualifies for your town.
                </p>
                <Link href={`${BASE_URL}/brands/denago`} className="text-blue-600 underline hover:text-blue-800 text-sm">
                  Explore DENAGO golf carts →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How to buy an LSV */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">
            How to Buy an LSV in Ocean County
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Buying a Low Speed Vehicle is easy with a local dealer that handles the whole process. Tell us
            how you'll use your cart — beach runs, neighborhood cruising, or hauling — and we'll match you
            to an LSV-eligible model, equip it to New Jersey specification, and guide you through title,
            registration, and insurance. Every LSV we sell is 100% electric, backed by factory warranties,
            and available with financing and free local delivery across Ocean County.
          </p>
          <p className="text-lg text-gray-700">
            Ready to compare LSVs in person? Browse our{" "}
            <Link href={`${BASE_URL}/inventory`} className="text-blue-600 underline hover:text-blue-800">
              full NJ golf cart inventory
            </Link>
            , see all{" "}
            <Link href={`${BASE_URL}/golf-carts-for-sale`} className="text-blue-600 underline hover:text-blue-800">
              electric and LSV golf carts for sale
            </Link>
            , or learn what it takes for a cart to be{" "}
            <Link href={`${BASE_URL}/street-legal-golf-carts-nj`} className="text-blue-600 underline hover:text-blue-800">
              street legal in New Jersey
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">
            LSV Golf Carts — Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {lsvFaqs.map((faq, index) => (
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
          <h2 className="text-4xl font-bold mb-6">Find an LSV Golf Cart Near You in NJ</h2>
          <p className="text-xl mb-8">
            Call our Ocean County team for LSV pricing, availability, and registration guidance.
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
