"use client";

import React, { useState } from "react";
import {
    Input,
    Textarea,
    Button,
    Card,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    toast,
} from "@heroui/react";
import Image from "next/image";
import { Loader2, Check } from "lucide-react";
import type { FormdataType } from "./types"; // ensure these fields match
import { ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";

// Initial Form Data
const initialForm = (): FormdataType => ({
    insuredName: "",
    phone: "",
    address: "",
    occupation: "",
    age: "",
    accidentDate: "",
    accidentTime: "",
    accidentPlace: "",
    accidentDescription: "",
    injuries: "",
    previousInjury: "",
    confinedBed: "",
    confinedHouse: "",
    doctorDetails: "",
    pastTreatment: "",
    witnesses: "",
    otherInsurance: "",
    declarationDate: "",
    declarationName: "",
    declarationSignature: "",
    patientName: "",

    // Medical Section
    doctorName: "",
    doctorRegNo: "",
    hospital: "",
    examDate: "",
    medicalInjuries: "",
    disability: "",
    incapacityPeriod: "",
    disabilityAssessment: "",
    previousDefects: "",
    doctorSignature: "",
    doctorSignatureDate: "",
    qualifications: "",
    doctorPhone: "",
    medicalDate: "",
});

export default function PersonalAccidentClaimForm(): JSX.Element {
    const [formData, setFormData] = useState<FormdataType>(initialForm());
    const [loading, setLoading] = useState(false);
    const [resetOpen, setResetOpen] = useState(false);
    const [step, setStep] = useState(1);

    // Input change handler
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        if (name === "age") {
            const n = value === "" ? "" : Number(value);
            setFormData((prev) => ({ ...prev, [name]: n }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleBack = () => setStep(1);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch("/api/personal-accident-claim", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (res.ok) {
                toast({
                    title: "✅ Claim submitted",
                    description:
                        data.message || "Your claim was submitted successfully.",
                    color: "success",
                    variant: "solid",
                    placement: "top-right",
                });
                setFormData(initialForm());
                setStep(1);
            } else {
                toast({
                    title: "❌ Submission failed",
                    description:
                        data.error || "Unable to submit claim — please try again.",
                    color: "danger",
                    variant: "solid",
                    placement: "top-right",
                });
            }
        } catch (err: any) {
            toast({
                title: "⚠️ Network error",
                description:
                    err?.message || "Please check your connection and try again.",
                color: "danger",
                variant: "solid",
                placement: "top-right",
            });
        } finally {
            setLoading(false);
        }
    };

    const confirmReset = () => setResetOpen(true);
    const doReset = () => {
        setFormData(initialForm());
        setStep(1);
        setResetOpen(false);
        toast({
            title: "Reset",
            description: "Form cleared.",
            color: "success",
            variant: "solid",
            placement: "top-right",
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-[url('/images/backdrop2.png')] bg-cover bg-center bg-no-repeat">
            {/* Loading overlay */}
            {loading && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
                    <Loader2 className="h-16 w-16 text-white animate-spin" />
                </div>
            )}

            <Card className="w-full max-w-4xl shadow-2xl rounded-3xl border border-slate-200/40 bg-white/90 backdrop-blur-sm overflow-hidden">
                {/* Header */}
                <div className="flex items-center gap-4 p-8 bg-gradient-to-r from-slate-50 to-white/60">
                    <Image src="/images/logo.jpeg" alt="Logo" width={150} height={44} />
                    <div className="flex-1 text-center">
                        <p className="text-2xl text-slate-500 mt-1">
                            Personal Accident Claim Form
                        </p>
                    </div>
                </div>

                {/* Step Dots */}
                <div className="flex justify-center items-center gap-6 py-6">
                    {[1, 2].map((s) => (
                        <div
                            key={s}
                            className={`flex items-center gap-2 transition-all ${step === s ? "scale-110" : "opacity-50"
                                }`}
                        >
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-colors ${step >= s
                                    ? "bg-blue-600 text-white"
                                    : "bg-slate-200 text-slate-600"
                                    }`}
                            >
                                {step > s ? <Check size={18} /> : s}
                            </div>
                            {s < 2 && <div className="w-12 h-1 bg-slate-300 rounded-full" />}
                        </div>
                    ))}
                </div>

                {/* Body */}
                <div className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* ---------------- STEP 1 ---------------- */}
                        {step === 1 && (
                            <>
                                <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <Input
                                        isRequired
                                        label="Name of Insured"
                                        name="insuredName"
                                        value={formData.insuredName}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        isRequired
                                        label="Phone Number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        label="Occupation"
                                        name="occupation"
                                        value={formData.occupation}
                                        onChange={handleChange}
                                    />
                                    <Textarea
                                        label="Address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        rows={2}
                                        className="md:col-span-2"
                                    />
                                    <Input
                                        label="Age"
                                        name="age"
                                        type="number"
                                        value={formData.age === "" ? "" : String(formData.age)}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        label="Date of Accident"
                                        type="date"
                                        name="accidentDate"
                                        value={formData.accidentDate}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        label="Time of Accident"
                                        type="time"
                                        name="accidentTime"
                                        value={formData.accidentTime}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        label="Place of Accident"
                                        name="accidentPlace"
                                        value={formData.accidentPlace}
                                        onChange={handleChange}
                                        className="md:col-span-2"
                                    />
                                </section>

                                <section className="space-y-4">
                                    <Textarea
                                        label="How did the accident happen?"
                                        name="accidentDescription"
                                        value={formData.accidentDescription}
                                        onChange={handleChange}
                                        rows={3}
                                    />
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <Textarea
                                            label="Injuries sustained"
                                            name="injuries"
                                            value={formData.injuries}
                                            onChange={handleChange}
                                            rows={2}
                                        />
                                        <Textarea
                                            label="Previous injury on same body part"
                                            name="previousInjury"
                                            value={formData.previousInjury}
                                            onChange={handleChange}
                                            rows={2}
                                        />
                                    </div>
                                </section>

                                <div className="flex justify-center gap-4 pt-6">
                                    <Button onPress={confirmReset} color="danger" className="w-full md:w-auto px-8 py-3 rounded-full shadow-md text-white font-semibold">
                                        Reset
                                    </Button>
                                    <Button
                                        color="primary"
                                        onClick={() => setStep(2)}
                                        className="w-full md:w-auto px-8 py-3 rounded-full shadow-md text-white font-semibold flex items-center justify-center gap-2 group bg-gradient-to-r from-blue-600 to-blue-800"
                                    >
                                        Next
                                        <ArrowRight className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                                    </Button>
                                </div>
                            </>
                        )}

                        {/* ---------------- STEP 2: MEDICAL CERTIFICATE ---------------- */}
                        {step === 2 && (
                            <Card className="p-6 space-y-6 shadow-lg">
                                <h2 className="text-xl font-semibold text-gray-800">
                                    Step 2: Medical Certificate
                                </h2>

                                {/* Doctor Info */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input
                                        label="Doctor's Full Name"
                                        name="doctorName"
                                        value={formData.doctorName}
                                        onChange={handleChange}
                                        isRequired
                                    />
                                    <Input
                                        label="Doctor's Registration No."
                                        name="doctorRegNo"
                                        value={formData.doctorRegNo}
                                        onChange={handleChange}
                                        isRequired
                                    />
                                    <Input
                                        label="Medical Facility / Hospital"
                                        name="hospital"
                                        value={formData.hospital}
                                        onChange={handleChange}
                                    />
                                    <Input
                                        label="Date of Examination"
                                        type="date"
                                        name="examDate"
                                        value={formData.examDate}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Injuries/Disability */}
                                <div className="space-y-4">
                                    <Textarea
                                        label="Nature of Injuries"
                                        name="medicalInjuries"
                                        value={formData.medicalInjuries}
                                        onChange={handleChange}
                                        minRows={3}
                                        isRequired
                                    />
                                    <Textarea
                                        label="Disability (if any)"
                                        name="disability"
                                        value={formData.disability}
                                        onChange={handleChange}
                                        minRows={3}
                                    />
                                    <Textarea
                                        label="Period of Incapacity (if applicable)"
                                        name="incapacityPeriod"
                                        value={formData.incapacityPeriod}
                                        onChange={handleChange}
                                        minRows={2}
                                    />
                                </div>
                                {/* Certification & Signatures */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Upload Signature */}
                                    <div className="flex flex-col space-y-2">
                                        <label className="text-sm font-medium text-gray-700">
                                            Doctor's Signature (Image/PDF)
                                        </label>
                                        <input
                                            type="file"
                                            accept="image/*,application/pdf"
                                            name="doctorSignatureFile"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0];
                                                if (file) {
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        doctorSignatureFile: file,
                                                    }));
                                                }
                                            }}
                                            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 
                 file:rounded-md file:border-0 file:text-sm file:font-semibold 
                 file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                                        />

                                        {/* Show preview if image */}
                                        {formData.doctorSignatureFile &&
                                            formData.doctorSignatureFile.type.startsWith("image/") && (
                                                <img
                                                    src={URL.createObjectURL(formData.doctorSignatureFile)}
                                                    alt="Doctor Signature Preview"
                                                    className="mt-2 h-24 object-contain border rounded-md"
                                                />
                                            )}

                                        {/* If PDF, show file name */}
                                        {formData.doctorSignatureFile &&
                                            formData.doctorSignatureFile.type === "application/pdf" && (
                                                <p className="mt-2 text-sm text-gray-600">
                                                    📄 {formData.doctorSignatureFile.name}
                                                </p>
                                            )}
                                    </div>

                                    {/* Date of Signature */}
                                    <Input
                                        label="Date of Signature"
                                        type="date"
                                        name="doctorSignatureDate"
                                        value={formData.doctorSignatureDate}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="flex justify-between pt-4">

                                    <Button
                                        onPress={handleBack}
                                        color="primary"
                                        className="w-full md:w-auto px-8 py-3 rounded-full shadow-md text-white font-semibold flex items-center justify-center gap-2 group"
                                    >
                                        <ArrowLeft className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-x-1" />
                                        Back
                                    </Button>
                                    <Button onPress={confirmReset} color="danger" className="w-full md:w-auto px-8 py-3 rounded-full shadow-md text-white font-semibold">
                                        Reset
                                    </Button>
                                    <Button type="submit" color="success" className="w-full md:w-auto px-8 py-3 rounded-full shadow-md text-white font-semibold">
                                        <ArrowUp className="w-5 h-5 transform transition-transform duration-300 group-hover:-translate-y-1" />
                                        Submit Claim
                                    </Button>
                                </div>
                            </Card>
                        )}
                    </form>
                </div>
            </Card >

            {/* Reset modal */}
            < Modal isOpen={resetOpen} onOpenChange={setResetOpen} size="sm" >
                <ModalContent>
                    <ModalHeader className="font-bold text-lg">
                        Confirm Reset
                    </ModalHeader>
                    <ModalBody>
                        <p className="text-sm text-slate-700">
                            Are you sure you want to clear the form? This action cannot be
                            undone.
                        </p>
                    </ModalBody>
                    <ModalFooter className="flex justify-end gap-3">
                        <Button color="primary" onPress={() => setResetOpen(false)} className="w-full md:w-auto px-8 py-3 rounded-full shadow-md text-white font-semibold">
                            Cancel
                        </Button>
                        <Button color="danger" onPress={doReset} className="w-full md:w-auto px-8 py-3 rounded-full shadow-md text-white font-semibold">
                            Yes, Clear Form
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal >
        </div >
    );
}
