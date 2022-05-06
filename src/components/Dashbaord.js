import React, { useEffect, useState } from "react";
import axios from 'axios'
import { Card } from "antd";

const Dashboard = () =>{
    const [value, setValue] = useState('')
    useEffect(()=>{
        axios.get(process.env.REACT_APP_USER_API +'users/1')
            .then(res=>{
                // setValue(res.data)
            localStorage.setItem('userData', JSON.stringify(res.data))
            setValue(localStorage.getItem('userData'))
            })
    });

    
    return(
        <div>
            <Card title="Dashboard" style={{ width: 'auto', marginTop:'20px' }}>
            <p><h2>Design language and framework</h2>
This is Ant Design's internal standard for evaluating design quality. Based on the assumption that "everyone is pursuing happiness at work", we have added the two values of "Meaningfulness" and "Growth" on the basis of "Certainty" and "Naturalness" to guide each designer towards better judgment and decision-making</p>
           <p><h2> How to use</h2>
           
          
Position: The selectable list is placed on the left panel, and the owning details panel is placed to the right of it (this is due to the user's accustomed left-to-right visual flow).
Interactive: When the user selects an item, a second panel immediately displays its content or details. The selection is done with a single click. In addition, you can use the up and down keys of the keyboard to change the browsing items to improve the operation efficiency.</p>
            </Card>
        </div>
    )
}

export default Dashboard