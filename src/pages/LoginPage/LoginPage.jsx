import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import styles from './LoginPage.module.css'

const LoginPage = () => {

 
    const onFinish = (values) => {
      console.log('Received values of form: ', values);
    };

  return (
    <Form
      name="normal_login"
      className={styles.login_form}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input className={styles.input__login} prefix={<UserOutlined className={styles.site_form_item_icon} />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          className={styles.input__login}
          prefix={<LockOutlined className={styles.site_form_item_icon} />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <div className={styles.input__checkbox}>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className={styles.input__link} href="2#">
          Forgot password
        </a>
        </div>
      </Form.Item>

      <Form.Item className={styles.input__login}>
        <Button  type="primary" htmlType="submit" className={styles.login_form_button}>
          Log in
        </Button>
        <span className={styles.input__login}>Or<a href="2#">register now!</a></span>
      </Form.Item>
    </Form>
  )
}



export default LoginPage;