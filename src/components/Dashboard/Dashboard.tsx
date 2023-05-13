import { useLocation, useNavigate } from "react-router-dom";
import "./Dashboard.css"

const Dashboard = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const {name} = state; // Read values passed on state
    return(
        <>
            <div>
                {name}
            </div>
            <a onClick={() => navigate("/users")} style={{cursor:'pointer'}}>Users List</a>
        </>
    )
}

export default Dashboard