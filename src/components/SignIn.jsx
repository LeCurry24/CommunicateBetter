import { Form } from "react-router-dom";





const sign_in = () =>{
    return (
        <div>
            <Form state={style_signin}>
                <label>
                    Email:
                    <input type="email"
                    placeholder="Email.." 
                    className="sign-in"/>
                </label>
                <label>
                    Password:
                    <input type="password"
                    placeholder="Password.."
                    className="sign-in" />
                </label>
                <button type="submit">Sign In</button>
            </Form>
        </div>
    );
};
export default sign_in