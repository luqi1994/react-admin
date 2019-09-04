import React from 'react';
import {Menu, Icon} from 'antd';
import {Link} from "react-router-dom";
import config from "../route/config";

const menus = config.menus;
const renderMenuItem = item => (
    <Menu.Item key={item.key}>
        <Link to={item.key}>
            <Icon type={item.icon}/>
            <span>{item.title}</span>
        </Link>
    </Menu.Item>
);

class Menus extends React.Component {
    render() {
        return (
            < Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[menus[0].key]}
            >
                {menus && menus.map(item =>
                    renderMenuItem(item)
                )
                }
            </Menu>
        )
    }
}

export default Menus;