"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { motion, AnimatePresence } from "framer-motion";

// ✅ 100% HeroUI components
import {
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Select,
  SelectItem,
  Badge,
  useDisclosure,
  toast, // ✅ use this instead of useToast()
} from "@heroui/react";

import { Save } from "lucide-react";

export interface ErrorsType {
  [key: string]: string;
}

export interface DependantType {
  id: number | string;
  relationship?: string;
  title?: string;
  firstName?: string;
  middleName?: string;
  surname?: string;
  idtypes?: string;
  idnos?: string;
  dob?: string;
  gendere?: string;
  countrye?: string;
  cities?: string;
}

export interface FormdataType {
  memberidno: string;
  groupname: string;
  groupnumber: string;
  relationship: string;
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
  dependantsData: DependantType[];
}

const countries = [
  "Kenya",
  "United Kingdom",
  "United States",
  "Canada",
  "Australia",
  "South Africa",
  "Nigeria",
  "India",
  "Germany",
  "France",
];

export default function MemberForm(): JSX.Element {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [loader, setLoader] = useState(false);
  const [formData, setFormData] = useState<FormdataType>({
    memberidno: "",
    groupname: "",
    groupnumber: "",
    relationship: "",
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
  });

  const [errors, setErrors] = useState<ErrorsType>({});
  const [dependentCount, setDependentCount] = useState(0);
  const [currentDependant, setCurrentDependant] = useState<DependantType | null>(null);
  const today = new Date().toISOString().split("T")[0];

  // Generate member ID
  useEffect(() => {
    const now = new Date();
    const uniqueNumber = `${now.getFullYear()}${now.getMonth() + 1}${now.getDate()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
    const lastSixDigits = uniqueNumber.slice(-6);
    setFormData((prev) => ({ ...prev, memberidno: `Birdview-M${lastSixDigits}` }));
  }, []);

  const showToast = (type: "success" | "error", message: string) => {
    toast({
      title: type === "success" ? "Success" : "Error",
      description: message,
      color: type === "success" ? "success" : "danger",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleAddDependant = () => {
    const newDep: DependantType = { id: Date.now() };
    setFormData((p) => ({ ...p, dependantsData: [...p.dependantsData, newDep] }));
    setDependentCount((n) => n + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);

    if (!formData.firstname || !formData.lastname) {
      showToast("error", "Please fill required fields (First name, Last name)");
      setLoader(false);
      return;
    }

    try {
      const res = await fetch("/api/member-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        showToast("success", data?.message ?? "Member saved successfully");
      } else {
        showToast("error", data?.error ?? "Failed to save member");
      }
    } catch {
      showToast("error", "Network error");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4 py-10">
      <Card className="w-full max-w-5xl shadow-2xl rounded-2xl">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-400 text-white p-6 flex justify-between items-center rounded-t-2xl">
          <div className="flex items-center gap-4">
            <Image src="/images/logo3.png" alt="Logo" width={180} height={60} className="rounded-lg" />
            <div>
              <h2 className="text-2xl font-semibold">Member Registration</h2>
              <p className="text-blue-100 text-sm">Corporate high-end registration form</p>
            </div>
          </div>
          <Badge color="primary" variant="flat" className="uppercase">Premium</Badge>
        </CardHeader>

        <CardBody className="bg-white p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Input label="Member ID" value={formData.memberidno} readOnly />
              <Input name="groupname" label="Group Name" value={formData.groupname} onChange={handleChange} />
              <Input name="groupnumber" label="Group Number" value={formData.groupnumber} onChange={handleChange} />
              <Select
                label="Relationship"
                selectedKeys={[formData.relationship]}
                onSelectionChange={(keys) => setFormData((p) => ({ ...p, relationship: Array.from(keys)[0] as string }))}
              >
                <SelectItem key="Principal">Principal</SelectItem>
                <SelectItem key="Membership">Membership</SelectItem>
              </Select>
              <Select
                label="Title"
                selectedKeys={[formData.title]}
                onSelectionChange={(keys) => setFormData((p) => ({ ...p, title: Array.from(keys)[0] as string }))}
              >
                {["Mr", "Mrs", "Miss", "Dr", "Prof"].map((t) => (
                  <SelectItem key={t}>{t}</SelectItem>
                ))}
              </Select>
              <Input name="firstname" label="First Name" value={formData.firstname} onChange={handleChange} />
              <Input name="lastname" label="Last Name" value={formData.lastname} onChange={handleChange} />
              <Input name="middlename" label="Middle Name" value={formData.middlename} onChange={handleChange} />
              <Input name="idno" label="ID Number" value={formData.idno} onChange={handleChange} />
              <Input name="dateofbirth" label="Date of Birth" type="date" max={today} value={formData.dateofbirth} onChange={handleChange} />
              <Select
                label="Gender"
                selectedKeys={[formData.gender]}
                onSelectionChange={(keys) => setFormData((p) => ({ ...p, gender: Array.from(keys)[0] as string }))}
              >
                <SelectItem key="Male">Male</SelectItem>
                <SelectItem key="Female">Female</SelectItem>
                <SelectItem key="Other">Other</SelectItem>
              </Select>
              <Select
                label="Country"
                selectedKeys={[formData.country]}
                onSelectionChange={(keys) => setFormData((p) => ({ ...p, country: Array.from(keys)[0] as string }))}
              >
                {countries.map((c) => (
                  <SelectItem key={c}>{c}</SelectItem>
                ))}
              </Select>
              <Input name="city" label="City" value={formData.city} onChange={handleChange} />
              <Input name="address" label="Address" value={formData.address} onChange={handleChange} />
              <Input name="eimail" label="Email" value={formData.eimail} onChange={handleChange} />
              <div>
                <label className="text-sm font-medium text-slate-600 mb-1 block">Mobile Number</label>
                <PhoneInput
                  country="ke"
                  value={formData.mobileno}
                  onChange={(v) => setFormData((p) => ({ ...p, mobileno: v }))}
                  inputStyle={{ width: "100%", height: 48, borderRadius: 8 }}
                />
              </div>
            </div>

            {/* Dependants Table */}
            <div className="mt-8">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-slate-700">Dependants</h3>
                <Button color="primary" className="text-white font-semibold" onPress={handleAddDependant}>Add Dependant</Button>
              </div>
              <Table aria-label="Dependants Table" className="rounded-lg shadow border border-slate-200">
                <TableHeader>
                  <TableColumn>No</TableColumn>
                  <TableColumn>Relationship</TableColumn>
                  <TableColumn>First Name</TableColumn>
                  <TableColumn>Surname</TableColumn>
                  <TableColumn>DOB</TableColumn>
                  <TableColumn>Country</TableColumn>
                  <TableColumn>Action</TableColumn>
                </TableHeader>
                <TableBody>
                  {formData.dependantsData.map((dep, idx) => (
                    <TableRow key={dep.id}>
                      <TableCell>{idx + 1}</TableCell>
                      <TableCell>{dep.relationship || "—"}</TableCell>
                      <TableCell>{dep.firstName || "—"}</TableCell>
                      <TableCell>{dep.surname || "—"}</TableCell>
                      <TableCell>{dep.dob || "—"}</TableCell>
                      <TableCell>{dep.countrye || "—"}</TableCell>
                      <TableCell>
                        <Button isIconOnly variant="light" onPress={() => { setCurrentDependant(dep); onOpen(); }}>
                          <Save className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Submit */}
            <div className="flex justify-center gap-6 mt-8">
              <Button color="primary" type="submit" isLoading={loader} className="text-white px-8 py-3 font-semibold">Submit</Button>
              <Button color="danger" className="text-white px-8 py-3 font-semibold" variant="solid" type="button" onPress={() => setFormData({ ...formData, dependantsData: [] })}>Reset</Button>
            </div>
          </form>
        </CardBody>
      </Card>

      {/* Animated Modal */}
      <AnimatePresence>
        {isOpen && (
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg" backdrop="blur">
            <ModalContent>
              <ModalHeader>Edit Dependant</ModalHeader>
              <ModalBody>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  <Input
                    label="First Name"
                    value={currentDependant?.firstName || ""}
                    onChange={(e) => setCurrentDependant((p) => ({ ...(p ?? {}), firstName: e.target.value }))}
                  />
                  <Input
                    label="Surname"
                    value={currentDependant?.surname || ""}
                    onChange={(e) => setCurrentDependant((p) => ({ ...(p ?? {}), surname: e.target.value }))}
                  />
                  <Input
                    label="DOB"
                    type="date"
                    max={today}
                    value={currentDependant?.dob || ""}
                    onChange={(e) => setCurrentDependant((p) => ({ ...(p ?? {}), dob: e.target.value }))}
                  />
                  <Select
                    label="Gender"
                    selectedKeys={[currentDependant?.gendere || ""]}
                    onSelectionChange={(keys) => setCurrentDependant((p) => ({ ...(p ?? {}), gendere: Array.from(keys)[0] as string }))}
                  >
                    <SelectItem key="Male">Male</SelectItem>
                    <SelectItem key="Female">Female</SelectItem>
                  </Select>
                </motion.div>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onOpenChange}>Cancel</Button>
                <Button color="primary" onPress={onOpenChange}>Save</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
}
