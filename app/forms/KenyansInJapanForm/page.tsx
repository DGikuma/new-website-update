"use client";

import React, { useEffect, useRef, useState } from "react";
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
// country-state-city can be used if installed; left in case you want it.
// import { Country } from "country-state-city";

/* ===========================
   Types
   =========================== */

type ToastType = "success" | "error" | "info" | "warning";

interface ToastModel {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  timeout?: number;
}

export interface DependantType {
  id: number | string;
  relationship: string;
  title: string;
  firstName: string;
  middleName: string;
  surname: string;
  idtypes: string;
  idnos: string;
  dob: string;
  gendere: string;
  countrye: string;
  cities: string;
  [k: string]: any;
}

export interface BeneficiaryType {
  id: number | string;
  relationship: string;
  title: string;
  beneficiary_fullname: string;
  dob: string;
  phone_number: string;
  beneficiary_address: string;
  beneficiary_email: string;
  [k: string]: any;
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
  option?: string;
  dependantsData: DependantType[];
  beneficiariesData: BeneficiaryType[];
  selectedOption?: string;

  medical?: boolean;
  medicalOption?: string;
  principalAge?: string | number;
  ageGroup?: string;
  lastExpense?: boolean;
  lastExpenseOptions?: string[];
  [k: string]: any;
}

/* ===========================
   Toast system (frosted)
   =========================== */

const toastId = () => `t_${Math.random().toString(36).slice(2, 9)}`;

const toastColors: Record<ToastType, string> = {
  success: "text-emerald-700 bg-emerald-50/60 border-emerald-200/40",
  error: "text-rose-700 bg-rose-50/60 border-rose-200/40",
  info: "text-sky-700 bg-sky-50/60 border-sky-200/40",
  warning: "text-amber-700 bg-amber-50/60 border-amber-200/40",
};

