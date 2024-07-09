import { Outlet, Link } from "react-router-dom"

const styles = {
    borderColor: 'aqua',
    border: 'solid 2px',
    borderRadius: '15px',
    width: '1000px',
    height: '600px' 
}

const new_style = {
    display: 'flex',
    justifyContent: 'space-evenly'
}

const Layout = () => {
    return(
        <div style={styles}>
            <div style={new_style}>
                <Link to="/">Home</Link>
                <Link to="/sign_in">Sign In</Link>
                <Link to="/sign_up">Sign Up</Link>
                <Link to="/sign_out">Sign Out</Link>
                <Link to="/road_master">Road Master</Link>
                
            </div>
            <Outlet/>
        </div>
    )
}
export default Layout