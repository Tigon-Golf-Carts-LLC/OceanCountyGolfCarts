import { Button } from "@/components/ui/button";
import { BASE_URL } from "@/config/urls";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Award, MapPin, Clock, Heart, Target, Facebook, Youtube, CreditCard, Wifi, Shield } from "lucide-react";
import SEOHead from "@/components/SEOHead";


export default function AboutPage() {
  const teamMembers = [
    {
      name: "Mike Johnson",
      role: "General Manager",
      experience: "15+ years",
      description: "Leading our team with passion for customer service and golf cart expertise"
    },
    {
      name: "Sarah Davis",
      role: "Service Manager",
      experience: "12+ years",
      description: "Certified technician ensuring quality service and customer satisfaction"
    },
    {
      name: "Tom Wilson",
      role: "Sales Director",
      experience: "10+ years",
      description: "Helping customers find the perfect golf cart for their needs"
    }
  ];

  const milestones = [
    { year: "2010", event: "NJ Golf Carts founded in Ocean County" },
    { year: "2012", event: "Became authorized EVOLUTION dealer" },
    { year: "2015", event: "Expanded to serve all of New Jersey" },
    { year: "2018", event: "Added DENAGO to our brand portfolio" },
    { year: "2020", event: "Opened second service location" },
    { year: "2023", event: "Reached 500+ satisfied customers" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="About Ocean County Golf Carts"
        description="Ocean County's premier golf cart dealership since 2010, offering DENAGO and EVOLUTION vehicles with exceptional service. Call 1-844-844-6638."
        keywords="Ocean County Golf Carts, about us, golf cart dealer, New Jersey"
        canonicalUrl="https://oceancountygolfcarts.com/about"
        ogImage="/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg"
      />
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-theme-primary to-blue-700 text-white bg-cover bg-center bg-no-repeat" style={{backgroundImage: "linear-gradient(rgba(14, 46, 85, 0.8), rgba(29, 78, 216, 0.8)), url('${BASE_URL}/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg')"}}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Ocean County Golf Carts</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ocean County's premier golf cart dealership, dedicated to providing 
            exceptional service and quality vehicles since 2010.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2010 in Ocean County, Ocean County Golf Carts began with a simple mission: 
                to provide high-quality golf carts and exceptional service to customers throughout the region.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small local dealership has grown into the area's premier golf cart destination, 
                serving customers across multiple counties with a comprehensive selection of new and pre-owned vehicles, 
                professional service, and rental options.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Today, we're proud to be authorized dealers for leading brands like EVOLUTION and DENAGO, 
                offering our customers the latest in golf cart technology and innovation.
              </p>
              <Button className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                Learn More About Our Services
              </Button>
            </div>
            <div className="relative">
              <div className="bg-blue-100 p-8 rounded-lg">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
                    <div className="text-gray-700">Happy Customers</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
                    <div className="text-gray-700">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
                    <div className="text-gray-700">Counties Served</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                    <div className="text-gray-700">Models Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer First</h3>
              <p className="text-gray-600">
                Every decision we make starts with our customers' needs and satisfaction in mind.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in our products, services, and customer experience.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integrity</h3>
              <p className="text-gray-600">
                Honest, transparent business practices build lasting relationships with our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to your satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-gray-400" />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <div className="text-blue-600 font-semibold">{member.role}</div>
                  <div className="text-sm text-gray-500">{member.experience}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our company's growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                <p className="text-gray-700">{milestone.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas with Map */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">About Ocean County Golf Carts</h2>
              <p className="text-lg text-gray-600 mb-6">
                From our headquarters in Ocean County, we proudly serve customers throughout 
                multiple counties in the region. Our commitment to quality service extends 
                across our service area.
              </p>
              <div className="flex items-center gap-4 mb-4">
                <MapPin className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">16 Anchor Square, Toms River, NJ 08753</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Clock className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">Monday-Friday: 9AM-5PM, Saturday: 9AM-5PM</span>
              </div>
              <div className="flex items-center gap-4 mb-4">
                <Facebook className="w-6 h-6 text-blue-600" />
                <a href="https://www.facebook.com/OceanCountyGolfCarts" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook Page</a>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <Youtube className="w-6 h-6 text-red-600" />
                <a href="https://www.youtube.com/@OceanCountyGolfCarts" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">YouTube Channel</a>
              </div>
              <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                Contact Us Today
              </Button>
            </div>
            
            {/* Google Maps Embed */}
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.7814624747463!2d-74.18977588459!3d39.995737979417864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c16c3c123d4567%3A0x1234567890abcdef!2s16%20Anchor%20Square%2C%20Toms%20River%2C%20NJ%2008753!5e0!3m2!1sen!2sus!4v1756126800000!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{border:0}}
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ocean County Golf Carts - 16 Anchor Square, Toms River, NJ"
              />
            </div>
          </div>
          
          {/* Business Information & Towns List */}
          <div className="mt-12 grid lg:grid-cols-2 gap-8">
            {/* Business Attributes */}
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-center">Business Information</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    Business Type
                  </h4>
                  <p className="text-gray-600 text-sm">Small business</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Payments
                  </h4>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>• Accepts credit cards</p>
                    <p>• Accepts debit cards</p>
                    <p>• Not cash-only</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Shield className="w-4 h-4 mr-2" />
                    Service Options
                  </h4>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>• Offers delivery</p>
                    <p>• Appointment required</p>
                    <p>• Onsite services not available</p>
                    <p>• No in-store shopping</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Heart className="w-4 h-4 mr-2" />
                    Community
                  </h4>
                  <div className="text-gray-600 text-sm space-y-1">
                    <p>• LGBTQ+ friendly</p>
                    <p>• Transgender safespace</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Towns Served */}
            <div className="bg-green-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center">Ocean County Towns We Serve</h3>
              <div className="grid grid-cols-1 gap-2 text-sm text-gray-700">
                {[
                  "Barnegat Township", "Barnegat Light Borough", "Bay Head Borough", "Beach Haven Borough",
                  "Beachwood Borough", "Berkeley Township", "Brick Township", "Eagleswood Township",
                  "Harvey Cedars Borough", "Island Heights Borough", "Jackson Township", "Lacey Township",
                  "Lakehurst Borough", "Lakewood Township", "Lavallette Borough", "Little Egg Harbor Township",
                  "Long Beach Township", "Manchester Township", "Mantoloking Borough", "Ocean Gate Borough",
                  "Ocean Township", "Pine Beach Borough", "Plumsted Township", "Point Pleasant Borough",
                  "Point Pleasant Beach Borough", "Seaside Heights Borough", "Seaside Park Borough", "Ship Bottom Borough",
                  "South Toms River Borough", "Stafford Township", "Surf City Borough", "Toms River Township",
                  "Tuckerton Borough"
                ].map((town, index) => (
                  <div key={index} className="py-1">
                    {town}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Join Our Family?
          </h2>
          <p className="text-xl mb-8">
            Experience the Ocean County Golf Carts difference for yourself
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
              Visit Our Showroom
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Call 804-585-7301
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}