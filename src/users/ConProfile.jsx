const con_profile_style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85%',
    
}
const con_box_style = {
    borderColor: 'blue',
    border: 'solid 2px',
    height: '400px',
    width: '300px',
    borderRadius: '10px'
}




const con_profile = () => {
    return (
        <div style={con_profile_style} >
            <div style={con_box_style}>
            <p>profile will go here</p>
            <button>follow</button>
            </div>
            
        </div>
    )
};
export default con_profile