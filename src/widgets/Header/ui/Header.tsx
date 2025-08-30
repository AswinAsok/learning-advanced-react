import LogoIcon from "@/shared/assets/icons/Logo.svg?react";
import MapPin from "@/shared/assets/icons/MapPin.svg?react";
import SearchIcon from "@/shared/assets/icons/Search.svg?react";
import UsersIcon from "@/shared/assets/icons/Search.svg?react";
import CircleIcon from "@/shared/assets/icons/Circle.svg?react";
import GermanyIcon from "@/shared/assets/icons/German.svg?react";
import EnglishIcon from "@/shared/assets/icons/English.svg?react";
import styles from "./Header.module.scss";
import { AppIcon, Button, Input } from "@/shared/ui";
import { useTranslation } from "react-i18next";
import i18n from "@/shared/config/i18n/i18n";
import { useTheme } from "@/shared/config";

export const Header = () => {
    const { t } = useTranslation();
    const { toggleTheme } = useTheme();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === "en" ? "en" : "de");
    };
    return (
        <header className={styles.header}>
            <div className={styles.section}>
                <LogoIcon className={styles.logo} />

                <Button>
                    <AppIcon Icon={MapPin} />
                    <span>10115 New York</span>
                </Button>
            </div>

            <div className={styles.section}>
                <Input
                    rounded
                    placeholder={"Search By"}
                    Icon={<AppIcon size={18} Icon={SearchIcon} theme="background" />}
                />
            </div>

            <div className={styles.section}>
                <Button theme="secondary">Cart</Button>
                <Button theme="outline">
                    <AppIcon Icon={UsersIcon} />
                    <span>Login</span>
                </Button>

                <Button theme="ghost" onClick={toggleTheme}>
                    <AppIcon Icon={CircleIcon} filled />
                </Button>

                <Button theme="ghost" onClick={toggleLanguage}>
                    {i18n.language === "en" ? (
                        <AppIcon Icon={EnglishIcon} filled />
                    ) : (
                        <AppIcon Icon={GermanyIcon} filled />
                    )}
                </Button>
            </div>
        </header>
    );
};
