import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <SEOHead 
        title="404 Page Not Found - Ocean County Golf Carts"
        description="Page not found. Return to Ocean County Golf Carts homepage or browse our inventory. Call 1-844-844-6638."
        keywords="404, page not found, Ocean County Golf Carts"
      />
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-gray-600 mb-6">
            The page you're looking for doesn't exist.
          </p>
          
          <div className="flex gap-4">
            <Link href="/">
              <Button className="bg-theme-orange hover:bg-orange-600 text-white">
                Return Home
              </Button>
            </Link>
            <Link href="/inventory">
              <Button variant="outline">
                Browse Inventory
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
