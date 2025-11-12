import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="tel:2505747110">
              <Phone className="mr-2 h-4 w-4" />
              Call Us
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

