import { Link } from "wouter";
import { BASE_URL } from "@/config/urls";
import { Button } from "@/components/ui/button";
import { Zap, Fuel, Users, Car, FileText, DollarSign, Phone } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, {
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema
} from "@/components/SchemaMarkup";

const guideFaqs = [
  {
    question: "What is a golf cart?",
    answer:
      "A golf cart is a small electric or gas vehicle originally built to carry players and equipment around a golf course. Today the term covers a wide range of low-speed vehicles used for neighborhood transportation, beach and shore trips, utility work, and recreation. Street-legal versions, called Low Speed Vehicles (LSVs), add lights, mirrors, seat belts, and a VIN so they can be registered for public roads."
  },
  {
    question: "Should I buy an electric or gas golf cart?",
    answer:
      "Most buyers today choose electric. Electric golf carts are quieter, cheaper to run, require far less maintenance, and produce no emissions — ideal for New Jersey's shore and lake communities. Gas carts offer longer range for very heavy utility use, but modern lithium-battery electric carts have closed much of that gap. Every cart we sell at Ocean County Golf Carts is electric."
  },
  {
    question: "How many passengers should my golf cart seat?",
    answer:
      "Choose seating based on your household and use. A 2-passenger cart is nimble and affordable for couples and errands, a 4-passenger cart suits most families, and a 6-passenger cart is best for larger families, shore houses, and carrying guests. We carry 2, 4, and 6-passenger models."
  },
  {
    question: "How much does a golf cart cost?",
    answer:
      "New electric golf carts generally range from about $9,000 for 2-passenger models to $17,000+ for premium, lifted, and street-legal 6-passenger LSVs. Price depends on seating, battery type (lithium vs. lead-acid), and street-legal features. We offer 0% financing on select models."
  }
];

