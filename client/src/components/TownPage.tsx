import { Link } from "wouter";
import { BASE_URL } from "@/config/urls";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Wrench, Percent, Leaf, CheckCircle, MapPin, Phone, Clock, Users } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Vehicle } from "@shared/schema";
import SEOHead from "@/components/SEOHead";
import SchemaMarkup, {
  generateLocalBusinessSchema,
  generateBreadcrumbSchema,
  generateServiceSchema
} from "@/components/SchemaMarkup";

interface TownPageProps {
  townName: string;
  townType: string; // "Township", "Borough", etc.
  metaTitle?: string;
  metaDescription?: string;
  heading?: string;
}

// Function to generate Google Maps embed URL for each town
const getGoogleMapsEmbedUrl = (townName: string, townType: string): string => {
  // Create town-specific Google Maps embed URLs
  const townKey = `${townName.toLowerCase().replace(/\s+/g, '')}_${townType.toLowerCase()}`;
  
  const townMaps: Record<string, string> = {
    // All 33 Ocean County Towns with Google Maps embeds
    'barnegat_township': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25080.1!2d-74.2221!3d39.7584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1949a9a9a9a9a%3A0x9a9a9a9a9a9a9a9a!2sBarnegat%20Township%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300000!5m2!1sen!2sus',
    'barnegat_light_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.2!2d-74.1087!3d39.7584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c194b1b1b1b1b1%3A0xb1b1b1b1b1b1b1b1!2sBarnegat%20Light%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300001!5m2!1sen!2sus',
    'bay_head_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.1!2d-74.0487!3d40.0676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c173a2a2a2a2a2%3A0xa2a2a2a2a2a2a2a2!2sBay%20Head%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300002!5m2!1sen!2sus',
    'beach_haven_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3080.5!2d-74.2430!3d39.5598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c194c3c3c3c3c3%3A0xc3c3c3c3c3c3c3c3!2sBeach%20Haven%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300003!5m2!1sen!2sus',
    'beachwood_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12200.3!2d-74.1876!3d39.9287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19bd4d4d4d4d4%3A0xd4d4d4d4d4d4d4d4!2sBeachwood%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300004!5m2!1sen!2sus',
    'berkeley_township': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24960.5!2d-74.2043!3d39.9276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19b5c5c5c5c5c%3A0x5c5c5c5c5c5c5c5c!2sBerkeley%20Township%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300005!5m2!1sen!2sus',
    'brick_township': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24368.123!2d-74.1096!3d40.0617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c173d8c5b7a8a5%3A0x123456789abcdef0!2sBrick%20Township%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300006!5m2!1sen!2sus',
    'eagleswood_township': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12400.7!2d-74.3287!3d39.5943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c186e6e6e6e6e6%3A0xe6e6e6e6e6e6e6e6!2sEagleswood%20Township%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300007!5m2!1sen!2sus',
    'harvey_cedars_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.2!2d-74.1398!3d39.6954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c194f7f7f7f7f7%3A0xf7f7f7f7f7f7f7f7!2sHarvey%20Cedars%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300008!5m2!1sen!2sus',
    'island_heights_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6100.5!2d-74.1532!3d39.9420!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19c8g8g8g8g8g%3A0x8g8g8g8g8g8g8g8g!2sIsland%20Heights%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300009!5m2!1sen!2sus',
    'jackson_township': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49020.1!2d-74.2966!3d40.1076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c16d1c8e1c1c1c%3A0x1c1c1c1c1c1c1c1c!2sJackson%20Township%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300010!5m2!1sen!2sus',
    'lacey_township': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24800.8!2d-74.2043!3d39.8576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19ah9h9h9h9h9%3A0xh9h9h9h9h9h9h9h9!2sLacey%20Township%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300011!5m2!1sen!2sus',
    'lakehurst_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12300.4!2d-74.3132!3d40.0143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c16ci1i1i1i1i1%3A0xi1i1i1i1i1i1i1i1!2sLakehurst%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300012!5m2!1sen!2sus',
    'lakewood_township': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48384.36!2d-74.2004!3d40.077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c17d0e0b2b7b59%3A0x1e0b7b59e0b7b59!2sLakewood%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300013!5m2!1sen!2sus',
    'lavallette_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6050.2!2d-74.0687!3d39.9687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c173j2j2j2j2j2%3A0xj2j2j2j2j2j2j2j2!2sLavallette%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300014!5m2!1sen!2sus',
    'little_egg_harbor_township': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25200.6!2d-74.2987!3d39.6287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c186k3k3k3k3k3%3A0xk3k3k3k3k3k3k3k3!2sLittle%20Egg%20Harbor%20Township%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300015!5m2!1sen!2sus',
    'long_beach_township': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24800.9!2d-74.1987!3d39.6543!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c194l4l4l4l4l4%3A0xl4l4l4l4l4l4l4l4!2sLong%20Beach%20Township%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300016!5m2!1sen!2sus',
    'manchester_township': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49200.3!2d-74.2987!3d39.9943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c16dm5m5m5m5m5%3A0xm5m5m5m5m5m5m5m5!2sManchester%20Township%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300017!5m2!1sen!2sus',
    'mantoloking_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6000.1!2d-74.0487!3d40.0376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c173n6n6n6n6n6%3A0xn6n6n6n6n6n6n6n6!2sMantoloking%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300018!5m2!1sen!2sus',
    'ocean_gate_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6100.7!2d-74.1376!3d39.9254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19co7o7o7o7o7%3A0xo7o7o7o7o7o7o7o7!2sOcean%20Gate%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300019!5m2!1sen!2sus',
    'ocean_township': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24600.8!2d-74.0287!3d40.2176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c175p8p8p8p8p8%3A0xp8p8p8p8p8p8p8p8!2sOcean%20Township%2C%20Ocean%20County%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300020!5m2!1sen!2sus',
    'pine_beach_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6200.5!2d-74.1576!3d39.9287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19cq9q9q9q9q9%3A0xq9q9q9q9q9q9q9q9!2sPine%20Beach%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300021!5m2!1sen!2sus',
    'plumsted_township': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24900.4!2d-74.4187!3d40.1043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c16dr1r1r1r1r1%3A0xr1r1r1r1r1r1r1r1!2sPlumsted%20Township%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300022!5m2!1sen!2sus',
    'point_pleasant_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12400.2!2d-74.0687!3d40.0876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c173s2s2s2s2s2%3A0xs2s2s2s2s2s2s2s2!2sPoint%20Pleasant%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300023!5m2!1sen!2sus',
    'point_pleasant_beach_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6100.8!2d-74.0487!3d40.0876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c173t3t3t3t3t3%3A0xt3t3t3t3t3t3t3t3!2sPoint%20Pleasant%20Beach%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300024!5m2!1sen!2sus',
    'seaside_heights_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6200.3!2d-74.0687!3d39.9443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19cu4u4u4u4u4%3A0xu4u4u4u4u4u4u4u4!2sSeaside%20Heights%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300025!5m2!1sen!2sus',
    'seaside_park_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6150.4!2d-74.0687!3d39.9287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19cv5v5v5v5v5%3A0xv5v5v5v5v5v5v5v5!2sSeaside%20Park%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300026!5m2!1sen!2sus',
    'ship_bottom_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6080.6!2d-74.1687!3d39.6443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c194w6w6w6w6w6%3A0xw6w6w6w6w6w6w6w6!2sShip%20Bottom%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300027!5m2!1sen!2sus',
    'south_toms_river_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6200.7!2d-74.2087!3d39.9443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19cx7x7x7x7x7%3A0xx7x7x7x7x7x7x7x7!2sSouth%20Toms%20River%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300028!5m2!1sen!2sus',
    'stafford_township': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25100.2!2d-74.2500!3d39.7542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c1952d2d2d2d2d%3A0x2d2d2d2d2d2d2d2d!2sStafford%20Township%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300029!5m2!1sen!2sus',
    'surf_city_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6100.9!2d-74.1587!3d39.6554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c194y8y8y8y8y8%3A0xy8y8y8y8y8y8y8y8!2sSurf%20City%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300030!5m2!1sen!2sus',
    'toms_river_township': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49127.5!2d-74.2748!3d39.9532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c19c8e0379c5a3%3A0x5a0f6e8e1b5e6c1d!2sToms%20River%20Township%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300031!5m2!1sen!2sus',
    'tuckerton_borough': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12400.3!2d-74.3387!3d39.6043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c186z9z9z9z9z9%3A0xz9z9z9z9z9z9z9z9!2sTuckerton%2C%20NJ!5e0!3m2!1sen!2sus!4v1753141300032!5m2!1sen!2sus',
  };
  
  // Return specific map or fallback to generic Ocean County embed for smaller towns
  return townMaps[townKey] || `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196115.73214689275!2d-74.3890!3d39.8233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c16c287049b687%3A0x8c25d4d20966015a!2s${encodeURIComponent(townName + ' ' + townType)}%2C%20Ocean%20County%2C%20NJ!5e0!3m2!1sen!2sus!4v1640000000000!5m2!1sen!2sus`;
};

