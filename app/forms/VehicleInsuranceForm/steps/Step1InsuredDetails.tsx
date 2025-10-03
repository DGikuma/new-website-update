import React from "react";
import { motion } from "framer-motion";

const Step1InsuredDetails = ({ formData = {}, updateFormData = () => {} }) => {
  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-8 bg-white text-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
    >
      <h2 className="text-2xl font-bold tracking-wide text-blue-800 border-b pb-2">
        Insured Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Products */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Products
          </label>
          <select
            value={formData.products || ""}
            onChange={(e) => updateFormData({ products: e.target.value })}
            className="mt-2 w-full h-12 rounded-lg border border-gray-300 px-4 bg-gray-50 text-gray-900 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          >
            <option value="--Select--">Select</option>
            <option value="001-Tricycle">001 - Tricycle</option>
            <option value="002-Motorbike">002 - Motorbike</option>
          </select>
        </div>

        {/* Time On Risk */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Time On Risk
          </label>
          <div className="mt-2 space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
            {["Time On Risk"].map((type) => (
              <label key={type} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  name="timeOnRisk"
                  value={type}
                  checked={formData.timeOnRisk === type}
                  onChange={(e) => updateFormData({ timeOnRisk: e.target.value })}
                  className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                />
                <span className="text-gray-800">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Pin Number */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Pin Number
          </label>
          <input
            type="text"
            value={formData.pinNumber || ""}
            onChange={(e) => updateFormData({ pinNumber: e.target.value })}
            className="mt-2 block w-full h-12 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 px-4 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Policy Holder */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Policy Holder
          </label>
          <input
            type="text"
            value={formData.policyHolder || ""}
            onChange={(e) => updateFormData({ policyHolder: e.target.value })}
            className="mt-2 block w-full h-12 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 px-4 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            value={formData.eimail || ""}
            onChange={(e) => updateFormData({ eimail: e.target.value })}
            className="mt-2 block w-full h-12 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 px-4 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

      </div>
    </motion.div>
  );
};

export default Step1InsuredDetails;
