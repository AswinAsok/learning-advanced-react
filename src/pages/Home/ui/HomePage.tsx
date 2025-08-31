import { Link } from "react-router";
import styles from "./HomePage.module.scss";
import { useTranslation } from "react-i18next";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
const HomePage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <h1 className={styles.title}>{t("hello")}</h1>
            <Link to="/login">Go to Login Page</Link>
            <Footer />
        </>
    );
};

export default HomePage;
