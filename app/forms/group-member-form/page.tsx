import React, { useEffect, useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Toaster, toast } from "@/components/ui/toaster";

import { useRouter } from 'next/router';
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
  family_option: string;
  option: string;
  supportingDocuments: string;
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
}

export interface PaginationmodelType {
  page: number;
  pageSize: number;
}




const GroupMemberForm: React.FC = () => {



  const [snackbarOpen, setToasterOpen] = useState<boolean>(false);
  const [alertType, settoastType] = useState<string>('success'); // 'success' or 'error'
  const [alertMessage, settoastMessage] = useState<string>('');
  const [loaderIcon, setLoaderIcon] = useState<boolean>(false);
  const router = useRouter();
  const { slug } = router.query;
  

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
    groupname: "",
    groupnumber: "",
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
    family_option: "",
    option: "",
    supportingDocuments: "",
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
});

  const [apiEndpoint, setApiEndpoint] = useState<string>('');
  const [benefitOptions, setBenefitOptions] = useState<any[]>([]);

    useEffect(() => {
      if (!slug) return;

      const groupConfig = {
        kenyansinsouthwales: {
          groupname: 'Kenyans In South Wales',
          groupnumber: 'KESWA',
          endpoint: '/api/kenyans-in-south-wales-member-form',
          benefits: {
            Individual: [
              'Annual Premium of GBP 15 per Principal Member',
              'Annual Premium of GBP 30 per Principal Member',
              'Annual Premium of GBP 51 per Principal Member',
            ],
            'Nuclear Family': [
              'Annual Premium of GBP 30 per Principal Member',
              'Annual Premium of GBP 60 per Principal Member',
              'Annual Premium of GBP 120 per Principal Member',
            ],
            'Extended Family': [
              'Annual Premium of GBP 150 per Principal Member',
              'Annual Premium of GBP 300 per Principal Member',
              'Annual Premium of GBP 500 per Principal Member',
            ],
          },
        },
        kenyansinnorthwales: {
          groupname: 'North Wales Kenya Community',
          groupnumber: 'NWKC',
          endpoint: '/api/kenyans-in-north-wales-member-form',
          benefits: {
            Individual: [
              'Annual Premium of GBP 15 per Principal Member',
              'Annual Premium of GBP 30 per Principal Member',
              'Annual Premium of GBP 51 per Principal Member',
            ],
            'Nuclear Family': [
              'Annual Premium of GBP 30 per Principal Member',
              'Annual Premium of GBP 60 per Principal Member',
              'Annual Premium of GBP 120 per Principal Member',
            ],
            'Extended Family': [
              'Annual Premium of GBP 150 per Principal Member',
              'Annual Premium of GBP 300 per Principal Member',
              'Annual Premium of GBP 500 per Principal Member',
            ],
          },
              },
        greatermanchesterkenyancommunity: {
          groupname: 'Greater Manchester Kenya Community Organistation',
          groupnumber: 'GMKCO',
          endpoint: '/api/manchester-kenyan-community-member-form',
          benefits: {
            Individual: [
              'Annual Premium of GBP 15 per Principal Member',
              'Annual Premium of GBP 30 per Principal Member',
              'Annual Premium of GBP 51 per Principal Member',
            ],
            'Nuclear Family': [
              'Annual Premium of GBP 30 per Principal Member',
              'Annual Premium of GBP 60 per Principal Member',
              'Annual Premium of GBP 120 per Principal Member',
            ],
            'Extended Family': [
              'Annual Premium of GBP 150 per Principal Member',
              'Annual Premium of GBP 300 per Principal Member',
              'Annual Premium of GBP 500 per Principal Member',
            ],
          },
             },
        kalolenidiasporaassociation: {
          groupname: 'Kaloleni Diaspora Association',
          groupnumber: 'KADA',
          endpoint: '/api/kaloleni-diaspora-association-member-form',
          benefits: {
            Individual: [
              'Annual Premium of GBP 15 per Principal Member',
              'Annual Premium of GBP 30 per Principal Member',
              'Annual Premium of GBP 51 per Principal Member',
            ],
            'Nuclear Family': [
              'Annual Premium of GBP 30 per Principal Member',
              'Annual Premium of GBP 60 per Principal Member',
              'Annual Premium of GBP 120 per Principal Member',
            ],
            'Extended Family': [
              'Annual Premium of GBP 150 per Principal Member',
              'Annual Premium of GBP 300 per Principal Member',
              'Annual Premium of GBP 500 per Principal Member',
            ],
          },
              },
        kenyanoxfordshiremenwelfare: {
          groupname: 'Kenyan Oxfordshire Men Welfare Group',
          groupnumber: 'KOMWG',
          endpoint: '/api/kenyan-oxfordshire-men-welfare',
          benefits: {
            // Individual: [
            //   'Annual Premium of GBP 15 per Principal Member',
            //   'Annual Premium of GBP 30 per Principal Member',
            //   'Annual Premium of GBP 51 per Principal Member',
            // ],
            'Nuclear Family': [
              'Annual Premium of GBP 60 per Principal Member',
              'Annual Premium of GBP 100 per Principal Member',
              'Annual Premium of GBP 120 per Principal Member',
              'Annual Premium of GBP 130 per Principal Member',
            ],
            'Extended Family': [
              'Annual Premium of GBP 300 per Principal Member',
              'Annual Premium of GBP 500 per Principal Member',
              'Annual Premium of GBP 650 per Principal Member',
              'Annual Premium of GBP 700 per Principal Member',
            ],
          },
              },
        southeastkentkenyans: {
          groupname: 'South East Kent Kenyans',
          groupnumber: 'SEKK',
          endpoint: '/api/south-east-kent-kenyans',
          benefits: {
            // Individual: [
            //   'Annual Premium of GBP 15 per Principal Member',
            //   'Annual Premium of GBP 30 per Principal Member',
            //   'Annual Premium of GBP 51 per Principal Member',
            // ],
            'Nuclear Family': [
              'Annual Premium of GBP 60 per Principal Member',
              'Annual Premium of GBP 100 per Principal Member',
              'Annual Premium of GBP 120 per Principal Member',
              'Annual Premium of GBP 130 per Principal Member',
            ],
            'Extended Family': [
              'Annual Premium of GBP 300 per Principal Member',
              'Annual Premium of GBP 500 per Principal Member',
              'Annual Premium of GBP 650 per Principal Member',
              'Annual Premium of GBP 700 per Principal Member',
            ],
          },
              },
        kenyanassociationinbristol: {
          groupname: 'Kenyans Association In Bristol',
          groupnumber: 'KAIB',
          endpoint: '/api/kenyans-in-bristol-member-form',
          benefits: {
            // Individual: [
            //   'Annual Premium of GBP 15 per Principal Member',
            //   'Annual Premium of GBP 30 per Principal Member',
            //   'Annual Premium of GBP 51 per Principal Member',
            // ],
            'Nuclear Family': [
              'Annual Premium of GBP 30 per Principal Member',
              'Annual Premium of GBP 60 per Principal Member',
              'Annual Premium of GBP 120 per Principal Member',
            ],
            'Extended Family': [
              'Annual Premium of GBP 150 per Principal Member',
              'Annual Premium of GBP 300 per Principal Member',
              'Annual Premium of GBP 500 per Principal Member',
            ],
          },
              },
        kenyannursesmidwivesassociation: {
          groupname: 'Kenyan Nurses and Midwives Association',
          groupnumber: 'KENMA',
          endpoint: '/api/kenyan-nurses-midwives-association',
          benefits: {
            // Individual: [
            //   'Annual Premium of GBP 15 per Principal Member',
            //   'Annual Premium of GBP 30 per Principal Member',
            //   'Annual Premium of GBP 51 per Principal Member',
            // ],
            'Nuclear Family': [
              'Annual Premium of GBP 39 per Principal Member',
              'Annual Premium of GBP 68 per Principal Member',
              'Annual Premium of GBP 97 per Principal Member',
              'Annual Premium of GBP 116 per Principal Member',
            ],
            'Extended Family': [
              'Annual Premium of GBP 227 per Principal Member',
              'Annual Premium of GBP 397 per Principal Member',
              'Annual Premium of GBP 567 per Principal Member',
              'Annual Premium of GBP 680 per Principal Member',
            ],
          },
       },      
      };

      const group = groupConfig[slug?.toLowerCase()];

        console.log('Slug:', slug);  
        console.log('Group:', group)

      if (group) {
        setFormData((prev) => ({
          ...prev,
          groupname: group.groupname,
          groupnumber: group.groupnumber,
        }));

        setApiEndpoint(group.endpoint);

        // ✅ Place this line right here:
        setBenefitOptions(group.benefits || {});
      } else {
        // fallback
        setFormData((prev) => ({
          ...prev,
          groupname: 'Unknown Group',
          groupnumber: 'UNKNOWN',
        }));
        setApiEndpoint('/api/default-handler');

        // fallback benefits for individual/family
        setBenefitOptions({
          Individual: ['Annual Premium of GBP 30 per Principal Member'],
          Family: ['Annual Premium of GBP 60 per Family'],
        });
      }
    }, [slug]);
  
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

    // --- Start Beneficiary Validation Logic ---
    const beneficiaryList = formData.beneficiariesData || [];

    // Filter out entries with missing DOB
    const validBeneficiaries = beneficiaryList.filter(b => b.dob);

    // Ensure all have valid DOB and are at least 1 month old
    for (const ben of validBeneficiaries) {
      if (!isAtLeastOneMonthOld(ben.dob)) {
        settoastType('error');
        settoastMessage(`Beneficiary "${ben.beneficiary_fullname}" must be at least 1 month old.`);
        setToasterOpen(true);
        setLoaderIcon(false);
        return;
      }
    }

    // If only one beneficiary and under 18
    if (validBeneficiaries.length === 1) {
      const age = calculateAge(validBeneficiaries[0].dob);
      if (age < 18) {
        settoastType('error');
        settoastMessage('You must add another beneficiary who is at least 18 years old if the only one is below 18.');
        setToasterOpen(true);
        setLoaderIcon(false);
        return;
      }
    }

    // If multiple beneficiaries, ensure at least one is 18+
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
    // --- End Beneficiary Validation Logic ---

    const form = new FormData();
      for (const key in formData) {
        if (key === 'dependantsData' || key === 'beneficiariesData') {
          form.append(key, JSON.stringify(formData[key]));
        } else if (key === 'supportingDocuments') {
          const docs = formData.supportingDocuments;
          if (Array.isArray(docs)) {
            docs.forEach(file => form.append('supportingDocuments', file));
          } else if (docs instanceof File) {
            form.append('supportingDocuments', docs);
          }
        } else {
          form.append(key, formData[key]);
        }
      }

    try {
      const res = await fetch(apiEndpoint, {
        method: 'POST',
        body: form,
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
      groupname: "",
      groupnumber: "",
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
      family_option: "",
      option: "",
      supportingDocuments: "",
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
                            <p>{formData.groupname || 'Group'} Member Detail Forms</p>
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
                            value={formData.groupname} // ✅ now dynamic
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
                            value={formData.groupnumber} // ✅ now dynamic
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
                            <TextField
                              required
                              name="family_option"
                              select
                              label="Family Option"
                              variant="outlined"
                              value={formData.family_option}
                              onChange={handleChange}
                              fullWidth
                              className="bg-gray-100 mb-6"
                            >
                              <MenuItem value="Individual">Individual</MenuItem>
                              <MenuItem value="Nuclear Family">Nuclear Family</MenuItem>
                              <MenuItem value="Extended Family">Extended Family</MenuItem>
                            </TextField>
                            <div>
                            
                          </div>
                          <div>
                          {/* Benefit Options Shown Directly Below */}
                              {formData.family_option && benefitOptions[formData.family_option] && (
                                <FormControl fullWidth margin="normal">
                                  <FormLabel>Select Annual Benefit</FormLabel>
                                  <RadioGroup
                                    name="option"
                                    value={formData.option}
                                    onChange={handleChange}
                                  >
                                    {benefitOptions[formData.family_option].map((benefit, idx) => (
                                      <FormControlLabel
                                        key={idx}
                                        value={benefit}
                                        control={<Radio />}
                                        label={benefit}
                                      />
                                    ))}
                                  </RadioGroup>
                                </FormControl>
                              )}

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

                                    {/* Bank Disclaimer */}
                                      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-xl mx-4 mt-6 shadow-sm">
                                        <p className="font-bold text-lg mb-2">Payment Information</p>
                                        <p><strong>Account Name:</strong> CITYBOXCOURIERS </p>
                                        <p><strong>Account Number:</strong>  70161909 </p>
                                        <p><strong>Short Code:</strong> 55 50 28 </p>
                                        Please Deposit to the Birdview Partner Collection Account
                                        <p className="mt-4 font-semibold text-red-600">
                                          ⚠️ Please use your <strong>Member Reference Number</strong> as the <strong>Reference Number</strong> when making the payment.
                                        </p>
                                        <p className="mt-4 font-semibold text-red-600">
                                          ⚠️ <strong>Policy will be Effective upon receipt of Funds.</strong>Please upload proof of Payment
                                        </p>
                                      </div>
                                      <br/>                                                         {/* File Upload Section */}
                                      <div className="mb-8 p-4 border-2 border-blue-500 rounded-xl bg-blue-50 shadow-md">
                                        <label htmlFor="upload-multiple-files" className="block text-blue-800 font-semibold text-lg mb-2">
                                          📎 Upload Proof Of Payment (PDF, Images Only ) <span className="text-red-600">*</span>
                                        </label>

                                        <input
                                          type="file"
                                          name="supportingDocuments"
                                          multiple
                                          onChange={handleFileChange}
                                          style={{ display: 'none' }}
                                          id="upload-multiple-files"
                                        />

                                        <label htmlFor="upload-multiple-files">
                                          <Button
                                            variant="contained"
                                            component="span"
                                            className="bg-blue-600 hover:bg-blue-700 text-white normal-case"
                                          >
                                            Choose Files
                                          </Button>
                                        </label>

                                        {fileError && (
                                          <toast
                                            severity="error"
                                            sx={{
                                              borderRadius: '10px',
                                              fontSize: '0.95rem',
                                              fontWeight: 500,
                                              backgroundColor: '#fff3f3',
                                              color: '#b71c1c',
                                              border: '1px solid #ef5350',
                                              mt: 2,
                                            }}
                                          >
                                            {fileError}
                                          </toast>
                                        )}  

                                        {formData.supportingDocuments?.length > 0 && (
                                          <ul className="mt-3 text-sm text-gray-700 font-medium list-disc list-inside">
                                            {formData.supportingDocuments.map((file, idx) => (
                                              <li key={idx}>{file.name}</li>
                                            ))}
                                          </ul>
                                        )}
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

export default GroupMemberForm;