const ToastIcon: React.FC<{ type: ToastType }> = ({ type }) => {
  if (type === "success") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (type === "error") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

function useFrostedToasts() {
  const [toasts, setToasts] = useState<ToastModel[]>([]);
  const timers = useRef<Record<string, number>>({});

  const push = (t: { type: ToastType; message: string; title?: string; timeout?: number }) => {
    const id = toastId();
    const model: ToastModel = { id, type: t.type, title: t.title, message: t.message, timeout: t.timeout ?? 4500 };
    setToasts((p) => [model, ...p]);
    if (model.timeout && model.timeout > 0) {
      timers.current[id] = window.setTimeout(() => {
        setToasts((p) => p.filter((tt) => tt.id !== id));
        delete timers.current[id];
      }, model.timeout);
    }
    return id;
  };

  const dismiss = (id: string) => {
    setToasts((p) => p.filter((t) => t.id !== id));
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
            className={`w-[360px] max-w-xs p-3 rounded-2xl border backdrop-blur-md shadow-xl ${toastColors[t.type]}`}
            style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.44), rgba(255,255,255,0.18))" }}
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

/* ===========================
   Component
   =========================== */

const KenyansInJapanMemberForm: React.FC = () => {
  // toasts
  const [toastApi, toasts, setToasts] = useFrostedToasts();

  // visual & state
  const [loaderIcon, setLoaderIcon] = useState<boolean>(false);
  const [paymentPending, setPaymentPending] = useState<boolean>(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState<boolean>(false);

  // modals
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openBeneficiaryDialog, setOpenBeneficiaryDialog] = useState<boolean>(false);

  const [currentDependant, setCurrentDependant] = useState<DependantType | null>(null);
  const [currentBeneficiary, setCurrentBeneficiary] = useState<BeneficiaryType | null>(null);

  const today = new Date().toISOString().split("T")[0];

  // counts
  const [dependentCount, setDependentCount] = useState<number>(0);
  const [beneficiaryCount, setBeneficiaryCount] = useState<number>(0);

  // errors + file errors
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fileError, setFileError] = useState<string | null>(null);

  const [isAdultRelationshipEligible, setIsAdultRelationshipEligible] = useState<boolean>(true);

  // form data
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
    family_option: "",
    option: "",
    dependantsData: [],
    beneficiariesData: [],
    medical: false,
    medicalOption: "",
    principalAge: "",
    ageGroup: "",
    lastExpense: false,
    lastExpenseOptions: [],
  });

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

  // basic country list
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

  /* ---------------------------
     Helpers (age checks, phone, files)
     --------------------------- */

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

    // checkboxes (single)
    if (type === "checkbox" && typeof name === "string") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
      return;
    }

    if (typeof name === "string") {
      setFormData((prev) => ({ ...prev, [name]: value } as any));
    }
  };

  /* =========================
     Merged submit logic (from uploaded file)
     ========================= */

  const getAmountFromMedical = (medicalOption?: string) => {
    if (!medicalOption) return 0;
    const matchKsh = medicalOption.match(/Kshs\s?([\d,]+)/i);
    const matchGbp = medicalOption.match(/GBP\s?([\d,]+)/i);
    if (matchKsh) return parseInt(matchKsh[1].replace(/,/g, ""), 10);
    if (matchGbp) return parseInt(matchGbp[1].replace(/,/g, ""), 10);
    return 0;
  };

  const getAmountFromLastExpense = (lastExpenseOptions: string[] = []) => {
    return lastExpenseOptions.reduce((sum, opt) => {
      const matchKsh = opt.match(/Kshs\s?([\d,]+)/i);
      const matchGbp = opt.match(/GBP\s?([\d,]+)/i);
      if (matchKsh) return sum + parseInt(matchKsh[1].replace(/,/g, ""), 10);
      if (matchGbp) return sum + parseInt(matchGbp[1].replace(/,/g, ""), 10);
      return sum;
    }, 0);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoaderIcon(true);

    try {
      // Beneficiary validation
      const beneficiaryList = formData.beneficiariesData || [];
      const validBeneficiaries = beneficiaryList.filter((b) => b && b.dob);

      for (const ben of validBeneficiaries) {
        if (!isAtLeastOneMonthOld(ben.dob)) {
          toastApi.error(`Beneficiary "${ben.beneficiary_fullname}" must be at least 1 month old.`);
          setLoaderIcon(false);
          return;
        }
      }

      if (validBeneficiaries.length === 1) {
        const age = calculateAge(validBeneficiaries[0].dob);
        if (age < 18) {
          toastApi.error("You must add another beneficiary who is at least 18 years old if the only one is below 18.");
          setLoaderIcon(false);
          return;
        }
      }

      if (validBeneficiaries.length > 1) {
        const hasAdult = validBeneficiaries.some((ben) => calculateAge(ben.dob) >= 18);
        if (!hasAdult) {
          toastApi.error("At least one beneficiary must be 18 years or older.");
          setLoaderIcon(false);
          return;
        }
      }

      // amount calc
      const amount = getAmountFromMedical(formData.medicalOption) + getAmountFromLastExpense(formData.lastExpenseOptions);

      if (!amount || amount <= 0) {
        toastApi.error("❌ Please select a Medical or Last Expense option before submitting.");
        setLoaderIcon(false);
        return;
      }

      // STK push
      const stkResponse = await fetch("https://payments.birdviewinsurance.com/mobile-payments/stk-push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          phoneNumber: formData.mobileno,
          transactionDescription: "KIJA Group Medical and Last Expense Scheme",
          transactionReference: `KIJA${formData.idno}`,
        }),
      });

      const stkResult = await stkResponse.json();
      if (!stkResponse.ok || !stkResult.success) {
        toastApi.error("Failed to initiate payment. Please try again.");
        setLoaderIcon(false);
        return;
      }

      // Poll for confirmation
      setPaymentPending(true);
      setPaymentConfirmed(false);

      const startTime = Date.now();
      const intervalId = window.setInterval(async () => {
        try {
          const confirmRes = await fetch(`/api/payment-status?checkoutRequestID=${encodeURIComponent(stkResult.checkoutRequestID)}`);
          const confirmData = await confirmRes.json();

          if (confirmData.status === "CONFIRMED") {
            clearInterval(intervalId);
            setPaymentPending(false);
            setPaymentConfirmed(true);

            // build formdata and submit
            try {
              const fd = new FormData();
              for (const key in formData) {
                // @ts-ignore
                const val = (formData as any)[key];
                if (key === "dependantsData" || key === "beneficiariesData") {
                  fd.append(key, JSON.stringify(val));
                } else if (key === "supportingDocuments") {
                  const docs = val as File[];
                  if (Array.isArray(docs)) docs.forEach((f) => fd.append("supportingDocuments", f));
                } else {
                  fd.append(key, val ?? "");
                }
              }

              fd.append("selectedMedicalOption", formData.medicalOption || "None");
              fd.append("selectedLastExpenseOptions", (formData.lastExpenseOptions || []).join(", ") || "None");
              fd.append("totalPremium", String(amount));

              const res = await fetch("/api/kenyans-in-south-wales-member-form", { method: "POST", body: fd });
              const data = await res.json();
              if (res.ok) {
                toastApi.success(data?.message || "Form submitted successfully", "Success");
                handleReset();
              } else {
                toastApi.error(`Error: ${data?.error || "Unknown error"}`, "Submission Failed");
              }
            } catch (submitErr: any) {
              toastApi.error(`Error submitting form: ${submitErr?.message || submitErr}`, "Submission Error");
            } finally {
              setLoaderIcon(false);
            }
          }

          if (["CANCELLED", "FAILED", "STK_PUSH_TIMEOUT"].includes(confirmData.status)) {
            clearInterval(intervalId);
            setPaymentPending(false);
            setPaymentConfirmed(false);
            toastApi.error("❌ Payment was cancelled or failed. Please try again.");
            setLoaderIcon(false);
          }

          if (Date.now() - startTime > 120000) {
            clearInterval(intervalId);
            setPaymentPending(false);
            toastApi.error("⏱ Payment confirmation timed out. Please try again.");
            setLoaderIcon(false);
          }
        } catch (pollErr: any) {
          clearInterval(intervalId);
          setPaymentPending(false);
          toastApi.error(`Error checking payment: ${pollErr?.message || pollErr}`);
          setLoaderIcon(false);
        }
      }, 5000);
    } catch (err: any) {
      toastApi.error(`Error: ${err?.message || err}`, "Submission Error");
      setLoaderIcon(false);
    }
  };

  /* =========================
     Dependants modal logic
     ========================= */

  const handleOpenDialog = (dependant?: DependantType | null) => {
    setCurrentDependant(dependant || {
      id: (formData.dependantsData?.length || 0) + 1,
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

  const handleSaveDependant = () => {
    const newErrors: Record<string, string> = {};
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
      const exists = prev.dependantsData.some((d) => d.id === currentDependant!.id);
      return {
        ...prev,
        dependantsData: exists
          ? prev.dependantsData.map((d) => (d.id === currentDependant!.id ? { ...d, ...currentDependant } : d))
          : [...(prev.dependantsData || []), currentDependant!],
      };
    });

    toastApi.success("Dependant saved", "Saved");
    handleCloseDialog();
  };

  const handleChangeDep = (e: any) => {
    const { name, value } = e.target;
    setCurrentDependant((prev: any) => {
      const updated = { ...prev, [name]: value };

      if (name === "dob" && ["Spouse", "Parent"].includes(updated.relationship)) {
        const selectedDate = new Date(value);
        const todayD = new Date();
        let age = todayD.getFullYear() - selectedDate.getFullYear();
        const hasHadBirthday =
          todayD.getMonth() > selectedDate.getMonth() ||
          (todayD.getMonth() === selectedDate.getMonth() && todayD.getDate() >= selectedDate.getDate());
        const actualAge = hasHadBirthday ? age : age - 1;
        const isUnder18 = actualAge < 18;
        const isOver88 = updated.relationship === "Parent" && actualAge > 88;
        let dobError = "";
        if (isUnder18) dobError = `${updated.relationship} must be at least 18 years old.`;
        else if (isOver88) dobError = `Parent must not be older than 88 years.`;

        setIsAdultRelationshipEligible(!isUnder18 && !isOver88);
        setErrors((prevErrs) => ({ ...prevErrs, dob: dobError }));
      } else {
        setErrors((prevErrs) => ({ ...prevErrs, [name]: "" }));
      }

      return updated;
    });
  };

  /* =========================
     Beneficiary modal logic
     ========================= */

  const handleOpenBeneficiaryDialog = (beneficiary?: BeneficiaryType | null) => {
    setCurrentBeneficiary(beneficiary || {
      id: (formData.beneficiariesData?.length || 0) + 1,
      relationship: "",
      title: "",
      beneficiary_fullname: "",
      dob: "",
      phone_number: "",
      beneficiary_address: "",
      beneficiary_email: "",
    });
    setOpenBeneficiaryDialog(true);
  };

  const handleCloseBeneficiaryDialog = () => {
    setOpenBeneficiaryDialog(false);
    setCurrentBeneficiary(null);
    setErrors({});
  };

  const handleSaveBeneficiary = () => {
    const newErrors: Record<string, string> = {};
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
      const exists = prev.beneficiariesData.some((b) => b.id === currentBeneficiary!.id);
      const updated = exists
        ? prev.beneficiariesData.map((b) => (b.id === currentBeneficiary!.id ? { ...b, ...currentBeneficiary } : b))
        : [...(prev.beneficiariesData || []), { ...currentBeneficiary!, id: prev.beneficiariesData.length + 1 }];

      return { ...prev, beneficiariesData: updated };
    });

    toastApi.success("Beneficiary saved", "Saved");
    handleCloseBeneficiaryDialog();
  };

  const handleChangeBeneficiary = (e: any) => {
    const { name, value } = e.target;
    setCurrentBeneficiary((prev: any) => {
      const updated = { ...prev, [name]: value };

      if (name === "dob" && ["Parent", "Child"].includes(updated.relationship)) {
        const selectedDate = new Date(value);
        const todayD = new Date();
        let ageInMonths = (todayD.getFullYear() - selectedDate.getFullYear()) * 12 + (todayD.getMonth() - selectedDate.getMonth());
        if (todayD.getDate() < selectedDate.getDate()) ageInMonths--;

        let dobError = "";
        if (updated.relationship === "Parent" && ageInMonths > 1020) {
          dobError = "Parent must not be older than 88 years.";
          setIsAdultRelationshipEligible(false);
        }
        if (updated.relationship === "Child" && ageInMonths < 1) {
          dobError = "Child must be at least 1 month old.";
        }

        setErrors((prevErrs) => ({ ...prevErrs, dob: dobError }));
      } else {
        setErrors((prevErrs) => ({ ...prevErrs, [name]: "" }));
      }

      return updated;
    });
  };

  /* =========================
     Reset
     ========================= */

  const handleReset = () => {
    const generateMemberId = () => {
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
      family_option: "",
      option: "",
      supportingDocuments: [],
      dependantsData: [],
      beneficiariesData: [],
      selectedOption: "",
      medical: false,
      principalAge: "",
      ageGroup: "",
      medicalOption: "",
      lastExpense: false,
      lastExpenseOptions: [],
    });

    setBeneficiaryCount(0);
    setDependentCount(0);
    setFileError(null);
    setErrors({});
    toastApi.info("Form reset to defaults", "Reset");
  };

  /* =========================
     Relationship constraints & UI flags
     ========================= */

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

  /* =========================
     Render
     ========================= */

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 flex items-center justify-center p-6">
      {/* Toast container */}
      <ToastContainer toasts={toasts} onDismiss={(id) => toastApi.dismiss(id)} />

      {/* Loader overlay */}
      {loaderIcon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600" />
        </div>
      )}

      <Card className="w-full max-w-5xl shadow-2xl rounded-3xl overflow-hidden border border-gray-100">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-white py-6 px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image src="/images/logo.jpeg" alt="logo" width={160} height={48} />
              <div>
                <h3 className="text-lg font-semibold text-slate-800">{formData.groupname || "Group"} Member Detail Forms</h3>
                <p className="text-sm text-slate-500">High-end corporate registration — clean • secure • brand</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-blue-50 text-blue-700 px-3 py-1 rounded-lg">{formData.groupnumber || "UNKNOWN"}</Badge>
            </div>
          </div>
        </CardHeader>

        <CardBody className="p-6 bg-white">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Top fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Member Reference Number</label>
                <Input value={formData.memberidno} readOnly className="mt-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Group Name</label>
                <Input value={formData.groupname} readOnly className="mt-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Group Number</label>
                <Input value={formData.groupnumber} readOnly className="mt-2" />
              </div>
            </div>

            {/* Personal details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Title</label>
                <Select value={formData.title} name="title" onChange={(val: any) => setFormData((p) => ({ ...p, title: val }))} className="mt-2">
                  {["Mr", "Master", "Mrs", "Miss", "Ms", "Dr", "Prof"].map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">First Name</label>
                <Input name="firstname" value={formData.firstname} onChange={(e: any) => handleChange(e)} className="mt-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Last Name</label>
                <Input name="lastname" value={formData.lastname} onChange={(e: any) => handleChange(e)} className="mt-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Middle Name</label>
                <Input name="middlename" value={formData.middlename} onChange={(e: any) => handleChange(e)} className="mt-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Identification Type</label>
                <Select value={formData.idtype} name="idtype" onChange={(val: any) => setFormData((p) => ({ ...p, idtype: val }))} className="mt-2">
                  <SelectItem value="National ID">National ID</SelectItem>
                  <SelectItem value="Passport">Passport</SelectItem>
                  <SelectItem value="Birth Certificate">Birth Certificate</SelectItem>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Identification Number</label>
                <Input name="idno" value={formData.idno} onChange={(e: any) => handleChange(e)} className="mt-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Date of Birth</label>
                <Input
                  type="date"
                  name="dateofbirth"
                  value={formData.dateofbirth}
                  onChange={(ev: any) => {
                    const v = ev.target.value;
                    const selectedDate = new Date(v);
                    const todayD = new Date();
                    let age = todayD.getFullYear() - selectedDate.getFullYear();
                    const has = todayD.getMonth() > selectedDate.getMonth() || (todayD.getMonth() === selectedDate.getMonth() && todayD.getDate() >= selectedDate.getDate());
                    const actualAge = has ? age : age - 1;
                    if (actualAge < 18) {
                      toastApi.error("You must be at least 18 years old.");
                      return;
                    }
                    setFormData((prev) => ({ ...prev, dateofbirth: v }));
                  }}
                  className="mt-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Gender</label>
                <Select value={formData.gender} name="gender" onChange={(val: any) => setFormData((p) => ({ ...p, gender: val }))} className="mt-2">
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Others">Others</SelectItem>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Country Of Residence</label>
                <Select value={formData.country} name="country" onChange={(val: any) => setFormData((p) => ({ ...p, country: val }))} className="mt-2">
                  {countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">City Of Residence</label>
                <Input name="city" value={formData.city} onChange={(e: any) => handleChange(e)} className="mt-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Physical / Postal Address</label>
                <Input name="address" value={formData.address} onChange={(e: any) => handleChange(e)} className="mt-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Mobile Number</label>
                <div className="mt-2">
                  <PhoneInput country={"ke"} value={formData.mobileno} onChange={handlePhoneChange} inputStyle={{ width: "100%", height: 44, borderRadius: 6 }} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <Input name="eimail" value={formData.eimail} onChange={(e: any) => handleChange(e)} className="mt-2" />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Family Option</label>
                <Select value={formData.family_option || ""} name="family_option" onChange={(val: any) => {
                  // reuse your existing logic but simplified
                  setFormData((prev) => ({ ...prev, family_option: val, option: "" }));
                }} className="mt-2">
                  <SelectItem value="Individual">Individual</SelectItem>
                  <SelectItem value="Nuclear Family">Nuclear Family</SelectItem>
                  <SelectItem value="Extended Family">Extended Family</SelectItem>
                </Select>
              </div>

              <div className="md:col-span-3">
                {formData.family_option && (
                  <div className="mt-2">
                    <p className="text-sm font-medium text-slate-700 mb-2">Select Annual Benefit</p>
                    <div className="flex flex-col gap-2">
                      {(formData.family_option && {
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
                      } as any)[formData.family_option].map((benefit: string, idx: number) => (
                        <label key={idx} className="flex items-center gap-3">
                          <input type="radio" name="option" value={benefit} checked={formData.option === benefit} onChange={(e) => handleChange(e)} />
                          <span className="text-sm">{benefit}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* COVER OPTIONS CARD (medical & last expense) */}
            <div className="rounded-xl p-4 shadow-lg bg-gradient-to-b from-white to-slate-50 border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="text-lg font-semibold text-slate-800">Cover Options</h4>
                  <p className="text-sm text-slate-500">Select optional covers and plans — modern, corporate rates shown below.</p>
                </div>
                <div className="flex items-center gap-2">
                  <Avatar size="sm" className="bg-blue-50 text-blue-700">£</Avatar>
                  <span className="text-sm text-slate-500">Secure • Corporate • Clear pricing</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="col-span-1">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={!!formData.medical} onChange={(e) => setFormData((p) => ({ ...p, medical: e.target.checked }))} />
                    <span className="font-semibold">Medical</span>
                  </label>

                  {formData.medical && (
                    <div className="mt-3 space-y-2">
                      <Input name="principalAge" type="number" label="Principal's Age" value={String(formData.principalAge || "")} onChange={(e: any) => setFormData((p) => ({ ...p, principalAge: e.target.value }))} />
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" onClick={() => setFormData((p) => ({ ...p, ageGroup: "<70", medicalOption: "" }))}> &lt; 70</Button>
                        <Button variant="ghost" onClick={() => setFormData((p) => ({ ...p, ageGroup: ">70", medicalOption: "" }))}> &gt; 70</Button>
                      </div>
                    </div>
                  )}
                </div>

                <div className="col-span-1">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" checked={!!formData.lastExpense} onChange={(e) => setFormData((p) => ({ ...p, lastExpense: e.target.checked, lastExpenseOptions: [] }))} />
                    <span className="font-semibold">Last Expense</span>
                  </label>

                  {formData.lastExpense && (
                    <div className="mt-3 space-y-2">
                      {[
                        {
                          id: "A",
                          label: "Option A — 70-75 Years (Breakdown)",
                          items: [
                            "Principal - Kshs 1",
                            "Spouse - Kshs 46,104",
                            "Child - Kshs 6,429",
                          ],
                        },
                        {
                          id: "B",
                          label: "Option B — 76-80 Years (Breakdown)",
                          items: [
                            "Principal - Kshs 76,695",
                            "Spouse - Kshs 55,226",
                            "Child - Kshs 6,429",
                          ],
                        },
                      ].map((opt) => {
                        const optionValue = opt.label;
                        const checked = (formData.lastExpenseOptions || []).includes(optionValue);
                        return (
                          <div key={opt.id} className={`p-3 rounded-lg border ${checked ? "border-blue-200 bg-blue-50/30" : "border-gray-100 bg-white"}`}>
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-semibold">{opt.label}</div>
                                <div className="text-xs text-slate-500">{opt.items.join(" • ")}</div>
                              </div>
                              <div>
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={(e) => {
                                    setFormData((p) => {
                                      const set = new Set(p.lastExpenseOptions || []);
                                      if (e.target.checked) set.add(optionValue);
                                      else set.delete(optionValue);
                                      return { ...p, lastExpenseOptions: Array.from(set) };
                                    });
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="col-span-1">
                  <div className="text-sm text-slate-600">Summary</div>
                  <div className="mt-3 text-sm text-slate-700">
                    Selected medical: <strong>{formData.medicalOption || "none"}</strong>
                    <br />
                    Selected last-expense: <strong>{(formData.lastExpenseOptions || []).length ? (formData.lastExpenseOptions || []).join(", ") : "none"}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* Dependants section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl font-semibold text-slate-800">Dependant Details</h4>
                <div className="flex items-center gap-3">
                  <Button onClick={() => {
                    if (formData.family_option !== "Individual") {
                      setDependentCount((p) => p + 1);
                      toastApi.success("New dependant slot created", "Added");
                    } else {
                      toastApi.error("Dependants are only allowed for Nuclear or Extended Family.", "Not allowed");
                    }
                  }}>Add Dependant</Button>
                </div>
              </div>

              {formData.family_option === "Individual" && <div className="text-sm text-red-600 mb-3">🚫 Dependants are only allowed for Nuclear or Extended Family options.</div>}

              <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm mb-6">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">No</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Relationship</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Full Name</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">ID Type</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">DOB</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Country</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {(formData.dependantsData || []).length === 0 ? (
                      <tr>
                        <td colSpan={7} className="text-center text-sm text-slate-500 py-6">No dependants yet</td>
                      </tr>
                    ) : (
                      (formData.dependantsData || []).map((d, idx) => (
                        <motion.tr
                          key={d.id || idx}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.01 }}
                          className="hover:bg-slate-50 cursor-pointer"
                          onClick={() => handleOpenDialog(d)}
                        >
                          <td className="px-4 py-3">{d.id}</td>
                          <td className="px-4 py-3">{d.relationship}</td>
                          <td className="px-4 py-3">{`${d.title || ""} ${d.firstName || ""} ${d.middleName || ""} ${d.surname || ""}`}</td>
                          <td className="px-4 py-3">{d.idtypes}</td>
                          <td className="px-4 py-3">{d.dob}</td>
                          <td className="px-4 py-3">{d.countrye}</td>
                          <td className="px-4 py-3">
                            <Button
                              variant="ghost"
                              onClick={(ev: any) => {
                                ev.stopPropagation();
                                handleOpenDialog(d);
                              }}
                            >
                              Edit
                            </Button>
                          </td>
                        </motion.tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Dependant Modal (HeroUI Modal with Framer Motion) */}
            <AnimatePresence>
              {openDialog && currentDependant && (
                <Modal open={openDialog} onClose={handleCloseDialog}>
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>
                    <ModalHeader>
                      <div className="text-lg font-semibold">Edit Dependant</div>
                    </ModalHeader>
                    <ModalBody>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-slate-700">Relationship</label>
                          <Select value={currentDependant.relationship || ""} onChange={(val: any) => handleChangeDep({ target: { name: "relationship", value: val } })} className="mt-2">
                            <SelectItem value="Spouse" disabled={isSpouseLimitReached || !isAdultRelationshipEligible}>Spouse</SelectItem>
                            <SelectItem value="Parent" disabled={isNuclear || isParentLimitReached || !isAdultRelationshipEligible}>Parent</SelectItem>
                            <SelectItem value="Child" disabled={isChildLimitReached}>Child</SelectItem>
                            <SelectItem value="Sibling" disabled={isNuclear || isSiblingLimitReached}>Sibling</SelectItem>
                          </Select>
                          {errors.relationship && <div className="text-sm text-red-600 mt-1">{errors.relationship}</div>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700">Title</label>
                          <Select value={currentDependant.title || ""} onChange={(val: any) => handleChangeDep({ target: { name: "title", value: val } })} className="mt-2">
                            {["Mr", "Master", "Mrs", "Miss", "Ms", "Dr", "Prof"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                          </Select>
                          {errors.title && <div className="text-sm text-red-600 mt-1">{errors.title}</div>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700">First Name</label>
                          <Input value={currentDependant.firstName || ""} name="firstName" onChange={(ev: any) => handleChangeDep({ target: { name: "firstName", value: ev.target.value } })} className="mt-2" />
                          {errors.firstName && <div className="text-sm text-red-600 mt-1">{errors.firstName}</div>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700">Middle Name</label>
                          <Input value={currentDependant.middleName || ""} name="middleName" onChange={(ev: any) => handleChangeDep({ target: { name: "middleName", value: ev.target.value } })} className="mt-2" />
                          {errors.middleName && <div className="text-sm text-red-600 mt-1">{errors.middleName}</div>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700">Surname</label>
                          <Input value={currentDependant.surname || ""} name="surname" onChange={(ev: any) => handleChangeDep({ target: { name: "surname", value: ev.target.value } })} className="mt-2" />
                          {errors.surname && <div className="text-sm text-red-600 mt-1">{errors.surname}</div>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700">ID Type</label>
                          <Select value={currentDependant.idtypes || ""} onChange={(val: any) => handleChangeDep({ target: { name: "idtypes", value: val } })} className="mt-2">
                            <SelectItem value="National ID">National ID</SelectItem>
                            <SelectItem value="Passport">Passport</SelectItem>
                            <SelectItem value="Birth Certificate">Birth Certificate</SelectItem>
                          </Select>
                          {errors.idtypes && <div className="text-sm text-red-600 mt-1">{errors.idtypes}</div>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700">ID Number</label>
                          <Input value={currentDependant.idnos || ""} name="idnos" onChange={(ev: any) => handleChangeDep({ target: { name: "idnos", value: ev.target.value } })} className="mt-2" />
                          {errors.idnos && <div className="text-sm text-red-600 mt-1">{errors.idnos}</div>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700">DOB</label>
                          <Input type="date" value={currentDependant.dob || ""} name="dob" onChange={(ev: any) => handleChangeDep({ target: { name: "dob", value: ev.target.value } })} className="mt-2" max={today} />
                          {errors.dob && <div className="text-sm text-red-600 mt-1">{errors.dob}</div>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700">Gender</label>
                          <Select value={currentDependant.gendere || ""} onChange={(val: any) => handleChangeDep({ target: { name: "gendere", value: val } })} className="mt-2">
                            <SelectItem value="Male">Male</SelectItem>
                            <SelectItem value="Female">Female</SelectItem>
                          </Select>
                          {errors.gendere && <div className="text-sm text-red-600 mt-1">{errors.gendere}</div>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700">Country</label>
                          <Select value={currentDependant.countrye || ""} onChange={(val: any) => handleChangeDep({ target: { name: "countrye", value: val } })} className="mt-2">
                            {countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                          </Select>
                          {errors.countrye && <div className="text-sm text-red-600 mt-1">{errors.countrye}</div>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700">City</label>
                          <Input value={currentDependant.cities || ""} name="cities" onChange={(ev: any) => handleChangeDep({ target: { name: "cities", value: ev.target.value } })} className="mt-2" />
                          {errors.cities && <div className="text-sm text-red-600 mt-1">{errors.cities}</div>}
                        </div>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button variant="ghost" onClick={handleCloseDialog}>Cancel</Button>
                      <Button onClick={handleSaveDependant}>Save</Button>
                    </ModalFooter>
                  </motion.div>
                </Modal>
              )}
            </AnimatePresence>

            {/* Beneficiaries */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xl font-semibold text-slate-800">Beneficiary / Next of Kin Details</h4>
                <div>
                  <Button onClick={() => {
                    if (formData.family_option !== "Individual") {
                      setBeneficiaryCount((p) => p + 1);
                      toastApi.success("New beneficiary slot created", "Added");
                    } else {
                      toastApi.error("Beneficiaries are only allowed for Nuclear or Extended Family.", "Not allowed");
                    }
                  }}>Add Beneficiary</Button>
                </div>
              </div>

              {formData.family_option === "Individual" && <div className="text-sm text-red-600 mb-3">🚫 Beneficiaries are only allowed for Nuclear or Extended Family options.</div>}

              <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">No</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Relationship</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Full Name</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">DOB</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Phone</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Email</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-700">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {(formData.beneficiariesData || []).length === 0 ? (
                      <tr>
                        <td colSpan={7} className="text-center text-sm text-slate-500 py-6">No beneficiaries yet</td>
                      </tr>
                    ) : (
                      (formData.beneficiariesData || []).map((b, idx) => (
                        <motion.tr
                          key={b.id || idx}
                          initial={{ opacity: 0, y: 6 }}
                          animate={{ opacity: 1, y: 0 }}
                          whileHover={{ scale: 1.01 }}
                          className="hover:bg-slate-50 cursor-pointer"
                          onClick={() => handleOpenBeneficiaryDialog(b)}
                        >
                          <td className="px-4 py-3">{b.id}</td>
                          <td className="px-4 py-3">{b.relationship}</td>
                          <td className="px-4 py-3">{b.beneficiary_fullname}</td>
                          <td className="px-4 py-3">{b.dob}</td>
                          <td className="px-4 py-3">{b.phone_number}</td>
                          <td className="px-4 py-3">{b.beneficiary_email}</td>
                          <td className="px-4 py-3">
                            <Button
                              variant="ghost"
                              onClick={(ev: any) => {
                                ev.stopPropagation();
                                handleOpenBeneficiaryDialog(b);
                              }}
                            >
                              Edit
                            </Button>
                          </td>
                        </motion.tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Beneficiary Modal */}
            <AnimatePresence>
              {openBeneficiaryDialog && currentBeneficiary && (
                <Modal open={openBeneficiaryDialog} onClose={handleCloseBeneficiaryDialog}>
                  <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 12 }}>
                    <ModalHeader>
                      <div className="text-lg font-semibold">Edit Beneficiary</div>
                    </ModalHeader>
                    <ModalBody>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium text-slate-700">Relationship</label>
                          <Select value={currentBeneficiary.relationship || ""} onChange={(val: any) => handleChangeBeneficiary({ target: { name: "relationship", value: val } })} className="mt-2">
                            <SelectItem value="Spouse">Spouse</SelectItem>
                            <SelectItem value="Parent">Parent</SelectItem>
                            <SelectItem value="Child">Child</SelectItem>
                            <SelectItem value="Sibling">Sibling</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </Select>
                          {errors.relationship && <div className="text-sm text-red-600 mt-1">{errors.relationship}</div>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700">Title</label>
                          <Select value={currentBeneficiary.title || ""} onChange={(val: any) => handleChangeBeneficiary({ target: { name: "title", value: val } })} className="mt-2">
                            {["Mr", "Master", "Mrs", "Miss", "Ms", "Dr", "Prof"].map((t) => <SelectItem key={t} value={t}>{t}</SelectItem>)}
                          </Select>
                          {errors.title && <div className="text-sm text-red-600 mt-1">{errors.title}</div>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700">Beneficiary Full Name</label>
                          <Input value={currentBeneficiary.beneficiary_fullname || ""} onChange={(ev: any) => handleChangeBeneficiary({ target: { name: "beneficiary_fullname", value: ev.target.value } })} className="mt-2" />
                          {errors.beneficiary_fullname && <div className="text-sm text-red-600 mt-1">{errors.beneficiary_fullname}</div>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700">DOB</label>
                          <Input type="date" value={currentBeneficiary.dob || ""} onChange={(ev: any) => handleChangeBeneficiary({ target: { name: "dob", value: ev.target.value } })} max={today} className="mt-2" />
                          {errors.dob && <div className="text-sm text-red-600 mt-1">{errors.dob}</div>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700">Phone Number</label>
                          <Input value={currentBeneficiary.phone_number || ""} onChange={(ev: any) => handleChangeBeneficiary({ target: { name: "phone_number", value: ev.target.value } })} className="mt-2" />
                          {errors.phone_number && <div className="text-sm text-red-600 mt-1">{errors.phone_number}</div>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700">Beneficiary Address</label>
                          <Input value={currentBeneficiary.beneficiary_address || ""} onChange={(ev: any) => handleChangeBeneficiary({ target: { name: "beneficiary_address", value: ev.target.value } })} className="mt-2" />
                          {errors.beneficiary_address && <div className="text-sm text-red-600 mt-1">{errors.beneficiary_address}</div>}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700">Beneficiary Email</label>
                          <Input value={currentBeneficiary.beneficiary_email || ""} onChange={(ev: any) => handleChangeBeneficiary({ target: { name: "beneficiary_email", value: ev.target.value } })} className="mt-2" />
                          {errors.beneficiary_email && <div className="text-sm text-red-600 mt-1">{errors.beneficiary_email}</div>}
                        </div>
                      </div>
                    </ModalBody>
                    <ModalFooter>
                      <Button variant="ghost" onClick={handleCloseBeneficiaryDialog}>Cancel</Button>
                      <Button onClick={handleSaveBeneficiary}>Save</Button>
                    </ModalFooter>
                  </motion.div>
                </Modal>
              )}
            </AnimatePresence>

            {/* Submit & Reset */}
            <div className="flex items-center justify-center gap-6 mt-8">
              <Button type="submit" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg">
                Submit
              </Button>
              <Button onClick={handleReset} className="px-8 py-3 rounded-xl bg-red-50 text-red-700 hover:bg-red-100">
                Reset
              </Button>
            </div>

            {/* Payment status small hints */}
            <div className="text-center mt-3">
              {paymentPending && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-blue-600">Waiting for payment confirmation… Please check your phone 📱</motion.p>}
              {paymentConfirmed && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-600">Payment confirmed ✅ Submitting form…</motion.p>}
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default KenyansInJapanMemberForm;
