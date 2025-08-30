import { useTheme } from "@/shared/config";
import { Link } from "react-router";
import styles from "./HomePage.module.scss";

const HomePage = () => {
    const { toggleTheme } = useTheme();
    return (
        <>
            <h1 className={styles.title}>Home Page</h1>
            <button
                onClick={() => {
                    toggleTheme();
                }}
            >
                Change Theme
            </button>
            <Link to="/login">Go to Login Page</Link>
        </>
    );
};

export default HomePage;
