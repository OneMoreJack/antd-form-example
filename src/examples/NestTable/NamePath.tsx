/**
 * @file 仅使用 `Table` 的实现
 */

import { Button, Form, FormProps, Input, InputNumber, Space } from "antd";
import Table, { ColumnProps } from "antd/es/table";
import React, { useState } from "react";
import DemoContainer from "../../components/DemoContainer";

const LIST_NAME = "users";

const NestTable: React.FC = () => {
  const [form] = Form.useForm();

  const [formData, setFormData] = useState<Record<string, any>>({});
  const onFinish: FormProps<FormData>["onFinish"] = (values) => {
    console.log(values);
    setFormData(values);
  };

  const handleAdd = () => {
    form.setFieldsValue({
      [LIST_NAME]: [...form.getFieldValue(LIST_NAME), {}],
    });
  };

  const handleDelete = (index: number) => {
    const list = form.getFieldValue(LIST_NAME);
    list.splice(index, 1);
    form.setFieldsValue({
      [LIST_NAME]: [...list],
    });
  };

  const columns: ColumnProps<any>[] = [
    {
      title: "Name",
      dataIndex: "name",
      render(value, records, index) {
        return (
          <Form.Item
            name={[LIST_NAME, index, "name"]}
            rules={[{ required: true, message: "required" }]}>
            <Input />
          </Form.Item>
        );
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      render(value, records, index) {
        return (
          <Form.Item
            name={[LIST_NAME, index, "age"]}
            rules={[{ required: true, message: "required" }]}>
            <InputNumber />
          </Form.Item>
        );
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      render(value, records, index) {
        return (
          <Form.Item name={[LIST_NAME, index, "address"]}>
            <Input />
          </Form.Item>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render(value, record, index) {
        return (
          <Space>
            <Button type="primary" shape="circle" onClick={() => handleAdd()}>
              +
            </Button>
            <Button danger shape="circle" onClick={() => handleDelete(index)}>
              -
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <DemoContainer formData={formData} title="表单嵌套表格(namePath)">
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          [LIST_NAME]: [{ name: "hello" }, { name: "world" }],
        }}>
        <Form.Item 
          label="Users" 
          tooltip={"只通过Table实现"} 
          shouldUpdate>
          {() => {
            const dataSource = form.getFieldValue(LIST_NAME);
            return (
              <Table
                size="small"
                bordered
                rowKey={(row) => row.name}
                dataSource={dataSource || []}
                columns={columns}
                pagination={false}
              />
            );
          }}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </DemoContainer>
  );
};

export default NestTable;
