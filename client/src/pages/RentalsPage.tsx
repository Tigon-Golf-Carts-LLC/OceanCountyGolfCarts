import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { BASE_URL } from "@/config/urls";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, {
  generateLocalBusinessSchema,
  generateRentalServiceSchema,
  generateFAQSchema,
  generateBreadcrumbSchema
} from "@/components/SchemaMarkup";
import { Check, Phone, Users, Car } from "lucide-react";

const rentalFaqs = [
  {
    question: "How much does it cost to rent a golf cart in Ocean County?",
    answer:
      "Golf cart rentals start at $245 for a 1-day 4-seater rental. Weekly 4-seater rentals are $1,050 (about $150/day) and monthly rentals are $2,800. Six-seater carts start at $295/day and utility carts start at $245/day. Longer rentals unlock the biggest savings — up to 60%+ off the daily rate."
  },
  {
    question: "How much is it to rent a golf cart for a week?",
    answer:
      "A weekly 4-seater golf cart rental is $1,050 and a weekly 6-seater is $1,400. Weekly rentals are our most popular option for vacations on Long Beach Island, Seaside, and Point Pleasant Beach."
  },
  {
    question: "Do you deliver rental golf carts?",
    answer:
      "Yes. We deliver and pick up rental golf carts throughout Ocean County. A delivery fee of $6/mile applies for locations beyond 10 miles. Every rental arrives fully charged, insured, and ready to go."
  },
  {
    question: "Are your rental golf carts street legal?",
    answer:
      "Our rental carts are equipped with seat belts and are suitable for use on roads posted at low speed limits in many Ocean County beach communities. Ask our team about street-legal LSV options when you reserve."
  },
  {
    question: "What areas do you serve for golf cart rentals?",
    answer:
      "We rent golf carts across all of Ocean County, including Toms River, Brick, Point Pleasant, Point Pleasant Beach, Seaside Heights, Seaside Park, Beach Haven, Long Beach Township, Barnegat, Stafford, Lavallette, and every surrounding town."
  }
];

