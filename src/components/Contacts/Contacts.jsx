import { useDispatch, useSelector } from "react-redux";
import { deleteContacts, getFilter, getItems } from "redux/contactsSlice";
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import styles from "./styles.module.css";

const Contacts = () => {
    const contacts = useSelector(getItems);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const filteredContacts = () => {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
    };
    let rendered = filter === "" ? contacts : filteredContacts();
    return (
        <ul className={styles.contactsList}>
            {rendered.map(({ name, id, number }) => (
                <li className={styles.listItem} key={id} id={id}>
                    <span className={styles.contactName}>
                        <IoIosContact size={20} />: {name}{" "}
                    </span>
                    <span className={styles.phoneNumber}>
                        <BsTelephone size={15} />
                        <span> : </span>
                        {number}
                    </span>

                    <button
                        className={styles.buttons}
                        onClick={(e) =>
                            dispatch(
                                deleteContacts(e.currentTarget.parentNode.id),
                            )
                        }
                        title="delete"
                        aria-label="delete contact button"
                    >
                        <MdOutlineDeleteForever size={30} />
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Contacts;
