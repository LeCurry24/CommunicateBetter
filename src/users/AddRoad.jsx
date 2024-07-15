import { useState } from "react";
import { supabase } from "../supabaseConfig";

import { useNavigate } from "react-router-dom";

import styles from "./AddForms.module.css"



const add_road = () => {
    const navigate = useNavigate()

    const [address, setAddress] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [note, setNate] = useState('')
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!address || !time || !date) {
            setFormError('please fill all of the top three fields correctly')
            return
        }

        const { data, error } = await supabase
            .from('Roads')
            .insert([{ address, time, date, note }])
            
        if (error) {
            
            setFormError('please fill all of the top three fields correctly')
        }
        if (data) {
            setFormError(null)
            navigate('/road_list')
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className={styles.label}>
                    address:
                    <input type="text" 
                    placeholder="address.."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className={styles.input}/>
                </label>
                <label className={styles.label}>
                    Time:
                    <input type="text" 
                    placeholder="Time.."
                    value={time}
                    required
                    onChange={(e) => setTime(e.target.value)}
                    className={styles.input}/>
                </label>
                <label className={styles.label}>
                    Date:
                    <input type="date" 
                    placeholder="Date.."
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={styles.input}/>
                </label>
                <label className={styles.label}>
                    Note:
                    <input type="text"
                    placeholder="Note.." 
                    value={note}
                    onChange={(e) => setNate(e.target.value)}
                    className={styles.input}/>
                </label>
                <button type="submit" className={styles.btn}>Add Road</button>

                {formError && <p className="error">{formError}</p>}
            </form>
        </div>
    )
};
export default add_road