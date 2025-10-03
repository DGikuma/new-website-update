import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Toaster, toast } from "@/components/ui/toaster";

import Image from 'next/image';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from 'axios';
import { useRouter } from 'next/router';

// Mui imports
// removed MUI TextField from '@mui/material/TextField';
// removed MUI Button from '@mui/material/Button';
  
// removed MUI Toaster from '@mui/material/Toaster';
// removed MUI toast from '@mui/material/toast';
import { motion } from "framer-motion";

 
import {  Dialog, DialogActions, DialogContent, DialogTitle,   Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import SaveAsIcon from '@mui/icons-material/SaveAs';
 

import { Country, City } from "country-state-city";

import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';export interface ErrorsType {
}

export interface SimpleformType {
  principal_id: string;
  first_name: string;
  middle_name: string;
  surname: string;
  email: string;
}

export interface FormdataType {
  intermediary_type: string;
  title: string;
  firstname: string;
  middlename: string;
  lastname: string;
  gender: string;
  mobileno: string;
  postal_address: string;
  idtype: string;
  idno: string;
  pin_no: string;
  dateofbirth: string;
  country: string;
  city: string;
  eimail: string;
  company_name: string;
  company_number: string;
  bank_name: string;
  account_name: string;
  bank_branch: string;
  account_number: string;
}




const AgentForm: React.FC = () => {

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openRegistration, setOpenRegistration] = useState<boolean>(true);
  const [snackbarOpen, setToasterOpen] = useState<boolean>(false);
  const [alertType, settoastType] = useState<string>('success'); // 'success' or 'error'
  const [alertMessage, settoastMessage] = useState<string>('');
  const [loaderIcon, setLoaderIcon] = useState<boolean>(false);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [isSimpleForm, setIsSimpleForm] = useState<boolean>(false);


  useEffect(() => {
    setOpenDialog(true);
  }, []);
  
  

  // Handle Toaster close
  const handleClose: React.FC = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setToasterOpen(false);
  };
   
  const handlePhoneChange: React.FC = (value, country, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };  

  const countries = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde",
    "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)",
    "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic",
    "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", "Fiji", "Finland",
    "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
    "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq",
    "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
    "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
    "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
    "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", "Namibia", "Nauru",
    "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman",
    "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
    "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia",
    "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
    "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan",
    "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan",
    "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
    "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
  ];
   
  const [entries, setEntries] = useState<any[]>([]);
 
  const [date, setDate] = useState<string>("");

  const [errors, setErrors] = useState<ErrorsType>({});

  const router = useRouter();

  const [simpleForm, setSimpleForm] = useState<SimpleformType>({
  principal_id: "",
  first_name: "",
  middle_name: "",
  surname: "",
  email: "",
  });

  const handleSimpleChange: React.FC = (e) => {
    const { name, value } = e.target;
    setSimpleForm((prev) => ({ ...prev, [name]: value }));
  };

  // Initialize formData 
  const [formData, setFormData] = useState<FormdataType>({ 
    intermediary_type: "", 
    title: "",
    firstname: "",
    middlename: "",
    lastname: "",
    gender: "",
    mobileno: "",
    postal_address: "",
    idtype: "",
    idno: "",
    pin_no: "",
    dateofbirth: "",
    country: "",
    city: "",
    eimail: "",
    company_name: "",
    company_number: "",
    bank_name:'',
    account_name:'',
    bank_branch:'',
    account_number:'',

});


  const handleChange: React.FC = (e) => {
    const { name, value } = e.target;

    if (name === "selectedCountry") {
      const selectedCountryObj = Country.getAllCountries().find((c) => c.isoCode === value);
      const countryName = selectedCountryObj ? selectedCountryObj.name : "";

      setFormData((prev) => ({
        ...prev,
        selectedCountry: countryName,
        selectedCity: "",
      }));
    } 
    else if (name === "intermediary_type") {
      const isBroker = value === "Broker";

      setFormData((prev) => ({
        ...prev,
        intermediary_type: value,
        ...(isBroker && {
          title: "",
          firstname: "",
          middlename: "",
          lastname: "",
          gender: "",
          idtype: "",
          idno: "",
          dateofbirth: "",
        }),
        country:
          value === "Diaspora Agent"
            ? prev.country === "Kenya"
              ? ""
              : prev.country
            : "Kenya", // force 'Kenya' for others
      }));
    } 
    else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoaderIcon(true);

    if (localStorage.getItem("intermediarySubmitted") === "true") {
      settoastType("error");
      settoastMessage("You have already submitted the form.");
      setToasterOpen(true);
      setLoaderIcon(false);
      return;
    }

    const errorsObj = {};

    // 🟡 Skip age validation if intermediary_type is Broker
    let actualAge = null;
    if (formData.intermediary_type !== "Broker" && formData.dateofbirth) {
      const selectedDate = new Date(formData.dateofbirth);
      const today = new Date();
      const age = today.getFullYear() - selectedDate.getFullYear();
      const hasHadBirthdayThisYear =
        today.getMonth() > selectedDate.getMonth() ||
        (today.getMonth() === selectedDate.getMonth() &&
          today.getDate() >= selectedDate.getDate());
      actualAge = hasHadBirthdayThisYear ? age : age - 1;

      if (actualAge < 18) {
        errorsObj.dateofbirth = "You must be at least 18 years old.";
      }
    }

    // 🟥 KRA PIN is required for residents of Kenya
    if (formData.country === "Kenya" && !formData.pin_no.trim()) {
      errorsObj.pin_no = "KRA PIN is required for residents of Kenya.";
    }

    // 🟥 Only Kenya allowed for Brokers, Agents, Recruitment Agents
    if (
      ["Broker", "Agent", "Recruitment Agent"].includes(formData.intermediary_type) &&
      formData.country !== "Kenya"
    ) {
      errorsObj.country = "This intermediary type must be based in Kenya.";
    }

    // 🟥 Kenya not allowed for Diaspora Agent
    if (
      formData.intermediary_type === "Diaspora Agent" &&
      formData.country === "Kenya"
    ) {
      errorsObj.country = "Diaspora Agents cannot be based in Kenya.";
    }

    // If errors, stop submission
    if (Object.keys(errorsObj).length > 0) {
      setErrors(errorsObj);
      setLoaderIcon(false);
      return;
    }

    // ✅ Autofill company_name with firstname if blank
    if (!formData.company_name?.trim() && formData.firstname?.trim()) {
      formData.company_name = formData.firstname;
    }

    try {
      const res = await axios.post("/api/intermediary-form", formData, {
        headers: { "Content-Type": "application/json" },
        timeout: 10000,
      });

      setFormData({
        intermediary_type: "",
        title: "",
        firstname: "",
        middlename: "",
        lastname: "",
        gender: "",
        mobileno: "",
        postal_address: "",
        idtype: "",
        idno: "",
        pin_no: "",
        dateofbirth: "",
        country: "",
        city: "",
        eimail: "",
        company_name: "",
        company_number: "",
        bank_name: "",
        account_name: "",
        bank_branch: "",
        account_number: "",
      });

      if (res.status === 200) {
        localStorage.setItem("intermediarySubmitted", "true");
        settoastType("success");
        settoastMessage(res.data.message);
        setTimeout(() => router.push("/"), 10000);
      } else {
        settoastType("error");
        settoastMessage(`Error: ${res.data.error || "Something went wrong"}`);
      }
    } catch (error) {
      settoastType("error");
      settoastMessage(`Error: ${error.response?.data?.error || error.response?.statusText || 'Something went wrong'}`);
        console.error('Submission failed:', error);
    } finally {
      setToasterOpen(true);
      setLoaderIcon(false);
    }
  };

