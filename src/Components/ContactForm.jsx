import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });
  const [errors, setErrors] = useState({});

  const licenseOptions = ['Windows', 'Office 365', 'Adobe', 'Antivirus', 'Other'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.company) newErrors.company = 'Company is required';
    if (!formData.licenseType) newErrors.licenseType = 'License type is required';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      alert('Form submitted successfully!');
    }
  };

  return (
    <motion.section
      className="bg-gray-100 py-16 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false , amount : 0.1 }}
      transition={{ duration: 3 }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-gray-900 text-center mb-8"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white text-gray-500 p-8 rounded-2xl shadow-lg space-y-6 border border-gray-200"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {[
            { label: 'Name', name: 'name', type: 'text' },
            { label: 'Email', name: 'email', type: 'email' },
            { label: 'Company', name: 'company', type: 'text' },
          ].map(({ label, name, type }) => (
            <div key={name}>
              <label className="block font-medium mb-1">{label}</label>
              <input
                name={name}
                type={type}
                value={formData[name]}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded px-4 py-2"
              />
              {errors[name] && <p className="text-sm text-red-500 mt-1">{errors[name]}</p>}
            </div>
          ))}

          <div>
            <label className="block font-medium mb-1">License Type</label>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            >
              <option value="">-- Select License Type --</option>
              {licenseOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            {errors.licenseType && <p className="text-sm text-red-500 mt-1">{errors.licenseType}</p>}
          </div>

          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            {errors.message && <p className="text-sm text-red-500 mt-1">{errors.message}</p>}
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg shadow"
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
}
