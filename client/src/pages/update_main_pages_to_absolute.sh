#!/bin/bash

# Script to update all main page files to use absolute URLs

echo "Converting relative URLs to absolute URLs in main pages..."

# List of main page files
files=(
  "client/src/pages/VehicleDetailPage.tsx"
  "client/src/pages/HomePage.tsx"
  "client/src/pages/ShowroomPage.tsx"
  "client/src/pages/RentalsPage.tsx"
  "client/src/pages/ContactPage.tsx"
  "client/src/pages/ServicesPage.tsx"
  "client/src/pages/InventoryPage.tsx"
  "client/src/pages/AboutPage.tsx"
  "client/src/pages/DenagoPage.tsx"
  "client/src/pages/EvolutionPage.tsx"
  "client/src/pages/NewAboutPage.tsx"
  "client/src/pages/NewInventoryPage.tsx"
  "client/src/pages/NewServicesPage.tsx"
  "client/src/pages/not-found.tsx"
  "client/src/pages/ThankYouPage.tsx"
  "client/src/pages/TermsPage.tsx"
  "client/src/pages/PrivacyPage.tsx"
  "client/src/pages/FinancingPage.tsx"
)

# Process each file
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Processing: $file"
    
    # Add BASE_URL import if not already present
    if ! grep -q "import { BASE_URL }" "$file"; then
      # Check if there are any imports, then add the BASE_URL import
      if grep -q "^import " "$file"; then
        # Find the last import and add our import after it
        awk '/^import/ {lastImport=NR} 1; END {if(lastImport) print NR}' "$file" > /dev/null
        # Use a simpler approach - add after the first group of imports
        sed -i '0,/^import.*$/s//&\nimport { BASE_URL } from "@\/config\/urls";/' "$file"
      else
        # If no imports, add at the beginning
        sed -i '1i import { BASE_URL } from "@/config/urls";' "$file"
      fi
    fi
    
    # Replace Link href="/" patterns
    sed -i 's|<Link href="/"|<Link href={`${BASE_URL}/`}|g' "$file"
    sed -i 's|<Link href="/\([^"]*\)"|<Link href={`${BASE_URL}/\1`}|g' "$file"
    
    # Replace image src with relative paths
    sed -i 's|src="/attached_assets/\([^"]*\)"|src={`${BASE_URL}/attached_assets/\1`}|g' "$file"
    
    # Replace background image URLs in inline styles
    sed -i "s|url('/attached_assets/\([^']*\)')|url('\${BASE_URL}/attached_assets/\1')|g" "$file"
    
    # Replace any remaining href="/" patterns in regular anchor tags
    sed -i 's|<a href="/\([^"]*\)"|<a href={`${BASE_URL}/\1`}|g' "$file"
    
    echo "  ✓ Updated $file"
  fi
done

echo "Main pages conversion complete!"