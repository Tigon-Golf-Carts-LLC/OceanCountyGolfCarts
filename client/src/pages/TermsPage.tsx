import SEOHead from "@/components/SEOHead";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead 
        title="Terms of Service"
        description="Read the terms and conditions for using Ocean County Golf Carts services and understand your rights. Call 1-844-844-6638."
        keywords="terms of service, terms and conditions, Ocean County Golf Carts, golf cart sales, rental agreement"
        canonicalUrl="https://oceancountygolfcarts.com/terms"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            Last updated: January 1, 2025
          </p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
            <p className="text-gray-600 mb-4">
              By accessing and using the services of Ocean County Golf Carts, you accept and agree to be bound by the terms and provision of this agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use of Services</h2>
            <p className="text-gray-600 mb-4">
              Our services include:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Golf cart sales and consulting</li>
              <li>Golf cart rentals</li>
              <li>Maintenance and repair services</li>
              <li>Parts and accessories sales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sales Terms</h2>
            <p className="text-gray-600 mb-4">
              All sales are subject to the following conditions:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Payment terms must be agreed upon before delivery</li>
              <li>All vehicles come with manufacturer warranties</li>
              <li>Delivery charges may apply based on location</li>
              <li>Returns must be approved and may be subject to restocking fees</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Rental Terms</h2>
            <p className="text-gray-600 mb-4">
              Golf cart rentals are subject to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Valid driver's license required</li>
              <li>Security deposit may be required</li>
              <li>Damage fees apply for any damage beyond normal wear</li>
              <li>Late return fees may apply</li>
              <li>Renter is responsible for theft or loss</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-600 mb-4">
              Ocean County Golf Carts shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Warranty Disclaimer</h2>
            <p className="text-gray-600 mb-4">
              While we provide manufacturer warranties on new vehicles, we make no additional warranties, express or implied, regarding our services. All services are provided "as is" and "as available."
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Governing Law</h2>
            <p className="text-gray-600 mb-4">
              These terms shall be interpreted and governed in accordance with the laws of the State of New Jersey, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-600">
                <strong>Ocean County Golf Carts</strong><br/>
                16 Anchor Square, Toms River, NJ 08753<br/>
                Phone: 804-585-7301<br/>
                Email: info@oceancountygolfcarts.com
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}