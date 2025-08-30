import { useTheme } from "@/shared/config";
import { Link } from "react-router";
import styles from "./HomePage.module.scss";
import { useTranslation } from "react-i18next";
import { Button, Input } from "@/shared/ui";
import GermanyIcon from "@/shared/assets/icons/German.svg?react";
import SearchIcon from "@/shared/assets/icons/Search.svg?react";

const HomePage = () => {
    const { toggleTheme } = useTheme();
    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        void i18n.changeLanguage(i18n.language === "en" ? "de" : "en");
    };
    return (
        <>
            <h1 className={styles.title}>{t("hello")}</h1>
            <Input placeholder="search..." Icon={<SearchIcon />} />
            <Button
                onClick={() => {
                    toggleTheme();
                }}
            >
                Change Theme
            </Button>

            <Button
                theme="outline"
                onClick={() => {
                    changeLanguage();
                }}
            >
                <GermanyIcon width={20} height={20} style={{ marginRight: 5 }} />
                {i18n.language}
            </Button>
            <Link to="/login">Go to Login Page</Link>
        </>
    );
};

export default HomePage;
