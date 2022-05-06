import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css'
import AppRoute from "../Route";
import { Link } from "react-router-dom";
import { Layout, Menu, Avatar, Button  } from 'antd';
const { Header, Content, Footer, Sider } = Layout;

const Nav = () =>{
    const [user, setUser] = useState('')
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users/1')
            .then(res=>{
                setUser(res.data)
            })
    });
    return(
        <div>
            <Layout
                style={{
                minHeight: '100vh',
                }}
            >
                <Sider>
                <div className="logo my-10" align="center" style={{color:'white'}}>
                    <Avatar size={80} src="https://joeschmoe.io/api/v1/random" style={{margin:'10px 0px'}} />
                    <p className="my-10">{user.name}</p>
                    <p className="my-10">{user.email}</p>
                    <Link to="/details">
                        <Button type="link">More details</Button>
                    </Link>
                </div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            {/* <Menu.Item key="1">
                                <span>Home</span>
                                <Link to="/" />
                            </Menu.Item> */}
                            <Menu.Item key="2">
                                <span>Dashboard</span>
                                <Link to="/dashboard" />
                            </Menu.Item>
                            <Menu.Item key="3">
                                <span>Reports</span>
                                <Link to="/reports" />
                            </Menu.Item>
                        </Menu>
                </Sider>
                <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                    padding: 0,
                    }}
                />
                <Content
                    style={{
                    margin: '0 16px',
                    }}
                >
                    <div>
                        <AppRoute /> 
                    </div>
                </Content>
                <Footer
                    style={{
                    textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
                </Layout>
            </Layout>
        </div>
        
    )
}

export default Nav