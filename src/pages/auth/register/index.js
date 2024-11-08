import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Form, Button, Input, Flex } from 'antd';
import { auth } from '../../../services/firbase';
import { regexpValidation, ROUTE_CONSTANTS } from '../../../core/constants/constants.js';
import { Link, useNavigate } from 'react-router-dom';


const Register = () => {
  const [loading, setLoading] = useState(false);
  const [form] =  Form.useForm();
  const navigate = useNavigate();
  const handleRegister =  async values => {
    setLoading(true);
    const {  email, password } = values;
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login");
    }catch (e) {
      console.log(e);
    } finally {
      setLoading(false)
    }
  }

  return (
      <Form layout="vertical" form={form} onFinish={handleRegister}>
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: 'Please input your First Name!'
            }
          ]}
        >
          <Input type="text" placeholder="First Name"/>
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: 'Please input your Last Name!'
            }
          ]}
        >
          <Input type="text" placeholder="Last Name"/>
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!'
            }
          ]}
        >
          <Input type="email" placeholder="Email"/>
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          tooltip="Passwrord must be min 6 max 16 characters ....."
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            },
            {
              pattern: regexpValidation,
              message: 'Wrong password'
            }
          ]}
        >
          <Input.Password placeholder="Password"/>
        </Form.Item>

        <Form.Item
          label="Config Password"
          name="confirm"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Please input your password!'
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if(!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error('The new password that you entered do not match!!!'));
              }
            })
          ]}
        >
          <Input.Password placeholder="Config Password"/>
        </Form.Item>

        <Flex align="flex-end" gap="10px" justify="flex-end">
          <Link to={ROUTE_CONSTANTS.LOGIN}>
            Sign in
          </Link>
          <Button type="primary" htmlType="submit" loading={loading}>
            Sign up
          </Button>
        </Flex>

      </Form>
  )
}
export default Register;





