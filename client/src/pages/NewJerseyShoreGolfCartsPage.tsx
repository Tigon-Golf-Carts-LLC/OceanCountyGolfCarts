import { Link } from "wouter";
import { BASE_URL } from "@/config/urls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Waves, Sun, Car, Phone, MapPin, Key } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, {
  generateSalesLocalBusinessSchema,
  generateServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema
} from "@/components/SchemaMarkup";

const shoreFaqs = [
  {
    question: "Why are golf carts so popular at the New Jersey shore?",
    answer:
      "At the Jersey Shore, golf carts are the perfect way to get around. Short trips to the beach, boardwalk, marina, or ice cream stand are quicker and easier by cart than by car, parking is scarce all summer, and electric carts are quiet and emission-free. In cart-friendly towns like Long Beach Island, Beach Haven, and Point Pleasant Beach, a golf cart is practically a second family vehicle."
  },
  {
    question: "Do you sell shore-ready and street-legal golf carts?",
    answer:
      "Yes. We sell beach-ready electric carts in 2, 4, and 6-passenger configurations, including street-legal LSV models that can be titled, registered, and insured for New Jersey shore roads posted at 25 mph or less. We'll match you to the right cart for your shore town."
  },
  {
    question: "Can I rent a golf cart for a shore vacation?",
    answer:
      "We offer daily, 3-day, weekly, and monthly golf cart rentals with delivery throughout Ocean County's shore communities — ideal for summer visitors and shore-house owners. Visit our rentals page for pricing and availability."
  }
];

