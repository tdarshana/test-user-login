import { useState, useEffect } from 'react'
import "./User.css"
import { useNavigate } from 'react-router-dom';

const User = () => {

    interface IUser{
      id: string;
      name: string;
      email: string;
    }

    const [usersList, setUsersList] = useState<IUser[]>([])

    const fetchUsersList = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => setUsersList(json))
        .catch(error => console.error(error));
    }

    // Fetch Task List on Load
    useEffect(()=>{
      fetchUsersList();
    }, [])
    const navigate = useNavigate();

    return (
      <section className="user-container">
        <div className="users">
            <h1 className="header">
                Users List
            </h1>
            <div className="users-content">
                {usersList?.map((user,i)=>(
                        <p key={i}>
                            {user.name}, {user.email}
                        </p>
                    ))
                }
            </div>
        </div>
        <br></br>
        <a onClick={() => navigate("/")} style={{cursor:'pointer'}}>back</a>
    </section>);
}

export default User