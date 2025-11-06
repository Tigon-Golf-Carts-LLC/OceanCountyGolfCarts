// URL Configuration for Ocean County Golf Carts
// All URLs must be absolute for proper SEO, canonical URLs, and hreflang implementation

export const BASE_URL = 'https://oceancountygolfcarts.com';
export const CDN_URL = BASE_URL; // Using primary domain for CDN as well
export const API_URL = BASE_URL; // Using primary domain for API

// Helper function to convert relative URLs to absolute
export function toAbsoluteUrl(path: string): string {
  // Handle empty paths or anchors
  if (!path || path === '#' || path.startsWith('javascript:') || path.startsWith('mailto:') || path.startsWith('tel:')) {
    return path;
  }
  
  // If already absolute, return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Handle protocol-relative URLs
  if (path.startsWith('//')) {
    return `https:${path}`;
  }
  
  // Convert relative to absolute
  if (path.startsWith('/')) {
    return `${BASE_URL}${path}`;
  }
  
  // Handle relative paths without leading slash
  return `${BASE_URL}/${path}`;
}

// Helper function for API URLs
export function toApiUrl(endpoint: string): string {
  if (endpoint.startsWith('http://') || endpoint.startsWith('https://')) {
    return endpoint;
  }
  
  if (endpoint.startsWith('/')) {
    return `${API_URL}${endpoint}`;
  }
  
  return `${API_URL}/${endpoint}`;
}

// Helper function for asset URLs
export function toAssetUrl(path: string): string {
  if (!path || path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  if (path.startsWith('/')) {
    return `${CDN_URL}${path}`;
  }
  
  return `${CDN_URL}/${path}`;
}