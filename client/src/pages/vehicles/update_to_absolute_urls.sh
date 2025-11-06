#!/bin/bash

# Script to update all vehicle pages to use absolute URLs

echo "Converting relative URLs to absolute URLs in vehicle pages..."

# Process all .tsx files in the vehicles directory
for file in client/src/pages/vehicles/*.tsx; do
  if [ -f "$file" ]; then
    echo "Processing: $file"
    
    # Add BASE_URL import if not already present
    if ! grep -q "import { BASE_URL }" "$file"; then
      # Add import after the last import statement
      sed -i '/^import.*from/,/^[^i]/{
        /^[^i]/{
          i\import { BASE_URL } from "@/config/urls";
        }
      }' "$file"
    fi
    
    # Replace href="/" with href={`${BASE_URL}/`}
    sed -i 's|href="/"|href={`${BASE_URL}/`}|g' "$file"
    
    # Replace href="/contact" with href={`${BASE_URL}/contact`}
    sed -i 's|href="/contact"|href={`${BASE_URL}/contact`}|g' "$file"
    
    # Replace href="/inventory" with href={`${BASE_URL}/inventory`}
    sed -i 's|href="/inventory"|href={`${BASE_URL}/inventory`}|g' "$file"
    
    # Replace href="/services" with href={`${BASE_URL}/services`}
    sed -i 's|href="/services"|href={`${BASE_URL}/services`}|g' "$file"
    
    # Replace href="/about" with href={`${BASE_URL}/about`}
    sed -i 's|href="/about"|href={`${BASE_URL}/about`}|g' "$file"
    
    # Replace href="/rentals" with href={`${BASE_URL}/rentals`}
    sed -i 's|href="/rentals"|href={`${BASE_URL}/rentals`}|g' "$file"
    
    # Replace href="/denago" with href={`${BASE_URL}/denago`}
    sed -i 's|href="/denago"|href={`${BASE_URL}/denago`}|g' "$file"
    
    # Replace href="/evolution" with href={`${BASE_URL}/evolution`}
    sed -i 's|href="/evolution"|href={`${BASE_URL}/evolution`}|g' "$file"
    
    # Replace any other href="/..." patterns
    sed -i 's|href="/\([^"]*\)"|href={`${BASE_URL}/\1`}|g' "$file"
    
    # Handle <a> tags with relative href
    sed -i 's|<a href="/\([^"]*\)"|<a href={`${BASE_URL}/\1`}|g' "$file"
    
    echo "  ✓ Updated $file"
  fi
done

echo "Vehicle pages conversion complete!"