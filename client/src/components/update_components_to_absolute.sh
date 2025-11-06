#!/bin/bash

# Script to update remaining components to use absolute URLs

echo "Converting relative URLs to absolute URLs in remaining components..."

# List of component files to update
files=(
  "client/src/components/TownPage.tsx"
  "client/src/components/InventorySection.tsx"
  "client/src/components/VehicleCard.tsx"
  "client/src/components/VehicleDetailsComponent.tsx"
  "client/src/components/ServicesSplash.tsx"
  "client/src/components/HeroSection.tsx"
  "client/src/pages/towns/TownPageTemplate.tsx"
)

# Process each file
for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    echo "Processing: $file"
    
    # Add BASE_URL import if not already present
    if ! grep -q "import { BASE_URL" "$file"; then
      # Check if there are any imports from wouter or react
      if grep -q "from \"wouter\"" "$file" || grep -q "from \"react\"" "$file"; then
        # Add after the first import
        sed -i '0,/^import.*from/s//&\nimport { BASE_URL } from "@\/config\/urls";/' "$file"
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
  else
    echo "  ⚠ File not found: $file"
  fi
done

echo "Components conversion complete!"