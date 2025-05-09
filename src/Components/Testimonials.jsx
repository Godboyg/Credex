export default function Testimonials() {
    const testimonials = [
      {
        name: 'Alex Johnson',
        role: 'IT Manager',
        company: 'NextGen Software Ltd.',
        quote:
          'The process was smooth, fast, and surprisingly simple. I sold unused licenses and got paid the same day. Highly recommend this platform!',
      },
      {
        name: 'Priya Mehta',
        role: 'Freelance Developer',
        company: 'Independent',
        quote:
          'A reliable service that helped me monetize old software I no longer needed. The valuation was fair and the team was super responsive.',
      },
    ];
  
    return (
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg mb-12">Real feedback from users who sold their licenses with us.</p>
  
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <p className="text-gray-700 text-base mb-4 italic">“{testimonial.quote}”</p>
                <div className="text-left mt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }  