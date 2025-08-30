import LogoIcon from "@/shared/assets/icons/Logo.svg?react";
import MapPin from "@/shared/assets/icons/MapPin.svg?react";
import SearchIcon from "@/shared/assets/icons/Search.svg?react";
import UsersIcon from "@/shared/assets/icons/Users.svg?react";
import CircleIcon from "@/shared/assets/icons/Circle.svg?react";
import styles from "./Header.module.scss";
import { AppIcon, Button, Input } from "@/shared/ui";

import { useTheme } from "@/shared/config";
import { LanguageSwitcher } from "./LanguageSwitcher/LanguageSwitcher";

export const Header = () => {
    const { toggleTheme } = useTheme();

    return (
        <header className={styles.header}>
            <div className={styles.section}>
                <LogoIcon className={styles.logo} />

                <Button theme="ghost">
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

                <LanguageSwitcher />
            </div>
        </header>
    );
};
