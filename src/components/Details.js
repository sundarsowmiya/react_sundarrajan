import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "antd";
import '../App.css'

const Details = () =>{
    const [user, setUser] = useState('')
    useEffect(()=>{
        axios.get(process.env.REACT_APP_USER_API +'users/1')
            .then(res=>{
                setUser(res.data)
            })
    });
    return(
        <div>
            <Card title="User Details" style={{ width: 'auto', marginTop:'20px' }}>
               <table>
                   <thead>
                       <th>ID</th>
                       <th>Name</th>
                       <th>User Name</th>
                       <th>Email</th>
                       <th>Phone</th>
                       <th>Website</th>
                   </thead>
                   <tr>
                       <td>{user.id}</td>
                       <td>{user.name}</td>
                       <td>{user.username}</td>
                       <td>{user.email}</td>
                       <td>{user.phone}</td>
                       <td>{user.website}</td>
                   </tr>
               </table>
            </Card>
        </div>
    )
}

export default Details