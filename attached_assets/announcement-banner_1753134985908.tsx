import { X } from "lucide-react";
import { useState } from "react";

export default function AnnouncementBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-accent text-white py-2 px-4 text-center relative">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm md:text-base font-medium">
          🎉 <strong>Winter Special:</strong> 0% APR Financing Available + FREE Delivery within 50 miles! 
          <span className="ml-2">
            <a href="tel:804-585-7301" className="underline hover:no-underline">
              Call 804-585-7301
            </a>
          </span>
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}