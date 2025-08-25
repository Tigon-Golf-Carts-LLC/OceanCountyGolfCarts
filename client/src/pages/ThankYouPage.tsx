import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Phone, Clock, Mail } from "lucide-react";
import SEOHead from "@/components/SEOHead";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="Thank You - Ocean County Golf Carts"
        description="Thank you for contacting Ocean County Golf Carts. We'll respond to your inquiry within 24 hours."
        keywords="thank you, contact confirmation, Ocean County Golf Carts"
      />
      
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Success Message */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">
              Thank You for Your Message!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We've received your inquiry and appreciate your interest in Ocean County Golf Carts. 
              Our team will review your message and get back to you soon.
            </p>
          </div>

          {/* Response Time & Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="text-center bg-white shadow-lg">
              <CardContent className="p-8">
                <Clock className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Response Time</h2>
                <p className="text-gray-600 mb-6">
                  Please allow up to <strong>24 hours</strong> for a response from our team. 
                  We'll contact you via email or phone based on your preference.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">
                    Typical response time: 2-6 hours during business hours
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center bg-theme-primary text-white shadow-lg">
              <CardContent className="p-8">
                <Phone className="w-12 h-12 text-theme-orange mx-auto mb-4" />
                <h2 className="text-2xl font-bold mb-4">Need to Talk Now?</h2>
                <p className="text-gray-100 mb-6">
                  If you would like to talk to someone right now, 
                  please give us a call during business hours.
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:804-585-7301" 
                    className="block text-2xl font-bold text-theme-orange hover:text-orange-300 transition-colors"
                  >
                    804-585-7301
                  </a>
                  <div className="text-sm text-gray-300">
                    <p>Monday-Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 9:00 AM - 5:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* What Happens Next */}
          <Card className="bg-white shadow-lg mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
                What Happens Next?
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Review Your Message</h3>
                  <p className="text-gray-600 text-sm">
                    Our team reviews your inquiry and determines the best specialist to help you.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-theme-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Personal Response</h3>
                  <p className="text-gray-600 text-sm">
                    We'll contact you directly with answers to your questions and next steps.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-gray-900">Solution & Service</h3>
                  <p className="text-gray-600 text-sm">
                    We'll provide personalized recommendations and schedule any needed services.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">
              While You Wait, Explore Our Services
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/inventory">
                <Button size="lg" className="bg-theme-orange hover:bg-orange-600 text-white w-full sm:w-auto">
                  Browse Our Inventory
                </Button>
              </Link>
              <Link href="/rentals">
                <Button size="lg" variant="outline" className="border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white w-full sm:w-auto">
                  View Rental Options
                </Button>
              </Link>
              <Link href="/financing">
                <Button size="lg" variant="outline" className="border-theme-primary text-theme-primary hover:bg-theme-primary hover:text-white w-full sm:w-auto">
                  Financing Options
                </Button>
              </Link>
            </div>
            
            <div className="pt-8 border-t border-gray-200">
              <Link href="/">
                <Button variant="link" className="text-theme-primary hover:text-blue-700">
                  ← Return to Homepage
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}