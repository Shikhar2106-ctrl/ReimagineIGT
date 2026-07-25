import { Home, SearchX } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-surface">
      <Container className="flex min-h-screen items-center justify-center">
        <div className="flex w-full flex-col items-center justify-center text-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-brand/10">
            <SearchX
              size={70}
              className="text-brand"
            />
          </div>

          <h1 className="mt-10 text-7xl font-extrabold text-text-primary">
            404
          </h1>

          <h2 className="mt-5 text-3xl font-bold text-text-primary">
            Page Not Found
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-8 text-text-secondary">
            The page you're looking for doesn't exist or may have been moved.
          </p>

          <Link to="/" className="mt-10">
            <Button size="lg">
              <Home
                size={18}
                className="mr-2"
              />
              Back to Home
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}