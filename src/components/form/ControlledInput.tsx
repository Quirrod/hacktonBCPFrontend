import { Controller, useFormContext } from "react-hook-form"
import { ReactNode } from "react";
import ErrorMessage from "./ErrorMessage";

type ChangeHandler = (...event: any[]) => void

export type Rules = {
    [key: string]: string | number | { [key: string]: string | ((checkItem: any) => boolean | string) };
}


type InputFormProps = {
    name: string;
    requiredMessage?: string | { value: boolean, message: string };
    required?: boolean;
    defaultValue?: any;
    rules?: Rules;
    max?: { value: number, message: string };
    min?: { value: number, message: string };
    children: (props: { onChange: ChangeHandler, value: any }) => ReactNode;
}

function ControlledInput({ name, children, defaultValue, rules = {}, requiredMessage = "El campo es requerido", min, max, required = true }: InputFormProps) {
    const { control, formState, } = useFormContext();
    const validate = {
        min,
        max,
        required: required ? requiredMessage : required,
        ...rules
    }
    return (
        <Controller defaultValue={defaultValue} name={name} control={control} rules={validate} render={({ field: { onChange, value } }) => {
            return (
                <div className="w-full flex flex-col gap-2">
                    {children({ onChange, value })}
                    <ErrorMessage error={formState.errors[name]?.message as string} />
                </div>
            )

        }} />
    )
}

export default ControlledInput