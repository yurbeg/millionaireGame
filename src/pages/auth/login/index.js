import { Form, Input, Button, notification } from "antd";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../services/firbase";
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { ROUTE_CONSTANTS } from "../../../core/constants/constants";
import "./index.css";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    setLoading(true);
    try {
      const { email, password } = values;
      await signInWithEmailAndPassword(auth, email, password);
      form.resetFields();
      navigate('/');
    } catch (error) {
      notification.error({
        message: 'Invalid Login Credentials',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form-container">
      <Form
        layout="vertical"
        form={form}
        onFinish={handleLogin}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input type="email" placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={loading} block>
          Sign in
        </Button>

        <Link to={ROUTE_CONSTANTS.REGSITER}>
          Create account
        </Link>
      </Form>
    </div>
  );
};

export default Login;
