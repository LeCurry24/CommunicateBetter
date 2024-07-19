import { useNavigate } from "react-router-dom"
import styles from "./AddForms.module.css"
import { useState } from "react";
import { supabase } from "../supabaseConfig";

const add_job = () => {
    const navigate = useNavigate()
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [date, setDate] = useState('')
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!state || !city || !date) {
            setFormError('please fill all of the top three fields correctly')
            return
        }

        const { data, error } = await supabase
            .from('NewJobs')
            .insert([{ state, city, date }])

        if (error) {
            setFormError('please fill all of the top three fields correctly')
        }
        if (data) {
            setFormError(null)
            navigate('/jobslist')
        }
    }
    return (
       <form onSubmit={handleSubmit}>
            <label>
                State:
                <input type="text" 
                placeholder="State.."
                value={state}
                onChange={(e) => setState(e.target.value)}
                className={styles.input}/>
            </label>
            <label>
                City:
                <input type="text"
                placeholder="City.."
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={styles.input} />
            </label>
            <label>
                Date:
                <input type="date"
                placeholder="Date.."
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className={styles.input} />
            </label>
            <button type="submit" className={styles.btn}>New Job</button>

            {formError && <p className="error">{formError}</p>}
       </form>
    )
};

export default add_job