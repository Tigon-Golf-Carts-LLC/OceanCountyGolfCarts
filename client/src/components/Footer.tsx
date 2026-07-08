import { Link } from "wouter";
import { BASE_URL } from "@/config/urls";

export default function Footer() {
  const towns = [
    "Barnegat Township", "Barnegat Light Borough", "Bay Head Borough", "Beach Haven Borough",
    "Beachwood Borough", "Berkeley Township", "Brick Township", "Eagleswood Township",
    "Harvey Cedars Borough", "Island Heights Borough", "Jackson Township", "Lacey Township",
    "Lakehurst Borough", "Lakewood Township", "Lavallette Borough", "Little Egg Harbor Township",
    "Long Beach Township", "Manchester Township", "Mantoloking Borough", "Ocean Gate Borough",
    "Ocean Township", "Pine Beach Borough", "Plumsted Township", "Point Pleasant Borough",
    "Point Pleasant Beach Borough", "Seaside Heights Borough", "Seaside Park Borough", "Ship Bottom Borough",
    "South Toms River Borough", "Stafford Township", "Surf City Borough", "Toms River Township",
    "Tuckerton Borough"
  ];

  return (
    <footer className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="space-y-8 mb-8">
          {/* Company Description */}
          <div className="md:hidden">
            <p className="text-gray-600 text-sm leading-relaxed">
              Ocean County's premier golf cart dealership serving customers across 
              the region with quality carts and expert service.
            </p>
          </div>

          {/* Mobile: Navigation and Services side by side (50% each) */}
          <div className="grid grid-cols-2 gap-4 md:hidden">
            {/* Navigation Links */}
            <div>
              <ul className="space-y-2">
                <li><Link href={`${BASE_URL}/`} className="text-gray-600 hover:text-gray-900 text-sm">Home</Link></li>
                <li><Link href={`${BASE_URL}/inventory`} className="text-gray-600 hover:text-gray-900 text-sm">Inventory</Link></li>
                <li><Link href={`${BASE_URL}/rentals`} className="text-gray-600 hover:text-gray-900 text-sm">Rentals</Link></li>
                <li><Link href={`${BASE_URL}/services`} className="text-gray-600 hover:text-gray-900 text-sm">Services</Link></li>
                <li><a href="https://tigongolfcarts.com/apply-for-financing/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm">Financing</a></li>
                <li><Link href={`${BASE_URL}/about`} className="text-gray-600 hover:text-gray-900 text-sm">About</Link></li>
              </ul>
            </div>

            {/* Services - Updated with requested links */}
            <div>
              <ul className="space-y-2">
                <li><Link href={`${BASE_URL}/inventory`} className="text-gray-600 hover:text-gray-900 text-sm">NEW GOLF CARTS</Link></li>
                <li><Link href={`${BASE_URL}/golf-carts-for-sale`} className="text-gray-600 hover:text-gray-900 text-sm">GOLF CARTS FOR SALE</Link></li>
                <li><Link href={`${BASE_URL}/brands/denago`} className="text-gray-600 hover:text-gray-900 text-sm">DENAGO</Link></li>
                <li><Link href={`${BASE_URL}/brands/evolution`} className="text-gray-600 hover:text-gray-900 text-sm">EVOLUTION</Link></li>
                <li><Link href={`${BASE_URL}/about`} className="text-gray-600 hover:text-gray-900 text-sm">ABOUT</Link></li>
                <li><Link href={`${BASE_URL}/contact`} className="text-gray-600 hover:text-gray-900 text-sm">CONTACT</Link></li>
                <li><Link href={`${BASE_URL}/privacy`} className="text-gray-600 hover:text-gray-900 text-sm">PRIVACY POLICY</Link></li>
                <li><Link href={`${BASE_URL}/terms`} className="text-gray-600 hover:text-gray-900 text-sm">TERMS OF SERVICE</Link></li>
              </ul>
            </div>
          </div>

          {/* Mobile: Contact Info */}
          <div className="md:hidden">
            <div className="space-y-2">
              <p className="text-gray-900 font-semibold text-sm">Phone: 804-585-7301</p>
              <p className="text-gray-600 text-sm">16 Anchor Square, Toms River, NJ 08753</p>
              <p className="text-gray-600 text-sm">Email: info@oceancountygolfcarts.com</p>
              <div className="text-gray-600 text-sm">
                <p>Mon-Fri: 9AM-5PM</p>
                <p>Sat: 9AM-5PM</p>
                <p>Sun: Closed</p>
              </div>
            </div>
          </div>

          {/* Desktop: 4 column layout */}
          <div className="hidden md:grid md:grid-cols-4 gap-8">
            {/* Company Description */}
            <div className="md:col-span-1">
              <p className="text-gray-600 text-sm leading-relaxed">
                Ocean County's premier golf cart dealership serving customers across 
                the region with quality carts and expert service.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="md:col-span-1">
              <ul className="space-y-2">
                <li><Link href={`${BASE_URL}/`} className="text-gray-600 hover:text-gray-900 text-sm">Home</Link></li>
                <li><Link href={`${BASE_URL}/inventory`} className="text-gray-600 hover:text-gray-900 text-sm">Inventory</Link></li>
                <li><Link href={`${BASE_URL}/rentals`} className="text-gray-600 hover:text-gray-900 text-sm">Rentals</Link></li>
                <li><Link href={`${BASE_URL}/services`} className="text-gray-600 hover:text-gray-900 text-sm">Services</Link></li>
                <li><a href="https://tigongolfcarts.com/apply-for-financing/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 text-sm">Financing</a></li>
                <li><Link href={`${BASE_URL}/about`} className="text-gray-600 hover:text-gray-900 text-sm">About</Link></li>
              </ul>
            </div>

            {/* Services - Updated with requested links */}
            <div className="md:col-span-1">
              <ul className="space-y-2">
                <li><Link href={`${BASE_URL}/inventory`} className="text-gray-600 hover:text-gray-900 text-sm">NEW GOLF CARTS</Link></li>
                <li><Link href={`${BASE_URL}/golf-carts-for-sale`} className="text-gray-600 hover:text-gray-900 text-sm">GOLF CARTS FOR SALE</Link></li>
                <li><Link href={`${BASE_URL}/brands/denago`} className="text-gray-600 hover:text-gray-900 text-sm">DENAGO</Link></li>
                <li><Link href={`${BASE_URL}/brands/evolution`} className="text-gray-600 hover:text-gray-900 text-sm">EVOLUTION</Link></li>
                <li><Link href={`${BASE_URL}/about`} className="text-gray-600 hover:text-gray-900 text-sm">ABOUT</Link></li>
                <li><Link href={`${BASE_URL}/contact`} className="text-gray-600 hover:text-gray-900 text-sm">CONTACT</Link></li>
                <li><Link href={`${BASE_URL}/privacy`} className="text-gray-600 hover:text-gray-900 text-sm">PRIVACY POLICY</Link></li>
                <li><Link href={`${BASE_URL}/terms`} className="text-gray-600 hover:text-gray-900 text-sm">TERMS OF SERVICE</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <div className="space-y-2">
                <p className="text-gray-900 font-semibold text-sm">Phone: 804-585-7301</p>
                <p className="text-gray-600 text-sm">16 Anchor Square, Toms River, NJ 08753</p>
                <p className="text-gray-600 text-sm">Email: info@oceancountygolfcarts.com</p>
                <div className="text-gray-600 text-sm">
                  <p>Mon-Fri: 9AM-5PM</p>
                  <p>Sat: 9AM-5PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Towns Served - Now with Links */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6 text-center">
            Ocean County Towns We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-center">
            <Link href={`${BASE_URL}/barnegat-township-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Barnegat Township Golf Carts
            </Link>
            <Link href={`${BASE_URL}/barnegat-light-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Barnegat Light Golf Carts
            </Link>
            <Link href={`${BASE_URL}/bay-head-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Bay Head Golf Carts
            </Link>
            <Link href={`${BASE_URL}/beach-haven-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Beach Haven Golf Carts
            </Link>
            <Link href={`${BASE_URL}/beachwood-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Beachwood Golf Carts
            </Link>
            <Link href={`${BASE_URL}/berkeley-township-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Berkeley Township Golf Carts
            </Link>
            <Link href={`${BASE_URL}/brick-township-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Brick Township Golf Carts
            </Link>
            <Link href={`${BASE_URL}/eagleswood-township-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Eagleswood Township Golf Carts
            </Link>
            <Link href={`${BASE_URL}/harvey-cedars-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Harvey Cedars Golf Carts
            </Link>
            <Link href={`${BASE_URL}/island-heights-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Island Heights Golf Carts
            </Link>
            <Link href={`${BASE_URL}/jackson-township-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Jackson Township Golf Carts
            </Link>
            <Link href={`${BASE_URL}/lacey-township-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Lacey Township Golf Carts
            </Link>
            <Link href={`${BASE_URL}/lakehurst-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Lakehurst Golf Carts
            </Link>
            <Link href={`${BASE_URL}/lakewood-township-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Lakewood Township Golf Carts
            </Link>
            <Link href={`${BASE_URL}/lavallette-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Lavallette Golf Carts
            </Link>
            <Link href={`${BASE_URL}/little-egg-harbor-township-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Little Egg Harbor Golf Carts
            </Link>
            <Link href={`${BASE_URL}/long-beach-township-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Long Beach Township Golf Carts
            </Link>
            <Link href={`${BASE_URL}/manchester-township-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Manchester Township Golf Carts
            </Link>
            <Link href={`${BASE_URL}/mantoloking-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Mantoloking Golf Carts
            </Link>
            <Link href={`${BASE_URL}/ocean-gate-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Ocean Gate Golf Carts
            </Link>
            <Link href={`${BASE_URL}/ocean-township-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Ocean Township Golf Carts
            </Link>
            <Link href={`${BASE_URL}/pine-beach-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Pine Beach Golf Carts
            </Link>
            <Link href={`${BASE_URL}/plumsted-township-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Plumsted Township Golf Carts
            </Link>
            <Link href={`${BASE_URL}/point-pleasant-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Point Pleasant Golf Carts
            </Link>
            <Link href={`${BASE_URL}/point-pleasant-beach-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Point Pleasant Beach Golf Carts
            </Link>
            <Link href={`${BASE_URL}/seaside-heights-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Seaside Heights Golf Carts
            </Link>
            <Link href={`${BASE_URL}/seaside-park-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Seaside Park Golf Carts
            </Link>
            <Link href={`${BASE_URL}/ship-bottom-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Ship Bottom Golf Carts
            </Link>
            <Link href={`${BASE_URL}/south-toms-river-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              South Toms River Golf Carts
            </Link>
            <Link href={`${BASE_URL}/stafford-township-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Stafford Township Golf Carts
            </Link>
            <Link href={`${BASE_URL}/surf-city-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Surf City Golf Carts
            </Link>
            <Link href={`${BASE_URL}/toms-river-township-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Toms River Township Golf Carts
            </Link>
            <Link href={`${BASE_URL}/tuckerton-borough-golf-carts`} className="text-gray-600 text-sm hover:text-blue-600 transition-colors">
              Tuckerton Golf Carts
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">
              © 2025 Ocean County Golf Carts. All rights reserved. | 
              <Link href={`${BASE_URL}/privacy`} className="hover:text-gray-900 ml-1">Privacy Policy</Link> | 
              <Link href={`${BASE_URL}/terms`} className="hover:text-gray-900 ml-1">Terms of Service</Link>
            </div>
            <div className="text-gray-600 text-sm">
              <Link href={`${BASE_URL}/`} className="hover:text-gray-900">
                Ocean County Golf Carts — Authorized NJ Golf Cart Dealership
              </Link>
              , serving all Ocean County towns with premium golf carts and exceptional service.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}