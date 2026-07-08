interface SchemaMarkupProps {
  schema: object;
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script 
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// Schema generators for different page types
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ocean County Golf Carts",
  "alternateName": "OCGC",
  "description": "Premier golf cart dealer in Ocean County, New Jersey specializing in DENAGO and EVOLUTION electric vehicles with sales, service, and rentals.",
  "url": "https://oceancountygolfcarts.com",
  "logo": "https://oceancountygolfcarts.com/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg",
  "image": [
    "https://oceancountygolfcarts.com/attached_assets/Ocean County Golf Carts New Jersey 3_1753197335727.jpeg",
    "https://oceancountygolfcarts.com/attached_assets/OCEAN COUNTY GOLF CARTS_1753196019170.jpeg"
  ],
  "telephone": "804-585-7301",
  "email": "sales@tigongolfcarts.com",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "NJ",
    "addressCountry": "US",
    "addressLocality": "Ocean County"
  },
  "areaServed": {
    "@type": "State",
    "name": "New Jersey"
  },
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 39.8238,
      "longitude": -74.5889
    },
    "geoRadius": "50000"
  },
  "foundingDate": "2008",
  "numberOfEmployees": "15-25",
  "slogan": "Professional golf cart services delivered to your town",
  "brand": ["DENAGO", "EVOLUTION"],
  "sameAs": [
    "https://www.facebook.com/oceancountygolfcarts",
    "https://www.instagram.com/oceancountygolfcarts"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Sales and Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "Electric Golf Carts"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Rentals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Service & Repair"
        }
      }
    ]
  }
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://oceancountygolfcarts.com/#localbusiness",
  "name": "Ocean County Golf Carts",
  "description": "Premier golf cart dealer serving all 33 Ocean County municipalities with electric vehicle sales, service, and rentals.",
  "url": "https://oceancountygolfcarts.com",
  "telephone": "804-585-7301",
  "email": "sales@tigongolfcarts.com",
  "priceRange": "$$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Financing",
  "openingHours": [
    "Mo-Fr 09:00-17:00",
    "Sa 09:00-17:00"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "NJ",
    "addressCountry": "US",
    "addressLocality": "Ocean County"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.8238,
    "longitude": -74.5889
  },
  "areaServed": [
    "Toms River Township", "Lakewood Township", "Brick Township", "Jackson Township",
    "Point Pleasant", "Seaside Heights", "Beach Haven", "Long Beach Township",
    "Stafford Township", "Barnegat Township", "Manchester Township", "Berkeley Township",
    "Dover Township", "Eagleswood Township", "Little Egg Harbor Township", "Ocean Township",
    "Plumsted Township", "Barnegat Light", "Bay Head", "Beachwood", "Harvey Cedars",
    "Island Heights", "Lavallette", "Mantoloking", "Ocean Gate", "Pine Beach",
    "Point Pleasant Beach", "Seaside Park", "Ship Bottom", "South Toms River",
    "Surf City", "Tuckerton", "Lacey Township", "New Hanover Township"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Products and Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "DENAGO Electric Golf Carts",
          "brand": "DENAGO"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": "EVOLUTION Golf Carts",
          "brand": "EVOLUTION"
        }
      }
    ]
  }
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://oceancountygolfcarts.com/#website",
  "name": "Ocean County Golf Carts",
  "description": "Official website for Ocean County Golf Carts - New Jersey's premier electric golf cart dealer",
  "url": "https://oceancountygolfcarts.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://oceancountygolfcarts.com/inventory?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Ocean County Golf Carts"
  }
});

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateProductSchema = (vehicle: any) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "@id": `https://oceancountygolfcarts.com/vehicles/${vehicle.id}#product`,
  "name": vehicle.name,
  "description": vehicle.description,
  "brand": {
    "@type": "Brand",
    "name": vehicle.brand
  },
  "category": vehicle.category,
  "image": vehicle.images?.map((img: string) => `https://oceancountygolfcarts.com${img}`) || [],
  "offers": {
    "@type": "Offer",
    "price": vehicle.price,
    "priceCurrency": "USD",
    "availability": vehicle.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "seller": {
      "@type": "Organization",
      "name": "Ocean County Golf Carts"
    },
    "url": `https://oceancountygolfcarts.com/vehicles/${vehicle.id}`
  },
  "additionalProperty": [
    {
      "@type": "PropertyValue",
      "name": "Top Speed",
      "value": vehicle.specifications?.topSpeed
    },
    {
      "@type": "PropertyValue", 
      "name": "Range",
      "value": vehicle.specifications?.range
    },
    {
      "@type": "PropertyValue",
      "name": "Seating Capacity",
      "value": vehicle.specifications?.seatingCapacity
    },
    {
      "@type": "PropertyValue",
      "name": "Battery Type",
      "value": vehicle.specifications?.batteryType
    }
  ],
  "manufacturer": {
    "@type": "Organization",
    "name": vehicle.brand
  }
});

export const generateServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Golf Cart Services",
  "description": "Comprehensive golf cart sales, service, repair, and rental services in Ocean County, New Jersey",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Ocean County Golf Carts"
  },
  "areaServed": {
    "@type": "State",
    "name": "New Jersey"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Golf Cart Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Sales",
          "description": "New and used electric golf cart sales"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Golf Cart Rentals",
          "description": "Daily, weekly, and monthly golf cart rentals"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Service & Repair",
          "description": "Professional maintenance and repair services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Golf Cart Parts",
          "description": "Genuine parts and accessories"
        }
      }
    ]
  }
});

