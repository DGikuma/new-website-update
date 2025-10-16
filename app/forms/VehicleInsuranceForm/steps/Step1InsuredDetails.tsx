"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Input,
  Select,
  SelectItem,
  Checkbox,
  Card,
  CardHeader,
  CardBody,
} from "@heroui/react";

type Step1Props = {
  formData: Record<string, any>;
  updateFormData: (data: Record<string, any>) => void;
};

const Step1InsuredDetails: React.FC<Step1Props> = ({
  formData = {},
  updateFormData = () => { },
}) => {
  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Card className="rounded-2xl shadow-2xl border border-gray-100 bg-white/80 backdrop-blur-sm hover:shadow-blue-100 transition-all duration-300">
        <CardHeader className="border-b pb-3">
          <h2 className="text-2xl font-bold text-blue-800 tracking-wide">
            Insured Details
          </h2>
        </CardHeader>

        <CardBody className="space-y-8 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Products */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Products
              </label>
              <Select
                selectedKeys={[formData.products || ""]}
                onChange={(e) =>
                  updateFormData({ products: e.target.value })
                }
                placeholder="Select product"
                variant="flat"
                className="rounded-lg border-gray-300 bg-gray-50 text-gray-900"
                required
              >
                <SelectItem key="001-Tricycle">001 - Tricycle</SelectItem>
                <SelectItem key="002-Motorbike">002 - Motorbike</SelectItem>
              </Select>
            </div>

            {/* Time On Risk */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">
                Time On Risk
              </label>
              <div className="flex items-center space-x-4 p-3 rounded-lg bg-gray-50 border border-gray-200">
                <Checkbox
                  isSelected={formData.timeOnRisk === "Time On Risk"}
                  onValueChange={(checked) =>
                    updateFormData({
                      timeOnRisk: checked ? "Time On Risk" : "",
                    })
                  }
                >
                  Time On Risk
                </Checkbox>
              </div>
            </div>

            {/* Pin Number */}
            <Input
              type="text"
              label="PIN Number"
              placeholder="Enter PIN Number"
              value={formData.pinNumber || ""}
              onChange={(e) => updateFormData({ pinNumber: e.target.value })}
              variant="flat"
              className="bg-gray-50 text-gray-900"
              required
            />

            {/* Policy Holder */}
            <Input
              type="text"
              label="Policy Holder"
              placeholder="Enter Policy Holder Name"
              value={formData.policyHolder || ""}
              onChange={(e) => updateFormData({ policyHolder: e.target.value })}
              variant="flat"
              className="bg-gray-50 text-gray-900"
              required
            />

            {/* Email Address */}
            <Input
              type="email"
              label="Email Address"
              placeholder="Enter Email Address"
              value={formData.eimail || ""}
              onChange={(e) => updateFormData({ eimail: e.target.value })}
              variant="flat"
              className="bg-gray-50 text-gray-900"
              required
            />
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default Step1InsuredDetails;
