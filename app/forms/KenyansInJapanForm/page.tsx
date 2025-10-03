import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Toaster, toast } from "@/components/ui/toaster";

import Image from 'next/image';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Mui imports
// removed MUI TextField from '@mui/material/TextField';
// removed MUI Button from '@mui/material/Button';
  
// removed MUI Toaster from '@mui/material/Toaster';
// removed MUI toast from '@mui/material/toast';

 
import {  Dialog, DialogActions, DialogContent, DialogTitle, 
        Select, MenuItem, FormControl, FormControlLabel,
        FormLabel, InputLabel, RadioGroup, Radio, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import SaveAsIcon from '@mui/icons-material/SaveAs';
 

import { Country, City } from "country-state-city";

// Importing components
import BackgroundImage from '../components/BackgroundImage';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import IconButton from '@mui/material/IconButton';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';export interface ErrorsType {
}

export interface FormdataType {
  memberidno: string;
  groupname: string;
  groupnumber: string;
  title: string;
  firstname: string;
  lastname: string;
  middlename: string;
  idtype: string;
  idno: string;
  dateofbirth: string;
  gender: string;
  country: string;
  city: string;
  address: string;
  mobileno: string;
  eimail: string;
  dependantsData: any;
  relationship: string;
  firstName: string;
  middleName: string;
  surname: string;
  idtypes: string;
  idnos: string;
  dob: string;
  gendere: string;
  countrye: string;
  cities: string;
  beneficiariesData: any;
  beneficiary_fullname: string;
  phone_number: string;
  beneficiary_address: string;
  beneficiary_email: string;
  selectedOption: string;
  medical: boolean;
  principalAge: string;
  ageGroup: string;
  medicalOption: string;
  lastExpense: boolean;
  lastExpenseOption: string;
}

export interface PaginationmodelType {
  page: number;
  pageSize: number;
}



