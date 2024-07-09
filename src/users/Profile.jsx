

const profile_style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '85%',
    
}
const box_style = {
    borderColor: 'blue',
    border: 'solid 2px',
    height: '400px',
    width: '300px',
    borderRadius: '10px'
}



const profile = () => {
    return (
        <div style={profile_style} >
            <div style={box_style}>
            <p>profile will go here</p>
            <button>follow</button>
            </div>
            
        </div>
    )
};
export default profile