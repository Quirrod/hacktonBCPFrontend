import { Input } from "@nextui-org/react";
import ControlledInput from "./ControlledInput";
import { Rules } from "./ControlledInput";

type CustomInputProps = {
    type?: string;
    name: string;
    label: string;
    rules?: Rules;
    requiredMessage?: string;
    required?: boolean;
    placeholder?: string;
}

function CustomInput({ type = 'text', name, label, rules = {}, required, requiredMessage, placeholder }: CustomInputProps) {

    return (
        <ControlledInput defaultValue={null} name={name} rules={rules} requiredMessage={requiredMessage} required={required}>
            {({ onChange, value }) =>
                <Input
                    type={type}
                    label={label}
                    placeholder={placeholder}
                    value={value}
                    onValueChange={onChange}
                />
            }
        </ControlledInput>
    )
}

export default CustomInput
