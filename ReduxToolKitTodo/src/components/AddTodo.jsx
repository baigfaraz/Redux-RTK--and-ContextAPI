import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/TodoSlice";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const AddTodo = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmitClick = () => {
    if (!inputValue) {
      message.error("Please enter a todo description");
      return;
    }
    dispatch(addTodo(inputValue));
    setInputValue('');
  };
  return (
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
        label="Description"
        
        name="description"
        rules={[
          {
            required: true,
            message: "Please input some text",
          },
        ]}
      >
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your todo here..."
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={handleSubmitClick}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AddTodo;

