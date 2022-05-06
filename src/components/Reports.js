import React, { useState } from "react";
import axios from "axios";
import { Card } from "antd";
const Reports = () =>{
    const [value, setValue] = useState('')
    useState(()=>{
        axios.get(process.env.REACT_APP_USER_API +'users')
            .then(res=>{
                setValue(res.data)
            })
    })
    return(
        <div>
            <Card title="Reports" style={{ width: 'auto', marginTop:'20px' }}>
            <p><h2>Getting Started</h2>
Ant Design Pro is a production-ready solution for admin interfaces. Built on the design principles developed by Ant Design, this project introduces higher level components; we have developed templates, components, and a corresponding design kit to improve the user and development experience for admin interfaces.</p>
            <p><h2>Tips before development</h2>
Ant Design Pro is a front-end scaffolding. By default, readers have already understood some basic front-end knowledge, and understand umi and Ant Design. If you are a pure novice, it is recommended to read Beginner's Need to know. Sharpen the knife and chop wood by mistake. Knowing some basic knowledge can make the learning curve smoother.</p>
            </Card>
        </div>
    )
}

export default Reports