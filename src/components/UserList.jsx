import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Users = () => {

    const [users, setUsers] = useState([])
    const [errMsg, setErrMsg] = useState(undefined)
    
    const api = "https://jsonplaceholder.typicode.com/users?_page=0&_limit=5"

    const fetchUsers = async () => {
        try {
            setErrMsg(undefined)
            const response = await axios.get(api)
            console.log(response);
            setUsers(response.data)
        } catch (error) {
            console.log(error.message);
            setErrMsg('Error loading Users...')
        }
    }

    useEffect(() => {
        fetchUsers()
    }, [])

    const handleDelete = async (userId) => {
        const response=await axios.delete(`${api}/${userId}`)
        console.log(response);
        const temp = users.filter(user => user.id !== userId)
        setUsers(temp)
        alert("User deleted")
    }

    return (
        <div className='container mt-5'>

            
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className='fw-bold'>User Dashboard</h3>
                <Link to={`/add-user`} className="btn btn-primary btn-sm">
                    Add User
                </Link>
            </div>

            
            {
                errMsg &&
                <div className='alert alert-danger text-center'>
                    {errMsg}
                </div>
            }

            
            {users.length === 0 ? (
                <h5 className='text-center mt-4 text-muted'>
                    No users to show
                </h5>
            ) : (
                <div className="card shadow-sm">
                    <div className="card-body p-0">

                        <table className="table table-hover mb-0">
                            <thead className="table-dark">
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Company</th>
                                    <th className="text-center">Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td className="fw-semibold">{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>{user.company.name}</td>
                                        <td className="text-center">
                                            <button 
                                                className="btn btn-danger btn-sm"
                                                onClick={() => handleDelete(user.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>

                    </div>
                </div>
            )}

        </div>
    )
}

export default Users