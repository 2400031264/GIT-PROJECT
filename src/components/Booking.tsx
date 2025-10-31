import { useState } from 'react';
import { Input } from './ui/input';
import { Label } from './ui/label';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Booking confirmed for ${formData.name} on ${formData.date} at ${formData.time} for ${formData.guests} guests!`);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="booking" className="py-20 px-4 bg-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center mb-10" style={{ color: '#334D2F' }}>Book a Table</h2>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="md:col-span-2">
              <Label htmlFor="name" style={{ color: '#334D2F' }}>Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="mt-2 rounded-lg border-gray-300"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" style={{ color: '#334D2F' }}>Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="mt-2 rounded-lg border-gray-300"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone" style={{ color: '#334D2F' }}>Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className="mt-2 rounded-lg border-gray-300"
                placeholder="(123) 456-7890"
              />
            </div>

            {/* Date */}
            <div>
              <Label htmlFor="date" style={{ color: '#334D2F' }}>Date</Label>
              <Input
                id="date"
                name="date"
                type="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="mt-2 rounded-lg border-gray-300"
              />
            </div>

            {/* Time */}
            <div>
              <Label htmlFor="time" style={{ color: '#334D2F' }}>Time</Label>
              <Input
                id="time"
                name="time"
                type="time"
                required
                value={formData.time}
                onChange={handleChange}
                className="mt-2 rounded-lg border-gray-300"
              />
            </div>

            {/* Guests */}
            <div className="md:col-span-2">
              <Label htmlFor="guests" style={{ color: '#334D2F' }}>Number of Guests</Label>
              <select
                id="guests"
                name="guests"
                required
                value={formData.guests}
                onChange={handleChange}
                className="mt-2 w-full rounded-lg border border-gray-300 px-3 py-2 bg-white"
                style={{ color: '#334D2F' }}
              >
                <option value="">Select number of guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests</option>
                <option value="7">7 Guests</option>
                <option value="8">8+ Guests</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full mt-8 px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02]"
            style={{ backgroundColor: '#F4D03F', color: '#334D2F' }}
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </section>
  );
}
