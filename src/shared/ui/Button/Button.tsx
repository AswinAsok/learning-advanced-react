import type { ButtonHTMLAttributes } from "react";

type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
type ButtonForm = "rounded" | "pill" | "circle";
type ButtonTheme = "primary" | "secondary" | "tertiary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    size?: ButtonSize;
    form?: ButtonForm;
    theme?: ButtonTheme;
    disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
    const { children } = props;
    return <div>{children}</div>;
};
