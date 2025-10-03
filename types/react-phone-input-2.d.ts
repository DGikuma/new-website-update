declare module "react-phone-input-2" {
    import * as React from "react";

    interface PhoneInputProps {
        country?: string;
        value?: string;
        onChange?: (value: string, data: any, event: any, formattedValue: string) => void;
        inputStyle?: React.CSSProperties;
        buttonStyle?: React.CSSProperties;
        containerStyle?: React.CSSProperties;
        dropdownStyle?: React.CSSProperties;
        placeholder?: string;
        inputProps?: { name?: string; required?: boolean; autoFocus?: boolean };
        specialLabel?: string;
        enableSearch?: boolean;
        disableDropdown?: boolean;
    }

    const PhoneInput: React.FC<PhoneInputProps>;
    export default PhoneInput;
}
