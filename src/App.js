import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Layout, Menu, Breadcrumb } from 'antd';
import 'antd/dist/antd.css'
import './App.css'


const { Header, Content, Footer } = Layout;

const MenuItem = Menu.Item
const BreadcrumbItem = Breadcrumb.Item

class App extends Component {
  render() {
    const {
      route: { routes }
    } = this.props
    return (
      <Layout>
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            
          >
            <MenuItem><Link to='/'>Home</Link></MenuItem>
            <MenuItem><Link to='/basket'>Basket</Link></MenuItem>
          </Menu>
        </Header>
        <Content style={{ padding: '20px 50px', margin: '0 auto', width: '90%' }}>
          <Breadcrumb>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>List</BreadcrumbItem>
            <BreadcrumbItem>App</BreadcrumbItem>
          </Breadcrumb>
          {renderRoutes(routes)}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Best app &copy; {new Date().getFullYear()} Created by Gopob
        </Footer>
      </Layout>
    )
  }
}

export default App