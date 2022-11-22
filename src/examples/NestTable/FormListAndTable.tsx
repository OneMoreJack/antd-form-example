/**
 * @file `FormList` 和 `Table` 结合实现 
 */

import React from "react";
import {
  Button,
  ConfigProvider,
  Empty,
  Form,
  Input,
  InputNumber,
  Table,
  Space,
  type FormListFieldData,
  type FormListOperation,
} from "antd";

import { type ColumnProps } from "antd/es/table";

const FormListAndTable: React.FC = () => {
  const columns: ColumnProps<{
    field: FormListFieldData;
    operation: FormListOperation;
  }>[] = [
    {
      title: "Name",
      dataIndex: "name",
      render(value, { field }) {
        return (
          <Form.Item
            name={[field.name, "name"]}
            rules={[{ required: true, message: "required" }]}>
            <Input />
          </Form.Item>
        );
      },
    },
    {
      title: "Age",
      dataIndex: "age",
      render(value, { field }) {
        return (
          <Form.Item
            name={[field.name, "age"]}
            rules={[{ required: true, message: "required" }]}>
            <InputNumber />
          </Form.Item>
        );
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      render(value, { field }) {
        return (
          <Form.Item name={[field.name, "address"]}>
            <Input />
          </Form.Item>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "action",
      render(value, { operation }, index) {
        return (
          <Space>
            <Button
              type="primary"
              shape="circle"
              onClick={() => operation.add()}>
              +
            </Button>
            <Button
              danger
              shape="circle"
              onClick={() => operation.remove(index)}>
              -
            </Button>
          </Space>
        );
      },
    },
  ];

  return (
    <Form.Item label="Friends" tooltip={"Form.List 和 Table 结合实现"}>
      <Form.List name="friends">
        {(fields, operation) => {
          const dataSources = fields.map((field) => ({
            field,
            operation,
          }));
          return (
            <ConfigProvider
              renderEmpty={() => (
                <Empty description={false}>
                  <Button type="primary" ghost onClick={() => operation.add()}>
                    Add
                  </Button>
                </Empty>
              )}>
              <Table
                size="small"
                bordered
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
  );
};

export default FormListAndTable;
