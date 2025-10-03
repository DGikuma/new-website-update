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
import BackgroundImage from '../components/BackgroundImage';export interface ErrorsType {
}

export interface FormdataType {
  memberidno: string;
  title: string;
  firstname: string;
  lastname: string;
  middlename: string;
  idtype: string;
  idno: string;
  dateofbirth: string;
  gender: string;
  kra_pin: string;
  mobileno: string;
  other_mobileno: string;
  eimail: string;
  option: string;
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
  beneficiary_id: string;
  phone_number: string;
  beneficiary_address: string;
  beneficiary_email: string;
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
  

  // Handle Toaster close
  const handleClose: React.FC = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setToasterOpen(false);
  };
   
  
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
    title: "",
    firstname: "",
    lastname: "",
    middlename: "",
    idtype: "",
    idno: "",
    dateofbirth: "",
    gender: "",
    kra_pin: "",
    mobileno: "",
    other_mobileno: "",
    eimail: "",
    option: "",
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
        beneficiary_id: "",
        dob: "",
        phone_number: "",
        beneficiary_address: "",
        beneficiary_email: "",
         },
      ],
});
  
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
    const maxDependents = 7;

    if (dependentCount < maxDependents) {
      setDependentCount((prev) => prev + 1);
    } else {
      settoastType('error');
      settoastMessage(`You can only add up to ${maxDependents} dependants.`);
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
          beneficiary_id: "",
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

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
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

    const beneficiaryList = formData.beneficiariesData || [];

    const validBeneficiaries = beneficiaryList.filter(b => b.dob);

    for (const ben of validBeneficiaries) {
      if (!isAtLeastOneMonthOld(ben.dob)) {
        settoastType('error');
        settoastMessage(`Beneficiary "${ben.beneficiary_fullname}" must be at least 1 month old.`);
        setToasterOpen(true);
        setLoaderIcon(false);
        return;
      }
    }

    if (validBeneficiaries.length === 1) {
      const age = calculateAge(validBeneficiaries[0].dob);
      if (age < 18) {
        settoastType('error');
        settoastMessage('You must add another beneficiary who is at least 18 years old.');
        setToasterOpen(true);
        setLoaderIcon(false);
        return;
      }
    }

    if (validBeneficiaries.length > 1) {
      const hasAdult = validBeneficiaries.some(ben => calculateAge(ben.dob) >= 18);
      if (!hasAdult) {
        settoastType('error');
        settoastMessage('At least one beneficiary must be 18 years or older.');
        setToasterOpen(true);
        setLoaderIcon(false);
        return;
      }
    }

    try {
      const res = await fetch('/api/littlecab_forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        settoastType('success');
        settoastMessage(data.message);
        setToasterOpen(true);
        setLoaderIcon(false);
        handleReset();
      } else {
        settoastType('error');
        settoastMessage(`Error: ${data.error}`);
        setToasterOpen(true);
        setLoaderIcon(false);
      }
    } catch (error) {
      settoastType('error');
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
  { field: 'beneficiary_id', headerName: 'Beneficiary ID', width: 200 },
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

  setErrors(newErrors);

  console.log(newErrors)

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
      const isOver85 = updated.relationship === "Parent" && actualAge > 85;

      let dobError = "";
      if (isUnder18) {
        dobError = `${updated.relationship} must be at least 18 years old.`;
      } else if (isOver85) {
        dobError = `Parent must not be older than 85 years.`;
      }

      setIsAdultRelationshipEligible(!isUnder18 && !isOver85);
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
    if (!currentBeneficiary?.beneficiary_id) newErrors.beneficiary_id = 'Beneficiary ID is required';
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

        // Validation: Parent over 85
        if (updated.relationship === "Parent" && ageInMonths > 1020) {
          // 1020 months = 85 years
          dobError = "Parent must not be older than 85 years.";
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
      title: "",
      firstname: "",
      lastname: "",
      middlename: "",
      idtype: "",
      idno: "",
      dateofbirth: "",
      gender: "",
      kra_pin: "",
      mobileno: "",
      other_mobileno: "",
      eimail: "",
      option: "",
      selectedOption: "",
      dependantsData: [],          
      beneficiariesData: [],     
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

const isSpouseLimitReached = relationshipCounts["Spouse"] >= 2;
const isChildLimitReached = relationshipCounts["Child"] >= 5;

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
                            <p>Little Cab Driver's Member Detail Forms</p>
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
                              name="kra_pin"
                              label="KRA PIN"
                              variant="outlined"
                              value={formData.kra_pin}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 mb-6"
                            />
                              {/* Mobile No */}
                            <TextField 
                              required
                              name="mobileno"
                              label="Mobile No"
                              variant="outlined"
                              value={formData.mobileno}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 mb-12"
                            /> 

                            <TextField 
                              required
                              name="other_mobileno"
                              label="Other Mobile No"
                              variant="outlined"
                              value={formData.other_mobileno}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 mb-12"
                            /> 
                            <TextField 
                              required
                              name="eimail"
                              label="Email"
                              variant="outlined"
                              value={formData.eimail}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 mb-12"
                            /> 
                            <div>
                            
                          </div>
                          <div>
                          {/* Benefit Options Shown Directly Below */}
                          <FormControl component="fieldset" fullWidth className="mb-6">
                            <FormLabel component="legend" className="mb-2">
                              Select Option
                            </FormLabel>
                            <RadioGroup
                              name="option"
                              value={formData.option}
                              onChange={handleChange}
                              row
                            >
                              <FormControlLabel
                                value="Silver Option"
                                control={<Radio />}
                                label="Silver Option"
                              />
                              <FormControlLabel
                                value="Gold Option"
                                control={<Radio />}
                                label="Gold Option"
                              />
                            </RadioGroup>

                            {/* Disclaimer for Silver Option */}
                            {formData.option === "Silver Option" && (
                              <div className="mt-4 border border-gray-400 rounded-md overflow-x-auto shadow-md bg-white w-full max-w-7xl mx-auto">
                                <table className="min-w-full text-sm text-left">
                                  <thead className="bg-gray-200 text-gray-800">
                                    <tr>
                                      <th className="px-4 py-3 border-b">Cover</th>
                                      <th className="px-4 py-3 border-b">Benefit</th>
                                      <th className="px-4 py-3 border-b">Limit (Kshs)</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {/* Medical Benefits */}
                                    <tr className="border-t">
                                      <td className="px-4 py-2 font-semibold" rowSpan={8}>Medical</td>
                                      <td className="px-4 py-2">Outpatient (Family Shared)</td>
                                      <td className="px-4 py-2">Kshs. 30,000</td>
                                    </tr>
                                    <tr><td className="px-4 py-2">Inpatient (Family Shared)</td><td className="px-4 py-2">Kshs. 100,000</td></tr>
                                    <tr><td className="px-4 py-2">Maternity</td><td className="px-4 py-2">Kshs. 25,000</td></tr>
                                    <tr><td className="px-4 py-2">Optical (Family Shared)</td><td className="px-4 py-2">Kshs. 5,000</td></tr>
                                    <tr><td className="px-4 py-2">Dental (Family Shared)</td><td className="px-4 py-2">Kshs. 5,000</td></tr>
                                    <tr><td className="px-4 py-2">Telemedicine (Family Shared)</td><td className="px-4 py-2">Unlimited</td></tr>
                                    <tr><td className="px-4 py-2">Last Respect (Family Shared, first death basis)</td><td className="px-4 py-2">Kshs. 20,000</td></tr>
                                    <tr><td className="px-4 py-2">Additional Maternity Benefit (For additional spouse)</td><td className="px-4 py-2">Kshs. 25,000</td></tr>

                                    {/* Hospital Cash */}
                                    <tr className="border-t">
                                      <td className="px-4 py-2">Hospital Cash</td>
                                      <td className="px-4 py-2">Kshs. 2,000 per day (Max 10 days)</td>
                                      <td className="px-4 py-2">Kshs. 20,000</td>
                                    </tr>

                                    {/* Emergency Rescue */}
                                    <tr className="border-t">
                                      <td className="px-4 py-2">Emergency Rescue Services</td>
                                      <td className="px-4 py-2">Emergency evacuation (Shared per Family)</td>
                                      <td className="px-4 py-2">2 Ambulance callout Per year</td>
                                    </tr>

                                    {/* Personal Accident */}
                                    <tr className="border-t">
                                      <td className="px-4 py-2 font-semibold" rowSpan={4}>Personal Accident</td>
                                      <td className="px-4 py-2">Death / Permanent Total Disability</td>
                                      <td className="px-4 py-2">Kshs. 500,000</td>
                                    </tr>
                                    <tr><td className="px-4 py-2">Temporary Total Disability (Per week for 12 weeks)</td><td className="px-4 py-2">Kshs. 2,500</td></tr>
                                    <tr><td className="px-4 py-2">Emergency Medical Expenses</td><td className="px-4 py-2">Kshs. 50,000</td></tr>
                                    <tr><td className="px-4 py-2">Artificial Appliance (Including Prosthetics)</td><td className="px-4 py-2">Kshs. 30,000</td></tr>
                                  </tbody>
                                </table>
                              </div>
                            )}
                            {/* Disclaimer for Gold Option */}
                            {formData.option === "Gold Option" && (
                              <div className="mt-4 border border-yellow-400 rounded-md overflow-x-auto shadow-md bg-yellow-50">
                                <table className="min-w-full text-sm text-left">
                                  <thead className="bg-yellow-100 text-gray-800">
                                    <tr>
                                      <th className="px-4 py-3 border-b">Cover</th>
                                      <th className="px-4 py-3 border-b">Benefit</th>
                                      <th className="px-4 py-3 border-b">Limit (Kshs)</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {/* Medical Benefits */}
                                    <tr className="border-t">
                                      <td className="px-4 py-2 font-semibold" rowSpan={8}>Medical</td>
                                      <td className="px-4 py-2">Outpatient (Family Shared)</td>
                                      <td className="px-4 py-2">Kshs. 50,000</td>
                                    </tr>
                                    <tr><td className="px-4 py-2">Inpatient (Family Shared)</td><td className="px-4 py-2">Kshs. 200,000</td></tr>
                                    <tr><td className="px-4 py-2">Maternity</td><td className="px-4 py-2">Kshs. 70,000</td></tr>
                                    <tr><td className="px-4 py-2">Optical (Family Shared)</td><td className="px-4 py-2">Kshs. 7,500</td></tr>
                                    <tr><td className="px-4 py-2">Dental (Family Shared)</td><td className="px-4 py-2">Kshs. 7,500</td></tr>
                                    <tr><td className="px-4 py-2">Telemedicine (Family Shared)</td><td className="px-4 py-2">Unlimited</td></tr>
                                    <tr><td className="px-4 py-2">Last Respect (Family Shared, first death basis)</td><td className="px-4 py-2">Kshs. 40,000</td></tr>
                                    <tr><td className="px-4 py-2">Additional Maternity Benefit (For additional spouse)</td><td className="px-4 py-2">Kshs. 50,000</td></tr>

                                    {/* Hospital Cash */}
                                    <tr className="border-t">
                                      <td className="px-4 py-2">Hospital Cash</td>
                                      <td className="px-4 py-2">Kshs. 2,000 per day (Max 10 days)</td>
                                      <td className="px-4 py-2">Kshs. 20,000</td>
                                    </tr>

                                    {/* Emergency Rescue */}
                                    <tr className="border-t">
                                      <td className="px-4 py-2">Emergency Rescue Services</td>
                                      <td className="px-4 py-2">Emergency evacuation (Shared per Family)</td>
                                      <td className="px-4 py-2">2 Ambulance callout Per year</td>
                                    </tr>

                                    {/* Personal Accident */}
                                    <tr className="border-t">
                                      <td className="px-4 py-2 font-semibold" rowSpan={4}>Personal Accident</td>
                                      <td className="px-4 py-2">Death / Permanent Total Disability</td>
                                      <td className="px-4 py-2">Kshs. 500,000</td>
                                    </tr>
                                    <tr><td className="px-4 py-2">Temporary Total Disability (Per week for 12 weeks)</td><td className="px-4 py-2">Kshs. 2,500</td></tr>
                                    <tr><td className="px-4 py-2">Emergency Medical Expenses</td><td className="px-4 py-2">Kshs. 50,000</td></tr>
                                    <tr><td className="px-4 py-2">Artificial Appliance (Including Prosthetics)</td><td className="px-4 py-2">Kshs. 30,000</td></tr>
                                  </tbody>
                                </table>
                              </div>
                            )}
                          </FormControl>

                          </div>
                          
                            
                          </div>


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
                                      value="Child"
                                      disabled={isChildLimitReached}
                                    >
                                      Child (child to the group member)
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
                                        Spouse
                                      </MenuItem>

                                      <MenuItem value="Parent">
                                        Parent 
                                      </MenuItem>

                                      <MenuItem value="Child">
                                        Child 
                                      </MenuItem>

                                      <MenuItem value="Sibling">
                                        Sibling 
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
                                        label="Beneficiary ID"
                                        name="beneficiary_id"
                                        value={currentBeneficiary?.beneficiary_id || ''}
                                        onChange={handleChangeBeneficiary}
                                        fullWidth
                                        margin="dense"
                                        error={!!errors.beneficiary_id}
                                        helperText={errors.beneficiary_id}
                                    
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