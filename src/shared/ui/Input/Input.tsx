import { cn } from "@/shared/lib";
import { useState, type ChangeEvent, type InputHTMLAttributes, type ReactNode } from "react";
import styles from "./Input.module.scss";
import { Button } from "../Button/Button";
import HideIcon from "@/shared/assets/icons/Hide.svg";
import ShowIcon from "@/shared/assets/icons/Show.svg";

type HTMLInputType = Omit<InputHTMLAttributes<HTMLInputElement>, "onChange">;

interface InputProps extends HTMLInputType {
    className?: string;
    value?: string;

    disabled?: boolean;

    rounded?: boolean;
    Icon?: ReactNode;
    type?: "text" | "password";
    onChange?: (value: string) => void;
}

export const Input = (props: InputProps) => {
    const [showPassword, setShowPassword] = useState(false);
    const [focus, setFocus] = useState<boolean>(false);

    const toggleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const handleFocus = () => {
        setFocus(true);
    };

    const handleBlur = () => {
        setFocus(false);
    };

    const {
        className,
        type,
        value,
        Icon,
        onChange,
        rounded = false,
        disabled = false,
        ...rest
    } = props;
    return (
        <div
            className={cn(styles.inputContainer, className, {
                [styles.disabled]: disabled,
                [styles.rounded]: rounded,
                [styles.focus]: focus,
            })}
        >
            {Icon}
            <input
                {...rest}
                value={value}
                disabled={disabled}
                type={showPassword && type === "password" ? "text" : type}
                className={cn(styles.input, {
                    [styles.rounded]: rounded,
                })}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />

            {type === "password" && (
                <Button
                    theme="ghost"
                    type="button"
                    onClick={toggleShowPassword}
                    className={styles.toggleVisibilityButton}
                >
                    {showPassword ? <HideIcon /> : <ShowIcon />}
                </Button>
            )}
        </div>
    );
};
