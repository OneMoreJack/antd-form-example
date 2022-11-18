import { Button, Form, FormProps, Input, InputNumber } from "antd";
import React from "react";

type FormData = {
  name: string;
  age: number;
};

type FormExampleProps = {
  onFinish: (formData: FormData) => void;
}

const FormExample: React.FC<FormExampleProps> = (props) => {
  const onFinish: FormProps<FormData>["onFinish"] = (values) => {
    console.log(values);
    props.onFinish(values);
  };

  return (
    <Form<FormData>
      layout="vertical"
      labelCol={{ span: 2 }}
      wrapperCol={{ span: 20 }} 
      onFinish={onFinish}>
      <Form.Item label="Name" name={"name"}>
        <Input />
      </Form.Item>

      <Form.Item label="Age" name={"age"}>
        <InputNumber />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormExample;
