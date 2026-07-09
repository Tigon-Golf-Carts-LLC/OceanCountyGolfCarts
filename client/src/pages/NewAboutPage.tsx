import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BASE_URL } from "@/config/urls";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Target, Heart, Phone, Mail, MapPin, Calendar } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import aboutHeroImage from "@assets/Ocean County New Jersey Golf Carts (1)_1756131126751.png";

export default function NewAboutPage() {
  const teamMembers = [
    {
      name: "Michael Thompson",
      role: "Owner & General Manager",
      experience: "15+ years in recreational vehicle sales",
      description: "Passionate about providing Ocean County with the best golf cart experience."
    },
    {
      name: "Sarah Martinez",
      role: "Service Manager",
      experience: "10+ years certified technician",
      description: "Expert in DENAGO and EVOLUTION service and maintenance."
    },
    {
      name: "David Chen",
      role: "Sales Specialist",
      experience: "8+ years in golf cart sales",
      description: "Helping customers find their perfect electric vehicle match."
    },
    {
      name: "Lisa Johnson",
      role: "Parts & Accessories",
      experience: "12+ years parts expertise",
      description: "Ensuring you get genuine parts and quality accessories."
    }
  ];

  const values = [
    {
      icon: Users,
      title: "Customer First",
      description: "Every decision we make puts our customers' needs and satisfaction first."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We partner with premium brands and maintain the highest service standards."
    },
    {
      icon: Target,
      title: "Local Focus",
      description: "Proud to serve Ocean County with personalized, community-focused service."
    },
    {
      icon: Heart,
      title: "Family Values",
      description: "We treat every customer like family and build lasting relationships."
    }
  ];

  return (
    <>
      <SEOHead
        title="About Ocean County Golf Carts | Your Local NJ Golf Cart Dealer"
        description="Ocean County Golf Carts is your local NJ golf cart dealer in Toms River. Authorized Evolution & Denago dealer serving South Jersey shore towns. Call 804-585-7301."
        keywords="golf cart NJ, NJ golf cart dealer, Ocean County golf carts, South Jersey golf carts, golf cart dealer New Jersey, DENAGO dealer, EVOLUTION dealer, Toms River golf carts"
        ogImage="/attached_assets/Ocean County New Jersey Golf Carts (1)_1756131126751.png"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section 
          className="relative text-white py-32"
          style={{
            backgroundImage: `linear-gradient(rgba(14, 46, 85, 0.7), rgba(14, 46, 85, 0.7)), url('${aboutHeroImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                About Ocean County Golf Carts
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md">
                Since 2010, we've been Ocean County's premier destination for premium golf carts, 
                exceptional service, and unmatched customer care. Serving all 33 municipalities 
                with pride and professionalism.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`${BASE_URL}/contact`}>
                  <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white">
                    Contact Our Team
                  </Button>
                </Link>
                <Link href={`${BASE_URL}/inventory`}>
                  <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-ocean-blue">
                    View Our Inventory
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Founded in 2010, Ocean County Golf Carts began with a simple mission: to provide 
                    the residents and businesses of Ocean County with the highest quality golf carts 
                    and unparalleled customer service.
                  </p>
                  <p>
                    What started as a small family business has grown into Ocean County's most trusted 
                    golf cart dealer, serving all 33 municipalities from Lakewood to Point Pleasant, 
                    Toms River to Brick, and everywhere in between.
                  </p>
                  <p>
                    Today, we're proud to be authorized dealers for premium brands like DENAGO and 
                    EVOLUTION, offering our customers access to the latest in electric vehicle 
                    technology and innovation.
                  </p>
                  <p>
                    Our commitment to quality, service, and community has made us the go-to choice 
                    for golf enthusiasts, resort operators, and anyone seeking reliable electric 
                    transportation solutions.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">13+</div>
                    <div className="text-sm text-gray-600">Years Serving Ocean County</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">5000+</div>
                    <div className="text-sm text-gray-600">Satisfied Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">33</div>
                    <div className="text-sm text-gray-600">Municipalities Served</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-gray-200 h-96 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Serving Ocean County</h3>
                    <p>All 33 municipalities and surrounding areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proudly Serving South Jersey */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Proudly Serving South Jersey</h2>
            <div className="space-y-4 text-gray-600 text-lg">
              <p>
                Ocean County Golf Carts is rooted in South Jersey. From our showroom at
                16 Anchor Square in Toms River, we've spent more than a decade helping shore
                families, retirees, and business owners find the right ride for the way people
                actually live down here. As an authorized <strong>Evolution</strong> and{" "}
                <strong>Denago</strong> dealer, we're proud to carry the brands that hold up to
                salt air, sandy driveways, and long summer seasons at the Jersey Shore.
              </p>
              <p>
                Golf carts are part of the culture across South Jersey. In beach communities and
                shore towns from Long Beach Island (LBI) to Point Pleasant, carts are how neighbors
                get to the bay, the boardwalk, and the marina. In 55+ and HOA neighborhoods, they're
                the friendly, low-cost way to reach the clubhouse, the pool, or a friend's driveway.
                We stay involved in the NJ communities we serve, supporting local events and
                treating every customer like a neighbor — because most of them are. Learn more about
                us on our{" "}
                <Link href={`${BASE_URL}/`} className="text-blue-600 underline hover:text-blue-800">
                  homepage
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-lg text-gray-600">The principles that guide everything we do</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <value.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-600">Experienced professionals dedicated to your satisfaction</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-10 h-10 text-gray-600" />
                    </div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <Badge variant="outline" className="mt-2">{member.role}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blue-600 font-medium mb-2">{member.experience}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Area */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Area</h2>
              <p className="text-lg text-gray-600">Proudly serving all of Ocean County, New Jersey</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="text-center">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Northern Ocean County</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Brick, Lakewood, Toms River, Point Pleasant, and surrounding areas</p>
                  <Badge variant="secondary">11 Municipalities</Badge>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>Central Ocean County</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Berkeley, Seaside Heights, Island Heights, and neighboring communities</p>
                  <Badge variant="secondary">11 Municipalities</Badge>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Southern Ocean County</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Barnegat, Long Beach Township, Stafford, and coastal communities</p>
                  <Badge variant="secondary">11 Municipalities</Badge>
                </CardContent>
              </Card>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Complete Ocean County Coverage</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm text-gray-600">
                {[
                  "Barnegat", "Bay Head", "Beach Haven", "Beachwood", "Berkeley", "Brick",
                  "Eagleswood", "Harvey Cedars", "Island Heights", "Jackson", "Lacey", "Lakehurst",
                  "Lakewood", "Lavallette", "Little Egg Harbor", "Long Beach Township", "Manchester",
                  "Mantoloking", "Ocean Gate", "Ocean Township", "Pine Beach", "Plumsted",
                  "Point Pleasant", "Point Pleasant Beach", "Seaside Heights", "Seaside Park",
                  "Ship Bottom", "South Toms River", "Stafford", "Surf City", "Toms River"
                ].map((city, index) => (
                  <div key={index} className="text-center py-2">
                    <span className="text-blue-600 font-medium">{city}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NJ Golf Cart Authority Hub */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Local NJ Golf Cart Dealer</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Everything New Jersey golf cart owners need to know about buying, driving, and
                maintaining a cart in Ocean County — from a dealer who does it every day.
              </p>
            </div>

            <div className="space-y-6 text-gray-700 text-lg">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">NJ Golf Cart Laws & Regulations</h3>
                <p>
                  Before you drive on public roads, it helps to understand how New Jersey treats golf
                  carts. A traditional golf cart tops out around 15–19 mph and generally isn't
                  street-legal on public roads. To drive legally, most residents choose a Low Speed
                  Vehicle (LSV) — a four-wheeled electric vehicle with a top speed of 20–25 mph.
                  Under New Jersey's Low Speed Vehicle law, an LSV must be equipped with headlights,
                  brake lights, turn signals, mirrors, a windshield, and seat belts, and it carries a
                  17-digit VIN. That VIN lets you title, register, and insure the vehicle with the NJ
                  MVC, and once registered an LSV can be driven on roads posted at 25 mph or less.
                  Rather than quote specific statute numbers, we walk each buyer through the practical
                  requirements so your cart is set up correctly for your town from day one.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">The Ocean County Golf Cart Market</h3>
                <p>
                  Ocean County is one of the busiest golf cart markets in the state, and demand keeps
                  growing. Beach and bay towns, lakeside developments, sprawling 55+ communities, and
                  HOA neighborhoods all lean on carts for short, everyday trips. That mix means buyers
                  want very different things — a compact 2-seater for a gated community, a street-legal
                  6-passenger LSV for family beach runs, or a rugged utility cart for a marina or
                  business. You can browse what we have in stock on our{" "}
                  <Link href={`${BASE_URL}/inventory`} className="text-blue-600 underline hover:text-blue-800">
                    golf cart inventory
                  </Link>
                  , and if you only need a cart for a week at the shore, our{" "}
                  <Link href={`${BASE_URL}/rentals`} className="text-blue-600 underline hover:text-blue-800">
                    golf cart rentals
                  </Link>{" "}
                  are delivered throughout the county.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Why Electric Carts Rule NJ Shore Communities</h3>
                <p>
                  Nearly every cart sold in New Jersey today is electric, and the shore is exactly why.
                  Short distances and low speed limits play to an electric cart's strengths: quiet
                  operation that respects close-set beach neighborhoods, no gas to haul on a barrier
                  island, and simple maintenance in a salt-air environment. Lithium-battery models add
                  the range and longevity that make a cart practical all season long. For a household
                  looking to cut down on second-car trips, an electric LSV is an easy, eco-friendly
                  fit for life at the Jersey Shore.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Role in the NJ Golf Cart Ecosystem</h3>
                <p>
                  As a full-service, authorized Evolution and Denago dealer, we're more than a sales
                  lot. We help you pick the right model, set it up to meet New Jersey's requirements,
                  and keep it running for years with in-house{" "}
                  <Link href={`${BASE_URL}/services`} className="text-blue-600 underline hover:text-blue-800">
                    repair and maintenance
                  </Link>
                  . We deliver and service carts across every Ocean County town, including{" "}
                  <Link href={`${BASE_URL}/toms-river-township-golf-carts`} className="text-blue-600 underline hover:text-blue-800">
                    Toms River
                  </Link>{" "}
                  and{" "}
                  <Link href={`${BASE_URL}/brick-township-golf-carts`} className="text-blue-600 underline hover:text-blue-800">
                    Brick Township
                  </Link>
                  . Whether you're buying your first cart or maintaining a fleet, we're the local NJ
                  golf cart dealer your neighbors already trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Experience the Ocean County Golf Carts Difference?
            </h2>
            <p className="text-xl mb-8">
              Join thousands of satisfied customers who trust us for their golf cart needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`${BASE_URL}/contact`}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Contact Us Today
                </Button>
              </Link>
              <a href="tel:804-585-7301">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                  Call 804-585-7301
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <Phone className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle>Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-blue-600 mb-2">804-585-7301</p>
                  <p className="text-gray-600">Available 7 days a week</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Mail className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <CardTitle>Email Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium text-green-600 mb-2">info@oceancountygolfcarts.com</p>
                  <p className="text-gray-600">Quick response guaranteed</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Calendar className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                  <CardTitle>Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-gray-700 text-sm">
                    <p>Mon-Fri: 9AM-5PM</p>
                    <p>Sat: 9AM-5PM</p>
                    <p>Sun: By Appointment</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                  <CardTitle>Service Area</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">All 33 Ocean County municipalities plus delivery service</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}