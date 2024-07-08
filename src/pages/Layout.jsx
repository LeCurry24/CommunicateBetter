import { Outlet, Link } from "react-router-dom"

const Layout = () => {
    return(
        <>
            
            <Link to="/signUp">SignUp</Link>
            <Outlet/>
        </>
    )
}
export default Layout