import { useSelector, useDispatch } from "react-redux";
import { setFilter, getFilter } from "redux/contactsSlice";
import styles from "./styles.module.css";

export default function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);

    return (
        <div className={styles.wrapper}>
            <p className={styles.text}>Find contacts by name</p>
            <input
                className={styles.filter}
                name="filter"
                value={filter}
                onChange={(e) => dispatch(setFilter(e.target.value))}
            />
        </div>
    );
}
