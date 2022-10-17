import styles from "./styles.module.css";
import Contacts from "components/Contacts";
import { FaJournalWhills } from "react-icons/fa";
import Filter from "components/Filter";
import Form from "../Form";

export default function App() {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.h1}>
                <FaJournalWhills size={28} className={styles.icon} />
                Phonebook
            </h1>
            <Form />
            <h2>Contacts</h2>
            <Filter />
            <Contacts />
        </div>
    );
}
