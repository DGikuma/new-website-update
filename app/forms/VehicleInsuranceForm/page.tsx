import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Toaster, toast } from "@/components/ui/toaster";

import { motion } from 'framer-motion';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Button,
  FormControlLabel,
  Checkbox,
  Typography,
  Toaster,
  toast,
  toastTitle,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PolicyIcon from "@mui/icons-material/Policy";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import Slide from "@mui/material/Slide";

import Step1InsuredDetails from './steps/Step1InsuredDetails';
import Step2Policy_Vehicle_Details from './steps/Step2Policy_Vehicle_Details';export interface FormdataType {
}

export interface SnackType {
  open: boolean;
  type: string;
  message: string;
  key: number;
}



const steps = [
  'Insured Details',
  'Policy & Vehicle Details',
  'Preview & Confirm'
];

const VehicleInsuranceForm: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [formData, setFormData] = useState<FormdataType>({});
  const [loading, setLoading] = useState<boolean>(false);

  // Added `key` so Toaster always refreshes
  const [snack, setSnack] = useState<SnackType>({ open: false, type: '', message: '', key: 0 });

  const handleNext: React.FC = () => {
    if (step === 0) {
      const requiredFields = ['products', 'pinNumber', 'policyHolder', 'eimail'];

      const missing = requiredFields.some(
        (key) => !formData[key]?.toString().trim()
      );

      if (missing) {
        return setSnack({
          open: true,
          type: 'error',
          message: '❌ Please fill in all required insured details before continuing.',
          key: new Date().getTime(),
        });
      }
    }

    if (step === 1) {
      const requiredFields = [
        'registrationNumber',
        'chasisNo',
        'coverType',
        'certificateStartDate',
        'period',
        'certificateToDate',
        'vehicleMake',
        'yearOfMake',
        'licenseToCarry',
        'idCopy',
        'pinCopy',
        'logBookOrKraPin'
      ];

      const missing = requiredFields.some(
        (key) =>
          !formData[key] ||
          (Array.isArray(formData[key]) && formData[key].length === 0)
      );

      if (missing) {
        return setSnack({
          open: true,
          type: 'error',
          message: '❌ Please complete all policy & vehicle details (including uploads) before continuing.',
          key: new Date().getTime(),
        });
      }
    }

    setStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack: React.FC = () => setStep((prev) => Math.max(prev - 1, 0));

  const updateFormData: React.FC = (newData) =>
    setFormData((prev) => ({ ...prev, ...newData }));

  const handleConfirmSubmit = async () => {
    try {
      setLoading(true);

      const data = new FormData();

      // Append regular form fields
      Object.keys(formData).forEach((key) => {
        if (!Array.isArray(formData[key])) {
          data.append(key, formData[key] || "");
        }
      });

      // Append uploaded files
      ['idCopy', 'pinCopy', 'logBookOrKraPin'].forEach((field) => {
        (formData[field] || []).forEach((item) => {
          if (item.file) {
            data.append(field, item.file, item.file.name);
          }
        });
      });

      const res = await fetch('/api/insurance_form', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();

      if (!res.ok) throw new Error(result.error || 'Submission failed');

      setSnack({
        open: true,
        type: 'success',
        message: '✅ Form submitted successfully!',
        key: new Date().getTime(),
      });

      if (result.fileUrl) window.open(result.fileUrl, '_blank');

      // Reset form
      setFormData({});
      setStep(0);
    } catch (err) {
      console.error("Upload error:", err);
      setSnack({
        open: true,
        type: 'error',
        message: `❌ ${err.message}`,
        key: new Date().getTime(),
      });
    } finally {
      setLoading(false);
    }
  };

  const SlideTransition: React.FC = (props) {
    return <Slide {...props} direction="left" />;
  }

  const renderStep: React.FC = () => {
    const stepProps = { formData, updateFormData };

    switch (step) {
      case 0:
        return <Step1InsuredDetails {...stepProps} />;
      case 1:
        return <Step2Policy_Vehicle_Details {...stepProps} />;
      case 2:
        return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <Card className="w-full max-w-2xl shadow-xl border border-gray-200 rounded-2xl bg-white">
        <CardContent>
          <Card className="shadow-lg border rounded-2xl">
            <CardHeader title="Preview & Confirm" />
            <Divider />

            <CardContent className="space-y-6 text-sm">
              {/* Insured Details */}
              <div>
                <div className="flex items-center gap-2 text-blue-700 font-semibold mb-2">
                  <PersonIcon /> Insured Details
                </div>
                <Typography>Products: <strong>{formData.products}</strong></Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Boolean(formData.timeOnRisk)}
                      onChange={(e) =>
                        updateFormData({ timeOnRisk: e.target.checked })
                      }
                    />
                  }
                  label="Time On Risk"
                />
                <Typography>PIN Number: <strong>{formData.pinNumber}</strong></Typography>
                <Typography>Policy Holder: <strong>{formData.policyHolder}</strong></Typography>
                <Typography>Email Address: <strong>{formData.eimail}</strong></Typography>
              </div>

              {/* Policy Details */}
              <div>
                <div className="flex items-center gap-2 text-blue-700 font-semibold mb-2">
                  <PolicyIcon /> Policy Details
                </div>
                <Typography>Registration Number: <strong>{formData.registrationNumber}</strong></Typography>
                <Typography>Chasis Number: <strong>{formData.chasisNo}</strong></Typography>
                <Typography>Cover Type: <strong>{formData.coverType}</strong></Typography>
                <Typography>Certificate Start Date: <strong>{formData.certificateStartDate}</strong></Typography>
                <Typography>Period: <strong>{formData.period}</strong></Typography>
                <Typography>Certificate End Date: <strong>{formData.certificateToDate}</strong></Typography>
              </div>

              {/* Vehicle Info */}
              <div>
                <div className="flex items-center gap-2 text-blue-700 font-semibold mb-2">
                  <DirectionsCarIcon /> Vehicle Information
                </div>
                <Typography>Make: <strong>{formData.vehicleMake}</strong></Typography>
                <Typography>Year Of Manufacture: <strong>{formData.yearOfMake}</strong></Typography>
                <Typography>License To Carry: <strong>{formData.licenseToCarry}</strong></Typography>
              </div>

              {/* Uploaded Files Preview */}
              <div>
                <div className="flex items-center gap-2 text-blue-700 font-semibold mb-2">
                  📎 Uploaded Files
                </div>
                {['idCopy', 'pinCopy', 'logBookOrKraPin'].map((field, idx) => {
                  const labels = ['ID Copy', 'PIN Copy', 'Log Book / KRA PIN Copy'];
                  const files = Array.isArray(formData[field]) ? formData[field] : [];

                  const removeFile: React.FC = (index) => {
                    const newFiles = files.filter((_, i) => i !== index);
                    updateFormData({ [field]: newFiles });
                  };

                  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <Card className="w-full max-w-2xl shadow-xl border border-gray-200 rounded-2xl bg-white">
        <CardContent>
                    <div key={field} className="mb-4">
                      <Typography className="font-medium">{labels[idx]}:</Typography>
                      {files.length > 0 ? (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {files.map((f, i) => (
                            <div key={i} className="relative w-[80px] h-[80px]">
                              {f.preview ? (
                                <img
                                  src={f.preview}
                                  alt={f.file.name}
                                  className="w-full h-full object-cover rounded-md border"
                                  onLoad={() => URL.revokeObjectURL(f.preview)}
                                />
                              ) : (
                                <div className="w-full h-full flex items-center justify-center text-xs text-gray-700 bg-gray-100 rounded-md border px-1 text-center">
                                  {f.file.name}
                                </div>
                              )}
                              {/* Remove Button */}
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
                      ) : (
                        <Typography className="text-gray-500 mt-1">No files attached</Typography>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>

            <Divider />
            <div className="flex justify-center items-center px-6 py-4">
              <Button
                variant="contained"
                color="success"
                onClick={handleConfirmSubmit}
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Confirm & Submit'}
              </Button>
            </div>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <Card className="w-full max-w-2xl shadow-xl border border-gray-200 rounded-2xl bg-white">
        <CardContent>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-blue-200 relative overflow-hidden">
      <div className="absolute inset-0 backdrop-blur-sm bg-white/30" />

      <div className="relative z-10 w-full max-w-4xl">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.4 }}
          className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-200"
        >
          <h1 className="text-3xl font-bold mb-4 text-center">
            Insurance Proposal
          </h1>
          <div className="mb-6 text-center text-sm text-gray-600">
            Step {step + 1} of {steps.length} - {steps[step]}
          </div>

          {renderStep()}

          <div className="mt-8 flex justify-between gap-4">
            <button
              onClick={handleBack}
              disabled={step === 0 || loading}
              className="px-4 py-2 rounded-md border bg-white/70 backdrop-blur-md text-gray-800 shadow-sm hover:bg-red-500 hover:text-white disabled:opacity-50"
            >
              ← Previous
            </button>
            {step < steps.length - 1 && (
              <button
                onClick={handleNext}
                disabled={loading}
                className="px-4 py-2 rounded-md bg-blue-600 text-white shadow-md hover:bg-blue-700 disabled:opacity-50"
              >
                Next →
              </button>
            )}
          </div>
        </motion.div>
      </div>

      {/* Toaster */}
      <Toaster
        key={snack.key} // 👈 makes sure it re-renders
        open={snack.open}
        autoHideDuration={5000}
        onClose={() => setSnack({ ...snack, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={SlideTransition}
      >
        <toast
          onClose={() => setSnack({ ...snack, open: false })}
          severity={snack.type}
          variant="filled"
          icon={false}
          sx={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            fontSize: "0.95rem",
            fontWeight: 500,
            letterSpacing: "0.3px",
            display: "flex",
            alignItems: "center",
            px: 3,
            py: 2,
            ...(snack.type === "success"
              ? { background: "linear-gradient(135deg, #0D9488, #14B8A6)", color: "#fff" }
              : { background: "linear-gradient(135deg, #B91C1C, #DC2626)", color: "#fff" }),
          }}
        >
          <toastTitle sx={{ fontWeight: 700, mb: 0.5, fontSize: "1rem" }}>
            {snack.type === "success" ? "✅ Success" : "⚠️ Error"}
          </toastTitle>
          {snack.message}
        </toast>
      </Toaster>
    </div>
  );
};

        </CardContent>
      </Card>
      <Toaster />
    </div>

export default VehicleInsuranceForm;