import { Button, Form, FormProps } from "antd";
import React, { useState } from "react";
import DemoContainer from "../../components/DemoContainer";
import FormListAndTable from "./FormListAndTable";
import OnlyTable from "./OnlyTable";

const FormExample: React.FC = () => {
  const [form] = Form.useForm();

  const [formData, setFormData] = useState<Record<string, any>>({});
  const onFinish: FormProps<FormData>["onFinish"] = (values) => {
    console.log(values);
    setFormData(values);
  };

  return (
    <DemoContainer formData={formData} title="表单嵌套表格">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          friends: [{}, {}],
          users: [{ name: 'hello' }, { name: 'world' }],
        }}>
        {/* Form.List 和 Table 结合实现 */}
        <FormListAndTable />
        {/* Table 实现 */}
        <OnlyTable formInstance={form} />

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </DemoContainer>
  );
};

export default FormExample;
