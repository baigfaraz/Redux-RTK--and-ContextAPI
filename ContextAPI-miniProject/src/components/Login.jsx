import React, { useContext } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import UserContext from "../context/UserContext";

const Login = () => {
  const { setUser } = useContext(UserContext);

  const onFinish = (values) => {
    setUser({
      username: values.username,
      password: values.password,
    });
    // console.log("Success:", values);
    alert("Login Success");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"> */}
        {/* <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-30 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div> */}

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
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
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button
                type="primary"
                className="w-full bg-green-900"
                htmlType="submit"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>

          {/* <p className="mt-10 text-center text-sm text-gray-500">
            Not have account yet?{" "}
            <Link
              to="/SignUpPage"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Login;
