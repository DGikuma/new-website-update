import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Step2PolicyDetails = ({ formData = {}, updateFormData = () => {} }) => {
  // 🔹 Helper function: add months safely
  const addMonths = (date, months) => {
    const d = new Date(date);
    d.setMonth(d.getMonth() + months);
    return d.toISOString().split("T")[0]; // YYYY-MM-DD
  };

  // 🔹 Auto-update "Certificate To Date" whenever start date + period change
  useEffect(() => {
    if (formData.certificateStartDate && formData.period) {
      let newEndDate = "";

      switch (formData.period) {
        case "One Month":
          newEndDate = addMonths(formData.certificateStartDate, 1);
          break;
        case "Six Months":
          newEndDate = addMonths(formData.certificateStartDate, 6);
          break;
        case "Full Year":
          newEndDate = addMonths(formData.certificateStartDate, 12);
          break;
        default:
          newEndDate = "";
      }

      if (!formData.certificateToDate || formData.autoCalculated) {
        updateFormData({ certificateToDate: newEndDate, autoCalculated: true });
      }
    }
  }, [formData.certificateStartDate, formData.period]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-8 bg-white text-gray-900 p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-300"
    >
      <h2 className="text-2xl font-bold tracking-wide text-blue-800 border-b pb-2">
        Policy Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Registration Number */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Registration Number
          </label>
          <input
            type="text"
            value={formData.registrationNumber || ''}
            onChange={(e) => updateFormData({ registrationNumber: e.target.value })}
            className="mt-2 block w-full h-12 border border-gray-300 rounded-lg bg-gray-50 px-4 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Chasis Number */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Chasis Number
          </label>
          <input
            type="text"
            value={formData.chasisNo || ''}
            onChange={(e) => updateFormData({ chasisNo: e.target.value })}
            className="mt-2 block w-full h-12 border border-gray-300 rounded-lg bg-gray-50 px-4 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        {/* Cover Type */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Cover Type
          </label>
          <div className="mt-2 space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
            {['Comprehensive', 'Third Party'].map((type) => (
              <label key={type} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="coverType"
                  value={type}
                  checked={formData.coverType === type}
                  onChange={(e) => updateFormData({ coverType: e.target.value })}
                  className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                  required
                />
                <span className="text-gray-800">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Certificate Start Date */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Certificate Start Date
          </label>
          <input
            type="date"
            value={formData.certificateStartDate || ''}
            onChange={(e) => updateFormData({ certificateStartDate: e.target.value, autoCalculated: true })}
            className="mt-1 block w-full h-12 rounded-xl border border-gray-300 
                      bg-gradient-to-r from-blue-50 via-cyan-50 to-teal-50 
                      px-4 shadow-sm text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-offset-1 
                      focus:ring-cyan-400 focus:border-cyan-400 
                      transition-all duration-300 ease-in-out"
          />
          <p className="text-xs text-gray-500 mt-1">Select the start date for the certificate</p>
        </div>

        {/* Period */}
        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Period
          </label>
          <div className="mt-2 space-y-2 bg-gray-50 p-3 rounded-lg border border-gray-200">
            {['Full Year'].map((type) => (
              <label key={type} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="period"
                  value={type}
                  checked={formData.period === type}
                  onChange={(e) => updateFormData({ period: e.target.value, autoCalculated: true })}
                  className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                  required
                />
                <span className="text-gray-800">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Certificate To Date */}
        <div className="relative">
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Certificate To Date
          </label>
          <input
            type="date"
            value={formData.certificateToDate || ''}
            onChange={(e) => updateFormData({ certificateToDate: e.target.value, autoCalculated: false })}
            className="mt-1 block w-full h-12 rounded-xl border border-gray-300 
                      bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 
                      px-4 shadow-sm text-gray-800 placeholder-gray-400
                      focus:outline-none focus:ring-2 focus:ring-offset-1 
                      focus:ring-indigo-400 focus:border-indigo-400 
                      transition-all duration-300 ease-in-out"
          />
          <p className="text-xs text-gray-500 mt-1">Select the expiry date for the certificate</p>
        </div>
      </div>

      {/* Read-only Disclaimer Preview */}
      {formData.certificateStartDate && (
        <div className="mt-4 p-4 rounded-lg border border-yellow-400 bg-yellow-50 shadow-sm">
          <p className="text-base text-gray-700 font-medium">
            <span className="block mb-2 text-gray-800 font-semibold">Disclaimer:</span>
            For clarity, your policy has been scheduled to run for a standard term of
            twelve (12) months starting from{" "}
            <strong className="text-gray-900">
              {new Date(formData.certificateStartDate).toLocaleDateString()}
            </strong>
            . Based on this start date, the coverage will end on:{" "}
            <span className="text-green-700 font-bold text-lg">
              {formData.certificateToDate ? new Date(formData.certificateToDate).toLocaleDateString() : '—'}
            </span>
            . This is a system-generated calculation provided for your confirmation.
          </p>
        </div>
      )}

      {/* Upload Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {['idCopy', 'pinCopy', 'logBookOrKraPin'].map((field, idx) => {
          const labels = ['ID Copy', 'PIN Copy', 'Log Book / KRA PIN Copy'];
          const buttonTexts = ['Upload ID(s)', 'Upload PIN(s)', 'Upload LogBook(s)'];
          const colors = [
            'from-blue-500 to-indigo-600',
            'from-green-500 to-emerald-600',
            'from-pink-500 to-rose-600'
          ];

          const files = Array.isArray(formData[field]) ? formData[field] : [];

          const handleFilesChange = (e) => {
            const selectedFiles = Array.from(e.target.files).map(file => ({
              file,
              preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null
            }));
            updateFormData({ [field]: [...files, ...selectedFiles] });
          };

          const removeFile = (index) => {
            const newFiles = files.filter((_, i) => i !== index);
            updateFormData({ [field]: newFiles });
          };

          return (
            <div key={field}>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {labels[idx]}
              </label>

              <label className={`relative flex items-center justify-center w-full h-12 px-4 rounded-lg bg-gradient-to-r ${colors[idx]} text-white font-medium cursor-pointer shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300`}>
                <span>{buttonTexts[idx]}</span>
                <input
                  type="file"
                  multiple
                  accept="image/*,application/pdf"
                  onChange={handleFilesChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </label>

              {files.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {files.map((item, i) => (
                    <div key={i} className="relative inline-block">
                      {item.preview ? (
                        <img
                          src={item.preview}
                          alt={`${labels[idx]} ${i + 1}`}
                          className="w-[100px] h-[100px] object-cover rounded-md border"
                          onLoad={() => URL.revokeObjectURL(item.preview)}
                        />
                      ) : (
                        <p className="text-sm text-gray-700 max-w-[120px] truncate border px-2 py-1 rounded-md bg-gray-100">
                          {item.file.name}
                        </p>
                      )}

                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-md hover:bg-red-600 transition"
                        title="Remove file"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <h2 className="text-2xl font-bold tracking-wide text-blue-800 border-b pb-2">
        Enter Vehicle Information
      </h2>
      <div>
          <label className="block text-sm font-semibold text-gray-700">
            Make
          </label>
          <input
            type="text"
            value={formData.vehicleMake || ''}
            onChange={(e) => updateFormData({ vehicleMake: e.target.value })}
            className="mt-2 block w-full h-12 border border-gray-300 rounded-lg bg-gray-50 px-4 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            Year Of Manufacture
          </label>
          <select
            value={formData.yearOfMake || ''}
            onChange={(e) => updateFormData({ yearOfMake: e.target.value })}
            className="mt-2 w-full h-12 rounded-lg border border-gray-300 px-4 bg-gray-50 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select</option>
            {Array.from(
              { length: new Date().getFullYear() - 1976 + 1 },
              (_, i) => 1976 + i
            )
              .reverse()
              .map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700">
            License To Carry
          </label>
          <input
            type="text"
            value={formData.licenseToCarry || ''}
            onChange={(e) => updateFormData({ licenseToCarry: e.target.value })}
            className="mt-2 block w-full h-12 border border-gray-300 rounded-lg bg-gray-50 px-4 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      
    </motion.div>
  );
};

export default Step2PolicyDetails;
