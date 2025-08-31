import { Link } from "react-router";
import styles from "./HomePage.module.scss";
import { useTranslation } from "react-i18next";
import { Header } from "@/widgets/Header";
import { Footer } from "@/widgets/Footer";
import { Spinner } from "@/shared/ui";
const HomePage = () => {
    return (
        <div className={styles.pageWrapper}>
            <Header />
            <Spinner />

            <Footer />
        </div>
    );
};

export default HomePage;
