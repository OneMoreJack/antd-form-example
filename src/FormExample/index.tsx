import {
  Button,
  ConfigProvider,
  Empty,
  Form,
  FormProps,
  Input,
  InputNumber,
  Table,
} from "antd";
import React from "react";
import useColumns from "./useColumns";

type FormData = {
  name: string;
  age: number;
};

type FormExampleProps = {
  onValuesChange?: (values: FormData) => void;
};

const FormExample: React.FC<FormExampleProps> = (props) => {
  const { columns } = useColumns();

  const onFinish: FormProps<FormData>["onFinish"] = (values) => {
    console.log(values);
    props.onValuesChange?.(values);
  };

  return (
    <Form<FormData> layout="vertical" onFinish={onFinish}>
      <Form.Item
        label="Name"
        name={"name"}
        rules={[{ required: true, message: "required" }]}>
        <Input />
      </Form.Item>

      <Form.Item
        label="Age"
        name={"age"}
        rules={[{ required: true, message: "required" }]}>
        <InputNumber />
      </Form.Item>

      <Form.Item label="Friends">
        <Form.List name="users">
          {(fields, operations) => {
            const dataSources = fields.map((field) => ({
              field,
              operations,
            }));
            return (
              <ConfigProvider
                renderEmpty={() => (
                  <Empty>
                    <Button type="primary" onClick={() => operations.add()}>
                      Add
                    </Button>
                  </Empty>
                )}>
                <Table
                  size="small"
                  rowKey={(row) => row.field.key}
                  dataSource={dataSources}
                  columns={columns}
                  pagination={false}
                />
              </ConfigProvider>
            );
          }}
        </Form.List>
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
