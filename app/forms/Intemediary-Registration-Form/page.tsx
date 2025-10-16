"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { motion } from "framer-motion";

// Hero UI components (assumes these exports exist in your installed package)
import {
  Card,
  CardBody,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Select,
  SelectItem,
  Button,
  Checkbox,
  toast,
} from "@heroui/react";
import { X } from "lucide-react";

/* ============================
   Types
   ============================ */
type ErrorsType = Record<string, string>;

type SimpleFormType = {
  principal_id: string;
  first_name: string;
  middle_name: string;
  surname: string;
  email: string;
};

type FormDataType = {
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
  [key: string]: any;
};

/* ============================
   Full countries list (from your original file)
   ============================ */
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

/* ============================
   Component
   ============================ */
const AgentForm: React.FC = () => {
  const router = useRouter();

  // modal state and UI
  const [openRegistration, setOpenRegistration] = useState<boolean>(true);
  const [isSimpleForm, setIsSimpleForm] = useState<boolean>(false);
  const [loaderIcon, setLoaderIcon] = useState<boolean>(false);

  // forms
  const [simpleForm, setSimpleForm] = useState<SimpleFormType>({
    principal_id: "",
    first_name: "",
    middle_name: "",
    surname: "",
    email: "",
  });

  const [formData, setFormData] = useState<FormDataType>({
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
    country: "Kenya",
    city: "",
    eimail: "",
    company_name: "",
    company_number: "",
    bank_name: "",
    account_name: "",
    bank_branch: "",
    account_number: "",
  });

  const [errors, setErrors] = useState<ErrorsType>({});

  useEffect(() => {
    setOpenRegistration(true);
  }, []);

  /* ============================
     Toast helpers (Hero UI toast object)
     ============================ */
  const notifySuccess = (message: string) =>
    toast({
      title: "Success",
      description: message,
      color: "success",
      duration: 4500,
      variant: "solid",
    });

  const notifyError = (message: string) =>
    toast({
      title: "Error",
      description: message,
      color: "danger",
      duration: 6000,
      variant: "solid",
    });

  /* ============================
     Helpers: auto-focus + scroll to first invalid field
     ============================ */
  const focusFirstError = (errKeys: string[]) => {
    if (!errKeys || errKeys.length === 0) return;
    const k = errKeys[0];

    // Wait a tick for DOM updates, then focus & scroll the element
    setTimeout(() => {
      const el = document.querySelector<HTMLElement>(`[name="${k}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        (el as HTMLElement).focus?.();
      }
    }, 120);
  };

  /* ============================
     Handlers
     ============================ */
  // simple form field
  const handleSimpleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSimpleForm((prev) => ({ ...prev, [name]: value }));
  };

  // handle phone changes (name optional)
  const handlePhoneChange = (value: string, _country: any, name?: string) => {
    if (!name) {
      setFormData((prev) => ({ ...prev, mobileno: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // generic change for inputs/selects
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "intermediary_type") {
      const isBroker = value === "Broker";
      setFormData((prev) => ({
        ...prev,
        intermediary_type: value,
        ...(isBroker
          ? {
            title: "",
            firstname: "",
            middlename: "",
            lastname: "",
            gender: "",
            idtype: "",
            idno: "",
            dateofbirth: "",
          }
          : {}),
        country: value === "Diaspora Agent" ? (prev.country === "Kenya" ? "" : prev.country) : "Kenya",
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Simple (sub-agent) submit
  const handleSimpleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoaderIcon(true);

    if (localStorage.getItem("subAgentSubmitted") === "true") {
      notifyError("You have already submitted the Sub Agent form.");
      setLoaderIcon(false);
      return;
    }

    try {
      const res = await axios.post("/api/sub-agent-form", simpleForm, {
        headers: { "Content-Type": "application/json" },
        timeout: 10000,
      });

      setSimpleForm({ principal_id: "", first_name: "", middle_name: "", surname: "", email: "" });

      if (res.status === 200) {
        localStorage.setItem("subAgentSubmitted", "true");
        notifySuccess(res.data.message || "Form submitted successfully!");
        setTimeout(() => router.push("/"), 8000);
      } else {
        notifyError(res.data.error || "Something went wrong");
      }
    } catch (err: any) {
      notifyError(err?.response?.data?.error || err.message || "Submission failed");
    } finally {
      setLoaderIcon(false);
    }
  };

  // Full agent submit + validation + focus on errors
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoaderIcon(true);
    setErrors({});

    if (localStorage.getItem("intermediarySubmitted") === "true") {
      notifyError("You have already submitted the form.");
      setLoaderIcon(false);
      return;
    }

    const errorsObj: ErrorsType = {};

    // age validation (skip for Broker)
    if (formData.intermediary_type !== "Broker" && formData.dateofbirth) {
      const selectedDate = new Date(formData.dateofbirth);
      const today = new Date();
      let age = today.getFullYear() - selectedDate.getFullYear();
      const hadBirthday =
        today.getMonth() > selectedDate.getMonth() ||
        (today.getMonth() === selectedDate.getMonth() && today.getDate() >= selectedDate.getDate());
      const actualAge = hadBirthday ? age : age - 1;
      if (actualAge < 18) errorsObj.dateofbirth = "You must be at least 18 years old.";
    }

    // kra pin required for Kenya
    if (formData.country === "Kenya" && !String(formData.pin_no || "").trim()) {
      errorsObj.pin_no = "KRA PIN is required for residents of Kenya.";
    }

    // country restrictions
    if (
      ["Broker", "Agent", "Recruitment Agent"].includes(formData.intermediary_type || "") &&
      formData.country !== "Kenya"
    ) {
      errorsObj.country = "This intermediary type must be based in Kenya.";
    }
    if (formData.intermediary_type === "Diaspora Agent" && formData.country === "Kenya") {
      errorsObj.country = "Diaspora Agents cannot be based in Kenya.";
    }

    // if errors, set + focus first invalid
    if (Object.keys(errorsObj).length > 0) {
      setErrors(errorsObj);
      setLoaderIcon(false);
      focusFirstError(Object.keys(errorsObj));
      notifyError("Please fix the highlighted errors and try again.");
      return;
    }

    // autofill company name if blank
    if (!formData.company_name?.trim() && formData.firstname?.trim()) {
      formData.company_name = formData.firstname;
    }

    try {
      const res = await axios.post("/api/intermediary-form", formData, {
        headers: { "Content-Type": "application/json" },
        timeout: 10000,
      });

      // reset
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
        notifySuccess(res.data.message || "Form submitted successfully!");
        setTimeout(() => router.push("/"), 8000);
      } else {
        notifyError(res.data.error || "Something went wrong");
      }
    } catch (err: any) {
      console.error("Submission failed:", err);
      notifyError(err?.response?.data?.error || err.message || "Submission failed");
    } finally {
      setLoaderIcon(false);
    }
  };

  const closeModal = () => {
    setOpenRegistration(false);
    setTimeout(() => router.push("/"), 220);
  };

  const showPersonalFields = formData.intermediary_type !== "Broker";

  const filteredCountries = (() => {
    if (["Broker", "Agent", "Recruitment Agent"].includes(formData.intermediary_type || "")) {
      return countries.filter((c) => c === "Kenya");
    } else if (formData.intermediary_type === "Diaspora Agent") {
      return countries.filter((c) => c !== "Kenya");
    }
    return countries;
  })();

  /* optional helpers for file inputs (kept from prior implementation) */
  const handleFileInput = (field: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []).map((file) => ({
      file,
      preview: file.type.startsWith("image/") ? URL.createObjectURL(file) : null,
    }));
    setFormData((prev) => ({ ...prev, [field]: [...(prev[field] || []), ...files] }));
  };

  const removeFile = (field: string, index: number) => {
    setFormData((prev) => {
      const arr = Array.isArray(prev[field]) ? prev[field].slice() : [];
      arr.splice(index, 1);
      return { ...prev, [field]: arr };
    });
  };

  /* ================
     Render
     ================ */
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 
                bg-[url('/images/backdrop2.png')] bg-cover bg-center bg-no-repeat"
    >
      <Card className="w-full max-w-4xl shadow-2xl border border-gray-100 rounded-2xl bg-white/95">
        <CardBody>
          {/* loader overlay */}
          {loaderIcon && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-sm">
              <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full" />
            </div>
          )}

          {/* Hero UI Modal (glassy corporate pop) */}
          <Modal open={openRegistration} onClose={closeModal} className="backdrop-blur-sm">
            <ModalHeader>
              <div className="relative flex flex-col items-center py-2">
                <div className="mb-2">
                  <Image src="/images/logo.jpeg" alt="Logo" width={220} height={60} />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {isSimpleForm ? "Sub Agent Registration" : "Intermediary Registration"}
                </h3>
                <div className="h-1 w-16 rounded-full bg-sky-600 mt-3" />
                <button
                  onClick={() => setIsSimpleForm((s) => !s)}
                  className="text-sm text-sky-600 absolute left-4 top-4"
                >
                  {isSimpleForm ? "← Back to Agent Registration" : "Switch to Sub Agent Form"}
                </button>

                <button onClick={closeModal} aria-label="Close" className="absolute right-4 top-4 text-gray-600 hover:text-gray-900">
                  <X />
                </button>
              </div>
            </ModalHeader>

            <ModalBody>
              {isSimpleForm ? (
                <form onSubmit={handleSimpleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Agent ID</label>
                      <Input name="principal_id" value={simpleForm.principal_id} onChange={handleSimpleChange} />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">First Name</label>
                      <Input name="first_name" value={simpleForm.first_name} onChange={handleSimpleChange} />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Middle Name</label>
                      <Input name="middle_name" value={simpleForm.middle_name} onChange={handleSimpleChange} />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Surname</label>
                      <Input name="surname" value={simpleForm.surname} onChange={handleSimpleChange} />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <Input name="email" type="email" value={simpleForm.email} onChange={handleSimpleChange} />
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center gap-4">
                    <Button type="submit" className="bg-gradient-to-r from-blue-600 to-sky-600 text-white">
                      {loaderIcon ? "Submitting..." : "Submit Sub Agent Form"}
                    </Button>
                    <Button variant="outline" onClick={() => setIsSimpleForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </form>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Intermediary Type</label>
                      <Select name="intermediary_type" value={formData.intermediary_type} onChange={handleChange}>
                        <SelectItem value="Diaspora Agent">Diaspora Agent</SelectItem>
                        <SelectItem value="Agent">Agent</SelectItem>
                        <SelectItem value="Recruitment Agent">Recruitment Agent</SelectItem>
                        <SelectItem value="Broker">Broker</SelectItem>
                      </Select>
                    </div>

                    {showPersonalFields && (
                      <div>
                        <label className="text-sm font-medium text-gray-700">Title</label>
                        <Select name="title" value={formData.title} onChange={handleChange}>
                          {["Mr", "Mrs", "Miss", "Ms", "Dr", "Prof"].map((t) => (
                            <SelectItem key={t} value={t}>
                              {t}
                            </SelectItem>
                          ))}
                        </Select>
                      </div>
                    )}

                    {showPersonalFields && (
                      <div>
                        <label className="text-sm font-medium text-gray-700">First Name</label>
                        <Input name="firstname" value={formData.firstname} onChange={handleChange} />
                      </div>
                    )}

                    {showPersonalFields && (
                      <div>
                        <label className="text-sm font-medium text-gray-700">Middle Name</label>
                        <Input name="middlename" value={formData.middlename} onChange={handleChange} />
                      </div>
                    )}

                    {showPersonalFields && (
                      <div>
                        <label className="text-sm font-medium text-gray-700">Last Name</label>
                        <Input name="lastname" value={formData.lastname} onChange={handleChange} />
                      </div>
                    )}

                    {showPersonalFields && (
                      <div>
                        <label className="text-sm font-medium text-gray-700">Gender</label>
                        <Select name="gender" value={formData.gender} onChange={handleChange}>
                          <SelectItem value="M">M</SelectItem>
                          <SelectItem value="F">F</SelectItem>
                          <SelectItem value="Others">Others</SelectItem>
                        </Select>
                      </div>
                    )}

                    <div>
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <div className="mt-2">
                        <PhoneInput
                          country={"ke"}
                          value={formData.mobileno}
                          onChange={(val, country) => handlePhoneChange(val, country, "mobileno")}
                          inputStyle={{ width: "100%", height: 48, borderRadius: 10 }}
                          inputProps={{ name: "mobileno" }}
                          containerClass="!w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <Input name="eimail" type="email" value={formData.eimail} onChange={handleChange} />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Postal Address</label>
                      <Input name="postal_address" value={formData.postal_address} onChange={handleChange} />
                    </div>

                    {showPersonalFields && (
                      <div>
                        <label className="text-sm font-medium text-gray-700">Identification Type</label>
                        <Select name="idtype" value={formData.idtype} onChange={handleChange}>
                          <SelectItem value="nID">nID (National ID)</SelectItem>
                          <SelectItem value="pID">pID (Passport)</SelectItem>
                        </Select>
                      </div>
                    )}

                    {showPersonalFields && (
                      <div>
                        <label className="text-sm font-medium text-gray-700">Identification Number</label>
                        <Input name="idno" value={formData.idno} onChange={handleChange} />
                      </div>
                    )}

                    <div>
                      <label className="text-sm font-medium text-gray-700">KRA PIN</label>
                      <Input name="pin_no" value={formData.pin_no} onChange={handleChange} placeholder="KRA Pin Number" />
                      {errors.pin_no && <div className="text-xs text-red-600 mt-1">{errors.pin_no}</div>}
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Date of Birth</label>
                      <Input name="dateofbirth" type="date" value={formData.dateofbirth} onChange={(e: any) => setFormData((prev) => ({ ...prev, dateofbirth: e.target.value }))} />
                      {errors.dateofbirth && <div className="text-xs text-red-600 mt-1">{errors.dateofbirth}</div>}
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Country of Residence</label>
                      <Select name="country" value={formData.country} onChange={handleChange}>
                        {filteredCountries.map((c) => (
                          <SelectItem value={c} key={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </Select>
                      {errors.country && <div className="text-xs text-red-600 mt-1">{errors.country}</div>}
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">City of Residence</label>
                      <Input name="city" value={formData.city} onChange={handleChange} />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Company Name</label>
                      <Input name="company_name" value={formData.company_name} onChange={handleChange} />
                      <p className="text-xs text-gray-500 mt-1">If not representing a company, enter your name.</p>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Company Phone</label>
                      <PhoneInput
                        country={"ke"}
                        value={formData.company_number}
                        onChange={(val, country) => handlePhoneChange(val, country, "company_number")}
                        inputStyle={{ width: "100%", height: 48, borderRadius: 10 }}
                        containerClass="!w-full"
                        inputProps={{ name: "company_number" }}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Bank Name</label>
                      <Input name="bank_name" value={formData.bank_name} onChange={handleChange} />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Account Name</label>
                      <Input name="account_name" value={formData.account_name} onChange={handleChange} />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Bank Branch</label>
                      <Input name="bank_branch" value={formData.bank_branch} onChange={handleChange} />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-gray-700">Account Number</label>
                      <Input name="account_number" value={formData.account_number} onChange={handleChange} />
                    </div>
                  </div>

                  {/* Optional file uploads */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { field: "id_document", label: "ID Document" },
                      { field: "company_certificate", label: "Company CR12" },
                      { field: "incorporation_certificate", label: "Certificate of Incorporation" },
                    ].map(({ field, label }) => {
                      const files = Array.isArray(formData[field]) ? formData[field] : [];
                      return (
                        <div key={field}>
                          <label className="text-sm font-medium text-gray-700">{label}</label>
                          <label className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-sky-600 to-emerald-500 text-white cursor-pointer">
                            <span className="text-sm">{files.length ? `${files.length} files` : `Upload ${label}`}</span>
                            <input type="file" multiple accept=".pdf,.doc,.docx,.png,.jpg,.jpeg" onChange={(e) => handleFileInput(field, e)} className="hidden" />
                          </label>

                          {files.length > 0 && (
                            <div className="mt-2 flex flex-wrap gap-2">
                              {files.map((f: any, i: number) => (
                                <div key={i} className="relative inline-block w-[84px] h-[84px] bg-gray-50 rounded-md border overflow-hidden">
                                  {f.preview ? <img src={f.preview} alt={f.file?.name} className="w-full h-full object-cover" /> : <div className="p-2 text-xs truncate">{f.file?.name}</div>}
                                  <button type="button" onClick={() => removeFile(field, i)} className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">×</button>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 flex justify-center gap-4">
                    <Button type="submit" className="bg-gradient-to-r from-green-500 to-sky-600 text-white px-6 py-3">
                      {loaderIcon ? "Submitting..." : "Submit Registration"}
                    </Button>
                    <Button variant="outline" onClick={closeModal}>
                      Cancel
                    </Button>
                  </div>
                </form>
              )}
            </ModalBody>

            <ModalFooter />
          </Modal>

          {/* Hero CTA behind modal */}
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden bg-gradient-to-br from-sky-100 via-white to-emerald-50 flex items-end">
            <div className="w-full p-8 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setOpenRegistration(true)}
                className="relative inline-flex items-center justify-center overflow-hidden font-semibold transition-all duration-300 ease-out rounded-lg px-6 py-3 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 text-white shadow-xl"
              >
                <span className="relative z-10 text-lg tracking-wide">Register as an Intermediary</span>
              </motion.button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default AgentForm;
