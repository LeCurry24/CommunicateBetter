import { Form } from "react-router-dom"
import styles from "./AddForms.module.css"

const add_job = () => {
    return (
       <Form>
            <label>
                State:
                <input type="text" 
                placeholder="State.."
                // value={state}
                className={styles.input}/>
            </label>
            <label>
                City:
                <input type="text"
                placeholder="City.."
                // value={city}
                className={styles.input} />
            </label>
            <label>
                Date:
                <input type="text"
                placeholder="Date.."
                // value={date}
                className={styles.input} />
            </label>
            <button className={styles.btn}>New Job</button>
       </Form>
    )
};

export default add_job