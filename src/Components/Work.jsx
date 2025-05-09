import { UploadCloud, BadgeDollarSign, CreditCard } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Upload License',
      description: 'Securely submit your unused license with a few clicks.',
      icon: <UploadCloud className="w-10 h-10 text-blue-600" />,
    },
    {
      title: 'Get Valuation',
      description: 'We’ll evaluate its resale value instantly or within hours.',
      icon: <BadgeDollarSign className="w-10 h-10 text-green-600" />,
    },
    {
      title: 'Get Paid',
      description: 'Receive fast payment via your preferred method.',
      icon: <CreditCard className="w-10 h-10 text-purple-600" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
        <p className="text-gray-600 text-lg mb-12">
          Selling your software license is fast, easy, and secure in just three simple steps.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl shadow p-6 hover:shadow-md transition">
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}