const handleSimpleFormSubmit = async (e) => {
  e.preventDefault();
  setLoaderIcon(true);

  // Optional: Prevent duplicate submission
  if (localStorage.getItem('subAgentSubmitted') === 'true') {
    settoastType('error');
    settoastMessage('You have already submitted the Sub Agent form.');
    setToasterOpen(true);
    setLoaderIcon(false);
    return;
  }

  try {
    const res = await axios.post(
      '/api/sub-agent-form',
      simpleForm,
      {
        headers: {
          'Content-Type': 'application/json',
        },
        timeout: 10000,
      }
    );

    setSimpleForm({
      principal_id: '',
      first_name: '',
      middle_name: '',
      surname: '',
      email: ''
    });

    if (res.status === 200) {
      localStorage.setItem('subAgentSubmitted', 'true');
      settoastType('success');
      settoastMessage(res.data.message || 'Form submitted successfully!');

      setTimeout(() => {
        router.push('/');
      }, 8000);
    } else {
      settoastType('error');
      settoastMessage(`Error: ${res.data.error || 'Something went wrong'}`);
    }
  } catch (error) {
    settoastType('error');
    settoastMessage(`Error: ${error.response?.data?.error || error.message}`);
  } finally {
    setToasterOpen(true);
    setLoaderIcon(false);
  }
};

  const showPersonalFields = formData.intermediary_type !== "Broker";

  const filteredCountries: React.FC = (() => {
    if (["Broker", "Agent", "Recruitment Agent"].includes(formData.intermediary_type)) {
      return countries.filter((c) => c === "Kenya");
    } else if (formData.intermediary_type === "Diaspora Agent") {
      return countries.filter((c) => c !== "Kenya");
    }
    return countries;
  })();

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


      {/* Container for Bottom Div */}
      <div className="relative top-[-40px] left-0 right-0 flex justify-center p-14">
        <div className="bg-white w-full max-w-[calc(100%-2rem)] p-1 flex flex-col items-center justify-start overflow-visible rounded-3xl">

          <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-8 mb-4'> 
          </div>

          <Dialog
            key={openRegistration}
            open={openRegistration}
            onClose={() => {
              setOpenRegistration(false);
              router.push('/');
            }}
            fullWidth
            maxWidth="md"
          >
            <DialogTitle>
              <div className="text-center relative">
                <div className="mb-4">
                  <img
                    src="/images/logo.jpeg"
                    alt="Logo"
                    className="mx-auto transition-all duration-300"
                    style={{ maxWidth: '240px' }}
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 tracking-wide">
                  {isSimpleForm ? 'Sub Agent Registration' : 'Registration Form'}
                </h2>
                <div className="w-16 h-1 bg-blue-600 mt-3 mx-auto rounded-full"></div>
                {alertMessage && !isSimpleForm && (
                  <div className="w-full px-4 mb-4">
                    <toast
                      severity={alertType}
                      onClose={() => settoastMessage('')}
                      variant="filled"
                      sx={{
                        borderRadius: '8px',
                        fontSize: '1rem',
                        fontWeight: 500,
                      }}
                    >
                      {alertMessage}
                    </toast>
                  </div>
                )}
                <button
                  onClick={() => setIsSimpleForm(!isSimpleForm)}
                  className="absolute left-2 top-2 text-blue-600 hover:underline text-sm"
                >
                  {isSimpleForm ? '← Back to Agent Registration' : 'Switch to Sub Agent Form'}
                </button>
              </div>
            </DialogTitle>

            <button
              onClick={() => {
                setOpenRegistration(false);
                router.push('/');
              }}
              className="absolute top-2 right-2 text-gray-600 hover:text-red-500 transition"
              aria-label="Close"
            >
              <CancelPresentationIcon className="w-13 h-13" />
            </button>

            <DialogContent>
        <>
          {isSimpleForm ? (
            <form
              onSubmit={handleSimpleFormSubmit}
              className="max-w-xl w-full mx-auto p-6 bg-white shadow-xl rounded-2xl space-y-6 border border-gray-200"
            >
              <TextField
                required
                name="principal_id"
                label="Agent ID"
                variant="outlined"
                value={simpleForm.principal_id}
                onChange={handleSimpleChange}
                fullWidth
              />
              <TextField
                required
                name="first_name"
                label="First Name"
                variant="outlined"
                value={simpleForm.first_name}
                onChange={handleSimpleChange}
                fullWidth
              />
              <TextField
                name="middle_name"
                label="Middle Name"
                variant="outlined"
                value={simpleForm.middle_name}
                onChange={handleSimpleChange}
                fullWidth
              />
              <TextField
                required
                name="surname"
                label="Surname"
                variant="outlined"
                value={simpleForm.surname}
                onChange={handleSimpleChange}
                fullWidth
              />
              <TextField
                required
                name="email"
                type="email"
                label="Email"
                variant="outlined"
                value={simpleForm.email}
                onChange={handleSimpleChange}
                fullWidth
              />
              <div className="text-center pt-4">
              <button
                type="submit"
                disabled={loaderIcon}
                className={`font-semibold py-3 px-8 rounded-full transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 border-2 border-transparent
                  ${
                    loaderIcon
                      ? 'bg-green-600 text-white cursor-not-allowed shadow-inner'
                      : 'bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white hover:shadow-xl hover:from-blue-700 hover:to-blue-900 shadow-md'
                  }`}
              >
                {loaderIcon ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit Sub Agent Form'
                )}
              </button>
              </div>
            </form>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="max-w-4xl w-full mx-auto p-4 bg-white shadow-2xl rounded-3xl border border-gray-200 space-y-10"
              style={{ boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.08)" }}
            >

          {/* Input Fields Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <TextField
                      name="intermediary_type"
                      select
                      label="Intermediary Type"
                      variant="outlined"
                      value={formData.intermediary_type}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                      }}
                      >
                      <MenuItem value="Diaspora Agent">Diaspora Agent</MenuItem>
                      <MenuItem value="Agent">Agent</MenuItem>
                      <MenuItem value="Recruitment Agent">Recruitment Agent</MenuItem>
                      <MenuItem value="Broker">Broker</MenuItem>
                    </TextField>
                    {showPersonalFields && (
                      <TextField
                      select
                      name="title"
                      label="Title"
                      variant="outlined"
                      value={formData.title}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                      }}
                    >
                      {["Mr", "Mrs", "Miss", "Ms", "Dr", "Prof"].map((title) => (
                        <MenuItem key={title} value={title}>
                          {title}
                        </MenuItem>
                      ))}
                    </TextField>
                    )}
                    {showPersonalFields && (
                    <TextField
                      required
                      name="firstname"
                      label="First Name"
                      variant="outlined"
                      value={formData.firstname}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                      }}
                    />
                    )}
                    {showPersonalFields && (
                    <TextField
                      name="middlename"
                      label="Middle Name"
                      variant="outlined"
                      value={formData.middlename}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                      }}
                    />
                    )}
                    {showPersonalFields && (       
                    <TextField
                      required
                      name="lastname"
                      label="Last Name"
                      variant="outlined"
                      value={formData.lastname}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                      }}
                    />
                    )}
                    {showPersonalFields && ( 
                    <TextField
                      name="gender"
                      select
                      label="Gender"
                      variant="outlined"
                      value={formData.gender}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                      }}
                    >
                      <MenuItem value="M">M</MenuItem>
                      <MenuItem value="F">F</MenuItem>
                      <MenuItem value="Others">Others</MenuItem>
                    </TextField>
                    )}
                    
                    <div className="w-full">
                    <label htmlFor="mobileno" className="block text-sm font-semibold text-gray-800 mb-1">
                      Phone Number
                    </label>
                    <PhoneInput
                      country={"ke"}
                      value={formData.mobileno}
                      onChange={(value, country) => handlePhoneChange(value, country, "mobileno")}
                      inputStyle={{
                        width: "100%",
                        height: "56px",
                        borderRadius: "12px",
                        backgroundColor: "#f9fafb",
                        fontSize: "1rem",
                        paddingLeft: "48px",
                      }}
                      inputProps={{ name: "mobileno", id: "mobileno" }}
                      buttonClass="!bg-gray-100 !border-r"
                      containerClass="!w-full"
                    />
                  </div>

                    <TextField
                      required
                      name="eimail"
                      label="Email"
                      variant="outlined"
                      value={formData.eimail}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                      }}
                    />

                    <TextField
                      name="postal_address"
                      label="Postal Address"
                      variant="outlined"
                      value={formData.postal_address}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                      }}
                    />
                    {showPersonalFields && (
                    <TextField
                      required
                      name="idtype"
                      select
                      label="Identification Type"
                      variant="outlined"
                      value={formData.idtype}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                      }}
                    >
                      <MenuItem value="nID">nID(National ID)</MenuItem>
                      <MenuItem value="pID">pID(Passport ID)</MenuItem>
                    </TextField>
                    )}
                    {showPersonalFields && (
                    <TextField
                      required
                      name="idno"
                      label="Identification Number"
                      variant="outlined"
                      value={formData.idno}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                      }}
                    />
                    )}
                    <TextField
                    name="pin_no"
                    label="KRA Pin Number"
                    variant="outlined"
                    value={formData.pin_no}
                    onChange={handleChange}
                    fullWidth
                    required={formData.country === "Kenya"} // dynamically required
                    error={!!errors.pin_no}
                    helperText={errors.pin_no || ""}
                    InputProps={{
                      style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                    }}
                  />

                    <div className="w-full">
                      <motion.div
                        animate={errors.dateofbirth ? { x: [0, -5, 5, -5, 5, 0] } : {}}
                        transition={{ duration: 0.3 }}
                      >
                    {showPersonalFields && (    
                        <TextField
                          required
                          label="Date of Birth"
                          name="dateofbirth"
                          type="date"
                          value={formData.dateofbirth}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              dateofbirth: e.target.value,
                            }))
                          }
                          InputLabelProps={{ shrink: true }}
                          fullWidth
                          error={!!errors.dateofbirth}
                          helperText={errors.dateofbirth || ""}
                          InputProps={{
                            style: {
                              backgroundColor: "#f9fafb",
                              borderRadius: "12px",
                            },
                          }}
                        />
                    )}
                      </motion.div>
                    </div>

                    <TextField
                      required
                      name="country"
                      select
                      label="Country of Residence"
                      variant="outlined"
                      value={formData.country}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                      }}
                    >
                      {filteredCountries.map((country) => (
                        <MenuItem key={country} value={country}>
                          {country}
                        </MenuItem>
                      ))}
                    </TextField>


                    <TextField
                      required
                      name="city"
                      label="City of Residence"
                      variant="outlined"
                      value={formData.city}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                      }}
                    />

                    <TextField
                      name="company_name"
                      label="Company Name"
                      variant="outlined"
                      value={formData.company_name}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                      }}
                      helperText="If you are not representing a company, please enter your name."
                    />
                    <div className="w-full">
                    <label htmlFor="company_number" className="block text-sm font-semibold text-gray-800 mb-1">
                      Company Phone Number
                    </label>
                    <PhoneInput
                      country={"ke"}
                      value={formData.company_number}
                      onChange={(value, country) => handlePhoneChange(value, country, "company_number")}
                      inputStyle={{
                        width: "100%",
                        height: "56px",
                        borderRadius: "12px",
                        backgroundColor: "#f9fafb",
                        fontSize: "1rem",
                        paddingLeft: "48px",
                      }}
                      inputProps={{ name: "company_number", id: "company_number" }}
                      buttonClass="!bg-gray-100 !border-r"
                      containerClass="!w-full"
                    />
                  </div>

                   <TextField
                      name="bank_name"
                      label="Bank Name"
                      variant="outlined"
                      value={formData.bank_name}     
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                      }}
                      required
                    />

                     <TextField
                      name="account_name"
                      label="Account Name"
                      variant="outlined"
                      value={formData.account_name}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                      }}
                      required
                    />

                     <TextField
                      name="bank_branch" 
                      label="Bank Branch"
                      variant="outlined"
                      value={formData.bank_branch}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                      }}
                      required
                    />

                     <TextField
                      name="account_number"
                      label="Account Number"
                      variant="outlined"
                      value={formData.account_number}
                      onChange={handleChange}
                      fullWidth
                      InputProps={{
                        style: { backgroundColor: "#f9fafb", borderRadius: "12px" },
                      }}
                      required
                    />

                   </div>

          {/* File Upload Section
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            {[
              { field: "id_document", label: "ID Type Document" },
              { field: "company_certificate", label: "Company CR12 Certificate" },
              { field: "incorporation_certificate", label: "Certificate of Incorporation" },
            ].map(({ field, label }) => (
              <div key={field} className="w-full">
                <label
                  htmlFor={field}
                  className="block text-sm font-semibold text-gray-800 mb-1"
                >
                  {label}
                </label>

                <label
                  htmlFor={field}
                  className="flex items-center justify-between px-4 py-3 bg-gray-50 border border-gray-300 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer text-sm text-gray-600 font-medium"
                >
                  <span>
                    {formData[field]?.name || "Upload Document (PDF, DOC, JPG, PNG)"}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1M12 12v8m0-8l-3 3m3-3l3 3m0-11V4m0 0L9 8m3-4l3 4"
                    />
                  </svg>
                </label>

                <input
                  type="file"
                  id={field}
                  name={field}
                  accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                  onChange={handleChange}
                  className="hidden"
                />
              </div>
            ))}
          </div> */}

          {/* Submit Button */}
          <div className="text-center pt-6">
          <button
            type="submit"
            disabled={loaderIcon}
            className={`inline-block font-semibold py-3 px-8 rounded-full transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2 shadow-[0_8px_20px_rgba(0,0,0,0.2)] border-2 border-transparent
              ${
                loaderIcon
                  ? 'bg-green-600 text-white cursor-not-allowed shadow-inner'
                  : 'bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 text-white hover:shadow-xl hover:from-green-600 hover:to-purple-700'
              }`}
          >
            {loaderIcon ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Submitting...
              </>
            ) : (
              'Submit Registration'
            )}
          </button>
          </div>
        </form>
              )}
            </>
          </DialogContent>
        </Dialog>

    <div className="relative w-[950px] h-[450px] md:h-[450px] rounded-xl overflow-hidden shadow-lg">
  {/* Background Image */}
  {/* <img
    src="/images/agents/recruiting-agents-worldwide.png"
    alt="Agent Registration Banner"
    className="absolute inset-0 w-full h-full object-cover object-center"
  /> */}

  {/* Transparent Overlay and Bottom Button */}
  <div className="absolute inset-0 flex items-end justify-center pb-8">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setOpenRegistration(prev => !prev)}
      className="relative inline-flex items-center justify-center overflow-hidden font-semibold transition-all duration-300 ease-out rounded-lg px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white shadow-xl hover:shadow-2xl group"
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 opacity-0 group-hover:opacity-100 transition duration-500 blur-sm"></span>
      <span className="relative z-10 text-lg tracking-wide">
        Register as an Intermediary
      </span>
    </motion.button>
  </div>
</div>



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

export default AgentForm;