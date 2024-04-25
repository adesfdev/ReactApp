import axios from "axios"
import { useState, useEffect } from "react"

export const User = ({newUser}) => {
    const [result, setResult] = useState(null)

    useEffect(() => {
        axios
        .get('http://localhost:3000/users')
        .then((response) => setResult(response.data))
        .catch((error) => console.log('error: ' + error)) 
    }, [])

    useEffect(() => {
        if (newUser) {
            setResult((prev) => {
                return {
                    ...prev,
                    rows: [...prev.rows, newUser]
                }
            })
        }
    }, [newUser])

    return (
      
      <div style={{ 
            marginTop: '10px', 
            marginLeft: '50px', 
            marginRight: '50px' }}>
            <h1 style={{ color: 'red' }}>USERS LIST</h1>

            <table className="table table-striped table-hover table-bordered" style={{ tableLayout: 'fixed', width: '100%', borderSpacing: '30px', }}>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {result ?
                        result.rows.map((user, index) => (  
                            <tr key={index}>
                                <th scope="row">{user.id}</th>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.phone}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                        : <tr><td>No result</td></tr>
                    }
                </tbody>
            </table>
        </div>     
    )
}