export const generateOfferCatalogSchema = (vehicles: any[]) => ({
  "@context": "https://schema.org",
  "@type": "OfferCatalog",
  "name": "Golf Cart Inventory",
  "description": "Complete inventory of electric golf carts available for sale",
  "itemListElement": vehicles.map(vehicle => ({
    "@type": "Offer",
    "itemOffered": {
      "@type": "Product",
      "name": vehicle.name,
      "brand": vehicle.brand,
      "image": vehicle.images?.[0] ? `https://oceancountygolfcarts.com${vehicle.images[0]}` : undefined
    },
    "price": vehicle.price,
    "priceCurrency": "USD",
    "availability": vehicle.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
    "url": `https://oceancountygolfcarts.com/vehicles/${vehicle.id}`
  }))
});

export const generateContactPageSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Ocean County Golf Carts",
  "description": "Get in touch with Ocean County Golf Carts for sales, service, rentals, and support",
  "url": "https://oceancountygolfcarts.com/contact",
  "mainEntity": {
    "@type": "Organization",
    "name": "Ocean County Golf Carts",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "804-585-7301",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "email": "sales@tigongolfcarts.com",
        "contactType": "sales",
        "areaServed": "US"
      }
    ]
  }
});

// Shared Ocean County service-area list used across LocalBusiness / Service schema
export const OCEAN_COUNTY_SERVICE_AREA = [
  "Toms River", "Lakewood", "Brick", "Jackson", "Point Pleasant",
  "Point Pleasant Beach", "Seaside Heights", "Seaside Park", "Beach Haven",
  "Long Beach Township", "Stafford", "Barnegat", "Manchester", "Berkeley",
  "Lacey", "Little Egg Harbor", "Ocean Gate", "Pine Beach", "Beachwood",
  "Island Heights", "Lavallette", "Mantoloking", "Bay Head", "Ship Bottom",
  "Surf City", "Harvey Cedars", "Tuckerton", "Eagleswood", "South Toms River",
  "Ocean Township", "Plumsted", "Lakehurst", "Barnegat Light"
];

// FAQPage schema for pages with FAQ sections
export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

// Service schema for the golf cart rental offering
export const generateRentalServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Golf Cart Rental",
  "name": "Golf Cart Rentals in Ocean County, NJ",
  "description": "Daily, 3-day, weekly, and monthly golf cart rentals with delivery and pickup throughout Ocean County, New Jersey. Street-legal 4-seater, 6-seater, and utility carts available.",
  "url": "https://oceancountygolfcarts.com/rentals",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Ocean County Golf Carts",
    "telephone": "804-585-7301",
    "url": "https://oceancountygolfcarts.com",
    "priceRange": "$$"
  },
  "areaServed": OCEAN_COUNTY_SERVICE_AREA.map((town) => ({
    "@type": "City",
    "name": town
  })),
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "245",
    "highPrice": "3500",
    "offerCount": "12",
    "url": "https://oceancountygolfcarts.com/rentals"
  }
});

// Service schema for the golf cart repair / maintenance offering
export const generateRepairServiceSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Golf Cart Repair & Maintenance",
  "name": "Golf Cart Repair & Mobile Service in Ocean County, NJ",
  "description": "Professional golf cart repair, battery service, custom modifications, and warranty work. Mobile golf cart repair available throughout Ocean County, New Jersey.",
  "url": "https://oceancountygolfcarts.com/services",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Ocean County Golf Carts",
    "telephone": "804-585-7301",
    "url": "https://oceancountygolfcarts.com",
    "priceRange": "$$"
  },
  "areaServed": OCEAN_COUNTY_SERVICE_AREA.map((town) => ({
    "@type": "City",
    "name": town
  })),
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "USD",
    "lowPrice": "50",
    "highPrice": "85",
    "url": "https://oceancountygolfcarts.com/services"
  }
});

// LocalBusiness schema tuned for the golf-carts-for-sale landing page
export const generateSalesLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["AutoDealer", "LocalBusiness"],
  "@id": "https://oceancountygolfcarts.com/golf-carts-for-sale#dealer",
  "name": "Ocean County Golf Carts",
  "description": "Electric, LSV, and street-legal golf carts for sale in Ocean County, NJ. New DENAGO and EVOLUTION 2, 4, and 6-passenger models with financing available.",
  "url": "https://oceancountygolfcarts.com/golf-carts-for-sale",
  "telephone": "804-585-7301",
  "email": "sales@tigongolfcarts.com",
  "priceRange": "$$-$$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Credit Card, Financing",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "16 Anchor Square",
    "addressLocality": "Toms River",
    "addressRegion": "NJ",
    "postalCode": "08753",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.9526,
    "longitude": -74.1959
  },
  "areaServed": OCEAN_COUNTY_SERVICE_AREA.map((town) => ({
    "@type": "City",
    "name": town
  })),
  "brand": ["DENAGO", "EVOLUTION"]
});

export const generateTownPageSchema = (townName: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": `Golf Carts in ${townName}`,
  "description": `Professional golf cart sales, service, and rentals delivered to ${townName}, Ocean County, New Jersey`,
  "url": `https://oceancountygolfcarts.com/${townName.toLowerCase().replace(/\s+/g, '-')}-golf-carts`,
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Ocean County Golf Carts",
    "areaServed": {
      "@type": "City",
      "name": townName,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": "Ocean County",
        "containedInPlace": {
          "@type": "State",
          "name": "New Jersey"
        }
      }
    }
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://oceancountygolfcarts.com"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": `${townName} Golf Carts`,
        "item": `https://oceancountygolfcarts.com/${townName.toLowerCase().replace(/\s+/g, '-')}-golf-carts`
      }
    ]
  }
});