export default function NewJerseyShoreGolfCartsPage() {
  const canonicalUrl = "https://oceancountygolfcarts.com/new-jersey-shore-golf-carts";
  const breadcrumbItems = [
    { name: "Home", url: "https://oceancountygolfcarts.com" },
    { name: "New Jersey Shore Golf Carts", url: canonicalUrl }
  ];

  const shoreTowns = [
    { name: "Long Beach Township (LBI)", href: "/long-beach-township-golf-carts" },
    { name: "Beach Haven", href: "/beach-haven-borough-golf-carts" },
    { name: "Barnegat Light", href: "/barnegat-light-borough-golf-carts" },
    { name: "Surf City", href: "/surf-city-borough-golf-carts" },
    { name: "Ship Bottom", href: "/ship-bottom-borough-golf-carts" },
    { name: "Harvey Cedars", href: "/harvey-cedars-borough-golf-carts" },
    { name: "Seaside Heights", href: "/seaside-heights-borough-golf-carts" },
    { name: "Seaside Park", href: "/seaside-park-borough-golf-carts" },
    { name: "Point Pleasant Beach", href: "/point-pleasant-beach-borough-golf-carts" },
    { name: "Lavallette", href: "/lavallette-borough-golf-carts" },
    { name: "Bay Head", href: "/bay-head-borough-golf-carts" },
    { name: "Mantoloking", href: "/mantoloking-borough-golf-carts" }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Jersey Shore Golf Carts | NJ Shore Golf Cart Sales & Rentals | Ocean County Golf Carts"
        description="New Jersey shore golf carts for sale & rent. Beach-ready EVOLUTION & DENAGO electric and street-legal carts for LBI, Seaside, Point Pleasant & the Jersey Shore. Call 804-585-7301."
        keywords="new jersey shore golf carts, jersey shore golf carts, nj shore golf cart sales, lbi golf carts, beach golf carts nj, shore golf cart rentals"
        canonicalUrl={canonicalUrl}
      />
      <SchemaMarkup schema={generateSalesLocalBusinessSchema()} />
      <SchemaMarkup schema={generateServiceSchema()} />
      <SchemaMarkup schema={generateFAQSchema(shoreFaqs)} />
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
                New Jersey Shore Golf Carts — Sales &amp; Rentals
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                From Long Beach Island to Seaside and Point Pleasant, golf carts are the way the Jersey
                Shore gets around. Shop beach-ready EVOLUTION and DENAGO electric and street-legal carts,
                or rent one for the summer, at your local Ocean County dealer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`${BASE_URL}/inventory`} className="w-full sm:w-auto">
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                    Shop Shore-Ready Golf Carts
                  </Button>
                </Link>
                <Link href={`${BASE_URL}/rentals`} className="w-full sm:w-auto">
                  <Button size="lg" variant="outline" className="text-blue-700 bg-white border-white hover:bg-gray-100 hover:text-blue-700 w-full sm:w-auto">
                    View Rental Options
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={`${BASE_URL}/attached_assets/D6-XT6-4wd-color-PORTIMAO-BLUE_1753135231312.png`}
                alt="Jersey Shore golf cart for sale — Ocean County NJ"
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why carts rule the shore */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">
            The Preferred Ride at the Jersey Shore
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto text-center">
            Nothing says summer down the shore like cruising to the beach in a golf cart. New Jersey's
            barrier islands and bayfront towns were made for carts — narrow low-speed streets, short hops
            to the sand, the boardwalk, or the marina, and tight seasonal parking that makes a full-size
            car more hassle than help. That's why shore families across Ocean County keep an electric cart
            at the house all season.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-theme-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Waves className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Beach-Ready Models</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Electric 2, 4, and 6-passenger carts with the range and durability for daily shore
                  driving and sandy streets.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Street-Legal Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  <Link href={`${BASE_URL}/street-legal-golf-carts-nj`} className="text-blue-600 underline hover:text-blue-800">
                    Street-legal LSV carts
                  </Link>{" "}
                  you can register and insure for shore-town roads posted at 25 mph or less.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key className="w-8 h-8 text-white" />
                </div>
                <CardTitle>Summer Rentals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Visiting? <Link href={`${BASE_URL}/rentals`} className="text-blue-600 underline hover:text-blue-800">Rent a golf cart</Link> by the day, week, or month with delivery to your shore rental.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Shore towns */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 flex items-center justify-center gap-2">
              <Sun className="w-8 h-8 text-theme-orange" /> Jersey Shore Towns We Serve
            </h2>
            <p className="text-xl text-gray-600">
              Golf cart sales, rentals, and service delivered throughout Ocean County's shore communities.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {shoreTowns.map((town) => (
              <Link
                key={town.href}
                href={`${BASE_URL}${town.href}`}
                className="bg-white p-4 rounded-lg shadow-sm text-center text-gray-700 hover:text-blue-700 hover:shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4 text-theme-primary flex-shrink-0" />
                <span className="text-sm font-medium">{town.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Content / internal links */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">
            Shore Golf Cart Sales, Rentals &amp; Service in One Place
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Whether you want to buy a beach cart for your shore house, rent one for a week down the shore,
            or keep an existing cart running through the season, Ocean County Golf Carts has you covered.
            We carry two of the most trusted electric brands — EVOLUTION and DENAGO — in the seating and
            street-legal configurations that fit Jersey Shore life, all backed by financing, factory
            warranties, and local delivery.
          </p>
          <p className="text-lg text-gray-700">
            Explore{" "}
            <Link href={`${BASE_URL}/golf-carts-for-sale`} className="text-blue-600 underline hover:text-blue-800">
              golf carts for sale
            </Link>
            , browse the full{" "}
            <Link href={`${BASE_URL}/inventory`} className="text-blue-600 underline hover:text-blue-800">
              NJ golf cart inventory
            </Link>
            , reserve a{" "}
            <Link href={`${BASE_URL}/rentals`} className="text-blue-600 underline hover:text-blue-800">
              shore golf cart rental
            </Link>
            , or book{" "}
            <Link href={`${BASE_URL}/services`} className="text-blue-600 underline hover:text-blue-800">
              mobile golf cart repair
            </Link>{" "}
            for your shore town.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">
            Jersey Shore Golf Carts — Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {shoreFaqs.map((faq, index) => (
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
          <h2 className="text-4xl font-bold mb-6">Get Shore-Ready with Ocean County Golf Carts</h2>
          <p className="text-xl mb-8">
            Call for Jersey Shore golf cart sales, rentals, and delivery — new EVOLUTION and DENAGO models available now.
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
