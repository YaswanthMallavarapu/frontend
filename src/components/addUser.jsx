import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const AddUser = () => {

    const [name, setName] = useState(undefined)
    const [companyName, setCompanyName] = useState(undefined)
    const [email, setEmail] = useState(undefined)
    const [phone, setPhone] = useState(undefined)
    const [errMsg,setErrMsg]=useState(undefined)
    const navigate=useNavigate()

    const api='https://jsonplaceholder.typicode.com/users'

    const handleSubmit=async(e)=>{
        e.preventDefault()

        try {
        setErrMsg(undefined)
        const formData={
            name:name,
            companyName:companyName,
            email:email,
            phone:phone
        }
        const response=await axios.post(api,formData)
        console.log(response);
        alert('User added successfully.')

        navigate('/users')
        } catch (error) {
            setErrMsg('Something went wrong..')
        }
    }

    return (
        <div className='container mt-5'>

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div></div>
                <Link to={'/users'} className="btn btn-secondary btn-sm">
                    All Users
                </Link>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-6">
                    
                    <div className="card shadow-sm">
                        <div className="card-header text-center fw-semibold">
                            Add User
                        </div>

                        <div className="card-body">

                            {
                                errMsg &&
                                <div className='alert alert-danger text-center'>
                                    {errMsg}
                                </div>
                            }

                            <form onSubmit={handleSubmit}>

                                <div className='mb-3'>
                                    <label className="form-label">Name</label>
                                    <input 
                                        type="text" 
                                        className='form-control'
                                        onChange={(e) => setName(e.target.value)} 
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label className="form-label">Company Name</label>
                                    <input 
                                        type="text" 
                                        className='form-control'
                                        onChange={(e) => setCompanyName(e.target.value)} 
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label className="form-label">Email</label>
                                    <input 
                                        type="text" 
                                        className='form-control'
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />
                                </div>

                                <div className='mb-3'>
                                    <label className="form-label">Mobile</label>
                                    <input 
                                        type="text" 
                                        className='form-control'
                                        onChange={(e) => setPhone(e.target.value)} 
                                    />
                                </div>

                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">
                                        Add User
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AddUser