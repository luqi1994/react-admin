import React from 'react';
import {Form, Icon, Input, Button, Checkbox, message} from 'antd';
import '../../style/main.css'
import locationTo from '../../route/location'
import {login} from "../../service";
import getStorage from '../../utils/Storage'

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {

    //state = {};

    // componentWillMount(){
    // }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                let params = {
                    username: values.username,
                    password: values.password
                };
                login(params).then(data => {
                    if (data) {
                        switch (data.data.data.code) {
                            case 0:
                                message.warn(data.data.data.meg);
                                break;
                            case 1:
                                message.success('登录成功');
                                getStorage.setItem('isLogin', true);
                                locationTo('/admin');
                                break;
                            default:
                                message.success('登录失败');
                                break;
                        }
                    }
                }).catch(err => {
                    message.error('请求失败，修复中...');
                })
            }
        })
    };

    render() {
        const {getFieldDecorator} = this.props.form;
        console.log('----------渲染-------------');
        return (
            <Form onSubmit={this.handleSubmit} className="login-form" style={{margin: '120px auto'}}>
                <FormItem>
                    {getFieldDecorator('username', {
                        rules: [{required: true, message: '请输入账号'}],
                    })(
                        <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                               placeholder="Username: admin"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: '请输入密码'}],
                    })(
                        <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                               placeholder="Password: admin"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>Remember me</Checkbox>
                    )}
                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const Login = Form.create()(NormalLoginForm);

export default Login
