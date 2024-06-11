import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

export const Login = () => {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    const {setUser} = useContext(UserContext);
    const handleSubmit = (e)=>{
        e.preventDefault();
        setUser({Username, Password});

    }
    return (
        <div>
            
                <div class="mb-3">
                    <label class="form-label">User Name</label>
                    <input type="text" class="form-control" value={Username} onChange={(e)=> setUsername(e.target.value)}/>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" value={Password} onChange={(e)=> setPassword(e.target.value )}/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button onClick={handleSubmit} type="submit" class="btn btn-primary">Submit</button>
            
        </div>
    )
}
