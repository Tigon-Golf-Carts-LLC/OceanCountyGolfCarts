import { Link } from "wouter";
import { BASE_URL } from "@/config/urls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Wrench, Percent, Leaf, CheckCircle, MapPin } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Vehicle } from "@shared/schema";
import InventorySection from "@/components/InventorySection";
import BrandsSection from "@/components/BrandsSection";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebsiteSchema,
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateOfferCatalogSchema,
  generateAutoDealerSchema,
  generateFAQSchema
} from "@/components/SchemaMarkup";

const homeFaqs = [
  {
    question: "Who sells golf carts near me in Ocean County, NJ?",
    answer:
      "Ocean County Golf Carts is the local authorized dealer for Evolution and Denago electric golf carts, serving all of Ocean County, NJ. Visit us in Toms River or shop our inventory online, then let us handle sales, financing, delivery, and service after the sale."
  },
  {
    question: "Where is Ocean County Golf Carts located?",
    answer:
      "Our main showroom is at 16 Anchor Square, Toms River, NJ 08753, right in the heart of Ocean County. We also serve nearby communities including Brick, Lakewood, Barnegat, Lacey Township, Point Pleasant, Seaside, and Long Beach Island."
  },
  {
    question: "What golf cart brands do you carry?",
    answer:
      "We are an authorized dealer for Evolution and Denago electric golf carts, offering 2, 4, and 6-passenger models in standard, lifted, and street-legal LSV configurations. Every cart is backed by factory warranties and genuine parts."
  },
  {
    question: "Do you offer financing on golf carts?",
    answer:
      "Yes. We offer flexible financing, including 0% financing on select new models, so you can spread out payments. Our team will help you find the right cart and a payment plan that fits your budget."
  },
  {
    question: "Do you deliver golf carts?",
    answer:
      "We deliver golf carts throughout Ocean County and across New Jersey — from the Jersey Shore to Central and North Jersey. Call 804-585-7301 for a delivery quote to your town."
  }
];

