import React from 'react'
import ContactInfoCard from './components/common/ContactInfoCard'
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <div className="grid gap-6 md:grid-cols-2 max-w-3xl mx-auto">
        <ContactInfoCard
          icon={Mail}
          title="Email"
          value="contact@intelligreen.com"
        />

        <ContactInfoCard
          icon={Phone}
          title="Phone"
          value="+91 98765 43210"
        />

        <ContactInfoCard
          icon={MapPin}
          title="Location"
          value="Bhopal, Madhya Pradesh, India"
        />

        <ContactInfoCard
          icon={Clock}
          title="Working Hours"
          value="Mon - Fri | 9:00 AM - 6:00 PM"
        />
      </div>
    </div>
  );
}

export default App