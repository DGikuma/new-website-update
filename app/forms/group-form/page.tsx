"use client";

import React, { useEffect, useState } from "react";
import {
  Input,
  Select,
  SelectItem,
  Checkbox,
  Button,
  Card,
  CardHeader,
  CardBody,
  toast,
} from "@heroui/react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";

export interface FormdataType {
  groupname: string;
  grouplocation: string;
  contactperson: string;
  mobileno: string;
  email: string;
  groupConstitution: string;
  groupRegistered: string;
  noofmembers: string;
  currency: string;
  methodOfContributionMonthly: string;
  contributionMonthlyAmount: string;
  methodOfContributionPerclaim: string;
  contributionPerClaimAmount: string;
  payoutAmountPer: any;
  spouse: string;
  child: string;
  sibling: string;
  parent: string;
  noofsiblings: string;
  noofparents: string;
  noclaims: string;
  claimamount: string;
  nomemberclaims: string;
  nosiblingclaims: string;
  nospouseclaims: string;
  noparentclaims: string;
}

const GroupForm: React.FC = () => {
  const [loaderIcon, setLoaderIcon] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormdataType>({
    groupname: "",
    grouplocation: "",
    contactperson: "",
    mobileno: "",
    email: "",
    groupConstitution: "",
    groupRegistered: "",
    noofmembers: "",
    currency: "",
    methodOfContributionMonthly: "",
    contributionMonthlyAmount: "",
    methodOfContributionPerclaim: "",
    contributionPerClaimAmount: "",
    payoutAmountPer: {
      member: "",
      spouse: "",
      child: "",
      sibling: "",
      parent: "",
    },
    noofsiblings: "",
    noofparents: "",
    noclaims: "",
    claimamount: "",
    nomemberclaims: "",
    nosiblingclaims: "",
    nospouseclaims: "",
    noparentclaims: "",
    spouse: "",
    child: "",
    sibling: "",
    parent: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name: string, value: string, checked: boolean) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: checked ? value : "",
    }));
  };

  const handlePhoneChange = (value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      mobileno: value,
    }));
  };

  const handleReset = () => {
    setFormData({
      groupname: "",
      grouplocation: "",
      contactperson: "",
      mobileno: "",
      email: "",
      groupConstitution: "",
      groupRegistered: "",
      noofmembers: "",
      currency: "",
      methodOfContributionMonthly: "",
      contributionMonthlyAmount: "",
      methodOfContributionPerclaim: "",
      contributionPerClaimAmount: "",
      payoutAmountPer: {
        member: "",
        spouse: "",
        child: "",
        sibling: "",
        parent: "",
      },
      noofsiblings: "",
      noofparents: "",
      noclaims: "",
      claimamount: "",
      nomemberclaims: "",
      nosiblingclaims: "",
      nospouseclaims: "",
      noparentclaims: "",
      spouse: "",
      child: "",
      sibling: "",
      parent: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoaderIcon(true);

    try {
      const res = await axios.post("/api/group-form", formData, {
        headers: { "Content-Type": "application/json" },
        timeout: 10000,
      });

      if (res.status === 200) {
        toast.success(res.data.message || "Form submitted successfully!");
        handleReset();
      } else {
        toast.error(res.data.error || "Something went wrong!");
      }
    } catch (error: any) {
      toast.error(error.response?.data?.error || error.message);
    } finally {
      setLoaderIcon(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4">
      <Card className="w-full max-w-3xl shadow-2xl border border-gray-200 rounded-2xl bg-white/90 backdrop-blur">
        <CardHeader className="text-center border-b">
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/images/logo.jpeg"
              width={180}
              height={60}
              alt="Logo"
              className="rounded-md"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mt-2">
              Group Registration Form
            </h2>
          </div>
        </CardHeader>

        <CardBody className="p-8">
          {loaderIcon && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/70 backdrop-blur-sm">
              <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full" />
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Group Name"
                name="groupname"
                isRequired
                value={formData.groupname}
                onChange={handleChange}
              />
              <Input
                label="Group Location"
                name="grouplocation"
                isRequired
                value={formData.grouplocation}
                onChange={handleChange}
              />
              <Input
                label="Contact Person"
                name="contactperson"
                isRequired
                value={formData.contactperson}
                onChange={handleChange}
              />
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Mobile Number
                </label>
                <PhoneInput
                  country={"ke"}
                  value={formData.mobileno}
                  onChange={handlePhoneChange}
                  inputStyle={{ width: "100%", height: "50px" }}
                  containerClass="!w-full"
                />
              </div>
              <Input
                label="Email"
                name="email"
                type="email"
                isRequired
                value={formData.email}
                onChange={handleChange}
              />
              <Input
                label="Number of Members"
                name="noofmembers"
                isRequired
                value={formData.noofmembers}
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Currency"
                name="currency"
                selectedKeys={[formData.currency]}
                onChange={handleChange}
              >
                {["KES", "USD", "EUR", "GBP"].map((c) => (
                  <SelectItem key={c}>{c}</SelectItem>
                ))}
              </Select>

              <Select
                label="Group Constitution"
                name="groupConstitution"
                selectedKeys={[formData.groupConstitution]}
                onChange={handleChange}
              >
                <SelectItem key="yes">Yes</SelectItem>
                <SelectItem key="no">No</SelectItem>
              </Select>

              <Select
                label="Group Registered"
                name="groupRegistered"
                selectedKeys={[formData.groupRegistered]}
                onChange={handleChange}
              >
                <SelectItem key="yes">Yes</SelectItem>
                <SelectItem key="no">No</SelectItem>
              </Select>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Frequency of Contribution
              </h3>
              <div className="flex flex-col sm:flex-row gap-8">
                <div className="flex items-center space-x-4">
                  <Checkbox
                    isSelected={formData.methodOfContributionMonthly === "monthly"}
                    onValueChange={(checked) =>
                      handleCheckboxChange("methodOfContributionMonthly", "monthly", checked)
                    }
                  >
                    Per Month
                  </Checkbox>
                  <Input
                    label="Monthly Contribution Amount"
                    name="contributionMonthlyAmount"
                    value={formData.contributionMonthlyAmount}
                    onChange={handleChange}
                    isDisabled={formData.methodOfContributionMonthly !== "monthly"}
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <Checkbox
                    isSelected={formData.methodOfContributionPerclaim === "perclaim"}
                    onValueChange={(checked) =>
                      handleCheckboxChange("methodOfContributionPerclaim", "perclaim", checked)
                    }
                  >
                    Per Claim
                  </Checkbox>
                  <Input
                    label="Per Claim Contribution Amount"
                    name="contributionPerClaimAmount"
                    value={formData.contributionPerClaimAmount}
                    onChange={handleChange}
                    isDisabled={formData.methodOfContributionPerclaim !== "perclaim"}
                  />
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">
                Payout Amount per Member
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {["member", "spouse", "child", "sibling", "parent"].map((role) => (
                  <Input
                    key={role}
                    label={`${role.charAt(0).toUpperCase() + role.slice(1)} Amount`}
                    value={formData.payoutAmountPer[role]}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        payoutAmountPer: { ...prev.payoutAmountPer, [role]: e.target.value },
                      }))
                    }
                  />
                ))}
              </div>
            </div>

            <div className="flex justify-center space-x-6 pt-8">
              <Button
                type="submit"
                color="primary"
                variant="solid"
                className="px-8 py-4 font-bold text-lg rounded-xl shadow-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:from-blue-600 hover:to-blue-800 transition-all duration-300"
              >
                Submit
              </Button>

              <Button
                type="reset"
                onPress={handleReset}
                color="danger"
                variant="solid"
                className="px-8 py-4 font-bold text-lg rounded-xl shadow-lg text-white bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 transition-all duration-300"
              >
                Reset
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default GroupForm;
