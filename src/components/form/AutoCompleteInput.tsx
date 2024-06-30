import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import ControlledInput from "./ControlledInput";
import { Rules } from "./ControlledInput";

type AutoCompleteInputProps = {
    name: string;
    label: string;
    options: { value: string, label: string }[];
    rules?: Rules;
    requiredMessage?: string;
    required?: boolean;
    placeholder?: string;
}

function AutoCompleteInput({ name, label, options, rules = {}, required, requiredMessage, placeholder }: AutoCompleteInputProps) {

    return (
        <ControlledInput defaultValue={null} name={name} rules={rules} requiredMessage={requiredMessage} required={required}>
            {({ onChange, value }) =>
                <Autocomplete
                    allowsCustomValue
                    label={label}
                    placeholder={placeholder}
                    selectedKey={value}
                    onSelectionChange={onChange}
                    defaultItems={options}
                    className="w-full"
                >
                    {(item: { value: string, label: string }) => <AutocompleteItem key={item.value} value={item.value}>{item.label}</AutocompleteItem>}
                </Autocomplete>
            }
        </ControlledInput>
    )
}

export default AutoCompleteInput
