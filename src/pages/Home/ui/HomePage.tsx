import { Link } from "react-router";
import styles from "./HomePage.module.scss";
import { useTranslation } from "react-i18next";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
const HomePage = () => {
    const { t } = useTranslation();

    return (
        <div className={styles.pageWrapper}>
            <Header />

            <main>
                <h1 className={styles.title}>{t("hello")}</h1>
                <Link to="/login">Go to Login Page</Link>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
