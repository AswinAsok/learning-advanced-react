import { useTheme } from "@/shared/config";
import { Link } from "react-router";
import styles from "./HomePage.module.scss";
import { useTranslation } from "react-i18next";

const HomePage = () => {
    const { toggleTheme } = useTheme();
    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        void i18n.changeLanguage(i18n.language === "en" ? "de" : "en");
    };
    return (
        <>
            <h1 className={styles.title}>{t("hello")}</h1>
            <button
                onClick={() => {
                    toggleTheme();
                }}
            >
                Change Theme
            </button>

            <button
                onClick={() => {
                    changeLanguage();
                }}
            >
                {i18n.language}
            </button>
            <Link to="/login">Go to Login Page</Link>
        </>
    );
};

export default HomePage;
