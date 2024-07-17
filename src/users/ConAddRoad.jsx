import { useState } from "react";
import { supabase } from "../supabaseConfig";

import { useNavigate } from "react-router-dom";

import styles from "./AddForms.module.css";


const con_add_road = () => {
    const navigate = useNavigate()

    const [address, setAddress] = useState('')
    const [date, setDate] = useState('')
    
    const [formError, setFormError] = useState(null)

    const handleSubmit = async (e) => {
        e.preventDefault()

        if(!address || !date) {
            setFormError('please fill all of the top three fields correctly')
            return
        }

        const { data, error } = await supabase
            .from('Roads')
            .insert([{ address, date }])
            
        if (error) {
            
            setFormError('please fill all of the top three fields correctly')
        }
        if (data) {
            setFormError(null)
            navigate('/road_list')
        }

    }

    return (
        <div className={styles.formDiv}>
            <form onSubmit={handleSubmit}>
                <label>
                    address:
                    <input type="text" 
                    placeholder="address.."
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className={styles.input}/>
                </label>
                <label>
                    Date:
                    <input type="date" 
                    placeholder="Date.."
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className={styles.input}/>
                </label>
                <button type="submit" className={styles.btn}>Add Road</button>
                {formError && <p className="error">{formError}</p>}
            </form>
        </div>
    )
};
export default con_add_road