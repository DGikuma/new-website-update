"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
  Select,
  SelectItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Badge,
  Avatar,
} from "@heroui/react";

import { motion, AnimatePresence } from "framer-motion";

// @ts-ignore
import { Country } from "country-state-city";

export interface ErrorsType { }

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
  supportingDocuments: any;
  dependantsData: any[];
  beneficiariesData: any[];
  selectedOption: string;
}

// -----------------------
// Toast system (top-right frosted glass)
// -----------------------
type ToastType = "success" | "error" | "info" | "warning";
interface ToastModel {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  timeout?: number;
}

const toastId = () => `t_${Math.random().toString(36).slice(2, 9)}`;

const ToastIcon = ({ type }: { type: ToastType }) => {
  // simple icons (SVG)
  if (type === "success")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (type === "error")
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

const toastColors: Record<ToastType, string> = {
  success: "text-emerald-600 bg-emerald-50/60 border-emerald-200/40",
  error: "text-rose-600 bg-rose-50/60 border-rose-200/40",
  info: "text-sky-600 bg-sky-50/60 border-sky-200/40",
  warning: "text-amber-700 bg-amber-50/60 border-amber-200/40",
};

function useFrostedToasts() {
  const [toasts, setToasts] = useState<ToastModel[]>([]);
  const timers = useRef<Record<string, number>>({});

  const push = (t: { type: ToastType; message: string; title?: string; timeout?: number }) => {
    const id = toastId();
    const model: ToastModel = {
      id,
      type: t.type,
      title: t.title,
      message: t.message,
      timeout: t.timeout ?? 4500,
    };
    setToasts((prev) => [model, ...prev]);

    if (model.timeout && model.timeout > 0) {
      timers.current[id] = window.setTimeout(() => {
        setToasts((prev) => prev.filter((tt) => tt.id !== id));
      }, model.timeout);
    }
    return id;
  };

  const dismiss = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    if (timers.current[id]) {
      window.clearTimeout(timers.current[id]);
      delete timers.current[id];
    }
  };

  const api = {
    success: (msg: string, title?: string) => push({ type: "success", message: msg, title }),
    error: (msg: string, title?: string) => push({ type: "error", message: msg, title }),
    info: (msg: string, title?: string) => push({ type: "info", message: msg, title }),
    warning: (msg: string, title?: string) => push({ type: "warning", message: msg, title }),
    dismiss,
    toasts,
  };

  return [api, toasts, setToasts] as const;
}

const ToastContainer: React.FC<{ toasts: ToastModel[]; onDismiss: (id: string) => void }> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed top-6 right-6 z-[9999] flex flex-col gap-3 items-end">
      <AnimatePresence initial={false}>
        {toasts.map((t) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.28 }}
            className={`w-[360px] max-w-xs p-3 rounded-2xl border backdrop-blur-md ${toastColors[t.type]} shadow-xl`}
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.42), rgba(255,255,255,0.18))" }}
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-white/10 border border-white/5 flex items-center justify-center">
                <span className="text-lg" aria-hidden>
                  <ToastIcon type={t.type} />
                </span>
              </div>
              <div className="flex-1">
                {t.title && <div className="font-semibold text-sm mb-1 text-slate-800">{t.title}</div>}
                <div className="text-sm text-slate-700 leading-tight break-words">{t.message}</div>
              </div>
              <button
                aria-label="Dismiss toast"
                onClick={() => onDismiss(t.id)}
                className="ml-2 text-slate-500 hover:text-slate-700 transition-opacity"
              >
                ×
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// -----------------------
// Main component (keeps user structure & logic)
// -----------------------

