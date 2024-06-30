import { Switch } from "@nextui-org/react";
import ControlledInput, { Rules } from "./ControlledInput";

type SwitchInputProps = {
    name: string;
    label: string;
    rules?: Rules;
    requiredMessage?: string;
    required?: boolean;
    placeholder?: string;
}

function SwitchInput({ name, rules = {}, required = false, requiredMessage, label }: SwitchInputProps) {
    return (
        <ControlledInput name={name} rules={rules} requiredMessage={requiredMessage} required={required}>
            {({ onChange, value }) =>
                <Switch color="secondary" isSelected={value} onValueChange={onChange}>
                    {label}
                </Switch>
            }
        </ControlledInput>
    )
}

export default SwitchInput
