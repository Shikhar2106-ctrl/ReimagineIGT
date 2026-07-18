import { Home, SearchX } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-surface py-20">
      <Container>

        <div className="mx-auto max-w-2xl text-center">

          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-brand/10">
            <SearchX
              size={70}
              className="text-brand"
            />
          </div>

          <h1 className="mt-10 text-7xl font-extrabold text-text-primary">
            404
          </h1>

          <h2 className="mt-6 text-3xl font-bold text-text-primary">
            Page Not Found
          </h2>

          <p className="mt-5 text-lg leading-8 text-text-secondary">
            The page you're looking for doesn't exist or may have been moved.
          </p>

          <Link to="/">
            <Button
              size="lg"
              className="mt-10"
            >
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