import React from "react";
import { useState } from "react";
import CryptoJS from "crypto-js";
import { Form, Input, Button, Checkbox } from "antd";
import { withRouter } from "react-router-dom";

const Login = (props) => {
  const [data, setData] = useState(null);

  const onFinish = (values) => {
    // setData(values);

    var encryptedPassword = CryptoJS.AES.encrypt(
      values.password,
      values.username
    ).toString();
    setData({ ...values, password: encryptedPassword });
    localStorage.setItem(
      values.username,
      JSON.stringify({ email: values.username, password: encryptedPassword })
    );

    props.history.push("/dashboard");

    // value

    //encypt password

    //store
    //go to next page
    // console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 8,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Email"
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
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default withRouter(Login);