export default function GolfCartBuyingGuidePage() {
  const canonicalUrl = "https://oceancountygolfcarts.com/golf-cart-buying-guide";
  const breadcrumbItems = [
    { name: "Home", url: "https://oceancountygolfcarts.com" },
    { name: "Golf Cart Buying Guide", url: canonicalUrl }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Complete Golf Cart Buying Guide | Electric vs Gas, Sizes & NJ Rules"
        description="A complete golf cart buying guide: electric vs. gas, 2/4/6-passenger options, street-legal LSV rules in NJ, and pricing. From Ocean County Golf Carts. Call 804-585-7301."
        keywords="golf cart, golf cart buying guide, electric vs gas golf cart, types of golf carts, how much does a golf cart cost, street legal golf cart nj"
        canonicalUrl={canonicalUrl}
      />
      <SchemaMarkup schema={generateServiceSchema()} />
      <SchemaMarkup schema={generateFAQSchema(guideFaqs)} />
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbItems)} />

      {/* Hero */}
      <section
        className="relative py-20 px-4 bg-gradient-to-br from-theme-primary via-blue-800 to-theme-primary text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.85), rgba(29, 78, 216, 0.8)), url('${BASE_URL}/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg')` }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Complete Golf Cart Buying Guide
          </h1>
          <p className="text-xl text-gray-100">
            Everything you need to choose the right golf cart — electric vs. gas, seating, street-legal
            LSV rules in New Jersey, and what to budget — from Ocean County's local dealer.
          </p>
        </div>
      </section>

      {/* What is a golf cart */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">What Is a Golf Cart?</h2>
          <p className="text-lg text-gray-700 mb-4">
            A golf cart is a compact, low-speed vehicle first designed to carry golfers and their clubs
            around a course. Over the years it has become far more — a practical way to get around
            neighborhoods, beach and lake communities, campuses, and worksites. Golf carts fall into a few
            broad categories: recreational carts for cruising and golf, utility carts built for hauling and
            work, and street-legal Low Speed Vehicles (LSVs) that can be registered and driven on public
            roads. Understanding those types is the first step to buying the right one.
          </p>
        </div>
      </section>

      {/* Types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Types of Golf Carts</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Car className="w-10 h-10 text-theme-primary mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Recreational Carts</h3>
              <p className="text-gray-700">
                Great for golf, campgrounds, and cruising the neighborhood. Typically top out around
                15–19 mph and are not street legal.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <FileText className="w-10 h-10 text-theme-orange mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Street-Legal LSVs</h3>
              <p className="text-gray-700">
                Low Speed Vehicles reach 20–25 mph with lights, mirrors, seat belts, and a VIN — so they
                can be titled, registered, and insured. Read our{" "}
                <Link href={`${BASE_URL}/street-legal-golf-carts-nj`} className="text-blue-600 underline hover:text-blue-800">
                  street-legal golf cart guide for NJ
                </Link>
                .
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users className="w-10 h-10 text-green-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Utility Carts</h3>
              <p className="text-gray-700">
                Built to haul people and cargo with beds and higher payloads — ideal for property work,
                events, and larger shore houses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Electric vs gas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Electric vs. Gas Golf Carts</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-theme-primary" /> Electric
              </h3>
              <p className="text-gray-700">
                Quiet, low-maintenance, no emissions, and cheap to charge. Modern lithium batteries deliver
                strong range and long life. Best for the vast majority of buyers — and every cart we sell
                is electric.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-900 flex items-center gap-2">
                <Fuel className="w-5 h-5 text-gray-600" /> Gas
              </h3>
              <p className="text-gray-700">
                Longer range for very heavy, all-day utility use and no charging downtime, but louder,
                higher-maintenance, and produces emissions. A niche choice for most shore and neighborhood
                drivers.
              </p>
            </div>
          </div>
          <p className="text-lg text-gray-700">
            For New Jersey's shore and lake communities, electric is almost always the better fit —
            especially where quiet, clean operation matters.
          </p>
        </div>
      </section>

      {/* Passengers & NJ rules */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">2 vs. 4 vs. 6 Passengers</h2>
          <p className="text-lg text-gray-700 mb-6">
            Match seating to how you'll ride. A <strong>2-passenger</strong> cart is nimble and affordable
            for couples and quick errands. A <strong>4-passenger</strong> cart is the family sweet spot. A
            <strong> 6-passenger</strong> cart carries the whole crew plus guests — perfect for shore houses.
            Browse our{" "}
            <Link href={`${BASE_URL}/inventory`} className="text-blue-600 underline hover:text-blue-800">
              full inventory
            </Link>{" "}
            to compare configurations.
          </p>
          <h2 className="text-3xl font-bold mb-4 text-gray-900">New Jersey Golf Cart Rules</h2>
          <p className="text-lg text-gray-700">
            In New Jersey, a standard golf cart is limited to private property and certain approved paths.
            To drive on public roads you need a street-legal LSV: a 20–25 mph vehicle with full lighting,
            mirrors, seat belts, a windshield, and a VIN, that is titled, registered, and insured. LSVs may
            travel on roads posted at 25 mph or less, and individual towns may add their own rules. Learn
            more about{" "}
            <Link href={`${BASE_URL}/lsv-golf-carts-nj`} className="text-blue-600 underline hover:text-blue-800">
              LSV golf carts in NJ
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 flex items-center gap-2">
            <DollarSign className="w-7 h-7 text-green-600" /> How Much Should You Budget?
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            New electric golf carts generally run from about <strong>$9,000</strong> for a 2-passenger
            model to <strong>$17,000+</strong> for premium, lifted, and street-legal 6-passenger LSVs.
            Battery type (lithium vs. lead-acid), seating, and street-legal equipment drive the price. We
            offer 0% financing on select models to keep payments manageable.
          </p>
          <p className="text-lg text-gray-700">
            Ready to shop? See{" "}
            <Link href={`${BASE_URL}/golf-carts-for-sale`} className="text-blue-600 underline hover:text-blue-800">
              golf carts for sale in Ocean County
            </Link>{" "}
            or compare{" "}
            <Link href={`${BASE_URL}/brands/evolution`} className="text-blue-600 underline hover:text-blue-800">
              EVOLUTION
            </Link>{" "}
            and{" "}
            <Link href={`${BASE_URL}/brands/denago`} className="text-blue-600 underline hover:text-blue-800">
              DENAGO
            </Link>{" "}
            models.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">
            Golf Cart Buying Guide — Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {guideFaqs.map((faq, index) => (
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
          <h2 className="text-4xl font-bold mb-6">Still Have Questions? Talk to a Local Expert</h2>
          <p className="text-xl mb-8">
            Our Ocean County team will help you choose the right golf cart for your budget and how you ride.
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
