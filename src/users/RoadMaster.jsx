import { Link } from "react-router-dom";


const link_style = {
    display: 'flex',
    justifyContent: 'space-evenly',
};

const h2 = {
    display: 'flex',
    justifyContent: 'center'
}

const road_master = () => {
    return (
        <div>
            <div style={h2}>
            <h2>Road Master</h2>
            </div>
            <div style={link_style}>
                <Link>Map</Link>
                <Link to="/road_list">Road List</Link>
                <Link to="/profile">Profile</Link>

            </div>
        </div>
    )
};
export default road_master