export default function RentalsPage() {
  const rentalFeatures = [
    "Street legal with seat belts",
    "Flexible pickup and return",
    "Fully charged and ready to go",
    "Insurance coverage included",
    "24/7 customer support",
    "No hidden fees"
  ];

  const fourSeaterPlans = [
    {
      title: "Daily Rental",
      description: "When you just need one day.",
      price: 245,
      duration: "1 day",
      renewal: "Renews at $245/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: null
    },
    {
      title: "3 Day Rental", 
      description: "When you need a few days",
      price: 685,
      duration: "3 days",
      renewal: "Renews at $228.34/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 6.8%"
    },
    {
      title: "Weekly Rental",
      description: "When you need a week of fun.",
      price: 1050,
      duration: "7 days",
      renewal: "Renews at $150/daily term", 
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 38.7%"
    },
    {
      title: "Monthly Rental",
      description: "When you need a month to explore.",
      price: 2800,
      duration: "30 days",
      renewal: "Renews at $94/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 61.6%"
    }
  ];

  const sixSeaterPlans = [
    {
      title: "Daily Rental",
      description: "When you just need one day.",
      price: 295,
      duration: "1 day",
      renewal: "Renews at $295/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: null
    },
    {
      title: "3 Day Rental",
      description: "When you need a few days",
      price: 735,
      duration: "3 days",
      renewal: "Renews at $245/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 16.9%"
    },
    {
      title: "Weekly Rental",
      description: "When you need a week of fun.",
      price: 1400,
      duration: "7 days",
      renewal: "Renews at $200/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 32.2%"
    },
    {
      title: "Monthly Rental",
      description: "When you need a month to explore.",
      price: 3500,
      duration: "30 days",
      renewal: "Renews at $116.67/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 60.4%"
    }
  ];

  const utilityPlans = [
    {
      title: "Daily Rental",
      description: "When you just need one day.",
      price: 245,
      duration: "1 day",
      renewal: "Renews at $245/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: null
    },
    {
      title: "3 Day Rental",
      description: "When you need a few days",
      price: 685,
      duration: "3 days",
      renewal: "Renews at $228.34/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 6.8%"
    },
    {
      title: "Weekly Rental",
      description: "When you need a week of fun.",
      price: 1050,
      duration: "7 days",
      renewal: "Renews at $150/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 38.7%"
    },
    {
      title: "Monthly Rental",
      description: "When you need a month to explore.",
      price: 2800,
      duration: "30 days",
      renewal: "Renews at $94/daily term",
      delivery: "Delivery Fee $6/mile term",
      badge: "RECOMMENDED",
      savings: "SAVE 61.6%"
    }
  ];

  const RentalSection = ({ title, icon, plans, subtitle }: { title: string; icon: any; plans: any[]; subtitle: string }) => (
    <section className="py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            {icon}
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          </div>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <Badge className="bg-theme-orange text-white text-xs px-3 py-1 mb-4">
                    {plan.badge}
                  </Badge>
                  <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                  
                  {plan.savings && (
                    <div className="bg-green-100 border border-green-300 rounded-full px-3 py-1 text-green-700 text-sm font-medium mb-4">
                      {plan.savings}
                    </div>
                  )}
                  
                  <div className="text-4xl font-bold text-theme-primary mb-2">
                    ${plan.price.toLocaleString()}
                  </div>
                  <div className="text-gray-600 text-sm mb-4">{plan.duration}*</div>
                  
                  <div className="text-xs text-gray-500 mb-4">
                    <div>{plan.renewal}*</div>
                    <div>{plan.delivery}*</div>
                  </div>
                </div>
                
                <Button className="w-full bg-theme-orange hover:bg-orange-600 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  RESERVE TODAY
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <SEOHead
        title="Golf Cart Rentals in Ocean County, NJ | Daily & Weekly"
        description="Rent golf carts in Ocean County, NJ — daily, weekly & monthly from $245/day with delivery. 4, 6-seater & utility carts. Call 804-585-7301 to reserve."
        keywords="golf cart rentals near me, golf cart rental Ocean County, how much to rent a golf cart, weekly golf cart rental NJ, beach golf cart rental"
        canonicalUrl="https://oceancountygolfcarts.com/rentals"
      />
      <SchemaMarkup schema={generateLocalBusinessSchema()} />
      <SchemaMarkup schema={generateRentalServiceSchema()} />
      <SchemaMarkup schema={generateFAQSchema(rentalFaqs)} />
      <SchemaMarkup schema={generateBreadcrumbSchema([
        { name: "Home", url: "https://oceancountygolfcarts.com" },
        { name: "Golf Cart Rentals", url: "https://oceancountygolfcarts.com/rentals" }
      ])} />

      <div className="min-h-screen bg-gray-50">
        {/* Why Choose Our Rentals Section */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-6 text-gray-900">
                Golf Cart Rentals in Ocean County, NJ
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                Rent a golf cart for the beach, a special event, or your next Ocean County vacation.
                We offer daily, 3-day, weekly, and monthly rentals on 4-seater, 6-seater, and utility
                carts starting at just $245/day, with delivery and pickup across every Ocean County town —
                Toms River, Brick, Point Pleasant, Seaside, Long Beach Island, Barnegat, and more.
              </p>
              <p className="text-lg text-gray-600">
                Prefer to own? Explore{" "}
                <Link href={`${BASE_URL}/golf-carts-for-sale`} className="text-blue-600 underline hover:text-blue-800">
                  golf carts for sale in Ocean County
                </Link>{" "}
                or book{" "}
                <Link href={`${BASE_URL}/services`} className="text-blue-600 underline hover:text-blue-800">
                  mobile golf cart repair near you
                </Link>
                .
              </p>
            </div>

            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Why Choose Our Golf Cart Rentals?
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
              {rentalFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4 Seater Plans */}
        <RentalSection 
          title="4 Seater Golf Cart Rental Plans"
          icon={<Users className="w-8 h-8 text-blue-600" />}
          plans={fourSeaterPlans}
          subtitle="Choose the perfect rental duration for your needs"
        />

        {/* 6 Seater Plans */}
        <RentalSection 
          title="6 Seater Golf Cart Rental Plans"
          icon={<Users className="w-8 h-8 text-blue-600" />}
          plans={sixSeaterPlans}
          subtitle="Choose the perfect rental duration for your needs"
        />

        {/* Utility Plans */}
        <RentalSection 
          title="Utility Golf Cart Rental Plans"
          icon={<Car className="w-8 h-8 text-blue-600" />}
          plans={utilityPlans}
          subtitle="Choose the perfect rental duration for your needs"
        />

        {/* Need Help Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Need Help Choosing?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Our friendly team is here to help you select the perfect golf cart rental for your needs. Whether it's for a special event, vacation, or business use, we have the right cart at the right price.
            </p>
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              Call Now 804-585-7301
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-gray-900 text-center">
              Golf Cart Rental FAQs
            </h2>
            <div className="space-y-6">
              {rentalFaqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Disclaimer */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm text-gray-500">
              * All prices subject to availability and terms of service. Delivery fee applies for locations beyond 10 miles.<br />
              Rental periods are calculated in 24-hour increments. Early returns do not qualify for refunds.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}