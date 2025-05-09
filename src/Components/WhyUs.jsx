import { ShieldCheck, Clock, ThumbsUp, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Secure & Legal',
      description: 'We ensure every transaction is 100% compliant and risk-free.',
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    },
    {
      title: 'Fast Processing',
      description: 'Submit today, get evaluated and paid within hours.',
      icon: <Clock className="w-8 h-8 text-green-600" />,
    },
    {
      title: 'Trusted by Sellers',
      description: 'Rated highly by hundreds of users for ease and reliability.',
      icon: <ThumbsUp className="w-8 h-8 text-indigo-600" />,
    },
    {
      title: 'Best Price Guarantee',
      description: 'We offer top-market value for your unused software.',
      icon: <DollarSign className="w-8 h-8 text-yellow-600" />,
    },
  ];

  return (
    <motion.section 
    className="bg-gray-50 py-16 px-6"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false , amount : 0.5 }}
    transition={{ duration: 3 }}
    >
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
        <p className="text-gray-600 text-lg mb-12">We stand out with a commitment to speed, safety, and satisfaction.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition">
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </motion.section>
  );
}
