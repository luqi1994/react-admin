import React from 'react';
import './style/main.css'
import Routes from './route';
import { Layout,Icon } from 'antd';
import Menus from "./components/Menus";
import getStorage from './utils/Storage'
import locationTo from './route/location'

const { Header, Sider, Content } = Layout;

class Page extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo"/>
                    <Menus/>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            style={{marginTop:'20px'}}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <Icon
                            style={{position:'absolute',right:'0',marginTop:'20px'}}
                            className="trigger"
                            type={'user'}
                            onClick={()=>{
                                getStorage.removeItem('isLogin');
                                locationTo('/login');
                            }}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <Routes />
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Page;