const MemberForm: React.FC = () => {



  const [snackbarOpen, setToasterOpen] = useState<boolean>(false);
  const [alertType, settoastType] = useState<string>('success'); // 'success' or 'error'
  const [alertMessage, settoastMessage] = useState<string>('');
  const [loaderIcon, setLoaderIcon] = useState<boolean>(false);
  const [paymentPending, setPaymentPending] = useState<boolean>(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState<boolean>(false);

  // Handle Toaster close
  const handleClose: React.FC = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setToasterOpen(false);
  };
   
  const handlePhoneChange: React.FC = (value, string) => {
    setFormData((prevData) => ({
      ...prevData,
      mobileno: value, 
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

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openBeneficiaryDialog, setOpenBeneficiaryDialog] = useState<boolean>(false);

  const [currentDependant, setCurrentDependant] = useState<any | null>(null);
  const [currentBeneficiary, setCurrentBeneficiary] = useState<any | null>(null);
  const today = new Date().toISOString().split('T')[0]; 

  const [dependentCount, setDependentCount] = useState<number>(0);
  const [beneficiaryCount, setBeneficiaryCount] = useState<number>(0);

  const [errors, setErrors] = useState<ErrorsType>({});
  const [fileError, setFileError] = useState<any | null>(null);

  const [isSpouseEligible, setIsSpouseEligible] = useState<boolean>(true);
  const [isAdultRelationshipEligible, setIsAdultRelationshipEligible] = useState<boolean>(true);

  // Initialize formData with dependantsData
  const [formData, setFormData] = useState<FormdataType>({  
    memberidno: "",
    groupname: "Kenyans In Japan",
    groupnumber: "KIJA",
    title: "",
    firstname: "",
    lastname: "",
    middlename: "",
    idtype: "",
    idno: "",
    dateofbirth: "",
    gender: "",
    country: "",
    city: "",
    address: "",
    mobileno: "",
    eimail: "",
    dependantsData: [
      {
        id: "",
        relationship: "",
        title: "",
        firstName: "",
        middleName: "",
        surname: "",
        idtypes: "",
        idnos: "",
        dob: "",
        gendere: "",
        countrye: "",
        cities: "",
      },
    ],
    beneficiariesData: [
      {
        id: "",
        relationship: "",
        title: "",
        beneficiary_fullname: "",
        dob: "",
        phone_number: "",
        beneficiary_address: "",
        beneficiary_email: "",
      },
    ],
    selectedOption: "",

    // ✅ New fields for Medical / Last Expense
    medical: false,
    principalAge: "",
    ageGroup: "",
    medicalOption: "",   // 🔹 stores Standard/Senior table selection
    lastExpense: false,
    lastExpenseOption: "",
  });

    // Utility: get numeric amount from selection string
  const getAmountFromSelection: React.FC = (medicalOption, lastExpenseOption) => {
    let selected = medicalOption || lastExpenseOption;
    if (!selected) return 0;

    // Extract digits
    const match = selected.match(/GBP\s*(\d+)/i);
    return match ? parseInt(match[1], 10) : 0;
  };
  
// Generate automatic member ID based on timestamp
useEffect(() => {
    const generateMemberId: React.FC = () => {
      const now = new Date();
      const uniqueNumber = `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}${now.getMilliseconds()}`;
      const lastSixDigits = uniqueNumber.slice(-6); // Extract last 6 digits
      return `M${lastSixDigits}`;
    };

    setFormData((prev) => ({ ...prev, memberidno: generateMemberId() }));
}, []);

// Update dependants when count changes
useEffect(() => {
  setFormData((prev) => {
    const existingDependants = prev.dependantsData || [];
    const newDependants = Array.from({ length: dependentCount }, (_, index) => {
      const existingDependant = existingDependants[index];
      return existingDependant || {
        id: index + 1, 
        relationship: "",
        title: "",
        firstName: "",
        middleName: "",
        surname: "",
        idtypes: "",
        idnos: "",
        dob: "",
        gendere: "", 
        countrye: "",
        cities: "",
      };
    });

    return {
      ...prev,
      dependantsData: newDependants,
    };
  });

}, [dependentCount]);

useEffect(() => {
  console.log("*****Data****", formData);
}, [formData]);

// Handle adding new dependant
  const handleAddDependant: React.FC = () => {
    const maxDependents = formData.family_option === 'Extended Family' ? 13 : 5;

    if (dependentCount < maxDependents) {
      setDependentCount((prev) => prev + 1);
    } else {
      settoastType('error');
      settoastMessage(`You can only add up to ${maxDependents} dependants for ${formData.family_option}.`);
      setToasterOpen(true);
    }
  };

  // Update beneficiary when count changes
  useEffect(() => {
    setFormData((prev) => {
      const existingBeneficiaries = prev.beneficiariesData || [];
      const newBeneficiaries = Array.from({ length: beneficiaryCount }, (_, index) => {
        const existingBeneficiary = existingBeneficiaries[index];
        return existingBeneficiary || {
          id: index + 1,
          relationship: "",
          title: "",
          beneficiary_fullname: "",
          dob: "",
          phone_number: "",
          beneficiary_address: "",
          beneficiary_email: "",
        };
      });
      return {
        ...prev,
        beneficiariesData: newBeneficiaries,
        };
    });
  }, [beneficiaryCount]);


  const handleAddBeneficiary: React.FC = () => {
    const maxBeneficiaries = 3;

    if (beneficiaryCount < maxBeneficiaries) {
      setBeneficiaryCount((prev) => prev + 1);
    } else {
      settoastType('error');
      settoastMessage('You can only add up to 3 beneficiaries.');
      setToasterOpen(true);
    }
  };

    const handleFileChange: React.FC = (e) => {
    const files = Array.from(e.target.files);
    const maxSize = 5 * 1024 * 1024; // 5MB

    const oversizedFiles = files.filter(file => file.size > maxSize);

    if (oversizedFiles.length > 0) {
        setFileError('One or more files exceed the 5MB size limit.');
        return;
    }

    setFileError('');
    setFormData((prevData) => ({
        ...prevData,
        supportingDocuments: files,
    }));
    };

  // Handle form changes (including dependants)
  const handleChange: React.FC = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "selectedCountry") {
      const selectedCountryObj = Country.getAllCountries().find(c => c.isoCode === value);
      const countryName = selectedCountryObj ? selectedCountryObj.name : "";
      setFormData((prev) => ({
        ...prev,
        selectedCountry: countryName,
        selectedCity: "",
      }));
    } else if (type === "checkbox" && name === "selectedOption") {
      setFormData((prev) => ({
        ...prev,
        selectedOption: checked ? value : "",
      }));
    } else if (name === "family_option") {
      setFormData((prev) => {
        const previousDependants = prev.dependantsData || [];

        let updatedDependants = [...previousDependants];

        if (value === "Nuclear Family") {
          // Keep only 1 Spouse and up to 4 Children
          const spouse = updatedDependants.find(dep => dep.relationship === "Spouse");
          const children = updatedDependants.filter(dep => dep.relationship === "Child").slice(0, 4);

          updatedDependants = [
            ...(spouse ? [spouse] : []),
            ...children,
          ];
        }

        return {
          ...prev,
          [name]: value,
          option: "", 
          dependantsData: updatedDependants,
        };
      });

      setDependentCount((prev) => {
        if (value === "Nuclear Family") {
          // Count allowed nuclear dependants only
          const nuclearSpouse = formData.dependantsData.filter(dep => dep.relationship === "Spouse").slice(0, 1);
          const nuclearChildren = formData.dependantsData.filter(dep => dep.relationship === "Child").slice(0, 4);
          return nuclearSpouse.length + nuclearChildren.length;
        } else {
          // Extended Family can have up to 13
          return formData.dependantsData.length;
        }
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Helper functions
  const calculateAge: React.FC = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthday =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    return hasHadBirthday ? age : age - 1;
  };

  const isAtLeastOneMonthOld: React.FC = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    const diffInMs = today - birthDate;
    const oneMonthInMs = 30 * 24 * 60 * 60 * 1000;
    return diffInMs >= oneMonthInMs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoaderIcon(true);

    // --- Beneficiary Validation ---
    const beneficiaryList = formData.beneficiariesData || [];
    const validBeneficiaries = beneficiaryList.filter((b) => b.dob);

    for (const ben of validBeneficiaries) {
      if (!isAtLeastOneMonthOld(ben.dob)) {
        settoastType("error");
        settoastMessage(`Beneficiary "${ben.beneficiary_fullname}" must be at least 1 month old.`);
        setToasterOpen(true);
        setLoaderIcon(false);
        return;
      }
    }

    if (validBeneficiaries.length === 1) {
      const age = calculateAge(validBeneficiaries[0].dob);
      if (age < 18) {
        settoastType("error");
        settoastMessage("You must add another beneficiary who is at least 18 years old if the only one is below 18.");
        setToasterOpen(true);
        setLoaderIcon(false);
        return;
      }
    }

    if (validBeneficiaries.length > 1) {
      const hasAdult = validBeneficiaries.some((ben) => calculateAge(ben.dob) >= 18);
      if (!hasAdult) {
        settoastType("error");
        settoastMessage("At least one beneficiary must be 18 years or older.");
        setToasterOpen(true);
        setLoaderIcon(false);
        return;
      }
    }

    // --- Step 1: Calculate amount ---
    const getAmountFromMedical: React.FC = (medicalOption) => {
      if (!medicalOption) return 0;
      const matchKsh = medicalOption.match(/Kshs\s?([\d,]+)/i);
      const matchGbp = medicalOption.match(/GBP\s?([\d,]+)/i);
      if (matchKsh) return parseInt(matchKsh[1].replace(/,/g, ""), 10);
      if (matchGbp) return parseInt(matchGbp[1].replace(/,/g, ""), 10);
      return 0;
    };

    const getAmountFromLastExpense: React.FC = (lastExpenseOptions = []) => {
      return lastExpenseOptions.reduce((sum, opt) => {
        const matchKsh = opt.match(/Kshs\s?([\d,]+)/i);
        const matchGbp = opt.match(/GBP\s?([\d,]+)/i);
        if (matchKsh) return sum + parseInt(matchKsh[1].replace(/,/g, ""), 10);
        if (matchGbp) return sum + parseInt(matchGbp[1].replace(/,/g, ""), 10);
        return sum;
      }, 0);
    };

    const amount =
      getAmountFromMedical(formData.medicalOption) +
      getAmountFromLastExpense(formData.lastExpenseOptions);

    if (amount <= 0) {
      settoastType("error");
      settoastMessage("❌ Please select a Medical or Last Expense option before submitting.");
      setToasterOpen(true);
      setLoaderIcon(false);
      return;
    }

    try {
      // --- Step 2: Trigger STK Push ---
      const stkResponse = await fetch(
        "https://payments.birdviewinsurance.com/mobile-payments/stk-push",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount,
            phoneNumber: formData.mobileno,
            transactionDescription: "KIJA Group Medical and Last Expense Scheme",
            transactionReference: `KIJA${formData.idno}`,
          }),
        }
      );

      const stkResult = await stkResponse.json();
      if (!stkResponse.ok || !stkResult.success) {
        settoastType("error");
        settoastMessage("Failed to initiate payment. Please try again.");
        setToasterOpen(true);
        setLoaderIcon(false);
        return;
      }

      // --- Step 3: Poll for payment confirmation ---
      setPaymentPending(true);
      setPaymentConfirmed(false);

      const startTime = Date.now();
      const pollInterval = setInterval(async () => {
        try {
          const confirmRes = await fetch(
            `/api/payment-status?checkoutRequestID=${stkResult.checkoutRequestID}`
          );
          const confirmData = await confirmRes.json();

          // --- Success ---
          if (confirmData.status === "CONFIRMED") {
            clearInterval(pollInterval);
            setPaymentPending(false);
            setPaymentConfirmed(true);

            try {
              // --- Step 4: Build form data after payment confirmed ---
              const form = new FormData();
              for (const key in formData) {
                if (key === "dependantsData" || key === "beneficiariesData") {
                  form.append(key, JSON.stringify(formData[key]));
                } else if (key === "supportingDocuments") {
                  const docs = formData.supportingDocuments;
                  if (Array.isArray(docs)) {
                    docs.forEach((file) => form.append("supportingDocuments", file));
                  } else if (docs instanceof File) {
                    form.append("supportingDocuments", docs);
                  }
                } else {
                  form.append(key, formData[key]);
                }
              }

              // ✅ Add options + premium
              form.append("selectedMedicalOption", formData.medicalOption || "None");
              form.append("selectedLastExpenseOptions", (formData.lastExpenseOptions || []).join(", ") || "None");
              form.append("totalPremium", amount);

              // --- Step 5: Submit form to API ---
              const res = await fetch("/api/kenyans-in-south-wales-member-form", {
                method: "POST",
                body: form,
              });

              const data = await res.json();
              if (res.ok) {
                settoastType("success");
                settoastMessage(data.message);
                setToasterOpen(true);
                handleReset();
              } else {
                settoastType("error");
                settoastMessage(`Error: ${data.error}`);
                setToasterOpen(true);
              }
            } catch (submitErr) {
              settoastType("error");
              settoastMessage(`Error submitting form: ${submitErr.message}`);
              setToasterOpen(true);
            } finally {
              setLoaderIcon(false);
            }
          }

          // --- Failure or cancellation ---
          if (["CANCELLED", "FAILED", "STK_PUSH_TIMEOUT"].includes(confirmData.status)) {
            clearInterval(pollInterval);
            setPaymentPending(false);
            setPaymentConfirmed(false);
            settoastType("error");
            settoastMessage("❌ Payment was cancelled or failed. Please try again.");
            setToasterOpen(true);
            setLoaderIcon(false);
          }

          // --- Timeout safeguard (2 mins) ---
          if (Date.now() - startTime > 120000) {
            clearInterval(pollInterval);
            setPaymentPending(false);
            settoastType("error");
            settoastMessage("⏱ Payment confirmation timed out. Please try again.");
            setToasterOpen(true);
            setLoaderIcon(false);
          }
        } catch (pollErr) {
          clearInterval(pollInterval);
          setPaymentPending(false);
          settoastType("error");
          settoastMessage(`Error checking payment: ${pollErr.message}`);
          setToasterOpen(true);
          setLoaderIcon(false);
        }
      }, 5000);
    } catch (error) {
      settoastType("error");
      settoastMessage(`Error: ${error.message}`);
      setToasterOpen(true);
      setLoaderIcon(false);
    }
  };

  const columns = [
    { field: 'id', headerName: 'No', width: 100 },
    { field: 'relationship', headerName: 'Relationship', width: 200 },
    { field: 'title', headerName: 'Title', width: 200 },
    { field: 'firstName', headerName: 'First Name', width: 200 },
    { field: 'middleName', headerName: 'Middle Name', width: 200 },
    { field: 'surname', headerName: 'Surname', width: 200 },
    { field: 'idtypes', headerName: 'ID Type', width: 200 },
    { field: 'idnos', headerName: 'ID Number', width: 200 },
    { field: 'dob', headerName: 'DOB', width: 150 },
    { field: 'gendere', headerName: 'Gender', width: 150 }, 
    { field: 'countrye', headerName: 'Country of Residence', width: 150 }, 
    { field: 'cities', headerName: 'City of Residence', width: 150 }, 
    {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => (
            <SaveAsIcon variant="contained" sx={{ cursor: "pointer", color: '#157EBC' }} />
        ),
    },
];

const columnse = [
  { field: 'id', headerName: 'No', width: 100 },
  { field: 'relationship', headerName: 'Relationship', width: 200 },
  { field: 'title', headerName: 'Title', width: 200 },
  { field: 'beneficiary_fullname', headerName: 'Beneficiary Full Name', width: 200 },
  { field: 'dob', headerName: 'Date of Birth', width: 200 },
  { field: 'phone_number', headerName: 'Phone Number', width: 200 },
  { field: 'beneficiary_address', headerName: 'Beneficiary Address', width: 200 },
  { field: 'beneficiary_email', headerName: 'Beneficiary Email', width: 200 },

  {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => (
          <SaveAsIcon variant="contained" sx={{ cursor: "pointer", color: '#157EBC' }} />
      ),
  },
];

const [paginationModel, setPaginationModel] = useState<PaginationmodelType>({
  page: 0,
  pageSize: 13,
});


const handleOpenDialog: React.FC = (dependant) => {
  setCurrentDependant(dependant);
  setOpenDialog(true);
};

const handleCloseDialog: React.FC = () => {
  setOpenDialog(false);
  setCurrentDependant(null);
  setErrors({});
  
};


 
const handleSave: React.FC = () => {
  const newErrors = {};

  // ✅ Validation - Ensure Required Fields Are Filled
  if (!currentDependant?.relationship) newErrors.relationship = 'Relationship is required';
  if (!currentDependant?.title) newErrors.title = 'Title is required';
  if (!currentDependant?.firstName) newErrors.firstName = 'First Name is required';
  if (!currentDependant?.middleName) newErrors.middleName = 'Middle Name is required';
  if (!currentDependant?.surname) newErrors.surname = 'Surname is required';
  if (!currentDependant?.dob) newErrors.dob = 'Date of Birth is required';
  if (!currentDependant?.idtypes) newErrors.idtypes = 'ID Type is required'; 
  if (!currentDependant?.idnos) newErrors.idnos = 'ID Number is required';
  if (!currentDependant?.gendere) newErrors.gendere = 'Gender is required';
  if (!currentDependant?.countrye) newErrors.countrye = 'Country is required'; 
  if (!currentDependant?.cities) newErrors.cities = 'City is required';

  setErrors(newErrors);

  if (Object.keys(newErrors).length > 0) {
    return;
  }

  setFormData((prev) => {
    const isExistingDependant = prev.dependantsData.some(dep => dep.id === currentDependant?.id);
    
    return {
      ...prev,
      dependantsData: isExistingDependant 
        ? prev.dependantsData.map((dep) =>
            dep.id === currentDependant?.id ? { ...dep, ...currentDependant } : dep
          )
        : [...prev.dependantsData, currentDependant], 
    };
  });

  setErrors({});
  handleCloseDialog();
};

const handleChangeDep: React.FC = (event) => {
  const { name, value } = event.target;

  setCurrentDependant((prev) => {
    const updated = {
      ...prev,
      [name]: value ?? "",
    };

    // Validate age if DOB is changed and relationship is Spouse or Parent
    if (name === "dob" && ["Spouse", "Parent"].includes(updated.relationship)) {
      const selectedDate = new Date(value);
      const today = new Date();
      let age = today.getFullYear() - selectedDate.getFullYear();
      const hasHadBirthday =
        today.getMonth() > selectedDate.getMonth() ||
        (today.getMonth() === selectedDate.getMonth() && today.getDate() >= selectedDate.getDate());

      const actualAge = hasHadBirthday ? age : age - 1;
      const isUnder18 = actualAge < 18;
      const isOver88 = updated.relationship === "Parent" && actualAge > 88;

      let dobError = "";
      if (isUnder18) {
        dobError = `${updated.relationship} must be at least 18 years old.`;
      } else if (isOver88) {
        dobError = `Parent must not be older than 88 years.`;
      }

      setIsAdultRelationshipEligible(!isUnder18 && !isOver88);
      setErrors((prev = {}) => ({
        ...prev,
        dob: dobError,
      }));
    }

    return updated;
  });

  if (name !== "dob") {
    setErrors((prev = {}) => ({
      ...prev,
      [name]: "",
    }));
  }
};

const handleOpenBeneficiaryDialog: React.FC = (beneficiary) => {
  setCurrentBeneficiary(beneficiary);
  setOpenBeneficiaryDialog(true);
};

const handleCloseBeneficiaryDialog: React.FC = () => {
  setOpenBeneficiaryDialog(false);
  setCurrentBeneficiary(null);
  setErrors({});
  
};


 
  const handleSaveBeneficiary: React.FC = () => {
    const newErrors = {};

    if (!currentBeneficiary?.relationship) newErrors.relationship = 'Relationship is required';
    if (!currentBeneficiary?.title) newErrors.title = 'Title is required';
    if (!currentBeneficiary?.beneficiary_fullname) newErrors.beneficiary_fullname = 'Beneficiary Full Name is required';
    if (!currentBeneficiary?.dob) newErrors.dob = 'Date of Birth is required';
    if (!currentBeneficiary?.phone_number) newErrors.phone_number = 'Phone Number is required'; 
    if (!currentBeneficiary?.beneficiary_address) newErrors.beneficiary_address = 'Beneficiary Address is required';
    if (!currentBeneficiary?.beneficiary_email) newErrors.beneficiary_email = 'Beneficiary Email is required';

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setFormData((prev) => {
      const isExisting = prev.beneficiariesData.some((b) => b.id === currentBeneficiary?.id);
      const updatedList = isExisting
        ? prev.beneficiariesData.map((b) =>
            b.id === currentBeneficiary?.id ? { ...b, ...currentBeneficiary } : b
          )
        : [...prev.beneficiariesData, { ...currentBeneficiary, id: prev.beneficiariesData.length + 1 }];

      return {
        ...prev,
        beneficiariesData: updatedList,
      };
    });

    setErrors({});
    handleCloseBeneficiaryDialog();
  };

  const handleChangeBeneficiary: React.FC = (event) => {
    const { name, value } = event.target;

    setCurrentBeneficiary((prev) => {
      const updated = {
        ...prev,
        [name]: value ?? "",
      };

      // Validate DOB only for "Parent" and "Child"
      if (name === "dob" && ["Parent", "Child"].includes(updated.relationship)) {
        const selectedDate = new Date(value);
        const today = new Date();

        let ageInMonths =
          (today.getFullYear() - selectedDate.getFullYear()) * 12 +
          (today.getMonth() - selectedDate.getMonth());

        // Adjust if the day of the month hasn't occurred yet this month
        if (today.getDate() < selectedDate.getDate()) {
          ageInMonths--;
        }

        let dobError = "";

        // Validation: Parent over 88
        if (updated.relationship === "Parent" && ageInMonths > 1020) {
          // 1020 months = 88 years
          dobError = "Parent must not be older than 88 years.";
          setIsAdultRelationshipEligible(false);
        }

        // Validation: Child less than 1 month old
        if (updated.relationship === "Child" && ageInMonths < 1) {
          dobError = "Child must be at least 1 month old.";
        }

        setErrors((prev = {}) => ({
          ...prev,
          dob: dobError,
        }));
      }

      return updated;
    });

    if (name !== "dob") {
      setErrors((prev = {}) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleReset: React.FC = () => {
    const generateMemberId: React.FC = () => {
      const now = new Date();
      const uniqueNumber = `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}${now.getMilliseconds()}`;
      return `M${uniqueNumber.slice(-6)}`;
    };

    setFormData({
      memberidno: generateMemberId(),
      groupname: "Kenyans In South Wales",
      groupnumber: "KESWA",
      title: "",
      firstname: "",
      lastname: "",
      middlename: "",
      idtype: "",
      idno: "",
      dateofbirth: "",
      gender: "",
      country: "",
      city: "",
      address: "",
      mobileno: "",
      eimail: "",
      dependantsData: [],          
      beneficiariesData: [],      

      // ✅ Reset Medical & Last Expense
      medical: false,
      principalAge: "",
      ageGroup: "",
      medicalOption: "",
      lastExpense: false,
      lastExpenseOption: "",
    });

    setBeneficiaryCount(0);       
    setDependentCount(0);
    setFileError(null);
    setErrors({});
  };

const [openDependantPopup, setOpenDependantPopup] = useState<boolean>(false);

const relationshipCounts = formData.dependantsData.reduce((acc, dep) => {
  acc[dep.relationship] = (acc[dep.relationship] || 0) + 1;
  return acc;
}, {});

const isNuclear = formData.family_option === "Nuclear Family";
const isExtended = formData.family_option === "Extended Family";
const isIndividual = formData.family_option === "Individual";

const isSpouseLimitReached = relationshipCounts["Spouse"] >= 1;
const isChildLimitReached = relationshipCounts["Child"] >= 4;
const isSiblingLimitReached = relationshipCounts["Sibling"] >= 4;
const isParentLimitReached = relationshipCounts["Parent"] >= 4;

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
 

      {/* Container for Bottom Div */}
      <div className="relative left-0 right-0 flex justify-center">
        <div className="bg-white w-full max-w-[calc(100%-2rem)] p-1 flex flex-col items-center justify-start overflow-visible rounded-3xl">

          <div className='bg-white grid grid-cols-1 md:grid-cols-2 gap-8 mb-4'> 
          </div>
                                      
          {/* Form Section */}

                 
                     
                        <form 
                          style={{ boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)" }} 
                          className="w-full  bg-white rounded-lg shadow-xl"
                          onSubmit={handleSubmit}
                        >
                          <br/>
                          <div className="text-gray-800 font-bold mb-2 flex flex-col sm:flex-row items-center sm:justify-between text-center relative">
                          {/* Logo (Centered) */}
                          <div className="flex-shrink-0">
                            <Image
                              width={180}
                              height={50}
                              src="/images/logo.jpeg"
                              alt="Logo"
                              style={{
                                width: "19%",
                                height: "auto",
                                maxWidth: "360px",
                                minWidth: "220px",
                                transition: "width 0.3s ease-in-out",
                              }}
                            />
                          </div>

                          {/* Centered Text (Moves below on small screens) */}
                          <div className="mt-2 sm:mt-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
                            <p>Kenyans In Japan Member Detail Forms</p>
                          </div>
                        </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
                            <TextField
                            required
                            name="memberidno"
                            label="Member Reference Number"
                            variant="outlined"
                            value={formData.memberidno}
                            disabled
                            fullWidth
                            className="bg-gray-100 mb-6"
                          />
                            <TextField 
                            required
                            name="groupname"
                            label="Group Name"
                            variant="outlined"
                            value="Kenyans In Japan"   
                            InputProps={{
                              readOnly: true, 
                            }}
                            fullWidth
                            className="bg-gray-100 mb-6"
                          />


                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
                              <TextField 
                              required
                              name="groupnumber"
                              label="Group Number"
                              variant="outlined"
                              value="KIJA"
                              InputProps={{
                                readOnly: true, 
                              }}
                              fullWidth
                              className="bg-gray-100 mb-6"
                            />
                              </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-6">
                          <TextField
                              select
                              required
                              name="title"
                              label="Title"
                              variant="outlined"
                              value={formData.title}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            >
                              {["Mr", "Master", "Mrs", "Miss", "Ms", "Dr", "Prof"].map((title) => (
                                <MenuItem key={title} value={title}>
                                  {title}
                                </MenuItem>
                              ))}
                            </TextField>
                            <TextField
                              required
                              name="firstname"
                              label="First Name"
                              variant="outlined"
                              value={formData.firstname}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 rounded-lg"
                            />
                              
                            <TextField 
                              required
                              name="lastname"
                              label="Last Name"
                              variant="outlined"
                              value={formData.lastname}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100"
                            />
                            <TextField 
                              required
                              name="middlename"
                              label="Middle Name"
                              variant="outlined"
                              value={formData.middlename}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 mb-6"
                            />
                             <TextField
                            required
                            name="idtype"
                            select
                            label="Identification Type"
                            variant="outlined"
                            value={formData.idtype}
                            onChange={handleChange}
                            fullWidth
                            className="bg-gray-100 mb-6"
                            >
                            <MenuItem value="National ID">National ID</MenuItem>
                            <MenuItem value="Passport">Passport</MenuItem>
                            <MenuItem value="Birth Certificate">Birth Certificate</MenuItem>
                            </TextField>
                            <TextField 
                            required
                            name="idno"
                            label="Identification Number"
                            variant="outlined"
                            value={formData.idno}
                            onChange={handleChange}
                            fullWidth
                            className="bg-gray-100 mb-6"

                            />
                          <TextField
                            label="Date of Birth"
                            name="dateofbirth"
                            type="date"
                            onChange={(e) => {
                              const selectedDate = new Date(e.target.value);
                              const today = new Date();
                              const age = today.getFullYear() - selectedDate.getFullYear();
                              const hasHadBirthdayThisYear =
                                today.getMonth() > selectedDate.getMonth() ||
                                (today.getMonth() === selectedDate.getMonth() &&
                                  today.getDate() >= selectedDate.getDate());

                              const actualAge = hasHadBirthdayThisYear ? age : age - 1;

                              if (actualAge < 18) {
                                alert("You must be at least 18 years old.");
                                return;
                              }

                              setFormData((prev) => ({
                                ...prev,
                                dateofbirth: e.target.value,
                              }));
                            }}
                            InputLabelProps={{ shrink: true }}
                            className="bg-gray-100 mb-6"
                            fullWidth
                          />
                            <TextField
                            required
                            name="gender"
                            select
                            label="Gender"
                            variant="outlined"
                            value={formData.gender}
                            onChange={handleChange}
                            fullWidth
                            className="bg-gray-100 mb-6"
                            >
                            <MenuItem value="Male">Male</MenuItem>
                            <MenuItem value="Female">Female</MenuItem>
                            <MenuItem value="Others">Others</MenuItem>
                            </TextField>
                            <TextField
                            required
                            name="country"
                            select
                            label="Country Of Residence Of Main Member"
                            variant="outlined"
                            value={formData.country}
                            onChange={handleChange}
                            fullWidth
                            className="bg-gray-100 mb-6"
                          >
                            {countries.map((country) => (
                              <MenuItem key={country} value={country}>
                                {country}
                              </MenuItem>
                            ))}
                          </TextField>
                            <TextField 
                            required
                            name="city"
                            label="City Of Residence Of Main Member"
                            variant="outlined"
                            value={formData.city}
                            onChange={handleChange}
                            fullWidth
                            />
                            <TextField 
                              required
                              name="address"
                              label="Physical / Postal Address"
                              variant="outlined"
                              value={formData.address}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 mb-6"
                            />
                            <div className="mb-6">
                              <PhoneInput
                                required
                                country={"ke"} 
                                value={formData.mobileno}
                                onChange={handlePhoneChange}
                                inputStyle={{
                                width: "100%",
                                height: "55px",
                                borderRadius: "4px",
                              }}
                                buttonClass="!bg-gray-200 !border-r"
                                containerClass="!w-full"
                                className="bg-gray-100"
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
                              className="bg-gray-100 mb-6"
                            /> 
                            <div>
                            
                          </div>
                          
                            
                          </div>

                          {/* Medical & Last Expense Section — Ultra HD Corporate */}
                          <Paper
                            elevation={6}
                            sx={{
                              borderRadius: 3,
                              overflow: "hidden",
                              p: { xs: 3, md: 4 },
                              boxShadow: "0 12px 40px rgba(16,24,40,0.12)",
                              background:
                                "linear-gradient(180deg, rgba(255,255,255,0.9), rgba(248,250,252,0.95))",
                            }}
                            className="mb-6"
                          >
                            {/* Header */}
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                mb: 3,
                                gap: 2,
                              }}
                            >
                              <Box>
                                <Typography variant="h6" sx={{ fontWeight: 800, letterSpacing: "-0.02em" }}>
                                  Cover Options
                                </Typography>
                                <Typography variant="body2" sx={{ color: "text.secondary", mt: 0.5 }}>
                                  Select optional covers and plans — modern, corporate rates shown below.
                                </Typography>
                              </Box>

                              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                                <CheckCircleOutlineIcon fontSize="large" sx={{ color: "#157EBC" }} />
                                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                  Secure • Corporate • Clear pricing
                                </Typography>
                              </Box>
                            </Box>

                            <Divider sx={{ mb: 3 }} />

                            {/* Controls row */}
                            <Stack direction={{ xs: "column", sm: "row" }} spacing={3} alignItems="flex-start" sx={{ mb: 2 }}>
                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={formData.medical || false}
                                      onChange={(e) =>
                                        setFormData((prev) => ({ ...prev, medical: e.target.checked }))
                                      }
                                      sx={{ "&.Mui-checked": { color: "#0f6fbf" } }}
                                    />
                                  }
                                  label={<Typography sx={{ fontWeight: 700 }}>Medical</Typography>}
                                />

                                {/* Age input (styled) */}
                                {formData.medical && (
                                  <Box sx={{ mt: 2, maxWidth: 320 }}>
                                    <TextField
                                      name="principalAge"
                                      label="Principal's Age"
                                      type="number"
                                      inputProps={{ min: 0 }}
                                      value={formData.principalAge || ""}
                                      onChange={(e) =>
                                        setFormData((prev) => ({
                                          ...prev,
                                          principalAge: e.target.value,
                                        }))
                                      }
                                      fullWidth
                                      size="small"
                                      sx={{
                                        background: "#fff",
                                        borderRadius: 1,
                                        boxShadow: "inset 0 1px 2px rgba(16,24,40,0.04)",
                                      }}
                                    />

                                    {/* Age-group toggles */}
                                    {formData.principalAge !== "" && (
                                      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                                        <FormControlLabel
                                          control={
                                            <Switch
                                              checked={formData.ageGroup === "<70"}
                                              onChange={() =>
                                                setFormData((prev) => ({
                                                  ...prev,
                                                  ageGroup: "<70",
                                                  medicalOption: "",
                                                }))
                                              }
                                              color="primary"
                                            />
                                          }
                                          label="< 70 years"
                                        />
                                        <FormControlLabel
                                          control={
                                            <Switch
                                              checked={formData.ageGroup === ">70"}
                                              onChange={() =>
                                                setFormData((prev) => ({
                                                  ...prev,
                                                  ageGroup: ">70",
                                                  medicalOption: "",
                                                }))
                                              }
                                              color="primary"
                                            />
                                          }
                                          label="> 70 years"
                                        />
                                      </Box>
                                    )}
                                  </Box>
                                )}
                              </FormGroup>

                              <Box sx={{ flex: 1 }} />

                              <FormGroup>
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      checked={formData.lastExpense || false}
                                      onChange={(e) =>
                                        setFormData((prev) => ({
                                          ...prev,
                                          lastExpense: e.target.checked,
                                          lastExpenseOptions: [], // reset selections when toggled off
                                        }))
                                      }
                                      sx={{ "&.Mui-checked": { color: "#0f6fbf" } }}
                                    />
                                  }
                                  label={<Typography sx={{ fontWeight: 700 }}>Last Expense</Typography>}
                                />
                              </FormGroup>
                            </Stack>

                            {/* Medical Rate Tables */}
                            {formData.medical && formData.ageGroup && (
                              <Box sx={{ mt: 2 }}>
                                <Typography sx={{ fontWeight: 800, fontSize: 14, mb: 1 }}>
                                  {formData.ageGroup === "<70" ? "Standard Rates" : "Seniors Rates"}
                                </Typography>

                                <TableContainer sx={{ borderRadius: 2, overflow: "hidden", mb: 2 }}>
                                  <Table size="small" sx={{ minWidth: 400 }}>
                                    <TableHead>
                                      <TableRow sx={{ background: "#f7fbff" }}>
                                        <TableCell sx={{ fontWeight: 700 }}>Plan</TableCell>
                                        <TableCell sx={{ fontWeight: 700 }}>Premium</TableCell>
                                        <TableCell sx={{ fontWeight: 700, textAlign: "center" }}>
                                          Select
                                        </TableCell>
                                      </TableRow>
                                    </TableHead>
                                    <TableBody>
                                      {(formData.ageGroup === "<70"
                                        ? [
                                            { plan: "M", premium: "Kshs 1" },
                                            { plan: "M+1", premium: "Kshs 42,000" },
                                            { plan: "M+2", premium: "Kshs 50,400" },
                                            { plan: "M+3", premium: "Kshs 58,800" },
                                            { plan: "M+4", premium: "Kshs 67,200" },
                                            { plan: "M+5", premium: "Kshs 75,600" },
                                          ]
                                        : [
                                            { plan: "70-75 Years", premium: "GBP 120" },
                                            { plan: "76-80 Years", premium: "GBP 200" },
                                          ]
                                      ).map((row) => (
                                        <TableRow key={row.plan} hover>
                                          <TableCell sx={{ fontWeight: 600 }}>{row.plan}</TableCell>
                                          <TableCell sx={{ color: "text.secondary" }}>{row.premium}</TableCell>
                                          <TableCell align="center">
                                            <Radio
                                              checked={formData.medicalOption === `${row.plan} - ${row.premium}`}
                                              onChange={() =>
                                                setFormData((prev) => ({
                                                  ...prev,
                                                  medicalOption: `${row.plan} - ${row.premium}`,
                                                }))
                                              }
                                              value={`${row.plan} - ${row.premium}`}
                                              name="medicalOption"
                                              sx={{ color: "#0f6fbf", "&.Mui-checked": { color: "#0f6fbf" } }}
                                            />
                                          </TableCell>
                                        </TableRow>
                                      ))}
                                    </TableBody>
                                  </Table>
                                </TableContainer>

                                {/* Notice for Standard (<70) */}
                                {formData.ageGroup === "<70" && (
                                  <Box
                                    sx={{
                                      background: "#fff8e1",
                                      borderLeft: "4px solid #fbc02d",
                                      p: 2,
                                      borderRadius: 1,
                                      mb: 2,
                                    }}
                                  >
                                    <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                                      Note:
                                    </Typography>
                                    <ul
                                      style={{
                                        margin: 0,
                                        paddingLeft: "1.2rem",
                                        color: "#5f5f5f",
                                        fontSize: "0.85rem",
                                      }}
                                    >
                                      <li>M means principal</li>
                                      <li>M+1 means principal and one dependent</li>
                                      <li>Dependents can only be a spouse and/or children.</li>
                                    </ul>
                                  </Box>
                                )}

                                <Typography variant="caption" sx={{ color: "text.secondary" }}>
                                  Selected plan: <strong>{formData.medicalOption || "none"}</strong>
                                </Typography>
                              </Box>
                            )}

                            {/* Last Expense options */}
                            {formData.lastExpense && (
                              <Box sx={{ mt: 4 }}>
                                <Typography sx={{ fontWeight: 800, mb: 1 }}>Last Expense Options</Typography>

                                <Stack spacing={2}>
                                  {[
                                    {
                                      id: "A",
                                      label: "Option A — 70-75 Years",
                                      breakdown: [
                                        { role: "Principal", amount: "Kshs 1" },
                                        { role: "Spouse", amount: "Kshs 46,104" },
                                        { role: "Child (up to 25 years)", amount: "Kshs 6,429" },
                                      ],
                                    },
                                    {
                                      id: "B",
                                      label: "Option B — 76-80 Years",
                                      breakdown: [
                                        { role: "Principal", amount: "Kshs 76,695" },
                                        { role: "Spouse", amount: "Kshs 55,226" },
                                        { role: "Child (up to 25 years)", amount: "Kshs 6,429" },
                                      ],
                                    },
                                  ].map((opt) => {
                                    const hasSelected: React.FC = (formData.lastExpenseOptions || []).some((item) =>
                                      item.startsWith(opt.label)
                                    );

                                    const otherOptionSelected: React.FC = (formData.lastExpenseOptions || []).length > 0 && !hasSelected;

                                    return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <Card className="w-full max-w-2xl shadow-xl border border-gray-200 rounded-2xl bg-white">
        <CardContent>
                                      <Paper
                                        key={opt.id}
                                        elevation={2}
                                        sx={{
                                          p: 2,
                                          borderRadius: 2,
                                          background: "linear-gradient(180deg, #ffffff, #fbfdff)",
                                          opacity: otherOptionSelected ? 0.5 : 1,
                                        }}
                                      >
                                        <Typography sx={{ fontWeight: 700, mb: 1 }}>{opt.label}</Typography>

                                        <TableContainer>
                                          <Table size="small">
                                            <TableHead>
                                              <TableRow sx={{ background: "#f7fbff" }}>
                                                <TableCell sx={{ fontWeight: 700 }}>Category</TableCell>
                                                <TableCell sx={{ fontWeight: 700 }}>Premium</TableCell>
                                                <TableCell sx={{ fontWeight: 700, textAlign: "center" }}>
                                                  Select
                                                </TableCell>
                                              </TableRow>
                                            </TableHead>
                                            <TableBody>
                                              {opt.breakdown.map((row) => {
                                                const optionValue = `${opt.label} - ${row.role} - ${row.amount}`;
                                                const isChecked: React.FC = (formData.lastExpenseOptions || []).includes(optionValue);

                                                return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <Card className="w-full max-w-2xl shadow-xl border border-gray-200 rounded-2xl bg-white">
        <CardContent>
                                                  <TableRow key={row.role} hover>
                                                    <TableCell>{row.role}</TableCell>
                                                    <TableCell>{row.amount}</TableCell>
                                                    <TableCell align="center">
                                                      <Checkbox
                                                        checked={isChecked}
                                                        disabled={otherOptionSelected}
                                                        onChange={(e) => {
                                                          setFormData((prev) => {
                                                            const selected = new Set(prev.lastExpenseOptions || []);
                                                            if (e.target.checked) {
                                                              selected.add(optionValue);
                                                            } else {
                                                              selected.delete(optionValue);
                                                            }
                                                            return {
                                                              ...prev,
                                                              lastExpenseOptions: Array.from(selected),
                                                            };
                                                          });
                                                        }}
                                                        value={optionValue}
                                                        sx={{
                                                          color: "#0f6fbf",
                                                          "&.Mui-checked": { color: "#0f6fbf" },
                                                        }}
                                                      />
                                                    </TableCell>
                                                  </TableRow>
                                                );
                                              })}
                                            </TableBody>
                                          </Table>
                                        </TableContainer>
                                      </Paper>
                                    );
                                  })}
                                </Stack>

                                {/* Selected & Total */}
                                <Box sx={{ mt: 2 }}>
                                  <Typography variant="caption" sx={{ color: "text.secondary", display: "block" }}>
                                    Selected:{" "}
                                    <strong>
                                      {(formData.lastExpenseOptions || []).length > 0
                                        ? formData.lastExpenseOptions.join(", ")
                                        : "none"}
                                    </strong>
                                  </Typography>

                                  {(formData.lastExpenseOptions || []).length > 0 && (
                                    <Typography
                                      variant="body2"
                                      sx={{ color: "#157EBC", fontWeight: 700, mt: 1 }}
                                    >
                                      Total Premium: Kshs{" "}
                                      {formData.lastExpenseOptions
                                        .reduce((sum, opt) => {
                                          const match = opt.match(/Kshs\s?([\d,]+)/i);
                                          if (match) {
                                            const num = parseInt(match[1].replace(/,/g, ""), 10);
                                            return sum + num;
                                          }
                                          return sum;
                                        }, 0)
                                        .toLocaleString()}
                                    </Typography>
                                  )}
                                </Box>
                              </Box>
                            )}
                          </Paper>
                          <div className="flex justify-left items-center py-4 m-4">
                            <p className="text-xl font-semibold text-gray-700">Dependant Details</p>
                          </div>

                          <div className="shadow-xl p-4">
                          <Button
                            onClick={handleAddDependant}
                            variant="contained"
                            color="primary"
                            disabled={formData.family_option === "Individual"}
                          >
                            Add Dependant
                          </Button>

                            {formData.family_option === "Individual" && (
                              <Typography
                                variant="body1"
                                className="mt-4 text-red-600 font-bold text-lg"
                                sx={{
                                  fontSize: '1.2rem',
                                  fontWeight: 700,
                                  color: '#D32F2F', // Deep red
                                }}
                              >
                                🚫 Dependants are only allowed for Nuclear or Extended Family options.
                              </Typography>
                            )}
                            <DataGrid
                              rows={formData.dependantsData}
                              columns={columns}
                              pagination
                              paginationMode="client"
                              pageSizeOptions={[5, 10, 15]}
                              pageSize={paginationModel.pageSize}
                              paginationModel={paginationModel}
                              onPaginationModelChange={(newModel) => setPaginationModel(newModel)}
                              onRowClick={(params) => handleOpenDialog(params.row)}
                              components={{ Toolbar: GridToolbar }}
                              autoHeight
                              rowHeight={40}
                              sx={{
                                width: '100%',
                                overflowX: 'auto',
                                '& .MuiDataGrid-cell:focus, & .MuiDataGrid-columnHeader:focus': {
                                  outline: 'none',
                                },
                                '& .MuiDataGrid-cell:hover': {
                                  cursor: 'pointer',
                                },
                                '& .MuiDataGrid-columnHeader:hover': {
                                  cursor: 'pointer',
                                },
                                '@media (max-width: 600px)': {
                                  '& .MuiDataGrid-columnHeader': {
                                    fontSize: '0.8rem',
                                  },
                                  '& .MuiDataGrid-cell': {
                                    fontSize: '0.8rem',
                                  },
                                },
                              }}
                            />
                            <Dialog open={openDialog} onClose={handleCloseDialog}>
                                <DialogTitle>Edit Dependant   </DialogTitle>
                                <DialogContent>
                                <FormControl fullWidth margin="dense">
                                  <InputLabel id="relationship-label">Relationship</InputLabel>
                                  <Select
                                    name="relationship"
                                    value={currentDependant?.relationship || ""}
                                    onChange={handleChangeDep}
                                    label="Relationship"
                                  >
                                    <MenuItem
                                      value="Spouse"
                                      disabled={isSpouseLimitReached || !isAdultRelationshipEligible}
                                    >
                                      Spouse (spouse to the group member)
                                    </MenuItem>

                                    <MenuItem
                                      value="Parent"
                                      disabled={
                                        (isNuclear || isParentLimitReached) || !isAdultRelationshipEligible
                                      }
                                    >
                                      Parent (parents / parents in-law to the group member)
                                    </MenuItem>

                                    <MenuItem
                                      value="Child"
                                      disabled={isChildLimitReached}
                                    >
                                      Child (child to the group member)
                                    </MenuItem>

                                    <MenuItem
                                      value="Sibling"
                                      disabled={isNuclear || isSiblingLimitReached}
                                    >
                                      Sibling (brother/sister or in-laws)
                                    </MenuItem>

                                  </Select>

                                  {errors.relationship && (
                                    <div style={{ color: 'red' }}>{errors.relationship}</div>
                                  )}
                                </FormControl>
                                    <TextField
                                              select
                                              name="title"
                                              label="Title"
                                              value={currentDependant?.title || ''}
                                              onChange={handleChangeDep}
                                            margin="dense"
                                            >
                                              {["Mr", "Master", "Mrs", "Miss", "Ms", "Dr", "Prof"].map((title) => (
                                                <MenuItem key={title} value={title}>
                                                  {title}
                                                </MenuItem>
                                              ))}
                                               error={!!errors.title}
                                               helperText={errors.title}
                                            </TextField>
                                    <TextField
                                        label="First Name"
                                        name="firstName"
                                        value={currentDependant?.firstName || ''}
                                        onChange={handleChangeDep}
                                        fullWidth
                                        margin="dense"
                                        error={!!errors.firstName}
                                        helperText={errors.firstName}
                                    
                                    />
                                    <TextField
                                        label="Middle Name"
                                        name="middleName"
                                        value={currentDependant?.middleName || ''}
                                        onChange={handleChangeDep}
                                        fullWidth
                                        margin="dense"
                                        error={!!errors.middleName}
                                        helperText={errors.middleName}
                                    />
                                    <TextField
                                        label="Surname"
                                        name="surname"
                                        value={currentDependant?.surname || ''}
                                        onChange={handleChangeDep}
                                        fullWidth
                                        margin="dense"
                                        error={!!errors.surname}
                                        helperText={errors.surname}
                                      
                                    />
                                    <FormControl fullWidth margin="dense"  >
                                          <InputLabel id="idtype-label">ID Type</InputLabel>
                                          <Select
                                              name="idtypes"
                                              value={currentDependant?.idtypes || ''}
                                              onChange={handleChangeDep}
                                              label="ID Type"
                                          >
                                              <MenuItem value="National ID">National ID</MenuItem>
                                              <MenuItem value="Passport">Passport</MenuItem>
                                              <MenuItem value="Birth Certificate">Birth Certificate</MenuItem>
                                          </Select>
                                          {errors.idtypes && <div style={{ color: 'red' }}>{errors.idtypes}</div>}
                                      </FormControl>
                                      <TextField
                                          label="ID Number"
                                          name="idnos"
                                          value={currentDependant?.idnos || ''}
                                          onChange={handleChangeDep}
                                          fullwidth
                                          margin ="dense"
                                          error={!!errors.surname}
                                          helperText={errors.surname}
                                              />
                                              <TextField
                                                  label="DOB"
                                                  name="dob"
                                                  type="date"
                                                  value={currentDependant?.dob || ''}
                                                  onChange={handleChangeDep}
                                                  fullWidth
                                                  margin="dense"
                                                  InputLabelProps={{
                                                      shrink: true,
                                                  }}
                                                  InputProps={{
                                                      inputProps: { max: today }, 
                                                  }}
                                                  error={!!errors.dob}
                                                  helperText={errors.dob}
                                              />

                                              <FormControl fullWidth margin="dense"  >
                                                  <InputLabel id="gender-label">Gender</InputLabel>
                                                  <Select
                                                      name="gendere"
                                                      value={currentDependant?.gendere || ''}
                                                      onChange={handleChangeDep}
                                                      label="Gender"
                                                  >
                                                      <MenuItem value="Male">Male</MenuItem>
                                                      <MenuItem value="Female">Female</MenuItem>
                                                  </Select>
                                                  {errors.gendere && <div style={{ color: 'red' }}>{errors.gendere}</div>}
                                              </FormControl>
                                              <TextField
                                                      required
                                                      name="countrye"
                                                      select
                                                      label="Country"
                                                      variant="outlined"
                                                      value={currentDependant?.countrye || ''}
                                                      onChange={handleChangeDep}
                                                      fullWidth
                                                      className="bg-gray-100 mb-6"
                                                    >
                                                      {countries.map((country) => (
                                                        <MenuItem key={country} value={country}>
                                                          {country}
                                                        </MenuItem>
                                                      ))}
                                                       error={!!errors.countrye}
                                                       helperText={errors.countrye}
                                                    </TextField>
                                                      <TextField 
                                                      required
                                                      name="cities"
                                                      label="City Of residence"
                                                      variant="outlined"
                                                      value={currentDependant?.cities}
                                                      onChange={handleChangeDep}
                                                      fullWidth
                                                      className="bg-gray-100 mb-6"
                                                      error={!!errors.cities}
                                                      helperText={errors.cities}
                                                      />
                                            
                                          </DialogContent>
                                          <DialogActions>
                                              <Button onClick={handleCloseDialog} color="primary">Cancel</Button>
                                              <Button onClick={handleSave}  color="primary">Save</Button>
                                          </DialogActions>
                                      </Dialog>
                                    </div> 

                              <div className="flex flex-col justify-left items-start py-4 m-4">
                                <p className="text-xl font-semibold text-gray-700">Beneficiary / Next of Kin Details</p>
                                <p className="text-red-600 font-bold text-xl mt-1">
                                  Add Beneficiary / Next of Kin Details in order of priority
                                </p>
                              </div>

                          <div className="shadow-xl p-4">
                          <Button
                            onClick={handleAddBeneficiary}
                            variant="contained"
                            color="primary"
                            disabled={formData.family_option === "Individual"}
                          >
                            Add Beneficiary
                          </Button>

                            {formData.family_option === "Individual" && (
                              <Typography
                                variant="body1"
                                className="mt-4 text-red-600 font-bold text-lg"
                                sx={{
                                  fontSize: '1.2rem',
                                  fontWeight: 700,
                                  color: '#D32F2F', // Deep red
                                }}
                              >
                                🚫 Beneficiaries are only allowed for Nuclear or Extended Family options.
                              </Typography>
                            )}
                            <DataGrid
                              rows={formData.beneficiariesData}
                              columns={columnse}
                              pagination
                              paginationMode="client"
                              pageSizeOptions={[5, 10, 15]}
                              pageSize={paginationModel.pageSize}
                              paginationModel={paginationModel}
                              onPaginationModelChange={(newModel) => setPaginationModel(newModel)}
                              onRowClick={(params) => handleOpenBeneficiaryDialog(params.row)}
                              components={{ Toolbar: GridToolbar }}
                              autoHeight
                              rowHeight={40}
                              sx={{
                                width: '100%',
                                overflowX: 'auto',
                                '& .MuiDataGrid-cell:focus, & .MuiDataGrid-columnHeader:focus': {
                                  outline: 'none',
                                },
                                '& .MuiDataGrid-cell:hover': {
                                  cursor: 'pointer',
                                },
                                '& .MuiDataGrid-columnHeader:hover': {
                                  cursor: 'pointer',
                                },
                                '@media (max-width: 600px)': {
                                  '& .MuiDataGrid-columnHeader': {
                                    fontSize: '0.8rem',
                                  },
                                  '& .MuiDataGrid-cell': {
                                    fontSize: '0.8rem',
                                  },
                                },
                              }}
                            />
                            <Dialog open={openBeneficiaryDialog} onClose={handleCloseBeneficiaryDialog}>
                                <DialogTitle>Edit Beneficiaries   </DialogTitle>
                                <DialogContent>
                                <FormControl fullWidth margin="dense">
                                  <InputLabel id="relationship-label">Relationship</InputLabel>
                                    <Select
                                      name="relationship"
                                      value={currentBeneficiary?.relationship || ""}
                                      onChange={handleChangeBeneficiary}
                                      label="Relationship"
                                    >
                                      <MenuItem value="Spouse">
                                        Spouse (spouse to the group member)
                                      </MenuItem>

                                      <MenuItem value="Parent">
                                        Parent (parents / parents in-law to the group member)
                                      </MenuItem>

                                      <MenuItem value="Child">
                                        Child (child to the group member)
                                      </MenuItem>

                                      <MenuItem value="Sibling">
                                        Sibling (brother/sister or in-laws)
                                      </MenuItem>

                                      <MenuItem value="Other">
                                        Other
                                      </MenuItem>
                                    </Select>

                                  {errors.relationship && (
                                    <div style={{ color: 'red' }}>{errors.relationship}</div>
                                  )}
                                </FormControl>
                                    <TextField
                                              select
                                              name="title"
                                              label="Title"
                                              value={currentBeneficiary?.title || ''}
                                              onChange={handleChangeBeneficiary}
                                            margin="dense"
                                            >
                                              {["Mr", "Master", "Mrs", "Miss", "Ms", "Dr", "Prof"].map((title) => (
                                                <MenuItem key={title} value={title}>
                                                  {title}
                                                </MenuItem>
                                              ))}
                                               error={!!errors.title}
                                               helperText={errors.title}
                                            </TextField>
                                    <TextField
                                        label="Beneficiary Full Name"
                                        name="beneficiary_fullname"
                                        value={currentBeneficiary?.beneficiary_fullname || ''}
                                        onChange={handleChangeBeneficiary}
                                        fullWidth
                                        margin="dense"
                                        error={!!errors.beneficiary_fullname}
                                        helperText={errors.beneficiary_fullname}
                                    
                                    />
                                              <TextField
                                                  label="DOB"
                                                  name="dob"
                                                  type="date"
                                                  value={currentBeneficiary?.dob || ''}
                                                  onChange={handleChangeBeneficiary}
                                                  fullWidth
                                                  margin="dense"
                                                  InputLabelProps={{
                                                      shrink: true,
                                                  }}
                                                  InputProps={{
                                                      inputProps: { max: today }, 
                                                  }}
                                                  error={!!errors.dob}
                                                  helperText={errors.dob}
                                              />
                                                      <TextField 
                                                      required
                                                      name="phone_number"
                                                      label="Phone Number"
                                                      variant="outlined"
                                                      value={currentBeneficiary?.phone_number}
                                                      onChange={handleChangeBeneficiary}
                                                      fullWidth
                                                      className="bg-gray-100 mb-6"
                                                      error={!!errors.phone_number}
                                                      helperText={errors.phone_number}
                                                      />
                                                      <TextField 
                                                      required
                                                      name="beneficiary_address"
                                                      label="Beneficiary Address"
                                                      variant="outlined"
                                                      value={currentBeneficiary?.beneficiary_address}
                                                      onChange={handleChangeBeneficiary}
                                                      fullWidth
                                                      className="bg-gray-100 mb-6"
                                                      error={!!errors.beneficiary_address}
                                                      helperText={errors.beneficiary_address}
                                                      />
                                                                                                    <TextField 
                                                      required
                                                      name="beneficiary_email"
                                                      label="Beneficiary Email"
                                                      variant="outlined"
                                                      value={currentBeneficiary?.beneficiary_email}
                                                      onChange={handleChangeBeneficiary}
                                                      fullWidth
                                                      className="bg-gray-100 mb-6"
                                                      error={!!errors.beneficiary_email}
                                                      helperText={errors.beneficiary_email}
                                                      />  

      
                                            
                                          </DialogContent>
                                          <DialogActions>
                                              <Button onClick={handleCloseBeneficiaryDialog} color="primary">Cancel</Button>
                                              <Button onClick={handleSaveBeneficiary}  color="primary">Save</Button>
                                          </DialogActions>
                                      </Dialog>
                                    </div>

                                      <div className="flex justify-center mt-8 space-x-6">

                                      {/* Feedback messages */}
                                      {paymentPending && (
                                        <p className="text-blue-600 font-medium mt-4">
                                          Waiting for payment confirmation… Please check your phone 📱
                                        </p>
                                      )}

                                      {paymentConfirmed && (
                                        <p className="text-green-600 font-semibold mt-4">
                                          Payment confirmed ✅ Submitting form…
                                        </p>
                                      )}
                                      
                                      <button 
                                        type="submit" 
                                        className="relative px-8 py-4 rounded-xl text-white font-extrabold text-lg 
                                                  bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg 
                                                  hover:from-blue-600 hover:to-blue-800 hover:shadow-blue-500/50 
                                                  focus:ring-4 focus:ring-blue-400 
                                                  transition-all duration-300 ease-in-out 
                                                  before:absolute before:inset-0 before:bg-white/10 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-300 before:hover:opacity-100 
                                                  hover:scale-105"
                                      >
                                        Submit
                                      </button>
                                      <button 
                                        type="reset" 
                                        onClick={handleReset}
                                        className="relative px-8 py-4 rounded-xl text-white font-extrabold text-lg 
                                                  bg-gradient-to-r from-red-500 to-red-700 shadow-lg 
                                                  hover:from-red-600 hover:to-red-800 hover:shadow-red-500/50 
                                                  focus:ring-4 focus:ring-red-400 
                                                  transition-all duration-300 ease-in-out 
                                                  before:absolute before:inset-0 before:bg-white/10 before:rounded-xl before:opacity-0 before:transition-opacity before:duration-300 before:hover:opacity-100 
                                                  hover:scale-105"
                                      >
                                        Reset
                                      </button>
                                    </div>

                                  </form>
                                  
                          </div>
                                  
                        </div>
      

         {/* Toaster for success and error messages */}
          <Toaster
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          >
            <toast
              onClose={handleClose}
              severity={alertType}
              sx={{
                width: '100%',
                borderRadius: '12px',
                fontSize: '1rem',
                fontWeight: 600,
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                backgroundColor: alertType === 'error' ? '#fdecea' : '#edf7ed',
                color: alertType === 'error' ? '#c62828' : '#2e7d32',
                border: `1px solid ${alertType === 'error' ? '#f44336' : '#4caf50'}`
              }}
                  iconMapping={{
                    success: <span>✅</span>,
                    error: <span>❌</span>,
                  }}
            >
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

export default MemberForm;