const KenyansInJapanMemberForm: React.FC = () => {
  // use our frosted toast system
  const [toastApi, toasts, setToasts] = useFrostedToasts();

  const [alertType, settoastType] = useState<string>("success");
  const [alertMessage, settoastMessage] = useState<string>("");
  const [loaderIcon, setLoaderIcon] = useState<boolean>(false);

  const [date, setDate] = useState<string>("");

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openBeneficiaryDialog, setOpenBeneficiaryDialog] = useState<boolean>(false);

  const [currentDependant, setCurrentDependant] = useState<any | null>(null);
  const [currentBeneficiary, setCurrentBeneficiary] = useState<any | null>(null);
  const today = new Date().toISOString().split("T")[0];

  const [dependentCount, setDependentCount] = useState<number>(0);
  const [beneficiaryCount, setBeneficiaryCount] = useState<number>(0);

  const [errors, setErrors] = useState<ErrorsType>({});
  const [fileError, setFileError] = useState<any | null>(null);

  const [isSpouseEligible, setIsSpouseEligible] = useState<boolean>(true);
  const [isAdultRelationshipEligible, setIsAdultRelationshipEligible] = useState<boolean>(true);

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
    supportingDocuments: [],
    dependantsData: [],
    beneficiariesData: [],
    selectedOption: "",
  });

  const [apiEndpoint, setApiEndpoint] = useState<string>("/api/default-handler");
  const [benefitOptions, setBenefitOptions] = useState<any>({});

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
  ];

  useEffect(() => {
    // Generate member id
    const generateMemberId = () => {
      const now = new Date();
      const uniqueNumber = `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}${now.getMilliseconds()}`;
      const lastSixDigits = uniqueNumber.slice(-6);
      return `M${lastSixDigits}`;
    };

    setFormData((prev) => ({ ...prev, memberidno: generateMemberId() }));
  }, []);

  useEffect(() => {
    // Sync dynamic benefits if slug logic exists; keeping fallback
    setBenefitOptions({
      Individual: [
        "Annual Premium of GBP 15 per Principal Member",
        "Annual Premium of GBP 30 per Principal Member",
        "Annual Premium of GBP 51 per Principal Member",
      ],
      "Nuclear Family": [
        "Annual Premium of GBP 30 per Principal Member",
        "Annual Premium of GBP 60 per Principal Member",
        "Annual Premium of GBP 120 per Principal Member",
      ],
      "Extended Family": [
        "Annual Premium of GBP 150 per Principal Member",
        "Annual Premium of GBP 300 per Principal Member",
        "Annual Premium of GBP 500 per Principal Member",
      ],
    });
  }, []);

  useEffect(() => {
    // update dependants array length when count changes
    setFormData((prev) => {
      const existing = prev.dependantsData || [];
      const newDeps = Array.from({ length: dependentCount }, (_, i) => existing[i] || {
        id: i + 1,
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
      });
      return { ...prev, dependantsData: newDeps };
    });
  }, [dependentCount]);

  useEffect(() => {
    setFormData((prev) => {
      const existing = prev.beneficiariesData || [];
      const newBens = Array.from({ length: beneficiaryCount }, (_, i) => existing[i] || {
        id: i + 1,
        relationship: "",
        title: "",
        beneficiary_fullname: "",
        dob: "",
        phone_number: "",
        beneficiary_address: "",
        beneficiary_email: "",
      });
      return { ...prev, beneficiariesData: newBens };
    });
  }, [beneficiaryCount]);

  const handlePhoneChange = (value: any) => {
    setFormData((prev) => ({ ...prev, mobileno: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const maxSize = 5 * 1024 * 1024;
    const oversized = files.filter((f) => f.size > maxSize);
    if (oversized.length) {
      setFileError("One or more files exceed the 5MB size limit.");
      toastApi.error("One or more files exceed the 5MB size limit.");
      return;
    }
    setFileError("");
    setFormData((prev) => ({ ...prev, supportingDocuments: files }));
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target || {};

    if (name === "selectedCountry") {
      const selectedCountryObj = Country.getAllCountries().find((c) => c.isoCode === value);
      const countryName = selectedCountryObj ? selectedCountryObj.name : "";
      setFormData((prev) => ({ ...prev, selectedCountry: countryName, selectedCity: "" } as any));
      return;
    }

    if (type === "checkbox" && name === "selectedOption") {
      setFormData((prev) => ({ ...prev, selectedOption: checked ? value : "" } as any));
      return;
    }

    if (name === "family_option") {
      // preserve dependants trimming logic
      setFormData((prev) => {
        let updatedDependants = [...(prev.dependantsData || [])];
        if (value === "Nuclear Family") {
          const spouse = updatedDependants.find((d) => d.relationship === "Spouse");
          const children = updatedDependants.filter((d) => d.relationship === "Child").slice(0, 4);
          updatedDependants = [...(spouse ? [spouse] : []), ...children];
        }
        return { ...prev, [name]: value, option: "", dependantsData: updatedDependants } as any;
      });
      setDependentCount((prev) => {
        if (value === "Nuclear Family") {
          const nuclearSpouse = formData.dependantsData.filter((dep: any) => dep.relationship === "Spouse").slice(0, 1);
          const nuclearChildren = formData.dependantsData.filter((dep: any) => dep.relationship === "Child").slice(0, 4);
          return nuclearSpouse.length + nuclearChildren.length;
        } else {
          return formData.dependantsData.length;
        }
      });
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value } as any));
  };

  const calculateAge = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const hasHadBirthday =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    return hasHadBirthday ? age : age - 1;
  };

  const isAtLeastOneMonthOld = (dob: string) => {
    const birthDate = new Date(dob);
    const today = new Date();
    const diffInMs = today.getTime() - birthDate.getTime();
    const oneMonthInMs = 30 * 24 * 60 * 60 * 1000;
    return diffInMs >= oneMonthInMs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoaderIcon(true);

    // Beneficiary validation
    const beneficiaryList = formData.beneficiariesData || [];
    const validBeneficiaries = beneficiaryList.filter((b) => b.dob);

    for (const ben of validBeneficiaries) {
      if (!isAtLeastOneMonthOld(ben.dob)) {
        settoastType("error");
        settoastMessage(`Beneficiary "${ben.beneficiary_fullname}" must be at least 1 month old.`);
        toastApi.error(`Beneficiary "${ben.beneficiary_fullname}" must be at least 1 month old.`);
        setLoaderIcon(false);
        return;
      }
    }

    if (validBeneficiaries.length === 1) {
      const age = calculateAge(validBeneficiaries[0].dob);
      if (age < 18) {
        settoastType("error");
        settoastMessage("You must add another beneficiary who is at least 18 years old if the only one is below 18.");
        toastApi.error("You must add another beneficiary who is at least 18 years old if the only one is below 18.");
        setLoaderIcon(false);
        return;
      }
    }

    if (validBeneficiaries.length > 1) {
      const hasAdult = validBeneficiaries.some((ben) => calculateAge(ben.dob) >= 18);
      if (!hasAdult) {
        settoastType("error");
        settoastMessage("At least one beneficiary must be 18 years or older.");
        toastApi.error("At least one beneficiary must be 18 years or older.");
        setLoaderIcon(false);
        return;
      }
    }

    // Build formdata
    const form = new FormData();
    for (const key in formData) {
      // @ts-ignore
      const val = (formData as any)[key];
      if (key === "dependantsData" || key === "beneficiariesData") {
        form.append(key, JSON.stringify(val));
      } else if (key === "supportingDocuments") {
        const docs = val;
        if (Array.isArray(docs)) docs.forEach((f) => form.append("supportingDocuments", f));
      } else {
        form.append(key, val || "");
      }
    }

    try {
      const res = await fetch(apiEndpoint, { method: "POST", body: form });
      const data = await res.json();
      if (res.ok) {
        settoastType("success");
        settoastMessage(data.message || "Form submitted successfully");
        toastApi.success(data.message || "Form submitted successfully", "Success");
        setLoaderIcon(false);
        handleReset();
      } else {
        settoastType("error");
        settoastMessage(`Error: ${data.error}`);
        toastApi.error(`Error: ${data.error}`, "Submission Failed");
        setLoaderIcon(false);
      }
    } catch (error: any) {
      settoastType("error");
      settoastMessage(`Error: ${error.message}`);
      toastApi.error(`Error: ${error.message}`, "Submission Error");
      setLoaderIcon(false);
    }
  };

  // Table + pagination state (for both dependants & beneficiaries)
  const [depPage, setDepPage] = useState(1);
  const [benPage, setBenPage] = useState(1);
  const [pageSize, setPageSize] = useState(8);

  const paginate = (arr: any[], page: number, size: number) => {
    const start = (page - 1) * size;
    return arr.slice(start, start + size);
  };

  // Handlers for dependant modal
  const handleOpenDialog = (dependant?: any) => {
    setCurrentDependant(dependant || {
      id: formData.dependantsData.length + 1,
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
    });
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setCurrentDependant(null);
    setErrors({});
  };

  const handleSave = () => {
    const newErrors: any = {};
    if (!currentDependant?.relationship) newErrors.relationship = "Relationship is required";
    if (!currentDependant?.title) newErrors.title = "Title is required";
    if (!currentDependant?.firstName) newErrors.firstName = "First Name is required";
    if (!currentDependant?.middleName) newErrors.middleName = "Middle Name is required";
    if (!currentDependant?.surname) newErrors.surname = "Surname is required";
    if (!currentDependant?.dob) newErrors.dob = "Date of Birth is required";
    if (!currentDependant?.idtypes) newErrors.idtypes = "ID Type is required";
    if (!currentDependant?.idnos) newErrors.idnos = "ID Number is required";
    if (!currentDependant?.gendere) newErrors.gendere = "Gender is required";
    if (!currentDependant?.countrye) newErrors.countrye = "Country is required";
    if (!currentDependant?.cities) newErrors.cities = "City is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;

    setFormData((prev) => {
      const isExisting = prev.dependantsData.some((d) => d.id === currentDependant.id);
      return {
        ...prev,
        dependantsData: isExisting
          ? prev.dependantsData.map((d) => (d.id === currentDependant.id ? { ...d, ...currentDependant } : d))
          : [...prev.dependantsData, currentDependant],
      };
    });

    handleCloseDialog();
    toastApi.success("Dependant saved", "Saved");
  };

  const handleChangeDep = (e: any) => {
    const { name, value } = e.target;
    setCurrentDependant((prev: any) => {
      const updated = { ...prev, [name]: value };

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
        if (isUnder18) dobError = `${updated.relationship} must be at least 18 years old.`;
        else if (isOver88) dobError = `Parent must not be older than 88 years.`;

        setIsAdultRelationshipEligible(!isUnder18 && !isOver88);
        setErrors((prev: any) => ({ ...prev, dob: dobError }));
      }

      if (name !== "dob") setErrors((prev: any) => ({ ...prev, [name]: "" }));

      return updated;
    });
  };

  // Beneficiary modal handlers
  const handleOpenBeneficiaryDialog = (beneficiary?: any) => {
    setCurrentBeneficiary(
      beneficiary || {
        id: formData.beneficiariesData.length + 1,
        relationship: "",
        title: "",
        beneficiary_fullname: "",
        dob: "",
        phone_number: "",
        beneficiary_address: "",
        beneficiary_email: "",
      }
    );
    setOpenBeneficiaryDialog(true);
  };

  const handleCloseBeneficiaryDialog = () => {
    setOpenBeneficiaryDialog(false);
    setCurrentBeneficiary(null);
    setErrors({});
  };

  const handleSaveBeneficiary = () => {
    const newErrors: any = {};
    if (!currentBeneficiary?.relationship) newErrors.relationship = "Relationship is required";
    if (!currentBeneficiary?.title) newErrors.title = "Title is required";
    if (!currentBeneficiary?.beneficiary_fullname) newErrors.beneficiary_fullname = "Beneficiary Full Name is required";
    if (!currentBeneficiary?.dob) newErrors.dob = "Date of Birth is required";
    if (!currentBeneficiary?.phone_number) newErrors.phone_number = "Phone Number is required";
    if (!currentBeneficiary?.beneficiary_address) newErrors.beneficiary_address = "Beneficiary Address is required";
    if (!currentBeneficiary?.beneficiary_email) newErrors.beneficiary_email = "Beneficiary Email is required";

    setErrors(newErrors);
    if (Object.keys(newErrors).length) return;

    setFormData((prev) => {
      const isExisting = prev.beneficiariesData.some((b) => b.id === currentBeneficiary.id);
      const updated = isExisting
        ? prev.beneficiariesData.map((b) => (b.id === currentBeneficiary.id ? { ...b, ...currentBeneficiary } : b))
        : [...prev.beneficiariesData, { ...currentBeneficiary, id: prev.beneficiariesData.length + 1 }];
      return { ...prev, beneficiariesData: updated };
    });

    handleCloseBeneficiaryDialog();
    toastApi.success("Beneficiary saved", "Saved");
  };

  const handleChangeBeneficiary = (e: any) => {
    const { name, value } = e.target;
    setCurrentBeneficiary((prev: any) => {
      const updated = { ...prev, [name]: value };

      if (name === "dob" && ["Parent", "Child"].includes(updated.relationship)) {
        const selectedDate = new Date(value);
        const today = new Date();
        let ageInMonths = (today.getFullYear() - selectedDate.getFullYear()) * 12 + (today.getMonth() - selectedDate.getMonth());
        if (today.getDate() < selectedDate.getDate()) ageInMonths--;

        let dobError = "";
        if (updated.relationship === "Parent" && ageInMonths > 1020) {
          dobError = "Parent must not be older than 88 years.";
          setIsAdultRelationshipEligible(false);
        }
        if (updated.relationship === "Child" && ageInMonths < 1) {
          dobError = "Child must be at least 1 month old.";
        }

        setErrors((prev: any) => ({ ...prev, dob: dobError }));
      }

      if (name !== "dob") setErrors((prev: any) => ({ ...prev, [name]: "" }));

      return updated;
    });
  };

  const handleReset = () => {
    const generateMemberId = () => {
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
      supportingDocuments: [],
      selectedOption: "",
      dependantsData: [],
      beneficiariesData: [],
    });

    setBeneficiaryCount(0);
    setDependentCount(0);
    setFileError(null);
    setErrors({});
    toastApi.info("Form reset to defaults", "Reset");
  };

  const relationshipCounts = (formData.dependantsData || []).reduce((acc: any, dep: any) => {
    acc[dep.relationship] = (acc[dep.relationship] || 0) + 1;
    return acc;
  }, {} as any);

  const isNuclear = formData.family_option === "Nuclear Family";
  const isExtended = formData.family_option === "Extended Family";
  const isIndividual = formData.family_option === "Individual";

  const isSpouseLimitReached = (relationshipCounts["Spouse"] || 0) >= 1;
  const isChildLimitReached = (relationshipCounts["Child"] || 0) >= 4;
  const isSiblingLimitReached = (relationshipCounts["Sibling"] || 0) >= 4;
  const isParentLimitReached = (relationshipCounts["Parent"] || 0) >= 4;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 px-4 py-8">
      {/* toast container */}
      <ToastContainer toasts={toasts} onDismiss={(id) => toastApi.dismiss(id)} />

      <Card className="w-full max-w-4xl shadow-2xl border border-gray-100 rounded-3xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-white py-6 px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image src="/images/logo.jpeg" alt="logo" width={160} height={48} />
              <div>
                <h3 className="text-lg font-semibold text-slate-800">{formData.groupname || "Group"} Member Detail Forms</h3>
                <p className="text-sm text-slate-500">High-end corporate registration — clean | secure | brand</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-50 text-blue-700">{formData.groupnumber || "UNKNOWN"}</Badge>
            </div>
          </div>
        </CardHeader>
        <CardBody className="p-6 bg-white">
          {loaderIcon && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600" />
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Member Reference Number</label>
                <Input name="memberidno" value={formData.memberidno} readOnly className="mt-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Group Name</label>
                <Input name="groupname" value={formData.groupname} readOnly className="mt-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Group Number</label>
                <Input name="groupnumber" value={formData.groupnumber} readOnly className="mt-2" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Title</label>
                <Select name="title" value={formData.title} onChange={handleChange} className="mt-2">
                  {[
                    "Mr",
                    "Master",
                    "Mrs",
                    "Miss",
                    "Ms",
                    "Dr",
                    "Prof",
                  ].map((t) => (
                    <SelectItem key={t} value={t}>
                      {t}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">First Name</label>
                <Input name="firstname" value={formData.firstname} onChange={handleChange} className="mt-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Last Name</label>
                <Input name="lastname" value={formData.lastname} onChange={handleChange} className="mt-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Middle Name</label>
                <Input name="middlename" value={formData.middlename} onChange={handleChange} className="mt-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Identification Type</label>
                <Select name="idtype" value={formData.idtype} onChange={handleChange} className="mt-2">
                  <SelectItem value="National ID">National ID</SelectItem>
                  <SelectItem value="Passport">Passport</SelectItem>
                  <SelectItem value="Birth Certificate">Birth Certificate</SelectItem>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Identification Number</label>
                <Input name="idno" value={formData.idno} onChange={handleChange} className="mt-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Date of Birth</label>
                <Input
                  name="dateofbirth"
                  type="date"
                  value={formData.dateofbirth}
                  onChange={(e: any) => {
                    const selectedDate = new Date(e.target.value);
                    const todayD = new Date();
                    let age = todayD.getFullYear() - selectedDate.getFullYear();
                    const hasHadBirthdayThisYear =
                      todayD.getMonth() > selectedDate.getMonth() ||
                      (todayD.getMonth() === selectedDate.getMonth() && todayD.getDate() >= selectedDate.getDate());
                    const actualAge = hasHadBirthdayThisYear ? age : age - 1;

                    if (actualAge < 18) {
                      toastApi.error("You must be at least 18 years old.");
                      return;
                    }

                    setFormData((prev) => ({ ...prev, dateofbirth: e.target.value }));
                  }}
                  className="mt-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Gender</label>
                <Select name="gender" value={formData.gender} onChange={handleChange} className="mt-2">
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Others">Others</SelectItem>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Country Of Residence</label>
                <Select name="country" value={formData.country} onChange={handleChange} className="mt-2">
                  {countries.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">City Of Residence</label>
                <Input name="city" value={formData.city} onChange={handleChange} className="mt-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Physical / Postal Address</label>
                <Input name="address" value={formData.address} onChange={handleChange} className="mt-2" />
              </div>

              <div className="col-span-1 sm:col-span-1 md:col-span-1">
                <label className="block text-sm font-medium text-slate-700">Mobile Number</label>
                <div className="mt-2">
                  <PhoneInput
                    country={"ke"}
                    value={formData.mobileno}
                    onChange={handlePhoneChange}
                    inputStyle={{ width: "100%", height: 44, borderRadius: 6 }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <Input name="eimail" value={formData.eimail} onChange={handleChange} className="mt-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Family Option</label>
                <Select name="family_option" value={formData.family_option} onChange={handleChange} className="mt-2">
                  <SelectItem value="Individual">Individual</SelectItem>
                  <SelectItem value="Nuclear Family">Nuclear Family</SelectItem>
                  <SelectItem value="Extended Family">Extended Family</SelectItem>
                </Select>
              </div>

              <div className="md:col-span-3">
                {formData.family_option && benefitOptions[formData.family_option] && (
                  <div className="mt-2">
                    <p className="text-sm font-medium text-slate-700 mb-2">Select Annual Benefit</p>
                    <div className="flex flex-col gap-2">
                      {benefitOptions[formData.family_option].map((benefit: string, idx: number) => (
                        <label key={idx} className="flex items-center gap-3">
                          <input
                            type="radio"
                            name="option"
                            value={benefit}
                            checked={formData.option === benefit}
                            onChange={handleChange}
                          />
                          <span className="text-sm">{benefit}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Dependant Section */}
            <div className="pt-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold text-slate-800">Dependant Details</h4>
                <div className="flex items-center gap-3">
                  <Button onClick={() => { if (formData.family_option !== 'Individual') { setDependentCount((p) => p + 1); toastApi.success('New dependant slot created', 'Added'); } else { toastApi.error('Dependants are only allowed for Nuclear or Extended Family.', 'Not allowed'); } }}>
                    Add Dependant
                  </Button>
                </div>
              </div>

              {formData.family_option === "Individual" && (
                <p className="mt-3 text-sm text-red-600 font-semibold">🚫 Dependants are only allowed for Nuclear or Extended Family options.</p>
              )}

              {/* Custom table for dependants */}
              <div className="mt-4 overflow-auto rounded-xl border border-gray-100 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 table-auto">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">No</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Relationship</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Full Name</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">ID Type</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">DOB</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Country</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {paginate(formData.dependantsData || [], depPage, pageSize).map((row: any, idx: number) => (
                      <tr key={row.id || idx} className="hover:bg-slate-50 cursor-pointer" onClick={() => handleOpenDialog(row)}>
                        <td className="px-4 py-3 text-sm text-slate-700">{row.id}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">{row.relationship}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">{`${row.title || ''} ${row.firstName || ''} ${row.middleName || ''} ${row.surname || ''}`}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">{row.idtypes}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">{row.dob}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">{row.countrye}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">
                          <Button variant="ghost" onClick={(e: any) => { e.stopPropagation(); handleOpenDialog(row); }}>Edit</Button>
                        </td>
                      </tr>
                    ))}

                    {(!formData.dependantsData || formData.dependantsData.length === 0) && (
                      <tr>
                        <td colSpan={7} className="px-4 py-6 text-center text-sm text-slate-500">No dependants yet</td>
                      </tr>
                    )}
                  </tbody>
                </table>

                {/* Pagination controls */}
                <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-100">
                  <div className="text-sm text-slate-600">Showing {Math.min((depPage - 1) * pageSize + 1, (formData.dependantsData || []).length)} to {Math.min(depPage * pageSize, (formData.dependantsData || []).length)} of {(formData.dependantsData || []).length} entries</div>
                  <div className="flex items-center gap-2">
                    <Button onClick={() => setDepPage((p) => Math.max(1, p - 1))} disabled={depPage === 1}>Prev</Button>
                    <div className="px-2">{depPage}</div>
                    <Button onClick={() => setDepPage((p) => p + 1)} disabled={depPage * pageSize >= (formData.dependantsData || []).length}>Next</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Dependant edit modal */}
            <Modal open={openDialog} onClose={handleCloseDialog}>
              <ModalHeader>
                <h3 className="text-lg font-semibold">Edit Dependant</h3>
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-slate-700">Relationship</label>
                    <Select name="relationship" value={currentDependant?.relationship || ""} onChange={(e: any) => handleChangeDep(e)} className="mt-2">
                      <SelectItem value="Spouse" disabled={isSpouseLimitReached || !isAdultRelationshipEligible}>Spouse</SelectItem>
                      <SelectItem value="Parent" disabled={isNuclear || isParentLimitReached || !isAdultRelationshipEligible}>Parent</SelectItem>
                      <SelectItem value="Child" disabled={isChildLimitReached}>Child</SelectItem>
                      <SelectItem value="Sibling" disabled={isNuclear || isSiblingLimitReached}>Sibling</SelectItem>
                    </Select>
                    {errors.relationship && <div className="text-sm text-red-600 mt-1">{(errors as any).relationship}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">Title</label>
                    <Select name="title" value={currentDependant?.title || ""} onChange={(e: any) => handleChangeDep(e)} className="mt-2">
                      {["Mr", "Master", "Mrs", "Miss", "Ms", "Dr", "Prof"].map((t) => (
                        <SelectItem key={t} value={t}>{t}</SelectItem>
                      ))}
                    </Select>
                    {errors.title && <div className="text-sm text-red-600 mt-1">{(errors as any).title}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">First Name</label>
                    <Input name="firstName" value={currentDependant?.firstName || ""} onChange={handleChangeDep} className="mt-2" />
                    {errors.firstName && <div className="text-sm text-red-600 mt-1">{(errors as any).firstName}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">Middle Name</label>
                    <Input name="middleName" value={currentDependant?.middleName || ""} onChange={handleChangeDep} className="mt-2" />
                    {errors.middleName && <div className="text-sm text-red-600 mt-1">{(errors as any).middleName}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">Surname</label>
                    <Input name="surname" value={currentDependant?.surname || ""} onChange={handleChangeDep} className="mt-2" />
                    {errors.surname && <div className="text-sm text-red-600 mt-1">{(errors as any).surname}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">ID Type</label>
                    <Select name="idtypes" value={currentDependant?.idtypes || ""} onChange={handleChangeDep} className="mt-2">
                      <SelectItem value="National ID">National ID</SelectItem>
                      <SelectItem value="Passport">Passport</SelectItem>
                      <SelectItem value="Birth Certificate">Birth Certificate</SelectItem>
                    </Select>
                    {errors.idtypes && <div className="text-sm text-red-600 mt-1">{(errors as any).idtypes}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">ID Number</label>
                    <Input name="idnos" value={currentDependant?.idnos || ""} onChange={handleChangeDep} className="mt-2" />
                    {errors.idnos && <div className="text-sm text-red-600 mt-1">{(errors as any).idnos}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">DOB</label>
                    <Input name="dob" type="date" value={currentDependant?.dob || ""} onChange={handleChangeDep} className="mt-2" max={today} />
                    {errors.dob && <div className="text-sm text-red-600 mt-1">{(errors as any).dob}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">Gender</label>
                    <Select name="gendere" value={currentDependant?.gendere || ""} onChange={handleChangeDep} className="mt-2">
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                    </Select>
                    {errors.gendere && <div className="text-sm text-red-600 mt-1">{(errors as any).gendere}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">Country</label>
                    <Select name="countrye" value={currentDependant?.countrye || ""} onChange={handleChangeDep} className="mt-2">
                      {countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                    </Select>
                    {errors.countrye && <div className="text-sm text-red-600 mt-1">{(errors as any).countrye}</div>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700">City</label>
                    <Input name="cities" value={currentDependant?.cities || ""} onChange={handleChangeDep} className="mt-2" />
                    {errors.cities && <div className="text-sm text-red-600 mt-1">{(errors as any).cities}</div>}
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="ghost" onClick={handleCloseDialog}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
              </ModalFooter>
            </Modal>

            {/* Beneficiary section (very similar to dependants) */}
            <div className="pt-4">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold text-slate-800">Beneficiary / Next of Kin Details</h4>
                <div className="flex items-center gap-3">
                  <Button onClick={() => { if (formData.family_option !== 'Individual') { setBeneficiaryCount((p) => p + 1); toastApi.success('New beneficiary slot created', 'Added'); } else { toastApi.error('Beneficiaries are only allowed for Nuclear or Extended Family.', 'Not allowed'); } }}>
                    Add Beneficiary
                  </Button>
                </div>
              </div>

              {formData.family_option === "Individual" && (
                <p className="mt-3 text-sm text-red-600 font-semibold">🚫 Beneficiaries are only allowed for Nuclear or Extended Family options.</p>
              )}

              <div className="mt-4 overflow-auto rounded-xl border border-gray-100 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200 table-auto">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">No</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Relationship</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Full Name</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">DOB</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Phone</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Email</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-100">
                    {paginate(formData.beneficiariesData || [], benPage, pageSize).map((row: any, idx: number) => (
                      <tr key={row.id || idx} className="hover:bg-slate-50 cursor-pointer" onClick={() => handleOpenBeneficiaryDialog(row)}>
                        <td className="px-4 py-3 text-sm text-slate-700">{row.id}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">{row.relationship}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">{row.beneficiary_fullname}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">{row.dob}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">{row.phone_number}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">{row.beneficiary_email}</td>
                        <td className="px-4 py-3 text-sm text-slate-700">
                          <Button variant="ghost" onClick={(e: any) => { e.stopPropagation(); handleOpenBeneficiaryDialog(row); }}>Edit</Button>
                        </td>
                      </tr>
                    ))}

                    {(!formData.beneficiariesData || formData.beneficiariesData.length === 0) && (
                      <tr>
                        <td colSpan={7} className="px-4 py-6 text-center text-sm text-slate-500">No beneficiaries yet</td>
                      </tr>
                    )}
                  </tbody>
                </table>

                <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-100">
                  <div className="text-sm text-slate-600">Showing {Math.min((benPage - 1) * pageSize + 1, (formData.beneficiariesData || []).length)} to {Math.min(benPage * pageSize, (formData.beneficiariesData || []).length)} of {(formData.beneficiariesData || []).length} entries</div>
                  <div className="flex items-center gap-2">
                    <Button onClick={() => setBenPage((p) => Math.max(1, p - 1))} disabled={benPage === 1}>Prev</Button>
                    <div className="px-2">{benPage}</div>
                    <Button onClick={() => setBenPage((p) => p + 1)} disabled={benPage * pageSize >= (formData.beneficiariesData || []).length}>Next</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment info + upload */}
            <div className="mt-6 rounded-xl bg-yellow-50 border-l-4 border-yellow-400 p-4 shadow-sm">
              <p className="font-semibold text-lg">Payment Information</p>
              <p className="mt-2"><strong>Account Name:</strong> CITYBOXCOURIERS</p>
              <p><strong>Account Number:</strong> 70161909</p>
              <p><strong>Short Code:</strong> 55 50 28</p>
              <p className="mt-3 font-semibold text-red-600">⚠️ Please use your Member Reference Number as the Reference Number when making the payment.</p>
              <p className="mt-1 font-semibold text-red-600">⚠️ Policy will be Effective upon receipt of Funds. Please upload proof of Payment.</p>
            </div>

            <div className="mt-4 p-4 border-2 border-blue-100 rounded-xl bg-blue-50 shadow-inner">
              <label className="block text-sm font-medium text-blue-800">📎 Upload Proof Of Payment (PDF, Images Only) <span className="text-red-600">*</span></label>

              <input id="upload-multiple-files" type="file" multiple onChange={handleFileChange} className="hidden" />
              <label htmlFor="upload-multiple-files">
                <Button as="span" className="mt-3">Choose Files</Button>
              </label>

              {fileError && <div className="mt-3 text-sm text-red-600">{fileError}</div>}

              {formData.supportingDocuments?.length > 0 && (
                <ul className="mt-3 text-sm text-slate-700 list-disc list-inside">
                  {formData.supportingDocuments.map((file: any, idx: number) => (
                    <li key={idx}>{file.name}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Submit / Reset */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <Button type="submit" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg">Submit</Button>
              <Button variant="destructive" onClick={handleReset} className="px-8 py-3 rounded-xl">Reset</Button>
            </div>
          </form>

        </CardBody>
      </Card>
    </div>
  );
};

export default KenyansInJapanMemberForm;
