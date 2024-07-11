import { Outlet, Link } from "react-router-dom"

const styles = {
    boxShadow: '0 0 15px black',
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
    borderRadius: '15px',
    width: '1000px',
    height: '600px' 
}

const new_style = {
    display: 'flex',
    justifyContent: 'space-evenly',
    
}



const Layout = () => {
    return(
        <div style={styles}>
            <div style={new_style}>
                <Link to="/"><button>home</button></Link>
                <Link to="/sign_in"><button>Sign In</button></Link>
                <Link to="/sign_up"><button>Sign Up</button></Link>
                <Link to="/sign_out"><button>Sign out</button></Link>
                <Link to="/road_master"><button>Road Master</button></Link>
                <Link to="/contractor"><button>Contractor</button></Link>
            </div>
            <Outlet/>
        </div>
    )
}
export default Layout