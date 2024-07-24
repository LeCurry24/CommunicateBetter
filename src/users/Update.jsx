import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { supabase } from "../supabaseConfig"
import styles from "./AddForms.module.css"


const update = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [address, setAddress] = useState('')
    const [time, setTime] = useState('')
    const [date, setDate] = useState('')
    const [note, setNote] = useState('')
    const [formError, setFormError] = useState(null)


    const handleSubmit = async (e) => {
        e.preventDefault()


        if(!address || !time || !date) {
            setFormError('please fill all of the top three fields correctly')
            return
        }

        const { data, error } = await supabase
            .from('Roads')
            .update({address, time, date, note})
            .eq('id', id)
            .select

        if (error){
            setFormError('please fill all of the top three fields correctly')
        }
        if (data){
            setFormError(null)
            navigate('/add_road')
        }
    }

    useEffect(() => {
        const fetchRoads = async () => {
            const { data, error } = await supabase
            .from('Roads')
            .select()
            .eq('id', id)
            .single()

        if (error){
            navigate('/', {replace: true})
        }
        if (data){
            setAddress(data.address)
            setTime(data.time)
            setDate(data.date)
            setNote(data.note)
            
        }
        }


        fetchRoads()
    }, [id, navigate])

    return(
        <div className={styles.formDiv}>
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
                onChange={(e) => setNote(e.target.value)}
                className={styles.input}/>
            </label>
            <button type="submit" className={styles.btn}>Update Road</button>

            {formError && <p className="error">{formError}</p>}
        </form>
    </div>
    )
}
export default update