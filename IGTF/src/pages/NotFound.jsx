import React from 'react';
import Container from '../components/common/Container';
import Button from '../components/common/Button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center text-center">
      <Container className="space-y-6 max-w-md">
        <div className="text-7xl font-extrabold text-emerald-400">404</div>
        <h1 className="text-3xl font-bold text-white">Page Not Found</h1>
        <p className="text-slate-400 text-sm">
          The page you are looking for does not exist or has been moved.
        </p>
        <Button to="/" variant="primary" size="md">
          <Home size={16} />
          Return to Homepage
        </Button>
      </Container>
    </div>
  );
}
