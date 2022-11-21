import { Button, Form, FormProps } from "antd";
import React from "react";
import FormListAndTable from "./FormListAndTable";
import OnlyTable from "./OnlyTable";

const FormExample: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish: FormProps<FormData>["onFinish"] = (values) => {
    console.log(values);
    // props.onValuesChange?.(values);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        friends: [{}, {}],
        users: [{}, {}],
      }}>
      <FormListAndTable />
      <OnlyTable formInstance={form} />

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormExample;
