import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Toaster, toast } from "@/components/ui/toaster";


// Mui imports
// removed MUI TextField from '@mui/material/TextField';
// removed MUI Button from '@mui/material/Button';
// removed MUI Toaster from '@mui/material/Toaster';
// removed MUI toast from '@mui/material/toast';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


// Importing components
import BackgroundImage from '../components/BackgroundImage';
import AnimationDownToUp from './components/Animation/AnimationDownToUp';
import AnimationRightToLeft from './components/Animation/AnimationRightToLeft';export interface FormdataType {
  fullnames: string;
  mobileno: string;
  email: string;
  agencies: string;
}



const RegForm: React.FC = () => {
  const [snackbarOpen, setToasterOpen] = useState<boolean>(false);
  const [alertType, settoastType] = useState<string>('success'); // 'success' or 'error'
  const [alertMessage, settoastMessage] = useState<string>('');
  const [loaderIcon, setLoaderIcon] = useState<boolean>(false);

  const handlePhoneChange: React.FC = (value, string) => {
    setFormData((prevData) => ({
      ...prevData,
      mobileno: value, 
    }));
  };

  // Handle Toaster close
  const handleClose: React.FC = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setToasterOpen(false);
  };
 

  // State to manage form inputs
  const [formData, setFormData] = useState<FormdataType>({
    fullnames: '',
    mobileno: '',
    email: '',
    agencies: '',
  });

  // Handle form change
  const handleChange: React.FC = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const [submitted, setSubmitted] = useState<boolean>(false);
    // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setLoaderIcon(true);
    setSubmitted(true);
    try {
      const res = await axios.post('/api/registration-form', {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000, 
      });

      setFormData({
        fullnames: '',
        mobileno: '',
        email: '',
        agencies: '',
      });

      const data = res.data; // ✅ Use res.data instead of res.json()
  
      if (res.status === 200) { // ✅ Use status code check instead of res.ok
        // Show success snackbar
        settoastType('success');
        settoastMessage(data.message);
        setToasterOpen(true);
      
      } else {
        // Show error snackbar
        settoastType('error');
        settoastMessage(`Error: ${data.error || 'Something went wrong'}`);
        setToasterOpen(true);
      }
    } catch (error) {
      // Show error snackbar
      settoastType('error');
      settoastMessage(`Error: ${error.response?.data?.error || error.message}`);
      setToasterOpen(true);
    } finally {
      setLoaderIcon(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <Card className="w-full max-w-2xl shadow-xl border border-gray-200 rounded-2xl bg-white">
        <CardContent>
    <div className="relative bg-gray-100">

      { loaderIcon &&
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/75">
         <div className="loaderIcon">
                <div className="Iconbar bg-redCustom"></div>
                <div className="Iconbar bg-blueCustom"></div>
                <div className="Iconbar bg-redCustom"></div>
                <div className="Iconbar bg-blueCustom"></div>
          </div>
        </div>
      }

      {/* Top Div with BackgroundImage */}
 
       <BackgroundImage/>

      {/* Container for Bottom Div */}
                                <div className="relative top-[-40px] left-0 right-0 flex justify-center">
                            <div className="bg-white w-full max-w-[calc(100%-2rem)] p-6 flex flex-col items-center justify-start overflow-visible rounded-3xl shadow-xl">
                                
                                {/* Form Section */}
                                <form
                                className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl border border-gray-200 flex flex-col items-center space-y-6 transition-all duration-500"
                                onSubmit={handleSubmit}
                              >
                                {/* Form Heading */}
                                <h2 className="text-gray-900 text-3xl font-semibold text-center uppercase tracking-wide">
                                  Attendee Registration
                                </h2>

                                {/* Form Fields */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                                  <TextField
                                    required
                                    name="fullnames"
                                    label="Full Name"
                                    variant="outlined"
                                    value={formData.fullnames}
                                    onChange={handleChange}
                                    fullWidth
                                    disabled={submitted}
                                    className="bg-gray-50 rounded-lg"
                                  />
                                  <PhoneInput
                                    required
                                    country="ke"
                                    value={formData.mobileno}
                                    onChange={handlePhoneChange}
                                    inputStyle={{ width: "100%", height: "56px", borderRadius: "6px", borderColor: "#ddd" }}
                                    containerClass="w-full"
                                    className="bg-gray-50 rounded-lg"
                                    disabled={submitted}
                                  />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                                  <TextField
                                    required
                                    name="email"
                                    label="Email Address"
                                    variant="outlined"
                                    value={formData.email}
                                    onChange={handleChange}
                                    fullWidth
                                    disabled={submitted}
                                    className="bg-gray-50 rounded-lg"
                                  />
                                  <TextField
                                    required
                                    name="agencies"
                                    label="Agency Representation"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    value={formData.agencies}
                                    onChange={handleChange}
                                    fullWidth
                                    disabled={submitted}
                                    className="bg-gray-50 rounded-lg"
                                  />
                                </div>

                                {/* Submit Button */}
                                <button
                                  type="submit"
                                  className={`relative px-10 py-4 rounded-xl text-white font-bold text-lg 
                                    bg-gradient-to-r from-indigo-600 to-indigo-800 shadow-lg 
                                    hover:from-indigo-700 hover:to-indigo-900 hover:shadow-indigo-500/50 
                                    focus:ring-4 focus:ring-indigo-400 transition-all duration-300 ease-in-out 
                                    before:absolute before:inset-0 before:bg-white/10 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-300 
                                    ${submitted ? "opacity-50 cursor-not-allowed" : "hover:opacity-90 hover:scale-105"}`}
                                  disabled={submitted}
                                >
                                  {submitted ? "Submitted" : "Submit"}
                                </button>
                              </form>
                            </div>
                            </div>


         {/* Toaster for success and error messages */}
      <Toaster
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <toast onClose={handleClose} severity={alertType} sx={{ width: '100%' }}>
          {alertMessage}
        </toast>
      </Toaster>

    </div>
  );
};

        </CardContent>
      </Card>
      <Toaster />
    </div>

export default RegForm;