export default function TownPage({ townName, townType, metaTitle, metaDescription, heading }: TownPageProps) {
  const { data: vehicles } = useQuery<Vehicle[]>({
    queryKey: ["/api/vehicles"],
  });

  const featuredVehicles = vehicles?.slice(0, 3) || [];
  const fullTownName = `${townName} ${townType}`;

  // SEO optimization
  const pageTitle = metaTitle ?? `${townName} Golf Carts - Ocean County's Premier Dealership | Sales, Service & Rentals`;
  const pageDescription = metaDescription ?? `Professional golf cart sales, service, and rentals in ${fullTownName}. Ocean County Golf Carts offers premium DENAGO and EVOLUTION electric golf carts with expert service for ${townName} residents.`;
  const pageKeywords = `${townName} golf carts, ${fullTownName} golf cart sales, Ocean County golf carts, electric golf carts ${townName}, golf cart service ${townName}, golf cart rentals ${townName}`;
  const canonicalUrl = `https://oceancountygolfcarts.com/${townName.toLowerCase().replace(/\s+/g, '-')}-${townType.toLowerCase()}-golf-carts`;

  const breadcrumbItems = [
    { name: "Home", url: "https://oceancountygolfcarts.com" },
    { name: `${townName} Golf Carts`, url: canonicalUrl }
  ];

  return (
    <div className="min-h-screen">
      {/* Schema Markup */}
      <SchemaMarkup schema={generateLocalBusinessSchema()} />
      <SchemaMarkup schema={generateServiceSchema()} />
      <SchemaMarkup schema={generateBreadcrumbSchema(breadcrumbItems)} />
      
      <SEOHead 
        title={pageTitle}
        description={pageDescription}
        keywords={pageKeywords}
        canonicalUrl={canonicalUrl}
        townName={fullTownName}
      />
      {/* SEO Optimized Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(29, 78, 216, 0.8)), url('${BASE_URL}/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg')"}}>
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                {heading ?? `${townName} Golf Carts - Ocean County's Premier Dealership`}
              </h1>
              <p className="text-xl mb-8 text-gray-100">
                Professional golf cart sales, service, and rentals in {fullTownName}. 
                Serving {townName} residents with premium DENAGO and EVOLUTION electric golf carts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href={`${BASE_URL}/inventory`} className="w-full sm:w-auto">
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                    Shop Golf Carts
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="text-blue-600 bg-white border-white hover:bg-gray-100 hover:text-blue-600 w-full sm:w-auto">
                  Get Free Quote
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={`${BASE_URL}/attached_assets/D6-XT6-4wd-color-PORTIMAO-BLUE_1753135231312.png`} 
                alt={`Golf Cart ${townName}`}
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local Service Area */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Golf Cart Services in {fullTownName}
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Ocean County Golf Carts proudly serves {townName} residents with comprehensive 
            golf cart solutions including sales, maintenance, repairs, and rentals.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Premium Quality</h3>
              <p className="text-gray-600">
                Top-rated golf cart brands with factory warranties and certified quality standards.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Service</h3>
              <p className="text-gray-600">
                Professional maintenance and repairs by certified technicians serving {townName}.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Percent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">0% Financing</h3>
              <p className="text-gray-600">
                Flexible financing options available for {townName} customers.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Eco-Friendly</h3>
              <p className="text-gray-600">
                Clean electric golf carts perfect for {townName}'s environmental consciousness.
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

          <div className="text-center">
            <p className="text-gray-600 mb-8">
              As an authorized dealer, we provide genuine parts, factory warranties, and certified service for all major brands.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center text-green-600 font-medium">
                <span className="mr-1">✓</span>
                <span>Factory Warranties</span>
              </div>
              <div className="flex items-center text-green-600 font-medium">
                <span className="mr-1">✓</span>
                <span>Genuine Parts</span>
              </div>
              <div className="flex items-center text-green-600 font-medium">
                <span className="mr-1">✓</span>
                <span>Certified Service</span>
              </div>
              <div className="flex items-center text-green-600 font-medium">
                <span className="mr-1">✓</span>
                <span>Expert Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Golf Carts for Town */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Popular Golf Carts in {fullTownName}
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Discover the golf cart models {townName} residents love most
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {featuredVehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gray-200 relative overflow-hidden">
                  {vehicle.images && vehicle.images[0] && (
                    <img 
                      src={vehicle.images[0]} 
                      alt={`${vehicle.name} available in ${townName}`}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-500 text-white">Available in {townName}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{vehicle.name}</CardTitle>
                  <CardDescription className="text-left">
                    {vehicle.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-blue-600">
                      ${vehicle.price.toLocaleString()}
                    </span>
                    <Button size="sm" className="bg-theme-orange hover:bg-orange-600">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Link href={`${BASE_URL}/inventory`}>
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              View All Golf Carts
            </Button>
          </Link>
        </div>
      </section>

      {/* Local Contact Information with Map */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Contact Ocean County Golf Carts from {fullTownName}
            </h2>
            <p className="text-xl text-gray-600">
              Easy access to professional golf cart services for {townName} residents
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Contact Info */}
            <div className="grid md:grid-cols-1 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Call Today</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600 mb-2">804-585-7301</p>
                  <p className="text-gray-600">Speak with our {townName} golf cart specialists</p>
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

              <Card className="text-center">
                <CardHeader>
                  <Users className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Local Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Delivery and pickup available throughout {fullTownName} and surrounding Ocean County areas.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Google Maps Embed for the specific town */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src={getGoogleMapsEmbedUrl(townName, townType)}
                width="100%" 
                height="450" 
                style={{border:0}}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title={`${fullTownName} Map`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Content */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Why {townName} Chooses Ocean County Golf Carts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Residents of {fullTownName} trust Ocean County Golf Carts for reliable,
                high-quality golf cart solutions. Our local expertise and commitment to customer
                service make us the preferred choice for {townName} golf cart needs.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Looking for golf carts for sale in {townName}? Browse our{" "}
                <Link href={`${BASE_URL}/golf-carts-for-sale`} className="text-blue-600 underline hover:text-blue-800">
                  electric and LSV golf cart inventory in Ocean County
                </Link>{" "}
                or view our full selection of{" "}
                <Link href={`${BASE_URL}/inventory`} className="text-blue-600 underline hover:text-blue-800">
                  New Jersey golf carts
                </Link>{" "}
                at our Ocean County dealership.
              </p>

              <p className="text-lg text-gray-600 mb-6">
                Prefer to rent? Reserve a{" "}
                <Link href={`${BASE_URL}/rentals`} className="text-blue-600 underline hover:text-blue-800">
                  golf cart rental in {townName}
                </Link>
                . Need repairs? We offer full{" "}
                <Link href={`${BASE_URL}/services`} className="text-blue-600 underline hover:text-blue-800">
                  golf cart service in {townName}
                </Link>{" "}
                and mobile repair throughout Ocean County, NJ.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Local delivery to {fullTownName}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Expert service and maintenance</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Competitive pricing for {townName} residents</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-gray-700">Financing options available</span>
                </div>
              </div>

              <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                Schedule Service in {townName}
              </Button>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">
                Serving {fullTownName}
              </h3>
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                <p className="text-gray-700 mb-4">
                  Professional golf cart sales, service, and rentals delivered to {townName} residents.
                </p>
                <div className="text-sm text-gray-600">
                  <p>✓ New golf cart sales</p>
                  <p>✓ Golf cart rentals</p>
                  <p>✓ Professional service & repair</p>
                  <p>✓ Parts & accessories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Your Golf Cart in {fullTownName}?
          </h2>
          <p className="text-xl mb-8">
            Contact Ocean County Golf Carts today for personalized service in {townName}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              Call 804-585-7301
            </Button>
            <Button size="lg" variant="outline" className="text-blue-600 bg-white border-white hover:bg-gray-100 hover:text-blue-600">
              Request Quote for {townName}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}