export default function HomePage() {
  const { data: vehicles } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles"],
  });

  const featuredVehicles = vehicles?.slice(0, 3) || [];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="New Jersey Golf Cart Dealership | Ocean County Golf Carts"
        description="Looking for a golf cart near me? Ocean County Golf Carts is your local NJ dealer for Evolution & Denago carts — sales, rentals & repair. Call 804-585-7301."
        keywords="golf cart near me, who sells golf carts near me, south jersey golf carts, golf cart Ocean County, new jersey golf cart dealership, golf carts for sale, golf cart rentals, Evolution golf carts, Denago electric carts"
        canonicalUrl="https://oceancountygolfcarts.com/"
        ogImage="/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg"
      />
      {/* Schema Markup */}
      <SchemaMarkup schema={generateOrganizationSchema()} />
      <SchemaMarkup schema={generateAutoDealerSchema()} />
      <SchemaMarkup schema={generateLocalBusinessSchema()} />
      <SchemaMarkup schema={generateWebsiteSchema()} />
      <SchemaMarkup schema={generateServiceSchema()} />
      {vehicles && <SchemaMarkup schema={generateOfferCatalogSchema(vehicles)} />}
      <SchemaMarkup schema={generateFAQSchema(homeFaqs)} />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-theme-primary via-blue-800 to-theme-primary text-white py-20 px-4 bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(59, 130, 246, 0.8), rgba(14, 46, 85, 0.8)), url('${BASE_URL}/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg')"}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                New Jersey's Premier Golf Cart Dealership in Ocean County, NJ
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Ocean County Golf Carts is an authorized New Jersey golf cart dealership carrying Evolution
                and Denago electric carts. As your local golf cart dealership in NJ, we handle sales,
                rentals, and repair for Ocean County and all surrounding towns, beach towns, and islands.
              </p>
              <p className="text-lg mb-8 text-gray-100">
                <Link href={`${BASE_URL}/golf-carts-for-sale`} className="underline font-semibold hover:text-white">
                  Browse golf carts for sale in Ocean County
                </Link>
                {" "}(including{" "}
                <Link href={`${BASE_URL}/toms-river-township-golf-carts`} className="underline font-semibold hover:text-white">
                  golf carts for sale in Toms River, NJ
                </Link>
                ), reserve{" "}
                <Link href={`${BASE_URL}/rentals`} className="underline font-semibold hover:text-white">
                  golf cart rentals
                </Link>
                , or book{" "}
                <Link href={`${BASE_URL}/services`} className="underline font-semibold hover:text-white">
                  mobile golf cart repair near you
                </Link>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`${BASE_URL}/inventory`} className="w-full sm:w-auto">
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                    Shop New Jersey Golf Carts for Sale →
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-gray-900 bg-white border-white hover:bg-gray-100 hover:text-gray-900 w-full sm:w-auto">
                  Call Now 804-585-7301
                </Button>
              </div>
              <p className="mt-6 text-base text-gray-100">
                We deliver golf carts throughout New Jersey — including{" "}
                <Link href={`${BASE_URL}/north-jersey-golf-carts`} className="underline font-semibold hover:text-white">
                  North Jersey
                </Link>
                , Central NJ, and the Jersey Shore.{" "}
                <Link href={`${BASE_URL}/new-jersey-shore-golf-carts`} className="underline font-semibold hover:text-white">
                  Explore Jersey Shore golf carts →
                </Link>
              </p>
            </div>
            <div className="relative">
              <img 
                src={`${BASE_URL}/attached_assets/D6-XT6-4wd-color-PORTIMAO-BLUE_1753135231312.png`} 
                alt="Golf Cart" 
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NJ Dealership Authority Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">
            Your Authorized New Jersey Golf Cart Dealership
          </h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              For over 15 years, Ocean County Golf Carts has been a trusted New Jersey golf cart
              dealership serving buyers across Ocean County and the greater NJ shore. As an authorized
              dealer for Evolution and Denago, we sell new electric and street-legal LSV golf carts,
              back every sale with factory warranties and genuine parts, and provide in-house service
              you can count on long after the purchase.
            </p>
            <p>
              Our team knows New Jersey golf cart rules inside and out — from LSV street-legal
              requirements and Ocean County registration to which models fit beach communities, 55+
              neighborhoods, and downtown streets. We offer financing to make ownership easy, free local
              delivery throughout Ocean County, and honest guidance to help you choose the right cart.
              That local expertise is why Ocean County trusts us as their golf cart dealership in NJ.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href={`${BASE_URL}/about`}>
              <Button size="lg" className="bg-theme-primary hover:bg-blue-900 text-white">
                About Our Dealership
              </Button>
            </Link>
            <a href="https://tigongolfcarts.com/apply-for-financing/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-theme-primary text-theme-primary hover:bg-blue-50">
                Financing Options
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Why Choose Ocean County Golf Carts?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We're more than just a dealership - we're your partner in golf cart ownership 
            with comprehensive services and unmatched expertise.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-theme-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600">
                Top-rated brands including Yamaha, Club Car, EZGO, and Evolution with rigorous quality standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Service</h3>
              <p className="text-gray-600">
                Professional maintenance, repairs, and customization by certified technicians.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">0% Financing</h3>
              <p className="text-gray-600">
                Flexible payment options with 0% financing available on select models.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-theme-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Eco-Friendly</h3>
              <p className="text-gray-600">
                Electric golf carts for sustainable, quiet, and efficient transportation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Ocean County Golf Carts - Top Golf Cart and LSV Brands
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            We carry the most trusted names in Golf Carts and Low Speed Vehicles
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mb-12">
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Club Car</h3>
              <p className="text-sm text-gray-600">Premium golf carts with advanced technology</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">EZ-GO</h3>
              <p className="text-sm text-gray-600">Reliable and efficient golf cart solutions</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Denago</h3>
              <p className="text-sm text-gray-600">High-quality performance golf carts</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Evolution</h3>
              <p className="text-sm text-gray-600">Luxury golf carts with premium features</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Tomberlin</h3>
              <p className="text-sm text-gray-600">Street-legal LSV and golf cart options</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center">
              <h3 className="font-semibold text-gray-700 mb-2">Swift EV</h3>
              <p className="text-sm text-gray-600">Electric vehicle innovation</p>
            </div>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            As an authorized dealer, we provide genuine parts, factory warranties, and certified service for all major brands.
          </p>

          <div className="flex flex-wrap justify-center gap-8 text-green-600">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Factory Warranties</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Genuine Parts</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Certified Service</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              <span>Expert Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Golf Carts Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Featured Golf Carts
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Check out some of our most popular models
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Evolution D5 Maverick 4 Plus */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src={`${BASE_URL}/attached_assets/EVOLUTIOND5MAVERICK4PLUS_1751893115781_1753135350621.jpg`} 
                  alt="Evolution D5 Maverick 4 Plus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white text-xs px-2 py-1">NEW</Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Evolution D5 Maverick 4 Plus</CardTitle>
                <CardDescription className="text-left text-gray-600 text-sm">
                  Premium electric golf cart with advanced features and superior performance. Seats 4 passengers with extended range capability.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    $12,995
                  </span>
                  <Link href={`${BASE_URL}/vehicles/evolution-d5-maverick-4-plus`}>
                    <Button size="sm" className="bg-theme-orange hover:bg-orange-600 text-white px-4 py-2">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Evolution D6 Max GT4 */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src={`${BASE_URL}/attached_assets/EVOLUTIOND6MAXGT4_1751893159004_1753135350620.jpg`} 
                  alt="Evolution D6 Max GT4"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white text-xs px-2 py-1">NEW</Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Evolution D6 Max GT4</CardTitle>
                <CardDescription className="text-left text-gray-600 text-sm">
                  High-performance 4-passenger golf cart with cutting-edge technology and sporty design.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    $16,995
                  </span>
                  <Link href={`${BASE_URL}/vehicles/evolution-d6-max-gt4`}>
                    <Button size="sm" className="bg-theme-orange hover:bg-orange-600 text-white px-4 py-2">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Denago EV City */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src={`${BASE_URL}/attached_assets/DENAGONEVCITY_1751893047472_1753135231313.jpg`} 
                  alt="Denago EV City"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-green-500 text-white text-xs px-2 py-1">NEW</Badge>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-semibold">Denago EV City</CardTitle>
                <CardDescription className="text-left text-gray-600 text-sm">
                  Urban mobility solution with street-legal capabilities and modern design for city transportation.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">
                    $11,995
                  </span>
                  <Link href={`${BASE_URL}/vehicles/denago-ev-city`}>
                    <Button size="sm" className="bg-theme-orange hover:bg-orange-600 text-white px-4 py-2">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <Link href={`${BASE_URL}/inventory`}>
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              View Full Inventory
            </Button>
          </Link>
        </div>
      </section>

      {/* About NJ Golf Carts Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                About Ocean County Golf Carts
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over 15 years of experience in the golf cart industry, we've built our reputation on providing exceptional service and quality products to customers throughout Ocean County and surrounding areas.
              </p>
              
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>

              <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                Learn More
              </Button>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d392223.7212880685!2d-74.5888992813194!3d39.82386102335656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c16c287049b687%3A0x8c25d4d20966015a!2sOcean%20County%2C%20NJ!5e0!3m2!1sen!2sus!4v1753213632988!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{border: 0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ocean County, NJ Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ocean County Towns Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Golf Carts for Every Ocean County Town
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Professional golf cart services delivered to your town
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
            <Link href={`${BASE_URL}/toms-river-township-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Toms River Township</div>
            </Link>
            <Link href={`${BASE_URL}/lakewood-township-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Lakewood Township</div>
            </Link>
            <Link href={`${BASE_URL}/brick-township-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Brick Township</div>
            </Link>
            <Link href={`${BASE_URL}/jackson-township-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Jackson Township</div>
            </Link>
            <Link href={`${BASE_URL}/point-pleasant-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Point Pleasant</div>
            </Link>
            <Link href={`${BASE_URL}/seaside-heights-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Seaside Heights</div>
            </Link>
            <Link href={`${BASE_URL}/beach-haven-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Beach Haven</div>
            </Link>
            <Link href={`${BASE_URL}/long-beach-township-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Long Beach Township</div>
            </Link>
            <Link href={`${BASE_URL}/stafford-township-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Stafford Township</div>
            </Link>
            <Link href={`${BASE_URL}/barnegat-township-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Barnegat Township</div>
            </Link>
            <Link href={`${BASE_URL}/manchester-township-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Manchester Township</div>
            </Link>
            <Link href={`${BASE_URL}/berkeley-township-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Berkeley Township</div>
            </Link>
            <Link href={`${BASE_URL}/dover-township-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Dover Township</div>
            </Link>
            <Link href={`${BASE_URL}/eagleswood-township-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Eagleswood Township</div>
            </Link>
            <Link href={`${BASE_URL}/little-egg-harbor-township-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Little Egg Harbor Township</div>
            </Link>
            <Link href={`${BASE_URL}/ocean-township-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Ocean Township</div>
            </Link>
            <Link href={`${BASE_URL}/plumsted-township-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Plumsted Township</div>
            </Link>
            <Link href={`${BASE_URL}/barnegat-light-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Barnegat Light</div>
            </Link>
            <Link href={`${BASE_URL}/bay-head-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Bay Head</div>
            </Link>
            <Link href={`${BASE_URL}/beachwood-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Beachwood</div>
            </Link>
            <Link href={`${BASE_URL}/harvey-cedars-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Harvey Cedars</div>
            </Link>
            <Link href={`${BASE_URL}/island-heights-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Island Heights</div>
            </Link>
            <Link href={`${BASE_URL}/lavallette-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Lavallette</div>
            </Link>
            <Link href={`${BASE_URL}/mantoloking-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Mantoloking</div>
            </Link>
            <Link href={`${BASE_URL}/ocean-gate-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Ocean Gate</div>
            </Link>
            <Link href={`${BASE_URL}/pine-beach-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Pine Beach</div>
            </Link>
            <Link href={`${BASE_URL}/point-pleasant-beach-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Point Pleasant Beach</div>
            </Link>
            <Link href={`${BASE_URL}/seaside-park-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Seaside Park</div>
            </Link>
            <Link href={`${BASE_URL}/ship-bottom-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Ship Bottom</div>
            </Link>
            <Link href={`${BASE_URL}/south-toms-river-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">South Toms River</div>
            </Link>
            <Link href={`${BASE_URL}/surf-city-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Surf City</div>
            </Link>
            <Link href={`${BASE_URL}/tuckerton-borough-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Tuckerton</div>
            </Link>
            <Link href={`${BASE_URL}/lacey-township-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">Lacey Township</div>
            </Link>
            <Link href={`${BASE_URL}/new-hanover-township-golf-carts`} className="bg-blue-50 hover:bg-blue-100 p-4 rounded-lg transition-colors">
              <div className="text-sm font-semibold text-blue-700">New Hanover Township</div>
            </Link>
          </div>
          
          <p className="text-gray-600 mb-8">
            Serving all 33 Ocean County municipalities! Professional golf cart sales, service, and rentals delivered throughout the region.
          </p>
        </div>
      </section>

      {/* South Jersey Golf Carts Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 text-center">
            South Jersey Golf Carts — Ocean County's Local Dealer
          </h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              Ocean County sits at the heart of South Jersey golf cart country. Our stretch of the
              coast — from the barrier-island beaches of{" "}
              <Link href={`${BASE_URL}/long-beach-township-golf-carts`} className="text-blue-600 underline hover:text-blue-800">
                Long Beach Island (LBI)
              </Link>{" "}
              to the lakes and neighborhoods of{" "}
              <Link href={`${BASE_URL}/toms-river-township-golf-carts`} className="text-blue-600 underline hover:text-blue-800">
                Toms River
              </Link>{" "}
              and the bayside communities of{" "}
              <Link href={`${BASE_URL}/barnegat-township-golf-carts`} className="text-blue-600 underline hover:text-blue-800">
                Barnegat
              </Link>{" "}
              — is built for golf carts. Short distances, low speed limits, and endless summer trips
              to the beach, marina, and downtown make an electric cart the perfect second vehicle.
            </p>
            <p>
              As a local South Jersey dealer, Ocean County Golf Carts serves shore towns across the
              region with new Evolution and Denago carts, street-legal LSV models, financing, delivery,
              and in-house service. Whether you live year-round in Ocean County or own a summer place
              along the Jersey Shore, we make owning a golf cart simple and stress-free.
            </p>
          </div>
        </div>
      </section>

      {/* Find a Golf Cart Near You Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Find a Golf Cart Near You — Ocean County, NJ Dealer
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Searching for a golf cart near me? Ocean County Golf Carts is your local golf cart
              Ocean County dealer, serving Toms River, Brick, Lakewood, Barnegat, Lacey Township,
              Point Pleasant, Seaside, and Long Beach Island. Stop by our Toms River showroom or call
              804-585-7301 and we'll help you find the right cart close to home.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://maps.google.com/maps?q=Ocean%20County%20Golf%20Carts%2016%20Anchor%20Square%20Toms%20River%20NJ%2008753&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ocean County Golf Carts — 16 Anchor Square, Toms River, NJ 08753"
            />
          </div>
          <p className="text-center text-gray-600 mt-4">
            Ocean County Golf Carts · 16 Anchor Square, Toms River, NJ 08753 · 804-585-7301
          </p>
        </div>
      </section>

      {/* What is a Golf Cart Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-6 text-gray-900 text-center">
            What is a Golf Cart?
          </h3>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              A golf cart is a compact electric (or gas) vehicle originally designed to carry players
              around a golf course, but today they're used for so much more. Modern carts come in a few
              main types. A standard recreational cart tops out around 15–19 mph and is perfect for
              cruising gated communities, campgrounds, and beach neighborhoods. A Low Speed Vehicle
              (LSV) is a street-legal cart that reaches 20–25 mph and includes seat belts, lights, turn
              signals, mirrors, a windshield, and a VIN, so it can be titled, registered, and insured
              for local roads. Utility carts add cargo beds and towing capacity for property, farm, and
              work use.
            </p>
            <p>
              From weekend beach runs to daily errands, an electric golf cart is a quiet, eco-friendly,
              and affordable way to get around Ocean County.{" "}
              <Link href={`${BASE_URL}/inventory`} className="text-blue-600 underline hover:text-blue-800 font-semibold">
                Browse our golf cart inventory
              </Link>{" "}
              to find the right type for you.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 text-gray-900 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {homeFaqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Get Started Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Contact us today for personalized service and expert advice
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Ocean View</h3>
              <p className="text-sm text-gray-600 mb-2">101 NJ 50, Ocean View, NJ 08230</p>
              <p className="text-blue-600 font-semibold">804-585-7301</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Bayville</h3>
              <p className="text-sm text-gray-600 mb-2">155 Atlantic City Blvd, Bayville, NJ 08721</p>
              <p className="text-blue-600 font-semibold">804-585-7301</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Waretown</h3>
              <p className="text-sm text-gray-600 mb-2">526 US 9, Waretown, NJ 08758</p>
              <p className="text-blue-600 font-semibold">804-585-7301</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Pleasantville</h3>
              <p className="text-sm text-gray-600 mb-2">7000 Black Horse Pike, Pleasantville, NJ 08232</p>
              <p className="text-blue-600 font-semibold">804-585-7301</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Ocean County Golf Carts</h3>
              <p className="text-sm text-gray-600 mb-2">Ocean County</p>
              <p className="text-blue-600 font-semibold">804-585-7301</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Main Contact</h3>
            <p className="text-gray-600 mb-4">For general inquiries and support</p>
            <div className="flex justify-center items-center gap-4">
              <span className="text-2xl font-bold text-blue-600">804-585-7301</span>
              <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
