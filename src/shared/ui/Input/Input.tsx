import { cn } from "@/shared/lib";
import type { InputHTMLAttributes, ReactNode } from "react";
import styles from "./Input.module.scss";

type HTMLInputType = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

interface InputProps extends HTMLInputType {
    className?: string;
    value?: string;

    disabled?: boolean;

    rounded?: boolean;
    Icon?: ReactNode;

    onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
    const { className, value, Icon, onChange, rounded = false, disabled = false, ...rest } = props;
    return (
        <div className={cn(styles.inputContainer, className, { [styles.disabled]: disabled })}>
            {Icon}
            <input
                {...rest}
                value={value}
                disabled={disabled}
                className={cn(styles.input, {
                    [styles.rounded]: rounded,
                })}
            />
        </div>
    );
};
