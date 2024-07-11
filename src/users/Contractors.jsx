import { Link } from "react-router-dom";


const link_style = {
    display: 'flex',
    justifyContent: 'space-evenly',
};

const h2 = {
    display: 'flex',
    justifyContent: 'center'
}



const contractor = () => {
    return (
        <div>
            <div style={h2}>
            <h2>Contractor</h2>
            </div>
            <div style={link_style}>
                <Link><button>Map</button></Link>
                <Link to="/con_road_list"><button>Road List</button></Link>
                <Link to="/con_profile"><button>Profile</button></Link>

            </div>
        </div>
    )
};
export default contractor